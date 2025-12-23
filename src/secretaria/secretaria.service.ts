import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/database/database.service';
import { CreateSecretariaDto } from './dto/create-secretaria.dto';
import { UpdateSecretariaDto } from './dto/update-secretaria.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';

@Injectable()
export class SecretariaService {
    constructor(private prisma: PrismaService) {}

    async create(createSecretariaDto: CreateSecretariaDto) {
        // Check if sigla already exists
        const exists = await this.prisma.secretaria.findUnique({
            where: { sigla: createSecretariaDto.sigla }
        });
        if (exists) {
            throw new BadRequestException('Já existe uma secretaria com esta sigla.');
        }

        return this.prisma.secretaria.create({
            data: createSecretariaDto
        });
    }

    async findAll(paginationDto: PaginationDto = new PaginationDto()): Promise<PaginatedResult<any>> {
        const { page = 1, limit = 10, orderBy, orderDirection, search } = paginationDto;
        const skip = (page - 1) * limit;

        const where: any = {};
        if (search) {
            where.OR = [
                { nome: { contains: search, mode: 'insensitive' } },
                { sigla: { contains: search, mode: 'insensitive' } },
            ];
        }

        const [total, data] = await Promise.all([
            this.prisma.secretaria.count({ where }),
            this.prisma.secretaria.findMany({
                where,
                skip,
                take: limit,
                orderBy: orderBy ? { [orderBy]: orderDirection } : { nome: 'asc' },
                include: {
                    _count: {
                        select: { editais: true }
                    }
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
        const secretaria = await this.prisma.secretaria.findUnique({
            where: { id },
            include: {
                editais: {
                    select: { id: true, numero: true, objeto: true }
                }
            }
        });

        if (!secretaria) {
            throw new NotFoundException('Secretaria não encontrada');
        }

        return secretaria;
    }

    async update(id: string, updateSecretariaDto: UpdateSecretariaDto) {
        await this.findOne(id);
        return this.prisma.secretaria.update({
            where: { id },
            data: updateSecretariaDto
        });
    }

    async remove(id: string) {
        await this.findOne(id);
        return this.prisma.secretaria.delete({
            where: { id }
        });
    }
}
