import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class RegistrarLanceDto {
    @ApiProperty({
        description: 'Valor do lance em centavos',
        example: 10000,
        minimum: 1
    })
    @IsNotEmpty({ message: 'O valor do lance é obrigatório' })
    @IsNumber({}, { message: 'O valor do lance deve ser um número' })
    @Min(1, { message: 'O valor do lance deve ser maior que zero' })
    @Type(() => Number)
    valorCentavos: number;
}