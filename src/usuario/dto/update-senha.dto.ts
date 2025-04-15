import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSenhaDto {
    @ApiProperty({
        description: 'Senha atual do usuário',
        example: 'senha123',
    })
    @IsString()
    @IsNotEmpty()
    senhaAtual: string;

    @ApiProperty({
        description: 'Nova senha do usuário',
        example: 'novaSenha123',
    })
    @IsString()
    @IsNotEmpty()
    novaSenha: string;
} 