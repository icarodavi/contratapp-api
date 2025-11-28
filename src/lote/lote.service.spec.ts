import { Test, TestingModule } from '@nestjs/testing';
import { LoteService } from './lote.service';
import { PrismaService } from '@/database/database.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';

const mockPrismaService = {
    edital: {
        findUnique: jest.fn(),
    },
    lote: {
        findFirst: jest.fn(),
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
};

describe('LoteService', () => {
    let service: LoteService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                LoteService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<LoteService>(LoteService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        const createDto = {
            numero: 'LOTE-001',
            descricao: 'Lote 1',
            editalId: 'e1',
        };

        it('should create a lote successfully', async () => {
            prisma.edital.findUnique.mockResolvedValue({ id: 'e1' });
            prisma.lote.findFirst.mockResolvedValue(null);
            prisma.lote.create.mockResolvedValue({ id: 'l1', ...createDto, status: 'ATIVO' });

            const result = await service.create(createDto);
            expect(result).toHaveProperty('id', 'l1');
            expect(prisma.lote.create).toHaveBeenCalled();
        });

        it('should throw NotFoundException if edital not found', async () => {
            prisma.edital.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });

        it('should throw BadRequestException if lote number already exists in edital', async () => {
            prisma.edital.findUnique.mockResolvedValue({ id: 'e1' });
            prisma.lote.findFirst.mockResolvedValue({ id: 'existing' });
            await expect(service.create(createDto)).rejects.toThrow(BadRequestException);
        });
    });

    describe('findAll', () => {
        it('should return all lotes', async () => {
            prisma.lote.findMany.mockResolvedValue([{ id: 'l1' }]);
            const result = await service.findAll();
            expect(result).toHaveLength(1);
        });
    });

    describe('findOne', () => {
        it('should return a lote if found', async () => {
            prisma.lote.findUnique.mockResolvedValue({ id: 'l1' });
            const result = await service.findOne('l1');
            expect(result).toHaveProperty('id', 'l1');
        });

        it('should throw NotFoundException if not found', async () => {
            prisma.lote.findUnique.mockResolvedValue(null);
            await expect(service.findOne('l1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findByEdital', () => {
        it('should return lotes for an edital', async () => {
            prisma.lote.findMany.mockResolvedValue([{ id: 'l1', editalId: 'e1' }]);
            const result = await service.findByEdital('e1');
            expect(result).toHaveLength(1);
            expect(prisma.lote.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { editalId: 'e1' } }));
        });
    });

    describe('update', () => {
        it('should update a lote', async () => {
            prisma.lote.findUnique.mockResolvedValue({ id: 'l1', editalId: 'e1', numero: 'LOTE-001' });
            prisma.lote.update.mockResolvedValue({ id: 'l1', descricao: 'Updated' });

            const result = await service.update('l1', { descricao: 'Updated' });
            expect(result.descricao).toBe('Updated');
        });

        it('should throw NotFoundException if lote not found', async () => {
            prisma.lote.findUnique.mockResolvedValue(null);
            await expect(service.update('l1', {})).rejects.toThrow(NotFoundException);
        });

        it('should throw BadRequestException if new number already exists', async () => {
            prisma.lote.findUnique.mockResolvedValue({ id: 'l1', editalId: 'e1', numero: 'LOTE-001' });
            prisma.lote.findFirst.mockResolvedValue({ id: 'other' });

            await expect(service.update('l1', { numero: 'LOTE-002' })).rejects.toThrow(BadRequestException);
        });
    });

    describe('remove', () => {
        it('should remove a lote', async () => {
            prisma.lote.findUnique.mockResolvedValue({ id: 'l1', itens: [] });
            prisma.lote.delete.mockResolvedValue({ id: 'l1' });

            await service.remove('l1');
            expect(prisma.lote.delete).toHaveBeenCalled();
        });

        it('should throw NotFoundException if lote not found', async () => {
            prisma.lote.findUnique.mockResolvedValue(null);
            await expect(service.remove('l1')).rejects.toThrow(NotFoundException);
        });

        it('should throw BadRequestException if lote has items', async () => {
            prisma.lote.findUnique.mockResolvedValue({ id: 'l1', itens: [{ id: 'i1' }] });
            await expect(service.remove('l1')).rejects.toThrow(BadRequestException);
        });
    });
});
