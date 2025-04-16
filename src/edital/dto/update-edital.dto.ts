import { IsOptional, IsString, IsDate, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ModalidadeLicitação } from '@prisma/client';

export class UpdateEditalDto {
    @ApiProperty({ description: 'Número do edital', required: false })
    @IsOptional()
    @IsString()
    numero?: string;

    @ApiProperty({ description: 'Objeto da licitação', required: false })
    @IsOptional()
    @IsString()
    objeto?: string;

    @ApiProperty({
        description: 'Modalidade da licitação',
        enum: ModalidadeLicitação,
        example: ModalidadeLicitação.PREGÃO_ELETRÔNICO,
        required: false
    })
    @IsOptional()
    @IsEnum(ModalidadeLicitação)
    modalidade?: ModalidadeLicitação;

    @ApiProperty({ description: 'Status do edital', required: false })
    @IsOptional()
    @IsString()
    status?: string;

    @ApiProperty({ description: 'Data de abertura do edital', required: false })
    @IsOptional()
    @IsDate()
    dataAbertura?: Date;

    @ApiProperty({ description: 'Caminho do arquivo PDF do edital', required: false })
    @IsOptional()
    @IsString()
    arquivoPdf?: string;
} 