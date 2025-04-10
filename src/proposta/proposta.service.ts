import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreatePropostaDto } from './dto/create-proposta.dto';

@Injectable()
export class PropostaService {
    constructor(private prisma: PrismaService) {}

    async create(createPropostaDto: CreatePropostaDto) {
        // Verifica se a disputa existe
        const disputa = await this.prisma.disputa.findUnique({
            where: { id: createPropostaDto.disputaId },
        });

        if (!disputa) {
            throw new NotFoundException('Disputa não encontrada');
        }

        // Verifica se o licitante existe
        const licitante = await this.prisma.licitante.findUnique({
            where: { id: createPropostaDto.licitanteId },
        });

        if (!licitante) {
            throw new NotFoundException('Licitante não encontrado');
        }

        return this.prisma.proposta.create({
            data: {
                ...createPropostaDto,
                dataEnvio: new Date(),
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
