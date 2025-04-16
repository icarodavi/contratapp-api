import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TipoDocumento } from 'generated/prisma';

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

    @ApiProperty({ description: 'Descrição do documento', required: false })
    @IsString()
    descricao?: string;

    @ApiProperty({ description: 'ID do edital relacionado' })
    @IsString()
    @IsNotEmpty()
    editalId: string;
} 