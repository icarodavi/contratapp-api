import { Module } from '@nestjs/common';
import { EditalService } from './edital.service';
import { EditalController } from './edital.controller';
import { DatabaseModule } from '@/database/database.module';
import { APP_PIPE } from '@nestjs/core';
import { ModalidadeLicitaçãoPipe } from './pipes/modalidade-licitacao.pipe';
import { CritérioJulgamentoPipe } from './pipes/criterio-julgamento.pipe';

@Module({
    imports: [DatabaseModule],
    controllers: [EditalController],
    providers: [
        EditalService,
        // {
        //     provide: APP_PIPE,
        //     useClass: ModalidadeLicitaçãoPipe,
        // },
        // {
        //     provide: APP_PIPE,
        //     useClass: CritérioJulgamentoPipe,
        // },
    ],
    exports: [EditalService],
})
export class EditalModule {} 