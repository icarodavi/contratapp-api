import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PerfilUsuario } from '@generated/prisma/client';

export class CreateUsuarioDto {
    @ApiProperty({
        description: 'Nome completo do usuário',
        example: 'João da Silva',
    })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({
        description: 'Email do usuário',
        example: 'joao@exemplo.com',
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'Senha do usuário',
        example: 'senha123',
    })
    @IsString()
    @IsNotEmpty()
    senha: string;

    @ApiProperty({
        description: 'Perfil do usuário',
        enum: PerfilUsuario,
        example: PerfilUsuario.ADMIN,
    })
    @IsEnum(PerfilUsuario)
    @IsNotEmpty()
    perfil: PerfilUsuario;
} 