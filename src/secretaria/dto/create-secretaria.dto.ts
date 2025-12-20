import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSecretariaDto {
    @ApiProperty({ example: 'Secretaria Municipal de Saúde' })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({ example: 'SMS' })
    @IsString()
    @IsNotEmpty()
    sigla: string;

    @ApiPropertyOptional({ example: '10.001.000' })
    @IsString()
    @IsOptional()
    codigoContabil?: string;

    @ApiPropertyOptional({ example: 'João da Silva' })
    @IsString()
    @IsOptional()
    responsavel?: string;

    @ApiPropertyOptional({ example: 'saude@exemplo.com' })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiPropertyOptional({ example: '(11) 99999-9999' })
    @IsString()
    @IsOptional()
    telefone?: string;
}
