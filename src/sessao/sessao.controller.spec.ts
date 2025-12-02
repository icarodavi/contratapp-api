import { Test, TestingModule } from '@nestjs/testing';
import { SessaoController } from './sessao.controller';
import { SessaoService } from './sessao.service';

describe('SessaoController', () => {
    let controller: SessaoController;
    let service: SessaoService;

    const mockSessaoService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        findByDisputa: jest.fn(),
        findByLicitante: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SessaoController],
            providers: [
                { provide: SessaoService, useValue: mockSessaoService },
            ],
        }).compile();

        controller = module.get<SessaoController>(SessaoController);
        service = module.get<SessaoService>(SessaoService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a sessao', async () => {
            const dto: any = { ip: '127.0.0.1' };
            const result = { id: 's1', ...dto };
            mockSessaoService.create.mockResolvedValue(result);

            expect(await controller.create(dto)).toEqual(result);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all sessoes', async () => {
            const result = [{ id: 's1' }];
            mockSessaoService.findAll.mockResolvedValue(result);

            expect(await controller.findAll()).toEqual(result);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a sessao', async () => {
            const result = { id: 's1' };
            mockSessaoService.findOne.mockResolvedValue(result);

            expect(await controller.findOne('s1')).toEqual(result);
            expect(service.findOne).toHaveBeenCalledWith('s1');
        });
    });

    describe('findByDisputa', () => {
        it('should return sessoes by disputa', async () => {
            const result = [{ id: 's1' }];
            mockSessaoService.findByDisputa.mockResolvedValue(result);

            expect(await controller.findByDisputa('d1')).toEqual(result);
            expect(service.findByDisputa).toHaveBeenCalledWith('d1');
        });
    });

    describe('findByLicitante', () => {
        it('should return sessoes by licitante', async () => {
            const result = [{ id: 's1' }];
            mockSessaoService.findByLicitante.mockResolvedValue(result);

            expect(await controller.findByLicitante('l1')).toEqual(result);
            expect(service.findByLicitante).toHaveBeenCalledWith('l1');
        });
    });

    describe('update', () => {
        it('should update a sessao', async () => {
            const dto: any = { ip: '127.0.0.2' };
            const result = { id: 's1', ...dto };
            mockSessaoService.update.mockResolvedValue(result);

            expect(await controller.update('s1', dto)).toEqual(result);
            expect(service.update).toHaveBeenCalledWith('s1', dto);
        });
    });

    describe('remove', () => {
        it('should remove a sessao', async () => {
            const result = { id: 's1' };
            mockSessaoService.remove.mockResolvedValue(result);

            expect(await controller.remove('s1')).toEqual(result);
            expect(service.remove).toHaveBeenCalledWith('s1');
        });
    });
});
