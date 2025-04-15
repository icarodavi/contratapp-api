import { ApiProperty } from '@nestjs/swagger';

export class MensagemChatDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    editalId: string;

    @ApiProperty()
    autorId: string;

    @ApiProperty({ enum: ['PREGOEIRO', 'LICITANTE'] })
    tipoAutor: string;

    @ApiProperty()
    conteudo: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
} 