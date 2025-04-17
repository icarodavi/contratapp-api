import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@ApiTags('itens')
@Controller('itens')
export class ItemController {
    constructor(private readonly itemService: ItemService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um novo item' })
    @ApiResponse({ status: 201, description: 'Item criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 404, description: 'Lote não encontrado' })
    create(@Body() createItemDto: CreateItemDto) {
        return this.itemService.create(createItemDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os itens' })
    @ApiResponse({ status: 200, description: 'Lista de itens retornada com sucesso' })
    findAll() {
        return this.itemService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter um item pelo ID' })
    @ApiResponse({ status: 200, description: 'Item retornado com sucesso' })
    @ApiResponse({ status: 404, description: 'Item não encontrado' })
    findOne(@Param('id') id: string) {
        return this.itemService.findOne(id);
    }

    @Get('lote/:loteId')
    @ApiOperation({ summary: 'Listar itens por lote' })
    @ApiResponse({ status: 200, description: 'Lista de itens do lote retornada com sucesso' })
    findByLote(@Param('loteId') loteId: string) {
        return this.itemService.findByLote(loteId);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar um item' })
    @ApiResponse({ status: 200, description: 'Item atualizado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 404, description: 'Item não encontrado' })
    update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
        return this.itemService.update(id, updateItemDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Remover um item' })
    @ApiResponse({ status: 204, description: 'Item removido com sucesso' })
    @ApiResponse({ status: 400, description: 'Não é possível remover item com propostas' })
    @ApiResponse({ status: 404, description: 'Item não encontrado' })
    remove(@Param('id') id: string) {
        return this.itemService.remove(id);
    }
} 