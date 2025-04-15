import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../database/database.service';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    async login(loginDto: { email: string; senha: string }) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { email: loginDto.email },
        });

        if (!usuario || usuario.senha !== loginDto.senha) {
            throw new Error('Credenciais inválidas');
        }

        const payload = { sub: usuario.id, email: usuario.email, perfil: usuario.perfil };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async verifyToken(token: string) {
        try {
            const payload = await this.jwtService.verifyAsync(token);
            const usuario = await this.prisma.usuario.findUnique({
                where: { id: payload.sub },
            });
            return usuario;
        } catch (error) {
            throw new Error('Token inválido');
        }
    }
} 