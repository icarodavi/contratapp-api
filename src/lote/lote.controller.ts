import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LoteService } from './lote.service';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario } from '@generated/prisma/client';

@ApiTags('Lotes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('lotes')
export class LoteController {
    constructor(private readonly loteService: LoteService) {}

    @Post()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Criar um novo lote' })
    @ApiResponse({ status: 201, description: 'Lote criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou lote já existe' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    create(@Body() createLoteDto: CreateLoteDto) {
        return this.loteService.create(createLoteDto);
    }

    @Get()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE, PerfilUsuario.VISUALIZADOR)
    @ApiOperation({ summary: 'Listar todos os lotes' })
    @ApiResponse({ status: 200, description: 'Lista de lotes retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findAll() {
        return this.loteService.findAll();
    }

    @Get(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE, PerfilUsuario.VISUALIZADOR)
    @ApiOperation({ summary: 'Obter um lote pelo ID' })
    @ApiResponse({ status: 200, description: 'Lote encontrado' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Lote não encontrado' })
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.loteService.findOne(id);
    }

    @Get('edital/:editalId')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE, PerfilUsuario.VISUALIZADOR)
    @ApiOperation({ summary: 'Listar lotes por edital' })
    @ApiResponse({ status: 200, description: 'Lista de lotes do edital retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findByEdital(@Param('editalId', ParseUUIDPipe) editalId: string) {
        return this.loteService.findByEdital(editalId);
    }

    @Patch(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Atualizar um lote' })
    @ApiResponse({ status: 200, description: 'Lote atualizado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou lote já existe' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Lote não encontrado' })
    update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateLoteDto: UpdateLoteDto
    ) {
        return this.loteService.update(id, updateLoteDto);
    }

    @Delete(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Remover um lote' })
    @ApiResponse({ status: 200, description: 'Lote removido com sucesso' })
    @ApiResponse({ status: 400, description: 'Não é possível excluir lote com itens' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Lote não encontrado' })
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.loteService.remove(id);
    }
}