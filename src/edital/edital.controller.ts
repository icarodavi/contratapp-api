import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, UseGuards } from '@nestjs/common';
import { EditalService } from './edital.service';
import { CreateEditalDto } from './dto/create-edital.dto';
import { UpdateEditalDto } from './dto/update-edital.dto';
import { ModalidadeLicitaçãoPipe } from './pipes/modalidade-licitacao.pipe';
import { CritérioJulgamentoPipe } from './pipes/criterio-julgamento.pipe';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario } from '@prisma/client';

@ApiTags('Editais')
@Controller('editais')
export class EditalController {
    constructor(private readonly editalService: EditalService) {}

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @UsePipes(ModalidadeLicitaçãoPipe, CritérioJulgamentoPipe)
    @ApiOperation({ summary: 'Criar um novo edital' })
    @ApiResponse({ status: 201, description: 'Edital criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    create(@Body() createEditalDto: CreateEditalDto) {
        return this.editalService.create(createEditalDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os editais' })
    @ApiResponse({ status: 200, description: 'Lista de editais retornada com sucesso' })
    findAll() {
        return this.editalService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar edital por ID' })
    @ApiResponse({ status: 200, description: 'Edital encontrado' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    findOne(@Param('id') id: string) {
        return this.editalService.findOne(id);
    }

    @Get('numero/:numero')
    @ApiOperation({ summary: 'Buscar edital por número' })
    @ApiResponse({ status: 200, description: 'Edital encontrado' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    findByNumero(@Param('numero') numero: string) {
        return this.editalService.findByNumero(numero);
    }

    @Patch(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @UsePipes(ModalidadeLicitaçãoPipe, CritérioJulgamentoPipe)
    @ApiOperation({ summary: 'Atualizar edital' })
    @ApiResponse({ status: 200, description: 'Edital atualizado com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    update(@Param('id') id: string, @Body() updateEditalDto: UpdateEditalDto) {
        return this.editalService.update(id, updateEditalDto);
    }

    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Remover edital' })
    @ApiResponse({ status: 200, description: 'Edital removido com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    remove(@Param('id') id: string) {
        return this.editalService.remove(id);
    }
}