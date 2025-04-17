import { Module } from '@nestjs/common';
import { SancaoService } from './sancao.service';
import { SancaoController } from './sancao.controller';
import { PrismaService } from '@/database/database.service';

@Module({
    controllers: [SancaoController],
    providers: [SancaoService, PrismaService],
    exports: [SancaoService]
})
export class SancaoModule {} 