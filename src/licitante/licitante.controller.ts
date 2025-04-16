import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LicitanteService } from './licitante.service';
import { CreateLicitanteDto } from './dto/create-licitante.dto';
import { UpdateLicitanteDto } from './dto/update-licitante.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Licitantes')
@Controller('licitantes')
export class LicitanteController {
    constructor(private readonly licitanteService: LicitanteService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um novo licitante' })
    @ApiResponse({ status: 201, description: 'Licitante criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou CNPJ já cadastrado' })
    @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
    create(@Body() createLicitanteDto: CreateLicitanteDto) {
        return this.licitanteService.create(createLicitanteDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os licitantes' })
    @ApiResponse({ status: 200, description: 'Lista de licitantes retornada com sucesso' })
    findAll() {
        return this.licitanteService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar licitante por ID' })
    @ApiResponse({ status: 200, description: 'Licitante encontrado' })
    @ApiResponse({ status: 404, description: 'Licitante não encontrado' })
    findOne(@Param('id') id: string) {
        return this.licitanteService.findOne(id);
    }

    @Get('usuario/:usuarioId')
    @ApiOperation({ summary: 'Buscar licitante por usuário' })
    @ApiResponse({ status: 200, description: 'Licitante encontrado' })
    @ApiResponse({ status: 404, description: 'Licitante não encontrado para este usuário' })
    findByUsuario(@Param('usuarioId') usuarioId: string) {
        return this.licitanteService.findByUsuario(usuarioId);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualizar licitante' })
    @ApiResponse({ status: 200, description: 'Licitante atualizado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou CNPJ já cadastrado' })
    @ApiResponse({ status: 404, description: 'Licitante não encontrado' })
    update(@Param('id') id: string, @Body() updateLicitanteDto: UpdateLicitanteDto) {
        return this.licitanteService.update(id, updateLicitanteDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover licitante' })
    @ApiResponse({ status: 200, description: 'Licitante removido com sucesso' })
    @ApiResponse({ status: 400, description: 'Não é possível remover licitante em disputas ativas' })
    @ApiResponse({ status: 404, description: 'Licitante não encontrado' })
    remove(@Param('id') id: string) {
        return this.licitanteService.remove(id);
    }
} 