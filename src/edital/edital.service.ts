import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/database/database.service';
import { CreateEditalDto } from './dto/create-edital.dto';
import { UpdateEditalDto } from './dto/update-edital.dto';
import { ApiTags } from '@nestjs/swagger';
import { ModalidadeLicitação, CritérioJulgamento } from '@prisma/client';

@ApiTags('Editais')
@Injectable()
export class EditalService {
    constructor(private prisma: PrismaService) {}

    async create(createEditalDto: CreateEditalDto) {
        return this.prisma.edital.create({
            data: {
                ...createEditalDto,
                modalidade: createEditalDto.modalidade as ModalidadeLicitação,
                criterioJulgamento: createEditalDto.criterioJulgamento as CritérioJulgamento,
            },
        });
    }

    async findAll() {
        return this.prisma.edital.findMany({
            include: {
                disputas: true,
                documentosObrigatorios: true,
                documentos: true,
                lotes: true,
            },
        });
    }

    async findOne(id: string) {
        const edital = await this.prisma.edital.findUnique({
            where: { id },
            include: {
                disputas: true,
                documentosObrigatorios: true,
                documentos: true,
                lotes: true,
            },
        });

        if (!edital) {
            throw new NotFoundException(`Edital com ID ${id} não encontrado`);
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
        const edital = await this.prisma.edital.findUnique({
            where: { id },
        });

        if (!edital) {
            throw new NotFoundException(`Edital com ID ${id} não encontrado`);
        }

        return this.prisma.edital.update({
            where: { id },
            data: {
                ...updateEditalDto,
                modalidade: updateEditalDto.modalidade as ModalidadeLicitação,
                criterioJulgamento: updateEditalDto.criterioJulgamento as CritérioJulgamento,
            },
        });
    }

    async remove(id: string) {
        const edital = await this.prisma.edital.findUnique({
            where: { id },
        });

        if (!edital) {
            throw new NotFoundException(`Edital com ID ${id} não encontrado`);
        }

        return this.prisma.edital.delete({
            where: { id },
        });
    }
} 