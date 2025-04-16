import { Module } from '@nestjs/common';
import { LicitanteService } from './licitante.service';
import { LicitanteController } from './licitante.controller';
import { PrismaService } from '../database/database.service';

@Module({
    controllers: [LicitanteController],
    providers: [LicitanteService, PrismaService],
    exports: [LicitanteService]
})
export class LicitanteModule {} 