import { IsNotEmpty, IsString, IsUUID, IsEnum } from 'class-validator';
import { TipoAutorMensagem } from '@generated/prisma/client';

export class CreateMensagemDto {
    @IsUUID()
    @IsNotEmpty()
    editalId: string;

    @IsUUID()
    @IsNotEmpty()
    autorId: string;

    @IsEnum(TipoAutorMensagem)
    @IsNotEmpty()
    tipoAutor: TipoAutorMensagem;

    @IsString()
    @IsNotEmpty()
    conteudo: string;
} 