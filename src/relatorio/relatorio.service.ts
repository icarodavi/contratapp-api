import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import * as path from 'path';
import * as QRCode from 'qrcode';

@Injectable()
export class RelatorioService {
    private printer: any;

    constructor(private prisma: PrismaService) {
        // Lazy load pdfmake to avoid issues in test environment
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const PdfPrinter = require('pdfmake');

        const fonts = {
            Roboto: {
                normal: path.resolve('fonts/Roboto-Regular.ttf'),
                bold: path.resolve('fonts/Roboto-Medium.ttf'),
                italics: path.resolve('fonts/Roboto-Italic.ttf'),
                bolditalics: path.resolve('fonts/Roboto-MediumItalic.ttf')
            }
        };
        this.printer = new PdfPrinter(fonts);
    }

    async gerarEditalPdf(editalId: string): Promise<Buffer> {
        const edital = await this.prisma.edital.findUnique({
            where: { id: editalId },
            include: {
                lotes: {
                    include: {
                        itens: true
                    }
                }
            }
        });

        if (!edital) {
            throw new NotFoundException('Edital não encontrado');
        }

        const docDefinition: any = {
            content: [
                { text: `Edital Nº ${edital.numero}`, style: 'header' },
                { text: `Objeto: ${edital.objeto}`, style: 'subheader' },
                { text: `Data de Abertura: ${edital.dataAbertura.toLocaleString()}`, margin: [0, 10, 0, 20] },

                { text: 'Lotes e Itens', style: 'sectionHeader' },
                ...edital.lotes.map(lote => [
                    { text: `Lote ${lote.numero}: ${lote.descricao}`, style: 'loteHeader' },
                    {
                        ul: lote.itens.map(item =>
                            `${item.quantidade}x ${item.descricao} (Valor Ref: R$ ${(Number(item.valorEstimado) / 100).toFixed(2)})`
                        )
                    }
                ]).flat()
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                sectionHeader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 15, 0, 10]
                },
                loteHeader: {
                    fontSize: 12,
                    bold: true,
                    margin: [0, 5, 0, 5]
                }
            }
        };

        return this.createPdfBuffer(docDefinition);
    }

    async gerarAtaPdf(disputaId: string): Promise<Buffer> {
        const disputa = await this.prisma.disputa.findUnique({
            where: { id: disputaId },
            include: {
                edital: true,
                lances: {
                    orderBy: { valorCentavos: 'asc' },
                    include: {
                        licitante: true
                    }
                }
            }
        });

        if (!disputa) {
            throw new NotFoundException('Disputa não encontrada');
        }

        // Generate QR Code
        const validationUrl = `https://contratapp.com.br/validar/${disputa.id}`;
        const qrCodeDataUrl = await QRCode.toDataURL(validationUrl);

        const docDefinition: any = {
            content: [
                { text: 'Ata da Disputa', style: 'header' },
                { text: `Edital: ${disputa.edital.numero}`, style: 'subheader' },
                { text: `Data: ${new Date().toLocaleString()}`, alignment: 'right' },

                { text: 'Histórico de Lances', style: 'sectionHeader' },
                {
                    table: {
                        headerRows: 1,
                        widths: ['*', 'auto', 'auto', 'auto'],
                        body: [
                            ['Licitante', 'Valor (R$)', 'Data/Hora', 'Tipo'],
                            ...disputa.lances.map(lance => [
                                lance.licitante.razaoSocial,
                                (Number(lance.valorCentavos) / 100).toFixed(2),
                                lance.horario.toLocaleString(),
                                'LANCE'
                            ])
                        ]
                    }
                },

                { text: 'Validação', style: 'sectionHeader', margin: [0, 20, 0, 10] },
                { image: qrCodeDataUrl, width: 100, alignment: 'center' },
                { text: 'Escaneie o QR Code para validar este documento', alignment: 'center', fontSize: 10 }
            ],
            styles: {
                header: {
                    fontSize: 20,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 0, 0, 20]
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 0, 0, 20]
                },
                sectionHeader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 20, 0, 10]
                }
            }
        };

        return this.createPdfBuffer(docDefinition);
    }

    private createPdfBuffer(docDefinition: any): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            const pdfDoc = this.printer.createPdfKitDocument(docDefinition);
            const chunks: Buffer[] = [];

            pdfDoc.on('data', (chunk) => chunks.push(chunk));
            pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
            pdfDoc.on('error', (err) => reject(err));

            pdfDoc.end();
        });
    }
}
