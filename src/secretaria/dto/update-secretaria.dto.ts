import { PartialType } from '@nestjs/swagger';
import { CreateSecretariaDto } from './create-secretaria.dto';
import { IsBoolean, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateSecretariaDto extends PartialType(CreateSecretariaDto) {
    @ApiPropertyOptional()
    @IsBoolean()
    @IsOptional()
    ativo?: boolean;
}
