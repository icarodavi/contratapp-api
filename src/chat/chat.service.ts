import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/database/database.service';
import { PerfilUsuario } from '@prisma/client';

@Injectable()
export class ChatService {
    constructor(private prisma: PrismaService) {}

    async podeEnviarMensagem(editalId: string, perfil: PerfilUsuario): Promise<boolean> {
        if (perfil === 'PREGOEIRO' || perfil === 'ADMIN') return true;

        // Find active dispute for this edital
        const disputa = await this.prisma.disputa.findFirst({
            where: {
                editalId,
                status: {
                    in: ['AGUARDANDO', 'ABERTA', 'SUSPENSA'] // Assuming these are valid statuses to look for
                }
            },
            orderBy: {
                inicio: 'desc'
            }
        });

        if (!disputa) return true;

        return (disputa as any).chatAtivo;
    }

    async verificarAcessoEdital(editalId: string, usuarioId: string, perfil: PerfilUsuario): Promise<boolean> {
        return true;
        // if (perfil === 'PREGOEIRO') {
        //     return true;
        // }

        // const disputa = await this.prisma.disputa.findFirst({
        //     where: {
        //         editalId,
        //         licitantes: {
        //             some: {
        //                 usuario: {
        //                     id: usuarioId
        //                 }
        //             }
        //         }
        //     }
        // });

        // return !!disputa;
    }

    async obterHistoricoMensagens(editalId: string, usuarioId: string) {
        return this.prisma.mensagemChat.findMany({
            where: {
                editalId
            },
            orderBy: {
                createdAt: 'asc'
            },
            include: {
                autor: {
                    select: {
                        id: true,
                        nome: true,
                        perfil: true
                    }
                }
            }
        });
    }

    async criarMensagem(editalId: string, usuarioId: string, perfil: PerfilUsuario, conteudo: string) {
        return this.prisma.mensagemChat.create({
            data: {
                conteudo,
                editalId,
                autorId: usuarioId,
                tipoAutor: perfil === 'PREGOEIRO' ? 'PREGOEIRO' : 'LICITANTE'
            },
            include: {
                autor: {
                    select: {
                        id: true,
                        nome: true,
                        perfil: true
                    }
                }
            }
        });
    }
} 