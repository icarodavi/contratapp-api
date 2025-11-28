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

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create a resource', async () => {
            const dto: any = { motivo: 'Motivo' };
            mockRecursoService.create.mockResolvedValue(dto);
            expect(await controller.create(dto)).toEqual(dto);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all resources', async () => {
            mockRecursoService.findAll.mockResolvedValue([]);
            expect(await controller.findAll()).toEqual([]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a resource', async () => {
            mockRecursoService.findOne.mockResolvedValue({ id: 'r1' });
            expect(await controller.findOne('r1')).toEqual({ id: 'r1' });
            expect(service.findOne).toHaveBeenCalledWith('r1');
        });
    });

    describe('update', () => {
        it('should update a resource', async () => {
            const dto: any = { status: 'DEFERIDO' };
            mockRecursoService.update.mockResolvedValue(dto);
            expect(await controller.update('r1', dto)).toEqual(dto);
            expect(service.update).toHaveBeenCalledWith('r1', dto);
        });
    });

    describe('remove', () => {
        it('should remove a resource', async () => {
            mockRecursoService.remove.mockResolvedValue({ id: 'r1' });
            expect(await controller.remove('r1')).toEqual({ id: 'r1' });
            expect(service.remove).toHaveBeenCalledWith('r1');
        });
    });
});
