import { Test, TestingModule } from '@nestjs/testing';
import { DocumentoObrigatorioService } from './documento-obrigatorio.service';
import { PrismaService } from '../database/database.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { TipoDocumento } from '@prisma/client';

const mockPrismaService = {
    edital: {
        findUnique: jest.fn(),
    },
    documentoObrigatorio: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
};

describe('DocumentoObrigatorioService', () => {
    let service: DocumentoObrigatorioService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DocumentoObrigatorioService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<DocumentoObrigatorioService>(DocumentoObrigatorioService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        const createDto = {
            tipoDocumento: TipoDocumento.HABILITACAO,
            descricao: 'Doc 1',
            editalId: 'e1',
        };

        it('should create a document successfully', async () => {
            prisma.edital.findUnique.mockResolvedValue({ id: 'e1' });
            prisma.documentoObrigatorio.create.mockResolvedValue({ id: 'd1', ...createDto });

            const result = await service.create(createDto);
            expect(result).toHaveProperty('id', 'd1');
            expect(prisma.documentoObrigatorio.create).toHaveBeenCalled();
        });

        it('should throw NotFoundException if edital not found', async () => {
            prisma.edital.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });
    });

    describe('findAll', () => {
        it('should return all documents', async () => {
            prisma.documentoObrigatorio.findMany.mockResolvedValue([{ id: 'd1' }]);
            const result = await service.findAll();
            expect(result).toHaveLength(1);
        });
    });

    describe('findOne', () => {
        it('should return a document if found', async () => {
            prisma.documentoObrigatorio.findUnique.mockResolvedValue({ id: 'd1' });
            const result = await service.findOne('d1');
            expect(result).toHaveProperty('id', 'd1');
        });

        it('should throw NotFoundException if not found', async () => {
            prisma.documentoObrigatorio.findUnique.mockResolvedValue(null);
            await expect(service.findOne('d1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findByEdital', () => {
        it('should return documents for an edital', async () => {
            prisma.documentoObrigatorio.findMany.mockResolvedValue([{ id: 'd1', editalId: 'e1' }]);
            const result = await service.findByEdital('e1');
            expect(result).toHaveLength(1);
            expect(prisma.documentoObrigatorio.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { editalId: 'e1' } }));
        });
    });

    describe('update', () => {
        it('should update a document', async () => {
            prisma.documentoObrigatorio.findUnique.mockResolvedValue({ id: 'd1' });
            prisma.documentoObrigatorio.update.mockResolvedValue({ id: 'd1', descricao: 'Updated' });

            const result = await service.update('d1', { descricao: 'Updated' });
            expect(result.descricao).toBe('Updated');
        });

        it('should throw NotFoundException if document not found', async () => {
            prisma.documentoObrigatorio.findUnique.mockResolvedValue(null);
            await expect(service.update('d1', {})).rejects.toThrow(NotFoundException);
        });
    });

    describe('remove', () => {
        it('should remove a document', async () => {
            prisma.documentoObrigatorio.findUnique.mockResolvedValue({ id: 'd1' });
            prisma.documentoObrigatorio.delete.mockResolvedValue({ id: 'd1' });

            await service.remove('d1');
            expect(prisma.documentoObrigatorio.delete).toHaveBeenCalled();
        });

        it('should throw NotFoundException if document not found', async () => {
            prisma.documentoObrigatorio.findUnique.mockResolvedValue(null);
            await expect(service.remove('d1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('validateDocumentoObrigatorio', () => {
        const validDto = {
            tipoDocumento: TipoDocumento.HABILITACAO,
            descricao: 'Doc',
            editalId: 'e1',
        };

        it('should validate successfully', async () => {
            await expect(service.validateDocumentoObrigatorio(validDto)).resolves.not.toThrow();
        });

        it('should throw BadRequestException if tipoDocumento missing', async () => {
            await expect(service.validateDocumentoObrigatorio({ ...validDto, tipoDocumento: null as any })).rejects.toThrow(BadRequestException);
        });

        it('should throw BadRequestException if descricao missing', async () => {
            await expect(service.validateDocumentoObrigatorio({ ...validDto, descricao: '' })).rejects.toThrow(BadRequestException);
        });

        it('should throw BadRequestException if editalId missing', async () => {
            await expect(service.validateDocumentoObrigatorio({ ...validDto, editalId: '' })).rejects.toThrow(BadRequestException);
        });
    });
});
