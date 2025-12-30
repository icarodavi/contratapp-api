import { Test, TestingModule } from '@nestjs/testing';
import { DocumentoService } from './documento.service';
import { PrismaService } from '../database/database.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { TipoDocumento } from '@generated/prisma/client';

const mockPrismaService = {
    edital: {
        findUnique: jest.fn(),
    },
    documento: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
    },
};

describe('DocumentoService', () => {
    let service: DocumentoService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DocumentoService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<DocumentoService>(DocumentoService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        const createDto = {
            nome: 'Doc 1',
            tipo: TipoDocumento.EDITAL,
            caminho: '/path/to/doc',
            nomeOriginal: 'doc.pdf',
            versao: 1,
            hash: 'abc',
            licitanteId: 'l1',
            tipoDocumento: 'EDITAL',
            editalId: 'e1',
        };

        it('should create a document successfully', async () => {
            prisma.edital.findUnique.mockResolvedValue({ id: 'e1' });
            prisma.documento.create.mockResolvedValue({ id: 'd1', ...createDto });

            const result = await service.create(createDto);
            expect(result).toHaveProperty('id', 'd1');
            expect(prisma.documento.create).toHaveBeenCalled();
        });

        it('should throw NotFoundException if edital not found', async () => {
            prisma.edital.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });
    });

    describe('findAll', () => {
        it('should return all active documents', async () => {
            prisma.documento.findMany.mockResolvedValue([{ id: 'd1' }]);
            const result = await service.findAll();
            expect(result).toHaveLength(1);
            expect(prisma.documento.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { ativo: true } }));
        });
    });

    describe('findOne', () => {
        it('should return a document if found', async () => {
            prisma.documento.findUnique.mockResolvedValue({ id: 'd1' });
            const result = await service.findOne('d1');
            expect(result).toHaveProperty('id', 'd1');
        });

        it('should throw NotFoundException if not found', async () => {
            prisma.documento.findUnique.mockResolvedValue(null);
            await expect(service.findOne('d1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findByEdital', () => {
        it('should return documents for an edital', async () => {
            prisma.documento.findMany.mockResolvedValue([{ id: 'd1', editalId: 'e1' }]);
            const result = await service.findByEdital('e1');
            expect(result).toHaveLength(1);
            expect(prisma.documento.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { editalId: 'e1', ativo: true } }));
        });
    });

    describe('update', () => {
        it('should update a document', async () => {
            prisma.documento.findUnique.mockResolvedValue({ id: 'd1' });
            prisma.documento.update.mockResolvedValue({ id: 'd1', nome: 'Updated' });

            const result = await service.update('d1', { nome: 'Updated' });
            expect(result.nome).toBe('Updated');
        });

        it('should throw NotFoundException if document not found', async () => {
            prisma.documento.findUnique.mockResolvedValue(null);
            await expect(service.update('d1', {})).rejects.toThrow(NotFoundException);
        });
    });

    describe('remove', () => {
        it('should soft delete a document', async () => {
            prisma.documento.findUnique.mockResolvedValue({ id: 'd1' });
            prisma.documento.update.mockResolvedValue({ id: 'd1', ativo: false });

            await service.remove('d1');
            expect(prisma.documento.update).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({ ativo: false })
            }));
        });

        it('should throw NotFoundException if document not found', async () => {
            prisma.documento.findUnique.mockResolvedValue(null);
            await expect(service.remove('d1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('validateDocumento', () => {
        const validDto = {
            nome: 'Doc',
            caminho: '/path',
            editalId: 'e1',
            tipo: TipoDocumento.EDITAL,
            nomeOriginal: 'doc.pdf',
            versao: 1,
            hash: 'abc',
            licitanteId: 'l1',
            tipoDocumento: 'EDITAL',
        };

        it('should validate successfully', async () => {
            await expect(service.validateDocumento(validDto)).resolves.not.toThrow();
        });

        it('should throw BadRequestException if nome missing', async () => {
            await expect(service.validateDocumento({ ...validDto, nome: '' })).rejects.toThrow(BadRequestException);
        });

        it('should throw BadRequestException if caminho missing', async () => {
            await expect(service.validateDocumento({ ...validDto, caminho: '' })).rejects.toThrow(BadRequestException);
        });

        it('should throw BadRequestException if editalId missing', async () => {
            await expect(service.validateDocumento({ ...validDto, editalId: '' })).rejects.toThrow(BadRequestException);
        });

        it('should throw BadRequestException if tipo missing', async () => {
            await expect(service.validateDocumento({ ...validDto, tipo: null as any })).rejects.toThrow(BadRequestException);
        });
    });
});
