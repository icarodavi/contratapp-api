import { Test, TestingModule } from '@nestjs/testing';
import { TimeGateway } from './time.gateway';
import { DisputaService } from '../disputa/disputa.service';
import { WsJwtAuthGuard } from '../auth/guards/ws-jwt-auth.guard';
import { Socket } from 'socket.io';

describe('TimeGateway', () => {
    let gateway: TimeGateway;
    let disputaService: DisputaService;

    const mockDisputaService = {
        findByEdital: jest.fn(),
        encerrarDisputa: jest.fn(),
    };

    const mockServer = {
        to: jest.fn().mockReturnThis(),
        emit: jest.fn(),
    };

    const mockSocket = {
        id: 'socket1',
        handshake: {
            query: { editalId: 'e1', tipoAutor: 'PREGOEIRO' },
        },
        join: jest.fn(),
        disconnect: jest.fn(),
        emit: jest.fn(),
    } as unknown as Socket;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TimeGateway,
                { provide: DisputaService, useValue: mockDisputaService },
            ],
        })
            .overrideGuard(WsJwtAuthGuard)
            .useValue({ canActivate: () => true })
            .compile();

        gateway = module.get<TimeGateway>(TimeGateway);
        disputaService = module.get<DisputaService>(DisputaService);
        gateway.server = mockServer as any;

        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.useRealTimers();
    });

    it('should be defined', () => {
        expect(gateway).toBeDefined();
    });

    describe('handleConnection', () => {
        it('should handle connection successfully', () => {
            gateway.handleConnection(mockSocket);

            expect(mockSocket.join).toHaveBeenCalledWith('e1');
            expect(mockServer.to).toHaveBeenCalledWith('e1');
            expect(mockServer.emit).toHaveBeenCalledWith('usuariosOnline', expect.any(Object));
        });

        it('should disconnect if no editalId', () => {
            const badSocket = { ...mockSocket, handshake: { query: {} }, disconnect: jest.fn() } as unknown as Socket;
            gateway.handleConnection(badSocket);
            expect(badSocket.disconnect).toHaveBeenCalled();
        });

        it('should send current timer state if active', async () => {
            // Start a timer first
            await gateway.handleIniciarContagem(mockSocket, { tempoInicial: 60000 });

            // Connect a new client
            const newSocket = { ...mockSocket, id: 'socket2', emit: jest.fn() } as unknown as Socket;
            gateway.handleConnection(newSocket);

            expect(newSocket.emit).toHaveBeenCalledWith('contagemIniciada', expect.any(Object));
        });
    });

    describe('handleDisconnect', () => {
        it('should handle disconnection', () => {
            gateway.handleConnection(mockSocket);
            gateway.handleDisconnect(mockSocket);
            expect(mockServer.to).toHaveBeenCalledWith('e1');
            expect(mockServer.emit).toHaveBeenCalledWith('usuariosOnline', expect.any(Object));
        });
    });

    describe('handleIniciarContagem', () => {
        it('should start countdown', async () => {
            const result = await gateway.handleIniciarContagem(mockSocket, { tempoInicial: 60000 });
            expect(result).toEqual({ success: true });
            expect(mockServer.to).toHaveBeenCalledWith('e1');
            expect(mockServer.emit).toHaveBeenCalledWith('contagemIniciada', expect.any(Object));
        });

        it('should fail if not PREGOEIRO', async () => {
            const badSocket = { ...mockSocket, handshake: { query: { editalId: 'e1', tipoAutor: 'LICITANTE' } } } as unknown as Socket;
            const result = await gateway.handleIniciarContagem(badSocket, { tempoInicial: 60000 });
            expect(result).toHaveProperty('error');
        });

        it('should update countdown and finish', async () => {
            await gateway.handleIniciarContagem(mockSocket, { tempoInicial: 2000 }); // 2 seconds

            // Advance time by 1.1 seconds
            jest.advanceTimersByTime(1100);
            expect(mockServer.emit).toHaveBeenCalledWith('atualizacaoContagem', expect.any(Object));

            // Mock disputa service for finish
            mockDisputaService.findByEdital.mockResolvedValue([{ id: 'd1', status: 'ABERTA' }]);

            // Advance time by another 1.1 seconds (total 2.2s)
            jest.advanceTimersByTime(1100);

            // Wait for async operations triggered by setInterval
            await Promise.resolve();
            await Promise.resolve();
            await Promise.resolve();

            expect(mockServer.emit).toHaveBeenCalledWith('contagemFinalizada');
            expect(disputaService.encerrarDisputa).toHaveBeenCalledWith('d1');
        });
    });

    describe('handlePausarContagem', () => {
        it('should pause countdown', async () => {
            await gateway.handleIniciarContagem(mockSocket, { tempoInicial: 60000 });
            const result = await gateway.handlePausarContagem(mockSocket);
            expect(result).toEqual({ success: true });
            expect(mockServer.emit).toHaveBeenCalledWith('contagemPausada', expect.any(Object));
        });
    });

    describe('handleRetomarContagem', () => {
        it('should resume countdown', async () => {
            await gateway.handleIniciarContagem(mockSocket, { tempoInicial: 60000 });
            await gateway.handlePausarContagem(mockSocket);
            const result = await gateway.handleRetomarContagem(mockSocket);
            expect(result).toEqual({ success: true });
            expect(mockServer.emit).toHaveBeenCalledWith('contagemRetomada', expect.any(Object));
        });
    });
});
