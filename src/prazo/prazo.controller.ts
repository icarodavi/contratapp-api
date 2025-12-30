import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { PrazoService } from './prazo.service';
import { CreatePrazoDto } from './dto/create-prazo.dto';
import { UpdatePrazoDto } from './dto/update-prazo.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario } from '@generated/prisma/client';

@ApiTags('Prazos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('prazos')
export class PrazoController {
    constructor(private readonly prazoService: PrazoService) {}

    @Post()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Criar um novo prazo' })
    @ApiResponse({ status: 201, description: 'Prazo criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Edital, licitante, item ou usuário não encontrado' })
    create(@Body() createPrazoDto: CreatePrazoDto) {
        return this.prazoService.create(createPrazoDto);
    }

    @Get()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Listar todos os prazos' })
    @ApiResponse({ status: 200, description: 'Lista de prazos retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findAll() {
        return this.prazoService.findAll();
    }

    @Get(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE)
    @ApiOperation({ summary: 'Obter um prazo pelo ID' })
    @ApiResponse({ status: 200, description: 'Prazo encontrado' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Prazo não encontrado' })
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.prazoService.findOne(id);
    }

    @Get('edital/:editalId')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE)
    @ApiOperation({ summary: 'Listar prazos por edital' })
    @ApiResponse({ status: 200, description: 'Lista de prazos do edital retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findByEdital(@Param('editalId', ParseUUIDPipe) editalId: string) {
        return this.prazoService.findByEdital(editalId);
    }

    @Get('licitante/:licitanteId')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE)
    @ApiOperation({ summary: 'Listar prazos por licitante' })
    @ApiResponse({ status: 200, description: 'Lista de prazos do licitante retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findByLicitante(@Param('licitanteId', ParseUUIDPipe) licitanteId: string) {
        return this.prazoService.findByLicitante(licitanteId);
    }

    @Get('item/:itemId')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE)
    @ApiOperation({ summary: 'Listar prazos por item' })
    @ApiResponse({ status: 200, description: 'Lista de prazos do item retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findByItem(@Param('itemId', ParseUUIDPipe) itemId: string) {
        return this.prazoService.findByItem(itemId);
    }

    @Patch(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Atualizar um prazo' })
    @ApiResponse({ status: 200, description: 'Prazo atualizado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Prazo não encontrado' })
    update(@Param('id', ParseUUIDPipe) id: string, @Body() updatePrazoDto: UpdatePrazoDto) {
        return this.prazoService.update(id, updatePrazoDto);
    }

    @Delete(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Remover um prazo' })
    @ApiResponse({ status: 200, description: 'Prazo removido com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Prazo não encontrado' })
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.prazoService.remove(id);
    }

    @Post('verificar-atrasados')
    @Roles(PerfilUsuario.ADMIN)
    @ApiOperation({ summary: 'Verificar e atualizar prazos atrasados' })
    @ApiResponse({ status: 200, description: 'Prazos atrasados atualizados com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    verificarPrazosAtrasados() {
        return this.prazoService.verificarPrazosAtrasados();
    }
}