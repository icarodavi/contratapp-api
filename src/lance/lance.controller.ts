import { Controller, Post, Get, Body, Param, UseGuards, Req } from '@nestjs/common';
import { LanceService } from './lance.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

import { PerfilUsuario } from '@generated/prisma/client';
import { RegistrarLanceDto } from './dto/registrar-lance.dto';

@ApiTags('Lances')
@ApiBearerAuth()
@Controller('lances')
@UseGuards(JwtAuthGuard, RolesGuard)
export class LanceController {
    constructor(private readonly lanceService: LanceService) {}

    @Post(':disputaId')
    @ApiOperation({ summary: 'Registrar um novo lance' })
    @ApiResponse({ status: 201, description: 'Lance registrado com sucesso' })
    @ApiResponse({ status: 400, description: 'Lance inválido (valor menor que o atual, etc.)' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Disputa não encontrada' })
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
    @Roles(PerfilUsuario.LICITANTE, PerfilUsuario.PREGOEIRO, PerfilUsuario.VISUALIZADOR, PerfilUsuario.ADMIN)
    @ApiOperation({ summary: 'Listar lances de uma disputa' })
    @ApiResponse({ status: 200, description: 'Lista de lances retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async buscarLancesPorDisputa(@Param('disputaId') disputaId: string) {
        return this.lanceService.buscarLancesPorDisputa(disputaId);
    }

    @Get(':disputaId/ultimo')
    @Roles(PerfilUsuario.LICITANTE, PerfilUsuario.PREGOEIRO, PerfilUsuario.VISUALIZADOR, PerfilUsuario.ADMIN)
    @ApiOperation({ summary: 'Buscar o último lance de uma disputa' })
    @ApiResponse({ status: 200, description: 'Último lance retornado com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async buscarUltimoLance(@Param('disputaId') disputaId: string) {
        return this.lanceService.buscarUltimoLance(disputaId);
    }
}