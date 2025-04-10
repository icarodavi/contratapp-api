import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaModule } from '../database/database.module';

@Module({
    imports: [PrismaModule],
    controllers: [UsuarioController],
    providers: [UsuarioService],
    exports: [UsuarioService],
})
export class UsuarioModule {} 