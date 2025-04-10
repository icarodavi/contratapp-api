import { Injectable, NotFoundException, UnauthorizedException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/auth.dto';

@ApiTags('Usuários')
@Injectable()
export class UsuarioService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    async create(createUsuarioDto: CreateUsuarioDto) {
        // Verifica se o email já existe
        const usuarioExistente = await this.prisma.usuario.findUnique({
            where: { email: createUsuarioDto.email },
        });

        if (usuarioExistente) {
            throw new ConflictException('Email já está em uso');
        }

        const senhaHash = await bcrypt.hash(createUsuarioDto.senha, 10);

        return this.prisma.usuario.create({
            data: {
                ...createUsuarioDto,
                senha: senhaHash,
            },
        });
    }

    async findAll() {
        return this.prisma.usuario.findMany();
    }

    async findOne(id: string) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id },
        });

        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado');
        }

        return usuario;
    }

    async findByEmail(email: string) {
        return this.prisma.usuario.findUnique({
            where: { email },
        });
    }

    async validateUser(email: string, senha: string) {
        const usuario = await this.findByEmail(email);

        if (!usuario) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        const { senha: _, ...result } = usuario;
        return result;
    }

    async login(loginDto: LoginDto) {
        const usuario = await this.validateUser(loginDto.email, loginDto.senha);

        const payload = {
            sub: usuario.id,
            email: usuario.email,
            perfil: usuario.perfil,
        };

        return {
            access_token: this.jwtService.sign(payload),
            usuario,
        };
    }
} 