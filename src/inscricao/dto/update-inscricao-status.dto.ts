import { IsEnum, IsNotEmpty } from 'class-validator';
import { StatusInscricao } from '../../../prisma/generated/prisma/client';

export class UpdateInscricaoStatusDto {
    @IsEnum(StatusInscricao)
    @IsNotEmpty()
    status: StatusInscricao;
}
