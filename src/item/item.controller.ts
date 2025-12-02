import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario } from '@prisma/client';

@ApiTags('Itens')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('itens')
export class ItemController {
    constructor(private readonly itemService: ItemService) {}

    @Post()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Criar um novo item' })
    @ApiResponse({ status: 201, description: 'Item criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Lote não encontrado' })
    create(@Body() createItemDto: CreateItemDto) {
        return this.itemService.create(createItemDto);
    }

    @Get()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE, PerfilUsuario.VISUALIZADOR)
    @ApiOperation({ summary: 'Listar todos os itens' })
    @ApiResponse({ status: 200, description: 'Lista de itens retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findAll() {
        return this.itemService.findAll();
    }

    @Get(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE, PerfilUsuario.VISUALIZADOR)
    @ApiOperation({ summary: 'Obter um item pelo ID' })
    @ApiResponse({ status: 200, description: 'Item retornado com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Item não encontrado' })
    findOne(@Param('id') id: string) {
        return this.itemService.findOne(id);
    }

    @Get('lote/:loteId')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE, PerfilUsuario.VISUALIZADOR)
    @ApiOperation({ summary: 'Listar itens por lote' })
    @ApiResponse({ status: 200, description: 'Lista de itens do lote retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findByLote(@Param('loteId') loteId: string) {
        return this.itemService.findByLote(loteId);
    }

    @Patch(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Atualizar um item' })
    @ApiResponse({ status: 200, description: 'Item atualizado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Item não encontrado' })
    update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
        return this.itemService.update(id, updateItemDto);
    }

    @Delete(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Remover um item' })
    @ApiResponse({ status: 204, description: 'Item removido com sucesso' })
    @ApiResponse({ status: 400, description: 'Não é possível remover item com propostas' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Item não encontrado' })
    remove(@Param('id') id: string) {
        return this.itemService.remove(id);
    }
}