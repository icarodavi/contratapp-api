import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { DocumentoObrigatorioService } from './documento-obrigatorio.service';
import { CreateDocumentoObrigatorioDto } from './dto/create-documento-obrigatorio.dto';
import { UpdateDocumentoObrigatorioDto } from './dto/update-documento-obrigatorio.dto';

@ApiTags('documentos-obrigatorios')
@Controller('documentos-obrigatorios')
export class DocumentoObrigatorioController {
    constructor(private readonly documentoObrigatorioService: DocumentoObrigatorioService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um novo documento obrigatório' })
    @ApiResponse({ status: 201, description: 'Documento obrigatório criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    async create(@Body() createDocumentoObrigatorioDto: CreateDocumentoObrigatorioDto) {
        return this.documentoObrigatorioService.create(createDocumentoObrigatorioDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os documentos obrigatórios' })
    @ApiResponse({ status: 200, description: 'Lista de documentos obrigatórios' })
    async findAll() {
        return this.documentoObrigatorioService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar documento obrigatório por ID' })
    @ApiParam({ name: 'id', description: 'ID do documento obrigatório' })
    @ApiResponse({ status: 200, description: 'Documento obrigatório encontrado' })
    @ApiResponse({ status: 404, description: 'Documento obrigatório não encontrado' })
    async findOne(@Param('id') id: string) {
        return this.documentoObrigatorioService.findOne(id);
    }

    @Get('edital/:editalId')
    @ApiOperation({ summary: 'Buscar documentos obrigatórios por edital' })
    @ApiParam({ name: 'editalId', description: 'ID do edital' })
    @ApiResponse({ status: 200, description: 'Lista de documentos obrigatórios do edital' })
    async findByEdital(@Param('editalId') editalId: string) {
        return this.documentoObrigatorioService.findByEdital(editalId);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualizar documento obrigatório' })
    @ApiParam({ name: 'id', description: 'ID do documento obrigatório' })
    @ApiResponse({ status: 200, description: 'Documento obrigatório atualizado' })
    @ApiResponse({ status: 404, description: 'Documento obrigatório não encontrado' })
    async update(
        @Param('id') id: string,
        @Body() updateDocumentoObrigatorioDto: UpdateDocumentoObrigatorioDto,
    ) {
        return this.documentoObrigatorioService.update(id, updateDocumentoObrigatorioDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Remover documento obrigatório' })
    @ApiParam({ name: 'id', description: 'ID do documento obrigatório' })
    @ApiResponse({ status: 204, description: 'Documento obrigatório removido com sucesso' })
    @ApiResponse({ status: 404, description: 'Documento obrigatório não encontrado' })
    async remove(@Param('id') id: string) {
        await this.documentoObrigatorioService.remove(id);
    }
} 