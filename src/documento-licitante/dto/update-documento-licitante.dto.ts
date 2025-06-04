import { ApiProperty } from '@nestjs/swagger';
import { StatusDocumento } from '@prisma/client';
import { IsEnum, IsOptional, IsString, IsBoolean, IsDateString } from 'class-validator';

export class UpdateDocumentoLicitanteDto {
  @ApiProperty({ enum: StatusDocumento, required: false })
  @IsEnum(StatusDocumento)
  @IsOptional()
  status?: StatusDocumento;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  valido?: boolean;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  observacoes?: string;

  @ApiProperty({ required: false })
  @IsDateString()
  @IsOptional()
  dataValidade?: Date;
}
