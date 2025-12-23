import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreateLicitanteDto } from './dto/create-licitante.dto';
import { UpdateLicitanteDto } from './dto/update-licitante.dto';
import { ApiTags } from '@nestjs/swagger';
import { DisputaStatus } from '@prisma/client';
import { PaginationDto } from '../common/dto/pagination.dto';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';

@ApiTags('Licitantes')
@Injectable()
export class LicitanteService {
    constructor(private prisma: PrismaService) {}

    async create(createLicitanteDto: CreateLicitanteDto) {
        const { usuarioId, ...licitanteData } = createLicitanteDto;

        // Verifica se o usuário existe
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: usuarioId }
        });

        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado');
        }

        // Verifica se o usuário já possui um licitante vinculado
        // Como a relação é 1:1, um usuário só pode ser dono de uma empresa licitante
        if (usuario.licitanteId) {
            throw new BadRequestException('Este usuário já possui uma empresa licitante vinculada');
        }

        // Verifica se já existe um licitante com este CNPJ
        const licitanteExistente = await this.prisma.licitante.findFirst({
            where: { cnpj: licitanteData.cnpj }
        });

        if (licitanteExistente) {
            throw new BadRequestException('Já existe um licitante cadastrado com este CNPJ');
        }

        return this.prisma.licitante.create({
            data: {
                ...licitanteData,
                usuario: {
                    connect: {
                        id: usuarioId
                    }
                }
            },
            include: {
                usuario: true
            }
        });
    }

    async findAll(paginationDto: PaginationDto = new PaginationDto()): Promise<PaginatedResult<any>> {
        const { page = 1, limit = 10, orderBy, orderDirection, search } = paginationDto;
        const skip = (page - 1) * limit;

        const where: any = {};
        if (search) {
            where.OR = [
                { razaoSocial: { contains: search, mode: 'insensitive' } },
                { cnpj: { contains: search, mode: 'insensitive' } },
                { usuario: { nome: { contains: search, mode: 'insensitive' } } },
            ];
        }

        const [total, data] = await Promise.all([
            this.prisma.licitante.count({ where }),
            this.prisma.licitante.findMany({
                where,
                skip,
                take: limit,
                orderBy: orderBy ? { [orderBy]: orderDirection } : { razaoSocial: 'asc' },
                include: {
                    usuario: true
                }
            }),
        ]);

        return {
            data,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
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
        const { usuarioId, ...updateData } = updateLicitanteDto;
        const licitante = await this.findOne(id);

        // Se estiver tentando atualizar o CNPJ, verifica se já existe outro com o mesmo CNPJ
        if (updateData.cnpj && updateData.cnpj !== licitante.cnpj) {
            const licitanteExistente = await this.prisma.licitante.findFirst({
                where: {
                    cnpj: updateData.cnpj,
                    id: { not: id }
                }
            });

            if (licitanteExistente) {
                throw new BadRequestException('Já existe outro licitante cadastrado com este CNPJ');
            }
        }

        return this.prisma.licitante.update({
            where: { id },
            data: {
                ...updateData,
                usuario: usuarioId ? {
                    connect: { id: usuarioId }
                } : undefined
            },
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