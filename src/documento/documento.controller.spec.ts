import { Test, TestingModule } from '@nestjs/testing';
import { DocumentoController } from './documento.controller';
import { DocumentoService } from './documento.service';
import { DocumentoLicitanteService } from '../documento-licitante/documento-licitante.service';
import { LogAtividadeService } from '../log-atividade/log-atividade.service';
import { DocumentoObrigatorioService } from '../documento-obrigatorio/documento-obrigatorio.service';
import { AuthGuard } from '@nestjs/passport';

describe('DocumentoController', () => {
    let controller: DocumentoController;
    let service: DocumentoService;
    let documentoLicitanteService: DocumentoLicitanteService;
    let documentoObrigatorioService: DocumentoObrigatorioService;

    const mockDocumentoService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        findByEdital: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    const mockDocumentoLicitanteService = {
        create: jest.fn(),
    };

    const mockLogAtividadeService = {
        criarLog: jest.fn(),
    };

    const mockDocumentoObrigatorioService = {
        findByEdital: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DocumentoController],
            providers: [
                { provide: DocumentoService, useValue: mockDocumentoService },
                { provide: DocumentoLicitanteService, useValue: mockDocumentoLicitanteService },
                { provide: LogAtividadeService, useValue: mockLogAtividadeService },
                { provide: DocumentoObrigatorioService, useValue: mockDocumentoObrigatorioService },
            ],
        })
            .overrideGuard(AuthGuard('jwt'))
            .useValue({ canActivate: () => true })
            .compile();

        controller = module.get<DocumentoController>(DocumentoController);
        service = module.get<DocumentoService>(DocumentoService);
        documentoLicitanteService = module.get<DocumentoLicitanteService>(DocumentoLicitanteService);
        documentoObrigatorioService = module.get<DocumentoObrigatorioService>(DocumentoObrigatorioService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create a document', async () => {
            const dto: any = { nome: 'Doc' };
            mockDocumentoService.create.mockResolvedValue(dto);
            expect(await controller.create(dto)).toEqual(dto);
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should return all documents', async () => {
            mockDocumentoService.findAll.mockResolvedValue([]);
            expect(await controller.findAll()).toEqual([]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a document', async () => {
            mockDocumentoService.findOne.mockResolvedValue({ id: 'd1' });
            expect(await controller.findOne('d1')).toEqual({ id: 'd1' });
            expect(service.findOne).toHaveBeenCalledWith('d1');
        });
    });

    describe('findByEdital', () => {
        it('should return documents by edital', async () => {
            mockDocumentoService.findByEdital.mockResolvedValue([]);
            expect(await controller.findByEdital('e1')).toEqual([]);
            expect(service.findByEdital).toHaveBeenCalledWith('e1');
        });
    });

    describe('update', () => {
        it('should update a document', async () => {
            const dto: any = { nome: 'Updated' };
            mockDocumentoService.update.mockResolvedValue(dto);
            expect(await controller.update('d1', dto)).toEqual(dto);
            expect(service.update).toHaveBeenCalledWith('d1', dto);
        });
    });

    describe('remove', () => {
        it('should remove a document', async () => {
            mockDocumentoService.remove.mockResolvedValue(undefined);
            await controller.remove('d1');
            expect(service.remove).toHaveBeenCalledWith('d1');
        });
    });

    describe('uploadDocumento', () => {
        const file: any = {
            originalname: 'doc.pdf',
            path: '/uploads/doc.pdf',
            buffer: Buffer.from('content'),
        };
        const body = {
            disputaId: 'd1',
            licitanteId: 'l1',
            tipoDocumento: 'HABILITACAO',
            versao: '1',
            editalId: 'e1',
        };
        const req = { user: { id: 'u1' } };

        it('should upload document successfully', async () => {
            mockDocumentoObrigatorioService.findByEdital.mockResolvedValue([{ tipoDocumento: 'HABILITACAO' }]);
            mockDocumentoLicitanteService.create.mockResolvedValue({ id: 'dl1' });

            const result = await controller.uploadDocumento(file, body, req);

            expect(result).toHaveProperty('documento');
            expect(documentoLicitanteService.create).toHaveBeenCalled();
            expect(mockLogAtividadeService.criarLog).toHaveBeenCalled();
        });

        it('should throw error if required fields missing', async () => {
            await expect(controller.uploadDocumento(file, {}, req)).rejects.toThrow('Campos obrigatórios não informados');
        });

        it('should throw error if document type not required', async () => {
            mockDocumentoObrigatorioService.findByEdital.mockResolvedValue([{ tipoDocumento: 'OUTRO' }]);
            await expect(controller.uploadDocumento(file, body, req)).rejects.toThrow('Tipo de documento não exigido para este edital');
        });
    });
});
