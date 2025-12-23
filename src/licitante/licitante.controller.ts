import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Query } from '@nestjs/common';
import { LicitanteService } from './licitante.service';
import { CreateLicitanteDto } from './dto/create-licitante.dto';
import { UpdateLicitanteDto } from './dto/update-licitante.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { PaginationDto } from '../common/dto/pagination.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario } from '@prisma/client';

@ApiTags('Licitantes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('licitantes')
export class LicitanteController {
    constructor(private readonly licitanteService: LicitanteService) {}

    @Post()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Criar um novo licitante' })
    @ApiResponse({ status: 201, description: 'Licitante criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou CNPJ já cadastrado' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
    create(@Body() createLicitanteDto: CreateLicitanteDto) {
        return this.licitanteService.create(createLicitanteDto);
    }

    @Get()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Listar todos os licitantes' })
    @ApiResponse({ status: 200, description: 'Lista de licitantes retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findAll(@Query() query: PaginationDto) {
        return this.licitanteService.findAll(query);
    }

    @Get(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE)
    @ApiOperation({ summary: 'Buscar licitante por ID' })
    @ApiResponse({ status: 200, description: 'Licitante encontrado' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Licitante não encontrado' })
    findOne(@Param('id') id: string) {
        return this.licitanteService.findOne(id);
    }

    @Get('usuario/:usuarioId')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE)
    @ApiOperation({ summary: 'Buscar licitante por usuário' })
    @ApiResponse({ status: 200, description: 'Licitante encontrado' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Licitante não encontrado para este usuário' })
    findByUsuario(@Param('usuarioId') usuarioId: string) {
        return this.licitanteService.findByUsuario(usuarioId);
    }

    @Get('edital/:editalId')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Listar licitantes que participaram de um edital' })
    @ApiResponse({ status: 200, description: 'Lista de licitantes retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findByEdital(@Param('editalId') editalId: string) {
        return this.licitanteService.findByEdital(editalId);
    }

    @Put(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE)
    @ApiOperation({ summary: 'Atualizar licitante' })
    @ApiResponse({ status: 200, description: 'Licitante atualizado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou CNPJ já cadastrado' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Licitante não encontrado' })
    update(@Param('id') id: string, @Body() updateLicitanteDto: UpdateLicitanteDto) {
        return this.licitanteService.update(id, updateLicitanteDto);
    }

    @Delete(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Remover licitante' })
    @ApiResponse({ status: 200, description: 'Licitante removido com sucesso' })
    @ApiResponse({ status: 400, description: 'Não é possível remover licitante em disputas ativas' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Licitante não encontrado' })
    remove(@Param('id') id: string) {
        return this.licitanteService.remove(id);
    }
}