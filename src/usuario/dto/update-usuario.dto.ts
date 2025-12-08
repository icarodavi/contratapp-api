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
    @IsString()
    foto?: string;

    @ApiPropertyOptional()
    @IsOptional()
    preferencias?: any;
}
