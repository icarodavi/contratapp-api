import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum, IsInt, IsOptional, IsUUID, IsDate } from 'class-validator';
import { TipoSancao } from '@generated/prisma/client';

export class CreateSancaoDto {
    @ApiProperty({
        description: 'Tipo da sanção',
        enum: TipoSancao,
        example: TipoSancao.ADVERTENCIA
    })
    @IsNotEmpty()
    @IsEnum(TipoSancao)
    tipo: TipoSancao;

    @ApiProperty({
        description: 'Motivo da sanção',
        example: 'Atraso na entrega de documentos'
    })
    @IsNotEmpty()
    @IsString()
    motivo: string;

    @ApiProperty({
        description: 'Fundamentação legal da sanção',
        example: 'Conforme artigo 87 da Lei 14.133/21...'
    })
    @IsNotEmpty()
    @IsString()
    fundamentacao: string;

    @ApiProperty({
        description: 'Data de início da sanção',
        example: '2024-03-20T00:00:00Z'
    })
    @IsNotEmpty()
    @IsDate()
    dataInicio: Date;

    @ApiProperty({
        description: 'Data de fim da sanção (opcional)',
        example: '2024-06-20T00:00:00Z',
        required: false
    })
    @IsOptional()
    @IsDate()
    dataFim?: Date;

    @ApiProperty({
        description: 'Valor da multa em centavos (opcional)',
        example: 100000,
        required: false
    })
    @IsOptional()
    @IsInt()
    valorMulta?: number;

    @ApiProperty({
        description: 'Observações adicionais',
        example: 'Sanção aplicada após análise da comissão',
        required: false
    })
    @IsOptional()
    @IsString()
    observacoes?: string;

    @ApiProperty({
        description: 'ID do edital',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsUUID()
    editalId: string;

    @ApiProperty({
        description: 'ID do licitante',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsUUID()
    licitanteId: string;

    @ApiProperty({
        description: 'ID do usuário que está aplicando a sanção',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsUUID()
    aplicadoPor: string;
} 