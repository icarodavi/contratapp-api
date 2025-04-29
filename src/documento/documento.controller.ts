import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { DocumentoService } from './documento.service';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
import { DocumentoDto } from './dto/documento.dto';
@ApiTags('documentos')
@Controller('documentos')
export class DocumentoController {
    constructor(private readonly documentoService: DocumentoService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um novo documento' })
    @ApiResponse({ status: 201, description: 'Documento criado com sucesso', type: DocumentoDto })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    async create(@Body() createDocumentoDto: CreateDocumentoDto): Promise<DocumentoDto> {
        return this.documentoService.create(createDocumentoDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os documentos ativos' })
    @ApiResponse({ status: 200, description: 'Lista de documentos', type: [DocumentoDto] })
    async findAll(): Promise<DocumentoDto[]> {
        return this.documentoService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar documento por ID' })
    @ApiParam({ name: 'id', description: 'ID do documento' })
    @ApiResponse({ status: 200, description: 'Documento encontrado', type: DocumentoDto })
    @ApiResponse({ status: 404, description: 'Documento não encontrado' })
    async findOne(@Param('id') id: string): Promise<DocumentoDto> {
        return this.documentoService.findOne(id);
    }

    @Get('edital/:editalId')
    @ApiOperation({ summary: 'Buscar documentos por edital' })
    @ApiParam({ name: 'editalId', description: 'ID do edital' })
    @ApiResponse({ status: 200, description: 'Lista de documentos do edital', type: [DocumentoDto] })
    async findByEdital(@Param('editalId') editalId: string): Promise<DocumentoDto[]> {
        return this.documentoService.findByEdital(editalId);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualizar documento' })
    @ApiParam({ name: 'id', description: 'ID do documento' })
    @ApiResponse({ status: 200, description: 'Documento atualizado', type: DocumentoDto })
    @ApiResponse({ status: 404, description: 'Documento não encontrado' })
    async update(
        @Param('id') id: string,
        @Body() updateDocumentoDto: UpdateDocumentoDto,
    ): Promise<DocumentoDto> {
        return this.documentoService.update(id, updateDocumentoDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Remover documento (soft delete)' })
    @ApiParam({ name: 'id', description: 'ID do documento' })
    @ApiResponse({ status: 204, description: 'Documento removido com sucesso' })
    @ApiResponse({ status: 404, description: 'Documento não encontrado' })
    async remove(@Param('id') id: string): Promise<void> {
        await this.documentoService.remove(id);
    }
} 