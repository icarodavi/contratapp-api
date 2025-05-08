import { Module } from '@nestjs/common';

import { DocumentoController } from './documento.controller';
import { DocumentoService } from './documento.service';
import { PrismaModule } from '@/database/database.module';
import { LogAtividadeModule } from '@/log-atividade/log-atividade.module';
import { DocumentoObrigatorioModule } from '@/documento-obrigatorio/documento-obrigatorio.module';

@Module({
    imports: [PrismaModule, LogAtividadeModule, DocumentoObrigatorioModule],
    controllers: [DocumentoController],
    providers: [DocumentoService],
    exports: [DocumentoService],
})
export class DocumentoModule {} 