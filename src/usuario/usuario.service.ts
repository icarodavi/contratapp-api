import { Injectable, NotFoundException, UnauthorizedException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/auth.dto';
import { UpdateSenhaDto } from './dto/update-senha.dto';

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
                preferencias: { theme: "blue", mode: "light" },
            },
        });
    }

    async findAll(search?: string) {
        if (!search) {
            return this.prisma.usuario.findMany();
        }

        return this.prisma.usuario.findMany({
            where: {
                OR: [
                    { nome: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ],
            },
        });
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

    async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id },
        });

        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado');
        }

        if (updateUsuarioDto.email && updateUsuarioDto.email !== usuario.email) {
            const emailExists = await this.prisma.usuario.findUnique({
                where: { email: updateUsuarioDto.email },
            });
            if (emailExists) {
                throw new ConflictException('Email já está em uso');
            }
        }

        const updatedUser = await this.prisma.usuario.update({
            where: { id },
            data: updateUsuarioDto,
        });

        const { senha: _, ...result } = updatedUser;
        return result;
    }

    async updateSenha(id: string, updateSenhaDto: UpdateSenhaDto) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id },
        });

        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado');
        }

        const senhaValida = await bcrypt.compare(updateSenhaDto.senhaAtual, usuario.senha);

        if (!senhaValida) {
            throw new UnauthorizedException('Senha atual incorreta');
        }

        const novaSenhaHash = await bcrypt.hash(updateSenhaDto.novaSenha, 10);

        return this.prisma.usuario.update({
            where: { id },
            data: { senha: novaSenhaHash },
        });
    }
} 