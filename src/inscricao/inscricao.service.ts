import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreateInscricaoDto } from './dto/create-inscricao.dto';
import { UpdateInscricaoStatusDto } from './dto/update-inscricao-status.dto';
import { StatusInscricao } from '../../prisma/generated/prisma/client';

@Injectable()
export class InscricaoService {
    constructor(private prisma: PrismaService) {}

    async create(licitanteId: string, createInscricaoDto: CreateInscricaoDto) {
        const { editalId } = createInscricaoDto;

        // Verificar se Edital existe
        const edital = await this.prisma.edital.findUnique({
            where: { id: editalId },
        });
        if (!edital) {
            throw new NotFoundException('Edital não encontrado');
        }

        // Verificar duplicidade
        const existingInscricao = await this.prisma.inscricao.findUnique({
            where: {
                editalId_licitanteId: {
                    editalId,
                    licitanteId,
                },
            },
        });

        if (existingInscricao) {
            throw new BadRequestException('Licitante já inscrito neste edital');
        }

        return this.prisma.inscricao.create({
            data: {
                editalId,
                licitanteId,
                status: StatusInscricao.PENDENTE,
            },
        });
    }

    async findByEdital(editalId: string) {
        return this.prisma.inscricao.findMany({
            where: { editalId },
            include: {
                licitante: true,
            },
        });
    }

    async findByLicitante(licitanteId: string) {
        return this.prisma.inscricao.findMany({
            where: { licitanteId },
            include: {
                edital: true,
            },
        });
    }

    async checkStatus(editalId: string, licitanteId: string) {
        const inscricao = await this.prisma.inscricao.findUnique({
            where: {
                editalId_licitanteId: {
                    editalId,
                    licitanteId,
                },
            },
        });
        return inscricao || null;
    }

    async updateStatus(id: string, updateDto: UpdateInscricaoStatusDto) {
        return this.prisma.inscricao.update({
            where: { id },
            data: { status: updateDto.status },
        });
    }
}
