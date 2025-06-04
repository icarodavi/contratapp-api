import { Test, TestingModule } from '@nestjs/testing';
import { LanceService } from './lance.service';
import { PrismaService } from '../database/database.service';
import { LogAtividadeService } from '../log-atividade/log-atividade.service';
import { DisputaService } from '../disputa/disputa.service';
import { LicitanteService } from '../licitante/licitante.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { TipoEmpresa } from '@prisma/client';

describe('LanceService', () => {
    let service: LanceService;
    let prismaService: PrismaService;
    let logAtividadeService: LogAtividadeService;
    let disputaService: DisputaService;
    let licitanteService: LicitanteService;

    const mockDisputa = {
        id: '1',
        status: 'ABERTA',
    };

    const mockLicitante = {
        id: '1',
        tipoEmpresa: TipoEmpresa.ME,
    };

    const mockLicitanteAnterior = {
        id: '2',
        tipoEmpresa: TipoEmpresa.EPP,
    };

    const mockUltimoLance = {
        id: '1',
        valorCentavos: 100000, // R$ 1.000,00
        licitanteId: '2',
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                LanceService,
                {
                    provide: PrismaService,
                    useValue: {
                        lance: {
                            create: jest.fn(),
                            findFirst: jest.fn(),
                            findMany: jest.fn(),
                        },
                    },
                },
                {
                    provide: LogAtividadeService,
                    useValue: {
                        registrar: jest.fn(),
                    },
                },
                {
                    provide: DisputaService,
                    useValue: {
                        buscarPorId: jest.fn(),
                    },
                },
                {
                    provide: LicitanteService,
                    useValue: {
                        buscarPorId: jest.fn(),
                    },
                },
            ],
        }).compile();

        service = module.get<LanceService>(LanceService);
        prismaService = module.get<PrismaService>(PrismaService);
        logAtividadeService = module.get<LogAtividadeService>(LogAtividadeService);
        disputaService = module.get<DisputaService>(DisputaService);
        licitanteService = module.get<LicitanteService>(LicitanteService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('registrarLance', () => {
        it('deve registrar um lance válido', async () => {
            jest.spyOn(disputaService, 'buscarPorId').mockResolvedValue(mockDisputa);
            jest.spyOn(licitanteService, 'buscarPorId').mockResolvedValue(mockLicitante);
            jest.spyOn(prismaService.lance, 'findFirst').mockResolvedValue(mockUltimoLance);
            jest.spyOn(prismaService.lance, 'create').mockResolvedValue({
                id: '2',
                disputaId: '1',
                licitanteId: '1',
                valorCentavos: 95000,
                horario: new Date(),
                ip: '127.0.0.1',
                userAgent: 'test',
            });

            const result = await service.registrarLance(
                '1',
                '1',
                95000,
                '127.0.0.1',
                'test',
            );

            expect(result).toBeDefined();
            expect(result.valorCentavos).toBe(95000);
            expect(logAtividadeService.registrar).toHaveBeenCalled();
        });

        it('deve lançar erro se a disputa não existir', async () => {
            jest.spyOn(disputaService, 'buscarPorId').mockResolvedValue(null);

            await expect(
                service.registrarLance('1', '1', 95000, '127.0.0.1', 'test'),
            ).rejects.toThrow(NotFoundException);
        });

        it('deve lançar erro se a disputa não estiver aberta', async () => {
            jest.spyOn(disputaService, 'buscarPorId').mockResolvedValue({
                ...mockDisputa,
                status: 'ENCERRADA',
            });

            await expect(
                service.registrarLance('1', '1', 95000, '127.0.0.1', 'test'),
            ).rejects.toThrow(BadRequestException);
        });

        it('deve lançar erro se o lance for maior que o anterior', async () => {
            jest.spyOn(disputaService, 'buscarPorId').mockResolvedValue(mockDisputa);
            jest.spyOn(licitanteService, 'buscarPorId').mockResolvedValue(mockLicitante);
            jest.spyOn(prismaService.lance, 'findFirst').mockResolvedValue(mockUltimoLance);

            await expect(
                service.registrarLance('1', '1', 110000, '127.0.0.1', 'test'),
            ).rejects.toThrow(BadRequestException);
        });

        it('deve lançar erro se a diferença entre lances de ME/EPP for maior que 5%', async () => {
            jest.spyOn(disputaService, 'buscarPorId').mockResolvedValue(mockDisputa);
            jest.spyOn(licitanteService, 'buscarPorId').mockResolvedValue(mockLicitante);
            jest.spyOn(prismaService.lance, 'findFirst').mockResolvedValue(mockUltimoLance);
            jest.spyOn(licitanteService, 'buscarPorId').mockResolvedValueOnce(mockLicitanteAnterior);

            await expect(
                service.registrarLance('1', '1', 90000, '127.0.0.1', 'test'),
            ).rejects.toThrow(BadRequestException);
        });
    });

    describe('buscarLancesPorDisputa', () => {
        it('deve retornar lista de lances', async () => {
            const mockLances = [
                {
                    id: '1',
                    disputaId: '1',
                    licitanteId: '1',
                    valorCentavos: 100000,
                    horario: new Date(),
                    licitante: {
                        id: '1',
                        nome: 'Teste',
                        tipoEmpresa: TipoEmpresa.ME,
                    },
                },
            ];

            jest.spyOn(prismaService.lance, 'findMany').mockResolvedValue(mockLances);

            const result = await service.buscarLancesPorDisputa('1');

            expect(result).toBeDefined();
            expect(result).toHaveLength(1);
            expect(result[0].valorCentavos).toBe(100000);
        });
    });

    describe('buscarUltimoLance', () => {
        it('deve retornar o último lance', async () => {
            const mockLance = {
                id: '1',
                disputaId: '1',
                licitanteId: '1',
                valorCentavos: 100000,
                horario: new Date(),
                licitante: {
                    id: '1',
                    nome: 'Teste',
                    tipoEmpresa: TipoEmpresa.ME,
                },
            };

            jest.spyOn(prismaService.lance, 'findFirst').mockResolvedValue(mockLance);

            const result = await service.buscarUltimoLance('1');

            expect(result).toBeDefined();
            expect(result.valorCentavos).toBe(100000);
        });
    });
}); 