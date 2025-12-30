import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { TipoAtividade } from '@generated/prisma/client';

export interface CreateLogDto {
    tipo: TipoAtividade;
    acao: string;
    detalhes?: string;
    usuarioId?: string;
    disputaId?: string;
    ip?: string;
    userAgent?: string;
    modulo?: string;
    status?: string;
    nivel?: string;
    metadata?: any;
    entidadeId?: string;
    entidadeTipo?: string;
}

@Injectable()
export class LogService {
    constructor(private prisma: PrismaService) {}

    async create(data: CreateLogDto) {
        return this.prisma.logAtividade.create({
            data: {
                ...data,
                metadata: data.metadata ? JSON.parse(JSON.stringify(data.metadata)) : undefined
            }
        });
    }
}
