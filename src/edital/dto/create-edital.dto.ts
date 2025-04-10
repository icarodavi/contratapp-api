import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEditalDto {
    @ApiProperty({
        description: 'Número do edital',
        example: '001/2024',
    })
    @IsString()
    @IsNotEmpty()
    numero: string;

    @ApiProperty({
        description: 'Objeto da licitação',
        example: 'Contratação de serviços de manutenção predial',
    })
    @IsString()
    @IsNotEmpty()
    objeto: string;

    @ApiProperty({
        description: 'Modalidade da licitação',
        example: 'Pregão Eletrônico',
    })
    @IsString()
    @IsNotEmpty()
    modalidade: string;

    @ApiProperty({
        description: 'Status do edital',
        example: 'ABERTO',
    })
    @IsString()
    @IsNotEmpty()
    status: string;

    @ApiProperty({
        description: 'Data de abertura do edital',
        example: '2024-04-10T10:00:00Z',
    })
    @IsDate()
    @IsNotEmpty()
    dataAbertura: Date;

    @ApiProperty({
        description: 'Caminho do arquivo PDF do edital',
        example: 'uploads/editais/001-2024.pdf',
        required: false,
    })
    @IsString()
    @IsOptional()
    arquivoPdf?: string;
} 