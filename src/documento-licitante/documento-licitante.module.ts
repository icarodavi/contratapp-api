import { Module } from '@nestjs/common';
import { DocumentoLicitanteService } from './documento-licitante.service';
import { DocumentoLicitanteController } from './documento-licitante.controller';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DocumentoLicitanteController],
  providers: [DocumentoLicitanteService],
  exports: [DocumentoLicitanteService],
})
export class DocumentoLicitanteModule {}
