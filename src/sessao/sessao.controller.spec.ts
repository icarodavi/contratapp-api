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

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create a session', async () => {
            const dto: any = { licitanteId: 'l1' };
            mockSessaoService.create.mockResolvedValue(dto);
            expect(await controller.create(dto)).toEqual(dto);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all sessions', async () => {
            mockSessaoService.findAll.mockResolvedValue([]);
            expect(await controller.findAll()).toEqual([]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a session', async () => {
            mockSessaoService.findOne.mockResolvedValue({ id: 's1' });
            expect(await controller.findOne('s1')).toEqual({ id: 's1' });
            expect(service.findOne).toHaveBeenCalledWith('s1');
        });
    });

    describe('findByDisputa', () => {
        it('should return sessions by dispute', async () => {
            mockSessaoService.findByDisputa.mockResolvedValue([]);
            expect(await controller.findByDisputa('d1')).toEqual([]);
            expect(service.findByDisputa).toHaveBeenCalledWith('d1');
        });
    });

    describe('findByLicitante', () => {
        it('should return sessions by licitante', async () => {
            mockSessaoService.findByLicitante.mockResolvedValue([]);
            expect(await controller.findByLicitante('l1')).toEqual([]);
            expect(service.findByLicitante).toHaveBeenCalledWith('l1');
        });
    });

    describe('update', () => {
        it('should update a session', async () => {
            const dto: any = { ip: '1.1.1.1' };
            mockSessaoService.update.mockResolvedValue(dto);
            expect(await controller.update('s1', dto)).toEqual(dto);
            expect(service.update).toHaveBeenCalledWith('s1', dto);
        });
    });

    describe('remove', () => {
        it('should remove a session', async () => {
            mockSessaoService.remove.mockResolvedValue({ id: 's1' });
            expect(await controller.remove('s1')).toEqual({ id: 's1' });
            expect(service.remove).toHaveBeenCalledWith('s1');
        });
    });
});
