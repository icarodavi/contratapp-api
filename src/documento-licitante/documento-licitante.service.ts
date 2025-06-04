import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/database/database.service';
import { CreateDocumentoLicitanteDto } from './dto/create-documento-licitante.dto';
import { UpdateDocumentoLicitanteDto } from './dto/update-documento-licitante.dto';
import { StatusDocumento } from '@prisma/client';

@Injectable()
export class DocumentoLicitanteService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateDocumentoLicitanteDto) {
    return this.prisma.documentoLicitante.create({
      data: {
        ...data,
        dataEnvio: new Date(),
        status: StatusDocumento.PENDENTE,
      },
    });
  }

  async findAll() {
    return this.prisma.documentoLicitante.findMany();
  }

  async findOne(id: string) {
    const doc = await this.prisma.documentoLicitante.findUnique({ where: { id } });
    if (!doc) {
      throw new NotFoundException('Documento do licitante não encontrado');
    }
    return doc;
  }

  async findByDisputa(disputaId: string) {
    return this.prisma.documentoLicitante.findMany({ where: { disputaId } });
  }

  async update(id: string, data: UpdateDocumentoLicitanteDto) {
    await this.findOne(id);
    return this.prisma.documentoLicitante.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.documentoLicitante.delete({ where: { id } });
  }
}
