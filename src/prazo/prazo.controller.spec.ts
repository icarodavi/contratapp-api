import { Test, TestingModule } from '@nestjs/testing';
import { PrazoController } from './prazo.controller';
import { PrazoService } from './prazo.service';

describe('PrazoController', () => {
    let controller: PrazoController;
    let service: PrazoService;

    const mockPrazoService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        findByEdital: jest.fn(),
        findByLicitante: jest.fn(),
        findByItem: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
        verificarPrazosAtrasados: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PrazoController],
            providers: [
                { provide: PrazoService, useValue: mockPrazoService },
            ],
        }).compile();

        controller = module.get<PrazoController>(PrazoController);
        service = module.get<PrazoService>(PrazoService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create a deadline', async () => {
            const dto: any = { descricao: 'Prazo' };
            mockPrazoService.create.mockResolvedValue(dto);
            expect(await controller.create(dto)).toEqual(dto);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all deadlines', async () => {
            mockPrazoService.findAll.mockResolvedValue([]);
            expect(await controller.findAll()).toEqual([]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a deadline', async () => {
            mockPrazoService.findOne.mockResolvedValue({ id: 'p1' });
            expect(await controller.findOne('p1')).toEqual({ id: 'p1' });
            expect(service.findOne).toHaveBeenCalledWith('p1');
        });
    });

    describe('findByEdital', () => {
        it('should return deadlines by edital', async () => {
            mockPrazoService.findByEdital.mockResolvedValue([]);
            expect(await controller.findByEdital('e1')).toEqual([]);
            expect(service.findByEdital).toHaveBeenCalledWith('e1');
        });
    });

    describe('findByLicitante', () => {
        it('should return deadlines by licitante', async () => {
            mockPrazoService.findByLicitante.mockResolvedValue([]);
            expect(await controller.findByLicitante('l1')).toEqual([]);
            expect(service.findByLicitante).toHaveBeenCalledWith('l1');
        });
    });

    describe('findByItem', () => {
        it('should return deadlines by item', async () => {
            mockPrazoService.findByItem.mockResolvedValue([]);
            expect(await controller.findByItem('i1')).toEqual([]);
            expect(service.findByItem).toHaveBeenCalledWith('i1');
        });
    });

    describe('update', () => {
        it('should update a deadline', async () => {
            const dto: any = { status: 'CONCLUIDO' };
            mockPrazoService.update.mockResolvedValue(dto);
            expect(await controller.update('p1', dto)).toEqual(dto);
            expect(service.update).toHaveBeenCalledWith('p1', dto);
        });
    });

    describe('remove', () => {
        it('should remove a deadline', async () => {
            mockPrazoService.remove.mockResolvedValue({ id: 'p1' });
            expect(await controller.remove('p1')).toEqual({ id: 'p1' });
            expect(service.remove).toHaveBeenCalledWith('p1');
        });
    });

    describe('verificarPrazosAtrasados', () => {
        it('should verify expired deadlines', async () => {
            mockPrazoService.verificarPrazosAtrasados.mockResolvedValue({ count: 1 });
            expect(await controller.verificarPrazosAtrasados()).toEqual({ count: 1 });
            expect(service.verificarPrazosAtrasados).toHaveBeenCalled();
        });
    });
});
