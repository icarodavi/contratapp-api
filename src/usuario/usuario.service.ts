import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuários')
@Injectable()
export class UsuarioService {
    constructor(private prisma: PrismaService) {}

    async create(createUsuarioDto: CreateUsuarioDto) {
        return this.prisma.usuario.create({
            data: createUsuarioDto,
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
} 