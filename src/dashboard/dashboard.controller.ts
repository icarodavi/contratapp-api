import { Controller, Get, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

@ApiTags('Dashboard')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('dashboard')
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) {}

    @Get('stats')
    @ApiOperation({ summary: 'Obter estatísticas gerais' })
    getStats() {
        return this.dashboardService.getStats();
    }

    @Get('revenue')
    @ApiOperation({ summary: 'Obter dados de receita' })
    getRevenue() {
        return this.dashboardService.getRevenue();
    }

    @Get('activity')
    @ApiOperation({ summary: 'Obter atividades recentes' })
    getActivity() {
        return this.dashboardService.getActivity();
    }
}
