import { Module } from '@nestjs/common';

import { DocumentoController } from './documento.controller';
import { DocumentoService } from './documento.service';
import { PrismaModule } from '@/database/database.module';

@Module({
    imports: [PrismaModule],
    controllers: [DocumentoController],
    providers: [DocumentoService],
    exports: [DocumentoService],
})
export class DocumentoModule {} 