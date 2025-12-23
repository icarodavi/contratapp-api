import { Module } from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { ContratoController } from './contrato.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [ContratoController],
    providers: [ContratoService],
    exports: [ContratoService],
})
export class ContratoModule {}
