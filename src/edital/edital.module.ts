import { Module } from '@nestjs/common';
import { EditalService } from './edital.service';
import { EditalController } from './edital.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { APP_PIPE } from '@nestjs/core';
import { ModalidadeLicitaçãoPipe } from './pipes/modalidade-licitacao.pipe';

@Module({
    imports: [PrismaModule],
    controllers: [EditalController],
    providers: [
        EditalService,
        {
            provide: APP_PIPE,
            useClass: ModalidadeLicitaçãoPipe,
        },
    ],
    exports: [EditalService],
})
export class EditalModule {} 