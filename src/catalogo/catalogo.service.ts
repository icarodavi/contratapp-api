import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreateCatalogoItemDto } from './dto/create-catalogo-item.dto';
import { UpdateCatalogoItemDto } from './dto/update-catalogo-item.dto';

@Injectable()
export class CatalogoService {
    constructor(private prisma: PrismaService) {}

    async create(createCatalogoItemDto: CreateCatalogoItemDto) {
        return this.prisma.catalogoItem.create({
            data: createCatalogoItemDto,
        });
    }

    async findAll(search?: string) {
        const where: any = {};
        if (search) {
            where.OR = [
                { descricao: { contains: search, mode: 'insensitive' } },
                { codigo: { contains: search, mode: 'insensitive' } },
            ];
        }

        return this.prisma.catalogoItem.findMany({
            where,
            orderBy: { descricao: 'asc' },
        });
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
        // Soft delete (inactivate) or hard delete depending on requirements.
        // Given relationships, hard delete might fail if used.
        // Let's assume hard delete for now, user can see error if used.
        // Or better, check usage.
        // For simplicity:
        return this.prisma.catalogoItem.delete({
            where: { id },
        });
    }
}
