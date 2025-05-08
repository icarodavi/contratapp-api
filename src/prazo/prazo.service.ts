import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/database/database.service';
import { CreatePrazoDto } from './dto/create-prazo.dto';
import { UpdatePrazoDto } from './dto/update-prazo.dto';
import { TipoPrazo, StatusPrazo } from '@prisma/client';

@Injectable()
export class PrazoService {
    constructor(private prisma: PrismaService) {}

    async create(createPrazoDto: CreatePrazoDto) {
        const { editalId, licitanteId, itemId, criadoPor, ...dados } = createPrazoDto;

        // Verifica se o edital existe
        const edital = await this.prisma.edital.findUnique({
            where: { id: editalId }
        });
        if (!edital) {
            throw new NotFoundException('Edital não encontrado');
        }

        // Verifica se o licitante existe (se fornecido)
        if (licitanteId) {
            const licitante = await this.prisma.licitante.findUnique({
                where: { id: licitanteId }
            });
            if (!licitante) {
                throw new NotFoundException('Licitante não encontrado');
            }
        }

        // Verifica se o item existe (se fornecido)
        if (itemId) {
            const item = await this.prisma.item.findUnique({
                where: { id: itemId }
            });
            if (!item) {
                throw new NotFoundException('Item não encontrado');
            }
        }

        // Verifica se o usuário existe
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: criadoPor }
        });
        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado');
        }

        return this.prisma.prazo.create({
            data: {
                ...dados,
                status: StatusPrazo.PENDENTE,
                edital: { connect: { id: editalId } },
                licitante: licitanteId ? { connect: { id: licitanteId } } : undefined,
                item: itemId ? { connect: { id: itemId } } : undefined,
                criadoPorUsuario: { connect: { id: criadoPor } }
            }
        });
    }

    async findAll() {
        return this.prisma.prazo.findMany({
            include: {
                edital: true,
                licitante: true,
                item: true,
                criadoPorUsuario: true,
                concluidoPorUsuario: true
            }
        });
    }

    async findOne(id: string) {
        const prazo = await this.prisma.prazo.findUnique({
            where: { id },
            include: {
                edital: true,
                licitante: true,
                item: true,
                criadoPorUsuario: true,
                concluidoPorUsuario: true
            }
        });

        if (!prazo) {
            throw new NotFoundException('Prazo não encontrado');
        }

        return prazo;
    }

    async findByEdital(editalId: string) {
        return this.prisma.prazo.findMany({
            where: { editalId },
            include: {
                edital: true,
                licitante: true,
                item: true,
                criadoPorUsuario: true,
                concluidoPorUsuario: true
            }
        });
    }

    async findByLicitante(licitanteId: string) {
        return this.prisma.prazo.findMany({
            where: { licitanteId },
            include: {
                edital: true,
                licitante: true,
                item: true,
                criadoPorUsuario: true,
                concluidoPorUsuario: true
            }
        });
    }

    async findByItem(itemId: string) {
        return this.prisma.prazo.findMany({
            where: { itemId },
            include: {
                edital: true,
                licitante: true,
                item: true,
                criadoPorUsuario: true,
                concluidoPorUsuario: true
            }
        });
    }

    async update(id: string, updatePrazoDto: UpdatePrazoDto) {
        const prazo = await this.prisma.prazo.findUnique({
            where: { id }
        });

        if (!prazo) {
            throw new NotFoundException('Prazo não encontrado');
        }

        const { concluidoPor, ...dados } = updatePrazoDto;

        return this.prisma.prazo.update({
            where: { id },
            data: {
                ...dados,
                concluidoPorUsuario: concluidoPor ? { connect: { id: concluidoPor } } : undefined
            }
        });
    }

    async remove(id: string) {
        const prazo = await this.prisma.prazo.findUnique({
            where: { id }
        });

        if (!prazo) {
            throw new NotFoundException('Prazo não encontrado');
        }

        return this.prisma.prazo.delete({
            where: { id }
        });
    }

    async verificarPrazosAtrasados() {
        const agora = new Date();
        return this.prisma.prazo.updateMany({
            where: {
                status: StatusPrazo.EM_ANDAMENTO,
                dataFim: { lt: agora }
            },
            data: {
                status: StatusPrazo.ATRASADO
            }
        });
    }
} 