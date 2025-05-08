import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/database/database.service';
import { TipoAtividade } from '@prisma/client';

@Injectable()
export class LogAtividadeService {
    constructor(private prisma: PrismaService) {}

    async criarLog(params: {
        tipo: TipoAtividade;
        acao: string;
        detalhes?: string;
        ip?: string;
        userAgent?: string;
        sessaoId?: string;
        hashSessao?: string;
        status?: string;
        nivel?: string;
        modulo: string;
        entidadeId?: string;
        entidadeTipo?: string;
        metadata?: any;
        disputaId?: string;
        usuarioId?: string;
    }) {
        return this.prisma.logAtividade.create({
            data: {
                tipo: params.tipo,
                acao: params.acao,
                detalhes: params.detalhes,
                ip: params.ip,
                userAgent: params.userAgent,
                sessaoId: params.sessaoId,
                hashSessao: params.hashSessao,
                status: params.status || 'SUCESSO',
                nivel: params.nivel || 'INFO',
                modulo: params.modulo,
                entidadeId: params.entidadeId,
                entidadeTipo: params.entidadeTipo,
                metadata: params.metadata,
                disputaId: params.disputaId,
                usuarioId: params.usuarioId
            }
        });
    }

    async buscarPorDisputa(disputaId: string) {
        return this.prisma.logAtividade.findMany({
            where: { disputaId },
            orderBy: { data: 'desc' },
            include: {
                usuario: true
            }
        });
    }

    async buscarPorUsuario(usuarioId: string) {
        return this.prisma.logAtividade.findMany({
            where: { usuarioId },
            orderBy: { data: 'desc' },
            include: {
                disputa: true
            }
        });
    }

    async buscarPorTipo(tipo: TipoAtividade) {
        return this.prisma.logAtividade.findMany({
            where: { tipo },
            orderBy: { data: 'desc' },
            include: {
                usuario: true,
                disputa: true
            }
        });
    }

    async buscarPorPeriodo(dataInicio: Date, dataFim: Date) {
        return this.prisma.logAtividade.findMany({
            where: {
                data: {
                    gte: dataInicio,
                    lte: dataFim
                }
            },
            orderBy: { data: 'desc' },
            include: {
                usuario: true,
                disputa: true
            }
        });
    }

    async buscarPorEntidade(entidadeId: string, entidadeTipo: string) {
        return this.prisma.logAtividade.findMany({
            where: {
                entidadeId,
                entidadeTipo
            },
            orderBy: { data: 'desc' },
            include: {
                usuario: true,
                disputa: true
            }
        });
    }

    async buscarErros() {
        return this.prisma.logAtividade.findMany({
            where: {
                OR: [
                    { status: 'ERRO' },
                    { nivel: 'ERROR' }
                ]
            },
            orderBy: { data: 'desc' },
            include: {
                usuario: true,
                disputa: true
            }
        });
    }
} 