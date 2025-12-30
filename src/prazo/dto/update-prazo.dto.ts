import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum, IsDate, IsUUID } from 'class-validator';
import { StatusPrazo } from '@generated/prisma/client';

export class UpdatePrazoDto {
    @ApiProperty({
        description: 'Status do prazo',
        enum: StatusPrazo,
        example: StatusPrazo.CONCLUIDO,
        required: false
    })
    @IsOptional()
    @IsEnum(StatusPrazo)
    status?: StatusPrazo;

    @ApiProperty({
        description: 'Data de conclusão do prazo',
        example: '2024-03-25T15:30:00Z',
        required: false
    })
    @IsOptional()
    @IsDate()
    dataConclusao?: Date;

    @ApiProperty({
        description: 'Observações adicionais',
        example: 'Prazo concluído com sucesso',
        required: false
    })
    @IsOptional()
    @IsString()
    observacoes?: string;

    @ApiProperty({
        description: 'ID do usuário que está concluindo o prazo',
        example: '123e4567-e89b-12d3-a456-426614174000',
        required: false
    })
    @IsOptional()
    @IsUUID()
    concluidoPor?: string;
} 