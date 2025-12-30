import { Test, TestingModule } from '@nestjs/testing';
import { SancaoService } from './sancao.service';
import { PrismaService } from '@/database/database.service';
import { NotFoundException } from '@nestjs/common';
import { TipoSancao, StatusSancao } from '@generated/prisma/client';

const mockPrismaService = {
    edital: { findUnique: jest.fn() },
    licitante: { findUnique: jest.fn() },
    usuario: { findUnique: jest.fn() },
    sancao: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
};

describe('SancaoService', () => {
    let service: SancaoService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SancaoService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<SancaoService>(SancaoService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        const createDto = {
            tipo: TipoSancao.ADVERTENCIA,
            motivo: 'Motivo',
            fundamentacao: 'Fundamentacao',
            dataInicio: new Date(),
            editalId: 'e1',
            licitanteId: 'l1',
            aplicadoPor: 'u1',
        };

        it('should create a sanction successfully', async () => {
            prisma.edital.findUnique.mockResolvedValue({ id: 'e1' });
            prisma.licitante.findUnique.mockResolvedValue({ id: 'l1' });
            prisma.usuario.findUnique.mockResolvedValue({ id: 'u1' });
            prisma.sancao.create.mockResolvedValue({ id: 's1', ...createDto, status: StatusSancao.PENDENTE });

            const result = await service.create(createDto);
            expect(result).toHaveProperty('id', 's1');
            expect(prisma.sancao.create).toHaveBeenCalled();
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

        it('should throw NotFoundException if user not found', async () => {
            prisma.edital.findUnique.mockResolvedValue({ id: 'e1' });
            prisma.licitante.findUnique.mockResolvedValue({ id: 'l1' });
            prisma.usuario.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });
    });

    describe('findAll', () => {
        it('should return all sanctions', async () => {
            prisma.sancao.findMany.mockResolvedValue([{ id: 's1' }]);
            const result = await service.findAll();
            expect(result).toHaveLength(1);
        });
    });

    describe('findOne', () => {
        it('should return a sanction if found', async () => {
            prisma.sancao.findUnique.mockResolvedValue({ id: 's1' });
            const result = await service.findOne('s1');
            expect(result).toHaveProperty('id', 's1');
        });

        it('should throw NotFoundException if not found', async () => {
            prisma.sancao.findUnique.mockResolvedValue(null);
            await expect(service.findOne('s1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findByEdital', () => {
        it('should return sanctions for an edital', async () => {
            prisma.sancao.findMany.mockResolvedValue([{ id: 's1', editalId: 'e1' }]);
            const result = await service.findByEdital('e1');
            expect(result).toHaveLength(1);
        });
    });

    describe('findByLicitante', () => {
        it('should return sanctions for a licitante', async () => {
            prisma.sancao.findMany.mockResolvedValue([{ id: 's1', licitanteId: 'l1' }]);
            const result = await service.findByLicitante('l1');
            expect(result).toHaveLength(1);
        });
    });

    describe('update', () => {
        it('should update a sanction', async () => {
            prisma.sancao.findUnique.mockResolvedValue({ id: 's1' });
            prisma.sancao.update.mockResolvedValue({ id: 's1', status: StatusSancao.REVOGADA });

            const result = await service.update('s1', { status: StatusSancao.REVOGADA });
            expect(result.status).toBe(StatusSancao.REVOGADA);
        });

        it('should throw NotFoundException if sanction not found', async () => {
            prisma.sancao.findUnique.mockResolvedValue(null);
            await expect(service.update('s1', {})).rejects.toThrow(NotFoundException);
        });
    });

    describe('remove', () => {
        it('should remove a sanction', async () => {
            prisma.sancao.findUnique.mockResolvedValue({ id: 's1' });
            prisma.sancao.delete.mockResolvedValue({ id: 's1' });

            await service.remove('s1');
            expect(prisma.sancao.delete).toHaveBeenCalled();
        });

        it('should throw NotFoundException if sanction not found', async () => {
            prisma.sancao.findUnique.mockResolvedValue(null);
            await expect(service.remove('s1')).rejects.toThrow(NotFoundException);
        });
    });
});
