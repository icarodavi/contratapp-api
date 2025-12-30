import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Patch, Query } from '@nestjs/common';
import { DisputaService } from './disputa.service';
import { CreateDisputaDto } from './dto/create-disputa.dto';
import { UpdateDisputaDto } from './dto/update-disputa.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario, TipoAtividade } from '@generated/prisma/client';
import { LogActivity } from '../common/decorators/log-activity.decorator';

@ApiTags('Disputas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('disputas')
export class DisputaController {
    constructor(private readonly disputaService: DisputaService) {}

    @Post()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @LogActivity({
        acao: 'Criar Disputa',
        tipo: TipoAtividade.DISPUTA_ABERTA, // Initial status logic might differ, but this marks creation
        modulo: 'Disputa',
        detalhes: 'Criação de nova sala de disputa'
    })
    @ApiOperation({ summary: 'Criar uma nova disputa' })
    @ApiResponse({ status: 201, description: 'Disputa criada com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    create(@Body() createDisputaDto: CreateDisputaDto) {
        return this.disputaService.create(createDisputaDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todas as disputas' })
    @ApiResponse({ status: 200, description: 'Lista de disputas retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findAll(@Query() query: PaginationDto) {
        return this.disputaService.findAll(query);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar disputa por ID' })
    @ApiResponse({ status: 200, description: 'Disputa encontrada' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Disputa não encontrada' })
    findOne(@Param('id') id: string) {
        return this.disputaService.findOne(id);
    }

    @Get('edital/:editalId')
    @ApiOperation({ summary: 'Buscar disputas por edital' })
    @ApiResponse({ status: 200, description: 'Lista de disputas do edital retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findByEdital(@Param('editalId') editalId: string) {
        return this.disputaService.findByEdital(editalId);
    }

    @Put(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @LogActivity({
        acao: 'Atualizar Disputa',
        tipo: TipoAtividade.DISPUTA_RETOMADA, // General update, could be suspended/retumed
        modulo: 'Disputa',
        detalhes: 'Atualização de status ou dados da disputa'
    })
    @ApiOperation({ summary: 'Atualizar disputa' })
    @ApiResponse({ status: 200, description: 'Disputa atualizada com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou transição de status inválida' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Disputa não encontrada' })
    update(@Param('id') id: string, @Body() updateDisputaDto: UpdateDisputaDto) {
        return this.disputaService.update(id, updateDisputaDto);
    }

    @Delete(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @LogActivity({
        acao: 'Remover Disputa',
        tipo: TipoAtividade.DISPUTA_CANCELADA,
        modulo: 'Disputa',
        detalhes: 'Remoção de sala de disputa'
    })
    @ApiOperation({ summary: 'Remover disputa' })
    @ApiResponse({ status: 200, description: 'Disputa removida com sucesso' })
    @ApiResponse({ status: 400, description: 'Não é possível remover disputa em andamento' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Disputa não encontrada' })
    remove(@Param('id') id: string) {
        return this.disputaService.remove(id);
    }

    @Patch(':id/chat')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @LogActivity({
        acao: 'Alterar Status Chat',
        tipo: TipoAtividade.SISTEMA_ATUALIZACAO,
        modulo: 'Disputa',
        detalhes: 'Alteração de status do chat (ativo/inativo)'
    })
    @ApiOperation({ summary: 'Ativar/Desativar chat da disputa' })
    @ApiResponse({ status: 200, description: 'Status do chat atualizado' })
    updateChatStatus(@Param('id') id: string, @Body('ativo') ativo: boolean) {
        return this.disputaService.update(id, { chatAtivo: ativo });
    }
}