import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LogAtividadeService } from './log-atividade.service';
import { TipoAtividade } from '@prisma/client';

@ApiTags('logs-atividade')
@Controller('logs-atividade')
export class LogAtividadeController {
    constructor(private readonly logAtividadeService: LogAtividadeService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um novo log de atividade' })
    @ApiResponse({ status: 201, description: 'Log criado com sucesso' })
    async criarLog(@Body() params: {
        tipo: TipoAtividade;
        acao: string;
        detalhes?: string;
        ip?: string;
        userAgent?: string;
        sessaoId?: string;
        hashSessao?: string;
        status?: string;
        nivel?: string;
        modulo: string;
        entidadeId?: string;
        entidadeTipo?: string;
        metadata?: any;
        disputaId?: string;
        usuarioId?: string;
    }) {
        return this.logAtividadeService.criarLog(params);
    }

    @Get('disputa/:disputaId')
    @ApiOperation({ summary: 'Buscar logs por disputa' })
    @ApiResponse({ status: 200, description: 'Lista de logs retornada com sucesso' })
    async buscarPorDisputa(@Param('disputaId') disputaId: string) {
        return this.logAtividadeService.buscarPorDisputa(disputaId);
    }

    @Get('usuario/:usuarioId')
    @ApiOperation({ summary: 'Buscar logs por usuário' })
    @ApiResponse({ status: 200, description: 'Lista de logs retornada com sucesso' })
    async buscarPorUsuario(@Param('usuarioId') usuarioId: string) {
        return this.logAtividadeService.buscarPorUsuario(usuarioId);
    }

    @Get('tipo/:tipo')
    @ApiOperation({ summary: 'Buscar logs por tipo de atividade' })
    @ApiResponse({ status: 200, description: 'Lista de logs retornada com sucesso' })
    async buscarPorTipo(@Param('tipo') tipo: TipoAtividade) {
        return this.logAtividadeService.buscarPorTipo(tipo);
    }

    @Get('periodo')
    @ApiOperation({ summary: 'Buscar logs por período' })
    @ApiResponse({ status: 200, description: 'Lista de logs retornada com sucesso' })
    async buscarPorPeriodo(
        @Query('dataInicio') dataInicio: string,
        @Query('dataFim') dataFim: string
    ) {
        return this.logAtividadeService.buscarPorPeriodo(
            new Date(dataInicio),
            new Date(dataFim)
        );
    }

    @Get('entidade/:entidadeId/:entidadeTipo')
    @ApiOperation({ summary: 'Buscar logs por entidade' })
    @ApiResponse({ status: 200, description: 'Lista de logs retornada com sucesso' })
    async buscarPorEntidade(
        @Param('entidadeId') entidadeId: string,
        @Param('entidadeTipo') entidadeTipo: string
    ) {
        return this.logAtividadeService.buscarPorEntidade(entidadeId, entidadeTipo);
    }

    @Get('erros')
    @ApiOperation({ summary: 'Buscar logs de erro' })
    @ApiResponse({ status: 200, description: 'Lista de logs de erro retornada com sucesso' })
    async buscarErros() {
        return this.logAtividadeService.buscarErros();
    }
} 