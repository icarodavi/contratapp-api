import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaModule } from '../database/database.module';
import { WsJwtAuthGuard } from './guards/ws-jwt-auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
    imports: [
        PrismaModule,
        PassportModule,
        ConfigModule,
        ThrottlerModule.forRoot([{
            ttl: 60,
            limit: 5,
        }]),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: { expiresIn: '15m' },
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, WsJwtAuthGuard],
    exports: [AuthService],
})
export class AuthModule {} 