import { Module } from '@nestjs/common';
import { PropostaService } from './proposta.service';
import { PropostaController } from './proposta.controller';
import { PrismaModule } from '../database/database.module';

@Module({
    imports: [PrismaModule],
    controllers: [PropostaController],
    providers: [PropostaService],
})
export class PropostaModule {}
