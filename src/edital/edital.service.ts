import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreateEditalDto } from './dto/create-edital.dto';
import { UpdateEditalDto } from './dto/update-edital.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Editais')
@Injectable()
export class EditalService {
    constructor(private prisma: PrismaService) {}

    async create(createEditalDto: CreateEditalDto) {
        return this.prisma.edital.create({
            data: createEditalDto,
        });
    }

    async findAll() {
        return this.prisma.edital.findMany({
            include: {
                disputas: true,
                documentosObrigatorios: true,
            },
        });
    }

    async findOne(id: string) {
        const edital = await this.prisma.edital.findUnique({
            where: { id },
            include: {
                disputas: true,
                documentosObrigatorios: true,
            },
        });

        if (!edital) {
            throw new NotFoundException('Edital não encontrado');
        }

        return edital;
    }

    async findByNumero(numero: string) {
        return this.prisma.edital.findFirst({
            where: { numero },
            include: {
                disputas: true,
                documentosObrigatorios: true,
            },
        });
    }

    async update(id: string, updateEditalDto: UpdateEditalDto) {
        const edital = await this.findOne(id);

        return this.prisma.edital.update({
            where: { id },
            data: updateEditalDto,
            include: {
                disputas: true,
                documentosObrigatorios: true,
            },
        });
    }

    async remove(id: string) {
        const edital = await this.findOne(id);

        return this.prisma.edital.delete({
            where: { id },
        });
    }
} 