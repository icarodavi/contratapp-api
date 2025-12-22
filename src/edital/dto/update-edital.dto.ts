import { IsOptional, IsString, IsDate, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ModalidadeLicitação, CritérioJulgamento } from '@prisma/client';
import { CreateLoteWithItemsDto } from './create-edital.dto';

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
    @Type(() => Date)
    dataAbertura?: Date;

    @ApiProperty({ description: 'Caminho do arquivo PDF do edital', required: false })
    @IsOptional()
    @IsString()
    arquivoPdf?: string;

    @ApiProperty({ description: 'ID da Secretaria responsável', required: false })
    @IsOptional()
    @IsString()
    secretariaId?: string;

    @ApiProperty({ description: 'Lista de Lotes com Itens', required: false, type: [CreateLoteWithItemsDto] })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateLoteWithItemsDto)
    lotes?: CreateLoteWithItemsDto[];
}
