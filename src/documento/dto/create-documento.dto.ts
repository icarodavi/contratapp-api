import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TipoDocumento } from '@prisma/client';

export class CreateDocumentoDto {
    @ApiProperty({ description: 'Nome do documento' })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({ description: 'Tipo do documento', enum: TipoDocumento })
    @IsEnum(TipoDocumento)
    @IsNotEmpty()
    tipo: TipoDocumento;

    @ApiProperty({ description: 'Caminho do arquivo' })
    @IsString()
    @IsNotEmpty()
    caminho: string;

    @ApiProperty({ description: 'Nome original do arquivo enviado' })
    @IsString()
    @IsNotEmpty()
    nomeOriginal: string;

    @ApiProperty({ description: 'Descrição do documento', required: false })
    @IsString()
    descricao?: string;

    @ApiProperty({ description: 'Versão do documento' })
    @IsNotEmpty()
    versao: number;

    @ApiProperty({ description: 'Hash do arquivo para verificação de integridade' })
    @IsString()
    @IsNotEmpty()
    hash: string;

    @ApiProperty({ description: 'Assinatura do documento (manual ou digital)', required: false })
    @IsString()
    assinatura?: string;

    @ApiProperty({ description: 'Validade do documento', required: false })
    validade?: Date;

    @ApiProperty({ description: 'ID do licitante que enviou o documento' })
    @IsString()
    @IsNotEmpty()
    licitanteId: string;

    @ApiProperty({ description: 'Tipo do documento (relacionado à tabela DocumentoObrigatorio)' })
    @IsString()
    @IsNotEmpty()
    tipoDocumento: string;

    @ApiProperty({ description: 'ID do edital relacionado' })
    @IsString()
    @IsNotEmpty()
    editalId: string;
} 