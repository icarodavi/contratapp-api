import { Module } from '@nestjs/common';

import { DocumentoController } from './documento.controller';
import { DocumentoService } from './documento.service';
import { DatabaseModule } from '@/database/database.module';
import { LogAtividadeModule } from '@/log-atividade/log-atividade.module';
import { DocumentoObrigatorioModule } from '@/documento-obrigatorio/documento-obrigatorio.module';
import { DocumentoLicitanteModule } from '@/documento-licitante/documento-licitante.module';

@Module({
    imports: [DatabaseModule, LogAtividadeModule, DocumentoObrigatorioModule, DocumentoLicitanteModule],
    controllers: [DocumentoController],
    providers: [DocumentoService],
    exports: [DocumentoService],
})
export class DocumentoModule {} 