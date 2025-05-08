export class Documento {
    id: string;
    nome: string;
    tipo: string;
    caminho: string;
    ativo: boolean;
    editalId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    nomeOriginal: string;
    descricao?: string;
    versao: number;
    hash: string;
    assinatura?: string;
    validade?: Date;
    licitanteId: string;
    tipoDocumento: string;
} 