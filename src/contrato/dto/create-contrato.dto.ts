import { IsString, IsNumber, IsDateString, IsOptional, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateContratoItemDto {
    @IsString()
    descricao: string;

    @IsNumber()
    quantidade: number;

    @IsNumber()
    valorUnitario: number;

    @IsNumber()
    valorTotal: number;

    @IsString()
    @IsIn(['LOTE', 'ITEM'])
    tipo: string;

    @IsOptional()
    @IsString()
    loteId?: string;

    @IsOptional()
    @IsString()
    itemId?: string;
}

export class CreateContratoDto {
    @IsString()
    editalId: string;

    @IsString()
    licitanteId: string;

    @IsString()
    numero: string;

    @IsNumber()
    valorTotal: number;

    @IsDateString()
    dataInicio: string;

    @IsDateString()
    dataFim: string;

    @IsOptional()
    @IsString()
    dotacaoOrcamentaria?: string;

    @IsOptional()
    @IsString()
    objeto?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateContratoItemDto)
    itens: CreateContratoItemDto[];
}
