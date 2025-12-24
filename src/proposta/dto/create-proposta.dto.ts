import { IsNotEmpty, IsNumber, IsString, IsUUID, IsUrl, Min, IsOptional } from 'class-validator';

export class CreatePropostaDto {
    @IsUUID()
    @IsNotEmpty()
    disputaId: string;

    @IsUUID()
    @IsNotEmpty()
    licitanteId: string;

    @IsString()
    @IsNotEmpty()
    itemId: string;

    @IsNumber()
    @Min(0)
    @IsNotEmpty()
    valorCentavos: number;

    @IsUrl()
    @IsOptional()
    arquivo?: string;

    @IsString()
    @IsOptional()
    observacao?: string;

    @IsUUID()
    @IsNotEmpty()
    createdBy: string;
}
