import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/database/database.service';
import { CreateSecretariaDto } from './dto/create-secretaria.dto';
import { UpdateSecretariaDto } from './dto/update-secretaria.dto';

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

    async findAll() {
        return this.prisma.secretaria.findMany({
            orderBy: { nome: 'asc' },
            include: {
                _count: {
                    select: { editais: true }
                }
            }
        });
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
