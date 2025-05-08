import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum, IsDate, IsOptional, IsUUID } from 'class-validator';
import { TipoPrazo } from '@prisma/client';

export class CreatePrazoDto {
    @ApiProperty({
        description: 'Tipo do prazo',
        enum: TipoPrazo,
        example: TipoPrazo.ENTREGA_DOCUMENTOS
    })
    @IsNotEmpty()
    @IsEnum(TipoPrazo)
    tipo: TipoPrazo;

    @ApiProperty({
        description: 'Descrição do prazo',
        example: 'Prazo para entrega da documentação de habilitação'
    })
    @IsNotEmpty()
    @IsString()
    descricao: string;

    @ApiProperty({
        description: 'Data de início do prazo',
        example: '2024-03-20T00:00:00Z'
    })
    @IsNotEmpty()
    @IsDate()
    dataInicio: Date;

    @ApiProperty({
        description: 'Data de fim do prazo',
        example: '2024-03-27T23:59:59Z'
    })
    @IsNotEmpty()
    @IsDate()
    dataFim: Date;

    @ApiProperty({
        description: 'Observações adicionais',
        example: 'Documentos devem ser entregues em formato PDF',
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
        description: 'ID do licitante (opcional)',
        example: '123e4567-e89b-12d3-a456-426614174000',
        required: false
    })
    @IsOptional()
    @IsUUID()
    licitanteId?: string;

    @ApiProperty({
        description: 'ID do item (opcional)',
        example: '123e4567-e89b-12d3-a456-426614174000',
        required: false
    })
    @IsOptional()
    @IsUUID()
    itemId?: string;

    @ApiProperty({
        description: 'ID do usuário que está criando o prazo',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsUUID()
    criadoPor: string;
} 