import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LogAtividadeService } from './log-atividade.service';
import { TipoAtividade, PerfilUsuario } from '@prisma/client';
import { CreateLogAtividadeDto } from './dto/create-log-atividade.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@ApiTags('Logs Atividade')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('logs-atividade')
export class LogAtividadeController {
    constructor(private readonly logAtividadeService: LogAtividadeService) {}

    @Post()
    @Roles(PerfilUsuario.ADMIN) // Usually logs are created by system or internal services, but if exposed, restrict to Admin
    @ApiOperation({ summary: 'Criar um novo log de atividade' })
    @ApiResponse({ status: 201, description: 'Log criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async criarLog(@Body() createLogAtividadeDto: CreateLogAtividadeDto) {
        return this.logAtividadeService.criarLog(createLogAtividadeDto);
    }

    @Get('disputa/:disputaId')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Buscar logs por disputa' })
    @ApiResponse({ status: 200, description: 'Lista de logs retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async buscarPorDisputa(@Param('disputaId') disputaId: string) {
        return this.logAtividadeService.buscarPorDisputa(disputaId);
    }

    @Get('usuario/:usuarioId')
    @Roles(PerfilUsuario.ADMIN)
    @ApiOperation({ summary: 'Buscar logs por usuário' })
    @ApiResponse({ status: 200, description: 'Lista de logs retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async buscarPorUsuario(@Param('usuarioId') usuarioId: string) {
        return this.logAtividadeService.buscarPorUsuario(usuarioId);
    }

    @Get('tipo/:tipo')
    @Roles(PerfilUsuario.ADMIN)
    @ApiOperation({ summary: 'Buscar logs por tipo de atividade' })
    @ApiResponse({ status: 200, description: 'Lista de logs retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async buscarPorTipo(@Param('tipo') tipo: TipoAtividade) {
        return this.logAtividadeService.buscarPorTipo(tipo);
    }

    @Get('periodo')
    @Roles(PerfilUsuario.ADMIN)
    @ApiOperation({ summary: 'Buscar logs por período' })
    @ApiResponse({ status: 200, description: 'Lista de logs retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async buscarPorPeriodo(
        @Query('dataInicio') dataInicio: string,
        @Query('dataFim') dataFim: string,
        @Query('modulo') modulo?: string,
        @Query('acao') acao?: string,
        @Query('ip') ip?: string,
        @Query('usuarioId') usuarioId?: string,
    ) {
        return this.logAtividadeService.buscarPorPeriodo(
            new Date(dataInicio),
            new Date(dataFim),
            { modulo, acao, ip, usuarioId }
        );
    }

    @Get('entidade/:entidadeId/:entidadeTipo')
    @Roles(PerfilUsuario.ADMIN)
    @ApiOperation({ summary: 'Buscar logs por entidade' })
    @ApiResponse({ status: 200, description: 'Lista de logs retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async buscarPorEntidade(
        @Param('entidadeId') entidadeId: string,
        @Param('entidadeTipo') entidadeTipo: string
    ) {
        return this.logAtividadeService.buscarPorEntidade(entidadeId, entidadeTipo);
    }

    @Get('erros')
    @Roles(PerfilUsuario.ADMIN)
    @ApiOperation({ summary: 'Buscar logs de erro' })
    @ApiResponse({ status: 200, description: 'Lista de logs de erro retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async buscarErros() {
        return this.logAtividadeService.buscarErros();
    }
}