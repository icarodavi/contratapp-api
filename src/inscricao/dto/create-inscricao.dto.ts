import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInscricaoDto {
    @IsString()
    @IsNotEmpty()
    editalId: string;
}
