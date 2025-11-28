import { Module } from '@nestjs/common';
import { SessaoService } from './sessao.service';
import { SessaoController } from './sessao.controller';
import { DatabaseModule } from '@/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [SessaoController],
    providers: [SessaoService],
    exports: [SessaoService]
})
export class SessaoModule {} 