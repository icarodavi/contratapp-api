import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/database/database.service';
import { CreateSancaoDto } from './dto/create-sancao.dto';
import { UpdateSancaoDto } from './dto/update-sancao.dto';
import { TipoSancao, StatusSancao } from '@generated/prisma/client';

@Injectable()
export class SancaoService {
    constructor(private prisma: PrismaService) {}

    async create(createSancaoDto: CreateSancaoDto) {
        const { editalId, licitanteId, aplicadoPor, ...dados } = createSancaoDto;

        // Verifica se o edital existe
        const edital = await this.prisma.edital.findUnique({
            where: { id: editalId }
        });
        if (!edital) {
            throw new NotFoundException('Edital não encontrado');
        }

        // Verifica se o licitante existe
        const licitante = await this.prisma.licitante.findUnique({
            where: { id: licitanteId }
        });
        if (!licitante) {
            throw new NotFoundException('Licitante não encontrado');
        }

        // Verifica se o usuário existe
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: aplicadoPor }
        });
        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado');
        }

        return this.prisma.sancao.create({
            data: {
                ...dados,
                status: StatusSancao.PENDENTE,
                edital: { connect: { id: editalId } },
                licitante: { connect: { id: licitanteId } },
                aplicadoPorUsuario: { connect: { id: aplicadoPor } }
            }
        });
    }

    async findAll() {
        return this.prisma.sancao.findMany({
            include: {
                edital: true,
                licitante: true,
                aplicadoPorUsuario: true,
                revogadoPorUsuario: true
            }
        });
    }

    async findOne(id: string) {
        const sancao = await this.prisma.sancao.findUnique({
            where: { id },
            include: {
                edital: true,
                licitante: true,
                aplicadoPorUsuario: true,
                revogadoPorUsuario: true
            }
        });

        if (!sancao) {
            throw new NotFoundException('Sanção não encontrada');
        }

        return sancao;
    }

    async findByEdital(editalId: string) {
        return this.prisma.sancao.findMany({
            where: { editalId },
            include: {
                edital: true,
                licitante: true,
                aplicadoPorUsuario: true,
                revogadoPorUsuario: true
            }
        });
    }

    async findByLicitante(licitanteId: string) {
        return this.prisma.sancao.findMany({
            where: { licitanteId },
            include: {
                edital: true,
                licitante: true,
                aplicadoPorUsuario: true,
                revogadoPorUsuario: true
            }
        });
    }

    async update(id: string, updateSancaoDto: UpdateSancaoDto) {
        const sancao = await this.prisma.sancao.findUnique({
            where: { id }
        });

        if (!sancao) {
            throw new NotFoundException('Sanção não encontrada');
        }

        const { revogadoPor, ...dados } = updateSancaoDto;

        return this.prisma.sancao.update({
            where: { id },
            data: {
                ...dados,
                revogadoPorUsuario: revogadoPor ? { connect: { id: revogadoPor } } : undefined
            }
        });
    }

    async remove(id: string) {
        const sancao = await this.prisma.sancao.findUnique({
            where: { id }
        });

        if (!sancao) {
            throw new NotFoundException('Sanção não encontrada');
        }

        return this.prisma.sancao.delete({
            where: { id }
        });
    }
} 