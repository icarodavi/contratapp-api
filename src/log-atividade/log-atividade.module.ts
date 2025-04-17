import { Module } from '@nestjs/common';
import { LogAtividadeService } from './log-atividade.service';
import { LogAtividadeController } from './log-atividade.controller';
import { PrismaService } from '@/database/database.service';

@Module({
    controllers: [LogAtividadeController],
    providers: [LogAtividadeService, PrismaService],
    exports: [LogAtividadeService]
})
export class LogAtividadeModule {} 