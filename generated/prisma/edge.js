
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  email: 'email',
  senha: 'senha',
  perfil: 'perfil',
  licitanteId: 'licitanteId'
};

exports.Prisma.EditalScalarFieldEnum = {
  id: 'id',
  numero: 'numero',
  objeto: 'objeto',
  modalidade: 'modalidade',
  criterioJulgamento: 'criterioJulgamento',
  status: 'status',
  dataAbertura: 'dataAbertura',
  arquivoPdf: 'arquivoPdf',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DisputaScalarFieldEnum = {
  id: 'id',
  editalId: 'editalId',
  status: 'status',
  inicio: 'inicio',
  fimPrevisto: 'fimPrevisto',
  encerramento: 'encerramento',
  tempoRestante: 'tempoRestante'
};

exports.Prisma.LicitanteScalarFieldEnum = {
  id: 'id',
  razaoSocial: 'razaoSocial',
  cnpj: 'cnpj',
  tipoEmpresa: 'tipoEmpresa'
};

exports.Prisma.PropostaScalarFieldEnum = {
  id: 'id',
  disputaId: 'disputaId',
  licitanteId: 'licitanteId',
  itemId: 'itemId',
  valorCentavos: 'valorCentavos',
  dataEnvio: 'dataEnvio',
  arquivo: 'arquivo',
  status: 'status',
  observacao: 'observacao',
  versao: 'versao',
  createdBy: 'createdBy',
  updatedBy: 'updatedBy',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LanceScalarFieldEnum = {
  id: 'id',
  disputaId: 'disputaId',
  licitanteId: 'licitanteId',
  valorCentavos: 'valorCentavos',
  horario: 'horario',
  ip: 'ip',
  userAgent: 'userAgent'
};

exports.Prisma.DocumentoScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  tipo: 'tipo',
  caminho: 'caminho',
  descricao: 'descricao',
  ativo: 'ativo',
  editalId: 'editalId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.DocumentoObrigatorioScalarFieldEnum = {
  id: 'id',
  editalId: 'editalId',
  tipoDocumento: 'tipoDocumento',
  descricao: 'descricao',
  prazoValidade: 'prazoValidade',
  observacoes: 'observacoes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DocumentoLicitanteScalarFieldEnum = {
  id: 'id',
  disputaId: 'disputaId',
  licitanteId: 'licitanteId',
  tipoDocumento: 'tipoDocumento',
  nomeOriginal: 'nomeOriginal',
  descricao: 'descricao',
  arquivoPath: 'arquivoPath',
  dataEnvio: 'dataEnvio',
  versao: 'versao',
  status: 'status',
  valido: 'valido',
  hashDocumento: 'hashDocumento',
  assinaturaBase64: 'assinaturaBase64',
  assinadoPor: 'assinadoPor',
  observacoes: 'observacoes',
  dataValidade: 'dataValidade',
  dataValidacao: 'dataValidacao',
  validadoPor: 'validadoPor'
};

exports.Prisma.MensagemChatScalarFieldEnum = {
  id: 'id',
  editalId: 'editalId',
  autorId: 'autorId',
  tipoAutor: 'tipoAutor',
  conteudo: 'conteudo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  disputaId: 'disputaId',
  licitanteId: 'licitanteId'
};

exports.Prisma.SessaoScalarFieldEnum = {
  id: 'id',
  licitanteId: 'licitanteId',
  disputaId: 'disputaId',
  inicio: 'inicio',
  fim: 'fim',
  ip: 'ip',
  hash: 'hash'
};

exports.Prisma.LogAtividadeScalarFieldEnum = {
  id: 'id',
  tipo: 'tipo',
  acao: 'acao',
  detalhes: 'detalhes',
  data: 'data',
  ip: 'ip',
  userAgent: 'userAgent',
  sessaoId: 'sessaoId',
  hashSessao: 'hashSessao',
  status: 'status',
  nivel: 'nivel',
  modulo: 'modulo',
  entidadeId: 'entidadeId',
  entidadeTipo: 'entidadeTipo',
  metadata: 'metadata',
  disputaId: 'disputaId',
  usuarioId: 'usuarioId'
};

exports.Prisma.LoteScalarFieldEnum = {
  id: 'id',
  numero: 'numero',
  descricao: 'descricao',
  editalId: 'editalId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ItemScalarFieldEnum = {
  id: 'id',
  numero: 'numero',
  descricao: 'descricao',
  quantidade: 'quantidade',
  unidade: 'unidade',
  valorEstimado: 'valorEstimado',
  loteId: 'loteId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RecursoScalarFieldEnum = {
  id: 'id',
  tipo: 'tipo',
  status: 'status',
  motivo: 'motivo',
  fundamentacao: 'fundamentacao',
  resposta: 'resposta',
  dataEnvio: 'dataEnvio',
  dataResposta: 'dataResposta',
  prazoResposta: 'prazoResposta',
  editalId: 'editalId',
  licitanteId: 'licitanteId',
  usuarioId: 'usuarioId',
  respondidoPor: 'respondidoPor',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SancaoScalarFieldEnum = {
  id: 'id',
  tipo: 'tipo',
  status: 'status',
  motivo: 'motivo',
  fundamentacao: 'fundamentacao',
  dataInicio: 'dataInicio',
  dataFim: 'dataFim',
  valorMulta: 'valorMulta',
  observacoes: 'observacoes',
  editalId: 'editalId',
  licitanteId: 'licitanteId',
  aplicadoPor: 'aplicadoPor',
  revogadoPor: 'revogadoPor',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PrazoScalarFieldEnum = {
  id: 'id',
  tipo: 'tipo',
  status: 'status',
  descricao: 'descricao',
  dataInicio: 'dataInicio',
  dataFim: 'dataFim',
  dataConclusao: 'dataConclusao',
  observacoes: 'observacoes',
  editalId: 'editalId',
  licitanteId: 'licitanteId',
  itemId: 'itemId',
  criadoPor: 'criadoPor',
  concluidoPor: 'concluidoPor',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.DisputaStatus = exports.$Enums.DisputaStatus = {
  AGUARDANDO: 'AGUARDANDO',
  ABERTA: 'ABERTA',
  SUSPENSA: 'SUSPENSA',
  ENCERRADA: 'ENCERRADA'
};

exports.TipoEmpresa = exports.$Enums.TipoEmpresa = {
  ME: 'ME',
  EPP: 'EPP',
  OUTRA: 'OUTRA'
};

exports.TipoDocumento = exports.$Enums.TipoDocumento = {
  PROPOSTA: 'PROPOSTA',
  HABILITACAO: 'HABILITACAO',
  CERTIDAO: 'CERTIDAO',
  DECLARACAO: 'DECLARACAO',
  COMPROVANTE: 'COMPROVANTE',
  EDITAL: 'EDITAL',
  ATA: 'ATA',
  CONTRATO: 'CONTRATO',
  ANEXO: 'ANEXO',
  ADITIVO: 'ADITIVO',
  TERMO_ADITIVO: 'TERMO_ADITIVO',
  TERMO_HOMOLOGACAO: 'TERMO_HOMOLOGACAO',
  TERMO_JULGAMENTO: 'TERMO_JULGAMENTO',
  TERMO_RESCISAO: 'TERMO_RESCISAO',
  TERMO_ACEITACAO: 'TERMO_ACEITACAO',
  TERMO_ENCERRAMENTO: 'TERMO_ENCERRAMENTO',
  PROPOSTA_TECNICA: 'PROPOSTA_TECNICA',
  PROPOSTA_COMERCIAL: 'PROPOSTA_COMERCIAL',
  PROPOSTA_FINANCEIRA: 'PROPOSTA_FINANCEIRA',
  PLANILHA_PRECOS: 'PLANILHA_PRECOS',
  MEMORIAL_DESCRITIVO: 'MEMORIAL_DESCRITIVO',
  CRONOGRAMA_EXECUCAO: 'CRONOGRAMA_EXECUCAO',
  HABILITACAO_JURIDICA: 'HABILITACAO_JURIDICA',
  HABILITACAO_TECNICA: 'HABILITACAO_TECNICA',
  HABILITACAO_FISCAL: 'HABILITACAO_FISCAL',
  HABILITACAO_ECONOMICA: 'HABILITACAO_ECONOMICA',
  HABILITACAO_QUALIFICACAO: 'HABILITACAO_QUALIFICACAO',
  CERTIDAO_NEGATIVA_DEBITOS: 'CERTIDAO_NEGATIVA_DEBITOS',
  CERTIDAO_POSITIVA_COM_EFEITO_NEGATIVA: 'CERTIDAO_POSITIVA_COM_EFEITO_NEGATIVA',
  CERTIDAO_TRABALHISTA: 'CERTIDAO_TRABALHISTA',
  CERTIDAO_FGTS: 'CERTIDAO_FGTS',
  CERTIDAO_INSS: 'CERTIDAO_INSS',
  CERTIDAO_FALENCIA: 'CERTIDAO_FALENCIA',
  CERTIDAO_CRIMINAL: 'CERTIDAO_CRIMINAL',
  CERTIDAO_ELEITORAL: 'CERTIDAO_ELEITORAL',
  CERTIDAO_MILITAR: 'CERTIDAO_MILITAR',
  CERTIDAO_ESTADUAL: 'CERTIDAO_ESTADUAL',
  CERTIDAO_MUNICIPAL: 'CERTIDAO_MUNICIPAL',
  CERTIDAO_FEDERAL: 'CERTIDAO_FEDERAL',
  DECLARACAO_DE_NAO_INCUMBENCIA: 'DECLARACAO_DE_NAO_INCUMBENCIA',
  DECLARACAO_DE_VERACIDADE: 'DECLARACAO_DE_VERACIDADE',
  DECLARACAO_DE_COMPATIBILIDADE: 'DECLARACAO_DE_COMPATIBILIDADE',
  DECLARACAO_DE_ATENDIMENTO: 'DECLARACAO_DE_ATENDIMENTO',
  DECLARACAO_DE_CAPACIDADE: 'DECLARACAO_DE_CAPACIDADE',
  DECLARACAO_DE_EXPERIENCIA: 'DECLARACAO_DE_EXPERIENCIA',
  DECLARACAO_DE_QUALIFICACAO: 'DECLARACAO_DE_QUALIFICACAO',
  DECLARACAO_DE_ME_EPP: 'DECLARACAO_DE_ME_EPP',
  COMPROVANTE_ENDERECO: 'COMPROVANTE_ENDERECO',
  COMPROVANTE_INSCRICAO: 'COMPROVANTE_INSCRICAO',
  COMPROVANTE_CAPITAL: 'COMPROVANTE_CAPITAL',
  COMPROVANTE_EXPERIENCIA: 'COMPROVANTE_EXPERIENCIA',
  COMPROVANTE_QUALIFICACAO: 'COMPROVANTE_QUALIFICACAO',
  COMPROVANTE_PAGAMENTO: 'COMPROVANTE_PAGAMENTO',
  COMPROVANTE_ENTREGA: 'COMPROVANTE_ENTREGA',
  COMPROVANTE_ASSINATURA: 'COMPROVANTE_ASSINATURA',
  MANUAL_TECNICO: 'MANUAL_TECNICO',
  ESPECIFICACAO_TECNICA: 'ESPECIFICACAO_TECNICA',
  DESENHO_TECNICO: 'DESENHO_TECNICO',
  FOTO: 'FOTO',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  OUTROS: 'OUTROS'
};

exports.PerfilUsuario = exports.$Enums.PerfilUsuario = {
  ADMIN: 'ADMIN',
  PREGOEIRO: 'PREGOEIRO',
  LICITANTE: 'LICITANTE',
  VISUALIZADOR: 'VISUALIZADOR'
};

exports.TipoAutorChat = exports.$Enums.TipoAutorChat = {
  PREGOEIRO: 'PREGOEIRO',
  LICITANTE: 'LICITANTE'
};

exports.StatusProposta = exports.$Enums.StatusProposta = {
  PENDENTE: 'PENDENTE',
  ACEITA: 'ACEITA',
  REJEITADA: 'REJEITADA',
  CANCELADA: 'CANCELADA'
};

exports.TipoAutorMensagem = exports.$Enums.TipoAutorMensagem = {
  PREGOEIRO: 'PREGOEIRO',
  LICITANTE: 'LICITANTE'
};

exports.StatusDocumento = exports.$Enums.StatusDocumento = {
  PENDENTE: 'PENDENTE',
  VALIDADO: 'VALIDADO',
  INVALIDO: 'INVALIDO',
  EXPIRADO: 'EXPIRADO'
};

exports.ModalidadeLicitação = exports.$Enums.ModalidadeLicitação = {
  PREGÃO_ELETRÔNICO: 'PREGÃO_ELETRÔNICO',
  CONCORRÊNCIA: 'CONCORRÊNCIA',
  CONCURSO: 'CONCURSO',
  LEILÃO: 'LEILÃO',
  DISPENSA: 'DISPENSA',
  INEXIGIBILIDADE: 'INEXIGIBILIDADE'
};

exports.CritérioJulgamento = exports.$Enums.CritérioJulgamento = {
  MENOR_PRECO: 'MENOR_PRECO',
  MAIOR_DESCONTO: 'MAIOR_DESCONTO',
  TÉCNICA_E_PRECO: 'TÉCNICA_E_PRECO',
  MAIOR_LANCE_OU_OFERTA: 'MAIOR_LANCE_OU_OFERTA',
  MELHOR_TÉCNICA: 'MELHOR_TÉCNICA',
  MAIOR_RETORNO_ECONÔMICO: 'MAIOR_RETORNO_ECONÔMICO'
};

exports.TipoRecurso = exports.$Enums.TipoRecurso = {
  IMPUGNACAO: 'IMPUGNACAO',
  RECURSO: 'RECURSO',
  RECONSIDERACAO: 'RECONSIDERACAO'
};

exports.StatusRecurso = exports.$Enums.StatusRecurso = {
  PENDENTE: 'PENDENTE',
  DEFERIDO: 'DEFERIDO',
  INDEFERIDO: 'INDEFERIDO',
  ARQUIVADO: 'ARQUIVADO'
};

exports.TipoSancao = exports.$Enums.TipoSancao = {
  ADVERTENCIA: 'ADVERTENCIA',
  SUSPENSAO: 'SUSPENSAO',
  IMPEDIMENTO: 'IMPEDIMENTO',
  DECLARACAO_INIDONEIDADE: 'DECLARACAO_INIDONEIDADE',
  MULTA: 'MULTA'
};

exports.StatusSancao = exports.$Enums.StatusSancao = {
  PENDENTE: 'PENDENTE',
  EM_VIGOR: 'EM_VIGOR',
  SUSPENSA: 'SUSPENSA',
  REVOGADA: 'REVOGADA',
  EXPIRADA: 'EXPIRADA'
};

exports.TipoPrazo = exports.$Enums.TipoPrazo = {
  ENTREGA_DOCUMENTOS: 'ENTREGA_DOCUMENTOS',
  ENTREGA_PROPOSTA: 'ENTREGA_PROPOSTA',
  RECURSO: 'RECURSO',
  RECONSIDERACAO: 'RECONSIDERACAO',
  IMPUGNACAO: 'IMPUGNACAO',
  HOMOLOGACAO: 'HOMOLOGACAO',
  CONTRATACAO: 'CONTRATACAO',
  EXECUCAO: 'EXECUCAO',
  PAGAMENTO: 'PAGAMENTO',
  OUTROS: 'OUTROS'
};

exports.StatusPrazo = exports.$Enums.StatusPrazo = {
  PENDENTE: 'PENDENTE',
  EM_ANDAMENTO: 'EM_ANDAMENTO',
  CONCLUIDO: 'CONCLUIDO',
  ATRASADO: 'ATRASADO',
  CANCELADO: 'CANCELADO'
};

exports.TipoAtividade = exports.$Enums.TipoAtividade = {
  DISPUTA_ABERTA: 'DISPUTA_ABERTA',
  DISPUTA_SUSPENSA: 'DISPUTA_SUSPENSA',
  DISPUTA_RETOMADA: 'DISPUTA_RETOMADA',
  DISPUTA_ENCERRADA: 'DISPUTA_ENCERRADA',
  DISPUTA_CANCELADA: 'DISPUTA_CANCELADA',
  DOCUMENTO_ENVIADO: 'DOCUMENTO_ENVIADO',
  DOCUMENTO_VALIDADO: 'DOCUMENTO_VALIDADO',
  DOCUMENTO_INVALIDADO: 'DOCUMENTO_INVALIDADO',
  DOCUMENTO_EXCLUIDO: 'DOCUMENTO_EXCLUIDO',
  DOCUMENTO_ATUALIZADO: 'DOCUMENTO_ATUALIZADO',
  LANCE_REALIZADO: 'LANCE_REALIZADO',
  LANCE_CANCELADO: 'LANCE_CANCELADO',
  LANCE_INVALIDADO: 'LANCE_INVALIDADO',
  PROPOSTA_ENVIADA: 'PROPOSTA_ENVIADA',
  PROPOSTA_ATUALIZADA: 'PROPOSTA_ATUALIZADA',
  PROPOSTA_CANCELADA: 'PROPOSTA_CANCELADA',
  PROPOSTA_ACEITA: 'PROPOSTA_ACEITA',
  PROPOSTA_REJEITADA: 'PROPOSTA_REJEITADA',
  RECURSO_ENVIADO: 'RECURSO_ENVIADO',
  RECURSO_RESPONDIDO: 'RECURSO_RESPONDIDO',
  RECURSO_DEFERIDO: 'RECURSO_DEFERIDO',
  RECURSO_INDEFERIDO: 'RECURSO_INDEFERIDO',
  SANCAO_APLICADA: 'SANCAO_APLICADA',
  SANCAO_REVOGADA: 'SANCAO_REVOGADA',
  SANCAO_SUSPENSA: 'SANCAO_SUSPENSA',
  SANCAO_EXPIRADA: 'SANCAO_EXPIRADA',
  PRAZO_CRIADO: 'PRAZO_CRIADO',
  PRAZO_ATUALIZADO: 'PRAZO_ATUALIZADO',
  PRAZO_CONCLUIDO: 'PRAZO_CONCLUIDO',
  PRAZO_ATRASADO: 'PRAZO_ATRASADO',
  PRAZO_CANCELADO: 'PRAZO_CANCELADO',
  MENSAGEM_ENVIADA: 'MENSAGEM_ENVIADA',
  MENSAGEM_EDITADA: 'MENSAGEM_EDITADA',
  MENSAGEM_EXCLUIDA: 'MENSAGEM_EXCLUIDA',
  USUARIO_LOGIN: 'USUARIO_LOGIN',
  USUARIO_LOGOUT: 'USUARIO_LOGOUT',
  USUARIO_BLOQUEADO: 'USUARIO_BLOQUEADO',
  USUARIO_DESBLOQUEADO: 'USUARIO_DESBLOQUEADO',
  SENHA_ALTERADA: 'SENHA_ALTERADA',
  PERFIL_ATUALIZADO: 'PERFIL_ATUALIZADO',
  SISTEMA_BACKUP: 'SISTEMA_BACKUP',
  SISTEMA_RESTAURACAO: 'SISTEMA_RESTAURACAO',
  SISTEMA_ATUALIZACAO: 'SISTEMA_ATUALIZACAO',
  SISTEMA_MANUTENCAO: 'SISTEMA_MANUTENCAO',
  SISTEMA_ERRO: 'SISTEMA_ERRO'
};

exports.Prisma.ModelName = {
  Usuario: 'Usuario',
  Edital: 'Edital',
  Disputa: 'Disputa',
  Licitante: 'Licitante',
  Proposta: 'Proposta',
  Lance: 'Lance',
  Documento: 'Documento',
  DocumentoObrigatorio: 'DocumentoObrigatorio',
  DocumentoLicitante: 'DocumentoLicitante',
  MensagemChat: 'MensagemChat',
  Sessao: 'Sessao',
  LogAtividade: 'LogAtividade',
  Lote: 'Lote',
  Item: 'Item',
  Recurso: 'Recurso',
  Sancao: 'Sancao',
  Prazo: 'Prazo'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Icaro\\Desktop\\contratapp\\api\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Icaro\\Desktop\\contratapp\\api\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "postgresql://postgres:123@localhost:5432/contratapp"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nenum DisputaStatus {\n  AGUARDANDO\n  ABERTA\n  SUSPENSA\n  ENCERRADA\n}\n\nenum TipoEmpresa {\n  ME\n  EPP\n  OUTRA\n}\n\nenum TipoDocumento {\n  // Documentos de Licitação\n  PROPOSTA\n  HABILITACAO\n  CERTIDAO\n  DECLARACAO\n  COMPROVANTE\n  EDITAL\n  ATA\n  CONTRATO\n  ANEXO\n  ADITIVO\n  TERMO_ADITIVO\n  TERMO_HOMOLOGACAO\n  TERMO_JULGAMENTO\n  TERMO_RESCISAO\n  TERMO_ACEITACAO\n  TERMO_ENCERRAMENTO\n\n  // Documentos de Proposta\n  PROPOSTA_TECNICA\n  PROPOSTA_COMERCIAL\n  PROPOSTA_FINANCEIRA\n  PLANILHA_PRECOS\n  MEMORIAL_DESCRITIVO\n  CRONOGRAMA_EXECUCAO\n\n  // Documentos de Habilitação\n  HABILITACAO_JURIDICA\n  HABILITACAO_TECNICA\n  HABILITACAO_FISCAL\n  HABILITACAO_ECONOMICA\n  HABILITACAO_QUALIFICACAO\n\n  // Certidões\n  CERTIDAO_NEGATIVA_DEBITOS\n  CERTIDAO_POSITIVA_COM_EFEITO_NEGATIVA\n  CERTIDAO_TRABALHISTA\n  CERTIDAO_FGTS\n  CERTIDAO_INSS\n  CERTIDAO_FALENCIA\n  CERTIDAO_CRIMINAL\n  CERTIDAO_ELEITORAL\n  CERTIDAO_MILITAR\n  CERTIDAO_ESTADUAL\n  CERTIDAO_MUNICIPAL\n  CERTIDAO_FEDERAL\n\n  // Declarações\n  DECLARACAO_DE_NAO_INCUMBENCIA\n  DECLARACAO_DE_VERACIDADE\n  DECLARACAO_DE_COMPATIBILIDADE\n  DECLARACAO_DE_ATENDIMENTO\n  DECLARACAO_DE_CAPACIDADE\n  DECLARACAO_DE_EXPERIENCIA\n  DECLARACAO_DE_QUALIFICACAO\n  DECLARACAO_DE_ME_EPP\n\n  // Comprovantes\n  COMPROVANTE_ENDERECO\n  COMPROVANTE_INSCRICAO\n  COMPROVANTE_CAPITAL\n  COMPROVANTE_EXPERIENCIA\n  COMPROVANTE_QUALIFICACAO\n  COMPROVANTE_PAGAMENTO\n  COMPROVANTE_ENTREGA\n  COMPROVANTE_ASSINATURA\n\n  // Outros Documentos\n  MANUAL_TECNICO\n  ESPECIFICACAO_TECNICA\n  DESENHO_TECNICO\n  FOTO\n  VIDEO\n  AUDIO\n  OUTROS\n}\n\nenum PerfilUsuario {\n  ADMIN\n  PREGOEIRO\n  LICITANTE\n  VISUALIZADOR\n}\n\nenum TipoAutorChat {\n  PREGOEIRO\n  LICITANTE\n}\n\nenum StatusProposta {\n  PENDENTE\n  ACEITA\n  REJEITADA\n  CANCELADA\n}\n\nenum TipoAutorMensagem {\n  PREGOEIRO\n  LICITANTE\n}\n\nenum StatusDocumento {\n  PENDENTE\n  VALIDADO\n  INVALIDO\n  EXPIRADO\n}\n\nenum ModalidadeLicitação {\n  PREGÃO_ELETRÔNICO\n  CONCORRÊNCIA\n  CONCURSO\n  LEILÃO\n  DISPENSA\n  INEXIGIBILIDADE\n}\n\nenum CritérioJulgamento {\n  MENOR_PRECO\n  MAIOR_DESCONTO\n  TÉCNICA_E_PRECO\n  MAIOR_LANCE_OU_OFERTA\n  MELHOR_TÉCNICA\n  MAIOR_RETORNO_ECONÔMICO\n}\n\nenum TipoRecurso {\n  IMPUGNACAO\n  RECURSO\n  RECONSIDERACAO\n}\n\nenum StatusRecurso {\n  PENDENTE\n  DEFERIDO\n  INDEFERIDO\n  ARQUIVADO\n}\n\nenum TipoSancao {\n  ADVERTENCIA\n  SUSPENSAO\n  IMPEDIMENTO\n  DECLARACAO_INIDONEIDADE\n  MULTA\n}\n\nenum StatusSancao {\n  PENDENTE\n  EM_VIGOR\n  SUSPENSA\n  REVOGADA\n  EXPIRADA\n}\n\nenum TipoPrazo {\n  ENTREGA_DOCUMENTOS\n  ENTREGA_PROPOSTA\n  RECURSO\n  RECONSIDERACAO\n  IMPUGNACAO\n  HOMOLOGACAO\n  CONTRATACAO\n  EXECUCAO\n  PAGAMENTO\n  OUTROS\n}\n\nenum StatusPrazo {\n  PENDENTE\n  EM_ANDAMENTO\n  CONCLUIDO\n  ATRASADO\n  CANCELADO\n}\n\nenum TipoAtividade {\n  // Ações de Disputa\n  DISPUTA_ABERTA\n  DISPUTA_SUSPENSA\n  DISPUTA_RETOMADA\n  DISPUTA_ENCERRADA\n  DISPUTA_CANCELADA\n\n  // Ações de Documentos\n  DOCUMENTO_ENVIADO\n  DOCUMENTO_VALIDADO\n  DOCUMENTO_INVALIDADO\n  DOCUMENTO_EXCLUIDO\n  DOCUMENTO_ATUALIZADO\n\n  // Ações de Lances\n  LANCE_REALIZADO\n  LANCE_CANCELADO\n  LANCE_INVALIDADO\n\n  // Ações de Propostas\n  PROPOSTA_ENVIADA\n  PROPOSTA_ATUALIZADA\n  PROPOSTA_CANCELADA\n  PROPOSTA_ACEITA\n  PROPOSTA_REJEITADA\n\n  // Ações de Recursos\n  RECURSO_ENVIADO\n  RECURSO_RESPONDIDO\n  RECURSO_DEFERIDO\n  RECURSO_INDEFERIDO\n\n  // Ações de Sanções\n  SANCAO_APLICADA\n  SANCAO_REVOGADA\n  SANCAO_SUSPENSA\n  SANCAO_EXPIRADA\n\n  // Ações de Prazos\n  PRAZO_CRIADO\n  PRAZO_ATUALIZADO\n  PRAZO_CONCLUIDO\n  PRAZO_ATRASADO\n  PRAZO_CANCELADO\n\n  // Ações de Chat\n  MENSAGEM_ENVIADA\n  MENSAGEM_EDITADA\n  MENSAGEM_EXCLUIDA\n\n  // Ações de Usuários\n  USUARIO_LOGIN\n  USUARIO_LOGOUT\n  USUARIO_BLOQUEADO\n  USUARIO_DESBLOQUEADO\n  SENHA_ALTERADA\n  PERFIL_ATUALIZADO\n\n  // Ações de Sistema\n  SISTEMA_BACKUP\n  SISTEMA_RESTAURACAO\n  SISTEMA_ATUALIZACAO\n  SISTEMA_MANUTENCAO\n  SISTEMA_ERRO\n}\n\nmodel Usuario {\n  id                  String         @id @default(uuid())\n  nome                String\n  email               String         @unique\n  senha               String\n  perfil              PerfilUsuario\n  LogAtividade        LogAtividade[]\n  MensagemChat        MensagemChat[]\n  licitante           Licitante?     @relation(fields: [licitanteId], references: [id])\n  licitanteId         String?        @unique\n  recursosEnviados    Recurso[]      @relation(\"RecursoEnviadoPor\")\n  recursosRespondidos Recurso[]      @relation(\"RecursoRespondidoPor\")\n  sancaoAplicada      Sancao[]       @relation(\"SancaoAplicadaPor\")\n  sancaoRevogada      Sancao[]       @relation(\"SancaoRevogadaPor\")\n  prazosCriados       Prazo[]        @relation(\"PrazoCriadoPor\")\n  prazosConcluidos    Prazo[]        @relation(\"PrazoConcluidoPor\")\n}\n\nmodel Edital {\n  id                     String                 @id @default(uuid())\n  numero                 String                 @unique\n  objeto                 String\n  modalidade             ModalidadeLicitação  @default(PREGÃO_ELETRÔNICO)\n  criterioJulgamento     CritérioJulgamento    @default(MENOR_PRECO)\n  status                 String\n  dataAbertura           DateTime\n  arquivoPdf             String?\n  disputas               Disputa[]\n  documentosObrigatorios DocumentoObrigatorio[]\n  documentos             Documento[]\n  lotes                  Lote[]\n  mensagensChat          MensagemChat[]\n  recursos               Recurso[]\n  createdAt              DateTime               @default(now())\n  updatedAt              DateTime               @updatedAt\n  Sancao                 Sancao[]\n  Prazo                  Prazo[]\n}\n\nmodel Disputa {\n  id            String               @id @default(uuid())\n  editalId      String\n  status        DisputaStatus\n  inicio        DateTime?\n  fimPrevisto   DateTime?\n  encerramento  DateTime?\n  tempoRestante Int?\n  edital        Edital               @relation(fields: [editalId], references: [id], onDelete: Cascade)\n  propostas     Proposta[]\n  lances        Lance[]\n  documentos    DocumentoLicitante[]\n  mensagensChat MensagemChat[]\n  logs          LogAtividade[]\n  sessoes       Sessao[]\n  licitantes    Licitante[]\n}\n\nmodel Licitante {\n  id          String      @id @default(uuid())\n  razaoSocial String\n  cnpj        String      @unique\n  tipoEmpresa TipoEmpresa\n  usuario     Usuario?\n\n  propostas     Proposta[]\n  lances        Lance[]\n  documentos    DocumentoLicitante[]\n  sessoes       Sessao[]\n  mensagensChat MensagemChat[]\n  disputas      Disputa[]\n  recursos      Recurso[]\n  Sancao        Sancao[]\n  Prazo         Prazo[]\n}\n\nmodel Proposta {\n  id            String         @id @default(uuid())\n  disputaId     String\n  licitanteId   String\n  itemId        String\n  valorCentavos Int // valor em centavos\n  dataEnvio     DateTime\n  arquivo       String?\n  status        StatusProposta @default(PENDENTE)\n  observacao    String?\n  versao        Int            @default(1)\n  createdBy     String\n  updatedBy     String?\n  deletedAt     DateTime?\n  createdAt     DateTime       @default(now())\n  updatedAt     DateTime       @updatedAt\n\n  disputa   Disputa   @relation(fields: [disputaId], references: [id], onDelete: Cascade)\n  licitante Licitante @relation(fields: [licitanteId], references: [id], onDelete: Cascade)\n  item      Item      @relation(fields: [itemId], references: [id], onDelete: Cascade)\n\n  @@unique([itemId, licitanteId, versao])\n  @@index([disputaId, itemId])\n  @@index([licitanteId, status])\n}\n\nmodel Lance {\n  id            String   @id @default(uuid())\n  disputaId     String\n  licitanteId   String\n  valorCentavos Int // valor em centavos\n  horario       DateTime\n  ip            String?\n  userAgent     String?\n\n  disputa   Disputa   @relation(fields: [disputaId], references: [id], onDelete: Cascade)\n  licitante Licitante @relation(fields: [licitanteId], references: [id], onDelete: Cascade)\n}\n\nmodel Documento {\n  id        String        @id @default(uuid())\n  nome      String\n  tipo      TipoDocumento\n  caminho   String\n  descricao String?\n  ativo     Boolean       @default(true)\n  editalId  String\n  edital    Edital        @relation(fields: [editalId], references: [id], onDelete: Cascade)\n  createdAt DateTime      @default(now())\n  updatedAt DateTime      @updatedAt\n  deletedAt DateTime?\n\n  @@index([editalId])\n  @@index([tipo])\n  @@index([ativo])\n}\n\nmodel DocumentoObrigatorio {\n  id            String        @id @default(uuid())\n  editalId      String\n  tipoDocumento TipoDocumento\n  descricao     String\n  prazoValidade Int? // dias de validade\n  observacoes   String?\n  edital        Edital        @relation(fields: [editalId], references: [id], onDelete: Cascade)\n  createdAt     DateTime      @default(now())\n  updatedAt     DateTime      @default(now()) @updatedAt\n\n  @@index([editalId])\n  @@index([tipoDocumento])\n}\n\nmodel DocumentoLicitante {\n  id               String          @id @default(uuid())\n  disputaId        String\n  licitanteId      String\n  tipoDocumento    TipoDocumento\n  nomeOriginal     String\n  descricao        String?\n  arquivoPath      String\n  dataEnvio        DateTime\n  versao           Int             @default(1)\n  status           StatusDocumento @default(PENDENTE)\n  valido           Boolean         @default(true)\n  hashDocumento    String?\n  assinaturaBase64 String?\n  assinadoPor      String?\n  observacoes      String?\n  dataValidade     DateTime?\n  dataValidacao    DateTime?\n  validadoPor      String?\n\n  disputa   Disputa   @relation(fields: [disputaId], references: [id], onDelete: Cascade)\n  licitante Licitante @relation(fields: [licitanteId], references: [id], onDelete: Cascade)\n\n  @@index([disputaId])\n  @@index([licitanteId])\n  @@index([tipoDocumento])\n  @@index([status])\n  @@index([valido])\n}\n\nmodel MensagemChat {\n  id        String            @id @default(uuid())\n  editalId  String\n  autorId   String\n  tipoAutor TipoAutorMensagem\n  conteudo  String\n  createdAt DateTime          @default(now())\n  updatedAt DateTime          @updatedAt\n\n  edital      Edital     @relation(fields: [editalId], references: [id], onDelete: Cascade)\n  autor       Usuario    @relation(fields: [autorId], references: [id], onDelete: Cascade)\n  Disputa     Disputa?   @relation(fields: [disputaId], references: [id])\n  disputaId   String?\n  Licitante   Licitante? @relation(fields: [licitanteId], references: [id])\n  licitanteId String?\n\n  @@index([editalId, createdAt])\n}\n\nmodel Sessao {\n  id          String    @id @default(uuid())\n  licitanteId String\n  disputaId   String\n  inicio      DateTime\n  fim         DateTime?\n  ip          String\n  hash        String\n\n  licitante Licitante @relation(fields: [licitanteId], references: [id])\n  disputa   Disputa   @relation(fields: [disputaId], references: [id])\n}\n\nmodel LogAtividade {\n  id           String        @id @default(uuid())\n  tipo         TipoAtividade @default(SISTEMA_ERRO)\n  acao         String\n  detalhes     String?\n  data         DateTime      @default(now())\n  ip           String?\n  userAgent    String?\n  sessaoId     String?\n  hashSessao   String?\n  status       String        @default(\"SUCESSO\") // SUCESSO, ERRO, ALERTA\n  nivel        String        @default(\"INFO\") // DEBUG, INFO, WARN, ERROR\n  modulo       String        @default(\"NONE\") // Nome do módulo que gerou o log\n  entidadeId   String? // ID da entidade relacionada (se aplicável)\n  entidadeTipo String? // Tipo da entidade relacionada (se aplicável)\n  metadata     Json? // Dados adicionais em formato JSON\n\n  // Relacionamentos\n  disputa   Disputa? @relation(fields: [disputaId], references: [id])\n  disputaId String?\n  usuario   Usuario? @relation(fields: [usuarioId], references: [id])\n  usuarioId String?\n\n  // Índices para consultas frequentes\n  @@index([tipo])\n  @@index([data])\n  @@index([usuarioId])\n  @@index([disputaId])\n  @@index([modulo])\n  @@index([status])\n  @@index([nivel])\n  @@index([entidadeId, entidadeTipo])\n}\n\nmodel Lote {\n  id        String   @id @default(uuid())\n  numero    String\n  descricao String\n  editalId  String\n  status    String   @default(\"ATIVO\") // ATIVO, CANCELADO\n  itens     Item[]\n  edital    Edital   @relation(fields: [editalId], references: [id], onDelete: Cascade)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([numero, editalId])\n  @@index([editalId, status])\n}\n\nmodel Item {\n  id            String     @id @default(uuid())\n  numero        String\n  descricao     String\n  quantidade    Int\n  unidade       String\n  valorEstimado Int? // valor estimado em centavos\n  loteId        String\n  status        String     @default(\"ATIVO\") // ATIVO, CANCELADO\n  lote          Lote       @relation(fields: [loteId], references: [id], onDelete: Cascade)\n  propostas     Proposta[]\n  createdAt     DateTime   @default(now())\n  updatedAt     DateTime   @updatedAt\n  Prazo         Prazo[]\n\n  @@unique([numero, loteId])\n  @@index([loteId, status])\n}\n\nmodel Recurso {\n  id            String        @id @default(uuid())\n  tipo          TipoRecurso\n  status        StatusRecurso @default(PENDENTE)\n  motivo        String\n  fundamentacao String\n  resposta      String?\n  dataEnvio     DateTime      @default(now())\n  dataResposta  DateTime?\n  prazoResposta Int // dias para resposta\n  editalId      String\n  licitanteId   String\n  usuarioId     String // usuário que enviou o recurso\n  respondidoPor String? // usuário que respondeu o recurso\n\n  edital               Edital    @relation(fields: [editalId], references: [id], onDelete: Cascade)\n  licitante            Licitante @relation(fields: [licitanteId], references: [id], onDelete: Cascade)\n  enviadoPor           Usuario   @relation(\"RecursoEnviadoPor\", fields: [usuarioId], references: [id], onDelete: Cascade)\n  respondidoPorUsuario Usuario?  @relation(\"RecursoRespondidoPor\", fields: [respondidoPor], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([editalId])\n  @@index([licitanteId])\n  @@index([usuarioId])\n  @@index([status])\n  @@index([tipo])\n}\n\nmodel Sancao {\n  id            String       @id @default(uuid())\n  tipo          TipoSancao\n  status        StatusSancao @default(PENDENTE)\n  motivo        String\n  fundamentacao String\n  dataInicio    DateTime\n  dataFim       DateTime?\n  valorMulta    Int? // valor em centavos\n  observacoes   String?\n  editalId      String\n  licitanteId   String\n  aplicadoPor   String // usuário que aplicou a sanção\n  revogadoPor   String? // usuário que revogou a sanção\n\n  edital             Edital    @relation(fields: [editalId], references: [id], onDelete: Cascade)\n  licitante          Licitante @relation(fields: [licitanteId], references: [id], onDelete: Cascade)\n  aplicadoPorUsuario Usuario   @relation(\"SancaoAplicadaPor\", fields: [aplicadoPor], references: [id], onDelete: Cascade)\n  revogadoPorUsuario Usuario?  @relation(\"SancaoRevogadaPor\", fields: [revogadoPor], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([editalId])\n  @@index([licitanteId])\n  @@index([aplicadoPor])\n  @@index([status])\n  @@index([tipo])\n}\n\nmodel Prazo {\n  id            String      @id @default(uuid())\n  tipo          TipoPrazo\n  status        StatusPrazo @default(PENDENTE)\n  descricao     String\n  dataInicio    DateTime\n  dataFim       DateTime\n  dataConclusao DateTime?\n  observacoes   String?\n  editalId      String\n  licitanteId   String?\n  itemId        String?\n  criadoPor     String\n  concluidoPor  String?\n\n  edital              Edital     @relation(fields: [editalId], references: [id], onDelete: Cascade)\n  licitante           Licitante? @relation(fields: [licitanteId], references: [id])\n  item                Item?      @relation(fields: [itemId], references: [id])\n  criadoPorUsuario    Usuario    @relation(\"PrazoCriadoPor\", fields: [criadoPor], references: [id], onDelete: Cascade)\n  concluidoPorUsuario Usuario?   @relation(\"PrazoConcluidoPor\", fields: [concluidoPor], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([editalId])\n  @@index([licitanteId])\n  @@index([itemId])\n  @@index([tipo])\n  @@index([status])\n  @@index([dataFim])\n}\n",
  "inlineSchemaHash": "741e28a63eb5a548f4d257ec9cb7d6f410e29c2d35cf9b3b77bfb917ec7a3292",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Usuario\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"perfil\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PerfilUsuario\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LogAtividade\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogAtividade\",\"nativeType\":null,\"relationName\":\"LogAtividadeToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MensagemChat\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MensagemChat\",\"nativeType\":null,\"relationName\":\"MensagemChatToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Licitante\",\"nativeType\":null,\"relationName\":\"LicitanteToUsuario\",\"relationFromFields\":[\"licitanteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitanteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recursosEnviados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Recurso\",\"nativeType\":null,\"relationName\":\"RecursoEnviadoPor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recursosRespondidos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Recurso\",\"nativeType\":null,\"relationName\":\"RecursoRespondidoPor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sancaoAplicada\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sancao\",\"nativeType\":null,\"relationName\":\"SancaoAplicadaPor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sancaoRevogada\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sancao\",\"nativeType\":null,\"relationName\":\"SancaoRevogadaPor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prazosCriados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prazo\",\"nativeType\":null,\"relationName\":\"PrazoCriadoPor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prazosConcluidos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prazo\",\"nativeType\":null,\"relationName\":\"PrazoConcluidoPor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Edital\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"objeto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modalidade\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ModalidadeLicitação\",\"nativeType\":null,\"default\":\"PREGÃO_ELETRÔNICO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"criterioJulgamento\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CritérioJulgamento\",\"nativeType\":null,\"default\":\"MENOR_PRECO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataAbertura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arquivoPdf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disputas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Disputa\",\"nativeType\":null,\"relationName\":\"DisputaToEdital\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentosObrigatorios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DocumentoObrigatorio\",\"nativeType\":null,\"relationName\":\"DocumentoObrigatorioToEdital\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Documento\",\"nativeType\":null,\"relationName\":\"DocumentoToEdital\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lotes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lote\",\"nativeType\":null,\"relationName\":\"EditalToLote\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensagensChat\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MensagemChat\",\"nativeType\":null,\"relationName\":\"EditalToMensagemChat\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recursos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Recurso\",\"nativeType\":null,\"relationName\":\"EditalToRecurso\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Sancao\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sancao\",\"nativeType\":null,\"relationName\":\"EditalToSancao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Prazo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prazo\",\"nativeType\":null,\"relationName\":\"EditalToPrazo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Disputa\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editalId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DisputaStatus\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fimPrevisto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"encerramento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tempoRestante\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"edital\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Edital\",\"nativeType\":null,\"relationName\":\"DisputaToEdital\",\"relationFromFields\":[\"editalId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propostas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Proposta\",\"nativeType\":null,\"relationName\":\"DisputaToProposta\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lances\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lance\",\"nativeType\":null,\"relationName\":\"DisputaToLance\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DocumentoLicitante\",\"nativeType\":null,\"relationName\":\"DisputaToDocumentoLicitante\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensagensChat\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MensagemChat\",\"nativeType\":null,\"relationName\":\"DisputaToMensagemChat\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogAtividade\",\"nativeType\":null,\"relationName\":\"DisputaToLogAtividade\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessoes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sessao\",\"nativeType\":null,\"relationName\":\"DisputaToSessao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitantes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Licitante\",\"nativeType\":null,\"relationName\":\"DisputaToLicitante\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Licitante\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razaoSocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipoEmpresa\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoEmpresa\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"LicitanteToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propostas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Proposta\",\"nativeType\":null,\"relationName\":\"LicitanteToProposta\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lances\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lance\",\"nativeType\":null,\"relationName\":\"LanceToLicitante\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DocumentoLicitante\",\"nativeType\":null,\"relationName\":\"DocumentoLicitanteToLicitante\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessoes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sessao\",\"nativeType\":null,\"relationName\":\"LicitanteToSessao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensagensChat\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MensagemChat\",\"nativeType\":null,\"relationName\":\"LicitanteToMensagemChat\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disputas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Disputa\",\"nativeType\":null,\"relationName\":\"DisputaToLicitante\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recursos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Recurso\",\"nativeType\":null,\"relationName\":\"LicitanteToRecurso\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sancao\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sancao\",\"nativeType\":null,\"relationName\":\"LicitanteToSancao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Prazo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prazo\",\"nativeType\":null,\"relationName\":\"LicitanteToPrazo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Proposta\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disputaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitanteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valorCentavos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataEnvio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arquivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StatusProposta\",\"nativeType\":null,\"default\":\"PENDENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"versao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"disputa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Disputa\",\"nativeType\":null,\"relationName\":\"DisputaToProposta\",\"relationFromFields\":[\"disputaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Licitante\",\"nativeType\":null,\"relationName\":\"LicitanteToProposta\",\"relationFromFields\":[\"licitanteId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"item\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Item\",\"nativeType\":null,\"relationName\":\"ItemToProposta\",\"relationFromFields\":[\"itemId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"itemId\",\"licitanteId\",\"versao\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"itemId\",\"licitanteId\",\"versao\"]}],\"isGenerated\":false},\"Lance\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disputaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitanteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valorCentavos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"horario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disputa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Disputa\",\"nativeType\":null,\"relationName\":\"DisputaToLance\",\"relationFromFields\":[\"disputaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Licitante\",\"nativeType\":null,\"relationName\":\"LanceToLicitante\",\"relationFromFields\":[\"licitanteId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Documento\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoDocumento\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caminho\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ativo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editalId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"edital\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Edital\",\"nativeType\":null,\"relationName\":\"DocumentoToEdital\",\"relationFromFields\":[\"editalId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DocumentoObrigatorio\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editalId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipoDocumento\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoDocumento\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prazoValidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacoes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"edital\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Edital\",\"nativeType\":null,\"relationName\":\"DocumentoObrigatorioToEdital\",\"relationFromFields\":[\"editalId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DocumentoLicitante\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disputaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitanteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipoDocumento\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoDocumento\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomeOriginal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arquivoPath\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataEnvio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"versao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StatusDocumento\",\"nativeType\":null,\"default\":\"PENDENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hashDocumento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assinaturaBase64\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assinadoPor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacoes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataValidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataValidacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validadoPor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disputa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Disputa\",\"nativeType\":null,\"relationName\":\"DisputaToDocumentoLicitante\",\"relationFromFields\":[\"disputaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Licitante\",\"nativeType\":null,\"relationName\":\"DocumentoLicitanteToLicitante\",\"relationFromFields\":[\"licitanteId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MensagemChat\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editalId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipoAutor\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoAutorMensagem\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conteudo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"edital\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Edital\",\"nativeType\":null,\"relationName\":\"EditalToMensagemChat\",\"relationFromFields\":[\"editalId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"MensagemChatToUsuario\",\"relationFromFields\":[\"autorId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Disputa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Disputa\",\"nativeType\":null,\"relationName\":\"DisputaToMensagemChat\",\"relationFromFields\":[\"disputaId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disputaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Licitante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Licitante\",\"nativeType\":null,\"relationName\":\"LicitanteToMensagemChat\",\"relationFromFields\":[\"licitanteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitanteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Sessao\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitanteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disputaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Licitante\",\"nativeType\":null,\"relationName\":\"LicitanteToSessao\",\"relationFromFields\":[\"licitanteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disputa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Disputa\",\"nativeType\":null,\"relationName\":\"DisputaToSessao\",\"relationFromFields\":[\"disputaId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogAtividade\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TipoAtividade\",\"nativeType\":null,\"default\":\"SISTEMA_ERRO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detalhes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessaoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hashSessao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"SUCESSO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nivel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"INFO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"NONE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidadeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidadeTipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disputa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Disputa\",\"nativeType\":null,\"relationName\":\"DisputaToLogAtividade\",\"relationFromFields\":[\"disputaId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disputaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"LogAtividadeToUsuario\",\"relationFromFields\":[\"usuarioId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Lote\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editalId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"ATIVO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Item\",\"nativeType\":null,\"relationName\":\"ItemToLote\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"edital\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Edital\",\"nativeType\":null,\"relationName\":\"EditalToLote\",\"relationFromFields\":[\"editalId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"numero\",\"editalId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"numero\",\"editalId\"]}],\"isGenerated\":false},\"Item\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valorEstimado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"ATIVO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lote\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lote\",\"nativeType\":null,\"relationName\":\"ItemToLote\",\"relationFromFields\":[\"loteId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propostas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Proposta\",\"nativeType\":null,\"relationName\":\"ItemToProposta\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Prazo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prazo\",\"nativeType\":null,\"relationName\":\"ItemToPrazo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"numero\",\"loteId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"numero\",\"loteId\"]}],\"isGenerated\":false},\"Recurso\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoRecurso\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StatusRecurso\",\"nativeType\":null,\"default\":\"PENDENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fundamentacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resposta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataEnvio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataResposta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prazoResposta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editalId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitanteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"respondidoPor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"edital\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Edital\",\"nativeType\":null,\"relationName\":\"EditalToRecurso\",\"relationFromFields\":[\"editalId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Licitante\",\"nativeType\":null,\"relationName\":\"LicitanteToRecurso\",\"relationFromFields\":[\"licitanteId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enviadoPor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"RecursoEnviadoPor\",\"relationFromFields\":[\"usuarioId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"respondidoPorUsuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"RecursoRespondidoPor\",\"relationFromFields\":[\"respondidoPor\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Sancao\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoSancao\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StatusSancao\",\"nativeType\":null,\"default\":\"PENDENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fundamentacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataInicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataFim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valorMulta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacoes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editalId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitanteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aplicadoPor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revogadoPor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"edital\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Edital\",\"nativeType\":null,\"relationName\":\"EditalToSancao\",\"relationFromFields\":[\"editalId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Licitante\",\"nativeType\":null,\"relationName\":\"LicitanteToSancao\",\"relationFromFields\":[\"licitanteId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aplicadoPorUsuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"SancaoAplicadaPor\",\"relationFromFields\":[\"aplicadoPor\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revogadoPorUsuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"SancaoRevogadaPor\",\"relationFromFields\":[\"revogadoPor\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Prazo\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoPrazo\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StatusPrazo\",\"nativeType\":null,\"default\":\"PENDENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataInicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataFim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataConclusao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacoes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editalId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitanteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"criadoPor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"concluidoPor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"edital\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Edital\",\"nativeType\":null,\"relationName\":\"EditalToPrazo\",\"relationFromFields\":[\"editalId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licitante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Licitante\",\"nativeType\":null,\"relationName\":\"LicitanteToPrazo\",\"relationFromFields\":[\"licitanteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"item\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Item\",\"nativeType\":null,\"relationName\":\"ItemToPrazo\",\"relationFromFields\":[\"itemId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"criadoPorUsuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"PrazoCriadoPor\",\"relationFromFields\":[\"criadoPor\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"concluidoPorUsuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"PrazoConcluidoPor\",\"relationFromFields\":[\"concluidoPor\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"DisputaStatus\":{\"values\":[{\"name\":\"AGUARDANDO\",\"dbName\":null},{\"name\":\"ABERTA\",\"dbName\":null},{\"name\":\"SUSPENSA\",\"dbName\":null},{\"name\":\"ENCERRADA\",\"dbName\":null}],\"dbName\":null},\"TipoEmpresa\":{\"values\":[{\"name\":\"ME\",\"dbName\":null},{\"name\":\"EPP\",\"dbName\":null},{\"name\":\"OUTRA\",\"dbName\":null}],\"dbName\":null},\"TipoDocumento\":{\"values\":[{\"name\":\"PROPOSTA\",\"dbName\":null},{\"name\":\"HABILITACAO\",\"dbName\":null},{\"name\":\"CERTIDAO\",\"dbName\":null},{\"name\":\"DECLARACAO\",\"dbName\":null},{\"name\":\"COMPROVANTE\",\"dbName\":null},{\"name\":\"EDITAL\",\"dbName\":null},{\"name\":\"ATA\",\"dbName\":null},{\"name\":\"CONTRATO\",\"dbName\":null},{\"name\":\"ANEXO\",\"dbName\":null},{\"name\":\"ADITIVO\",\"dbName\":null},{\"name\":\"TERMO_ADITIVO\",\"dbName\":null},{\"name\":\"TERMO_HOMOLOGACAO\",\"dbName\":null},{\"name\":\"TERMO_JULGAMENTO\",\"dbName\":null},{\"name\":\"TERMO_RESCISAO\",\"dbName\":null},{\"name\":\"TERMO_ACEITACAO\",\"dbName\":null},{\"name\":\"TERMO_ENCERRAMENTO\",\"dbName\":null},{\"name\":\"PROPOSTA_TECNICA\",\"dbName\":null},{\"name\":\"PROPOSTA_COMERCIAL\",\"dbName\":null},{\"name\":\"PROPOSTA_FINANCEIRA\",\"dbName\":null},{\"name\":\"PLANILHA_PRECOS\",\"dbName\":null},{\"name\":\"MEMORIAL_DESCRITIVO\",\"dbName\":null},{\"name\":\"CRONOGRAMA_EXECUCAO\",\"dbName\":null},{\"name\":\"HABILITACAO_JURIDICA\",\"dbName\":null},{\"name\":\"HABILITACAO_TECNICA\",\"dbName\":null},{\"name\":\"HABILITACAO_FISCAL\",\"dbName\":null},{\"name\":\"HABILITACAO_ECONOMICA\",\"dbName\":null},{\"name\":\"HABILITACAO_QUALIFICACAO\",\"dbName\":null},{\"name\":\"CERTIDAO_NEGATIVA_DEBITOS\",\"dbName\":null},{\"name\":\"CERTIDAO_POSITIVA_COM_EFEITO_NEGATIVA\",\"dbName\":null},{\"name\":\"CERTIDAO_TRABALHISTA\",\"dbName\":null},{\"name\":\"CERTIDAO_FGTS\",\"dbName\":null},{\"name\":\"CERTIDAO_INSS\",\"dbName\":null},{\"name\":\"CERTIDAO_FALENCIA\",\"dbName\":null},{\"name\":\"CERTIDAO_CRIMINAL\",\"dbName\":null},{\"name\":\"CERTIDAO_ELEITORAL\",\"dbName\":null},{\"name\":\"CERTIDAO_MILITAR\",\"dbName\":null},{\"name\":\"CERTIDAO_ESTADUAL\",\"dbName\":null},{\"name\":\"CERTIDAO_MUNICIPAL\",\"dbName\":null},{\"name\":\"CERTIDAO_FEDERAL\",\"dbName\":null},{\"name\":\"DECLARACAO_DE_NAO_INCUMBENCIA\",\"dbName\":null},{\"name\":\"DECLARACAO_DE_VERACIDADE\",\"dbName\":null},{\"name\":\"DECLARACAO_DE_COMPATIBILIDADE\",\"dbName\":null},{\"name\":\"DECLARACAO_DE_ATENDIMENTO\",\"dbName\":null},{\"name\":\"DECLARACAO_DE_CAPACIDADE\",\"dbName\":null},{\"name\":\"DECLARACAO_DE_EXPERIENCIA\",\"dbName\":null},{\"name\":\"DECLARACAO_DE_QUALIFICACAO\",\"dbName\":null},{\"name\":\"DECLARACAO_DE_ME_EPP\",\"dbName\":null},{\"name\":\"COMPROVANTE_ENDERECO\",\"dbName\":null},{\"name\":\"COMPROVANTE_INSCRICAO\",\"dbName\":null},{\"name\":\"COMPROVANTE_CAPITAL\",\"dbName\":null},{\"name\":\"COMPROVANTE_EXPERIENCIA\",\"dbName\":null},{\"name\":\"COMPROVANTE_QUALIFICACAO\",\"dbName\":null},{\"name\":\"COMPROVANTE_PAGAMENTO\",\"dbName\":null},{\"name\":\"COMPROVANTE_ENTREGA\",\"dbName\":null},{\"name\":\"COMPROVANTE_ASSINATURA\",\"dbName\":null},{\"name\":\"MANUAL_TECNICO\",\"dbName\":null},{\"name\":\"ESPECIFICACAO_TECNICA\",\"dbName\":null},{\"name\":\"DESENHO_TECNICO\",\"dbName\":null},{\"name\":\"FOTO\",\"dbName\":null},{\"name\":\"VIDEO\",\"dbName\":null},{\"name\":\"AUDIO\",\"dbName\":null},{\"name\":\"OUTROS\",\"dbName\":null}],\"dbName\":null},\"PerfilUsuario\":{\"values\":[{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"PREGOEIRO\",\"dbName\":null},{\"name\":\"LICITANTE\",\"dbName\":null},{\"name\":\"VISUALIZADOR\",\"dbName\":null}],\"dbName\":null},\"TipoAutorChat\":{\"values\":[{\"name\":\"PREGOEIRO\",\"dbName\":null},{\"name\":\"LICITANTE\",\"dbName\":null}],\"dbName\":null},\"StatusProposta\":{\"values\":[{\"name\":\"PENDENTE\",\"dbName\":null},{\"name\":\"ACEITA\",\"dbName\":null},{\"name\":\"REJEITADA\",\"dbName\":null},{\"name\":\"CANCELADA\",\"dbName\":null}],\"dbName\":null},\"TipoAutorMensagem\":{\"values\":[{\"name\":\"PREGOEIRO\",\"dbName\":null},{\"name\":\"LICITANTE\",\"dbName\":null}],\"dbName\":null},\"StatusDocumento\":{\"values\":[{\"name\":\"PENDENTE\",\"dbName\":null},{\"name\":\"VALIDADO\",\"dbName\":null},{\"name\":\"INVALIDO\",\"dbName\":null},{\"name\":\"EXPIRADO\",\"dbName\":null}],\"dbName\":null},\"ModalidadeLicitação\":{\"values\":[{\"name\":\"PREGÃO_ELETRÔNICO\",\"dbName\":null},{\"name\":\"CONCORRÊNCIA\",\"dbName\":null},{\"name\":\"CONCURSO\",\"dbName\":null},{\"name\":\"LEILÃO\",\"dbName\":null},{\"name\":\"DISPENSA\",\"dbName\":null},{\"name\":\"INEXIGIBILIDADE\",\"dbName\":null}],\"dbName\":null},\"CritérioJulgamento\":{\"values\":[{\"name\":\"MENOR_PRECO\",\"dbName\":null},{\"name\":\"MAIOR_DESCONTO\",\"dbName\":null},{\"name\":\"TÉCNICA_E_PRECO\",\"dbName\":null},{\"name\":\"MAIOR_LANCE_OU_OFERTA\",\"dbName\":null},{\"name\":\"MELHOR_TÉCNICA\",\"dbName\":null},{\"name\":\"MAIOR_RETORNO_ECONÔMICO\",\"dbName\":null}],\"dbName\":null},\"TipoRecurso\":{\"values\":[{\"name\":\"IMPUGNACAO\",\"dbName\":null},{\"name\":\"RECURSO\",\"dbName\":null},{\"name\":\"RECONSIDERACAO\",\"dbName\":null}],\"dbName\":null},\"StatusRecurso\":{\"values\":[{\"name\":\"PENDENTE\",\"dbName\":null},{\"name\":\"DEFERIDO\",\"dbName\":null},{\"name\":\"INDEFERIDO\",\"dbName\":null},{\"name\":\"ARQUIVADO\",\"dbName\":null}],\"dbName\":null},\"TipoSancao\":{\"values\":[{\"name\":\"ADVERTENCIA\",\"dbName\":null},{\"name\":\"SUSPENSAO\",\"dbName\":null},{\"name\":\"IMPEDIMENTO\",\"dbName\":null},{\"name\":\"DECLARACAO_INIDONEIDADE\",\"dbName\":null},{\"name\":\"MULTA\",\"dbName\":null}],\"dbName\":null},\"StatusSancao\":{\"values\":[{\"name\":\"PENDENTE\",\"dbName\":null},{\"name\":\"EM_VIGOR\",\"dbName\":null},{\"name\":\"SUSPENSA\",\"dbName\":null},{\"name\":\"REVOGADA\",\"dbName\":null},{\"name\":\"EXPIRADA\",\"dbName\":null}],\"dbName\":null},\"TipoPrazo\":{\"values\":[{\"name\":\"ENTREGA_DOCUMENTOS\",\"dbName\":null},{\"name\":\"ENTREGA_PROPOSTA\",\"dbName\":null},{\"name\":\"RECURSO\",\"dbName\":null},{\"name\":\"RECONSIDERACAO\",\"dbName\":null},{\"name\":\"IMPUGNACAO\",\"dbName\":null},{\"name\":\"HOMOLOGACAO\",\"dbName\":null},{\"name\":\"CONTRATACAO\",\"dbName\":null},{\"name\":\"EXECUCAO\",\"dbName\":null},{\"name\":\"PAGAMENTO\",\"dbName\":null},{\"name\":\"OUTROS\",\"dbName\":null}],\"dbName\":null},\"StatusPrazo\":{\"values\":[{\"name\":\"PENDENTE\",\"dbName\":null},{\"name\":\"EM_ANDAMENTO\",\"dbName\":null},{\"name\":\"CONCLUIDO\",\"dbName\":null},{\"name\":\"ATRASADO\",\"dbName\":null},{\"name\":\"CANCELADO\",\"dbName\":null}],\"dbName\":null},\"TipoAtividade\":{\"values\":[{\"name\":\"DISPUTA_ABERTA\",\"dbName\":null},{\"name\":\"DISPUTA_SUSPENSA\",\"dbName\":null},{\"name\":\"DISPUTA_RETOMADA\",\"dbName\":null},{\"name\":\"DISPUTA_ENCERRADA\",\"dbName\":null},{\"name\":\"DISPUTA_CANCELADA\",\"dbName\":null},{\"name\":\"DOCUMENTO_ENVIADO\",\"dbName\":null},{\"name\":\"DOCUMENTO_VALIDADO\",\"dbName\":null},{\"name\":\"DOCUMENTO_INVALIDADO\",\"dbName\":null},{\"name\":\"DOCUMENTO_EXCLUIDO\",\"dbName\":null},{\"name\":\"DOCUMENTO_ATUALIZADO\",\"dbName\":null},{\"name\":\"LANCE_REALIZADO\",\"dbName\":null},{\"name\":\"LANCE_CANCELADO\",\"dbName\":null},{\"name\":\"LANCE_INVALIDADO\",\"dbName\":null},{\"name\":\"PROPOSTA_ENVIADA\",\"dbName\":null},{\"name\":\"PROPOSTA_ATUALIZADA\",\"dbName\":null},{\"name\":\"PROPOSTA_CANCELADA\",\"dbName\":null},{\"name\":\"PROPOSTA_ACEITA\",\"dbName\":null},{\"name\":\"PROPOSTA_REJEITADA\",\"dbName\":null},{\"name\":\"RECURSO_ENVIADO\",\"dbName\":null},{\"name\":\"RECURSO_RESPONDIDO\",\"dbName\":null},{\"name\":\"RECURSO_DEFERIDO\",\"dbName\":null},{\"name\":\"RECURSO_INDEFERIDO\",\"dbName\":null},{\"name\":\"SANCAO_APLICADA\",\"dbName\":null},{\"name\":\"SANCAO_REVOGADA\",\"dbName\":null},{\"name\":\"SANCAO_SUSPENSA\",\"dbName\":null},{\"name\":\"SANCAO_EXPIRADA\",\"dbName\":null},{\"name\":\"PRAZO_CRIADO\",\"dbName\":null},{\"name\":\"PRAZO_ATUALIZADO\",\"dbName\":null},{\"name\":\"PRAZO_CONCLUIDO\",\"dbName\":null},{\"name\":\"PRAZO_ATRASADO\",\"dbName\":null},{\"name\":\"PRAZO_CANCELADO\",\"dbName\":null},{\"name\":\"MENSAGEM_ENVIADA\",\"dbName\":null},{\"name\":\"MENSAGEM_EDITADA\",\"dbName\":null},{\"name\":\"MENSAGEM_EXCLUIDA\",\"dbName\":null},{\"name\":\"USUARIO_LOGIN\",\"dbName\":null},{\"name\":\"USUARIO_LOGOUT\",\"dbName\":null},{\"name\":\"USUARIO_BLOQUEADO\",\"dbName\":null},{\"name\":\"USUARIO_DESBLOQUEADO\",\"dbName\":null},{\"name\":\"SENHA_ALTERADA\",\"dbName\":null},{\"name\":\"PERFIL_ATUALIZADO\",\"dbName\":null},{\"name\":\"SISTEMA_BACKUP\",\"dbName\":null},{\"name\":\"SISTEMA_RESTAURACAO\",\"dbName\":null},{\"name\":\"SISTEMA_ATUALIZACAO\",\"dbName\":null},{\"name\":\"SISTEMA_MANUTENCAO\",\"dbName\":null},{\"name\":\"SISTEMA_ERRO\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

