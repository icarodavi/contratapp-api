import { Test, TestingModule } from '@nestjs/testing';
import { LanceController } from './lance.controller';
import { LanceService } from './lance.service';
import { JwtAuthGuard } from '@/auth/auth.guard';
import { RolesGuard } from '@/auth/guards/roles.guard';

describe('LanceController', () => {
    let controller: LanceController;
    let service: LanceService;

    const mockLanceService = {
        registrarLance: jest.fn(),
        buscarLancesPorDisputa: jest.fn(),
        buscarUltimoLance: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [LanceController],
            providers: [
                { provide: LanceService, useValue: mockLanceService },
            ],
        })
            .overrideGuard(JwtAuthGuard)
            .useValue({ canActivate: () => true })
            .overrideGuard(RolesGuard)
            .useValue({ canActivate: () => true })
            .compile();

        controller = module.get<LanceController>(LanceController);
        service = module.get<LanceService>(LanceService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('registrarLance', () => {
        it('should register a bid', async () => {
            const dto = { valorCentavos: 1000 };
            const req = { user: { id: 'u1' }, ip: '127.0.0.1', headers: { 'user-agent': 'agent' } };
            const result = { id: 'l1' };
            mockLanceService.registrarLance.mockResolvedValue(result);

            expect(await controller.registrarLance('d1', dto, req)).toEqual(result);
            expect(service.registrarLance).toHaveBeenCalledWith('d1', 'u1', 1000, '127.0.0.1', 'agent');
        });
    });

    describe('buscarLancesPorDisputa', () => {
        it('should return bids for a dispute', async () => {
            const result = [{ id: 'l1' }];
            mockLanceService.buscarLancesPorDisputa.mockResolvedValue(result);

            expect(await controller.buscarLancesPorDisputa('d1')).toEqual(result);
            expect(service.buscarLancesPorDisputa).toHaveBeenCalledWith('d1');
        });
    });

    describe('buscarUltimoLance', () => {
        it('should return the last bid', async () => {
            const result = { id: 'l1' };
            mockLanceService.buscarUltimoLance.mockResolvedValue(result);

            expect(await controller.buscarUltimoLance('d1')).toEqual(result);
            expect(service.buscarUltimoLance).toHaveBeenCalledWith('d1');
        });
    });
});
