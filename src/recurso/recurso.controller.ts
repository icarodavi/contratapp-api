import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { RecursoService } from './recurso.service';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario } from '@generated/prisma/client';

@ApiTags('Recursos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('recursos')
export class RecursoController {
    constructor(private readonly recursoService: RecursoService) {}

    @Post()
    @Roles(PerfilUsuario.LICITANTE)
    @ApiOperation({ summary: 'Criar um novo recurso' })
    @ApiResponse({ status: 201, description: 'Recurso criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Edital, licitante ou usuário não encontrado' })
    create(@Body() createRecursoDto: CreateRecursoDto) {
        return this.recursoService.create(createRecursoDto);
    }

    @Get()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Listar todos os recursos' })
    @ApiResponse({ status: 200, description: 'Lista de recursos retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findAll() {
        return this.recursoService.findAll();
    }

    @Get(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE)
    @ApiOperation({ summary: 'Obter um recurso pelo ID' })
    @ApiResponse({ status: 200, description: 'Recurso encontrado' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Recurso não encontrado' })
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.recursoService.findOne(id);
    }

    @Patch(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Atualizar um recurso' })
    @ApiResponse({ status: 200, description: 'Recurso atualizado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Recurso não encontrado' })
    update(@Param('id', ParseUUIDPipe) id: string, @Body() updateRecursoDto: UpdateRecursoDto) {
        return this.recursoService.update(id, updateRecursoDto);
    }

    @Delete(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Remover um recurso' })
    @ApiResponse({ status: 200, description: 'Recurso removido com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Recurso não encontrado' })
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.recursoService.remove(id);
    }
}