import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { DatabaseModule } from '../database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
    imports: [
        DatabaseModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'contratapp-super-secret-jwt-key-2024-development',
            signOptions: { expiresIn: '1d' },
        }),
    ],
    controllers: [UsuarioController],
    providers: [UsuarioService, JwtStrategy],
    exports: [UsuarioService],
})
export class UsuarioModule {} 