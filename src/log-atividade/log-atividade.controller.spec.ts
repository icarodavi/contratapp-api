import { Test, TestingModule } from '@nestjs/testing';
import { LogAtividadeController } from './log-atividade.controller';
import { LogAtividadeService } from './log-atividade.service';
import { TipoAtividade } from '@generated/prisma/client';

describe('LogAtividadeController', () => {
    let controller: LogAtividadeController;
    let service: LogAtividadeService;

    const mockService = {
        criarLog: jest.fn(),
        buscarPorDisputa: jest.fn(),
        buscarPorUsuario: jest.fn(),
        buscarPorTipo: jest.fn(),
        buscarPorPeriodo: jest.fn(),
        buscarPorEntidade: jest.fn(),
        buscarErros: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [LogAtividadeController],
            providers: [
                { provide: LogAtividadeService, useValue: mockService },
            ],
        }).compile();

        controller = module.get<LogAtividadeController>(LogAtividadeController);
        service = module.get<LogAtividadeService>(LogAtividadeService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('criarLog', () => {
        it('should create a log', async () => {
            const params = { tipo: TipoAtividade.SISTEMA_ERRO, acao: 'Login', modulo: 'Auth' };
            mockService.criarLog.mockResolvedValue(params);
            expect(await controller.criarLog(params)).toEqual(params);
            expect(service.criarLog).toHaveBeenCalledWith(params);
        });
    });

    describe('buscarPorDisputa', () => {
        it('should return logs', async () => {
            mockService.buscarPorDisputa.mockResolvedValue([]);
            expect(await controller.buscarPorDisputa('d1')).toEqual([]);
            expect(service.buscarPorDisputa).toHaveBeenCalledWith('d1');
        });
    });

    describe('buscarPorUsuario', () => {
        it('should return logs', async () => {
            mockService.buscarPorUsuario.mockResolvedValue([]);
            expect(await controller.buscarPorUsuario('u1')).toEqual([]);
            expect(service.buscarPorUsuario).toHaveBeenCalledWith('u1');
        });
    });

    describe('buscarPorTipo', () => {
        it('should return logs', async () => {
            mockService.buscarPorTipo.mockResolvedValue([]);
            expect(await controller.buscarPorTipo(TipoAtividade.SISTEMA_ERRO)).toEqual([]);
            expect(service.buscarPorTipo).toHaveBeenCalledWith(TipoAtividade.SISTEMA_ERRO);
        });
    });

    describe('buscarPorPeriodo', () => {
        it('should return logs', async () => {
            mockService.buscarPorPeriodo.mockResolvedValue([]);
            const start = '2024-01-01';
            const end = '2024-01-02';
            expect(await controller.buscarPorPeriodo(start, end)).toEqual([]);
            expect(service.buscarPorPeriodo).toHaveBeenCalledWith(new Date(start), new Date(end));
        });
    });

    describe('buscarPorEntidade', () => {
        it('should return logs', async () => {
            mockService.buscarPorEntidade.mockResolvedValue([]);
            expect(await controller.buscarPorEntidade('e1', 'TIPO')).toEqual([]);
            expect(service.buscarPorEntidade).toHaveBeenCalledWith('e1', 'TIPO');
        });
    });

    describe('buscarErros', () => {
        it('should return logs', async () => {
            mockService.buscarErros.mockResolvedValue([]);
            expect(await controller.buscarErros()).toEqual([]);
            expect(service.buscarErros).toHaveBeenCalled();
        });
    });
});
