import { IsOptional, IsString, IsDate, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ModalidadeLicitação, CritérioJulgamento } from '@generated/prisma';

export class UpdateEditalDto {
    @ApiProperty({ description: 'Número do edital', required: false })
    @IsOptional()
    @IsString()
    numero?: string;

    @ApiProperty({ description: 'Objeto da licitação', required: false })
    @IsOptional()
    @IsString()
    objeto?: string;

    @ApiProperty({
        description: 'Modalidade da licitação',
        enum: ModalidadeLicitação,
        example: ModalidadeLicitação.PREGÃO_ELETRÔNICO,
        required: false
    })
    @IsOptional()
    @IsEnum(ModalidadeLicitação)
    modalidade?: ModalidadeLicitação;

    @ApiProperty({
        description: 'Critério de julgamento',
        enum: CritérioJulgamento,
        example: CritérioJulgamento.MENOR_PRECO,
        required: false
    })
    @IsOptional()
    @IsEnum(CritérioJulgamento)
    criterioJulgamento?: CritérioJulgamento;

    @ApiProperty({ description: 'Status do edital', required: false })
    @IsOptional()
    @IsString()
    status?: string;

    @ApiProperty({ description: 'Data de abertura do edital', required: false })
    @IsOptional()
    @IsDate()
    dataAbertura?: Date;

    @ApiProperty({ description: 'Caminho do arquivo PDF do edital', required: false })
    @IsOptional()
    @IsString()
    arquivoPdf?: string;
} 