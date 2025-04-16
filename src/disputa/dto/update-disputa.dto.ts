import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDisputaDto } from './create-disputa.dto';
import { IsString, IsDate, IsEnum, IsOptional } from 'class-validator';
import { StatusDisputa } from './create-disputa.dto';

export class UpdateDisputaDto extends PartialType(CreateDisputaDto) {
    @ApiProperty({ description: 'Data e hora de início da disputa', required: false })
    @IsDate()
    @IsOptional()
    dataInicio?: Date;

    @ApiProperty({ description: 'Data e hora prevista de término da disputa', required: false })
    @IsDate()
    @IsOptional()
    dataFimPrevisto?: Date;

    @ApiProperty({
        description: 'Status da disputa',
        enum: StatusDisputa,
        required: false
    })
    @IsEnum(StatusDisputa)
    @IsOptional()
    status?: StatusDisputa;

    @ApiProperty({ description: 'Observações sobre a disputa', required: false })
    @IsString()
    @IsOptional()
    observacoes?: string;
} 