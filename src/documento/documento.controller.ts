import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus, UseGuards, UploadedFile, UseInterceptors, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { DocumentoService } from './documento.service';
import { DocumentoLicitanteService } from '../documento-licitante/documento-licitante.service';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
import { DocumentoDto } from './dto/documento.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as crypto from 'crypto';
import * as fs from 'fs';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { LogAtividadeService } from '../log-atividade/log-atividade.service';
import { DocumentoObrigatorioService } from '../documento-obrigatorio/documento-obrigatorio.service';
import { TipoAtividade, PerfilUsuario } from '@prisma/client';
import { CreateDocumentoLicitanteDto } from '../documento-licitante/dto/create-documento-licitante.dto';
import { multerConfig } from './multer-config';

@ApiTags('Documentos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('documentos')
export class DocumentoController {
    constructor(
        private readonly documentoService: DocumentoService,
        private readonly documentoLicitanteService: DocumentoLicitanteService,
        private readonly logAtividadeService: LogAtividadeService,
        private readonly documentoObrigatorioService: DocumentoObrigatorioService
    ) {}

    @Post()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Criar um novo documento' })
    @ApiResponse({ status: 201, description: 'Documento criado com sucesso', type: DocumentoDto })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async create(@Body() createDocumentoDto: CreateDocumentoDto): Promise<DocumentoDto> {
        return this.documentoService.create(createDocumentoDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os documentos ativos' })
    @ApiResponse({ status: 200, description: 'Lista de documentos', type: [DocumentoDto] })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async findAll(): Promise<DocumentoDto[]> {
        return this.documentoService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar documento por ID' })
    @ApiParam({ name: 'id', description: 'ID do documento' })
    @ApiResponse({ status: 200, description: 'Documento encontrado', type: DocumentoDto })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Documento não encontrado' })
    async findOne(@Param('id') id: string): Promise<DocumentoDto> {
        return this.documentoService.findOne(id);
    }

    @Get('edital/:editalId')
    @ApiOperation({ summary: 'Buscar documentos por edital' })
    @ApiParam({ name: 'editalId', description: 'ID do edital' })
    @ApiResponse({ status: 200, description: 'Lista de documentos do edital', type: [DocumentoDto] })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async findByEdital(@Param('editalId') editalId: string): Promise<DocumentoDto[]> {
        return this.documentoService.findByEdital(editalId);
    }

    @Put(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Atualizar documento' })
    @ApiParam({ name: 'id', description: 'ID do documento' })
    @ApiResponse({ status: 200, description: 'Documento atualizado', type: DocumentoDto })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Documento não encontrado' })
    async update(
        @Param('id') id: string,
        @Body() updateDocumentoDto: UpdateDocumentoDto,
    ): Promise<DocumentoDto> {
        return this.documentoService.update(id, updateDocumentoDto);
    }

    @Delete(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Remover documento (soft delete)' })
    @ApiParam({ name: 'id', description: 'ID do documento' })
    @ApiResponse({ status: 204, description: 'Documento removido com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Documento não encontrado' })
    async remove(@Param('id') id: string): Promise<void> {
        await this.documentoService.remove(id);
    }

    @Post('upload')
    @Roles(PerfilUsuario.LICITANTE)
    @UseInterceptors(FileInterceptor('file', multerConfig))
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: 'Upload de documento por licitante' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
                disputaId: { type: 'string' },
                licitanteId: { type: 'string' },
                tipoDocumento: { type: 'string' },
                versao: { type: 'string' },
                editalId: { type: 'string' },
                descricao: { type: 'string' },
                validade: { type: 'string' },
                assinatura: { type: 'string' },
            },
        },
    })
    @ApiResponse({ status: 201, description: 'Documento enviado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou tipo de documento não exigido' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async uploadDocumento(
        @UploadedFile() file: Express.Multer.File,
        @Body() body: any,
        @Req() req: any
    ) {
        // Validação básica dos campos obrigatórios
        const { disputaId, licitanteId, tipoDocumento, versao, editalId, descricao, validade, assinatura } = body;
        if (!disputaId || !licitanteId || !tipoDocumento || !versao || !editalId) {
            throw new Error('Campos obrigatórios não informados');
        }
        // Antes de salvar o arquivo, valide se o tipoDocumento é exigido para o edital
        const obrigatorios = await this.documentoObrigatorioService.findByEdital(editalId);
        const tiposObrigatorios = obrigatorios.map(doc => doc.tipoDocumento);
        if (!tiposObrigatorios.includes(tipoDocumento)) {
            throw new Error('Tipo de documento não exigido para este edital');
        }
        // Calcula hash do arquivo
        // Como estamos usando diskStorage, file.buffer é undefined. Precisamos ler o arquivo.
        const fileBuffer = fs.readFileSync(file.path);
        const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
        // Monta DTO para salvar no banco
        const createDto: CreateDocumentoLicitanteDto = {
            disputaId,
            licitanteId,
            tipoDocumento,
            nomeOriginal: file.originalname,
            descricao,
            arquivoPath: file.path,
            versao: Number(versao),
            hashDocumento: hash,
            assinaturaBase64: assinatura,
            assinadoPor: req.user?.id || licitanteId,
            dataValidade: validade ? new Date(validade) : undefined,
        };
        // Salva no banco
        const documento = await this.documentoLicitanteService.create(createDto);
        // Registra no LogAtividade
        await this.logAtividadeService.criarLog({
            tipo: TipoAtividade.DOCUMENTO_ENVIADO,
            acao: 'Upload de documento',
            detalhes: `Documento ${file.originalname} enviado para disputa ${disputaId} pelo licitante ${licitanteId}`,
            modulo: 'DOCUMENTO',
            entidadeId: documento.id,
            entidadeTipo: 'Documento',
            disputaId,
            usuarioId: req.user?.id || licitanteId
        });
        return { documento };
    }
}