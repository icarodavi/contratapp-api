import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { DatabaseModule } from '../database/database.module';
import { WsJwtAuthGuard } from './guards/ws-jwt-auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { LogAtividadeModule } from '../log-atividade/log-atividade.module';

@Module({
    imports: [
        DatabaseModule,
        LogAtividadeModule,
        PassportModule,
        ConfigModule,
        ThrottlerModule.forRoot([{
            ttl: 60,
            limit: 5,
        }]),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET') || 'contratapp-super-secret-jwt-key-2024-development',
                signOptions: { expiresIn: '7d' },
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, WsJwtAuthGuard],
    exports: [AuthService, WsJwtAuthGuard, JwtStrategy,],
})
export class AuthModule {} 