import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreateDocumentoObrigatorioDto } from './dto/create-documento-obrigatorio.dto';
import { UpdateDocumentoObrigatorioDto } from './dto/update-documento-obrigatorio.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Documentos Obrigatórios')
@Injectable()
export class DocumentoObrigatorioService {
    constructor(private prisma: PrismaService) {}

    async create(createDocumentoObrigatorioDto: CreateDocumentoObrigatorioDto) {
        // Verifica se o edital existe
        const edital = await this.prisma.edital.findUnique({
            where: { id: createDocumentoObrigatorioDto.editalId }
        });

        if (!edital) {
            throw new NotFoundException('Edital não encontrado');
        }

        return this.prisma.documentoObrigatorio.create({
            data: createDocumentoObrigatorioDto,
            include: {
                edital: true
            }
        });
    }

    async findAll() {
        return this.prisma.documentoObrigatorio.findMany({
            include: {
                edital: true
            }
        });
    }

    async findOne(id: string) {
        const documento = await this.prisma.documentoObrigatorio.findUnique({
            where: { id },
            include: {
                edital: true
            }
        });

        if (!documento) {
            throw new NotFoundException('Documento obrigatório não encontrado');
        }

        return documento;
    }

    async findByEdital(editalId: string) {
        const documentos = await this.prisma.documentoObrigatorio.findMany({
            where: { editalId },
            include: {
                edital: true
            }
        });

        return documentos;
    }

    async update(id: string, updateDocumentoObrigatorioDto: UpdateDocumentoObrigatorioDto) {
        const documento = await this.findOne(id);

        return this.prisma.documentoObrigatorio.update({
            where: { id },
            data: updateDocumentoObrigatorioDto,
            include: {
                edital: true
            }
        });
    }

    async remove(id: string) {
        const documento = await this.findOne(id);

        return this.prisma.documentoObrigatorio.delete({
            where: { id }
        });
    }

    async validateDocumentoObrigatorio(documento: CreateDocumentoObrigatorioDto): Promise<void> {
        if (!documento.tipoDocumento) {
            throw new BadRequestException('Tipo do documento é obrigatório');
        }

        if (!documento.descricao) {
            throw new BadRequestException('Descrição do documento é obrigatória');
        }

        if (!documento.editalId) {
            throw new BadRequestException('ID do edital é obrigatório');
        }
    }
} 