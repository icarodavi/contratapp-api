import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { DisputaStatus, StatusProposta } from '@prisma/client';

@Injectable()
export class DashboardService {
    constructor(private prisma: PrismaService) {}

    async getStats() {
        const now = new Date();
        const thirtyDaysFromNow = new Date();
        thirtyDaysFromNow.setDate(now.getDate() + 30);

        // Editais Cadastrados
        const editaisCadastrados = await this.prisma.edital.count();

        // Disputas Ativas (ABERTA ou EM_DISPUTA)
        const disputasAtivas = await this.prisma.disputa.count({
            where: {
                status: {
                    in: [DisputaStatus.ABERTA, DisputaStatus.SUSPENSA],
                },
            },
        });

        // Disputas Previstas (Próximos 30 dias)
        // Baseado na data de abertura do Edital
        const disputasPrevistas = await this.prisma.edital.count({
            where: {
                dataAbertura: {
                    gte: now,
                    lte: thirtyDaysFromNow,
                },
            },
        });

        return {
            editaisCadastrados,
            disputasAtivas,
            disputasPrevistas,
        };
    }

    async getRevenue() {
        // Agrupar vendas por mês (Simulado com dados reais + mock para meses vazios)
        // Em produção, faríamos uma query raw ou agrupamento mais complexo.
        // Aqui vamos pegar as propostas aceitas e agrupar em memória para simplificar.

        const propostas = await this.prisma.proposta.findMany({
            where: { status: StatusProposta.ACEITA },
            select: { valorCentavos: true, createdAt: true },
        });

        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        const currentYear = new Date().getFullYear();

        const revenueByMonth = months.map((month, index) => {
            const total = propostas
                .filter(p => {
                    const date = new Date(p.createdAt);
                    return date.getMonth() === index && date.getFullYear() === currentYear;
                })
                .reduce((acc, curr) => acc + (curr.valorCentavos || 0), 0);

            return { name: month, total: total / 100 };
        });

        return revenueByMonth;
    }

    async getActivity(user: any) {
        const where: any = {};

        if (user.perfil !== 'ADMIN' && user.perfil !== 'PREGOEIRO') {
            where.usuarioId = user.id;
        }

        return this.prisma.logAtividade.findMany({
            where,
            take: 5,
            orderBy: { data: 'desc' },
            include: {
                usuario: {
                    select: { nome: true, email: true }
                }
            }
        });
    }
}
