import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';

@Injectable()
export class ChatService {
    constructor(private prisma: PrismaService) {}

    async verificarAcessoEdital(usuarioId: string, editalId: string): Promise<boolean> {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: usuarioId },
            include: {
                licitante: {
                    include: {
                        disputas: {
                            where: {
                                editalId,
                            },
                        },
                    },
                },
            },
        });

        if (!usuario) {
            return false;
        }

        // Pregoeiro tem acesso a todos os editais
        if (usuario.perfil === 'PREGOEIRO') {
            return true;
        }

        // Licitante só tem acesso se estiver participando da disputa
        if (usuario.perfil === 'LICITANTE' && usuario.licitante?.disputas.length > 0) {
            return true;
        }

        return false;
    }

    async criarMensagem(createMensagemDto: CreateMensagemDto) {
        return this.prisma.mensagemChat.create({
            data: createMensagemDto,
            include: {
                autor: {
                    select: {
                        id: true,
                        nome: true,
                        perfil: true,
                    },
                },
            },
        });
    }

    async obterHistoricoMensagens(editalId: string) {
        return this.prisma.mensagemChat.findMany({
            where: {
                editalId,
            },
            include: {
                autor: {
                    select: {
                        id: true,
                        nome: true,
                        perfil: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'asc',
            },
        });
    }
} 