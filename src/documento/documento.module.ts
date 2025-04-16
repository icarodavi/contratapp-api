import { Module } from '@nestjs/common';

import { DocumentoController } from './documento.controller';
import { DocumentoService } from './documento.service';


@Module({
    imports: [],
    controllers: [DocumentoController],
    providers: [DocumentoService],
    exports: [DocumentoService],
})
export class DocumentoModule {} 