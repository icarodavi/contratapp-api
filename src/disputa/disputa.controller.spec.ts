import { Test, TestingModule } from '@nestjs/testing';
import { DisputaController } from './disputa.controller';
import { DisputaService } from './disputa.service';
import { DisputaStatus } from '@generated/prisma/client';

describe('DisputaController', () => {
    let controller: DisputaController;
    let service: DisputaService;

    const mockDisputaService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        findByEdital: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DisputaController],
            providers: [
                { provide: DisputaService, useValue: mockDisputaService },
            ],
        }).compile();

        controller = module.get<DisputaController>(DisputaController);
        service = module.get<DisputaService>(DisputaService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a dispute', async () => {
            const dto = { editalId: 'e1', dataInicio: new Date(), dataFimPrevisto: new Date(), status: DisputaStatus.AGUARDANDO };
            mockDisputaService.create.mockResolvedValue(dto);
            expect(await controller.create(dto)).toEqual(dto);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all disputes', async () => {
            mockDisputaService.findAll.mockResolvedValue([]);
            expect(await controller.findAll()).toEqual([]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a dispute', async () => {
            const result = { id: 'd1' };
            mockDisputaService.findOne.mockResolvedValue(result);
            expect(await controller.findOne('d1')).toEqual(result);
            expect(service.findOne).toHaveBeenCalledWith('d1');
        });
    });

    describe('findByEdital', () => {
        it('should return disputes by edital', async () => {
            mockDisputaService.findByEdital.mockResolvedValue([]);
            expect(await controller.findByEdital('e1')).toEqual([]);
            expect(service.findByEdital).toHaveBeenCalledWith('e1');
        });
    });

    describe('update', () => {
        it('should update a dispute', async () => {
            const dto = { status: DisputaStatus.ABERTA };
            const result = { id: 'd1', ...dto };
            mockDisputaService.update.mockResolvedValue(result);
            expect(await controller.update('d1', dto)).toEqual(result);
            expect(service.update).toHaveBeenCalledWith('d1', dto);
        });
    });

    describe('remove', () => {
        it('should remove a dispute', async () => {
            const result = { id: 'd1' };
            mockDisputaService.remove.mockResolvedValue(result);
            expect(await controller.remove('d1')).toEqual(result);
            expect(service.remove).toHaveBeenCalledWith('d1');
        });
    });
});
