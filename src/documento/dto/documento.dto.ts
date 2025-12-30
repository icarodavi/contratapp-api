import { ApiProperty } from '@nestjs/swagger';
import { TipoDocumento } from '@generated/prisma/client';

export class DocumentoDto {
    @ApiProperty({ description: 'ID do documento' })
    id: string;

    @ApiProperty({ description: 'Nome do documento' })
    nome: string;

    @ApiProperty({ enum: TipoDocumento, description: 'Tipo do documento' })
    tipo: TipoDocumento;

    @ApiProperty({ description: 'Caminho do arquivo' })
    caminho: string;

    @ApiProperty({ description: 'Descrição do documento', required: false, nullable: true })
    descricao: string | null;

    @ApiProperty({ description: 'Indica se o documento está ativo' })
    ativo: boolean;

    @ApiProperty({ description: 'ID do edital relacionado' })
    editalId: string;

    @ApiProperty({ description: 'Data de criação' })
    createdAt: Date;

    @ApiProperty({ description: 'Data de atualização' })
    updatedAt: Date;

    @ApiProperty({ description: 'Data de exclusão', required: false, nullable: true })
    deletedAt: Date | null;
} 