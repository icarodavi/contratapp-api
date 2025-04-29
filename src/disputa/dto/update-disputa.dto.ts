import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDisputaDto } from './create-disputa.dto';
import { IsString, IsDate, IsEnum, IsOptional } from 'class-validator';
import { DisputaStatus } from '@generated/prisma';

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
        enum: DisputaStatus,
        required: false
    })
    @IsEnum(DisputaStatus)
    @IsOptional()
    status?: DisputaStatus;

    @ApiProperty({ description: 'Observações sobre a disputa', required: false })
    @IsString()
    @IsOptional()
    observacoes?: string;
} 