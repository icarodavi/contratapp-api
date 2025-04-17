import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateItemDto {
    @ApiProperty({
        description: 'Número do item',
        example: '001',
        required: false
    })
    @IsOptional()
    @IsString()
    numero?: string;

    @ApiProperty({
        description: 'Descrição do item',
        example: 'Material de construção',
        required: false
    })
    @IsOptional()
    @IsString()
    descricao?: string;

    @ApiProperty({
        description: 'Quantidade do item',
        example: 100,
        required: false
    })
    @IsOptional()
    @IsInt()
    quantidade?: number;

    @ApiProperty({
        description: 'Unidade de medida',
        example: 'UN',
        required: false
    })
    @IsOptional()
    @IsString()
    unidade?: string;

    @ApiProperty({
        description: 'Valor estimado em centavos',
        example: 100000,
        required: false
    })
    @IsOptional()
    @IsInt()
    valorEstimado?: number;

    @ApiProperty({
        description: 'Status do item',
        example: 'ATIVO',
        required: false
    })
    @IsOptional()
    @IsString()
    status?: string;
} 