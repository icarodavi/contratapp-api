import { Test, TestingModule } from '@nestjs/testing';
import { PropostaController } from './proposta.controller';
import { PropostaService } from './proposta.service';

describe('PropostaController', () => {
    let controller: PropostaController;
    let service: PropostaService;

    const mockPropostaService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        findByDisputa: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PropostaController],
            providers: [
                { provide: PropostaService, useValue: mockPropostaService },
            ],
        }).compile();

        controller = module.get<PropostaController>(PropostaController);
        service = module.get<PropostaService>(PropostaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create a proposal', async () => {
            const dto: any = { disputaId: 'd1' };
            mockPropostaService.create.mockResolvedValue(dto);
            expect(await controller.create(dto)).toEqual(dto);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all proposals', async () => {
            mockPropostaService.findAll.mockResolvedValue([]);
            expect(await controller.findAll()).toEqual([]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a proposal', async () => {
            mockPropostaService.findOne.mockResolvedValue({ id: 'p1' });
            expect(await controller.findOne('p1')).toEqual({ id: 'p1' });
            expect(service.findOne).toHaveBeenCalledWith('p1');
        });
    });

    describe('findByDisputa', () => {
        it('should return proposals by dispute', async () => {
            mockPropostaService.findByDisputa.mockResolvedValue([]);
            expect(await controller.findByDisputa('d1')).toEqual([]);
            expect(service.findByDisputa).toHaveBeenCalledWith('d1');
        });
    });
});
