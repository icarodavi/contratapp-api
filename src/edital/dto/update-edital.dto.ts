import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEditalDto } from './create-edital.dto';

export class UpdateEditalDto extends PartialType(CreateEditalDto) {
    @ApiProperty({ required: false, description: 'Número do edital' })
    numero?: string;

    @ApiProperty({ required: false, description: 'Título do edital' })
    titulo?: string;

    @ApiProperty({ required: false, description: 'Descrição do edital' })
    descricao?: string;

    @ApiProperty({ required: false, description: 'Data de abertura do edital' })
    dataAbertura?: Date;

    @ApiProperty({ required: false, description: 'Status do edital' })
    status?: string;
} 