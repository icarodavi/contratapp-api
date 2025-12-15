import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreateDisputaDto } from './dto/create-disputa.dto';
import { UpdateDisputaDto } from './dto/update-disputa.dto';
import { DisputaStatus } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { ChatGateway } from '../chat/chat.gateway';

@ApiTags('Disputas')
@Injectable()
export class DisputaService {
    constructor(
        private prisma: PrismaService,
        private chatGateway: ChatGateway
    ) {}

    async create(createDisputaDto: CreateDisputaDto) {
        // Verifica se o edital existe
        const edital = await this.prisma.edital.findUnique({
            where: { id: createDisputaDto.editalId }
        });

        if (!edital) {
            throw new NotFoundException('Edital não encontrado');
        }

        return this.prisma.disputa.create({
            data: {
                ...createDisputaDto,
                status: createDisputaDto.status || DisputaStatus.AGUARDANDO
            },
            include: {
                edital: true,
                propostas: true,
                documentos: true
            }
        });
    }

    async findAll() {
        return this.prisma.disputa.findMany({
            include: {
                edital: true,
                propostas: true,
                documentos: true
            }
        });
    }

    async findOne(id: string) {
        const disputa = await this.prisma.disputa.findUnique({
            where: { id },
            include: {
                edital: true,
                propostas: true,
                documentos: true
            }
        });

        if (!disputa) {
            throw new NotFoundException('Disputa não encontrada');
        }

        return disputa;
    }

    async findByEdital(editalId: string) {
        return this.prisma.disputa.findMany({
            where: { editalId },
            include: {
                edital: true,
                propostas: true,
                documentos: true
            }
        });
    }

    async update(id: string, updateDisputaDto: UpdateDisputaDto) {
        const disputa = await this.findOne(id);

        // Validações de status
        if (updateDisputaDto.status) {
            this.validarTransicaoStatus(disputa.status, updateDisputaDto.status);
        }

        const updatedDisputa = await this.prisma.disputa.update({
            where: { id },
            data: updateDisputaDto,
            include: {
                edital: true,
                propostas: true,
                documentos: true
            }
        });

        if (updateDisputaDto.chatAtivo !== undefined) {
            await this.chatGateway.broadcastStatus(disputa.editalId, updateDisputaDto.chatAtivo);
        }

        return updatedDisputa;
    }

    async remove(id: string) {
        const disputa = await this.findOne(id);

        // Não permite remover disputa em andamento
        if (disputa.status === DisputaStatus.AGUARDANDO) {
            throw new BadRequestException('Não é possível remover uma disputa em andamento');
        }

        return this.prisma.disputa.delete({
            where: { id }
        });
    }

    private validarTransicaoStatus(statusAtual: DisputaStatus, novoStatus: DisputaStatus) {
        const transicoesValidas: Record<DisputaStatus, DisputaStatus[]> = {
            [DisputaStatus.AGUARDANDO]: [DisputaStatus.ABERTA, DisputaStatus.ENCERRADA],
            [DisputaStatus.ABERTA]: [DisputaStatus.SUSPENSA, DisputaStatus.ENCERRADA],
            [DisputaStatus.SUSPENSA]: [DisputaStatus.ABERTA, DisputaStatus.ENCERRADA],
            [DisputaStatus.ENCERRADA]: []
        };

        if (!transicoesValidas[statusAtual].includes(novoStatus)) {
            throw new BadRequestException(
                `Transição de status inválida: ${statusAtual} -> ${novoStatus}`
            );
        }
    }

    async encerrarDisputa(id: string) {
        const disputa = await this.findOne(id);

        if (disputa.status === DisputaStatus.ENCERRADA) {
            return disputa;
        }

        // Verifica empate ficto antes de encerrar
        const empate = await this.verificarEmpateFicto(id);

        // Atualiza status para ENCERRADA
        const disputaEncerrada = await this.prisma.disputa.update({
            where: { id },
            data: {
                status: DisputaStatus.ENCERRADA,
                encerramento: new Date(),
                tempoRestante: 0
            },
            include: {
                edital: true,
                propostas: true,
                documentos: true
            }
        });

        return {
            disputa: disputaEncerrada,
            empateFicto: empate
        };
    }

    async verificarEmpateFicto(disputaId: string) {
        // Busca o menor lance (vencedor provisório)
        const menorLance = await this.prisma.lance.findFirst({
            where: { disputaId },
            orderBy: { valorCentavos: 'asc' },
            include: { licitante: true }
        });

        if (!menorLance) return null;

        // Se o vencedor já é ME/EPP, não há empate ficto (LC 123/2006)
        // Nota: A regra pode variar, mas geralmente o benefício é para ME/EPP quando o vencedor NÃO é.
        // Mas o PRD diz "Aplicação automática". Vamos listar todos os ME/EPP no intervalo.

        // Intervalo de 5%
        const valorLimite = menorLance.valorCentavos * 1.05;

        const lancesEmpatados = await this.prisma.lance.findMany({
            where: {
                disputaId,
                valorCentavos: {
                    gt: menorLance.valorCentavos,
                    lte: valorLimite
                },
                licitante: {
                    tipoEmpresa: {
                        in: ['ME', 'EPP']
                    }
                }
            },
            include: { licitante: true },
            orderBy: { valorCentavos: 'asc' }
        });

        // Filtra para pegar apenas o melhor lance de cada licitante empatado
        // (caso o mesmo licitante tenha dado vários lances no intervalo)
        const licitantesEmpatados = new Map();
        for (const lance of lancesEmpatados) {
            if (!licitantesEmpatados.has(lance.licitanteId)) {
                licitantesEmpatados.set(lance.licitanteId, lance);
            }
        }

        return Array.from(licitantesEmpatados.values());
    }
}