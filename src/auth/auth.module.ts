import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'seu-secret-key',
            signOptions: { expiresIn: '1d' },
        }),
    ],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {} 