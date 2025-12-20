import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateLoteDto {
    @ApiProperty({
        description: 'Número do lote',
        example: 'LOTE-001'
    })
    @IsNotEmpty()
    @IsString()
    numero: string;

    @ApiProperty({
        description: 'Descrição do lote',
        example: 'Lote de materiais de construção'
    })
    @IsNotEmpty()
    @IsString()
    descricao: string;

    @ApiProperty({
        description: 'ID do edital',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsUUID()
    editalId: string;

    @ApiProperty({
        description: 'Dotação Orçamentária',
        example: '10.301.0001.2001'
    })
    @IsOptional()
    @IsString()
    dotacaoOrcamentaria?: string;
} 