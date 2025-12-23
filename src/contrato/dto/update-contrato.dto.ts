
import { PartialType } from '@nestjs/swagger';
import { CreateContratoDto } from './create-contrato.dto';
import { IsString, IsOptional, IsEnum } from 'class-validator';

export class UpdateContratoDto extends PartialType(CreateContratoDto) {
    @IsOptional()
    @IsString()
    @IsEnum(['ATIVO', 'ENCERRADO', 'CANCELADO', 'SUSPENSO'])
    status?: 'ATIVO' | 'ENCERRADO' | 'CANCELADO' | 'SUSPENSO';
}
