import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/database/database.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@Injectable()
export class SessaoService {
    constructor(private prisma: PrismaService) {}

    async create(createSessaoDto: CreateSessaoDto) {
        return this.prisma.sessao.create({
            data: {
                ...createSessaoDto,
                ip: createSessaoDto.ip || '',
                hash: createSessaoDto.hash
            },
            include: {
                disputa: true,
                licitante: true
            }
        });
    }

    async findAll() {
        return this.prisma.sessao.findMany({
            include: {
                licitante: true,
                disputa: true
            }
        });
    }

    async findOne(id: string) {
        const sessao = await this.prisma.sessao.findUnique({
            where: { id },
            include: {
                licitante: true,
                disputa: true
            }
        });

        if (!sessao) {
            throw new NotFoundException('Sessão não encontrada');
        }

        return sessao;
    }

    async findByDisputa(disputaId: string) {
        return this.prisma.sessao.findMany({
            where: { disputaId },
            include: {
                licitante: true,
                disputa: true
            }
        });
    }

    async findByLicitante(licitanteId: string) {
        return this.prisma.sessao.findMany({
            where: { licitanteId },
            include: {
                licitante: true,
                disputa: true
            }
        });
    }

    async update(id: string, updateSessaoDto: UpdateSessaoDto) {
        const sessao = await this.prisma.sessao.findUnique({
            where: { id }
        });

        if (!sessao) {
            throw new NotFoundException('Sessão não encontrada');
        }

        return this.prisma.sessao.update({
            where: { id },
            data: updateSessaoDto,
            include: {
                licitante: true,
                disputa: true
            }
        });
    }

    async remove(id: string) {
        const sessao = await this.prisma.sessao.findUnique({
            where: { id }
        });

        if (!sessao) {
            throw new NotFoundException('Sessão não encontrada');
        }

        return this.prisma.sessao.delete({
            where: { id }
        });
    }
} 