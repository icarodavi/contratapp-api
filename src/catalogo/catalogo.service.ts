import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreateCatalogoItemDto } from './dto/create-catalogo-item.dto';
import { UpdateCatalogoItemDto } from './dto/update-catalogo-item.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';
import { CatalogoItem } from '@prisma/client';

@Injectable()
export class CatalogoService {
    constructor(private prisma: PrismaService) {}

    async create(createCatalogoItemDto: CreateCatalogoItemDto) {
        if (!createCatalogoItemDto.codigo) {
            // Gera um SKU único simples se não fornecido
            // Para produção, talvez use uma sequência ou chunk UUID
            const timestamp = Date.now().toString(36).toUpperCase();
            const randomPart = Math.random().toString(36).substring(2, 5).toUpperCase();
            createCatalogoItemDto.codigo = `CAT-${timestamp}-${randomPart}`;
        }

        return this.prisma.catalogoItem.create({
            data: {
                ...createCatalogoItemDto,
                codigo: createCatalogoItemDto.codigo! // Garantir que é string (TS pode reclamar sobre opcional)
            },
        });
    }

    async findAll(paginationDto: PaginationDto): Promise<PaginatedResult<CatalogoItem>> {
        const { page = 1, limit = 10, search, orderBy, orderDirection } = paginationDto;
        const skip = (page - 1) * limit;

        const where: any = {};
        if (search) {
            where.OR = [
                { descricao: { contains: search, mode: 'insensitive' } },
                { codigo: { contains: search, mode: 'insensitive' } },
            ];
        }

        const [data, total] = await Promise.all([
            this.prisma.catalogoItem.findMany({
                where,
                skip,
                take: limit,
                orderBy: orderBy
                    ? { [orderBy]: orderDirection }
                    : { descricao: 'asc' },
            }),
            this.prisma.catalogoItem.count({ where }),
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
        return this.prisma.catalogoItem.findUnique({
            where: { id },
        });
    }

    async update(id: string, updateCatalogoItemDto: UpdateCatalogoItemDto) {
        return this.prisma.catalogoItem.update({
            where: { id },
            data: updateCatalogoItemDto,
        });
    }

    async remove(id: string) {
        // Soft delete (inativar) ou hard delete dependendo dos requisitos.
        // Dadas as relações, hard delete pode falhar se usado.
        // Vamos assumir hard delete por enquanto, usuário pode ver erro se usado.
        // Ou melhor, verifique o uso.
        // Por simplicidade:
        return this.prisma.catalogoItem.delete({
            where: { id },
        });
    }
}
