import { Test, TestingModule } from '@nestjs/testing';
import { RelatorioService } from './relatorio.service';
import { PrismaService } from '../database/database.service';
import { NotFoundException } from '@nestjs/common';

const mockCreatePdfKitDocument = jest.fn().mockReturnValue({
    on: jest.fn((event, callback) => {
        if (event === 'data') callback(Buffer.from('pdf-chunk'));
        if (event === 'end') callback();
    }),
    end: jest.fn(),
});

const mockPdfPrinter = jest.fn().mockImplementation(() => ({
    createPdfKitDocument: mockCreatePdfKitDocument,
}));

jest.mock('pdfmake', () => mockPdfPrinter);
jest.mock('qrcode', () => ({
    toDataURL: jest.fn().mockResolvedValue('data:image/png;base64,mock'),
}));

describe('RelatorioService', () => {
    let service: RelatorioService;
    let prismaService: PrismaService;

    const mockPrismaService = {
        edital: {
            findUnique: jest.fn(),
        },
        disputa: {
            findUnique: jest.fn(),
        },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                RelatorioService,
                {
                    provide: PrismaService,
                    useValue: mockPrismaService,
                },
            ],
        }).compile();

        service = module.get<RelatorioService>(RelatorioService);
        prismaService = module.get<PrismaService>(PrismaService);
    });

    it('deve ser definido', () => {
        expect(service).toBeDefined();
    });

    describe('gerarEditalPdf', () => {
        it('deve gerar um PDF de edital com sucesso', async () => {
            const edital = {
                id: '1',
                numero: '001/2024',
                objeto: 'Teste',
                dataAbertura: new Date(),
                lotes: [
                    {
                        numero: 1,
                        descricao: 'Lote 1',
                        itens: [
                            {
                                quantidade: 10,
                                descricao: 'Item 1',
                                valorEstimado: 10000,
                            },
                        ],
                    },
                ],
            };

            mockPrismaService.edital.findUnique.mockResolvedValue(edital);

            const buffer = await service.gerarEditalPdf('1');

            expect(buffer).toBeInstanceOf(Buffer);
            expect(buffer.length).toBeGreaterThan(0);
        });

        it('deve lançar erro se edital não encontrado', async () => {
            mockPrismaService.edital.findUnique.mockResolvedValue(null);

            await expect(service.gerarEditalPdf('1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('gerarAtaPdf', () => {
        it('deve gerar um PDF de ata com sucesso', async () => {
            const disputa = {
                id: '1',
                edital: {
                    numero: '001/2024',
                },
                lances: [
                    {
                        valorCentavos: 900000,
                        horario: new Date(),
                        licitante: {
                            razaoSocial: 'Empresa X',
                        },
                    },
                ],
            };

            mockPrismaService.disputa.findUnique.mockResolvedValue(disputa);

            const buffer = await service.gerarAtaPdf('1');

            expect(buffer).toBeInstanceOf(Buffer);
            expect(buffer.length).toBeGreaterThan(0);
        });

        it('deve lançar NotFoundException se a disputa não for encontrada', async () => {
            mockPrismaService.disputa.findUnique.mockResolvedValue(null);

            await expect(service.gerarAtaPdf('invalid-id')).rejects.toThrow(NotFoundException);
        });
    });
});
