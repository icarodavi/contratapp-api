import { Module } from '@nestjs/common';
import { DocumentoObrigatorioService } from './documento-obrigatorio.service';
import { DocumentoObrigatorioController } from './documento-obrigatorio.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [DocumentoObrigatorioController],
    providers: [DocumentoObrigatorioService],
    exports: [DocumentoObrigatorioService]
})
export class DocumentoObrigatorioModule {} 