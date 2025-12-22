import { IsString, IsNotEmpty, IsOptional, IsInt, IsBoolean, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatalogoItemDto {
    @ApiProperty({ description: 'Código do item', example: 'MAT-001', required: false })
    @IsString()
    @IsOptional()
    codigo?: string;

    @ApiProperty({ description: 'Descrição detalhada do item', example: 'Caneta Esferográfica Azul' })
    @IsString()
    @IsNotEmpty()
    descricao: string;

    @ApiProperty({ description: 'Unidade de medida', example: 'UN' })
    @IsString()
    @IsNotEmpty()
    unidade: string;

    @ApiProperty({ description: 'Tipo do item', example: 'MATERIAL' })
    @IsString()
    @IsNotEmpty()
    // Could use enum validation if we had an enum for this, schema says String but comments say MATERIAL/SERVICO
    tipo: string;

    @ApiProperty({ description: 'Valor de referência em centavos', example: 150, required: false })
    @IsInt()
    @IsOptional()
    valorReferencia?: number;

    @ApiProperty({ description: 'Status do item', default: true, required: false })
    @IsBoolean()
    @IsOptional()
    ativo?: boolean;
}
