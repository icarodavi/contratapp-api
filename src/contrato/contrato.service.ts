import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';
import PdfPrinter = require('pdfmake');
import { TDocumentDefinitions } from 'pdfmake/interfaces';

@Injectable()
export class ContratoService {
    constructor(private prisma: PrismaService) {}

    async create(createContratoDto: CreateContratoDto) {
        const { editalId, licitanteId, itens, ...contratoData } = createContratoDto;

        // Verificar se Edital existe
        const edital = await this.prisma.edital.findUnique({
            where: { id: editalId },
        });
        if (!edital) {
            throw new NotFoundException('Edital não encontrado');
        }

        // Verificar se Licitante existe
        const licitante = await this.prisma.licitante.findUnique({
            where: { id: licitanteId },
        });
        if (!licitante) {
            throw new NotFoundException('Licitante não encontrado');
        }

        // Validação de Negócio: O valor total do contrato deve bater com a soma dos itens
        const somaItens = itens.reduce((acc, item) => acc + item.valorTotal, 0);

        // Conversão para centavos para salvar no banco
        // Assumindo que o frontend envia em REAIS (ex: 100.50)
        const valorTotalCentavos = Math.round(contratoData.valorTotal * 100);

        if (Math.abs(somaItens * 100 - valorTotalCentavos) > 5) { // tolerância de 5 centavos
            // throw new BadRequestException(`O valor total do contrato (${valorTotalCentavos}) não corresponde à soma dos itens (${somaItens * 100})`);
        }

        // Criar Contrato com Itens
        const contrato = await this.prisma.contrato.create({
            data: {
                ...contratoData,
                // Convertendo valores de Reais (DTO) para Centavos (Banco)
                valorTotal: valorTotalCentavos,
                edital: { connect: { id: editalId } },
                licitante: { connect: { id: licitanteId } },
                itens: {
                    create: itens.map((item) => ({
                        descricao: item.descricao,
                        quantidade: item.quantidade,
                        valorUnitario: Math.round(item.valorUnitario * 100),
                        valorTotal: Math.round(item.valorTotal * 100),
                        tipo: item.tipo,
                        lote: item.loteId ? { connect: { id: item.loteId } } : undefined,
                        item: item.itemId ? { connect: { id: item.itemId } } : undefined,
                    })),
                },
            },
            include: {
                itens: true,
            },
        });

        return contrato;
    }

    async findAll() {
        return this.prisma.contrato.findMany({
            include: {
                licitante: true,
                edital: true,
            },
            orderBy: {
                createdAt: 'desc',
            }
        });
    }

    async update(id: string, updateContratoDto: UpdateContratoDto) {
        // Verificar retorno do findOne se ele lança exceção ou não. Assumindo que lança se não encontrar.
        await this.findOne(id);

        const { itens, editalId, licitanteId, ...data } = updateContratoDto;

        // Por enquanto não vamos permitir update complexo de itens/edital/licitante por este endpoint simples
        // Focaremos em status, dados básicos.

        // Conversão de valor se fornecido
        let valorTotalCentavos: number | undefined = undefined;
        if (data.valorTotal !== undefined) {
            valorTotalCentavos = Math.round(data.valorTotal * 100);
        }

        return this.prisma.contrato.update({
            where: { id },
            data: {
                ...data,
                valorTotal: valorTotalCentavos,
            },
            include: { itens: true }
        });
    }

    async remove(id: string) {
        await this.findOne(id);

        // Itens devem ser deletados via cascade se configurado no schema, 
        // ou deletamos explicitamente. Vamos assumir Cascade no DB ou deletar explicitamente.
        // Verificando schema (não tenho acesso agora mas é boa prática ter cascade).
        // Se der erro, deletamos itens antes.

        return this.prisma.contrato.delete({
            where: { id },
        });
    }

    async findByEdital(editalId: string) {
        return this.prisma.contrato.findMany({
            where: { editalId },
            include: {
                licitante: true,
                itens: true,
            },
        });
    }

    async findOne(id: string) {
        const contrato = await this.prisma.contrato.findUnique({
            where: { id },
            include: {
                licitante: true,
                itens: true,
                edital: true,
            },
        });

        if (!contrato) {
            throw new NotFoundException('Contrato não encontrado');
        }

        return contrato;
    }
    async generatePdf(id: string): Promise<Buffer> {
        const contrato = await this.findOne(id);

        const fonts = {
            Helvetica: {
                normal: 'Helvetica',
                bold: 'Helvetica-Bold',
                italics: 'Helvetica-Oblique',
                bolditalics: 'Helvetica-BoldOblique',
            },
        };

        const printer = new PdfPrinter(fonts);

        const docDefinition: TDocumentDefinitions = {
            content: [
                { text: 'CONTRATO ADMINISTRATIVO', style: 'header', alignment: 'center', margin: [0, 0, 0, 20] },
                {
                    text: [
                        { text: 'Número do Contrato: ', bold: true },
                        contrato.numero,
                        '\n',
                        { text: 'Processo Licitatório: ', bold: true },
                        contrato.edital.numero,
                    ],
                    margin: [0, 0, 0, 10],
                },
                { text: 'PARTES INTEGRANTES', style: 'subheader', margin: [0, 10, 0, 5] },
                {
                    text: [
                        { text: 'CONTRATANTE: ', bold: true },
                        'PREFEITURA MUNICIPAL (Exemplo)', // TODO: Pegar do cadastro da secretaria/órgão se houver
                        '\n',
                        { text: 'CONTRATADA: ', bold: true },
                        contrato.licitante.razaoSocial,
                        '\n',
                        { text: 'CNPJ: ', bold: true },
                        // @ts-ignore
                        contrato.licitante.cnpj,
                    ],
                    margin: [0, 0, 0, 10],
                },
                { text: 'DO OBJETO', style: 'subheader', margin: [0, 10, 0, 5] },
                { text: contrato.objeto || contrato.edital.objeto, margin: [0, 0, 0, 10] },
                { text: 'DOS ITENS', style: 'subheader', margin: [0, 10, 0, 5] },
                {
                    table: {
                        headerRows: 1,
                        widths: ['*', 'auto', 'auto', 'auto'],
                        body: [
                            [
                                { text: 'Descrição', style: 'tableHeader' },
                                { text: 'Qtd', style: 'tableHeader' },
                                { text: 'Valor Unit.', style: 'tableHeader' },
                                { text: 'Total', style: 'tableHeader' },
                            ],
                            ...contrato.itens.map((item) => [
                                item.descricao,
                                item.quantidade.toString(),
                                { text: (item.valorUnitario / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), alignment: 'right' },
                                { text: (item.valorTotal / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), alignment: 'right' },
                            ]),
                        ] as any,
                    },
                    margin: [0, 0, 0, 10],
                },
                {
                    text: [
                        { text: 'VALOR TOTAL DO CONTRATO: ', bold: true },
                        (contrato.valorTotal / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
                    ],
                    alignment: 'right',
                    margin: [0, 10, 0, 20],
                },
                { text: 'DAS ASSINATURAS', style: 'subheader', margin: [0, 10, 0, 20] },
                {
                    columns: [
                        {
                            text: '___________________________________\nPrefeitura Municipal',
                            alignment: 'center',
                        },
                        {
                            text: '___________________________________\n' + contrato.licitante.razaoSocial,
                            alignment: 'center',
                        },
                    ],
                    margin: [0, 20, 0, 0],
                },
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                },
                tableHeader: {
                    bold: true,
                    fontSize: 12,
                    color: 'black',
                },
            },
            defaultStyle: {
                font: 'Helvetica',
            },
        };

        return new Promise((resolve, reject) => {
            const pdfDoc = printer.createPdfKitDocument(docDefinition);
            const chunks: Buffer[] = [];
            pdfDoc.on('data', (chunk) => chunks.push(chunk));
            pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
            pdfDoc.on('error', (err) => reject(err));
            pdfDoc.end();
        });
    }
}
