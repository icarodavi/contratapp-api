import { Module } from '@nestjs/common';
import { RecursoService } from './recurso.service';
import { RecursoController } from './recurso.controller';
import { PrismaService } from '@/database/database.service';

@Module({
    controllers: [RecursoController],
    providers: [RecursoService, PrismaService],
    exports: [RecursoService]
})
export class RecursoModule {} 