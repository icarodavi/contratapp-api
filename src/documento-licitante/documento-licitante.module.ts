import { Module } from '@nestjs/common';
import { DocumentoLicitanteService } from './documento-licitante.service';
import { DocumentoLicitanteController } from './documento-licitante.controller';
import { PrismaModule } from '@/database/database.module';

@Module({
  imports: [PrismaModule],
  controllers: [DocumentoLicitanteController],
  providers: [DocumentoLicitanteService],
  exports: [DocumentoLicitanteService],
})
export class DocumentoLicitanteModule {}
