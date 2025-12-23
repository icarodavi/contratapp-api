import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreateContratoDto } from './dto/create-contrato.dto';

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

        // Criar Contrato com Itens
        const contrato = await this.prisma.contrato.create({
            data: {
                ...contratoData,
                edital: { connect: { id: editalId } },
                licitante: { connect: { id: licitanteId } },
                itens: {
                    create: itens.map((item) => ({
                        descricao: item.descricao,
                        quantidade: item.quantidade,
                        valorUnitario: item.valorUnitario,
                        valorTotal: item.valorTotal,
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
}
