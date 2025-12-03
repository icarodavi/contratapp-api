import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { DisputaStatus, StatusProposta } from '@prisma/client';

@Injectable()
export class DashboardService {
    constructor(private prisma: PrismaService) {}

    async getStats() {
        // Vendas Totais: Soma de propostas ACEITAS
        const vendas = await this.prisma.proposta.aggregate({
            where: { status: StatusProposta.ACEITA },
            _sum: { valorCentavos: true },
        });

        // Projetos Ativos: Disputas em ABERTA ou AGUARDANDO
        const projetosAtivos = await this.prisma.disputa.count({
            where: {
                status: {
                    in: [DisputaStatus.ABERTA, DisputaStatus.AGUARDANDO],
                },
            },
        });

        // Pedidos Totais: Total de propostas enviadas
        const pedidosTotais = await this.prisma.proposta.count();

        // Pagamentos Totais: (Simulado por enquanto, ou usar outra métrica)
        // Vamos usar 30% das vendas como "Pagamentos Realizados" para exemplo
        const pagamentosTotais = Math.round((vendas._sum.valorCentavos || 0) * 0.3);

        return {
            vendasTotais: (vendas._sum.valorCentavos || 0) / 100,
            projetosAtivos,
            pedidosTotais,
            pagamentosTotais: pagamentosTotais / 100,
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

    async getActivity() {
        return this.prisma.logAtividade.findMany({
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
