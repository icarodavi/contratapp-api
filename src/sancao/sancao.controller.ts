import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SancaoService } from './sancao.service';
import { CreateSancaoDto } from './dto/create-sancao.dto';
import { UpdateSancaoDto } from './dto/update-sancao.dto';

@ApiTags('sancoes')
@Controller('sancoes')
export class SancaoController {
    constructor(private readonly sancaoService: SancaoService) {}

    @Post()
    @ApiOperation({ summary: 'Criar uma nova sanção' })
    @ApiResponse({ status: 201, description: 'Sanção criada com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 404, description: 'Edital, licitante ou usuário não encontrado' })
    create(@Body() createSancaoDto: CreateSancaoDto) {
        return this.sancaoService.create(createSancaoDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todas as sanções' })
    @ApiResponse({ status: 200, description: 'Lista de sanções retornada com sucesso' })
    findAll() {
        return this.sancaoService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter uma sanção pelo ID' })
    @ApiResponse({ status: 200, description: 'Sanção encontrada' })
    @ApiResponse({ status: 404, description: 'Sanção não encontrada' })
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.sancaoService.findOne(id);
    }

    @Get('edital/:editalId')
    @ApiOperation({ summary: 'Listar sanções por edital' })
    @ApiResponse({ status: 200, description: 'Lista de sanções do edital retornada com sucesso' })
    findByEdital(@Param('editalId', ParseUUIDPipe) editalId: string) {
        return this.sancaoService.findByEdital(editalId);
    }

    @Get('licitante/:licitanteId')
    @ApiOperation({ summary: 'Listar sanções por licitante' })
    @ApiResponse({ status: 200, description: 'Lista de sanções do licitante retornada com sucesso' })
    findByLicitante(@Param('licitanteId', ParseUUIDPipe) licitanteId: string) {
        return this.sancaoService.findByLicitante(licitanteId);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar uma sanção' })
    @ApiResponse({ status: 200, description: 'Sanção atualizada com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 404, description: 'Sanção não encontrada' })
    update(@Param('id', ParseUUIDPipe) id: string, @Body() updateSancaoDto: UpdateSancaoDto) {
        return this.sancaoService.update(id, updateSancaoDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover uma sanção' })
    @ApiResponse({ status: 200, description: 'Sanção removida com sucesso' })
    @ApiResponse({ status: 404, description: 'Sanção não encontrada' })
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.sancaoService.remove(id);
    }
} 