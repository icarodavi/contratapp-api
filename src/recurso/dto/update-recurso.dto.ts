import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum, IsUUID } from 'class-validator';
import { StatusRecurso } from '@generated/prisma';

export class UpdateRecursoDto {
    @ApiProperty({
        description: 'Status do recurso',
        enum: StatusRecurso,
        example: StatusRecurso.DEFERIDO,
        required: false
    })
    @IsOptional()
    @IsEnum(StatusRecurso)
    status?: StatusRecurso;

    @ApiProperty({
        description: 'Resposta ao recurso',
        example: 'O recurso foi deferido conforme fundamentação...',
        required: false
    })
    @IsOptional()
    @IsString()
    resposta?: string;

    @ApiProperty({
        description: 'ID do usuário que está respondendo o recurso',
        example: '123e4567-e89b-12d3-a456-426614174000',
        required: false
    })
    @IsOptional()
    @IsUUID()
    respondidoPor?: string;
} 