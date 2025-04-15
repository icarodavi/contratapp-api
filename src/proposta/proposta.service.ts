import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreatePropostaDto } from './dto/create-proposta.dto';
import { StatusProposta, DisputaStatus } from 'generated/prisma';

@Injectable()
export class PropostaService {
    constructor(private prisma: PrismaService) {}

    async create(createPropostaDto: CreatePropostaDto) {
        // Verifica se a disputa existe e está ativa
        const disputa = await this.prisma.disputa.findUnique({
            where: { id: createPropostaDto.disputaId },
        });

        if (!disputa) {
            throw new NotFoundException('Disputa não encontrada');
        }

        if (disputa.status !== DisputaStatus.ABERTA) {
            throw new BadRequestException('Disputa não está aberta');
        }

        // Verifica se o licitante existe
        const licitante = await this.prisma.licitante.findUnique({
            where: { id: createPropostaDto.licitanteId },
        });

        if (!licitante) {
            throw new NotFoundException('Licitante não encontrado');
        }

        // Verifica se o item existe e está ativo
        const item = await this.prisma.item.findUnique({
            where: { id: createPropostaDto.itemId },
        });

        if (!item) {
            throw new NotFoundException('Item não encontrado');
        }

        if (item.status !== 'ATIVO') {
            throw new BadRequestException('Item não está ativo');
        }

        // Verifica se já existe proposta para este item/licitante
        const propostaExistente = await this.prisma.proposta.findFirst({
            where: {
                itemId: createPropostaDto.itemId,
                licitanteId: createPropostaDto.licitanteId,
                deletedAt: null,
            },
            orderBy: {
                versao: 'desc',
            },
        });

        if (propostaExistente) {
            throw new BadRequestException('Já existe uma proposta para este item');
        }

        return this.prisma.proposta.create({
            data: {
                ...createPropostaDto,
                dataEnvio: new Date(),
                status: StatusProposta.PENDENTE,
                versao: 1,
            },
        });
    }

    async findAll() {
        return this.prisma.proposta.findMany({
            include: {
                disputa: true,
                licitante: true,
            },
        });
    }

    async findOne(id: string) {
        const proposta = await this.prisma.proposta.findUnique({
            where: { id },
            include: {
                disputa: true,
                licitante: true,
            },
        });

        if (!proposta) {
            throw new NotFoundException('Proposta não encontrada');
        }

        return proposta;
    }

    async findByDisputa(disputaId: string) {
        return this.prisma.proposta.findMany({
            where: { disputaId },
            include: {
                licitante: true,
            },
            orderBy: {
                valorCentavos: 'asc',
            },
        });
    }
}
