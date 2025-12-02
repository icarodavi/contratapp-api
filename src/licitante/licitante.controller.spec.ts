import { Test, TestingModule } from '@nestjs/testing';
import { LicitanteController } from './licitante.controller';
import { LicitanteService } from './licitante.service';

describe('LicitanteController', () => {
    let controller: LicitanteController;
    let service: LicitanteService;

    const mockLicitanteService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        findByUsuario: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [LicitanteController],
            providers: [
                { provide: LicitanteService, useValue: mockLicitanteService },
            ],
        }).compile();

        controller = module.get<LicitanteController>(LicitanteController);
        service = module.get<LicitanteService>(LicitanteService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a licitante', async () => {
            const dto: any = { cnpj: '123' };
            const result = { id: 'l1', ...dto };
            mockLicitanteService.create.mockResolvedValue(result);

            expect(await controller.create(dto)).toEqual(result);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all licitantes', async () => {
            const result = [{ id: 'l1' }];
            mockLicitanteService.findAll.mockResolvedValue(result);

            expect(await controller.findAll()).toEqual(result);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a licitante', async () => {
            const result = { id: 'l1' };
            mockLicitanteService.findOne.mockResolvedValue(result);

            expect(await controller.findOne('l1')).toEqual(result);
            expect(service.findOne).toHaveBeenCalledWith('l1');
        });
    });

    describe('findByUsuario', () => {
        it('should return a licitante by user id', async () => {
            const result = { id: 'l1' };
            mockLicitanteService.findByUsuario.mockResolvedValue(result);

            expect(await controller.findByUsuario('u1')).toEqual(result);
            expect(service.findByUsuario).toHaveBeenCalledWith('u1');
        });
    });

    describe('update', () => {
        it('should update a licitante', async () => {
            const dto: any = { razaoSocial: 'Updated' };
            const result = { id: 'l1', ...dto };
            mockLicitanteService.update.mockResolvedValue(result);

            expect(await controller.update('l1', dto)).toEqual(result);
            expect(service.update).toHaveBeenCalledWith('l1', dto);
        });
    });

    describe('remove', () => {
        it('should remove a licitante', async () => {
            const result = { id: 'l1' };
            mockLicitanteService.remove.mockResolvedValue(result);

            expect(await controller.remove('l1')).toEqual(result);
            expect(service.remove).toHaveBeenCalledWith('l1');
        });
    });
});
