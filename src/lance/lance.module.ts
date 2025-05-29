import { Module } from '@nestjs/common';
import { LanceService } from './lance.service';
import { LanceController } from './lance.controller';
import { LanceGateway } from './lance.gateway';
import { PrismaService } from '../database/database.service';
import { LogAtividadeService } from '../log-atividade/log-atividade.service';
import { DisputaService } from '../disputa/disputa.service';
import { LicitanteService } from '../licitante/licitante.service';

@Module({
    controllers: [LanceController],
    providers: [
        LanceService,
        LanceGateway,
        PrismaService,
        LogAtividadeService,
        DisputaService,
        LicitanteService
    ],
    exports: [LanceService]
})
export class LanceModule {} 