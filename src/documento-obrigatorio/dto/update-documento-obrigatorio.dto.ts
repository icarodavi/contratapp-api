import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TipoDocumento } from '@prisma/client';

export class UpdateDocumentoObrigatorioDto {
    @ApiPropertyOptional({
        description: 'Tipo do documento obrigatório',
        enum: TipoDocumento,
        example: TipoDocumento.PROPOSTA_TECNICA
    })
    @IsOptional()
    @IsEnum(TipoDocumento)
    tipoDocumento?: TipoDocumento;

    @ApiPropertyOptional({
        description: 'Descrição detalhada do documento obrigatório',
        example: 'Proposta técnica detalhando a metodologia de execução do serviço'
    })
    @IsOptional()
    @IsString()
    descricao?: string;

    @ApiPropertyOptional({
        description: 'ID do edital ao qual o documento obrigatório está vinculado',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsOptional()
    @IsUUID()
    editalId?: string;
}
