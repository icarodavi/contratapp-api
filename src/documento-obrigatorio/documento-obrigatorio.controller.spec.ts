import { Test, TestingModule } from '@nestjs/testing';
import { DocumentoObrigatorioController } from './documento-obrigatorio.controller';
import { DocumentoObrigatorioService } from './documento-obrigatorio.service';

describe('DocumentoObrigatorioController', () => {
    let controller: DocumentoObrigatorioController;
    let service: DocumentoObrigatorioService;

    const mockDocumentoObrigatorioService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        findByEdital: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DocumentoObrigatorioController],
            providers: [
                { provide: DocumentoObrigatorioService, useValue: mockDocumentoObrigatorioService },
            ],
        }).compile();

        controller = module.get<DocumentoObrigatorioController>(DocumentoObrigatorioController);
        service = module.get<DocumentoObrigatorioService>(DocumentoObrigatorioService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create a document', async () => {
            const dto: any = { descricao: 'Doc' };
            mockDocumentoObrigatorioService.create.mockResolvedValue(dto);
            expect(await controller.create(dto)).toEqual(dto);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all documents', async () => {
            mockDocumentoObrigatorioService.findAll.mockResolvedValue([]);
            expect(await controller.findAll()).toEqual([]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a document', async () => {
            mockDocumentoObrigatorioService.findOne.mockResolvedValue({ id: 'd1' });
            expect(await controller.findOne('d1')).toEqual({ id: 'd1' });
            expect(service.findOne).toHaveBeenCalledWith('d1');
        });
    });

    describe('findByEdital', () => {
        it('should return documents by edital', async () => {
            mockDocumentoObrigatorioService.findByEdital.mockResolvedValue([]);
            expect(await controller.findByEdital('e1')).toEqual([]);
            expect(service.findByEdital).toHaveBeenCalledWith('e1');
        });
    });

    describe('update', () => {
        it('should update a document', async () => {
            const dto: any = { descricao: 'Updated' };
            mockDocumentoObrigatorioService.update.mockResolvedValue(dto);
            expect(await controller.update('d1', dto)).toEqual(dto);
            expect(service.update).toHaveBeenCalledWith('d1', dto);
        });
    });

    describe('remove', () => {
        it('should remove a document', async () => {
            mockDocumentoObrigatorioService.remove.mockResolvedValue(undefined);
            await controller.remove('d1');
            expect(service.remove).toHaveBeenCalledWith('d1');
        });
    });
});
