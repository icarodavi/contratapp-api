import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET') || 'contratapp-super-secret-jwt-key-2024-development',
        });
    }

    async validate(payload: any) {
        console.log('JwtStrategy.validate - Payload:', JSON.stringify(payload, null, 2));
        return {
            id: payload.sub,
            email: payload.email,
            perfil: payload.perfil,
            licitanteId: payload.licitanteId, // Retorna licitanteId do payload
        };
    }
} 