import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum, IsDate, IsInt, IsUUID } from 'class-validator';
import { StatusSancao } from '@generated/prisma';

export class UpdateSancaoDto {
    @ApiProperty({
        description: 'Status da sanção',
        enum: StatusSancao,
        example: StatusSancao.REVOGADA,
        required: false
    })
    @IsOptional()
    @IsEnum(StatusSancao)
    status?: StatusSancao;

    @ApiProperty({
        description: 'Data de fim da sanção',
        example: '2024-06-20T00:00:00Z',
        required: false
    })
    @IsOptional()
    @IsDate()
    dataFim?: Date;

    @ApiProperty({
        description: 'Valor da multa em centavos',
        example: 100000,
        required: false
    })
    @IsOptional()
    @IsInt()
    valorMulta?: number;

    @ApiProperty({
        description: 'Observações adicionais',
        example: 'Sanção revogada após recurso',
        required: false
    })
    @IsOptional()
    @IsString()
    observacoes?: string;

    @ApiProperty({
        description: 'ID do usuário que está revogando a sanção',
        example: '123e4567-e89b-12d3-a456-426614174000',
        required: false
    })
    @IsOptional()
    @IsUUID()
    revogadoPor?: string;
} 