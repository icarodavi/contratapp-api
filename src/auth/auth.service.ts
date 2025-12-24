import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../database/database.service';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { Usuario, TipoAtividade } from '@prisma/client';
import { LogAtividadeService } from '../log-atividade/log-atividade.service';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
        private configService: ConfigService,
        private logAtividadeService: LogAtividadeService,
    ) {}

    async login(loginDto: { email: string; senha: string }, ip: string, userAgent: string) {

        const usuario = await this.prisma.usuario.findUnique({
            where: { email: loginDto.email },
            include: { licitante: true },
        });

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

        // Registrar log de login
        await this.logAtividadeService.criarLog({
            tipo: TipoAtividade.USUARIO_LOGIN,
            acao: 'Login realizado com sucesso',
            modulo: 'AUTH',
            usuarioId: usuario.id,
            ip,
            userAgent,
            detalhes: `Login via email ${usuario.email}`,
            status: 'SUCESSO'
        });

        return {
            access_token: accessToken,
            refresh_token: refreshToken,
            user: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                perfil: usuario.perfil,
                foto: usuario.foto,
                licitanteId: usuario.licitante?.id,
                licitante: usuario.licitante,
                preferencias: usuario.preferencias || { theme: "blue", mode: "light" },
            },
        };
    }

    async refreshToken(refreshToken: string) {
        try {
            const payload = await this.jwtService.verifyAsync(refreshToken, {
                secret: this.configService.get<string>('JWT_REFRESH_SECRET') || 'contratapp-super-secret-refresh-jwt-key-2024-development',
            });

            const usuario = await this.prisma.usuario.findUnique({
                where: { id: payload.sub },
                include: { licitante: true },
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

    async logout(usuarioId: string, ip: string, userAgent: string) {
        await this.prisma.usuario.update({
            where: { id: usuarioId },
            data: { refreshToken: null },
        });

        await this.logAtividadeService.criarLog({
            tipo: TipoAtividade.USUARIO_LOGOUT,
            acao: 'Logout realizado',
            modulo: 'AUTH',
            usuarioId,
            ip,
            userAgent,
            status: 'SUCESSO'
        });
    }

    private async generateAccessToken(usuario: Usuario & { licitante?: any }) {
        const payload = {
            sub: usuario.id,
            email: usuario.email,
            perfil: usuario.perfil,
            licitanteId: usuario.licitante?.id, // Adiciona licitanteId se existir
        };
        return this.jwtService.signAsync(payload, {
            secret: this.configService.get<string>('JWT_SECRET') || 'contratapp-super-secret-jwt-key-2024-development',
            expiresIn: '15m',
        });
    }

    private async generateRefreshToken(usuario: Usuario) {
        const payload = { sub: usuario.id };
        return this.jwtService.signAsync(payload, {
            secret: this.configService.get<string>('JWT_REFRESH_SECRET') || 'contratapp-super-secret-refresh-jwt-key-2024-development',
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