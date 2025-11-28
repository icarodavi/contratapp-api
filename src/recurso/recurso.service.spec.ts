import { Test, TestingModule } from '@nestjs/testing';
import { RecursoService } from './recurso.service';
import { PrismaService } from '@/database/database.service';
import { NotFoundException } from '@nestjs/common';
import { TipoRecurso, StatusRecurso } from '@prisma/client';

const mockPrismaService = {
    edital: { findUnique: jest.fn() },
    licitante: { findUnique: jest.fn() },
    usuario: { findUnique: jest.fn() },
    recurso: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
};

describe('RecursoService', () => {
    let service: RecursoService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                RecursoService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<RecursoService>(RecursoService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        const createDto = {
            tipo: TipoRecurso.IMPUGNACAO,
            motivo: 'Motivo',
            fundamentacao: 'Fundamentacao',
            prazoResposta: 5,
            editalId: 'e1',
            licitanteId: 'l1',
            usuarioId: 'u1',
        };

        it('should create a resource successfully', async () => {
            prisma.edital.findUnique.mockResolvedValue({ id: 'e1' });
            prisma.licitante.findUnique.mockResolvedValue({ id: 'l1' });
            prisma.usuario.findUnique.mockResolvedValue({ id: 'u1' });
            prisma.recurso.create.mockResolvedValue({ id: 'r1', ...createDto, status: StatusRecurso.PENDENTE });

            const result = await service.create(createDto);
            expect(result).toHaveProperty('id', 'r1');
            expect(prisma.recurso.create).toHaveBeenCalled();
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
        it('should return all resources', async () => {
            prisma.recurso.findMany.mockResolvedValue([{ id: 'r1' }]);
            const result = await service.findAll();
            expect(result).toHaveLength(1);
        });
    });

    describe('findOne', () => {
        it('should return a resource if found', async () => {
            prisma.recurso.findUnique.mockResolvedValue({ id: 'r1' });
            const result = await service.findOne('r1');
            expect(result).toHaveProperty('id', 'r1');
        });

        it('should throw NotFoundException if not found', async () => {
            prisma.recurso.findUnique.mockResolvedValue(null);
            await expect(service.findOne('r1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('update', () => {
        it('should update a resource', async () => {
            prisma.recurso.findUnique.mockResolvedValue({ id: 'r1' });
            prisma.recurso.update.mockResolvedValue({ id: 'r1', status: StatusRecurso.DEFERIDO });

            const result = await service.update('r1', { status: StatusRecurso.DEFERIDO });
            expect(result.status).toBe(StatusRecurso.DEFERIDO);
        });

        it('should throw NotFoundException if resource not found', async () => {
            prisma.recurso.findUnique.mockResolvedValue(null);
            await expect(service.update('r1', {})).rejects.toThrow(NotFoundException);
        });
    });

    describe('remove', () => {
        it('should remove a resource', async () => {
            prisma.recurso.findUnique.mockResolvedValue({ id: 'r1' });
            prisma.recurso.delete.mockResolvedValue({ id: 'r1' });

            await service.remove('r1');
            expect(prisma.recurso.delete).toHaveBeenCalled();
        });

        it('should throw NotFoundException if resource not found', async () => {
            prisma.recurso.findUnique.mockResolvedValue(null);
            await expect(service.remove('r1')).rejects.toThrow(NotFoundException);
        });
    });
});
