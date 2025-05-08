import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsEnum, IsNotEmpty, IsUUID } from 'class-validator';
import { DisputaStatus } from '@prisma/client';

export class CreateDisputaDto {
    @ApiProperty({ description: 'ID do edital relacionado à disputa' })
    @IsUUID()
    @IsNotEmpty()
    editalId: string;

    @ApiProperty({ description: 'Data e hora de início da disputa' })
    @IsDate()
    @IsNotEmpty()
    dataInicio: Date;

    @ApiProperty({ description: 'Data e hora prevista de término da disputa' })
    @IsDate()
    @IsNotEmpty()
    dataFimPrevisto: Date;

    @ApiProperty({
        description: 'Status da disputa',
        enum: DisputaStatus,
        default: DisputaStatus.AGUARDANDO
    })
    @IsEnum(DisputaStatus)
    @IsNotEmpty()
    status: DisputaStatus;

    @ApiProperty({ description: 'Observações sobre a disputa', required: false })
    @IsString()
    observacoes?: string;
} 