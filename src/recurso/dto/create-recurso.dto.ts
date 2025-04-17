import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum, IsInt, IsOptional, IsUUID } from 'class-validator';
import { TipoRecurso } from '@generated/prisma';

export class CreateRecursoDto {
    @ApiProperty({
        description: 'Tipo do recurso',
        enum: TipoRecurso,
        example: TipoRecurso.IMPUGNACAO
    })
    @IsNotEmpty()
    @IsEnum(TipoRecurso)
    tipo: TipoRecurso;

    @ApiProperty({
        description: 'Motivo do recurso',
        example: 'Divergência no critério de julgamento'
    })
    @IsNotEmpty()
    @IsString()
    motivo: string;

    @ApiProperty({
        description: 'Fundamentação do recurso',
        example: 'Conforme artigo 109 da Lei 14.133/21...'
    })
    @IsNotEmpty()
    @IsString()
    fundamentacao: string;

    @ApiProperty({
        description: 'Prazo para resposta em dias',
        example: 5
    })
    @IsNotEmpty()
    @IsInt()
    prazoResposta: number;

    @ApiProperty({
        description: 'ID do edital',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsUUID()
    editalId: string;

    @ApiProperty({
        description: 'ID do licitante',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsUUID()
    licitanteId: string;

    @ApiProperty({
        description: 'ID do usuário que está enviando o recurso',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsUUID()
    usuarioId: string;
} 