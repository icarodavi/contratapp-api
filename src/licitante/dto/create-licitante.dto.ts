import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID, IsEnum, IsBoolean, IsOptional } from 'class-validator';
import { TipoEmpresa } from 'generated/prisma';

export class CreateLicitanteDto {
    @ApiProperty({ description: 'ID do usuário vinculado ao licitante' })
    @IsUUID()
    @IsNotEmpty()
    usuarioId: string;

    @ApiProperty({ description: 'Razão social do licitante' })
    @IsString()
    @IsNotEmpty()
    razaoSocial: string;

    @ApiProperty({ description: 'CNPJ do licitante' })
    @IsString()
    @IsNotEmpty()
    cnpj: string;

    @ApiProperty({
        description: 'Tipo da empresa',
        enum: TipoEmpresa,
        example: TipoEmpresa.ME
    })
    @IsEnum(TipoEmpresa)
    @IsNotEmpty()
    tipoEmpresa: TipoEmpresa;

    @ApiProperty({ description: 'Endereço do licitante' })
    @IsString()
    @IsNotEmpty()
    endereco: string;

    @ApiProperty({ description: 'Telefone do licitante' })
    @IsString()
    @IsNotEmpty()
    telefone: string;

    @ApiProperty({ description: 'Email do licitante' })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'Indica se o licitante é ME/EPP', default: false })
    @IsBoolean()
    @IsOptional()
    isMeEpp?: boolean;

    @ApiProperty({ description: 'Observações sobre o licitante', required: false })
    @IsString()
    @IsOptional()
    observacoes?: string;
} 