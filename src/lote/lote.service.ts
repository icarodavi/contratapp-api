import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/database/database.service';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';

@Injectable()
export class LoteService {
    constructor(private prisma: PrismaService) {}

    async create(createLoteDto: CreateLoteDto) {
        // Verifica se o edital existe
        const edital = await this.prisma.edital.findUnique({
            where: { id: createLoteDto.editalId }
        });

        if (!edital) {
            throw new NotFoundException('Edital não encontrado');
        }

        // Verifica se já existe um lote com o mesmo número no edital
        const loteExistente = await this.prisma.lote.findFirst({
            where: {
                numero: createLoteDto.numero,
                editalId: createLoteDto.editalId
            }
        });

        if (loteExistente) {
            throw new BadRequestException('Já existe um lote com este número no edital');
        }

        return this.prisma.lote.create({
            data: {
                ...createLoteDto,
                status: 'ATIVO'
            },
            include: {
                itens: true
            }
        });
    }

    async findAll() {
        return this.prisma.lote.findMany({
            include: {
                itens: true
            }
        });
    }

    async findOne(id: string) {
        const lote = await this.prisma.lote.findUnique({
            where: { id },
            include: {
                itens: true
            }
        });

        if (!lote) {
            throw new NotFoundException('Lote não encontrado');
        }

        return lote;
    }

    async findByEdital(editalId: string) {
        return this.prisma.lote.findMany({
            where: { editalId },
            include: {
                itens: true
            }
        });
    }

    async update(id: string, updateLoteDto: UpdateLoteDto) {
        const lote = await this.prisma.lote.findUnique({
            where: { id }
        });

        if (!lote) {
            throw new NotFoundException('Lote não encontrado');
        }

        // Se estiver atualizando o número, verifica se já existe outro lote com o mesmo número
        if (updateLoteDto.numero && updateLoteDto.numero !== lote.numero) {
            const loteExistente = await this.prisma.lote.findFirst({
                where: {
                    numero: updateLoteDto.numero,
                    editalId: lote.editalId,
                    id: { not: id }
                }
            });

            if (loteExistente) {
                throw new BadRequestException('Já existe um lote com este número no edital');
            }
        }

        return this.prisma.lote.update({
            where: { id },
            data: updateLoteDto,
            include: {
                itens: true
            }
        });
    }

    async remove(id: string) {
        const lote = await this.prisma.lote.findUnique({
            where: { id },
            include: {
                itens: true
            }
        });

        if (!lote) {
            throw new NotFoundException('Lote não encontrado');
        }

        // Verifica se o lote tem itens
        if (lote.itens.length > 0) {
            throw new BadRequestException('Não é possível excluir um lote que possui itens');
        }

        return this.prisma.lote.delete({
            where: { id }
        });
    }
} 