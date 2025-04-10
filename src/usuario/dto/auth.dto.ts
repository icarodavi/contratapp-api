import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
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
}

export class RegisterDto {
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
        enum: ['ADMIN', 'PREGOEIRO', 'LICITANTE', 'VISUALIZADOR'],
        example: 'ADMIN',
    })
    @IsString()
    @IsNotEmpty()
    perfil: string;
} 