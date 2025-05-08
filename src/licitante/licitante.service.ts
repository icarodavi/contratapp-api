import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreateLicitanteDto } from './dto/create-licitante.dto';
import { UpdateLicitanteDto } from './dto/update-licitante.dto';
import { ApiTags } from '@nestjs/swagger';
import { DisputaStatus } from '@prisma/client';

@ApiTags('Licitantes')
@Injectable()
export class LicitanteService {
    constructor(private prisma: PrismaService) {}

    async create(createLicitanteDto: CreateLicitanteDto) {
        // Verifica se o usuário existe
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: createLicitanteDto.usuarioId }
        });

        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado');
        }

        // Verifica se já existe um licitante com este CNPJ
        const licitanteExistente = await this.prisma.licitante.findFirst({
            where: { cnpj: createLicitanteDto.cnpj }
        });

        if (licitanteExistente) {
            throw new BadRequestException('Já existe um licitante cadastrado com este CNPJ');
        }

        return this.prisma.licitante.create({
            data: {
                ...createLicitanteDto,
                usuario: {
                    connect: {
                        id: createLicitanteDto.usuarioId
                    }
                }
            },
            include: {
                usuario: true
            }
        });
    }

    async findAll() {
        return this.prisma.licitante.findMany({
            include: {
                usuario: true
            }
        });
    }

    async findOne(id: string) {
        const licitante = await this.prisma.licitante.findUnique({
            where: { id },
            include: {
                usuario: true
            }
        });

        if (!licitante) {
            throw new NotFoundException('Licitante não encontrado');
        }

        return licitante;
    }

    async findByUsuario(usuarioId: string) {
        const licitante = await this.prisma.licitante.findFirst({
            where: {
                usuario: {
                    id: usuarioId
                }
            },
            include: {
                usuario: true
            }
        });

        if (!licitante) {
            throw new NotFoundException('Licitante não encontrado para este usuário');
        }

        return licitante;
    }

    async update(id: string, updateLicitanteDto: UpdateLicitanteDto) {
        const licitante = await this.findOne(id);

        // Se estiver tentando atualizar o CNPJ, verifica se já existe outro com o mesmo CNPJ
        if (updateLicitanteDto.cnpj && updateLicitanteDto.cnpj !== licitante.cnpj) {
            const licitanteExistente = await this.prisma.licitante.findFirst({
                where: {
                    cnpj: updateLicitanteDto.cnpj,
                    id: { not: id }
                }
            });

            if (licitanteExistente) {
                throw new BadRequestException('Já existe outro licitante cadastrado com este CNPJ');
            }
        }

        return this.prisma.licitante.update({
            where: { id },
            data: updateLicitanteDto,
            include: {
                usuario: true
            }
        });
    }

    async remove(id: string) {
        const licitante = await this.findOne(id);

        // Verifica se o licitante está participando de alguma disputa ativa
        const disputasAtivas = await this.prisma.disputa.findMany({
            where: {
                status: DisputaStatus.ABERTA,
                propostas: {
                    some: {
                        licitanteId: id
                    }
                }
            }
        });

        if (disputasAtivas.length > 0) {
            throw new BadRequestException('Não é possível remover um licitante que está participando de disputas ativas');
        }

        return this.prisma.licitante.delete({
            where: { id }
        });
    }
} 