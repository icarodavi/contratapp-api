import { Test, TestingModule } from '@nestjs/testing';
import { TimeGateway } from './time.gateway';
import { DisputaService } from '../disputa/disputa.service';
import { Socket } from 'socket.io';
import { WsJwtAuthGuard } from '../auth/guards/ws-jwt-auth.guard';

describe('TimeGateway', () => {
    let gateway: TimeGateway;
    let disputaService: DisputaService;

    const mockDisputaService = {
        findByEdital: jest.fn(),
        encerrarDisputa: jest.fn(),
    };

    const mockSocket = {
        handshake: {
            query: {
                editalId: 'e1',
                tipoAutor: 'PREGOEIRO',
            },
        },
        disconnect: jest.fn(),
        join: jest.fn(),
        emit: jest.fn(),
        id: 'socket1',
    } as unknown as Socket;

    const mockServer = {
        to: jest.fn().mockReturnThis(),
        emit: jest.fn(),
    };

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

        jest.useFakeTimers({ doNotFake: ['Date'] });
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    describe('handleConnection', () => {
        it('should disconnect if missing editalId', async () => {
            const client = { ...mockSocket, handshake: { query: {} } } as unknown as Socket;
            gateway.handleConnection(client);
            expect(client.disconnect).toHaveBeenCalled();
        });

        it('should join room and emit user count', async () => {
            gateway.handleConnection(mockSocket);
            expect(mockSocket.join).toHaveBeenCalledWith('e1');
            expect(mockServer.to).toHaveBeenCalledWith('e1');
            expect(mockServer.emit).toHaveBeenCalledWith('usuariosOnline', expect.any(Object));
        });
    });

    describe('handleDisconnect', () => {
        it('should update user count', async () => {
            gateway.handleConnection(mockSocket);
            gateway.handleDisconnect(mockSocket);
            expect(mockServer.emit).toHaveBeenCalledWith('usuariosOnline', expect.objectContaining({ quantidade: 0 }));
        });
    });

    describe('handleIniciarContagem', () => {
        it('should start timer if PREGOEIRO', async () => {
            await gateway.handleIniciarContagem(mockSocket, { tempoInicial: 10000 });
            expect(mockServer.emit).toHaveBeenCalledWith('contagemIniciada', expect.any(Object));
        });

        it('should not start timer if not PREGOEIRO', async () => {
            const client = { ...mockSocket, handshake: { query: { ...mockSocket.handshake.query, tipoAutor: 'LICITANTE' } } } as unknown as Socket;
            const result = await gateway.handleIniciarContagem(client, { tempoInicial: 10000 });
            expect(result).toHaveProperty('error');
        });

        it('should finish timer and close dispute', async () => {
            mockDisputaService.findByEdital.mockResolvedValue([{ id: 'd1', status: 'ABERTA' }]);

            const now = 1000000;
            const dateSpy = jest.spyOn(Date, 'now').mockReturnValue(now);

            await gateway.handleIniciarContagem(mockSocket, { tempoInicial: 10000 });
            await gateway.handlePausarContagem(mockSocket);
            expect(mockServer.emit).toHaveBeenCalledWith('contagemPausada', expect.any(Object));
        });
    });

    describe('handleRetomarContagem', () => {
        it('should resume timer', async () => {
            await gateway.handleIniciarContagem(mockSocket, { tempoInicial: 10000 });
            await gateway.handlePausarContagem(mockSocket);
            await gateway.handleRetomarContagem(mockSocket);
            expect(mockServer.emit).toHaveBeenCalledWith('contagemRetomada', expect.any(Object));
        });
    });
});
