import { Test, TestingModule } from '@nestjs/testing';
import { DocumentoLicitanteService } from './documento-licitante.service';
import { PrismaService } from '../database/database.service';
import { NotFoundException } from '@nestjs/common';
import { TipoDocumento, StatusDocumento } from '@generated/prisma/client';

const mockPrismaService = {
    documentoLicitante: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
};

describe('DocumentoLicitanteService', () => {
    let service: DocumentoLicitanteService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DocumentoLicitanteService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<DocumentoLicitanteService>(DocumentoLicitanteService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        const createDto = {
            disputaId: 'd1',
            licitanteId: 'l1',
            tipoDocumento: TipoDocumento.HABILITACAO,
            nomeOriginal: 'doc.pdf',
            arquivoPath: '/path',
            versao: 1,
        };

        it('should create a document successfully', async () => {
            prisma.documentoLicitante.create.mockResolvedValue({ id: 'dl1', ...createDto, status: StatusDocumento.PENDENTE });

            const result = await service.create(createDto);
            expect(result).toHaveProperty('id', 'dl1');
            expect(prisma.documentoLicitante.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({ status: StatusDocumento.PENDENTE })
            }));
        });
    });

    describe('findAll', () => {
        it('should return all documents', async () => {
            prisma.documentoLicitante.findMany.mockResolvedValue([{ id: 'dl1' }]);
            const result = await service.findAll();
            expect(result).toHaveLength(1);
        });
    });

    describe('findOne', () => {
        it('should return a document if found', async () => {
            prisma.documentoLicitante.findUnique.mockResolvedValue({ id: 'dl1' });
            const result = await service.findOne('dl1');
            expect(result).toHaveProperty('id', 'dl1');
        });

        it('should throw NotFoundException if not found', async () => {
            prisma.documentoLicitante.findUnique.mockResolvedValue(null);
            await expect(service.findOne('dl1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findByDisputa', () => {
        it('should return documents for a dispute', async () => {
            prisma.documentoLicitante.findMany.mockResolvedValue([{ id: 'dl1', disputaId: 'd1' }]);
            const result = await service.findByDisputa('d1');
            expect(result).toHaveLength(1);
            expect(prisma.documentoLicitante.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { disputaId: 'd1' } }));
        });
    });

    describe('update', () => {
        it('should update a document', async () => {
            prisma.documentoLicitante.findUnique.mockResolvedValue({ id: 'dl1' });
            prisma.documentoLicitante.update.mockResolvedValue({ id: 'dl1', status: StatusDocumento.VALIDADO });

            const result = await service.update('dl1', { status: StatusDocumento.VALIDADO });
            expect(result.status).toBe(StatusDocumento.VALIDADO);
        });

        it('should throw NotFoundException if document not found', async () => {
            prisma.documentoLicitante.findUnique.mockResolvedValue(null);
            await expect(service.update('dl1', {})).rejects.toThrow(NotFoundException);
        });
    });

    describe('remove', () => {
        it('should remove a document', async () => {
            prisma.documentoLicitante.findUnique.mockResolvedValue({ id: 'dl1' });
            prisma.documentoLicitante.delete.mockResolvedValue({ id: 'dl1' });

            await service.remove('dl1');
            expect(prisma.documentoLicitante.delete).toHaveBeenCalled();
        });

        it('should throw NotFoundException if document not found', async () => {
            prisma.documentoLicitante.findUnique.mockResolvedValue(null);
            await expect(service.remove('dl1')).rejects.toThrow(NotFoundException);
        });
    });
});
