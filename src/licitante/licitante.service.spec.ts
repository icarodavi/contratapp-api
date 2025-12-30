import { Test, TestingModule } from '@nestjs/testing';
import { LicitanteService } from './licitante.service';
import { PrismaService } from '../database/database.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { TipoEmpresa } from '@generated/prisma/client';

const mockPrismaService = {
    usuario: {
        findUnique: jest.fn(),
    },
    licitante: {
        findFirst: jest.fn(),
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
    disputa: {
        findMany: jest.fn(),
    },
};

describe('LicitanteService', () => {
    let service: LicitanteService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                LicitanteService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<LicitanteService>(LicitanteService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        const createDto = {
            razaoSocial: 'Empresa Teste',
            cnpj: '12345678000199',
            tipoEmpresa: TipoEmpresa.ME,
            usuarioId: 'user-1',
            endereco: 'Rua Teste, 123',
            telefone: '11999999999',
            email: 'empresa@teste.com',
        };

        it('should create a licitante successfully', async () => {
            prisma.usuario.findUnique.mockResolvedValue({ id: 'user-1' });
            prisma.licitante.findFirst.mockResolvedValue(null);
            prisma.licitante.create.mockResolvedValue({ id: 'licitante-1', ...createDto });

            const result = await service.create(createDto);

            expect(prisma.licitante.create).toHaveBeenCalled();
            expect(result).toBeDefined();
        });

        it('should throw NotFoundException if user does not exist', async () => {
            prisma.usuario.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });

        it('should throw BadRequestException if CNPJ already exists', async () => {
            prisma.usuario.findUnique.mockResolvedValue({ id: 'user-1' });
            prisma.licitante.findFirst.mockResolvedValue({ id: 'existing' });
            await expect(service.create(createDto)).rejects.toThrow(BadRequestException);
        });
    });

    describe('update', () => {
        it('should update licitante successfully', async () => {
            prisma.licitante.findUnique.mockResolvedValue({ id: 'licitante-1', cnpj: 'old-cnpj' });
            prisma.licitante.findFirst.mockResolvedValue(null); // No conflict
            prisma.licitante.update.mockResolvedValue({ id: 'licitante-1', cnpj: 'new-cnpj' });

            const result = await service.update('licitante-1', { cnpj: 'new-cnpj' });
            expect(result.cnpj).toBe('new-cnpj');
        });

        it('should throw BadRequestException if new CNPJ conflicts', async () => {
            prisma.licitante.findUnique.mockResolvedValue({ id: 'licitante-1', cnpj: 'old-cnpj' });
            prisma.licitante.findFirst.mockResolvedValue({ id: 'other-licitante' });

            await expect(service.update('licitante-1', { cnpj: 'conflict-cnpj' })).rejects.toThrow(BadRequestException);
        });
    });

    describe('remove', () => {
        it('should remove licitante if no active disputes', async () => {
            prisma.licitante.findUnique.mockResolvedValue({ id: 'licitante-1' });
            prisma.disputa.findMany.mockResolvedValue([]);
            prisma.licitante.delete.mockResolvedValue({ id: 'licitante-1' });

            await service.remove('licitante-1');
            expect(prisma.licitante.delete).toHaveBeenCalledWith({ where: { id: 'licitante-1' } });
        });

        it('should throw BadRequestException if active disputes exist', async () => {
            prisma.licitante.findUnique.mockResolvedValue({ id: 'licitante-1' });
            prisma.disputa.findMany.mockResolvedValue([{ id: 'disputa-1' }]);

            await expect(service.remove('licitante-1')).rejects.toThrow(BadRequestException);
        });
    });


    describe('findAll', () => {
        it('should return all licitantes', async () => {
            const licitantes = [{ id: 'licitante-1' }];
            prisma.licitante.findMany.mockResolvedValue(licitantes);

            const result = await service.findAll();
            expect(result).toEqual(licitantes);
            expect(prisma.licitante.findMany).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a licitante if found', async () => {
            const licitante = { id: 'licitante-1' };
            prisma.licitante.findUnique.mockResolvedValue(licitante);

            const result = await service.findOne('licitante-1');
            expect(result).toEqual(licitante);
        });

        it('should throw NotFoundException if licitante not found', async () => {
            prisma.licitante.findUnique.mockResolvedValue(null);
            await expect(service.findOne('licitante-1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findByUsuario', () => {
        it('should return licitante for a given user', async () => {
            const licitante = { id: 'licitante-1', usuarioId: 'user-1' };
            prisma.licitante.findFirst.mockResolvedValue(licitante);

            const result = await service.findByUsuario('user-1');
            expect(result).toEqual(licitante);
            expect(prisma.licitante.findFirst).toHaveBeenCalledWith({
                where: { usuario: { id: 'user-1' } },
                include: expect.any(Object),
            });
        });

        it('should throw NotFoundException if licitante not found for user', async () => {
            prisma.licitante.findFirst.mockResolvedValue(null);
            await expect(service.findByUsuario('user-1')).rejects.toThrow(NotFoundException);
        });
    });
});
