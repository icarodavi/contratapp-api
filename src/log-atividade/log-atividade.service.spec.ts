import { Test, TestingModule } from '@nestjs/testing';
import { LogAtividadeService } from './log-atividade.service';
import { PrismaService } from '../database/database.service';
import { TipoAtividade } from '@prisma/client';

const mockPrismaService = {
    logAtividade: {
        create: jest.fn(),
        findMany: jest.fn(),
    },
};

describe('LogAtividadeService', () => {
    let service: LogAtividadeService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                LogAtividadeService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<LogAtividadeService>(LogAtividadeService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('criarLog', () => {
        it('should create a log', async () => {
            const params = {
                tipo: TipoAtividade.SISTEMA_ERRO,
                acao: 'Login',
                modulo: 'Auth',
            };
            prisma.logAtividade.create.mockResolvedValue({ id: 'log1', ...params });

            const result = await service.criarLog(params);
            expect(result).toHaveProperty('id', 'log1');
            expect(prisma.logAtividade.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({
                    tipo: TipoAtividade.SISTEMA_ERRO,
                    acao: 'Login',
                    modulo: 'Auth',
                }),
            }));
        });
    });

    describe('buscarPorDisputa', () => {
        it('should return logs for a dispute', async () => {
            prisma.logAtividade.findMany.mockResolvedValue([{ id: 'log1' }]);
            const result = await service.buscarPorDisputa('d1');
            expect(result).toHaveLength(1);
            expect(prisma.logAtividade.findMany).toHaveBeenCalledWith(expect.objectContaining({
                where: { disputaId: 'd1' },
            }));
        });
    });

    describe('buscarPorUsuario', () => {
        it('should return logs for a user', async () => {
            prisma.logAtividade.findMany.mockResolvedValue([{ id: 'log1' }]);
            const result = await service.buscarPorUsuario('u1');
            expect(result).toHaveLength(1);
            expect(prisma.logAtividade.findMany).toHaveBeenCalledWith(expect.objectContaining({
                where: { usuarioId: 'u1' },
            }));
        });
    });

    describe('buscarPorTipo', () => {
        it('should return logs for a type', async () => {
            prisma.logAtividade.findMany.mockResolvedValue([{ id: 'log1' }]);
            const result = await service.buscarPorTipo(TipoAtividade.SISTEMA_ERRO);
            expect(result).toHaveLength(1);
            expect(prisma.logAtividade.findMany).toHaveBeenCalledWith(expect.objectContaining({
                where: { tipo: TipoAtividade.SISTEMA_ERRO },
            }));
        });
    });

    describe('buscarPorPeriodo', () => {
        it('should return logs for a period', async () => {
            prisma.logAtividade.findMany.mockResolvedValue([{ id: 'log1' }]);
            const start = new Date();
            const end = new Date();
            const result = await service.buscarPorPeriodo(start, end);
            expect(result).toHaveLength(1);
            expect(prisma.logAtividade.findMany).toHaveBeenCalledWith(expect.objectContaining({
                where: {
                    data: {
                        gte: start,
                        lte: end,
                    },
                },
            }));
        });
    });

    describe('buscarPorEntidade', () => {
        it('should return logs for an entity', async () => {
            prisma.logAtividade.findMany.mockResolvedValue([{ id: 'log1' }]);
            const result = await service.buscarPorEntidade('e1', 'TIPO');
            expect(result).toHaveLength(1);
            expect(prisma.logAtividade.findMany).toHaveBeenCalledWith(expect.objectContaining({
                where: {
                    entidadeId: 'e1',
                    entidadeTipo: 'TIPO',
                },
            }));
        });
    });

    describe('buscarErros', () => {
        it('should return error logs', async () => {
            prisma.logAtividade.findMany.mockResolvedValue([{ id: 'log1' }]);
            const result = await service.buscarErros();
            expect(result).toHaveLength(1);
            expect(prisma.logAtividade.findMany).toHaveBeenCalledWith(expect.objectContaining({
                where: {
                    OR: [
                        { status: 'ERRO' },
                        { nivel: 'ERROR' },
                    ],
                },
            }));
        });
    });
});
