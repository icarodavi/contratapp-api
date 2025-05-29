import { Controller, Post, Get, Body, Param, UseGuards, Req } from '@nestjs/common';
import { LanceService } from './lance.service';
import { JwtAuthGuard } from '@/auth/auth.guard';
import { RolesGuard } from '@/auth/guards/roles.guard';
import { Roles } from '@/auth/decorators/roles.decorator';

import { PerfilUsuario } from '@prisma/client';
import { RegistrarLanceDto } from './dto/registrar-lance.dto';

@Controller('lances')
@UseGuards(JwtAuthGuard, RolesGuard)
export class LanceController {
    constructor(private readonly lanceService: LanceService) {}
    @Post(':disputaId')
    async registrarLance(
        @Param('disputaId') disputaId: string,
        @Body() registrarLanceDto: RegistrarLanceDto,
        @Req() req: any,
    ) {
        return this.lanceService.registrarLance(
            disputaId,
            req.user.id,
            registrarLanceDto.valorCentavos,
            req.ip,
            req.headers['user-agent'],
        );
    }

    @Get(':disputaId')
    @Roles(PerfilUsuario.LICITANTE, PerfilUsuario.PREGOEIRO, PerfilUsuario.VISUALIZADOR)
    async buscarLancesPorDisputa(@Param('disputaId') disputaId: string) {
        return this.lanceService.buscarLancesPorDisputa(disputaId);
    }

    @Get(':disputaId/ultimo')
    @Roles(PerfilUsuario.LICITANTE, PerfilUsuario.PREGOEIRO, PerfilUsuario.VISUALIZADOR)
    async buscarUltimoLance(@Param('disputaId') disputaId: string) {
        return this.lanceService.buscarUltimoLance(disputaId);
    }
} 