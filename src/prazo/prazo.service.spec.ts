import { Test, TestingModule } from '@nestjs/testing';
import { PrazoService } from './prazo.service';
import { PrismaService } from '@/database/database.service';
import { NotFoundException } from '@nestjs/common';
import { TipoPrazo, StatusPrazo } from '@prisma/client';

const mockPrismaService = {
    edital: { findUnique: jest.fn() },
    licitante: { findUnique: jest.fn() },
    item: { findUnique: jest.fn() },
    usuario: { findUnique: jest.fn() },
    prazo: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
        updateMany: jest.fn(),
    },
};

describe('PrazoService', () => {
    let service: PrazoService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PrazoService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<PrazoService>(PrazoService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        const createDto = {
            tipo: TipoPrazo.ENTREGA_DOCUMENTOS,
            descricao: 'Prazo 1',
            dataInicio: new Date(),
            dataFim: new Date(),
            editalId: 'e1',
            criadoPor: 'u1',
            licitanteId: 'l1',
            itemId: 'i1',
        };

        it('should create a deadline successfully', async () => {
            prisma.edital.findUnique.mockResolvedValue({ id: 'e1' });
            prisma.licitante.findUnique.mockResolvedValue({ id: 'l1' });
            prisma.item.findUnique.mockResolvedValue({ id: 'i1' });
            prisma.usuario.findUnique.mockResolvedValue({ id: 'u1' });
            prisma.prazo.create.mockResolvedValue({ id: 'p1', ...createDto, status: StatusPrazo.PENDENTE });

            const result = await service.create(createDto);
            expect(result).toHaveProperty('id', 'p1');
            expect(prisma.prazo.create).toHaveBeenCalled();
        });

        it('should throw NotFoundException if edital not found', async () => {
            prisma.edital.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });

        it('should throw NotFoundException if licitante not found', async () => {
            prisma.edital.findUnique.mockResolvedValue({ id: 'e1' });
            prisma.licitante.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });

        it('should throw NotFoundException if item not found', async () => {
            prisma.edital.findUnique.mockResolvedValue({ id: 'e1' });
            prisma.licitante.findUnique.mockResolvedValue({ id: 'l1' });
            prisma.item.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });

        it('should throw NotFoundException if user not found', async () => {
            prisma.edital.findUnique.mockResolvedValue({ id: 'e1' });
            prisma.licitante.findUnique.mockResolvedValue({ id: 'l1' });
            prisma.item.findUnique.mockResolvedValue({ id: 'i1' });
            prisma.usuario.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });
    });

    describe('findAll', () => {
        it('should return all deadlines', async () => {
            prisma.prazo.findMany.mockResolvedValue([{ id: 'p1' }]);
            const result = await service.findAll();
            expect(result).toHaveLength(1);
        });
    });

    describe('findOne', () => {
        it('should return a deadline if found', async () => {
            prisma.prazo.findUnique.mockResolvedValue({ id: 'p1' });
            const result = await service.findOne('p1');
            expect(result).toHaveProperty('id', 'p1');
        });

        it('should throw NotFoundException if not found', async () => {
            prisma.prazo.findUnique.mockResolvedValue(null);
            await expect(service.findOne('p1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findByEdital', () => {
        it('should return deadlines for an edital', async () => {
            prisma.prazo.findMany.mockResolvedValue([{ id: 'p1', editalId: 'e1' }]);
            const result = await service.findByEdital('e1');
            expect(result).toHaveLength(1);
        });
    });

    describe('findByLicitante', () => {
        it('should return deadlines for a licitante', async () => {
            prisma.prazo.findMany.mockResolvedValue([{ id: 'p1', licitanteId: 'l1' }]);
            const result = await service.findByLicitante('l1');
            expect(result).toHaveLength(1);
        });
    });

    describe('findByItem', () => {
        it('should return deadlines for an item', async () => {
            prisma.prazo.findMany.mockResolvedValue([{ id: 'p1', itemId: 'i1' }]);
            const result = await service.findByItem('i1');
            expect(result).toHaveLength(1);
        });
    });

    describe('update', () => {
        it('should update a deadline', async () => {
            prisma.prazo.findUnique.mockResolvedValue({ id: 'p1' });
            prisma.prazo.update.mockResolvedValue({ id: 'p1', status: StatusPrazo.CONCLUIDO });

            const result = await service.update('p1', { status: StatusPrazo.CONCLUIDO });
            expect(result.status).toBe(StatusPrazo.CONCLUIDO);
        });

        it('should throw NotFoundException if deadline not found', async () => {
            prisma.prazo.findUnique.mockResolvedValue(null);
            await expect(service.update('p1', {})).rejects.toThrow(NotFoundException);
        });
    });

    describe('remove', () => {
        it('should remove a deadline', async () => {
            prisma.prazo.findUnique.mockResolvedValue({ id: 'p1' });
            prisma.prazo.delete.mockResolvedValue({ id: 'p1' });

            await service.remove('p1');
            expect(prisma.prazo.delete).toHaveBeenCalled();
        });

        it('should throw NotFoundException if deadline not found', async () => {
            prisma.prazo.findUnique.mockResolvedValue(null);
            await expect(service.remove('p1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('verificarPrazosAtrasados', () => {
        it('should update expired deadlines', async () => {
            prisma.prazo.updateMany.mockResolvedValue({ count: 1 });
            const result = await service.verificarPrazosAtrasados();
            expect(result).toHaveProperty('count', 1);
            expect(prisma.prazo.updateMany).toHaveBeenCalled();
        });
    });
});
