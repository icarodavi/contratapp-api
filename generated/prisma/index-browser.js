
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
  disputaId: 'disputaId',
  usuarioId: 'usuarioId',
  acao: 'acao',
  detalhes: 'detalhes',
  data: 'data',
  ip: 'ip',
  userAgent: 'userAgent'
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
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
  OUTROS: 'OUTROS',
  EDITAL: 'EDITAL',
  ATA: 'ATA',
  CONTRATO: 'CONTRATO',
  ANEXO: 'ANEXO',
  CERTIDAO: 'CERTIDAO',
  DECLARACAO: 'DECLARACAO',
  COMPROVANTE: 'COMPROVANTE'
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
  Item: 'Item'
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
