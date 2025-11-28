import { Test, TestingModule } from '@nestjs/testing';
import { ItemService } from './item.service';
import { PrismaService } from '@/database/database.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';

const mockPrismaService = {
    lote: {
        findUnique: jest.fn(),
    },
    item: {
        findFirst: jest.fn(),
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
};

describe('ItemService', () => {
    let service: ItemService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ItemService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<ItemService>(ItemService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        const createDto = {
            numero: '001',
            descricao: 'Item 1',
            quantidade: 10,
            unidade: 'UN',
            loteId: 'l1',
            valorEstimado: 1000,
        };

        it('should create an item successfully', async () => {
            prisma.lote.findUnique.mockResolvedValue({ id: 'l1' });
            prisma.item.findFirst.mockResolvedValue(null);
            prisma.item.create.mockResolvedValue({ id: 'i1', ...createDto, status: 'ATIVO' });

            const result = await service.create(createDto);
            expect(result).toHaveProperty('id', 'i1');
            expect(prisma.item.create).toHaveBeenCalled();
        });

        it('should throw NotFoundException if lote not found', async () => {
            prisma.lote.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });

        it('should throw BadRequestException if item number already exists in lote', async () => {
            prisma.lote.findUnique.mockResolvedValue({ id: 'l1' });
            prisma.item.findFirst.mockResolvedValue({ id: 'existing' });
            await expect(service.create(createDto)).rejects.toThrow(BadRequestException);
        });
    });

    describe('findAll', () => {
        it('should return all items', async () => {
            prisma.item.findMany.mockResolvedValue([{ id: 'i1' }]);
            const result = await service.findAll();
            expect(result).toHaveLength(1);
        });
    });

    describe('findOne', () => {
        it('should return an item if found', async () => {
            prisma.item.findUnique.mockResolvedValue({ id: 'i1' });
            const result = await service.findOne('i1');
            expect(result).toHaveProperty('id', 'i1');
        });

        it('should throw NotFoundException if not found', async () => {
            prisma.item.findUnique.mockResolvedValue(null);
            await expect(service.findOne('i1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findByLote', () => {
        it('should return items for a lote', async () => {
            prisma.item.findMany.mockResolvedValue([{ id: 'i1', loteId: 'l1' }]);
            const result = await service.findByLote('l1');
            expect(result).toHaveLength(1);
            expect(prisma.item.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { loteId: 'l1' } }));
        });
    });

    describe('update', () => {
        it('should update an item', async () => {
            prisma.item.findUnique.mockResolvedValue({ id: 'i1', loteId: 'l1', numero: '001' });
            prisma.item.update.mockResolvedValue({ id: 'i1', descricao: 'Updated' });

            const result = await service.update('i1', { descricao: 'Updated' });
            expect(result.descricao).toBe('Updated');
        });

        it('should throw NotFoundException if item not found', async () => {
            prisma.item.findUnique.mockResolvedValue(null);
            await expect(service.update('i1', {})).rejects.toThrow(NotFoundException);
        });

        it('should throw BadRequestException if new number already exists', async () => {
            prisma.item.findUnique.mockResolvedValue({ id: 'i1', loteId: 'l1', numero: '001' });
            prisma.item.findFirst.mockResolvedValue({ id: 'other' });

            await expect(service.update('i1', { numero: '002' })).rejects.toThrow(BadRequestException);
        });
    });

    describe('remove', () => {
        it('should remove an item', async () => {
            prisma.item.findUnique.mockResolvedValue({ id: 'i1', propostas: [] });
            prisma.item.delete.mockResolvedValue({ id: 'i1' });

            await service.remove('i1');
            expect(prisma.item.delete).toHaveBeenCalled();
        });

        it('should throw NotFoundException if item not found', async () => {
            prisma.item.findUnique.mockResolvedValue(null);
            await expect(service.remove('i1')).rejects.toThrow(NotFoundException);
        });

        it('should throw BadRequestException if item has proposals', async () => {
            prisma.item.findUnique.mockResolvedValue({ id: 'i1', propostas: [{ id: 'p1' }] });
            await expect(service.remove('i1')).rejects.toThrow(BadRequestException);
        });
    });
});
