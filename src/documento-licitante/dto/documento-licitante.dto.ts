import { ApiProperty } from '@nestjs/swagger';
import { StatusDocumento, TipoDocumento } from '@prisma/client';

export class DocumentoLicitanteDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  disputaId: string;

  @ApiProperty()
  licitanteId: string;

  @ApiProperty({ enum: TipoDocumento })
  tipoDocumento: TipoDocumento;

  @ApiProperty()
  nomeOriginal: string;

  @ApiProperty({ required: false, nullable: true })
  descricao: string | null;

  @ApiProperty()
  arquivoPath: string;

  @ApiProperty()
  dataEnvio: Date;

  @ApiProperty()
  versao: number;

  @ApiProperty({ enum: StatusDocumento })
  status: StatusDocumento;

  @ApiProperty()
  valido: boolean;

  @ApiProperty({ required: false, nullable: true })
  hashDocumento: string | null;

  @ApiProperty({ required: false, nullable: true })
  assinaturaBase64: string | null;

  @ApiProperty({ required: false, nullable: true })
  assinadoPor: string | null;

  @ApiProperty({ required: false, nullable: true })
  observacoes: string | null;

  @ApiProperty({ required: false, nullable: true })
  dataValidade: Date | null;

  @ApiProperty({ required: false, nullable: true })
  dataValidacao: Date | null;

  @ApiProperty({ required: false, nullable: true })
  validadoPor: string | null;
}
