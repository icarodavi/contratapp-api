import { Test, TestingModule } from '@nestjs/testing';
import { SancaoController } from './sancao.controller';
import { SancaoService } from './sancao.service';

describe('SancaoController', () => {
    let controller: SancaoController;
    let service: SancaoService;

    const mockSancaoService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        findByEdital: jest.fn(),
        findByLicitante: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SancaoController],
            providers: [
                { provide: SancaoService, useValue: mockSancaoService },
            ],
        }).compile();

        controller = module.get<SancaoController>(SancaoController);
        service = module.get<SancaoService>(SancaoService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create a sanction', async () => {
            const dto: any = { motivo: 'Motivo' };
            mockSancaoService.create.mockResolvedValue(dto);
            expect(await controller.create(dto)).toEqual(dto);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all sanctions', async () => {
            mockSancaoService.findAll.mockResolvedValue([]);
            expect(await controller.findAll()).toEqual([]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a sanction', async () => {
            mockSancaoService.findOne.mockResolvedValue({ id: 's1' });
            expect(await controller.findOne('s1')).toEqual({ id: 's1' });
            expect(service.findOne).toHaveBeenCalledWith('s1');
        });
    });

    describe('findByEdital', () => {
        it('should return sanctions by edital', async () => {
            mockSancaoService.findByEdital.mockResolvedValue([]);
            expect(await controller.findByEdital('e1')).toEqual([]);
            expect(service.findByEdital).toHaveBeenCalledWith('e1');
        });
    });

    describe('findByLicitante', () => {
        it('should return sanctions by licitante', async () => {
            mockSancaoService.findByLicitante.mockResolvedValue([]);
            expect(await controller.findByLicitante('l1')).toEqual([]);
            expect(service.findByLicitante).toHaveBeenCalledWith('l1');
        });
    });

    describe('update', () => {
        it('should update a sanction', async () => {
            const dto: any = { status: 'REVOGADA' };
            mockSancaoService.update.mockResolvedValue(dto);
            expect(await controller.update('s1', dto)).toEqual(dto);
            expect(service.update).toHaveBeenCalledWith('s1', dto);
        });
    });

    describe('remove', () => {
        it('should remove a sanction', async () => {
            mockSancaoService.remove.mockResolvedValue({ id: 's1' });
            expect(await controller.remove('s1')).toEqual({ id: 's1' });
            expect(service.remove).toHaveBeenCalledWith('s1');
        });
    });
});
