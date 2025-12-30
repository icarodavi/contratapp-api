import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TipoDocumento } from '@generated/prisma/client';

export class CreateDocumentoObrigatorioDto {
    @ApiProperty({ description: 'Tipo do documento', enum: TipoDocumento })
    @IsEnum(TipoDocumento)
    @IsNotEmpty()
    tipoDocumento: TipoDocumento;

    @ApiProperty({ description: 'Descrição do documento' })
    @IsString()
    @IsNotEmpty()
    descricao: string;

    @ApiProperty({ description: 'ID do edital relacionado' })
    @IsString()
    @IsNotEmpty()
    editalId: string;
} 