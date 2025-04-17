import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoteService } from './lote.service';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';

@ApiTags('lotes')
@Controller('lotes')
export class LoteController {
    constructor(private readonly loteService: LoteService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um novo lote' })
    @ApiResponse({ status: 201, description: 'Lote criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou lote já existe' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    create(@Body() createLoteDto: CreateLoteDto) {
        return this.loteService.create(createLoteDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os lotes' })
    @ApiResponse({ status: 200, description: 'Lista de lotes retornada com sucesso' })
    findAll() {
        return this.loteService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter um lote pelo ID' })
    @ApiResponse({ status: 200, description: 'Lote encontrado' })
    @ApiResponse({ status: 404, description: 'Lote não encontrado' })
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.loteService.findOne(id);
    }

    @Get('edital/:editalId')
    @ApiOperation({ summary: 'Listar lotes por edital' })
    @ApiResponse({ status: 200, description: 'Lista de lotes do edital retornada com sucesso' })
    findByEdital(@Param('editalId', ParseUUIDPipe) editalId: string) {
        return this.loteService.findByEdital(editalId);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar um lote' })
    @ApiResponse({ status: 200, description: 'Lote atualizado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou lote já existe' })
    @ApiResponse({ status: 404, description: 'Lote não encontrado' })
    update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateLoteDto: UpdateLoteDto
    ) {
        return this.loteService.update(id, updateLoteDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover um lote' })
    @ApiResponse({ status: 200, description: 'Lote removido com sucesso' })
    @ApiResponse({ status: 400, description: 'Não é possível excluir lote com itens' })
    @ApiResponse({ status: 404, description: 'Lote não encontrado' })
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.loteService.remove(id);
    }
} 