import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

describe('ItemController', () => {
    let controller: ItemController;
    let service: ItemService;

    const mockItemService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        findByLote: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ItemController],
            providers: [
                { provide: ItemService, useValue: mockItemService },
            ],
        }).compile();

        controller = module.get<ItemController>(ItemController);
        service = module.get<ItemService>(ItemService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create an item', async () => {
            const dto: any = { numero: '001' };
            mockItemService.create.mockResolvedValue(dto);
            expect(await controller.create(dto)).toEqual(dto);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all items', async () => {
            mockItemService.findAll.mockResolvedValue([]);
            expect(await controller.findAll()).toEqual([]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return an item', async () => {
            mockItemService.findOne.mockResolvedValue({ id: 'i1' });
            expect(await controller.findOne('i1')).toEqual({ id: 'i1' });
            expect(service.findOne).toHaveBeenCalledWith('i1');
        });
    });

    describe('findByLote', () => {
        it('should return items by lote', async () => {
            mockItemService.findByLote.mockResolvedValue([]);
            expect(await controller.findByLote('l1')).toEqual([]);
            expect(service.findByLote).toHaveBeenCalledWith('l1');
        });
    });

    describe('update', () => {
        it('should update an item', async () => {
            const dto: any = { descricao: 'Updated' };
            mockItemService.update.mockResolvedValue(dto);
            expect(await controller.update('i1', dto)).toEqual(dto);
            expect(service.update).toHaveBeenCalledWith('i1', dto);
        });
    });

    describe('remove', () => {
        it('should remove an item', async () => {
            mockItemService.remove.mockResolvedValue({ id: 'i1' });
            expect(await controller.remove('i1')).toEqual({ id: 'i1' });
            expect(service.remove).toHaveBeenCalledWith('i1');
        });
    });
});
