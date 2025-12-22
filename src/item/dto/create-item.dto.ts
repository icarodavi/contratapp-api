import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, IsInt, IsOptional } from 'class-validator';

export class CreateItemDto {
    @ApiProperty({
        description: 'Número do item',
        example: '001'
    })
    @IsNotEmpty()
    @IsString()
    numero: string;

    @ApiProperty({
        description: 'Descrição do item',
        example: 'Material de construção'
    })
    @IsNotEmpty()
    @IsString()
    descricao: string;

    @ApiProperty({
        description: 'Quantidade do item',
        example: 100
    })
    @IsNotEmpty()
    @IsInt()
    quantidade: number;

    @ApiProperty({
        description: 'Unidade de medida',
        example: 'UN'
    })
    @IsNotEmpty()
    @IsString()
    unidade: string;

    @ApiProperty({
        description: 'Valor estimado em centavos',
        example: 100000,
        required: false
    })
    @IsOptional()
    @IsInt()
    valorEstimado?: number;

    @ApiProperty({
        description: 'ID do lote',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsUUID()
    loteId: string;

    @ApiProperty({
        description: 'ID do item de catálogo vinculado',
        example: '123e4567-e89b-12d3-a456-426614174000',
        required: false
    })
    @IsOptional()
    @IsUUID()
    catalogoItemId?: string;
} 