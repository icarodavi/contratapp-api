import { Test, TestingModule } from '@nestjs/testing';
import { LanceService } from './lance.service';
import { PrismaService } from '../database/database.service';
import { LogAtividadeService } from '../log-atividade/log-atividade.service';
import { DisputaService } from '../disputa/disputa.service';
import { LicitanteService } from '../licitante/licitante.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { DisputaStatus, TipoEmpresa, TipoAtividade } from '@generated/prisma/client';

const mockPrismaService = {
    lance: {
        findFirst: jest.fn(),
        create: jest.fn(),
        findMany: jest.fn(),
    },
};

const mockLogAtividadeService = {
    criarLog: jest.fn(),
};

const mockDisputaService = {
    findOne: jest.fn(),
};

const mockLicitanteService = {
    findOne: jest.fn(),
};

describe('LanceService', () => {
    let service: LanceService;
    let prisma: typeof mockPrismaService;
    let disputaService: typeof mockDisputaService;
    let licitanteService: typeof mockLicitanteService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                LanceService,
                { provide: PrismaService, useValue: mockPrismaService },
                { provide: LogAtividadeService, useValue: mockLogAtividadeService },
                { provide: DisputaService, useValue: mockDisputaService },
                { provide: LicitanteService, useValue: mockLicitanteService },
            ],
        }).compile();

        service = module.get<LanceService>(LanceService);
        prisma = module.get(PrismaService);
        disputaService = module.get(DisputaService);
        licitanteService = module.get(LicitanteService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('registrarLance', () => {
        const validDisputa = { id: 'disputa-1', status: DisputaStatus.ABERTA };
        const validLicitante = { id: 'licitante-1', razaoSocial: 'Empresa A', tipoEmpresa: TipoEmpresa.OUTRA };
        const validIp = '127.0.0.1';
        const validUserAgent = 'TestAgent';

        it('should register a valid bid', async () => {
            disputaService.findOne.mockResolvedValue(validDisputa);
            licitanteService.findOne.mockResolvedValue(validLicitante);
            prisma.lance.findFirst.mockResolvedValue({ valorCentavos: 20000, licitanteId: 'other' }); // Last bid 200.00
            prisma.lance.create.mockResolvedValue({ id: 'lance-1', valorCentavos: 19000 });

            const result = await service.registrarLance('disputa-1', 'licitante-1', 19000, validIp, validUserAgent);

            expect(prisma.lance.create).toHaveBeenCalled();
            expect(mockLogAtividadeService.criarLog).toHaveBeenCalledWith(expect.objectContaining({
                tipo: TipoAtividade.LANCE_REALIZADO,
                modulo: 'LANCE'
            }));
            expect(result).toBeDefined();
        });

        it('should throw NotFoundException if dispute not found', async () => {
            disputaService.findOne.mockResolvedValue(null);
            await expect(service.registrarLance('disputa-1', 'licitante-1', 100, validIp, validUserAgent))
                .rejects.toThrow(NotFoundException);
        });

        it('should throw BadRequestException if dispute is not OPEN', async () => {
            disputaService.findOne.mockResolvedValue({ ...validDisputa, status: DisputaStatus.AGUARDANDO });
            await expect(service.registrarLance('disputa-1', 'licitante-1', 100, validIp, validUserAgent))
                .rejects.toThrow(BadRequestException);
        });

        it('should throw BadRequestException if bid is not lower than current lowest', async () => {
            disputaService.findOne.mockResolvedValue(validDisputa);
            licitanteService.findOne.mockResolvedValue(validLicitante);
            prisma.lance.findFirst.mockResolvedValue({ valorCentavos: 10000 }); // 100.00

            await expect(service.registrarLance('disputa-1', 'licitante-1', 10000, validIp, validUserAgent))
                .rejects.toThrow(BadRequestException);
        });

        it('should enforce 5% rule for ME/EPP against ME/EPP', async () => {
            // Current winner is ME
            const currentWinner = { id: 'licitante-2', tipoEmpresa: TipoEmpresa.ME };
            const lastBid = { valorCentavos: 10000, licitanteId: 'licitante-2' };

            // Challenger is EPP
            const challenger = { id: 'licitante-1', tipoEmpresa: TipoEmpresa.EPP };

            disputaService.findOne.mockResolvedValue(validDisputa);
            licitanteService.findOne.mockResolvedValueOnce(challenger); // First call for current bidder
            prisma.lance.findFirst.mockResolvedValue(lastBid);
            licitanteService.findOne.mockResolvedValueOnce(currentWinner); // Second call for last bidder

            // Bid 9000 (10% diff) -> OK
            // Bid 9600 (4% diff) -> Fail (must be > 5% diff? No, wait.)

            // Logic check:
            // "Para ME/EPP, a diferença entre lances não pode ser superior a 5%" -> Wait, usually it's "inferior".
            // Code says: if (diferencaPercentual > 5) throw "não pode ser superior a 5%"
            // (10000 - 9000) / 10000 = 0.10 (10%) -> Throws exception?
            // If I bid 9000, I am lowering by 10%.
            // If I bid 9900, I am lowering by 1%.

            // The code says:
            // const diferencaPercentual = ((ultimoLance.valorCentavos - valorCentavos) / ultimoLance.valorCentavos) * 100;
            // if (diferencaPercentual > 5) throw ...

            // This means I CANNOT lower the price by MORE than 5% at once?
            // That seems like a specific rule to prevent "mergulho" (diving too deep too fast).
            // Let's test this behavior.

            // Case 1: Lowering by 10% (10000 -> 9000) -> Should Fail
            await expect(service.registrarLance('disputa-1', 'licitante-1', 9000, validIp, validUserAgent))
                .rejects.toThrow('diferença entre lances não pode ser superior a 5%');

            // Case 2: Lowering by 4% (10000 -> 9600) -> Should Pass
            // Reset mocks for second attempt
            licitanteService.findOne.mockReset();
            licitanteService.findOne.mockResolvedValueOnce(challenger);
            licitanteService.findOne.mockResolvedValueOnce(currentWinner);
            prisma.lance.create.mockResolvedValue({ id: 'lance-2' });

            await service.registrarLance('disputa-1', 'licitante-1', 9600, validIp, validUserAgent);
            expect(prisma.lance.create).toHaveBeenCalled();
        });

        it('should throw NotFoundException if licitante not found', async () => {
            disputaService.findOne.mockResolvedValue(validDisputa);
            licitanteService.findOne.mockResolvedValue(null);

            await expect(service.registrarLance('disputa-1', 'licitante-1', 100, validIp, validUserAgent))
                .rejects.toThrow(NotFoundException);
        });
    });

    describe('buscarLancesPorDisputa', () => {
        it('should return bids for a dispute', async () => {
            const lances = [{ id: 'lance-1', valorCentavos: 10000 }];
            prisma.lance.findMany.mockResolvedValue(lances);

            const result = await service.buscarLancesPorDisputa('disputa-1');
            expect(result).toEqual(lances);
            expect(prisma.lance.findMany).toHaveBeenCalledWith({
                where: { disputaId: 'disputa-1' },
                orderBy: { horario: 'desc' },
                include: expect.any(Object),
            });
        });
    });

    describe('buscarUltimoLance', () => {
        it('should return the last bid for a dispute', async () => {
            const lance = { id: 'lance-1', valorCentavos: 10000 };
            prisma.lance.findFirst.mockResolvedValue(lance);

            const result = await service.buscarUltimoLance('disputa-1');
            expect(result).toEqual(lance);
            expect(prisma.lance.findFirst).toHaveBeenCalledWith({
                where: { disputaId: 'disputa-1' },
                orderBy: { horario: 'desc' },
                include: expect.any(Object),
            });
        });
    });
});