import { Test, TestingModule } from '@nestjs/testing';
import { PropostaService } from './proposta.service';
import { PrismaService } from '../database/database.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { DisputaStatus, StatusProposta } from '@generated/prisma/client';

const mockPrismaService = {
    disputa: {
        findUnique: jest.fn(),
    },
    licitante: {
        findUnique: jest.fn(),
    },
    item: {
        findUnique: jest.fn(),
    },
    proposta: {
        findFirst: jest.fn(),
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
    },
};

describe('PropostaService', () => {
    let service: PropostaService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PropostaService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<PropostaService>(PropostaService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        const createDto = {
            disputaId: 'd1',
            licitanteId: 'l1',
            itemId: 'i1',
            valorCentavos: 1000,
            createdBy: 'user-1',
        };

        it('should create a proposal successfully', async () => {
            prisma.disputa.findUnique.mockResolvedValue({ id: 'd1', status: DisputaStatus.ABERTA });
            prisma.licitante.findUnique.mockResolvedValue({ id: 'l1' });
            prisma.item.findUnique.mockResolvedValue({ id: 'i1', status: 'ATIVO' });
            prisma.proposta.findFirst.mockResolvedValue(null);
            prisma.proposta.create.mockResolvedValue({ id: 'p1', ...createDto, status: StatusProposta.PENDENTE });

            const result = await service.create(createDto);
            expect(result).toHaveProperty('id', 'p1');
            expect(prisma.proposta.create).toHaveBeenCalled();
        });

        it('should throw NotFoundException if dispute not found', async () => {
            prisma.disputa.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });

        it('should throw BadRequestException if dispute not OPEN', async () => {
            prisma.disputa.findUnique.mockResolvedValue({ id: 'd1', status: DisputaStatus.ENCERRADA });
            await expect(service.create(createDto)).rejects.toThrow(BadRequestException);
        });

        it('should throw NotFoundException if licitante not found', async () => {
            prisma.disputa.findUnique.mockResolvedValue({ id: 'd1', status: DisputaStatus.ABERTA });
            prisma.licitante.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });

        it('should throw NotFoundException if item not found', async () => {
            prisma.disputa.findUnique.mockResolvedValue({ id: 'd1', status: DisputaStatus.ABERTA });
            prisma.licitante.findUnique.mockResolvedValue({ id: 'l1' });
            prisma.item.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });

        it('should throw BadRequestException if item not ACTIVE', async () => {
            prisma.disputa.findUnique.mockResolvedValue({ id: 'd1', status: DisputaStatus.ABERTA });
            prisma.licitante.findUnique.mockResolvedValue({ id: 'l1' });
            prisma.item.findUnique.mockResolvedValue({ id: 'i1', status: 'INATIVO' });
            await expect(service.create(createDto)).rejects.toThrow(BadRequestException);
        });

        it('should throw BadRequestException if proposal already exists', async () => {
            prisma.disputa.findUnique.mockResolvedValue({ id: 'd1', status: DisputaStatus.ABERTA });
            prisma.licitante.findUnique.mockResolvedValue({ id: 'l1' });
            prisma.item.findUnique.mockResolvedValue({ id: 'i1', status: 'ATIVO' });
            prisma.proposta.findFirst.mockResolvedValue({ id: 'existing' });
            await expect(service.create(createDto)).rejects.toThrow(BadRequestException);
        });
    });

    describe('findAll', () => {
        it('should return all proposals', async () => {
            prisma.proposta.findMany.mockResolvedValue([{ id: 'p1' }]);
            const result = await service.findAll();
            expect(result).toHaveLength(1);
        });
    });

    describe('findOne', () => {
        it('should return a proposal if found', async () => {
            prisma.proposta.findUnique.mockResolvedValue({ id: 'p1' });
            const result = await service.findOne('p1');
            expect(result).toHaveProperty('id', 'p1');
        });

        it('should throw NotFoundException if not found', async () => {
            prisma.proposta.findUnique.mockResolvedValue(null);
            await expect(service.findOne('p1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findByDisputa', () => {
        it('should return proposals for a dispute', async () => {
            prisma.proposta.findMany.mockResolvedValue([{ id: 'p1', disputaId: 'd1' }]);
            const result = await service.findByDisputa('d1');
            expect(result).toHaveLength(1);
            expect(prisma.proposta.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { disputaId: 'd1' } }));
        });
    });
});
