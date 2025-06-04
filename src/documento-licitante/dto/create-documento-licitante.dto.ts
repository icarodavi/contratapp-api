import { ApiProperty } from '@nestjs/swagger';
import { TipoDocumento } from '@prisma/client';
import { IsString, IsNotEmpty, IsEnum, IsOptional, IsInt } from 'class-validator';

export class CreateDocumentoLicitanteDto {
  @ApiProperty({ description: 'ID da disputa' })
  @IsString()
  @IsNotEmpty()
  disputaId: string;

  @ApiProperty({ description: 'ID do licitante' })
  @IsString()
  @IsNotEmpty()
  licitanteId: string;

  @ApiProperty({ enum: TipoDocumento, description: 'Tipo do documento' })
  @IsEnum(TipoDocumento)
  @IsNotEmpty()
  tipoDocumento: TipoDocumento;

  @ApiProperty({ description: 'Nome original do arquivo' })
  @IsString()
  @IsNotEmpty()
  nomeOriginal: string;

  @ApiProperty({ description: 'Descrição do documento', required: false })
  @IsString()
  @IsOptional()
  descricao?: string;

  @ApiProperty({ description: 'Caminho do arquivo' })
  @IsString()
  @IsNotEmpty()
  arquivoPath: string;

  @ApiProperty({ description: 'Versão do documento' })
  @IsInt()
  versao: number;

  @ApiProperty({ description: 'Hash do documento' })
  @IsString()
  @IsOptional()
  hashDocumento?: string;

  @ApiProperty({ description: 'Assinatura em base64', required: false })
  @IsString()
  @IsOptional()
  assinaturaBase64?: string;

  @ApiProperty({ description: 'ID do usuário que assinou', required: false })
  @IsString()
  @IsOptional()
  assinadoPor?: string;

  @ApiProperty({ description: 'Observações', required: false })
  @IsString()
  @IsOptional()
  observacoes?: string;

  @ApiProperty({ description: 'Data de validade', required: false })
  @IsOptional()
  dataValidade?: Date;
}
