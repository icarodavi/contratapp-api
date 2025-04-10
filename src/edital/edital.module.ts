import { Module } from '@nestjs/common';
import { EditalService } from './edital.service';
import { EditalController } from './edital.controller';
import { PrismaModule } from '../database/database.module';

@Module({
    imports: [PrismaModule],
    controllers: [EditalController],
    providers: [EditalService],
    exports: [EditalService],
})
export class EditalModule {} 