import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, IsString, IsOptional, IsDate } from 'class-validator';

export class CreateSessaoDto {
    @ApiProperty({
        description: 'ID do licitante',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsUUID()
    licitanteId: string;

    @ApiProperty({
        description: 'ID da disputa',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsUUID()
    disputaId: string;

    @ApiProperty({
        description: 'Data de início da sessão',
        example: '2024-03-20T15:30:00Z'
    })
    @IsNotEmpty()
    @IsDate()
    inicio: Date;

    @ApiProperty({
        description: 'Hash da sessão',
        example: 'abc123def456'
    })
    @IsNotEmpty()
    @IsString()
    hash: string;

    @ApiProperty({
        description: 'IP do usuário',
        example: '192.168.1.1',
        required: false
    })
    @IsOptional()
    @IsString()
    ip?: string;

    @ApiProperty({
        description: 'User Agent do navegador',
        example: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        required: false
    })
    @IsOptional()
    @IsString()
    userAgent?: string;
} 