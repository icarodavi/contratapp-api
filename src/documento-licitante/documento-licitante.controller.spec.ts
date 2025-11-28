import { Test, TestingModule } from '@nestjs/testing';
import { DocumentoLicitanteController } from './documento-licitante.controller';
import { DocumentoLicitanteService } from './documento-licitante.service';

describe('DocumentoLicitanteController', () => {
    let controller: DocumentoLicitanteController;
    let service: DocumentoLicitanteService;

    const mockDocumentoLicitanteService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        findByDisputa: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DocumentoLicitanteController],
            providers: [
                { provide: DocumentoLicitanteService, useValue: mockDocumentoLicitanteService },
            ],
        }).compile();

        controller = module.get<DocumentoLicitanteController>(DocumentoLicitanteController);
        service = module.get<DocumentoLicitanteService>(DocumentoLicitanteService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create a document', async () => {
            const dto: any = { nomeOriginal: 'doc.pdf' };
            mockDocumentoLicitanteService.create.mockResolvedValue(dto);
            expect(await controller.create(dto)).toEqual(dto);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all documents', async () => {
            mockDocumentoLicitanteService.findAll.mockResolvedValue([]);
            expect(await controller.findAll()).toEqual([]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a document', async () => {
            mockDocumentoLicitanteService.findOne.mockResolvedValue({ id: 'dl1' });
            expect(await controller.findOne('dl1')).toEqual({ id: 'dl1' });
            expect(service.findOne).toHaveBeenCalledWith('dl1');
        });
    });

    describe('findByDisputa', () => {
        it('should return documents by dispute', async () => {
            mockDocumentoLicitanteService.findByDisputa.mockResolvedValue([]);
            expect(await controller.findByDisputa('d1')).toEqual([]);
            expect(service.findByDisputa).toHaveBeenCalledWith('d1');
        });
    });

    describe('update', () => {
        it('should update a document', async () => {
            const dto: any = { status: 'VALIDADO' };
            mockDocumentoLicitanteService.update.mockResolvedValue(dto);
            expect(await controller.update('dl1', dto)).toEqual(dto);
            expect(service.update).toHaveBeenCalledWith('dl1', dto);
        });
    });

    describe('remove', () => {
        it('should remove a document', async () => {
            mockDocumentoLicitanteService.remove.mockResolvedValue({ id: 'dl1' });
            expect(await controller.remove('dl1')).toEqual({ id: 'dl1' });
            expect(service.remove).toHaveBeenCalledWith('dl1');
        });
    });
});
