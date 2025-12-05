import { Test, TestingModule } from '@nestjs/testing';
import { LanceGateway } from './lance.gateway';
import { LanceService } from './lance.service';
import { DisputaService } from '../disputa/disputa.service';
import { WsJwtAuthGuard } from '../auth/guards/ws-jwt-auth.guard';
import { Socket } from 'socket.io';

describe('LanceGateway', () => {
    let gateway: LanceGateway;
    let service: LanceService;

    const mockLanceService = {
        buscarUltimoLance: jest.fn(),
        registrarLance: jest.fn(),
    };

    const mockDisputaService = {
        findOne: jest.fn(),
    };

    const mockServer = {
        to: jest.fn().mockReturnThis(),
        emit: jest.fn(),
    };

    const mockSocket = {
        id: 'socket1',
        handshake: {
            query: { disputaId: 'd1', tipoAutor: 'LICITANTE', licitanteId: 'l1' },
            address: '127.0.0.1',
            headers: { 'user-agent': 'agent' },
        },
        join: jest.fn(),
        disconnect: jest.fn(),
        emit: jest.fn(),
    } as unknown as Socket;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                LanceGateway,
                { provide: LanceService, useValue: mockLanceService },
                { provide: DisputaService, useValue: mockDisputaService },
            ],
        })
            .overrideGuard(WsJwtAuthGuard)
            .useValue({ canActivate: () => true })
            .compile();

        gateway = module.get<LanceGateway>(LanceGateway);
        service = module.get<LanceService>(LanceService);
        gateway.server = mockServer as any;
    });

    it('should be defined', () => {
        expect(gateway).toBeDefined();
    });

    describe('handleConnection', () => {
        it('should handle connection successfully', async () => {
            mockLanceService.buscarUltimoLance.mockResolvedValue({ id: 'l1' });
            await gateway.handleConnection(mockSocket);

            expect(mockSocket.join).toHaveBeenCalledWith('d1');
            expect(mockServer.to).toHaveBeenCalledWith('d1');
            expect(mockServer.emit).toHaveBeenCalledWith('usuariosOnline', expect.any(Object));
            expect(service.buscarUltimoLance).toHaveBeenCalledWith('d1');
            // Wait for promise resolution
            await new Promise(process.nextTick);
            expect(mockSocket.emit).toHaveBeenCalledWith('ultimoLance', { id: 'l1' });
        });

        it('should disconnect if no disputaId', () => {
            const badSocket = { ...mockSocket, handshake: { query: {} }, disconnect: jest.fn() } as unknown as Socket;
            gateway.handleConnection(badSocket);
            expect(badSocket.disconnect).toHaveBeenCalled();
        });
    });

    describe('handleDisconnect', () => {
        it('should handle disconnection', () => {
            // First connect to populate map
            gateway.handleConnection(mockSocket);

            gateway.handleDisconnect(mockSocket);
            expect(mockServer.to).toHaveBeenCalledWith('d1');
            expect(mockServer.emit).toHaveBeenCalledWith('usuariosOnline', expect.any(Object));
        });
    });

    describe('handleNovoLance', () => {
        it('should handle new bid', async () => {
            const data = { valorCentavos: 1000 };
            mockLanceService.registrarLance.mockResolvedValue({ id: 'l1' });

            const result = await gateway.handleNovoLance(mockSocket, data);

            expect(result).toEqual({ success: true, lance: { id: 'l1' } });
            expect(service.registrarLance).toHaveBeenCalledWith('d1', 'l1', 1000, '127.0.0.1', 'agent');
            expect(mockServer.to).toHaveBeenCalledWith('d1');
            expect(mockServer.emit).toHaveBeenCalledWith('lanceRegistrado', { id: 'l1' });
        });

        it('should return error if data invalid', async () => {
            const result = await gateway.handleNovoLance(mockSocket, { valorCentavos: 0 });
            expect(result).toHaveProperty('error');
        });

        it('should handle service error', async () => {
            mockLanceService.registrarLance.mockRejectedValue(new Error('Service error'));
            const result = await gateway.handleNovoLance(mockSocket, { valorCentavos: 1000 });
            expect(result).toEqual({ error: 'Service error' });
        });
    });
});
