import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/database/database.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
    constructor(private prisma: PrismaService) {}

    async create(createItemDto: CreateItemDto) {
        // Verifica se o lote existe
        const lote = await this.prisma.lote.findUnique({
            where: { id: createItemDto.loteId }
        });

        if (!lote) {
            throw new NotFoundException('Lote não encontrado');
        }

        // Verifica se já existe um item com o mesmo número no lote
        const itemExistente = await this.prisma.item.findFirst({
            where: {
                numero: createItemDto.numero,
                loteId: createItemDto.loteId
            }
        });

        if (itemExistente) {
            throw new BadRequestException('Já existe um item com este número no lote');
        }

        return this.prisma.item.create({
            data: {
                ...createItemDto,
                status: 'ATIVO'
            },
            include: {
                propostas: true,
                Prazo: true
            }
        });
    }

    async findAll() {
        return this.prisma.item.findMany({
            include: {
                propostas: true,
                Prazo: true
            }
        });
    }

    async findOne(id: string) {
        const item = await this.prisma.item.findUnique({
            where: { id },
            include: {
                propostas: true,
                Prazo: true
            }
        });

        if (!item) {
            throw new NotFoundException('Item não encontrado');
        }

        return item;
    }

    async findByLote(loteId: string) {
        return this.prisma.item.findMany({
            where: { loteId },
            include: {
                propostas: true,
                Prazo: true
            }
        });
    }

    async update(id: string, updateItemDto: UpdateItemDto) {
        const item = await this.prisma.item.findUnique({
            where: { id }
        });

        if (!item) {
            throw new NotFoundException('Item não encontrado');
        }

        // Se estiver atualizando o número, verifica se já existe outro item com o mesmo número
        if (updateItemDto.numero && updateItemDto.numero !== item.numero) {
            const itemExistente = await this.prisma.item.findFirst({
                where: {
                    numero: updateItemDto.numero,
                    loteId: item.loteId,
                    id: { not: id }
                }
            });

            if (itemExistente) {
                throw new BadRequestException('Já existe um item com este número no lote');
            }
        }

        return this.prisma.item.update({
            where: { id },
            data: updateItemDto,
            include: {
                propostas: true,
                Prazo: true
            }
        });
    }

    async remove(id: string) {
        const item = await this.prisma.item.findUnique({
            where: { id },
            include: {
                propostas: true
            }
        });

        if (!item) {
            throw new NotFoundException('Item não encontrado');
        }

        // Verifica se o item tem propostas
        if (item.propostas.length > 0) {
            throw new BadRequestException('Não é possível excluir um item que possui propostas');
        }

        return this.prisma.item.delete({
            where: { id }
        });
    }
} 