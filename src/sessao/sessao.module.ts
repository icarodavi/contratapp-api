import { Module } from '@nestjs/common';
import { SessaoService } from './sessao.service';
import { SessaoController } from './sessao.controller';
import { PrismaModule } from '@/database/database.module';

@Module({
    imports: [PrismaModule],
    controllers: [SessaoController],
    providers: [SessaoService],
    exports: [SessaoService]
})
export class SessaoModule {} 