import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreatePropostaDto {
    @IsUUID()
    @IsNotEmpty()
    disputaId: string;

    @IsUUID()
    @IsNotEmpty()
    licitanteId: string;

    @IsNumber()
    @IsNotEmpty()
    valorCentavos: number;

    @IsString()
    arquivo?: string;
}
