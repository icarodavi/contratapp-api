import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateLoteDto {
    @ApiProperty({
        description: 'Número do lote',
        example: 'LOTE-001',
        required: false
    })
    @IsOptional()
    @IsString()
    numero?: string;

    @ApiProperty({
        description: 'Descrição do lote',
        example: 'Lote de materiais de construção',
        required: false
    })
    @IsOptional()
    @IsString()
    descricao?: string;

    @ApiProperty({
        description: 'Status do lote',
        example: 'ATIVO',
        required: false
    })
    @IsOptional()
    @IsString()
    status?: string;
} 