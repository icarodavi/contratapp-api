import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../database/database.service';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { Usuario } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    async login(loginDto: { email: string; senha: string }) {
        console.log('login', loginDto);
        const usuario = await this.prisma.usuario.findUnique({
            where: { email: loginDto.email },
        });
        console.log('login', loginDto, usuario);
        if (!usuario) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        const senhaValida = await bcrypt.compare(loginDto.senha, usuario.senha);

        if (!senhaValida) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        // Gerar tokens
        const [accessToken, refreshToken] = await Promise.all([
            this.generateAccessToken(usuario),
            this.generateRefreshToken(usuario),
        ]);

        // Salvar refresh token no banco
        await this.prisma.usuario.update({
            where: { id: usuario.id },
            data: { refreshToken },
        });

        return {
            access_token: accessToken,
            refresh_token: refreshToken,
            usuario: {
                id: usuario.id,
                email: usuario.email,
                perfil: usuario.perfil,
            },
        };
    }

    async refreshToken(refreshToken: string) {
        try {
            const payload = await this.jwtService.verifyAsync(refreshToken, {
                secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
            });

            const usuario = await this.prisma.usuario.findUnique({
                where: { id: payload.sub },
            });

            if (!usuario || usuario.refreshToken !== refreshToken) {
                throw new UnauthorizedException('Token inválido');
            }

            const newAccessToken = await this.generateAccessToken(usuario);
            return { access_token: newAccessToken };
        } catch (error) {
            throw new UnauthorizedException('Token inválido');
        }
    }

    async logout(usuarioId: string) {
        await this.prisma.usuario.update({
            where: { id: usuarioId },
            data: { refreshToken: null },
        });
    }

    private async generateAccessToken(usuario: Usuario) {
        const payload = {
            sub: usuario.id,
            email: usuario.email,
            perfil: usuario.perfil,
        };
        return this.jwtService.signAsync(payload, {
            secret: this.configService.get<string>('JWT_SECRET'),
            expiresIn: '15m',
        });
    }

    private async generateRefreshToken(usuario: Usuario) {
        const payload = { sub: usuario.id };
        return this.jwtService.signAsync(payload, {
            secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
            expiresIn: '7d',
        });
    }

    async verifyToken(token: string) {
        try {
            const payload = await this.jwtService.verifyAsync(token);
            const usuario = await this.prisma.usuario.findUnique({
                where: { id: payload.sub },
            });
            return usuario;
        } catch (error) {
            throw new UnauthorizedException('Token inválido');
        }
    }
} 