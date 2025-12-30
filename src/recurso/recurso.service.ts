import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/database/database.service';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';
import { TipoRecurso, StatusRecurso } from '@generated/prisma/client';

@Injectable()
export class RecursoService {
    constructor(private prisma: PrismaService) {}

    async create(createRecursoDto: CreateRecursoDto) {
        const { editalId, licitanteId, usuarioId, ...dados } = createRecursoDto;

        // Verifica se o edital existe
        const edital = await this.prisma.edital.findUnique({
            where: { id: editalId }
        });
        if (!edital) {
            throw new NotFoundException('Edital não encontrado');
        }

        // Verifica se o licitante existe
        const licitante = await this.prisma.licitante.findUnique({
            where: { id: licitanteId }
        });
        if (!licitante) {
            throw new NotFoundException('Licitante não encontrado');
        }

        // Verifica se o usuário existe
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: usuarioId }
        });
        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado');
        }

        return this.prisma.recurso.create({
            data: {
                ...dados,
                status: StatusRecurso.PENDENTE,
                edital: { connect: { id: editalId } },
                licitante: { connect: { id: licitanteId } },
                enviadoPor: { connect: { id: usuarioId } }
            }
        });
    }

    async findAll() {
        return this.prisma.recurso.findMany({
            include: {
                edital: true,
                licitante: true,
                enviadoPor: true,
                respondidoPorUsuario: true
            }
        });
    }

    async findOne(id: string) {
        const recurso = await this.prisma.recurso.findUnique({
            where: { id },
            include: {
                edital: true,
                licitante: true,
                enviadoPor: true,
                respondidoPorUsuario: true
            }
        });

        if (!recurso) {
            throw new NotFoundException('Recurso não encontrado');
        }

        return recurso;
    }

    async update(id: string, updateRecursoDto: UpdateRecursoDto) {
        const recurso = await this.prisma.recurso.findUnique({
            where: { id }
        });

        if (!recurso) {
            throw new NotFoundException('Recurso não encontrado');
        }

        const { respondidoPor, ...dados } = updateRecursoDto;

        return this.prisma.recurso.update({
            where: { id },
            data: {
                ...dados,
                dataResposta: new Date(),
                respondidoPorUsuario: respondidoPor ? { connect: { id: respondidoPor } } : undefined
            }
        });
    }

    async remove(id: string) {
        const recurso = await this.prisma.recurso.findUnique({
            where: { id }
        });

        if (!recurso) {
            throw new NotFoundException('Recurso não encontrado');
        }

        return this.prisma.recurso.delete({
            where: { id }
        });
    }
} 