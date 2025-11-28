import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsuarioService } from '../usuario.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private usuarioService: UsuarioService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'contratapp-super-secret-jwt-key-2024-development',
        });
    }

    async validate(payload: any) {
        const usuario = await this.usuarioService.findOne(payload.sub);
        return usuario;
    }
} 