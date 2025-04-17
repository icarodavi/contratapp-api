import { Module } from '@nestjs/common';
import { PrazoService } from './prazo.service';
import { PrazoController } from './prazo.controller';
import { PrismaService } from '@/database/database.service';

@Module({
    controllers: [PrazoController],
    providers: [PrazoService, PrismaService],
    exports: [PrazoService]
})
export class PrazoModule {} 