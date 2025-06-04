import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { DocumentoLicitanteService } from './documento-licitante.service';
import { CreateDocumentoLicitanteDto } from './dto/create-documento-licitante.dto';
import { UpdateDocumentoLicitanteDto } from './dto/update-documento-licitante.dto';

@ApiTags('documentos-licitante')
@Controller('documentos-licitante')
export class DocumentoLicitanteController {
  constructor(private readonly service: DocumentoLicitanteService) {}

  @Post()
  create(@Body() dto: CreateDocumentoLicitanteDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Get('disputa/:disputaId')
  @ApiParam({ name: 'disputaId', description: 'ID da disputa' })
  findByDisputa(@Param('disputaId') disputaId: string) {
    return this.service.findByDisputa(disputaId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDocumentoLicitanteDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
