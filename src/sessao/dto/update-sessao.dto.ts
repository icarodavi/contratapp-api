import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsDate } from 'class-validator';

export class UpdateSessaoDto {
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

    @ApiProperty({
        description: 'Data de encerramento da sessão',
        example: '2024-03-20T15:30:00Z',
        required: false
    })
    @IsOptional()
    @IsDate()
    dataEncerramento?: Date;
} 