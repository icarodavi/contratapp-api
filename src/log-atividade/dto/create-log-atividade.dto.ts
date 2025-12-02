import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TipoAtividade } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, IsObject } from 'class-validator';

export class CreateLogAtividadeDto {
    @ApiProperty({ enum: TipoAtividade })
    @IsEnum(TipoAtividade)
    @IsNotEmpty()
    tipo: TipoAtividade;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    acao: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    detalhes?: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    ip?: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    userAgent?: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    sessaoId?: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    hashSessao?: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    status?: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    nivel?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    modulo: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    entidadeId?: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    entidadeTipo?: string;

    @ApiPropertyOptional()
    @IsObject()
    @IsOptional()
    metadata?: any;

    @ApiPropertyOptional()
    @IsUUID()
    @IsOptional()
    disputaId?: string;

    @ApiPropertyOptional()
    @IsUUID()
    @IsOptional()
    usuarioId?: string;
}
