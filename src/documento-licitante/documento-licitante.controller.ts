import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiParam, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { DocumentoLicitanteService } from './documento-licitante.service';
import { CreateDocumentoLicitanteDto } from './dto/create-documento-licitante.dto';
import { UpdateDocumentoLicitanteDto } from './dto/update-documento-licitante.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario } from '@generated/prisma/client';

@ApiTags('Documentos Licitante')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('documentos-licitante')
export class DocumentoLicitanteController {
  constructor(private readonly service: DocumentoLicitanteService) {}

  @Post()
  @Roles(PerfilUsuario.LICITANTE)
  @ApiOperation({ summary: 'Criar um novo documento do licitante' })
  @ApiResponse({ status: 201, description: 'Documento criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiResponse({ status: 401, description: 'Não autorizado' })
  create(@Body() dto: CreateDocumentoLicitanteDto) {
    return this.service.create(dto);
  }

  @Get()
  @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
  @ApiOperation({ summary: 'Listar todos os documentos de licitantes' })
  @ApiResponse({ status: 200, description: 'Lista de documentos retornada com sucesso' })
  @ApiResponse({ status: 401, description: 'Não autorizado' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE)
  @ApiOperation({ summary: 'Obter um documento pelo ID' })
  @ApiResponse({ status: 200, description: 'Documento encontrado' })
  @ApiResponse({ status: 401, description: 'Não autorizado' })
  @ApiResponse({ status: 404, description: 'Documento não encontrado' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Get('disputa/:disputaId')
  @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
  @ApiOperation({ summary: 'Listar documentos por disputa' })
  @ApiParam({ name: 'disputaId', description: 'ID da disputa' })
  @ApiResponse({ status: 200, description: 'Lista de documentos da disputa retornada com sucesso' })
  @ApiResponse({ status: 401, description: 'Não autorizado' })
  findByDisputa(@Param('disputaId') disputaId: string) {
    return this.service.findByDisputa(disputaId);
  }

  @Put(':id')
  @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE)
  @ApiOperation({ summary: 'Atualizar um documento' })
  @ApiResponse({ status: 200, description: 'Documento atualizado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiResponse({ status: 401, description: 'Não autorizado' })
  @ApiResponse({ status: 404, description: 'Documento não encontrado' })
  update(@Param('id') id: string, @Body() dto: UpdateDocumentoLicitanteDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE)
  @ApiOperation({ summary: 'Remover um documento' })
  @ApiResponse({ status: 200, description: 'Documento removido com sucesso' })
  @ApiResponse({ status: 401, description: 'Não autorizado' })
  @ApiResponse({ status: 404, description: 'Documento não encontrado' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
