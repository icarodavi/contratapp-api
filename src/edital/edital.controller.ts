import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { EditalService } from './edital.service';
import { CreateEditalDto } from './dto/create-edital.dto';
import { UpdateEditalDto } from './dto/update-edital.dto';
import { ModalidadeLicitaçãoPipe } from './pipes/modalidade-licitacao.pipe';
import { CritérioJulgamentoPipe } from './pipes/criterio-julgamento.pipe';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Editais')
@Controller('editais')
export class EditalController {
    constructor(private readonly editalService: EditalService) {}

    @Post()
    @UsePipes(ModalidadeLicitaçãoPipe, CritérioJulgamentoPipe)
    @ApiOperation({ summary: 'Criar um novo edital' })
    @ApiResponse({ status: 201, description: 'Edital criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
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
    @UsePipes(ModalidadeLicitaçãoPipe, CritérioJulgamentoPipe)
    @ApiOperation({ summary: 'Atualizar edital' })
    @ApiResponse({ status: 200, description: 'Edital atualizado com sucesso' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    update(@Param('id') id: string, @Body() updateEditalDto: UpdateEditalDto) {
        return this.editalService.update(id, updateEditalDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover edital' })
    @ApiResponse({ status: 200, description: 'Edital removido com sucesso' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    remove(@Param('id') id: string) {
        return this.editalService.remove(id);
    }
} 