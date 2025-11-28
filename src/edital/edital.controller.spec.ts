import { Test, TestingModule } from '@nestjs/testing';
import { EditalController } from './edital.controller';
import { EditalService } from './edital.service';

describe('EditalController', () => {
    let controller: EditalController;
    let service: EditalService;

    const mockEditalService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        findByNumero: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EditalController],
            providers: [
                { provide: EditalService, useValue: mockEditalService },
            ],
        }).compile();

        controller = module.get<EditalController>(EditalController);
        service = module.get<EditalService>(EditalService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create an edital', async () => {
            const dto: any = { numero: '001/2024' };
            mockEditalService.create.mockResolvedValue(dto);
            expect(await controller.create(dto)).toEqual(dto);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all editais', async () => {
            mockEditalService.findAll.mockResolvedValue([]);
            expect(await controller.findAll()).toEqual([]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return an edital', async () => {
            mockEditalService.findOne.mockResolvedValue({ id: 'e1' });
            expect(await controller.findOne('e1')).toEqual({ id: 'e1' });
            expect(service.findOne).toHaveBeenCalledWith('e1');
        });
    });

    describe('findByNumero', () => {
        it('should return an edital by numero', async () => {
            mockEditalService.findByNumero.mockResolvedValue({ numero: '001/2024' });
            expect(await controller.findByNumero('001/2024')).toEqual({ numero: '001/2024' });
            expect(service.findByNumero).toHaveBeenCalledWith('001/2024');
        });
    });

    describe('update', () => {
        it('should update an edital', async () => {
            const dto: any = { objeto: 'Updated' };
            mockEditalService.update.mockResolvedValue(dto);
            expect(await controller.update('e1', dto)).toEqual(dto);
            expect(service.update).toHaveBeenCalledWith('e1', dto);
        });
    });

    describe('remove', () => {
        it('should remove an edital', async () => {
            mockEditalService.remove.mockResolvedValue({ id: 'e1' });
            expect(await controller.remove('e1')).toEqual({ id: 'e1' });
            expect(service.remove).toHaveBeenCalledWith('e1');
        });
    });
});
