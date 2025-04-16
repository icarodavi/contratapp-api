import { IsString, IsOptional, IsEnum, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TipoDocumento } from 'generated/prisma';

export class UpdateDocumentoDto {
    @ApiProperty({ description: 'Nome do documento', required: false })
    @IsString()
    @IsOptional()
    nome?: string;

    @ApiProperty({ description: 'Tipo do documento', enum: TipoDocumento, required: false })
    @IsEnum(TipoDocumento)
    @IsOptional()
    tipo?: TipoDocumento;

    @ApiProperty({ description: 'Caminho do arquivo', required: false })
    @IsString()
    @IsOptional()
    caminho?: string;

    @ApiProperty({ description: 'Descrição do documento', required: false })
    @IsString()
    @IsOptional()
    descricao?: string;

    @ApiProperty({ description: 'Status ativo do documento', required: false })
    @IsBoolean()
    @IsOptional()
    ativo?: boolean;
} 