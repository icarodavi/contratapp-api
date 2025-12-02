import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class EnviarMensagemDto {
    @ApiProperty({ description: 'Conteúdo da mensagem' })
    @IsString()
    @IsNotEmpty()
    conteudo: string;
}
