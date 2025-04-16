import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Documentos')
@Injectable()
export class DocumentoService {
    constructor(private prisma: PrismaService) {}

    async create(createDocumentoDto: CreateDocumentoDto) {
        // Verifica se o edital existe
        const edital = await this.prisma.edital.findUnique({
            where: { id: createDocumentoDto.editalId }
        });

        if (!edital) {
            throw new NotFoundException('Edital não encontrado');
        }

        return this.prisma.documento.create({
            data: createDocumentoDto,
            include: {
                edital: true
            }
        });
    }

    async findAll() {
        return this.prisma.documento.findMany({
            where: { ativo: true },
            include: {
                edital: true
            }
        });
    }

    async findOne(id: string) {
        const documento = await this.prisma.documento.findUnique({
            where: { id },
            include: {
                edital: true
            }
        });

        if (!documento) {
            throw new NotFoundException('Documento não encontrado');
        }

        return documento;
    }

    async findByEdital(editalId: string) {
        const documentos = await this.prisma.documento.findMany({
            where: {
                editalId,
                ativo: true
            },
            include: {
                edital: true
            }
        });

        return documentos;
    }

    async update(id: string, updateDocumentoDto: UpdateDocumentoDto) {
        const documento = await this.findOne(id);

        return this.prisma.documento.update({
            where: { id },
            data: updateDocumentoDto,
            include: {
                edital: true
            }
        });
    }

    async remove(id: string) {
        const documento = await this.findOne(id);

        return this.prisma.documento.update({
            where: { id },
            data: {
                ativo: false,
                deletedAt: new Date()
            }
        });
    }

    async validateDocumento(documento: CreateDocumentoDto): Promise<void> {
        if (!documento.nome) {
            throw new BadRequestException('Nome do documento é obrigatório');
        }

        if (!documento.caminho) {
            throw new BadRequestException('Caminho do documento é obrigatório');
        }

        if (!documento.editalId) {
            throw new BadRequestException('ID do edital é obrigatório');
        }

        if (!documento.tipo) {
            throw new BadRequestException('Tipo do documento é obrigatório');
        }
    }
} 