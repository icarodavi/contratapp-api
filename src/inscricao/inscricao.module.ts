import { Module } from '@nestjs/common';
import { InscricaoService } from './inscricao.service';
import { InscricaoController } from './inscricao.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [InscricaoController],
    providers: [InscricaoService],
    exports: [InscricaoService],
})
export class InscricaoModule {}
