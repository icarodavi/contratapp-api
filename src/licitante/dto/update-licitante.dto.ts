import { PartialType } from '@nestjs/swagger';
import { CreateLicitanteDto } from './create-licitante.dto';

export class UpdateLicitanteDto extends PartialType(CreateLicitanteDto) {} 