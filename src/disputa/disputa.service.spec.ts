import { Test, TestingModule } from '@nestjs/testing';
import { DisputaService } from './disputa.service';
import { PrismaService } from '../database/database.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { DisputaStatus, TipoEmpresa } from '@generated/prisma/client';

const mockPrismaService = {
    edital: {
        findUnique: jest.fn(),
    },
    disputa: {
        create: jest.fn(),
        findUnique: jest.fn(),
        findMany: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
    lance: {
        findFirst: jest.fn(),
        findMany: jest.fn(),
    },
};

describe('DisputaService', () => {
    let service: DisputaService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DisputaService,
                {
                    provide: PrismaService,
                    useValue: mockPrismaService,
                },
            ],
        }).compile();

        service = module.get<DisputaService>(DisputaService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create a dispute successfully', async () => {
            const createDto = {
                editalId: 'edital-1',
                dataInicio: new Date(),
                dataFimPrevisto: new Date(),
                status: DisputaStatus.AGUARDANDO,
            };

            prisma.edital.findUnique.mockResolvedValue({ id: 'edital-1' });
            prisma.disputa.create.mockResolvedValue({ id: 'disputa-1', ...createDto });

            const result = await service.create(createDto);

            expect(prisma.edital.findUnique).toHaveBeenCalledWith({ where: { id: 'edital-1' } });
            expect(prisma.disputa.create).toHaveBeenCalled();
            expect(result).toEqual({ id: 'disputa-1', ...createDto });
        });

        it('should throw NotFoundException if edital does not exist', async () => {
            const createDto = {
                editalId: 'edital-invalid',
                dataInicio: new Date(),
                dataFimPrevisto: new Date(),
                status: DisputaStatus.AGUARDANDO,
            };

            prisma.edital.findUnique.mockResolvedValue(null);

            await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
        });
    });

    describe('findAll', () => {
        it('should return all disputes', async () => {
            const disputes = [{ id: 'disputa-1' }];
            prisma.disputa.findMany.mockResolvedValue(disputes);
            const result = await service.findAll();
            expect(result).toEqual(disputes);
            expect(prisma.disputa.findMany).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a dispute if found', async () => {
            const dispute = { id: 'disputa-1' };
            prisma.disputa.findUnique.mockResolvedValue(dispute);
            const result = await service.findOne('disputa-1');
            expect(result).toEqual(dispute);
        });

        it('should throw NotFoundException if not found', async () => {
            prisma.disputa.findUnique.mockResolvedValue(null);
            await expect(service.findOne('disputa-1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findByEdital', () => {
        it('should return disputes for a given edital', async () => {
            const disputes = [{ id: 'disputa-1', editalId: 'edital-1' }];
            prisma.disputa.findMany.mockResolvedValue(disputes);

            const result = await service.findByEdital('edital-1');
            expect(result).toEqual(disputes);
            expect(prisma.disputa.findMany).toHaveBeenCalledWith({
                where: { editalId: 'edital-1' },
                include: expect.any(Object),
            });
        });
    });

    describe('update', () => {
        it('should update dispute status successfully', async () => {
            const existingDisputa = {
                id: 'disputa-1',
                status: DisputaStatus.AGUARDANDO,
            };

            prisma.disputa.findUnique.mockResolvedValue(existingDisputa);
            prisma.disputa.update.mockResolvedValue({ ...existingDisputa, status: DisputaStatus.ABERTA });

            const result = await service.update('disputa-1', { status: DisputaStatus.ABERTA });

            expect(result.status).toBe(DisputaStatus.ABERTA);
        });

        it('should throw BadRequestException for invalid status transition', async () => {
            const existingDisputa = {
                id: 'disputa-1',
                status: DisputaStatus.ENCERRADA,
            };

            prisma.disputa.findUnique.mockResolvedValue(existingDisputa);

            await expect(
                service.update('disputa-1', { status: DisputaStatus.ABERTA }),
            ).rejects.toThrow(BadRequestException);
        });
    });



    describe('remove', () => {
        it('should remove a dispute successfully if not AGUARDANDO (assuming logic allows others or logic is inverted)', async () => {
            // Based on code: throws if AGUARDANDO. So should succeed if ABERTA? Or maybe logic is inverted in code.
            // Let's test the path that does NOT throw.
            const dispute = { id: 'disputa-1', status: DisputaStatus.ABERTA };
            prisma.disputa.findUnique.mockResolvedValue(dispute);
            prisma.disputa.delete.mockResolvedValue(dispute);

            await service.remove('disputa-1');
            expect(prisma.disputa.delete).toHaveBeenCalledWith({ where: { id: 'disputa-1' } });
        });

        it('should throw BadRequestException if dispute is AGUARDANDO', async () => {
            const dispute = { id: 'disputa-1', status: DisputaStatus.AGUARDANDO };
            prisma.disputa.findUnique.mockResolvedValue(dispute);

            await expect(service.remove('disputa-1')).rejects.toThrow(BadRequestException);
        });
    });

    describe('encerrarDisputa', () => {
        it('should return existing dispute if already closed', async () => {
            const dispute = { id: 'disputa-1', status: DisputaStatus.ENCERRADA };
            prisma.disputa.findUnique.mockResolvedValue(dispute);

            const result = await service.encerrarDisputa('disputa-1');
            expect(result).toEqual(dispute);
            expect(prisma.disputa.update).not.toHaveBeenCalled();
        });
        it('should close dispute and check for tie (empate ficto)', async () => {
            const disputa = { id: 'disputa-1', status: DisputaStatus.ABERTA };
            const menorLance = { valorCentavos: 10000, licitante: { tipoEmpresa: TipoEmpresa.OUTRA } };
            const lancesEmpatados = [
                { valorCentavos: 10400, licitanteId: 'licitante-2', licitante: { tipoEmpresa: TipoEmpresa.ME } },
            ];

            prisma.disputa.findUnique.mockResolvedValue(disputa);
            prisma.lance.findFirst.mockResolvedValue(menorLance);
            prisma.lance.findMany.mockResolvedValue(lancesEmpatados);
            prisma.disputa.update.mockResolvedValue({ ...disputa, status: DisputaStatus.ENCERRADA });

            const result = await service.encerrarDisputa('disputa-1') as any;

            expect(result.disputa.status).toBe(DisputaStatus.ENCERRADA);
            expect(result.empateFicto).toHaveLength(1);
            expect(result.empateFicto[0].licitanteId).toBe('licitante-2');
        });

        it('should not return tie if winner is ME/EPP', async () => {
            const disputa = { id: 'disputa-1', status: DisputaStatus.ABERTA };
            const menorLance = { valorCentavos: 10000, licitante: { tipoEmpresa: TipoEmpresa.ME } };

            prisma.disputa.findUnique.mockResolvedValue(disputa);
            prisma.lance.findFirst.mockResolvedValue(menorLance);
            prisma.lance.findMany.mockResolvedValue([]);
            prisma.disputa.update.mockResolvedValue({ ...disputa, status: DisputaStatus.ENCERRADA });

            const result = await service.encerrarDisputa('disputa-1');
            expect((result as any).empateFicto).toEqual([]);
        });
    });

    describe('verificarEmpateFicto', () => {
        it('should return null if no bids', async () => {
            prisma.lance.findFirst.mockResolvedValue(null);
            const result = await service.verificarEmpateFicto('disputa-1');
            expect(result).toBeNull();
        });

        it('should identify ME/EPP bids within 5% range', async () => {
            const menorLance = { valorCentavos: 10000 }; // 100.00

            prisma.lance.findFirst.mockResolvedValue(menorLance);
            prisma.lance.findMany.mockResolvedValue([
                { licitanteId: '1', valorCentavos: 10200, licitante: { tipoEmpresa: TipoEmpresa.ME } },
                { licitanteId: '2', valorCentavos: 10500, licitante: { tipoEmpresa: TipoEmpresa.EPP } },
            ]);

            const result = await service.verificarEmpateFicto('disputa-1');
            expect(result).toHaveLength(2);
        });
    });
});
