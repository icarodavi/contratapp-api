
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
exports.PerfilUsuario = exports.$Enums.PerfilUsuario = {
  ADMIN: 'ADMIN',
  PREGOEIRO: 'PREGOEIRO',
  LICITANTE: 'LICITANTE',
  VISUALIZADOR: 'VISUALIZADOR'
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

exports.StatusProposta = exports.$Enums.StatusProposta = {
  PENDENTE: 'PENDENTE',
  ACEITA: 'ACEITA',
  REJEITADA: 'REJEITADA',
  CANCELADA: 'CANCELADA'
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

exports.StatusDocumento = exports.$Enums.StatusDocumento = {
  PENDENTE: 'PENDENTE',
  VALIDADO: 'VALIDADO',
  INVALIDO: 'INVALIDO',
  EXPIRADO: 'EXPIRADO'
};

exports.TipoAutorMensagem = exports.$Enums.TipoAutorMensagem = {
  PREGOEIRO: 'PREGOEIRO',
  LICITANTE: 'LICITANTE'
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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
