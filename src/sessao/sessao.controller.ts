import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SessaoService } from './sessao.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@ApiTags('sessoes')
@Controller('sessoes')
export class SessaoController {
    constructor(private readonly sessaoService: SessaoService) {}

    @Post()
    @ApiOperation({ summary: 'Criar uma nova sessão' })
    @ApiResponse({ status: 201, description: 'Sessão criada com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 404, description: 'Licitante ou disputa não encontrada' })
    create(@Body() createSessaoDto: CreateSessaoDto) {
        return this.sessaoService.create(createSessaoDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todas as sessões' })
    @ApiResponse({ status: 200, description: 'Lista de sessões retornada com sucesso' })
    findAll() {
        return this.sessaoService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter uma sessão pelo ID' })
    @ApiResponse({ status: 200, description: 'Sessão retornada com sucesso' })
    @ApiResponse({ status: 404, description: 'Sessão não encontrada' })
    findOne(@Param('id') id: string) {
        return this.sessaoService.findOne(id);
    }

    @Get('disputa/:disputaId')
    @ApiOperation({ summary: 'Listar sessões por disputa' })
    @ApiResponse({ status: 200, description: 'Lista de sessões da disputa retornada com sucesso' })
    findByDisputa(@Param('disputaId') disputaId: string) {
        return this.sessaoService.findByDisputa(disputaId);
    }

    @Get('licitante/:licitanteId')
    @ApiOperation({ summary: 'Listar sessões por licitante' })
    @ApiResponse({ status: 200, description: 'Lista de sessões do licitante retornada com sucesso' })
    findByLicitante(@Param('licitanteId') licitanteId: string) {
        return this.sessaoService.findByLicitante(licitanteId);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar uma sessão' })
    @ApiResponse({ status: 200, description: 'Sessão atualizada com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 404, description: 'Sessão não encontrada' })
    update(@Param('id') id: string, @Body() updateSessaoDto: UpdateSessaoDto) {
        return this.sessaoService.update(id, updateSessaoDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Remover uma sessão' })
    @ApiResponse({ status: 204, description: 'Sessão removida com sucesso' })
    @ApiResponse({ status: 404, description: 'Sessão não encontrada' })
    remove(@Param('id') id: string) {
        return this.sessaoService.remove(id);
    }
} 