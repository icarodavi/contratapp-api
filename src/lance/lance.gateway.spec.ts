import { Test, TestingModule } from '@nestjs/testing';
import { LanceGateway } from './lance.gateway';
import { LanceService } from './lance.service';
import { Socket } from 'socket.io';
import { WsJwtAuthGuard } from '../auth/guards/ws-jwt-auth.guard';

describe('LanceGateway', () => {
    let gateway: LanceGateway;
    let lanceService: LanceService;

    const mockLanceService = {
        buscarUltimoLance: jest.fn(),
        registrarLance: jest.fn(),
    };

    const mockSocket = {
        handshake: {
            query: {
                disputaId: 'd1',
                tipoAutor: 'LICITANTE',
                licitanteId: 'l1',
            },
            address: '127.0.0.1',
            headers: {
                'user-agent': 'TestAgent',
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
                LanceGateway,
                { provide: LanceService, useValue: mockLanceService },
            ],
        })
            .overrideGuard(WsJwtAuthGuard)
            .useValue({ canActivate: () => true })
            .compile();

        gateway = module.get<LanceGateway>(LanceGateway);
        lanceService = module.get<LanceService>(LanceService);
        gateway.server = mockServer as any;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('handleConnection', () => {
        it('should disconnect if missing disputaId', async () => {
            const client = { ...mockSocket, handshake: { query: {} } } as unknown as Socket;
            gateway.handleConnection(client);
            expect(client.disconnect).toHaveBeenCalled();
        });

        it('should join room and emit user count', async () => {
            mockLanceService.buscarUltimoLance.mockResolvedValue(null);
            gateway.handleConnection(mockSocket);
            expect(mockSocket.join).toHaveBeenCalledWith('d1');
            expect(mockServer.to).toHaveBeenCalledWith('d1');
            expect(mockServer.emit).toHaveBeenCalledWith('usuariosOnline', expect.any(Object));
        });

        it('should emit last bid if exists', async () => {
            const lance = { id: 'l1', valor: 100 };
            mockLanceService.buscarUltimoLance.mockResolvedValue(lance);

            gateway.handleConnection(mockSocket);

            // Wait for promise resolution
            await new Promise(resolve => setImmediate(resolve));

            expect(mockSocket.emit).toHaveBeenCalledWith('ultimoLance', lance);
        });
    });

    describe('handleDisconnect', () => {
        it('should update user count', async () => {
            gateway.handleConnection(mockSocket);
            gateway.handleDisconnect(mockSocket);
            expect(mockServer.emit).toHaveBeenCalledWith('usuariosOnline', expect.objectContaining({ quantidade: 0 }));
        });
    });

    describe('handleNovoLance', () => {
        it('should return error if missing data', async () => {
            const result = await gateway.handleNovoLance(mockSocket, { valorCentavos: 0 });
            expect(result).toHaveProperty('error');
        });

        it('should register and broadcast bid', async () => {
            const lance = { id: 'l1', valor: 100 };
            mockLanceService.registrarLance.mockResolvedValue(lance);

            const result = await gateway.handleNovoLance(mockSocket, { valorCentavos: 100 });

            expect(result).toEqual({ success: true, lance });
            expect(mockLanceService.registrarLance).toHaveBeenCalledWith('d1', 'l1', 100, '127.0.0.1', 'TestAgent');
            expect(mockServer.to).toHaveBeenCalledWith('d1');
            expect(mockServer.emit).toHaveBeenCalledWith('lanceRegistrado', lance);
        });

        it('should return error if service fails', async () => {
            mockLanceService.registrarLance.mockRejectedValue(new Error('Service Error'));
            const result = await gateway.handleNovoLance(mockSocket, { valorCentavos: 100 });
            expect(result).toHaveProperty('error', 'Service Error');
        });
    });
});
