import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { LogAtividadeService } from '../log-atividade/log-atividade.service';
import { DisputaService } from '../disputa/disputa.service';
import { LicitanteService } from '../licitante/licitante.service';
import { TipoEmpresa } from '@prisma/client';

@Injectable()
export class LanceService {
    constructor(
        private prisma: PrismaService,
        private logAtividadeService: LogAtividadeService,
        private disputaService: DisputaService,
        private licitanteService: LicitanteService,
    ) {}

    async registrarLance(
        disputaId: string,
        licitanteId: string,
        valorCentavos: number,
        ip: string,
        userAgent: string,
    ) {
        // Verifica se a disputa existe e está aberta
        const disputa = await this.disputaService.buscarPorId(disputaId);
        if (!disputa) {
            throw new NotFoundException('Disputa não encontrada');
        }

        if (disputa.status !== 'ABERTA') {
            throw new BadRequestException('A disputa não está aberta para receber lances');
        }

        // Verifica se o licitante existe e está habilitado
        const licitante = await this.licitanteService.buscarPorId(licitanteId);
        if (!licitante) {
            throw new NotFoundException('Licitante não encontrado');
        }

        // Busca o último lance da disputa
        const ultimoLance = await this.prisma.lance.findFirst({
            where: { disputaId },
            orderBy: { horario: 'desc' },
        });

        // Valida se o lance é menor que o anterior
        if (ultimoLance && valorCentavos >= ultimoLance.valorCentavos) {
            throw new BadRequestException('O lance deve ser menor que o anterior');
        }

        // Aplica a regra de empate ficto para ME/EPP
        if (ultimoLance) {
            const licitanteAnterior = await this.licitanteService.buscarPorId(ultimoLance.licitanteId);

            if (
                (licitante.tipoEmpresa === TipoEmpresa.ME || licitante.tipoEmpresa === TipoEmpresa.EPP) &&
                (licitanteAnterior.tipoEmpresa === TipoEmpresa.ME || licitanteAnterior.tipoEmpresa === TipoEmpresa.EPP)
            ) {
                const diferencaPercentual = ((ultimoLance.valorCentavos - valorCentavos) / ultimoLance.valorCentavos) * 100;
                if (diferencaPercentual > 5) {
                    throw new BadRequestException(
                        'Para ME/EPP, a diferença entre lances não pode ser superior a 5%',
                    );
                }
            }
        }

        // Registra o lance
        const lance = await this.prisma.lance.create({
            data: {
                disputaId,
                licitanteId,
                valorCentavos,
                horario: new Date(),
                ip,
                userAgent,
            },
        });

        // Registra a atividade
        await this.logAtividadeService.registrar({
            tipo: 'LANCE_REALIZADO',
            descricao: `Lance de ${valorCentavos / 100} reais registrado`,
            disputaId,
            licitanteId,
            dados: {
                valorCentavos,
                ip,
                userAgent,
            },
        });

        return lance;
    }

    async buscarLancesPorDisputa(disputaId: string) {
        return this.prisma.lance.findMany({
            where: { disputaId },
            orderBy: { horario: 'desc' },
            include: {
                licitante: {
                    select: {
                        id: true,
                        nome: true,
                        tipoEmpresa: true,
                    },
                },
            },
        });
    }

    async buscarUltimoLance(disputaId: string) {
        return this.prisma.lance.findFirst({
            where: { disputaId },
            orderBy: { horario: 'desc' },
            include: {
                licitante: {
                    select: {
                        id: true,
                        nome: true,
                        tipoEmpresa: true,
                    },
                },
            },
        });
    }
} 