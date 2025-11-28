import { Test, TestingModule } from '@nestjs/testing';
import { LoteController } from './lote.controller';
import { LoteService } from './lote.service';

describe('LoteController', () => {
    let controller: LoteController;
    let service: LoteService;

    const mockLoteService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        findByEdital: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [LoteController],
            providers: [
                { provide: LoteService, useValue: mockLoteService },
            ],
        }).compile();

        controller = module.get<LoteController>(LoteController);
        service = module.get<LoteService>(LoteService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create a lote', async () => {
            const dto: any = { numero: 'LOTE-001' };
            mockLoteService.create.mockResolvedValue(dto);
            expect(await controller.create(dto)).toEqual(dto);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all lotes', async () => {
            mockLoteService.findAll.mockResolvedValue([]);
            expect(await controller.findAll()).toEqual([]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a lote', async () => {
            mockLoteService.findOne.mockResolvedValue({ id: 'l1' });
            expect(await controller.findOne('l1')).toEqual({ id: 'l1' });
            expect(service.findOne).toHaveBeenCalledWith('l1');
        });
    });

    describe('findByEdital', () => {
        it('should return lotes by edital', async () => {
            mockLoteService.findByEdital.mockResolvedValue([]);
            expect(await controller.findByEdital('e1')).toEqual([]);
            expect(service.findByEdital).toHaveBeenCalledWith('e1');
        });
    });

    describe('update', () => {
        it('should update a lote', async () => {
            const dto: any = { descricao: 'Updated' };
            mockLoteService.update.mockResolvedValue(dto);
            expect(await controller.update('l1', dto)).toEqual(dto);
            expect(service.update).toHaveBeenCalledWith('l1', dto);
        });
    });

    describe('remove', () => {
        it('should remove a lote', async () => {
            mockLoteService.remove.mockResolvedValue({ id: 'l1' });
            expect(await controller.remove('l1')).toEqual({ id: 'l1' });
            expect(service.remove).toHaveBeenCalledWith('l1');
        });
    });
});
