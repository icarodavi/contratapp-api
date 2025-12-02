import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { SessaoService } from './sessao.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario } from '@prisma/client';

@ApiTags('Sessões')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('sessoes')
export class SessaoController {
    constructor(private readonly sessaoService: SessaoService) {}

    @Post()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Criar uma nova sessão' })
    @ApiResponse({ status: 201, description: 'Sessão criada com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Licitante ou disputa não encontrada' })
    create(@Body() createSessaoDto: CreateSessaoDto) {
        return this.sessaoService.create(createSessaoDto);
    }

    @Get()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Listar todas as sessões' })
    @ApiResponse({ status: 200, description: 'Lista de sessões retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findAll() {
        return this.sessaoService.findAll();
    }

    @Get(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Obter uma sessão pelo ID' })
    @ApiResponse({ status: 200, description: 'Sessão retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Sessão não encontrada' })
    findOne(@Param('id') id: string) {
        return this.sessaoService.findOne(id);
    }

    @Get('disputa/:disputaId')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Listar sessões por disputa' })
    @ApiResponse({ status: 200, description: 'Lista de sessões da disputa retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findByDisputa(@Param('disputaId') disputaId: string) {
        return this.sessaoService.findByDisputa(disputaId);
    }

    @Get('licitante/:licitanteId')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Listar sessões por licitante' })
    @ApiResponse({ status: 200, description: 'Lista de sessões do licitante retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findByLicitante(@Param('licitanteId') licitanteId: string) {
        return this.sessaoService.findByLicitante(licitanteId);
    }

    @Patch(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Atualizar uma sessão' })
    @ApiResponse({ status: 200, description: 'Sessão atualizada com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Sessão não encontrada' })
    update(@Param('id') id: string, @Body() updateSessaoDto: UpdateSessaoDto) {
        return this.sessaoService.update(id, updateSessaoDto);
    }

    @Delete(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Remover uma sessão' })
    @ApiResponse({ status: 204, description: 'Sessão removida com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Sessão não encontrada' })
    remove(@Param('id') id: string) {
        return this.sessaoService.remove(id);
    }
}