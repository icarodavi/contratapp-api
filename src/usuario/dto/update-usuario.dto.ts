import { IsEmail, IsOptional, IsString, IsJSON } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUsuarioDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    nome?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiPropertyOptional()
    @IsOptional()
    foto?: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    preferencias?: any;
}
