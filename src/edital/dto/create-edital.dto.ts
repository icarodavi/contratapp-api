import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsOptional, IsString, IsEnum, IsArray, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ModalidadeLicitação, CritérioJulgamento } from '@prisma/client';

export class CreateEditalDto {
    @ApiProperty({
        description: 'Número do edital',
        example: '001/2024',
    })
    @IsString()
    @IsNotEmpty()
    numero: string;

    @ApiProperty({
        description: 'Objeto da licitação',
        example: 'Contratação de serviços de manutenção predial',
    })
    @IsString()
    @IsNotEmpty()
    objeto: string;

    @ApiProperty({
        description: 'Modalidade da licitação',
        enum: ModalidadeLicitação,
        example: ModalidadeLicitação.PREGÃO_ELETRÔNICO
    })
    @IsNotEmpty()
    @IsEnum(ModalidadeLicitação)
    modalidade: ModalidadeLicitação;

    @ApiProperty({
        description: 'Critério de julgamento',
        enum: CritérioJulgamento,
        example: CritérioJulgamento.MENOR_PRECO
    })
    @IsNotEmpty()
    @IsEnum(CritérioJulgamento)
    criterioJulgamento: CritérioJulgamento;

    @ApiProperty({
        description: 'Status do edital',
        example: 'ABERTO',
    })
    @IsString()
    @IsNotEmpty()
    status: string;

    @ApiProperty({
        description: 'Data de abertura do edital',
        example: '2024-04-10T10:00:00Z',
    })
    @IsDate()
    @Type(() => Date)
    @IsNotEmpty()
    dataAbertura: Date;

    @ApiProperty({
        description: 'Caminho do arquivo PDF do edital',
        example: 'uploads/editais/001-2024.pdf',
        required: false,
    })
    @IsString()
    @IsOptional()
    arquivoPdf?: string;

    @ApiProperty({
        description: 'ID da Secretaria responsável',
        example: 'uuid-secretaria'
    })
    @IsOptional()
    @IsString()
    secretariaId?: string;

    @ApiProperty({
        description: 'Lista de Lotes com Itens',
        type: [Object],
    })
    @IsOptional()
    @IsArray()
    lotes?: CreateLoteWithItemsDto[];
}

export class CreateItemSimpleDto {
    @IsString()
    @IsNotEmpty()
    numero: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;

    @IsNumber()
    @IsNotEmpty()
    quantidade: number;

    @IsString()
    @IsNotEmpty()
    unidade: string;

    @IsNumber()
    @IsOptional()
    valorEstimado?: number;

    @IsString()
    @IsOptional()
    catalogoItemId?: string;
}

export class CreateLoteWithItemsDto {
    @IsString()
    @IsNotEmpty()
    numero: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;

    @IsString()
    @IsOptional()
    dotacaoOrcamentaria?: string;

    @IsArray()
    @IsOptional()
    itens?: CreateItemSimpleDto[];
} 