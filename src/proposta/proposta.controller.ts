import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { PropostaService } from './proposta.service';
import { CreatePropostaDto } from './dto/create-proposta.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario } from '@prisma/client';

@ApiTags('Propostas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('propostas')
export class PropostaController {
  constructor(private readonly propostaService: PropostaService) {}

  @Post()
  @Roles(PerfilUsuario.LICITANTE)
  @ApiOperation({ summary: 'Criar uma nova proposta' })
  @ApiResponse({ status: 201, description: 'Proposta criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiResponse({ status: 401, description: 'Não autorizado' })
  @ApiResponse({ status: 404, description: 'Item ou licitante não encontrado' })
  create(@Body() createPropostaDto: CreatePropostaDto) {
    return this.propostaService.create(createPropostaDto);
  }

  @Get()
  @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
  @ApiOperation({ summary: 'Listar todas as propostas' })
  @ApiResponse({ status: 200, description: 'Lista de propostas retornada com sucesso' })
  @ApiResponse({ status: 401, description: 'Não autorizado' })
  findAll() {
    return this.propostaService.findAll();
  }

  @Get(':id')
  @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE)
  @ApiOperation({ summary: 'Obter uma proposta pelo ID' })
  @ApiResponse({ status: 200, description: 'Proposta encontrada' })
  @ApiResponse({ status: 401, description: 'Não autorizado' })
  @ApiResponse({ status: 404, description: 'Proposta não encontrada' })
  findOne(@Param('id') id: string) {
    return this.propostaService.findOne(id);
  }

  @Get('disputa/:disputaId')
  @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
  @ApiOperation({ summary: 'Listar propostas por disputa' })
  @ApiResponse({ status: 200, description: 'Lista de propostas da disputa retornada com sucesso' })
  @ApiResponse({ status: 401, description: 'Não autorizado' })
  findByDisputa(@Param('disputaId') disputaId: string) {
    return this.propostaService.findByDisputa(disputaId);
  }
}
