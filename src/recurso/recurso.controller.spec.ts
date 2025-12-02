import { Test, TestingModule } from '@nestjs/testing';
import { RecursoController } from './recurso.controller';
import { RecursoService } from './recurso.service';

describe('RecursoController', () => {
    let controller: RecursoController;
    let service: RecursoService;

    const mockRecursoService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [RecursoController],
            providers: [
                { provide: RecursoService, useValue: mockRecursoService },
            ],
        }).compile();

        controller = module.get<RecursoController>(RecursoController);
        service = module.get<RecursoService>(RecursoService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a recurso', async () => {
            const dto: any = { motivo: 'Motivo' };
            const result = { id: 'r1', ...dto };
            mockRecursoService.create.mockResolvedValue(result);

            expect(await controller.create(dto)).toEqual(result);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all recursos', async () => {
            const result = [{ id: 'r1' }];
            mockRecursoService.findAll.mockResolvedValue(result);

            expect(await controller.findAll()).toEqual(result);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a recurso', async () => {
            const result = { id: 'r1' };
            mockRecursoService.findOne.mockResolvedValue(result);

            expect(await controller.findOne('r1')).toEqual(result);
            expect(service.findOne).toHaveBeenCalledWith('r1');
        });
    });

    describe('update', () => {
        it('should update a recurso', async () => {
            const dto: any = { resposta: 'Resposta' };
            const result = { id: 'r1', ...dto };
            mockRecursoService.update.mockResolvedValue(result);

            expect(await controller.update('r1', dto)).toEqual(result);
            expect(service.update).toHaveBeenCalledWith('r1', dto);
        });
    });

    describe('remove', () => {
        it('should remove a recurso', async () => {
            const result = { id: 'r1' };
            mockRecursoService.remove.mockResolvedValue(result);

            expect(await controller.remove('r1')).toEqual(result);
            expect(service.remove).toHaveBeenCalledWith('r1');
        });
    });
});
