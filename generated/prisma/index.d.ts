
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Edital
 * 
 */
export type Edital = $Result.DefaultSelection<Prisma.$EditalPayload>
/**
 * Model Disputa
 * 
 */
export type Disputa = $Result.DefaultSelection<Prisma.$DisputaPayload>
/**
 * Model Licitante
 * 
 */
export type Licitante = $Result.DefaultSelection<Prisma.$LicitantePayload>
/**
 * Model Proposta
 * 
 */
export type Proposta = $Result.DefaultSelection<Prisma.$PropostaPayload>
/**
 * Model Lance
 * 
 */
export type Lance = $Result.DefaultSelection<Prisma.$LancePayload>
/**
 * Model DocumentoLicitante
 * 
 */
export type DocumentoLicitante = $Result.DefaultSelection<Prisma.$DocumentoLicitantePayload>
/**
 * Model DocumentoObrigatorio
 * 
 */
export type DocumentoObrigatorio = $Result.DefaultSelection<Prisma.$DocumentoObrigatorioPayload>
/**
 * Model MensagemChat
 * 
 */
export type MensagemChat = $Result.DefaultSelection<Prisma.$MensagemChatPayload>
/**
 * Model Sessao
 * 
 */
export type Sessao = $Result.DefaultSelection<Prisma.$SessaoPayload>
/**
 * Model LogAtividade
 * 
 */
export type LogAtividade = $Result.DefaultSelection<Prisma.$LogAtividadePayload>
/**
 * Model Lote
 * 
 */
export type Lote = $Result.DefaultSelection<Prisma.$LotePayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DisputaStatus: {
  AGUARDANDO: 'AGUARDANDO',
  ABERTA: 'ABERTA',
  SUSPENSA: 'SUSPENSA',
  ENCERRADA: 'ENCERRADA'
};

export type DisputaStatus = (typeof DisputaStatus)[keyof typeof DisputaStatus]


export const TipoEmpresa: {
  ME: 'ME',
  EPP: 'EPP',
  OUTRA: 'OUTRA'
};

export type TipoEmpresa = (typeof TipoEmpresa)[keyof typeof TipoEmpresa]


export const TipoDocumento: {
  PROPOSTA: 'PROPOSTA',
  HABILITACAO: 'HABILITACAO',
  OUTROS: 'OUTROS'
};

export type TipoDocumento = (typeof TipoDocumento)[keyof typeof TipoDocumento]


export const PerfilUsuario: {
  ADMIN: 'ADMIN',
  PREGOEIRO: 'PREGOEIRO',
  LICITANTE: 'LICITANTE',
  VISUALIZADOR: 'VISUALIZADOR'
};

export type PerfilUsuario = (typeof PerfilUsuario)[keyof typeof PerfilUsuario]


export const TipoAutorChat: {
  PREGOEIRO: 'PREGOEIRO',
  LICITANTE: 'LICITANTE'
};

export type TipoAutorChat = (typeof TipoAutorChat)[keyof typeof TipoAutorChat]


export const StatusProposta: {
  PENDENTE: 'PENDENTE',
  ACEITA: 'ACEITA',
  REJEITADA: 'REJEITADA',
  CANCELADA: 'CANCELADA'
};

export type StatusProposta = (typeof StatusProposta)[keyof typeof StatusProposta]


export const TipoAutorMensagem: {
  PREGOEIRO: 'PREGOEIRO',
  LICITANTE: 'LICITANTE'
};

export type TipoAutorMensagem = (typeof TipoAutorMensagem)[keyof typeof TipoAutorMensagem]

}

export type DisputaStatus = $Enums.DisputaStatus

export const DisputaStatus: typeof $Enums.DisputaStatus

export type TipoEmpresa = $Enums.TipoEmpresa

export const TipoEmpresa: typeof $Enums.TipoEmpresa

export type TipoDocumento = $Enums.TipoDocumento

export const TipoDocumento: typeof $Enums.TipoDocumento

export type PerfilUsuario = $Enums.PerfilUsuario

export const PerfilUsuario: typeof $Enums.PerfilUsuario

export type TipoAutorChat = $Enums.TipoAutorChat

export const TipoAutorChat: typeof $Enums.TipoAutorChat

export type StatusProposta = $Enums.StatusProposta

export const StatusProposta: typeof $Enums.StatusProposta

export type TipoAutorMensagem = $Enums.TipoAutorMensagem

export const TipoAutorMensagem: typeof $Enums.TipoAutorMensagem

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.edital`: Exposes CRUD operations for the **Edital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Editals
    * const editals = await prisma.edital.findMany()
    * ```
    */
  get edital(): Prisma.EditalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disputa`: Exposes CRUD operations for the **Disputa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disputas
    * const disputas = await prisma.disputa.findMany()
    * ```
    */
  get disputa(): Prisma.DisputaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.licitante`: Exposes CRUD operations for the **Licitante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licitantes
    * const licitantes = await prisma.licitante.findMany()
    * ```
    */
  get licitante(): Prisma.LicitanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposta`: Exposes CRUD operations for the **Proposta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Propostas
    * const propostas = await prisma.proposta.findMany()
    * ```
    */
  get proposta(): Prisma.PropostaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lance`: Exposes CRUD operations for the **Lance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lances
    * const lances = await prisma.lance.findMany()
    * ```
    */
  get lance(): Prisma.LanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentoLicitante`: Exposes CRUD operations for the **DocumentoLicitante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentoLicitantes
    * const documentoLicitantes = await prisma.documentoLicitante.findMany()
    * ```
    */
  get documentoLicitante(): Prisma.DocumentoLicitanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentoObrigatorio`: Exposes CRUD operations for the **DocumentoObrigatorio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentoObrigatorios
    * const documentoObrigatorios = await prisma.documentoObrigatorio.findMany()
    * ```
    */
  get documentoObrigatorio(): Prisma.DocumentoObrigatorioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensagemChat`: Exposes CRUD operations for the **MensagemChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MensagemChats
    * const mensagemChats = await prisma.mensagemChat.findMany()
    * ```
    */
  get mensagemChat(): Prisma.MensagemChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessao`: Exposes CRUD operations for the **Sessao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessaos
    * const sessaos = await prisma.sessao.findMany()
    * ```
    */
  get sessao(): Prisma.SessaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logAtividade`: Exposes CRUD operations for the **LogAtividade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogAtividades
    * const logAtividades = await prisma.logAtividade.findMany()
    * ```
    */
  get logAtividade(): Prisma.LogAtividadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lote`: Exposes CRUD operations for the **Lote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lotes
    * const lotes = await prisma.lote.findMany()
    * ```
    */
  get lote(): Prisma.LoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Edital: 'Edital',
    Disputa: 'Disputa',
    Licitante: 'Licitante',
    Proposta: 'Proposta',
    Lance: 'Lance',
    DocumentoLicitante: 'DocumentoLicitante',
    DocumentoObrigatorio: 'DocumentoObrigatorio',
    MensagemChat: 'MensagemChat',
    Sessao: 'Sessao',
    LogAtividade: 'LogAtividade',
    Lote: 'Lote',
    Item: 'Item'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "edital" | "disputa" | "licitante" | "proposta" | "lance" | "documentoLicitante" | "documentoObrigatorio" | "mensagemChat" | "sessao" | "logAtividade" | "lote" | "item"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Edital: {
        payload: Prisma.$EditalPayload<ExtArgs>
        fields: Prisma.EditalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EditalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EditalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditalPayload>
          }
          findFirst: {
            args: Prisma.EditalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EditalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditalPayload>
          }
          findMany: {
            args: Prisma.EditalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditalPayload>[]
          }
          create: {
            args: Prisma.EditalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditalPayload>
          }
          createMany: {
            args: Prisma.EditalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EditalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditalPayload>[]
          }
          delete: {
            args: Prisma.EditalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditalPayload>
          }
          update: {
            args: Prisma.EditalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditalPayload>
          }
          deleteMany: {
            args: Prisma.EditalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EditalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EditalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditalPayload>[]
          }
          upsert: {
            args: Prisma.EditalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditalPayload>
          }
          aggregate: {
            args: Prisma.EditalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEdital>
          }
          groupBy: {
            args: Prisma.EditalGroupByArgs<ExtArgs>
            result: $Utils.Optional<EditalGroupByOutputType>[]
          }
          count: {
            args: Prisma.EditalCountArgs<ExtArgs>
            result: $Utils.Optional<EditalCountAggregateOutputType> | number
          }
        }
      }
      Disputa: {
        payload: Prisma.$DisputaPayload<ExtArgs>
        fields: Prisma.DisputaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisputaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisputaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputaPayload>
          }
          findFirst: {
            args: Prisma.DisputaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisputaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputaPayload>
          }
          findMany: {
            args: Prisma.DisputaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputaPayload>[]
          }
          create: {
            args: Prisma.DisputaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputaPayload>
          }
          createMany: {
            args: Prisma.DisputaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisputaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputaPayload>[]
          }
          delete: {
            args: Prisma.DisputaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputaPayload>
          }
          update: {
            args: Prisma.DisputaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputaPayload>
          }
          deleteMany: {
            args: Prisma.DisputaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisputaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisputaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputaPayload>[]
          }
          upsert: {
            args: Prisma.DisputaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputaPayload>
          }
          aggregate: {
            args: Prisma.DisputaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisputa>
          }
          groupBy: {
            args: Prisma.DisputaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisputaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisputaCountArgs<ExtArgs>
            result: $Utils.Optional<DisputaCountAggregateOutputType> | number
          }
        }
      }
      Licitante: {
        payload: Prisma.$LicitantePayload<ExtArgs>
        fields: Prisma.LicitanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicitanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicitantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicitanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicitantePayload>
          }
          findFirst: {
            args: Prisma.LicitanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicitantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicitanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicitantePayload>
          }
          findMany: {
            args: Prisma.LicitanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicitantePayload>[]
          }
          create: {
            args: Prisma.LicitanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicitantePayload>
          }
          createMany: {
            args: Prisma.LicitanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicitanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicitantePayload>[]
          }
          delete: {
            args: Prisma.LicitanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicitantePayload>
          }
          update: {
            args: Prisma.LicitanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicitantePayload>
          }
          deleteMany: {
            args: Prisma.LicitanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicitanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LicitanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicitantePayload>[]
          }
          upsert: {
            args: Prisma.LicitanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicitantePayload>
          }
          aggregate: {
            args: Prisma.LicitanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicitante>
          }
          groupBy: {
            args: Prisma.LicitanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicitanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicitanteCountArgs<ExtArgs>
            result: $Utils.Optional<LicitanteCountAggregateOutputType> | number
          }
        }
      }
      Proposta: {
        payload: Prisma.$PropostaPayload<ExtArgs>
        fields: Prisma.PropostaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropostaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropostaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>
          }
          findFirst: {
            args: Prisma.PropostaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropostaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>
          }
          findMany: {
            args: Prisma.PropostaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>[]
          }
          create: {
            args: Prisma.PropostaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>
          }
          createMany: {
            args: Prisma.PropostaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropostaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>[]
          }
          delete: {
            args: Prisma.PropostaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>
          }
          update: {
            args: Prisma.PropostaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>
          }
          deleteMany: {
            args: Prisma.PropostaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropostaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropostaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>[]
          }
          upsert: {
            args: Prisma.PropostaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>
          }
          aggregate: {
            args: Prisma.PropostaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposta>
          }
          groupBy: {
            args: Prisma.PropostaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropostaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropostaCountArgs<ExtArgs>
            result: $Utils.Optional<PropostaCountAggregateOutputType> | number
          }
        }
      }
      Lance: {
        payload: Prisma.$LancePayload<ExtArgs>
        fields: Prisma.LanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancePayload>
          }
          findFirst: {
            args: Prisma.LanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancePayload>
          }
          findMany: {
            args: Prisma.LanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancePayload>[]
          }
          create: {
            args: Prisma.LanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancePayload>
          }
          createMany: {
            args: Prisma.LanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancePayload>[]
          }
          delete: {
            args: Prisma.LanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancePayload>
          }
          update: {
            args: Prisma.LanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancePayload>
          }
          deleteMany: {
            args: Prisma.LanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancePayload>[]
          }
          upsert: {
            args: Prisma.LanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancePayload>
          }
          aggregate: {
            args: Prisma.LanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLance>
          }
          groupBy: {
            args: Prisma.LanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanceCountArgs<ExtArgs>
            result: $Utils.Optional<LanceCountAggregateOutputType> | number
          }
        }
      }
      DocumentoLicitante: {
        payload: Prisma.$DocumentoLicitantePayload<ExtArgs>
        fields: Prisma.DocumentoLicitanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentoLicitanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoLicitantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentoLicitanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoLicitantePayload>
          }
          findFirst: {
            args: Prisma.DocumentoLicitanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoLicitantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentoLicitanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoLicitantePayload>
          }
          findMany: {
            args: Prisma.DocumentoLicitanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoLicitantePayload>[]
          }
          create: {
            args: Prisma.DocumentoLicitanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoLicitantePayload>
          }
          createMany: {
            args: Prisma.DocumentoLicitanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentoLicitanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoLicitantePayload>[]
          }
          delete: {
            args: Prisma.DocumentoLicitanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoLicitantePayload>
          }
          update: {
            args: Prisma.DocumentoLicitanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoLicitantePayload>
          }
          deleteMany: {
            args: Prisma.DocumentoLicitanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentoLicitanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentoLicitanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoLicitantePayload>[]
          }
          upsert: {
            args: Prisma.DocumentoLicitanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoLicitantePayload>
          }
          aggregate: {
            args: Prisma.DocumentoLicitanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentoLicitante>
          }
          groupBy: {
            args: Prisma.DocumentoLicitanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentoLicitanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentoLicitanteCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentoLicitanteCountAggregateOutputType> | number
          }
        }
      }
      DocumentoObrigatorio: {
        payload: Prisma.$DocumentoObrigatorioPayload<ExtArgs>
        fields: Prisma.DocumentoObrigatorioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentoObrigatorioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoObrigatorioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentoObrigatorioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoObrigatorioPayload>
          }
          findFirst: {
            args: Prisma.DocumentoObrigatorioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoObrigatorioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentoObrigatorioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoObrigatorioPayload>
          }
          findMany: {
            args: Prisma.DocumentoObrigatorioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoObrigatorioPayload>[]
          }
          create: {
            args: Prisma.DocumentoObrigatorioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoObrigatorioPayload>
          }
          createMany: {
            args: Prisma.DocumentoObrigatorioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentoObrigatorioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoObrigatorioPayload>[]
          }
          delete: {
            args: Prisma.DocumentoObrigatorioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoObrigatorioPayload>
          }
          update: {
            args: Prisma.DocumentoObrigatorioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoObrigatorioPayload>
          }
          deleteMany: {
            args: Prisma.DocumentoObrigatorioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentoObrigatorioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentoObrigatorioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoObrigatorioPayload>[]
          }
          upsert: {
            args: Prisma.DocumentoObrigatorioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoObrigatorioPayload>
          }
          aggregate: {
            args: Prisma.DocumentoObrigatorioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentoObrigatorio>
          }
          groupBy: {
            args: Prisma.DocumentoObrigatorioGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentoObrigatorioGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentoObrigatorioCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentoObrigatorioCountAggregateOutputType> | number
          }
        }
      }
      MensagemChat: {
        payload: Prisma.$MensagemChatPayload<ExtArgs>
        fields: Prisma.MensagemChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensagemChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensagemChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemChatPayload>
          }
          findFirst: {
            args: Prisma.MensagemChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensagemChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemChatPayload>
          }
          findMany: {
            args: Prisma.MensagemChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemChatPayload>[]
          }
          create: {
            args: Prisma.MensagemChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemChatPayload>
          }
          createMany: {
            args: Prisma.MensagemChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensagemChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemChatPayload>[]
          }
          delete: {
            args: Prisma.MensagemChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemChatPayload>
          }
          update: {
            args: Prisma.MensagemChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemChatPayload>
          }
          deleteMany: {
            args: Prisma.MensagemChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensagemChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensagemChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemChatPayload>[]
          }
          upsert: {
            args: Prisma.MensagemChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemChatPayload>
          }
          aggregate: {
            args: Prisma.MensagemChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensagemChat>
          }
          groupBy: {
            args: Prisma.MensagemChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensagemChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensagemChatCountArgs<ExtArgs>
            result: $Utils.Optional<MensagemChatCountAggregateOutputType> | number
          }
        }
      }
      Sessao: {
        payload: Prisma.$SessaoPayload<ExtArgs>
        fields: Prisma.SessaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          findFirst: {
            args: Prisma.SessaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          findMany: {
            args: Prisma.SessaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>[]
          }
          create: {
            args: Prisma.SessaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          createMany: {
            args: Prisma.SessaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>[]
          }
          delete: {
            args: Prisma.SessaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          update: {
            args: Prisma.SessaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          deleteMany: {
            args: Prisma.SessaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>[]
          }
          upsert: {
            args: Prisma.SessaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          aggregate: {
            args: Prisma.SessaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessao>
          }
          groupBy: {
            args: Prisma.SessaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessaoCountArgs<ExtArgs>
            result: $Utils.Optional<SessaoCountAggregateOutputType> | number
          }
        }
      }
      LogAtividade: {
        payload: Prisma.$LogAtividadePayload<ExtArgs>
        fields: Prisma.LogAtividadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogAtividadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAtividadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogAtividadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAtividadePayload>
          }
          findFirst: {
            args: Prisma.LogAtividadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAtividadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogAtividadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAtividadePayload>
          }
          findMany: {
            args: Prisma.LogAtividadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAtividadePayload>[]
          }
          create: {
            args: Prisma.LogAtividadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAtividadePayload>
          }
          createMany: {
            args: Prisma.LogAtividadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogAtividadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAtividadePayload>[]
          }
          delete: {
            args: Prisma.LogAtividadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAtividadePayload>
          }
          update: {
            args: Prisma.LogAtividadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAtividadePayload>
          }
          deleteMany: {
            args: Prisma.LogAtividadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogAtividadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogAtividadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAtividadePayload>[]
          }
          upsert: {
            args: Prisma.LogAtividadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAtividadePayload>
          }
          aggregate: {
            args: Prisma.LogAtividadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogAtividade>
          }
          groupBy: {
            args: Prisma.LogAtividadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogAtividadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogAtividadeCountArgs<ExtArgs>
            result: $Utils.Optional<LogAtividadeCountAggregateOutputType> | number
          }
        }
      }
      Lote: {
        payload: Prisma.$LotePayload<ExtArgs>
        fields: Prisma.LoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          findFirst: {
            args: Prisma.LoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          findMany: {
            args: Prisma.LoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>[]
          }
          create: {
            args: Prisma.LoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          createMany: {
            args: Prisma.LoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>[]
          }
          delete: {
            args: Prisma.LoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          update: {
            args: Prisma.LoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          deleteMany: {
            args: Prisma.LoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>[]
          }
          upsert: {
            args: Prisma.LoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          aggregate: {
            args: Prisma.LoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLote>
          }
          groupBy: {
            args: Prisma.LoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoteCountArgs<ExtArgs>
            result: $Utils.Optional<LoteCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    edital?: EditalOmit
    disputa?: DisputaOmit
    licitante?: LicitanteOmit
    proposta?: PropostaOmit
    lance?: LanceOmit
    documentoLicitante?: DocumentoLicitanteOmit
    documentoObrigatorio?: DocumentoObrigatorioOmit
    mensagemChat?: MensagemChatOmit
    sessao?: SessaoOmit
    logAtividade?: LogAtividadeOmit
    lote?: LoteOmit
    item?: ItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    LogAtividade: number
    MensagemChat: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LogAtividade?: boolean | UsuarioCountOutputTypeCountLogAtividadeArgs
    MensagemChat?: boolean | UsuarioCountOutputTypeCountMensagemChatArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLogAtividadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAtividadeWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMensagemChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemChatWhereInput
  }


  /**
   * Count Type EditalCountOutputType
   */

  export type EditalCountOutputType = {
    disputas: number
    documentosObrigatorios: number
    lotes: number
    mensagensChat: number
  }

  export type EditalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputas?: boolean | EditalCountOutputTypeCountDisputasArgs
    documentosObrigatorios?: boolean | EditalCountOutputTypeCountDocumentosObrigatoriosArgs
    lotes?: boolean | EditalCountOutputTypeCountLotesArgs
    mensagensChat?: boolean | EditalCountOutputTypeCountMensagensChatArgs
  }

  // Custom InputTypes
  /**
   * EditalCountOutputType without action
   */
  export type EditalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditalCountOutputType
     */
    select?: EditalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EditalCountOutputType without action
   */
  export type EditalCountOutputTypeCountDisputasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputaWhereInput
  }

  /**
   * EditalCountOutputType without action
   */
  export type EditalCountOutputTypeCountDocumentosObrigatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoObrigatorioWhereInput
  }

  /**
   * EditalCountOutputType without action
   */
  export type EditalCountOutputTypeCountLotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoteWhereInput
  }

  /**
   * EditalCountOutputType without action
   */
  export type EditalCountOutputTypeCountMensagensChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemChatWhereInput
  }


  /**
   * Count Type DisputaCountOutputType
   */

  export type DisputaCountOutputType = {
    propostas: number
    lances: number
    documentos: number
    mensagensChat: number
    logs: number
    Sessao: number
  }

  export type DisputaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propostas?: boolean | DisputaCountOutputTypeCountPropostasArgs
    lances?: boolean | DisputaCountOutputTypeCountLancesArgs
    documentos?: boolean | DisputaCountOutputTypeCountDocumentosArgs
    mensagensChat?: boolean | DisputaCountOutputTypeCountMensagensChatArgs
    logs?: boolean | DisputaCountOutputTypeCountLogsArgs
    Sessao?: boolean | DisputaCountOutputTypeCountSessaoArgs
  }

  // Custom InputTypes
  /**
   * DisputaCountOutputType without action
   */
  export type DisputaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputaCountOutputType
     */
    select?: DisputaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisputaCountOutputType without action
   */
  export type DisputaCountOutputTypeCountPropostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaWhereInput
  }

  /**
   * DisputaCountOutputType without action
   */
  export type DisputaCountOutputTypeCountLancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanceWhereInput
  }

  /**
   * DisputaCountOutputType without action
   */
  export type DisputaCountOutputTypeCountDocumentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoLicitanteWhereInput
  }

  /**
   * DisputaCountOutputType without action
   */
  export type DisputaCountOutputTypeCountMensagensChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemChatWhereInput
  }

  /**
   * DisputaCountOutputType without action
   */
  export type DisputaCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAtividadeWhereInput
  }

  /**
   * DisputaCountOutputType without action
   */
  export type DisputaCountOutputTypeCountSessaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessaoWhereInput
  }


  /**
   * Count Type LicitanteCountOutputType
   */

  export type LicitanteCountOutputType = {
    propostas: number
    lances: number
    documentos: number
    sessoes: number
    mensagensChat: number
  }

  export type LicitanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propostas?: boolean | LicitanteCountOutputTypeCountPropostasArgs
    lances?: boolean | LicitanteCountOutputTypeCountLancesArgs
    documentos?: boolean | LicitanteCountOutputTypeCountDocumentosArgs
    sessoes?: boolean | LicitanteCountOutputTypeCountSessoesArgs
    mensagensChat?: boolean | LicitanteCountOutputTypeCountMensagensChatArgs
  }

  // Custom InputTypes
  /**
   * LicitanteCountOutputType without action
   */
  export type LicitanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicitanteCountOutputType
     */
    select?: LicitanteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LicitanteCountOutputType without action
   */
  export type LicitanteCountOutputTypeCountPropostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaWhereInput
  }

  /**
   * LicitanteCountOutputType without action
   */
  export type LicitanteCountOutputTypeCountLancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanceWhereInput
  }

  /**
   * LicitanteCountOutputType without action
   */
  export type LicitanteCountOutputTypeCountDocumentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoLicitanteWhereInput
  }

  /**
   * LicitanteCountOutputType without action
   */
  export type LicitanteCountOutputTypeCountSessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessaoWhereInput
  }

  /**
   * LicitanteCountOutputType without action
   */
  export type LicitanteCountOutputTypeCountMensagensChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemChatWhereInput
  }


  /**
   * Count Type LoteCountOutputType
   */

  export type LoteCountOutputType = {
    itens: number
  }

  export type LoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | LoteCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * LoteCountOutputType without action
   */
  export type LoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoteCountOutputType
     */
    select?: LoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoteCountOutputType without action
   */
  export type LoteCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    propostas: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propostas?: boolean | ItemCountOutputTypeCountPropostasArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountPropostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    perfil: $Enums.PerfilUsuario | null
    licitanteId: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    perfil: $Enums.PerfilUsuario | null
    licitanteId: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    perfil: number
    licitanteId: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    perfil?: true
    licitanteId?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    perfil?: true
    licitanteId?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    perfil?: true
    licitanteId?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    perfil: $Enums.PerfilUsuario
    licitanteId: string | null
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    perfil?: boolean
    licitanteId?: boolean
    LogAtividade?: boolean | Usuario$LogAtividadeArgs<ExtArgs>
    MensagemChat?: boolean | Usuario$MensagemChatArgs<ExtArgs>
    licitante?: boolean | Usuario$licitanteArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    perfil?: boolean
    licitanteId?: boolean
    licitante?: boolean | Usuario$licitanteArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    perfil?: boolean
    licitanteId?: boolean
    licitante?: boolean | Usuario$licitanteArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    perfil?: boolean
    licitanteId?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "perfil" | "licitanteId", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LogAtividade?: boolean | Usuario$LogAtividadeArgs<ExtArgs>
    MensagemChat?: boolean | Usuario$MensagemChatArgs<ExtArgs>
    licitante?: boolean | Usuario$licitanteArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licitante?: boolean | Usuario$licitanteArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licitante?: boolean | Usuario$licitanteArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      LogAtividade: Prisma.$LogAtividadePayload<ExtArgs>[]
      MensagemChat: Prisma.$MensagemChatPayload<ExtArgs>[]
      licitante: Prisma.$LicitantePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      perfil: $Enums.PerfilUsuario
      licitanteId: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    LogAtividade<T extends Usuario$LogAtividadeArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$LogAtividadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MensagemChat<T extends Usuario$MensagemChatArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$MensagemChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    licitante<T extends Usuario$licitanteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$licitanteArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly perfil: FieldRef<"Usuario", 'PerfilUsuario'>
    readonly licitanteId: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.LogAtividade
   */
  export type Usuario$LogAtividadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeInclude<ExtArgs> | null
    where?: LogAtividadeWhereInput
    orderBy?: LogAtividadeOrderByWithRelationInput | LogAtividadeOrderByWithRelationInput[]
    cursor?: LogAtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogAtividadeScalarFieldEnum | LogAtividadeScalarFieldEnum[]
  }

  /**
   * Usuario.MensagemChat
   */
  export type Usuario$MensagemChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
    where?: MensagemChatWhereInput
    orderBy?: MensagemChatOrderByWithRelationInput | MensagemChatOrderByWithRelationInput[]
    cursor?: MensagemChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemChatScalarFieldEnum | MensagemChatScalarFieldEnum[]
  }

  /**
   * Usuario.licitante
   */
  export type Usuario$licitanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicitanteInclude<ExtArgs> | null
    where?: LicitanteWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Edital
   */

  export type AggregateEdital = {
    _count: EditalCountAggregateOutputType | null
    _min: EditalMinAggregateOutputType | null
    _max: EditalMaxAggregateOutputType | null
  }

  export type EditalMinAggregateOutputType = {
    id: string | null
    numero: string | null
    objeto: string | null
    modalidade: string | null
    status: string | null
    dataAbertura: Date | null
    arquivoPdf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EditalMaxAggregateOutputType = {
    id: string | null
    numero: string | null
    objeto: string | null
    modalidade: string | null
    status: string | null
    dataAbertura: Date | null
    arquivoPdf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EditalCountAggregateOutputType = {
    id: number
    numero: number
    objeto: number
    modalidade: number
    status: number
    dataAbertura: number
    arquivoPdf: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EditalMinAggregateInputType = {
    id?: true
    numero?: true
    objeto?: true
    modalidade?: true
    status?: true
    dataAbertura?: true
    arquivoPdf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EditalMaxAggregateInputType = {
    id?: true
    numero?: true
    objeto?: true
    modalidade?: true
    status?: true
    dataAbertura?: true
    arquivoPdf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EditalCountAggregateInputType = {
    id?: true
    numero?: true
    objeto?: true
    modalidade?: true
    status?: true
    dataAbertura?: true
    arquivoPdf?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EditalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Edital to aggregate.
     */
    where?: EditalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editals to fetch.
     */
    orderBy?: EditalOrderByWithRelationInput | EditalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EditalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Editals
    **/
    _count?: true | EditalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EditalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EditalMaxAggregateInputType
  }

  export type GetEditalAggregateType<T extends EditalAggregateArgs> = {
        [P in keyof T & keyof AggregateEdital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEdital[P]>
      : GetScalarType<T[P], AggregateEdital[P]>
  }




  export type EditalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditalWhereInput
    orderBy?: EditalOrderByWithAggregationInput | EditalOrderByWithAggregationInput[]
    by: EditalScalarFieldEnum[] | EditalScalarFieldEnum
    having?: EditalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EditalCountAggregateInputType | true
    _min?: EditalMinAggregateInputType
    _max?: EditalMaxAggregateInputType
  }

  export type EditalGroupByOutputType = {
    id: string
    numero: string
    objeto: string
    modalidade: string
    status: string
    dataAbertura: Date
    arquivoPdf: string | null
    createdAt: Date
    updatedAt: Date
    _count: EditalCountAggregateOutputType | null
    _min: EditalMinAggregateOutputType | null
    _max: EditalMaxAggregateOutputType | null
  }

  type GetEditalGroupByPayload<T extends EditalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EditalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EditalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EditalGroupByOutputType[P]>
            : GetScalarType<T[P], EditalGroupByOutputType[P]>
        }
      >
    >


  export type EditalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    objeto?: boolean
    modalidade?: boolean
    status?: boolean
    dataAbertura?: boolean
    arquivoPdf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disputas?: boolean | Edital$disputasArgs<ExtArgs>
    documentosObrigatorios?: boolean | Edital$documentosObrigatoriosArgs<ExtArgs>
    lotes?: boolean | Edital$lotesArgs<ExtArgs>
    mensagensChat?: boolean | Edital$mensagensChatArgs<ExtArgs>
    _count?: boolean | EditalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edital"]>

  export type EditalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    objeto?: boolean
    modalidade?: boolean
    status?: boolean
    dataAbertura?: boolean
    arquivoPdf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["edital"]>

  export type EditalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    objeto?: boolean
    modalidade?: boolean
    status?: boolean
    dataAbertura?: boolean
    arquivoPdf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["edital"]>

  export type EditalSelectScalar = {
    id?: boolean
    numero?: boolean
    objeto?: boolean
    modalidade?: boolean
    status?: boolean
    dataAbertura?: boolean
    arquivoPdf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EditalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "objeto" | "modalidade" | "status" | "dataAbertura" | "arquivoPdf" | "createdAt" | "updatedAt", ExtArgs["result"]["edital"]>
  export type EditalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputas?: boolean | Edital$disputasArgs<ExtArgs>
    documentosObrigatorios?: boolean | Edital$documentosObrigatoriosArgs<ExtArgs>
    lotes?: boolean | Edital$lotesArgs<ExtArgs>
    mensagensChat?: boolean | Edital$mensagensChatArgs<ExtArgs>
    _count?: boolean | EditalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EditalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EditalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EditalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Edital"
    objects: {
      disputas: Prisma.$DisputaPayload<ExtArgs>[]
      documentosObrigatorios: Prisma.$DocumentoObrigatorioPayload<ExtArgs>[]
      lotes: Prisma.$LotePayload<ExtArgs>[]
      mensagensChat: Prisma.$MensagemChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numero: string
      objeto: string
      modalidade: string
      status: string
      dataAbertura: Date
      arquivoPdf: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["edital"]>
    composites: {}
  }

  type EditalGetPayload<S extends boolean | null | undefined | EditalDefaultArgs> = $Result.GetResult<Prisma.$EditalPayload, S>

  type EditalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EditalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EditalCountAggregateInputType | true
    }

  export interface EditalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Edital'], meta: { name: 'Edital' } }
    /**
     * Find zero or one Edital that matches the filter.
     * @param {EditalFindUniqueArgs} args - Arguments to find a Edital
     * @example
     * // Get one Edital
     * const edital = await prisma.edital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EditalFindUniqueArgs>(args: SelectSubset<T, EditalFindUniqueArgs<ExtArgs>>): Prisma__EditalClient<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Edital that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EditalFindUniqueOrThrowArgs} args - Arguments to find a Edital
     * @example
     * // Get one Edital
     * const edital = await prisma.edital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EditalFindUniqueOrThrowArgs>(args: SelectSubset<T, EditalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EditalClient<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditalFindFirstArgs} args - Arguments to find a Edital
     * @example
     * // Get one Edital
     * const edital = await prisma.edital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EditalFindFirstArgs>(args?: SelectSubset<T, EditalFindFirstArgs<ExtArgs>>): Prisma__EditalClient<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditalFindFirstOrThrowArgs} args - Arguments to find a Edital
     * @example
     * // Get one Edital
     * const edital = await prisma.edital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EditalFindFirstOrThrowArgs>(args?: SelectSubset<T, EditalFindFirstOrThrowArgs<ExtArgs>>): Prisma__EditalClient<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Editals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Editals
     * const editals = await prisma.edital.findMany()
     * 
     * // Get first 10 Editals
     * const editals = await prisma.edital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const editalWithIdOnly = await prisma.edital.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EditalFindManyArgs>(args?: SelectSubset<T, EditalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Edital.
     * @param {EditalCreateArgs} args - Arguments to create a Edital.
     * @example
     * // Create one Edital
     * const Edital = await prisma.edital.create({
     *   data: {
     *     // ... data to create a Edital
     *   }
     * })
     * 
     */
    create<T extends EditalCreateArgs>(args: SelectSubset<T, EditalCreateArgs<ExtArgs>>): Prisma__EditalClient<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Editals.
     * @param {EditalCreateManyArgs} args - Arguments to create many Editals.
     * @example
     * // Create many Editals
     * const edital = await prisma.edital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EditalCreateManyArgs>(args?: SelectSubset<T, EditalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Editals and returns the data saved in the database.
     * @param {EditalCreateManyAndReturnArgs} args - Arguments to create many Editals.
     * @example
     * // Create many Editals
     * const edital = await prisma.edital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Editals and only return the `id`
     * const editalWithIdOnly = await prisma.edital.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EditalCreateManyAndReturnArgs>(args?: SelectSubset<T, EditalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Edital.
     * @param {EditalDeleteArgs} args - Arguments to delete one Edital.
     * @example
     * // Delete one Edital
     * const Edital = await prisma.edital.delete({
     *   where: {
     *     // ... filter to delete one Edital
     *   }
     * })
     * 
     */
    delete<T extends EditalDeleteArgs>(args: SelectSubset<T, EditalDeleteArgs<ExtArgs>>): Prisma__EditalClient<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Edital.
     * @param {EditalUpdateArgs} args - Arguments to update one Edital.
     * @example
     * // Update one Edital
     * const edital = await prisma.edital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EditalUpdateArgs>(args: SelectSubset<T, EditalUpdateArgs<ExtArgs>>): Prisma__EditalClient<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Editals.
     * @param {EditalDeleteManyArgs} args - Arguments to filter Editals to delete.
     * @example
     * // Delete a few Editals
     * const { count } = await prisma.edital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EditalDeleteManyArgs>(args?: SelectSubset<T, EditalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Editals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Editals
     * const edital = await prisma.edital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EditalUpdateManyArgs>(args: SelectSubset<T, EditalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Editals and returns the data updated in the database.
     * @param {EditalUpdateManyAndReturnArgs} args - Arguments to update many Editals.
     * @example
     * // Update many Editals
     * const edital = await prisma.edital.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Editals and only return the `id`
     * const editalWithIdOnly = await prisma.edital.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EditalUpdateManyAndReturnArgs>(args: SelectSubset<T, EditalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Edital.
     * @param {EditalUpsertArgs} args - Arguments to update or create a Edital.
     * @example
     * // Update or create a Edital
     * const edital = await prisma.edital.upsert({
     *   create: {
     *     // ... data to create a Edital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Edital we want to update
     *   }
     * })
     */
    upsert<T extends EditalUpsertArgs>(args: SelectSubset<T, EditalUpsertArgs<ExtArgs>>): Prisma__EditalClient<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Editals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditalCountArgs} args - Arguments to filter Editals to count.
     * @example
     * // Count the number of Editals
     * const count = await prisma.edital.count({
     *   where: {
     *     // ... the filter for the Editals we want to count
     *   }
     * })
    **/
    count<T extends EditalCountArgs>(
      args?: Subset<T, EditalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EditalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Edital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EditalAggregateArgs>(args: Subset<T, EditalAggregateArgs>): Prisma.PrismaPromise<GetEditalAggregateType<T>>

    /**
     * Group by Edital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EditalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EditalGroupByArgs['orderBy'] }
        : { orderBy?: EditalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EditalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEditalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Edital model
   */
  readonly fields: EditalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Edital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EditalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disputas<T extends Edital$disputasArgs<ExtArgs> = {}>(args?: Subset<T, Edital$disputasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentosObrigatorios<T extends Edital$documentosObrigatoriosArgs<ExtArgs> = {}>(args?: Subset<T, Edital$documentosObrigatoriosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoObrigatorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lotes<T extends Edital$lotesArgs<ExtArgs> = {}>(args?: Subset<T, Edital$lotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensagensChat<T extends Edital$mensagensChatArgs<ExtArgs> = {}>(args?: Subset<T, Edital$mensagensChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Edital model
   */
  interface EditalFieldRefs {
    readonly id: FieldRef<"Edital", 'String'>
    readonly numero: FieldRef<"Edital", 'String'>
    readonly objeto: FieldRef<"Edital", 'String'>
    readonly modalidade: FieldRef<"Edital", 'String'>
    readonly status: FieldRef<"Edital", 'String'>
    readonly dataAbertura: FieldRef<"Edital", 'DateTime'>
    readonly arquivoPdf: FieldRef<"Edital", 'String'>
    readonly createdAt: FieldRef<"Edital", 'DateTime'>
    readonly updatedAt: FieldRef<"Edital", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Edital findUnique
   */
  export type EditalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edital
     */
    select?: EditalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edital
     */
    omit?: EditalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditalInclude<ExtArgs> | null
    /**
     * Filter, which Edital to fetch.
     */
    where: EditalWhereUniqueInput
  }

  /**
   * Edital findUniqueOrThrow
   */
  export type EditalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edital
     */
    select?: EditalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edital
     */
    omit?: EditalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditalInclude<ExtArgs> | null
    /**
     * Filter, which Edital to fetch.
     */
    where: EditalWhereUniqueInput
  }

  /**
   * Edital findFirst
   */
  export type EditalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edital
     */
    select?: EditalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edital
     */
    omit?: EditalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditalInclude<ExtArgs> | null
    /**
     * Filter, which Edital to fetch.
     */
    where?: EditalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editals to fetch.
     */
    orderBy?: EditalOrderByWithRelationInput | EditalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Editals.
     */
    cursor?: EditalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Editals.
     */
    distinct?: EditalScalarFieldEnum | EditalScalarFieldEnum[]
  }

  /**
   * Edital findFirstOrThrow
   */
  export type EditalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edital
     */
    select?: EditalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edital
     */
    omit?: EditalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditalInclude<ExtArgs> | null
    /**
     * Filter, which Edital to fetch.
     */
    where?: EditalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editals to fetch.
     */
    orderBy?: EditalOrderByWithRelationInput | EditalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Editals.
     */
    cursor?: EditalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Editals.
     */
    distinct?: EditalScalarFieldEnum | EditalScalarFieldEnum[]
  }

  /**
   * Edital findMany
   */
  export type EditalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edital
     */
    select?: EditalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edital
     */
    omit?: EditalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditalInclude<ExtArgs> | null
    /**
     * Filter, which Editals to fetch.
     */
    where?: EditalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editals to fetch.
     */
    orderBy?: EditalOrderByWithRelationInput | EditalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Editals.
     */
    cursor?: EditalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editals.
     */
    skip?: number
    distinct?: EditalScalarFieldEnum | EditalScalarFieldEnum[]
  }

  /**
   * Edital create
   */
  export type EditalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edital
     */
    select?: EditalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edital
     */
    omit?: EditalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditalInclude<ExtArgs> | null
    /**
     * The data needed to create a Edital.
     */
    data: XOR<EditalCreateInput, EditalUncheckedCreateInput>
  }

  /**
   * Edital createMany
   */
  export type EditalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Editals.
     */
    data: EditalCreateManyInput | EditalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Edital createManyAndReturn
   */
  export type EditalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edital
     */
    select?: EditalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edital
     */
    omit?: EditalOmit<ExtArgs> | null
    /**
     * The data used to create many Editals.
     */
    data: EditalCreateManyInput | EditalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Edital update
   */
  export type EditalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edital
     */
    select?: EditalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edital
     */
    omit?: EditalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditalInclude<ExtArgs> | null
    /**
     * The data needed to update a Edital.
     */
    data: XOR<EditalUpdateInput, EditalUncheckedUpdateInput>
    /**
     * Choose, which Edital to update.
     */
    where: EditalWhereUniqueInput
  }

  /**
   * Edital updateMany
   */
  export type EditalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Editals.
     */
    data: XOR<EditalUpdateManyMutationInput, EditalUncheckedUpdateManyInput>
    /**
     * Filter which Editals to update
     */
    where?: EditalWhereInput
    /**
     * Limit how many Editals to update.
     */
    limit?: number
  }

  /**
   * Edital updateManyAndReturn
   */
  export type EditalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edital
     */
    select?: EditalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edital
     */
    omit?: EditalOmit<ExtArgs> | null
    /**
     * The data used to update Editals.
     */
    data: XOR<EditalUpdateManyMutationInput, EditalUncheckedUpdateManyInput>
    /**
     * Filter which Editals to update
     */
    where?: EditalWhereInput
    /**
     * Limit how many Editals to update.
     */
    limit?: number
  }

  /**
   * Edital upsert
   */
  export type EditalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edital
     */
    select?: EditalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edital
     */
    omit?: EditalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditalInclude<ExtArgs> | null
    /**
     * The filter to search for the Edital to update in case it exists.
     */
    where: EditalWhereUniqueInput
    /**
     * In case the Edital found by the `where` argument doesn't exist, create a new Edital with this data.
     */
    create: XOR<EditalCreateInput, EditalUncheckedCreateInput>
    /**
     * In case the Edital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EditalUpdateInput, EditalUncheckedUpdateInput>
  }

  /**
   * Edital delete
   */
  export type EditalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edital
     */
    select?: EditalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edital
     */
    omit?: EditalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditalInclude<ExtArgs> | null
    /**
     * Filter which Edital to delete.
     */
    where: EditalWhereUniqueInput
  }

  /**
   * Edital deleteMany
   */
  export type EditalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Editals to delete
     */
    where?: EditalWhereInput
    /**
     * Limit how many Editals to delete.
     */
    limit?: number
  }

  /**
   * Edital.disputas
   */
  export type Edital$disputasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaInclude<ExtArgs> | null
    where?: DisputaWhereInput
    orderBy?: DisputaOrderByWithRelationInput | DisputaOrderByWithRelationInput[]
    cursor?: DisputaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputaScalarFieldEnum | DisputaScalarFieldEnum[]
  }

  /**
   * Edital.documentosObrigatorios
   */
  export type Edital$documentosObrigatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoObrigatorio
     */
    select?: DocumentoObrigatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoObrigatorio
     */
    omit?: DocumentoObrigatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoObrigatorioInclude<ExtArgs> | null
    where?: DocumentoObrigatorioWhereInput
    orderBy?: DocumentoObrigatorioOrderByWithRelationInput | DocumentoObrigatorioOrderByWithRelationInput[]
    cursor?: DocumentoObrigatorioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoObrigatorioScalarFieldEnum | DocumentoObrigatorioScalarFieldEnum[]
  }

  /**
   * Edital.lotes
   */
  export type Edital$lotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    where?: LoteWhereInput
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    cursor?: LoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Edital.mensagensChat
   */
  export type Edital$mensagensChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
    where?: MensagemChatWhereInput
    orderBy?: MensagemChatOrderByWithRelationInput | MensagemChatOrderByWithRelationInput[]
    cursor?: MensagemChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemChatScalarFieldEnum | MensagemChatScalarFieldEnum[]
  }

  /**
   * Edital without action
   */
  export type EditalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edital
     */
    select?: EditalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edital
     */
    omit?: EditalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditalInclude<ExtArgs> | null
  }


  /**
   * Model Disputa
   */

  export type AggregateDisputa = {
    _count: DisputaCountAggregateOutputType | null
    _avg: DisputaAvgAggregateOutputType | null
    _sum: DisputaSumAggregateOutputType | null
    _min: DisputaMinAggregateOutputType | null
    _max: DisputaMaxAggregateOutputType | null
  }

  export type DisputaAvgAggregateOutputType = {
    tempoRestante: number | null
  }

  export type DisputaSumAggregateOutputType = {
    tempoRestante: number | null
  }

  export type DisputaMinAggregateOutputType = {
    id: string | null
    editalId: string | null
    status: $Enums.DisputaStatus | null
    inicio: Date | null
    fimPrevisto: Date | null
    encerramento: Date | null
    tempoRestante: number | null
  }

  export type DisputaMaxAggregateOutputType = {
    id: string | null
    editalId: string | null
    status: $Enums.DisputaStatus | null
    inicio: Date | null
    fimPrevisto: Date | null
    encerramento: Date | null
    tempoRestante: number | null
  }

  export type DisputaCountAggregateOutputType = {
    id: number
    editalId: number
    status: number
    inicio: number
    fimPrevisto: number
    encerramento: number
    tempoRestante: number
    _all: number
  }


  export type DisputaAvgAggregateInputType = {
    tempoRestante?: true
  }

  export type DisputaSumAggregateInputType = {
    tempoRestante?: true
  }

  export type DisputaMinAggregateInputType = {
    id?: true
    editalId?: true
    status?: true
    inicio?: true
    fimPrevisto?: true
    encerramento?: true
    tempoRestante?: true
  }

  export type DisputaMaxAggregateInputType = {
    id?: true
    editalId?: true
    status?: true
    inicio?: true
    fimPrevisto?: true
    encerramento?: true
    tempoRestante?: true
  }

  export type DisputaCountAggregateInputType = {
    id?: true
    editalId?: true
    status?: true
    inicio?: true
    fimPrevisto?: true
    encerramento?: true
    tempoRestante?: true
    _all?: true
  }

  export type DisputaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disputa to aggregate.
     */
    where?: DisputaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputas to fetch.
     */
    orderBy?: DisputaOrderByWithRelationInput | DisputaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisputaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disputas
    **/
    _count?: true | DisputaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisputaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisputaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisputaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisputaMaxAggregateInputType
  }

  export type GetDisputaAggregateType<T extends DisputaAggregateArgs> = {
        [P in keyof T & keyof AggregateDisputa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisputa[P]>
      : GetScalarType<T[P], AggregateDisputa[P]>
  }




  export type DisputaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputaWhereInput
    orderBy?: DisputaOrderByWithAggregationInput | DisputaOrderByWithAggregationInput[]
    by: DisputaScalarFieldEnum[] | DisputaScalarFieldEnum
    having?: DisputaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisputaCountAggregateInputType | true
    _avg?: DisputaAvgAggregateInputType
    _sum?: DisputaSumAggregateInputType
    _min?: DisputaMinAggregateInputType
    _max?: DisputaMaxAggregateInputType
  }

  export type DisputaGroupByOutputType = {
    id: string
    editalId: string
    status: $Enums.DisputaStatus
    inicio: Date | null
    fimPrevisto: Date | null
    encerramento: Date | null
    tempoRestante: number | null
    _count: DisputaCountAggregateOutputType | null
    _avg: DisputaAvgAggregateOutputType | null
    _sum: DisputaSumAggregateOutputType | null
    _min: DisputaMinAggregateOutputType | null
    _max: DisputaMaxAggregateOutputType | null
  }

  type GetDisputaGroupByPayload<T extends DisputaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisputaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisputaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisputaGroupByOutputType[P]>
            : GetScalarType<T[P], DisputaGroupByOutputType[P]>
        }
      >
    >


  export type DisputaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    editalId?: boolean
    status?: boolean
    inicio?: boolean
    fimPrevisto?: boolean
    encerramento?: boolean
    tempoRestante?: boolean
    edital?: boolean | EditalDefaultArgs<ExtArgs>
    propostas?: boolean | Disputa$propostasArgs<ExtArgs>
    lances?: boolean | Disputa$lancesArgs<ExtArgs>
    documentos?: boolean | Disputa$documentosArgs<ExtArgs>
    mensagensChat?: boolean | Disputa$mensagensChatArgs<ExtArgs>
    logs?: boolean | Disputa$logsArgs<ExtArgs>
    Sessao?: boolean | Disputa$SessaoArgs<ExtArgs>
    _count?: boolean | DisputaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disputa"]>

  export type DisputaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    editalId?: boolean
    status?: boolean
    inicio?: boolean
    fimPrevisto?: boolean
    encerramento?: boolean
    tempoRestante?: boolean
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disputa"]>

  export type DisputaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    editalId?: boolean
    status?: boolean
    inicio?: boolean
    fimPrevisto?: boolean
    encerramento?: boolean
    tempoRestante?: boolean
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disputa"]>

  export type DisputaSelectScalar = {
    id?: boolean
    editalId?: boolean
    status?: boolean
    inicio?: boolean
    fimPrevisto?: boolean
    encerramento?: boolean
    tempoRestante?: boolean
  }

  export type DisputaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "editalId" | "status" | "inicio" | "fimPrevisto" | "encerramento" | "tempoRestante", ExtArgs["result"]["disputa"]>
  export type DisputaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edital?: boolean | EditalDefaultArgs<ExtArgs>
    propostas?: boolean | Disputa$propostasArgs<ExtArgs>
    lances?: boolean | Disputa$lancesArgs<ExtArgs>
    documentos?: boolean | Disputa$documentosArgs<ExtArgs>
    mensagensChat?: boolean | Disputa$mensagensChatArgs<ExtArgs>
    logs?: boolean | Disputa$logsArgs<ExtArgs>
    Sessao?: boolean | Disputa$SessaoArgs<ExtArgs>
    _count?: boolean | DisputaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisputaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }
  export type DisputaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }

  export type $DisputaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disputa"
    objects: {
      edital: Prisma.$EditalPayload<ExtArgs>
      propostas: Prisma.$PropostaPayload<ExtArgs>[]
      lances: Prisma.$LancePayload<ExtArgs>[]
      documentos: Prisma.$DocumentoLicitantePayload<ExtArgs>[]
      mensagensChat: Prisma.$MensagemChatPayload<ExtArgs>[]
      logs: Prisma.$LogAtividadePayload<ExtArgs>[]
      Sessao: Prisma.$SessaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      editalId: string
      status: $Enums.DisputaStatus
      inicio: Date | null
      fimPrevisto: Date | null
      encerramento: Date | null
      tempoRestante: number | null
    }, ExtArgs["result"]["disputa"]>
    composites: {}
  }

  type DisputaGetPayload<S extends boolean | null | undefined | DisputaDefaultArgs> = $Result.GetResult<Prisma.$DisputaPayload, S>

  type DisputaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisputaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisputaCountAggregateInputType | true
    }

  export interface DisputaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disputa'], meta: { name: 'Disputa' } }
    /**
     * Find zero or one Disputa that matches the filter.
     * @param {DisputaFindUniqueArgs} args - Arguments to find a Disputa
     * @example
     * // Get one Disputa
     * const disputa = await prisma.disputa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisputaFindUniqueArgs>(args: SelectSubset<T, DisputaFindUniqueArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disputa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisputaFindUniqueOrThrowArgs} args - Arguments to find a Disputa
     * @example
     * // Get one Disputa
     * const disputa = await prisma.disputa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisputaFindUniqueOrThrowArgs>(args: SelectSubset<T, DisputaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disputa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputaFindFirstArgs} args - Arguments to find a Disputa
     * @example
     * // Get one Disputa
     * const disputa = await prisma.disputa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisputaFindFirstArgs>(args?: SelectSubset<T, DisputaFindFirstArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disputa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputaFindFirstOrThrowArgs} args - Arguments to find a Disputa
     * @example
     * // Get one Disputa
     * const disputa = await prisma.disputa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisputaFindFirstOrThrowArgs>(args?: SelectSubset<T, DisputaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disputas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disputas
     * const disputas = await prisma.disputa.findMany()
     * 
     * // Get first 10 Disputas
     * const disputas = await prisma.disputa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disputaWithIdOnly = await prisma.disputa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisputaFindManyArgs>(args?: SelectSubset<T, DisputaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disputa.
     * @param {DisputaCreateArgs} args - Arguments to create a Disputa.
     * @example
     * // Create one Disputa
     * const Disputa = await prisma.disputa.create({
     *   data: {
     *     // ... data to create a Disputa
     *   }
     * })
     * 
     */
    create<T extends DisputaCreateArgs>(args: SelectSubset<T, DisputaCreateArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disputas.
     * @param {DisputaCreateManyArgs} args - Arguments to create many Disputas.
     * @example
     * // Create many Disputas
     * const disputa = await prisma.disputa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisputaCreateManyArgs>(args?: SelectSubset<T, DisputaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disputas and returns the data saved in the database.
     * @param {DisputaCreateManyAndReturnArgs} args - Arguments to create many Disputas.
     * @example
     * // Create many Disputas
     * const disputa = await prisma.disputa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disputas and only return the `id`
     * const disputaWithIdOnly = await prisma.disputa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisputaCreateManyAndReturnArgs>(args?: SelectSubset<T, DisputaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disputa.
     * @param {DisputaDeleteArgs} args - Arguments to delete one Disputa.
     * @example
     * // Delete one Disputa
     * const Disputa = await prisma.disputa.delete({
     *   where: {
     *     // ... filter to delete one Disputa
     *   }
     * })
     * 
     */
    delete<T extends DisputaDeleteArgs>(args: SelectSubset<T, DisputaDeleteArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disputa.
     * @param {DisputaUpdateArgs} args - Arguments to update one Disputa.
     * @example
     * // Update one Disputa
     * const disputa = await prisma.disputa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisputaUpdateArgs>(args: SelectSubset<T, DisputaUpdateArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disputas.
     * @param {DisputaDeleteManyArgs} args - Arguments to filter Disputas to delete.
     * @example
     * // Delete a few Disputas
     * const { count } = await prisma.disputa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisputaDeleteManyArgs>(args?: SelectSubset<T, DisputaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disputas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disputas
     * const disputa = await prisma.disputa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisputaUpdateManyArgs>(args: SelectSubset<T, DisputaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disputas and returns the data updated in the database.
     * @param {DisputaUpdateManyAndReturnArgs} args - Arguments to update many Disputas.
     * @example
     * // Update many Disputas
     * const disputa = await prisma.disputa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disputas and only return the `id`
     * const disputaWithIdOnly = await prisma.disputa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisputaUpdateManyAndReturnArgs>(args: SelectSubset<T, DisputaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disputa.
     * @param {DisputaUpsertArgs} args - Arguments to update or create a Disputa.
     * @example
     * // Update or create a Disputa
     * const disputa = await prisma.disputa.upsert({
     *   create: {
     *     // ... data to create a Disputa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disputa we want to update
     *   }
     * })
     */
    upsert<T extends DisputaUpsertArgs>(args: SelectSubset<T, DisputaUpsertArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disputas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputaCountArgs} args - Arguments to filter Disputas to count.
     * @example
     * // Count the number of Disputas
     * const count = await prisma.disputa.count({
     *   where: {
     *     // ... the filter for the Disputas we want to count
     *   }
     * })
    **/
    count<T extends DisputaCountArgs>(
      args?: Subset<T, DisputaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisputaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disputa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisputaAggregateArgs>(args: Subset<T, DisputaAggregateArgs>): Prisma.PrismaPromise<GetDisputaAggregateType<T>>

    /**
     * Group by Disputa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisputaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisputaGroupByArgs['orderBy'] }
        : { orderBy?: DisputaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisputaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisputaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disputa model
   */
  readonly fields: DisputaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disputa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisputaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    edital<T extends EditalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EditalDefaultArgs<ExtArgs>>): Prisma__EditalClient<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    propostas<T extends Disputa$propostasArgs<ExtArgs> = {}>(args?: Subset<T, Disputa$propostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lances<T extends Disputa$lancesArgs<ExtArgs> = {}>(args?: Subset<T, Disputa$lancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentos<T extends Disputa$documentosArgs<ExtArgs> = {}>(args?: Subset<T, Disputa$documentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoLicitantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensagensChat<T extends Disputa$mensagensChatArgs<ExtArgs> = {}>(args?: Subset<T, Disputa$mensagensChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Disputa$logsArgs<ExtArgs> = {}>(args?: Subset<T, Disputa$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sessao<T extends Disputa$SessaoArgs<ExtArgs> = {}>(args?: Subset<T, Disputa$SessaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Disputa model
   */
  interface DisputaFieldRefs {
    readonly id: FieldRef<"Disputa", 'String'>
    readonly editalId: FieldRef<"Disputa", 'String'>
    readonly status: FieldRef<"Disputa", 'DisputaStatus'>
    readonly inicio: FieldRef<"Disputa", 'DateTime'>
    readonly fimPrevisto: FieldRef<"Disputa", 'DateTime'>
    readonly encerramento: FieldRef<"Disputa", 'DateTime'>
    readonly tempoRestante: FieldRef<"Disputa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Disputa findUnique
   */
  export type DisputaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaInclude<ExtArgs> | null
    /**
     * Filter, which Disputa to fetch.
     */
    where: DisputaWhereUniqueInput
  }

  /**
   * Disputa findUniqueOrThrow
   */
  export type DisputaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaInclude<ExtArgs> | null
    /**
     * Filter, which Disputa to fetch.
     */
    where: DisputaWhereUniqueInput
  }

  /**
   * Disputa findFirst
   */
  export type DisputaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaInclude<ExtArgs> | null
    /**
     * Filter, which Disputa to fetch.
     */
    where?: DisputaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputas to fetch.
     */
    orderBy?: DisputaOrderByWithRelationInput | DisputaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disputas.
     */
    cursor?: DisputaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disputas.
     */
    distinct?: DisputaScalarFieldEnum | DisputaScalarFieldEnum[]
  }

  /**
   * Disputa findFirstOrThrow
   */
  export type DisputaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaInclude<ExtArgs> | null
    /**
     * Filter, which Disputa to fetch.
     */
    where?: DisputaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputas to fetch.
     */
    orderBy?: DisputaOrderByWithRelationInput | DisputaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disputas.
     */
    cursor?: DisputaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disputas.
     */
    distinct?: DisputaScalarFieldEnum | DisputaScalarFieldEnum[]
  }

  /**
   * Disputa findMany
   */
  export type DisputaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaInclude<ExtArgs> | null
    /**
     * Filter, which Disputas to fetch.
     */
    where?: DisputaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputas to fetch.
     */
    orderBy?: DisputaOrderByWithRelationInput | DisputaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disputas.
     */
    cursor?: DisputaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputas.
     */
    skip?: number
    distinct?: DisputaScalarFieldEnum | DisputaScalarFieldEnum[]
  }

  /**
   * Disputa create
   */
  export type DisputaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaInclude<ExtArgs> | null
    /**
     * The data needed to create a Disputa.
     */
    data: XOR<DisputaCreateInput, DisputaUncheckedCreateInput>
  }

  /**
   * Disputa createMany
   */
  export type DisputaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disputas.
     */
    data: DisputaCreateManyInput | DisputaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disputa createManyAndReturn
   */
  export type DisputaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * The data used to create many Disputas.
     */
    data: DisputaCreateManyInput | DisputaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disputa update
   */
  export type DisputaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaInclude<ExtArgs> | null
    /**
     * The data needed to update a Disputa.
     */
    data: XOR<DisputaUpdateInput, DisputaUncheckedUpdateInput>
    /**
     * Choose, which Disputa to update.
     */
    where: DisputaWhereUniqueInput
  }

  /**
   * Disputa updateMany
   */
  export type DisputaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disputas.
     */
    data: XOR<DisputaUpdateManyMutationInput, DisputaUncheckedUpdateManyInput>
    /**
     * Filter which Disputas to update
     */
    where?: DisputaWhereInput
    /**
     * Limit how many Disputas to update.
     */
    limit?: number
  }

  /**
   * Disputa updateManyAndReturn
   */
  export type DisputaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * The data used to update Disputas.
     */
    data: XOR<DisputaUpdateManyMutationInput, DisputaUncheckedUpdateManyInput>
    /**
     * Filter which Disputas to update
     */
    where?: DisputaWhereInput
    /**
     * Limit how many Disputas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disputa upsert
   */
  export type DisputaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaInclude<ExtArgs> | null
    /**
     * The filter to search for the Disputa to update in case it exists.
     */
    where: DisputaWhereUniqueInput
    /**
     * In case the Disputa found by the `where` argument doesn't exist, create a new Disputa with this data.
     */
    create: XOR<DisputaCreateInput, DisputaUncheckedCreateInput>
    /**
     * In case the Disputa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisputaUpdateInput, DisputaUncheckedUpdateInput>
  }

  /**
   * Disputa delete
   */
  export type DisputaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaInclude<ExtArgs> | null
    /**
     * Filter which Disputa to delete.
     */
    where: DisputaWhereUniqueInput
  }

  /**
   * Disputa deleteMany
   */
  export type DisputaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disputas to delete
     */
    where?: DisputaWhereInput
    /**
     * Limit how many Disputas to delete.
     */
    limit?: number
  }

  /**
   * Disputa.propostas
   */
  export type Disputa$propostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    where?: PropostaWhereInput
    orderBy?: PropostaOrderByWithRelationInput | PropostaOrderByWithRelationInput[]
    cursor?: PropostaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropostaScalarFieldEnum | PropostaScalarFieldEnum[]
  }

  /**
   * Disputa.lances
   */
  export type Disputa$lancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceInclude<ExtArgs> | null
    where?: LanceWhereInput
    orderBy?: LanceOrderByWithRelationInput | LanceOrderByWithRelationInput[]
    cursor?: LanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanceScalarFieldEnum | LanceScalarFieldEnum[]
  }

  /**
   * Disputa.documentos
   */
  export type Disputa$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteInclude<ExtArgs> | null
    where?: DocumentoLicitanteWhereInput
    orderBy?: DocumentoLicitanteOrderByWithRelationInput | DocumentoLicitanteOrderByWithRelationInput[]
    cursor?: DocumentoLicitanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoLicitanteScalarFieldEnum | DocumentoLicitanteScalarFieldEnum[]
  }

  /**
   * Disputa.mensagensChat
   */
  export type Disputa$mensagensChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
    where?: MensagemChatWhereInput
    orderBy?: MensagemChatOrderByWithRelationInput | MensagemChatOrderByWithRelationInput[]
    cursor?: MensagemChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemChatScalarFieldEnum | MensagemChatScalarFieldEnum[]
  }

  /**
   * Disputa.logs
   */
  export type Disputa$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeInclude<ExtArgs> | null
    where?: LogAtividadeWhereInput
    orderBy?: LogAtividadeOrderByWithRelationInput | LogAtividadeOrderByWithRelationInput[]
    cursor?: LogAtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogAtividadeScalarFieldEnum | LogAtividadeScalarFieldEnum[]
  }

  /**
   * Disputa.Sessao
   */
  export type Disputa$SessaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    where?: SessaoWhereInput
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    cursor?: SessaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Disputa without action
   */
  export type DisputaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaInclude<ExtArgs> | null
  }


  /**
   * Model Licitante
   */

  export type AggregateLicitante = {
    _count: LicitanteCountAggregateOutputType | null
    _min: LicitanteMinAggregateOutputType | null
    _max: LicitanteMaxAggregateOutputType | null
  }

  export type LicitanteMinAggregateOutputType = {
    id: string | null
    razaoSocial: string | null
    cnpj: string | null
    tipoEmpresa: $Enums.TipoEmpresa | null
  }

  export type LicitanteMaxAggregateOutputType = {
    id: string | null
    razaoSocial: string | null
    cnpj: string | null
    tipoEmpresa: $Enums.TipoEmpresa | null
  }

  export type LicitanteCountAggregateOutputType = {
    id: number
    razaoSocial: number
    cnpj: number
    tipoEmpresa: number
    _all: number
  }


  export type LicitanteMinAggregateInputType = {
    id?: true
    razaoSocial?: true
    cnpj?: true
    tipoEmpresa?: true
  }

  export type LicitanteMaxAggregateInputType = {
    id?: true
    razaoSocial?: true
    cnpj?: true
    tipoEmpresa?: true
  }

  export type LicitanteCountAggregateInputType = {
    id?: true
    razaoSocial?: true
    cnpj?: true
    tipoEmpresa?: true
    _all?: true
  }

  export type LicitanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licitante to aggregate.
     */
    where?: LicitanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licitantes to fetch.
     */
    orderBy?: LicitanteOrderByWithRelationInput | LicitanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicitanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licitantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licitantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licitantes
    **/
    _count?: true | LicitanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicitanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicitanteMaxAggregateInputType
  }

  export type GetLicitanteAggregateType<T extends LicitanteAggregateArgs> = {
        [P in keyof T & keyof AggregateLicitante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicitante[P]>
      : GetScalarType<T[P], AggregateLicitante[P]>
  }




  export type LicitanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicitanteWhereInput
    orderBy?: LicitanteOrderByWithAggregationInput | LicitanteOrderByWithAggregationInput[]
    by: LicitanteScalarFieldEnum[] | LicitanteScalarFieldEnum
    having?: LicitanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicitanteCountAggregateInputType | true
    _min?: LicitanteMinAggregateInputType
    _max?: LicitanteMaxAggregateInputType
  }

  export type LicitanteGroupByOutputType = {
    id: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    _count: LicitanteCountAggregateOutputType | null
    _min: LicitanteMinAggregateOutputType | null
    _max: LicitanteMaxAggregateOutputType | null
  }

  type GetLicitanteGroupByPayload<T extends LicitanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicitanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicitanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicitanteGroupByOutputType[P]>
            : GetScalarType<T[P], LicitanteGroupByOutputType[P]>
        }
      >
    >


  export type LicitanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razaoSocial?: boolean
    cnpj?: boolean
    tipoEmpresa?: boolean
    usuario?: boolean | Licitante$usuarioArgs<ExtArgs>
    propostas?: boolean | Licitante$propostasArgs<ExtArgs>
    lances?: boolean | Licitante$lancesArgs<ExtArgs>
    documentos?: boolean | Licitante$documentosArgs<ExtArgs>
    sessoes?: boolean | Licitante$sessoesArgs<ExtArgs>
    mensagensChat?: boolean | Licitante$mensagensChatArgs<ExtArgs>
    _count?: boolean | LicitanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licitante"]>

  export type LicitanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razaoSocial?: boolean
    cnpj?: boolean
    tipoEmpresa?: boolean
  }, ExtArgs["result"]["licitante"]>

  export type LicitanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razaoSocial?: boolean
    cnpj?: boolean
    tipoEmpresa?: boolean
  }, ExtArgs["result"]["licitante"]>

  export type LicitanteSelectScalar = {
    id?: boolean
    razaoSocial?: boolean
    cnpj?: boolean
    tipoEmpresa?: boolean
  }

  export type LicitanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "razaoSocial" | "cnpj" | "tipoEmpresa", ExtArgs["result"]["licitante"]>
  export type LicitanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Licitante$usuarioArgs<ExtArgs>
    propostas?: boolean | Licitante$propostasArgs<ExtArgs>
    lances?: boolean | Licitante$lancesArgs<ExtArgs>
    documentos?: boolean | Licitante$documentosArgs<ExtArgs>
    sessoes?: boolean | Licitante$sessoesArgs<ExtArgs>
    mensagensChat?: boolean | Licitante$mensagensChatArgs<ExtArgs>
    _count?: boolean | LicitanteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LicitanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LicitanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LicitantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Licitante"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
      propostas: Prisma.$PropostaPayload<ExtArgs>[]
      lances: Prisma.$LancePayload<ExtArgs>[]
      documentos: Prisma.$DocumentoLicitantePayload<ExtArgs>[]
      sessoes: Prisma.$SessaoPayload<ExtArgs>[]
      mensagensChat: Prisma.$MensagemChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      razaoSocial: string
      cnpj: string
      tipoEmpresa: $Enums.TipoEmpresa
    }, ExtArgs["result"]["licitante"]>
    composites: {}
  }

  type LicitanteGetPayload<S extends boolean | null | undefined | LicitanteDefaultArgs> = $Result.GetResult<Prisma.$LicitantePayload, S>

  type LicitanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicitanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicitanteCountAggregateInputType | true
    }

  export interface LicitanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Licitante'], meta: { name: 'Licitante' } }
    /**
     * Find zero or one Licitante that matches the filter.
     * @param {LicitanteFindUniqueArgs} args - Arguments to find a Licitante
     * @example
     * // Get one Licitante
     * const licitante = await prisma.licitante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicitanteFindUniqueArgs>(args: SelectSubset<T, LicitanteFindUniqueArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Licitante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicitanteFindUniqueOrThrowArgs} args - Arguments to find a Licitante
     * @example
     * // Get one Licitante
     * const licitante = await prisma.licitante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicitanteFindUniqueOrThrowArgs>(args: SelectSubset<T, LicitanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Licitante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicitanteFindFirstArgs} args - Arguments to find a Licitante
     * @example
     * // Get one Licitante
     * const licitante = await prisma.licitante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicitanteFindFirstArgs>(args?: SelectSubset<T, LicitanteFindFirstArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Licitante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicitanteFindFirstOrThrowArgs} args - Arguments to find a Licitante
     * @example
     * // Get one Licitante
     * const licitante = await prisma.licitante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicitanteFindFirstOrThrowArgs>(args?: SelectSubset<T, LicitanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licitantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicitanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licitantes
     * const licitantes = await prisma.licitante.findMany()
     * 
     * // Get first 10 Licitantes
     * const licitantes = await prisma.licitante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licitanteWithIdOnly = await prisma.licitante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicitanteFindManyArgs>(args?: SelectSubset<T, LicitanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Licitante.
     * @param {LicitanteCreateArgs} args - Arguments to create a Licitante.
     * @example
     * // Create one Licitante
     * const Licitante = await prisma.licitante.create({
     *   data: {
     *     // ... data to create a Licitante
     *   }
     * })
     * 
     */
    create<T extends LicitanteCreateArgs>(args: SelectSubset<T, LicitanteCreateArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licitantes.
     * @param {LicitanteCreateManyArgs} args - Arguments to create many Licitantes.
     * @example
     * // Create many Licitantes
     * const licitante = await prisma.licitante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicitanteCreateManyArgs>(args?: SelectSubset<T, LicitanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Licitantes and returns the data saved in the database.
     * @param {LicitanteCreateManyAndReturnArgs} args - Arguments to create many Licitantes.
     * @example
     * // Create many Licitantes
     * const licitante = await prisma.licitante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Licitantes and only return the `id`
     * const licitanteWithIdOnly = await prisma.licitante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicitanteCreateManyAndReturnArgs>(args?: SelectSubset<T, LicitanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Licitante.
     * @param {LicitanteDeleteArgs} args - Arguments to delete one Licitante.
     * @example
     * // Delete one Licitante
     * const Licitante = await prisma.licitante.delete({
     *   where: {
     *     // ... filter to delete one Licitante
     *   }
     * })
     * 
     */
    delete<T extends LicitanteDeleteArgs>(args: SelectSubset<T, LicitanteDeleteArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Licitante.
     * @param {LicitanteUpdateArgs} args - Arguments to update one Licitante.
     * @example
     * // Update one Licitante
     * const licitante = await prisma.licitante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicitanteUpdateArgs>(args: SelectSubset<T, LicitanteUpdateArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licitantes.
     * @param {LicitanteDeleteManyArgs} args - Arguments to filter Licitantes to delete.
     * @example
     * // Delete a few Licitantes
     * const { count } = await prisma.licitante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicitanteDeleteManyArgs>(args?: SelectSubset<T, LicitanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licitantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicitanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licitantes
     * const licitante = await prisma.licitante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicitanteUpdateManyArgs>(args: SelectSubset<T, LicitanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licitantes and returns the data updated in the database.
     * @param {LicitanteUpdateManyAndReturnArgs} args - Arguments to update many Licitantes.
     * @example
     * // Update many Licitantes
     * const licitante = await prisma.licitante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Licitantes and only return the `id`
     * const licitanteWithIdOnly = await prisma.licitante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LicitanteUpdateManyAndReturnArgs>(args: SelectSubset<T, LicitanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Licitante.
     * @param {LicitanteUpsertArgs} args - Arguments to update or create a Licitante.
     * @example
     * // Update or create a Licitante
     * const licitante = await prisma.licitante.upsert({
     *   create: {
     *     // ... data to create a Licitante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Licitante we want to update
     *   }
     * })
     */
    upsert<T extends LicitanteUpsertArgs>(args: SelectSubset<T, LicitanteUpsertArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licitantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicitanteCountArgs} args - Arguments to filter Licitantes to count.
     * @example
     * // Count the number of Licitantes
     * const count = await prisma.licitante.count({
     *   where: {
     *     // ... the filter for the Licitantes we want to count
     *   }
     * })
    **/
    count<T extends LicitanteCountArgs>(
      args?: Subset<T, LicitanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicitanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Licitante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicitanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicitanteAggregateArgs>(args: Subset<T, LicitanteAggregateArgs>): Prisma.PrismaPromise<GetLicitanteAggregateType<T>>

    /**
     * Group by Licitante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicitanteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicitanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicitanteGroupByArgs['orderBy'] }
        : { orderBy?: LicitanteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicitanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicitanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Licitante model
   */
  readonly fields: LicitanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Licitante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicitanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Licitante$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Licitante$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    propostas<T extends Licitante$propostasArgs<ExtArgs> = {}>(args?: Subset<T, Licitante$propostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lances<T extends Licitante$lancesArgs<ExtArgs> = {}>(args?: Subset<T, Licitante$lancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentos<T extends Licitante$documentosArgs<ExtArgs> = {}>(args?: Subset<T, Licitante$documentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoLicitantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessoes<T extends Licitante$sessoesArgs<ExtArgs> = {}>(args?: Subset<T, Licitante$sessoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensagensChat<T extends Licitante$mensagensChatArgs<ExtArgs> = {}>(args?: Subset<T, Licitante$mensagensChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Licitante model
   */
  interface LicitanteFieldRefs {
    readonly id: FieldRef<"Licitante", 'String'>
    readonly razaoSocial: FieldRef<"Licitante", 'String'>
    readonly cnpj: FieldRef<"Licitante", 'String'>
    readonly tipoEmpresa: FieldRef<"Licitante", 'TipoEmpresa'>
  }
    

  // Custom InputTypes
  /**
   * Licitante findUnique
   */
  export type LicitanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicitanteInclude<ExtArgs> | null
    /**
     * Filter, which Licitante to fetch.
     */
    where: LicitanteWhereUniqueInput
  }

  /**
   * Licitante findUniqueOrThrow
   */
  export type LicitanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicitanteInclude<ExtArgs> | null
    /**
     * Filter, which Licitante to fetch.
     */
    where: LicitanteWhereUniqueInput
  }

  /**
   * Licitante findFirst
   */
  export type LicitanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicitanteInclude<ExtArgs> | null
    /**
     * Filter, which Licitante to fetch.
     */
    where?: LicitanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licitantes to fetch.
     */
    orderBy?: LicitanteOrderByWithRelationInput | LicitanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licitantes.
     */
    cursor?: LicitanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licitantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licitantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licitantes.
     */
    distinct?: LicitanteScalarFieldEnum | LicitanteScalarFieldEnum[]
  }

  /**
   * Licitante findFirstOrThrow
   */
  export type LicitanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicitanteInclude<ExtArgs> | null
    /**
     * Filter, which Licitante to fetch.
     */
    where?: LicitanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licitantes to fetch.
     */
    orderBy?: LicitanteOrderByWithRelationInput | LicitanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licitantes.
     */
    cursor?: LicitanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licitantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licitantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licitantes.
     */
    distinct?: LicitanteScalarFieldEnum | LicitanteScalarFieldEnum[]
  }

  /**
   * Licitante findMany
   */
  export type LicitanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicitanteInclude<ExtArgs> | null
    /**
     * Filter, which Licitantes to fetch.
     */
    where?: LicitanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licitantes to fetch.
     */
    orderBy?: LicitanteOrderByWithRelationInput | LicitanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licitantes.
     */
    cursor?: LicitanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licitantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licitantes.
     */
    skip?: number
    distinct?: LicitanteScalarFieldEnum | LicitanteScalarFieldEnum[]
  }

  /**
   * Licitante create
   */
  export type LicitanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicitanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Licitante.
     */
    data: XOR<LicitanteCreateInput, LicitanteUncheckedCreateInput>
  }

  /**
   * Licitante createMany
   */
  export type LicitanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licitantes.
     */
    data: LicitanteCreateManyInput | LicitanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Licitante createManyAndReturn
   */
  export type LicitanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * The data used to create many Licitantes.
     */
    data: LicitanteCreateManyInput | LicitanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Licitante update
   */
  export type LicitanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicitanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Licitante.
     */
    data: XOR<LicitanteUpdateInput, LicitanteUncheckedUpdateInput>
    /**
     * Choose, which Licitante to update.
     */
    where: LicitanteWhereUniqueInput
  }

  /**
   * Licitante updateMany
   */
  export type LicitanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licitantes.
     */
    data: XOR<LicitanteUpdateManyMutationInput, LicitanteUncheckedUpdateManyInput>
    /**
     * Filter which Licitantes to update
     */
    where?: LicitanteWhereInput
    /**
     * Limit how many Licitantes to update.
     */
    limit?: number
  }

  /**
   * Licitante updateManyAndReturn
   */
  export type LicitanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * The data used to update Licitantes.
     */
    data: XOR<LicitanteUpdateManyMutationInput, LicitanteUncheckedUpdateManyInput>
    /**
     * Filter which Licitantes to update
     */
    where?: LicitanteWhereInput
    /**
     * Limit how many Licitantes to update.
     */
    limit?: number
  }

  /**
   * Licitante upsert
   */
  export type LicitanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicitanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Licitante to update in case it exists.
     */
    where: LicitanteWhereUniqueInput
    /**
     * In case the Licitante found by the `where` argument doesn't exist, create a new Licitante with this data.
     */
    create: XOR<LicitanteCreateInput, LicitanteUncheckedCreateInput>
    /**
     * In case the Licitante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicitanteUpdateInput, LicitanteUncheckedUpdateInput>
  }

  /**
   * Licitante delete
   */
  export type LicitanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicitanteInclude<ExtArgs> | null
    /**
     * Filter which Licitante to delete.
     */
    where: LicitanteWhereUniqueInput
  }

  /**
   * Licitante deleteMany
   */
  export type LicitanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licitantes to delete
     */
    where?: LicitanteWhereInput
    /**
     * Limit how many Licitantes to delete.
     */
    limit?: number
  }

  /**
   * Licitante.usuario
   */
  export type Licitante$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Licitante.propostas
   */
  export type Licitante$propostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    where?: PropostaWhereInput
    orderBy?: PropostaOrderByWithRelationInput | PropostaOrderByWithRelationInput[]
    cursor?: PropostaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropostaScalarFieldEnum | PropostaScalarFieldEnum[]
  }

  /**
   * Licitante.lances
   */
  export type Licitante$lancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceInclude<ExtArgs> | null
    where?: LanceWhereInput
    orderBy?: LanceOrderByWithRelationInput | LanceOrderByWithRelationInput[]
    cursor?: LanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanceScalarFieldEnum | LanceScalarFieldEnum[]
  }

  /**
   * Licitante.documentos
   */
  export type Licitante$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteInclude<ExtArgs> | null
    where?: DocumentoLicitanteWhereInput
    orderBy?: DocumentoLicitanteOrderByWithRelationInput | DocumentoLicitanteOrderByWithRelationInput[]
    cursor?: DocumentoLicitanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoLicitanteScalarFieldEnum | DocumentoLicitanteScalarFieldEnum[]
  }

  /**
   * Licitante.sessoes
   */
  export type Licitante$sessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    where?: SessaoWhereInput
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    cursor?: SessaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Licitante.mensagensChat
   */
  export type Licitante$mensagensChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
    where?: MensagemChatWhereInput
    orderBy?: MensagemChatOrderByWithRelationInput | MensagemChatOrderByWithRelationInput[]
    cursor?: MensagemChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemChatScalarFieldEnum | MensagemChatScalarFieldEnum[]
  }

  /**
   * Licitante without action
   */
  export type LicitanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicitanteInclude<ExtArgs> | null
  }


  /**
   * Model Proposta
   */

  export type AggregateProposta = {
    _count: PropostaCountAggregateOutputType | null
    _avg: PropostaAvgAggregateOutputType | null
    _sum: PropostaSumAggregateOutputType | null
    _min: PropostaMinAggregateOutputType | null
    _max: PropostaMaxAggregateOutputType | null
  }

  export type PropostaAvgAggregateOutputType = {
    valorCentavos: number | null
    versao: number | null
  }

  export type PropostaSumAggregateOutputType = {
    valorCentavos: number | null
    versao: number | null
  }

  export type PropostaMinAggregateOutputType = {
    id: string | null
    disputaId: string | null
    licitanteId: string | null
    itemId: string | null
    valorCentavos: number | null
    dataEnvio: Date | null
    arquivo: string | null
    status: $Enums.StatusProposta | null
    observacao: string | null
    versao: number | null
    createdBy: string | null
    updatedBy: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropostaMaxAggregateOutputType = {
    id: string | null
    disputaId: string | null
    licitanteId: string | null
    itemId: string | null
    valorCentavos: number | null
    dataEnvio: Date | null
    arquivo: string | null
    status: $Enums.StatusProposta | null
    observacao: string | null
    versao: number | null
    createdBy: string | null
    updatedBy: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropostaCountAggregateOutputType = {
    id: number
    disputaId: number
    licitanteId: number
    itemId: number
    valorCentavos: number
    dataEnvio: number
    arquivo: number
    status: number
    observacao: number
    versao: number
    createdBy: number
    updatedBy: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropostaAvgAggregateInputType = {
    valorCentavos?: true
    versao?: true
  }

  export type PropostaSumAggregateInputType = {
    valorCentavos?: true
    versao?: true
  }

  export type PropostaMinAggregateInputType = {
    id?: true
    disputaId?: true
    licitanteId?: true
    itemId?: true
    valorCentavos?: true
    dataEnvio?: true
    arquivo?: true
    status?: true
    observacao?: true
    versao?: true
    createdBy?: true
    updatedBy?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropostaMaxAggregateInputType = {
    id?: true
    disputaId?: true
    licitanteId?: true
    itemId?: true
    valorCentavos?: true
    dataEnvio?: true
    arquivo?: true
    status?: true
    observacao?: true
    versao?: true
    createdBy?: true
    updatedBy?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropostaCountAggregateInputType = {
    id?: true
    disputaId?: true
    licitanteId?: true
    itemId?: true
    valorCentavos?: true
    dataEnvio?: true
    arquivo?: true
    status?: true
    observacao?: true
    versao?: true
    createdBy?: true
    updatedBy?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropostaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposta to aggregate.
     */
    where?: PropostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propostas to fetch.
     */
    orderBy?: PropostaOrderByWithRelationInput | PropostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Propostas
    **/
    _count?: true | PropostaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropostaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropostaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropostaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropostaMaxAggregateInputType
  }

  export type GetPropostaAggregateType<T extends PropostaAggregateArgs> = {
        [P in keyof T & keyof AggregateProposta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposta[P]>
      : GetScalarType<T[P], AggregateProposta[P]>
  }




  export type PropostaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaWhereInput
    orderBy?: PropostaOrderByWithAggregationInput | PropostaOrderByWithAggregationInput[]
    by: PropostaScalarFieldEnum[] | PropostaScalarFieldEnum
    having?: PropostaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropostaCountAggregateInputType | true
    _avg?: PropostaAvgAggregateInputType
    _sum?: PropostaSumAggregateInputType
    _min?: PropostaMinAggregateInputType
    _max?: PropostaMaxAggregateInputType
  }

  export type PropostaGroupByOutputType = {
    id: string
    disputaId: string
    licitanteId: string
    itemId: string
    valorCentavos: number
    dataEnvio: Date
    arquivo: string | null
    status: $Enums.StatusProposta
    observacao: string | null
    versao: number
    createdBy: string
    updatedBy: string | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PropostaCountAggregateOutputType | null
    _avg: PropostaAvgAggregateOutputType | null
    _sum: PropostaSumAggregateOutputType | null
    _min: PropostaMinAggregateOutputType | null
    _max: PropostaMaxAggregateOutputType | null
  }

  type GetPropostaGroupByPayload<T extends PropostaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropostaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropostaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropostaGroupByOutputType[P]>
            : GetScalarType<T[P], PropostaGroupByOutputType[P]>
        }
      >
    >


  export type PropostaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    itemId?: boolean
    valorCentavos?: boolean
    dataEnvio?: boolean
    arquivo?: boolean
    status?: boolean
    observacao?: boolean
    versao?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposta"]>

  export type PropostaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    itemId?: boolean
    valorCentavos?: boolean
    dataEnvio?: boolean
    arquivo?: boolean
    status?: boolean
    observacao?: boolean
    versao?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposta"]>

  export type PropostaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    itemId?: boolean
    valorCentavos?: boolean
    dataEnvio?: boolean
    arquivo?: boolean
    status?: boolean
    observacao?: boolean
    versao?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposta"]>

  export type PropostaSelectScalar = {
    id?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    itemId?: boolean
    valorCentavos?: boolean
    dataEnvio?: boolean
    arquivo?: boolean
    status?: boolean
    observacao?: boolean
    versao?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropostaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "disputaId" | "licitanteId" | "itemId" | "valorCentavos" | "dataEnvio" | "arquivo" | "status" | "observacao" | "versao" | "createdBy" | "updatedBy" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["proposta"]>
  export type PropostaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type PropostaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type PropostaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $PropostaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposta"
    objects: {
      disputa: Prisma.$DisputaPayload<ExtArgs>
      licitante: Prisma.$LicitantePayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      disputaId: string
      licitanteId: string
      itemId: string
      valorCentavos: number
      dataEnvio: Date
      arquivo: string | null
      status: $Enums.StatusProposta
      observacao: string | null
      versao: number
      createdBy: string
      updatedBy: string | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["proposta"]>
    composites: {}
  }

  type PropostaGetPayload<S extends boolean | null | undefined | PropostaDefaultArgs> = $Result.GetResult<Prisma.$PropostaPayload, S>

  type PropostaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropostaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropostaCountAggregateInputType | true
    }

  export interface PropostaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposta'], meta: { name: 'Proposta' } }
    /**
     * Find zero or one Proposta that matches the filter.
     * @param {PropostaFindUniqueArgs} args - Arguments to find a Proposta
     * @example
     * // Get one Proposta
     * const proposta = await prisma.proposta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropostaFindUniqueArgs>(args: SelectSubset<T, PropostaFindUniqueArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropostaFindUniqueOrThrowArgs} args - Arguments to find a Proposta
     * @example
     * // Get one Proposta
     * const proposta = await prisma.proposta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropostaFindUniqueOrThrowArgs>(args: SelectSubset<T, PropostaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaFindFirstArgs} args - Arguments to find a Proposta
     * @example
     * // Get one Proposta
     * const proposta = await prisma.proposta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropostaFindFirstArgs>(args?: SelectSubset<T, PropostaFindFirstArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaFindFirstOrThrowArgs} args - Arguments to find a Proposta
     * @example
     * // Get one Proposta
     * const proposta = await prisma.proposta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropostaFindFirstOrThrowArgs>(args?: SelectSubset<T, PropostaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Propostas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Propostas
     * const propostas = await prisma.proposta.findMany()
     * 
     * // Get first 10 Propostas
     * const propostas = await prisma.proposta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propostaWithIdOnly = await prisma.proposta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropostaFindManyArgs>(args?: SelectSubset<T, PropostaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposta.
     * @param {PropostaCreateArgs} args - Arguments to create a Proposta.
     * @example
     * // Create one Proposta
     * const Proposta = await prisma.proposta.create({
     *   data: {
     *     // ... data to create a Proposta
     *   }
     * })
     * 
     */
    create<T extends PropostaCreateArgs>(args: SelectSubset<T, PropostaCreateArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Propostas.
     * @param {PropostaCreateManyArgs} args - Arguments to create many Propostas.
     * @example
     * // Create many Propostas
     * const proposta = await prisma.proposta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropostaCreateManyArgs>(args?: SelectSubset<T, PropostaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Propostas and returns the data saved in the database.
     * @param {PropostaCreateManyAndReturnArgs} args - Arguments to create many Propostas.
     * @example
     * // Create many Propostas
     * const proposta = await prisma.proposta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Propostas and only return the `id`
     * const propostaWithIdOnly = await prisma.proposta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropostaCreateManyAndReturnArgs>(args?: SelectSubset<T, PropostaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proposta.
     * @param {PropostaDeleteArgs} args - Arguments to delete one Proposta.
     * @example
     * // Delete one Proposta
     * const Proposta = await prisma.proposta.delete({
     *   where: {
     *     // ... filter to delete one Proposta
     *   }
     * })
     * 
     */
    delete<T extends PropostaDeleteArgs>(args: SelectSubset<T, PropostaDeleteArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposta.
     * @param {PropostaUpdateArgs} args - Arguments to update one Proposta.
     * @example
     * // Update one Proposta
     * const proposta = await prisma.proposta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropostaUpdateArgs>(args: SelectSubset<T, PropostaUpdateArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Propostas.
     * @param {PropostaDeleteManyArgs} args - Arguments to filter Propostas to delete.
     * @example
     * // Delete a few Propostas
     * const { count } = await prisma.proposta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropostaDeleteManyArgs>(args?: SelectSubset<T, PropostaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Propostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Propostas
     * const proposta = await prisma.proposta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropostaUpdateManyArgs>(args: SelectSubset<T, PropostaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Propostas and returns the data updated in the database.
     * @param {PropostaUpdateManyAndReturnArgs} args - Arguments to update many Propostas.
     * @example
     * // Update many Propostas
     * const proposta = await prisma.proposta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Propostas and only return the `id`
     * const propostaWithIdOnly = await prisma.proposta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropostaUpdateManyAndReturnArgs>(args: SelectSubset<T, PropostaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proposta.
     * @param {PropostaUpsertArgs} args - Arguments to update or create a Proposta.
     * @example
     * // Update or create a Proposta
     * const proposta = await prisma.proposta.upsert({
     *   create: {
     *     // ... data to create a Proposta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposta we want to update
     *   }
     * })
     */
    upsert<T extends PropostaUpsertArgs>(args: SelectSubset<T, PropostaUpsertArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Propostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaCountArgs} args - Arguments to filter Propostas to count.
     * @example
     * // Count the number of Propostas
     * const count = await prisma.proposta.count({
     *   where: {
     *     // ... the filter for the Propostas we want to count
     *   }
     * })
    **/
    count<T extends PropostaCountArgs>(
      args?: Subset<T, PropostaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropostaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropostaAggregateArgs>(args: Subset<T, PropostaAggregateArgs>): Prisma.PrismaPromise<GetPropostaAggregateType<T>>

    /**
     * Group by Proposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropostaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropostaGroupByArgs['orderBy'] }
        : { orderBy?: PropostaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropostaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropostaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposta model
   */
  readonly fields: PropostaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropostaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disputa<T extends DisputaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisputaDefaultArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    licitante<T extends LicitanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicitanteDefaultArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proposta model
   */
  interface PropostaFieldRefs {
    readonly id: FieldRef<"Proposta", 'String'>
    readonly disputaId: FieldRef<"Proposta", 'String'>
    readonly licitanteId: FieldRef<"Proposta", 'String'>
    readonly itemId: FieldRef<"Proposta", 'String'>
    readonly valorCentavos: FieldRef<"Proposta", 'Int'>
    readonly dataEnvio: FieldRef<"Proposta", 'DateTime'>
    readonly arquivo: FieldRef<"Proposta", 'String'>
    readonly status: FieldRef<"Proposta", 'StatusProposta'>
    readonly observacao: FieldRef<"Proposta", 'String'>
    readonly versao: FieldRef<"Proposta", 'Int'>
    readonly createdBy: FieldRef<"Proposta", 'String'>
    readonly updatedBy: FieldRef<"Proposta", 'String'>
    readonly deletedAt: FieldRef<"Proposta", 'DateTime'>
    readonly createdAt: FieldRef<"Proposta", 'DateTime'>
    readonly updatedAt: FieldRef<"Proposta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proposta findUnique
   */
  export type PropostaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * Filter, which Proposta to fetch.
     */
    where: PropostaWhereUniqueInput
  }

  /**
   * Proposta findUniqueOrThrow
   */
  export type PropostaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * Filter, which Proposta to fetch.
     */
    where: PropostaWhereUniqueInput
  }

  /**
   * Proposta findFirst
   */
  export type PropostaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * Filter, which Proposta to fetch.
     */
    where?: PropostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propostas to fetch.
     */
    orderBy?: PropostaOrderByWithRelationInput | PropostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propostas.
     */
    cursor?: PropostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propostas.
     */
    distinct?: PropostaScalarFieldEnum | PropostaScalarFieldEnum[]
  }

  /**
   * Proposta findFirstOrThrow
   */
  export type PropostaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * Filter, which Proposta to fetch.
     */
    where?: PropostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propostas to fetch.
     */
    orderBy?: PropostaOrderByWithRelationInput | PropostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propostas.
     */
    cursor?: PropostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propostas.
     */
    distinct?: PropostaScalarFieldEnum | PropostaScalarFieldEnum[]
  }

  /**
   * Proposta findMany
   */
  export type PropostaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * Filter, which Propostas to fetch.
     */
    where?: PropostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propostas to fetch.
     */
    orderBy?: PropostaOrderByWithRelationInput | PropostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Propostas.
     */
    cursor?: PropostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propostas.
     */
    skip?: number
    distinct?: PropostaScalarFieldEnum | PropostaScalarFieldEnum[]
  }

  /**
   * Proposta create
   */
  export type PropostaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * The data needed to create a Proposta.
     */
    data: XOR<PropostaCreateInput, PropostaUncheckedCreateInput>
  }

  /**
   * Proposta createMany
   */
  export type PropostaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Propostas.
     */
    data: PropostaCreateManyInput | PropostaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposta createManyAndReturn
   */
  export type PropostaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * The data used to create many Propostas.
     */
    data: PropostaCreateManyInput | PropostaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposta update
   */
  export type PropostaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * The data needed to update a Proposta.
     */
    data: XOR<PropostaUpdateInput, PropostaUncheckedUpdateInput>
    /**
     * Choose, which Proposta to update.
     */
    where: PropostaWhereUniqueInput
  }

  /**
   * Proposta updateMany
   */
  export type PropostaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Propostas.
     */
    data: XOR<PropostaUpdateManyMutationInput, PropostaUncheckedUpdateManyInput>
    /**
     * Filter which Propostas to update
     */
    where?: PropostaWhereInput
    /**
     * Limit how many Propostas to update.
     */
    limit?: number
  }

  /**
   * Proposta updateManyAndReturn
   */
  export type PropostaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * The data used to update Propostas.
     */
    data: XOR<PropostaUpdateManyMutationInput, PropostaUncheckedUpdateManyInput>
    /**
     * Filter which Propostas to update
     */
    where?: PropostaWhereInput
    /**
     * Limit how many Propostas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposta upsert
   */
  export type PropostaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * The filter to search for the Proposta to update in case it exists.
     */
    where: PropostaWhereUniqueInput
    /**
     * In case the Proposta found by the `where` argument doesn't exist, create a new Proposta with this data.
     */
    create: XOR<PropostaCreateInput, PropostaUncheckedCreateInput>
    /**
     * In case the Proposta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropostaUpdateInput, PropostaUncheckedUpdateInput>
  }

  /**
   * Proposta delete
   */
  export type PropostaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * Filter which Proposta to delete.
     */
    where: PropostaWhereUniqueInput
  }

  /**
   * Proposta deleteMany
   */
  export type PropostaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Propostas to delete
     */
    where?: PropostaWhereInput
    /**
     * Limit how many Propostas to delete.
     */
    limit?: number
  }

  /**
   * Proposta without action
   */
  export type PropostaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
  }


  /**
   * Model Lance
   */

  export type AggregateLance = {
    _count: LanceCountAggregateOutputType | null
    _avg: LanceAvgAggregateOutputType | null
    _sum: LanceSumAggregateOutputType | null
    _min: LanceMinAggregateOutputType | null
    _max: LanceMaxAggregateOutputType | null
  }

  export type LanceAvgAggregateOutputType = {
    valorCentavos: number | null
  }

  export type LanceSumAggregateOutputType = {
    valorCentavos: number | null
  }

  export type LanceMinAggregateOutputType = {
    id: string | null
    disputaId: string | null
    licitanteId: string | null
    valorCentavos: number | null
    horario: Date | null
    ip: string | null
    userAgent: string | null
  }

  export type LanceMaxAggregateOutputType = {
    id: string | null
    disputaId: string | null
    licitanteId: string | null
    valorCentavos: number | null
    horario: Date | null
    ip: string | null
    userAgent: string | null
  }

  export type LanceCountAggregateOutputType = {
    id: number
    disputaId: number
    licitanteId: number
    valorCentavos: number
    horario: number
    ip: number
    userAgent: number
    _all: number
  }


  export type LanceAvgAggregateInputType = {
    valorCentavos?: true
  }

  export type LanceSumAggregateInputType = {
    valorCentavos?: true
  }

  export type LanceMinAggregateInputType = {
    id?: true
    disputaId?: true
    licitanteId?: true
    valorCentavos?: true
    horario?: true
    ip?: true
    userAgent?: true
  }

  export type LanceMaxAggregateInputType = {
    id?: true
    disputaId?: true
    licitanteId?: true
    valorCentavos?: true
    horario?: true
    ip?: true
    userAgent?: true
  }

  export type LanceCountAggregateInputType = {
    id?: true
    disputaId?: true
    licitanteId?: true
    valorCentavos?: true
    horario?: true
    ip?: true
    userAgent?: true
    _all?: true
  }

  export type LanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lance to aggregate.
     */
    where?: LanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lances to fetch.
     */
    orderBy?: LanceOrderByWithRelationInput | LanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lances
    **/
    _count?: true | LanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanceMaxAggregateInputType
  }

  export type GetLanceAggregateType<T extends LanceAggregateArgs> = {
        [P in keyof T & keyof AggregateLance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLance[P]>
      : GetScalarType<T[P], AggregateLance[P]>
  }




  export type LanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanceWhereInput
    orderBy?: LanceOrderByWithAggregationInput | LanceOrderByWithAggregationInput[]
    by: LanceScalarFieldEnum[] | LanceScalarFieldEnum
    having?: LanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanceCountAggregateInputType | true
    _avg?: LanceAvgAggregateInputType
    _sum?: LanceSumAggregateInputType
    _min?: LanceMinAggregateInputType
    _max?: LanceMaxAggregateInputType
  }

  export type LanceGroupByOutputType = {
    id: string
    disputaId: string
    licitanteId: string
    valorCentavos: number
    horario: Date
    ip: string | null
    userAgent: string | null
    _count: LanceCountAggregateOutputType | null
    _avg: LanceAvgAggregateOutputType | null
    _sum: LanceSumAggregateOutputType | null
    _min: LanceMinAggregateOutputType | null
    _max: LanceMaxAggregateOutputType | null
  }

  type GetLanceGroupByPayload<T extends LanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanceGroupByOutputType[P]>
            : GetScalarType<T[P], LanceGroupByOutputType[P]>
        }
      >
    >


  export type LanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    valorCentavos?: boolean
    horario?: boolean
    ip?: boolean
    userAgent?: boolean
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lance"]>

  export type LanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    valorCentavos?: boolean
    horario?: boolean
    ip?: boolean
    userAgent?: boolean
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lance"]>

  export type LanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    valorCentavos?: boolean
    horario?: boolean
    ip?: boolean
    userAgent?: boolean
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lance"]>

  export type LanceSelectScalar = {
    id?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    valorCentavos?: boolean
    horario?: boolean
    ip?: boolean
    userAgent?: boolean
  }

  export type LanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "disputaId" | "licitanteId" | "valorCentavos" | "horario" | "ip" | "userAgent", ExtArgs["result"]["lance"]>
  export type LanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
  }
  export type LanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
  }
  export type LanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
  }

  export type $LancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lance"
    objects: {
      disputa: Prisma.$DisputaPayload<ExtArgs>
      licitante: Prisma.$LicitantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      disputaId: string
      licitanteId: string
      valorCentavos: number
      horario: Date
      ip: string | null
      userAgent: string | null
    }, ExtArgs["result"]["lance"]>
    composites: {}
  }

  type LanceGetPayload<S extends boolean | null | undefined | LanceDefaultArgs> = $Result.GetResult<Prisma.$LancePayload, S>

  type LanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanceCountAggregateInputType | true
    }

  export interface LanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lance'], meta: { name: 'Lance' } }
    /**
     * Find zero or one Lance that matches the filter.
     * @param {LanceFindUniqueArgs} args - Arguments to find a Lance
     * @example
     * // Get one Lance
     * const lance = await prisma.lance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanceFindUniqueArgs>(args: SelectSubset<T, LanceFindUniqueArgs<ExtArgs>>): Prisma__LanceClient<$Result.GetResult<Prisma.$LancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanceFindUniqueOrThrowArgs} args - Arguments to find a Lance
     * @example
     * // Get one Lance
     * const lance = await prisma.lance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanceFindUniqueOrThrowArgs>(args: SelectSubset<T, LanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanceClient<$Result.GetResult<Prisma.$LancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanceFindFirstArgs} args - Arguments to find a Lance
     * @example
     * // Get one Lance
     * const lance = await prisma.lance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanceFindFirstArgs>(args?: SelectSubset<T, LanceFindFirstArgs<ExtArgs>>): Prisma__LanceClient<$Result.GetResult<Prisma.$LancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanceFindFirstOrThrowArgs} args - Arguments to find a Lance
     * @example
     * // Get one Lance
     * const lance = await prisma.lance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanceFindFirstOrThrowArgs>(args?: SelectSubset<T, LanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanceClient<$Result.GetResult<Prisma.$LancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lances
     * const lances = await prisma.lance.findMany()
     * 
     * // Get first 10 Lances
     * const lances = await prisma.lance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lanceWithIdOnly = await prisma.lance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanceFindManyArgs>(args?: SelectSubset<T, LanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lance.
     * @param {LanceCreateArgs} args - Arguments to create a Lance.
     * @example
     * // Create one Lance
     * const Lance = await prisma.lance.create({
     *   data: {
     *     // ... data to create a Lance
     *   }
     * })
     * 
     */
    create<T extends LanceCreateArgs>(args: SelectSubset<T, LanceCreateArgs<ExtArgs>>): Prisma__LanceClient<$Result.GetResult<Prisma.$LancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lances.
     * @param {LanceCreateManyArgs} args - Arguments to create many Lances.
     * @example
     * // Create many Lances
     * const lance = await prisma.lance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanceCreateManyArgs>(args?: SelectSubset<T, LanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lances and returns the data saved in the database.
     * @param {LanceCreateManyAndReturnArgs} args - Arguments to create many Lances.
     * @example
     * // Create many Lances
     * const lance = await prisma.lance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lances and only return the `id`
     * const lanceWithIdOnly = await prisma.lance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanceCreateManyAndReturnArgs>(args?: SelectSubset<T, LanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lance.
     * @param {LanceDeleteArgs} args - Arguments to delete one Lance.
     * @example
     * // Delete one Lance
     * const Lance = await prisma.lance.delete({
     *   where: {
     *     // ... filter to delete one Lance
     *   }
     * })
     * 
     */
    delete<T extends LanceDeleteArgs>(args: SelectSubset<T, LanceDeleteArgs<ExtArgs>>): Prisma__LanceClient<$Result.GetResult<Prisma.$LancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lance.
     * @param {LanceUpdateArgs} args - Arguments to update one Lance.
     * @example
     * // Update one Lance
     * const lance = await prisma.lance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanceUpdateArgs>(args: SelectSubset<T, LanceUpdateArgs<ExtArgs>>): Prisma__LanceClient<$Result.GetResult<Prisma.$LancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lances.
     * @param {LanceDeleteManyArgs} args - Arguments to filter Lances to delete.
     * @example
     * // Delete a few Lances
     * const { count } = await prisma.lance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanceDeleteManyArgs>(args?: SelectSubset<T, LanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lances
     * const lance = await prisma.lance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanceUpdateManyArgs>(args: SelectSubset<T, LanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lances and returns the data updated in the database.
     * @param {LanceUpdateManyAndReturnArgs} args - Arguments to update many Lances.
     * @example
     * // Update many Lances
     * const lance = await prisma.lance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lances and only return the `id`
     * const lanceWithIdOnly = await prisma.lance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanceUpdateManyAndReturnArgs>(args: SelectSubset<T, LanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lance.
     * @param {LanceUpsertArgs} args - Arguments to update or create a Lance.
     * @example
     * // Update or create a Lance
     * const lance = await prisma.lance.upsert({
     *   create: {
     *     // ... data to create a Lance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lance we want to update
     *   }
     * })
     */
    upsert<T extends LanceUpsertArgs>(args: SelectSubset<T, LanceUpsertArgs<ExtArgs>>): Prisma__LanceClient<$Result.GetResult<Prisma.$LancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanceCountArgs} args - Arguments to filter Lances to count.
     * @example
     * // Count the number of Lances
     * const count = await prisma.lance.count({
     *   where: {
     *     // ... the filter for the Lances we want to count
     *   }
     * })
    **/
    count<T extends LanceCountArgs>(
      args?: Subset<T, LanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanceAggregateArgs>(args: Subset<T, LanceAggregateArgs>): Prisma.PrismaPromise<GetLanceAggregateType<T>>

    /**
     * Group by Lance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanceGroupByArgs['orderBy'] }
        : { orderBy?: LanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lance model
   */
  readonly fields: LanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disputa<T extends DisputaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisputaDefaultArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    licitante<T extends LicitanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicitanteDefaultArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lance model
   */
  interface LanceFieldRefs {
    readonly id: FieldRef<"Lance", 'String'>
    readonly disputaId: FieldRef<"Lance", 'String'>
    readonly licitanteId: FieldRef<"Lance", 'String'>
    readonly valorCentavos: FieldRef<"Lance", 'Int'>
    readonly horario: FieldRef<"Lance", 'DateTime'>
    readonly ip: FieldRef<"Lance", 'String'>
    readonly userAgent: FieldRef<"Lance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lance findUnique
   */
  export type LanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceInclude<ExtArgs> | null
    /**
     * Filter, which Lance to fetch.
     */
    where: LanceWhereUniqueInput
  }

  /**
   * Lance findUniqueOrThrow
   */
  export type LanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceInclude<ExtArgs> | null
    /**
     * Filter, which Lance to fetch.
     */
    where: LanceWhereUniqueInput
  }

  /**
   * Lance findFirst
   */
  export type LanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceInclude<ExtArgs> | null
    /**
     * Filter, which Lance to fetch.
     */
    where?: LanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lances to fetch.
     */
    orderBy?: LanceOrderByWithRelationInput | LanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lances.
     */
    cursor?: LanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lances.
     */
    distinct?: LanceScalarFieldEnum | LanceScalarFieldEnum[]
  }

  /**
   * Lance findFirstOrThrow
   */
  export type LanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceInclude<ExtArgs> | null
    /**
     * Filter, which Lance to fetch.
     */
    where?: LanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lances to fetch.
     */
    orderBy?: LanceOrderByWithRelationInput | LanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lances.
     */
    cursor?: LanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lances.
     */
    distinct?: LanceScalarFieldEnum | LanceScalarFieldEnum[]
  }

  /**
   * Lance findMany
   */
  export type LanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceInclude<ExtArgs> | null
    /**
     * Filter, which Lances to fetch.
     */
    where?: LanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lances to fetch.
     */
    orderBy?: LanceOrderByWithRelationInput | LanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lances.
     */
    cursor?: LanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lances.
     */
    skip?: number
    distinct?: LanceScalarFieldEnum | LanceScalarFieldEnum[]
  }

  /**
   * Lance create
   */
  export type LanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Lance.
     */
    data: XOR<LanceCreateInput, LanceUncheckedCreateInput>
  }

  /**
   * Lance createMany
   */
  export type LanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lances.
     */
    data: LanceCreateManyInput | LanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lance createManyAndReturn
   */
  export type LanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * The data used to create many Lances.
     */
    data: LanceCreateManyInput | LanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lance update
   */
  export type LanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Lance.
     */
    data: XOR<LanceUpdateInput, LanceUncheckedUpdateInput>
    /**
     * Choose, which Lance to update.
     */
    where: LanceWhereUniqueInput
  }

  /**
   * Lance updateMany
   */
  export type LanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lances.
     */
    data: XOR<LanceUpdateManyMutationInput, LanceUncheckedUpdateManyInput>
    /**
     * Filter which Lances to update
     */
    where?: LanceWhereInput
    /**
     * Limit how many Lances to update.
     */
    limit?: number
  }

  /**
   * Lance updateManyAndReturn
   */
  export type LanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * The data used to update Lances.
     */
    data: XOR<LanceUpdateManyMutationInput, LanceUncheckedUpdateManyInput>
    /**
     * Filter which Lances to update
     */
    where?: LanceWhereInput
    /**
     * Limit how many Lances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lance upsert
   */
  export type LanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Lance to update in case it exists.
     */
    where: LanceWhereUniqueInput
    /**
     * In case the Lance found by the `where` argument doesn't exist, create a new Lance with this data.
     */
    create: XOR<LanceCreateInput, LanceUncheckedCreateInput>
    /**
     * In case the Lance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanceUpdateInput, LanceUncheckedUpdateInput>
  }

  /**
   * Lance delete
   */
  export type LanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceInclude<ExtArgs> | null
    /**
     * Filter which Lance to delete.
     */
    where: LanceWhereUniqueInput
  }

  /**
   * Lance deleteMany
   */
  export type LanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lances to delete
     */
    where?: LanceWhereInput
    /**
     * Limit how many Lances to delete.
     */
    limit?: number
  }

  /**
   * Lance without action
   */
  export type LanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lance
     */
    select?: LanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lance
     */
    omit?: LanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanceInclude<ExtArgs> | null
  }


  /**
   * Model DocumentoLicitante
   */

  export type AggregateDocumentoLicitante = {
    _count: DocumentoLicitanteCountAggregateOutputType | null
    _avg: DocumentoLicitanteAvgAggregateOutputType | null
    _sum: DocumentoLicitanteSumAggregateOutputType | null
    _min: DocumentoLicitanteMinAggregateOutputType | null
    _max: DocumentoLicitanteMaxAggregateOutputType | null
  }

  export type DocumentoLicitanteAvgAggregateOutputType = {
    versao: number | null
  }

  export type DocumentoLicitanteSumAggregateOutputType = {
    versao: number | null
  }

  export type DocumentoLicitanteMinAggregateOutputType = {
    id: string | null
    disputaId: string | null
    licitanteId: string | null
    tipoDocumento: $Enums.TipoDocumento | null
    nomeOriginal: string | null
    descricao: string | null
    arquivoPath: string | null
    dataEnvio: Date | null
    versao: number | null
    valido: boolean | null
    hashDocumento: string | null
    assinaturaBase64: string | null
    assinadoPor: string | null
  }

  export type DocumentoLicitanteMaxAggregateOutputType = {
    id: string | null
    disputaId: string | null
    licitanteId: string | null
    tipoDocumento: $Enums.TipoDocumento | null
    nomeOriginal: string | null
    descricao: string | null
    arquivoPath: string | null
    dataEnvio: Date | null
    versao: number | null
    valido: boolean | null
    hashDocumento: string | null
    assinaturaBase64: string | null
    assinadoPor: string | null
  }

  export type DocumentoLicitanteCountAggregateOutputType = {
    id: number
    disputaId: number
    licitanteId: number
    tipoDocumento: number
    nomeOriginal: number
    descricao: number
    arquivoPath: number
    dataEnvio: number
    versao: number
    valido: number
    hashDocumento: number
    assinaturaBase64: number
    assinadoPor: number
    _all: number
  }


  export type DocumentoLicitanteAvgAggregateInputType = {
    versao?: true
  }

  export type DocumentoLicitanteSumAggregateInputType = {
    versao?: true
  }

  export type DocumentoLicitanteMinAggregateInputType = {
    id?: true
    disputaId?: true
    licitanteId?: true
    tipoDocumento?: true
    nomeOriginal?: true
    descricao?: true
    arquivoPath?: true
    dataEnvio?: true
    versao?: true
    valido?: true
    hashDocumento?: true
    assinaturaBase64?: true
    assinadoPor?: true
  }

  export type DocumentoLicitanteMaxAggregateInputType = {
    id?: true
    disputaId?: true
    licitanteId?: true
    tipoDocumento?: true
    nomeOriginal?: true
    descricao?: true
    arquivoPath?: true
    dataEnvio?: true
    versao?: true
    valido?: true
    hashDocumento?: true
    assinaturaBase64?: true
    assinadoPor?: true
  }

  export type DocumentoLicitanteCountAggregateInputType = {
    id?: true
    disputaId?: true
    licitanteId?: true
    tipoDocumento?: true
    nomeOriginal?: true
    descricao?: true
    arquivoPath?: true
    dataEnvio?: true
    versao?: true
    valido?: true
    hashDocumento?: true
    assinaturaBase64?: true
    assinadoPor?: true
    _all?: true
  }

  export type DocumentoLicitanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentoLicitante to aggregate.
     */
    where?: DocumentoLicitanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoLicitantes to fetch.
     */
    orderBy?: DocumentoLicitanteOrderByWithRelationInput | DocumentoLicitanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentoLicitanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoLicitantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoLicitantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentoLicitantes
    **/
    _count?: true | DocumentoLicitanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentoLicitanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentoLicitanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentoLicitanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentoLicitanteMaxAggregateInputType
  }

  export type GetDocumentoLicitanteAggregateType<T extends DocumentoLicitanteAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentoLicitante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentoLicitante[P]>
      : GetScalarType<T[P], AggregateDocumentoLicitante[P]>
  }




  export type DocumentoLicitanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoLicitanteWhereInput
    orderBy?: DocumentoLicitanteOrderByWithAggregationInput | DocumentoLicitanteOrderByWithAggregationInput[]
    by: DocumentoLicitanteScalarFieldEnum[] | DocumentoLicitanteScalarFieldEnum
    having?: DocumentoLicitanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentoLicitanteCountAggregateInputType | true
    _avg?: DocumentoLicitanteAvgAggregateInputType
    _sum?: DocumentoLicitanteSumAggregateInputType
    _min?: DocumentoLicitanteMinAggregateInputType
    _max?: DocumentoLicitanteMaxAggregateInputType
  }

  export type DocumentoLicitanteGroupByOutputType = {
    id: string
    disputaId: string
    licitanteId: string
    tipoDocumento: $Enums.TipoDocumento
    nomeOriginal: string
    descricao: string | null
    arquivoPath: string
    dataEnvio: Date
    versao: number
    valido: boolean
    hashDocumento: string | null
    assinaturaBase64: string | null
    assinadoPor: string | null
    _count: DocumentoLicitanteCountAggregateOutputType | null
    _avg: DocumentoLicitanteAvgAggregateOutputType | null
    _sum: DocumentoLicitanteSumAggregateOutputType | null
    _min: DocumentoLicitanteMinAggregateOutputType | null
    _max: DocumentoLicitanteMaxAggregateOutputType | null
  }

  type GetDocumentoLicitanteGroupByPayload<T extends DocumentoLicitanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentoLicitanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentoLicitanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentoLicitanteGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentoLicitanteGroupByOutputType[P]>
        }
      >
    >


  export type DocumentoLicitanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    tipoDocumento?: boolean
    nomeOriginal?: boolean
    descricao?: boolean
    arquivoPath?: boolean
    dataEnvio?: boolean
    versao?: boolean
    valido?: boolean
    hashDocumento?: boolean
    assinaturaBase64?: boolean
    assinadoPor?: boolean
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentoLicitante"]>

  export type DocumentoLicitanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    tipoDocumento?: boolean
    nomeOriginal?: boolean
    descricao?: boolean
    arquivoPath?: boolean
    dataEnvio?: boolean
    versao?: boolean
    valido?: boolean
    hashDocumento?: boolean
    assinaturaBase64?: boolean
    assinadoPor?: boolean
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentoLicitante"]>

  export type DocumentoLicitanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    tipoDocumento?: boolean
    nomeOriginal?: boolean
    descricao?: boolean
    arquivoPath?: boolean
    dataEnvio?: boolean
    versao?: boolean
    valido?: boolean
    hashDocumento?: boolean
    assinaturaBase64?: boolean
    assinadoPor?: boolean
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentoLicitante"]>

  export type DocumentoLicitanteSelectScalar = {
    id?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    tipoDocumento?: boolean
    nomeOriginal?: boolean
    descricao?: boolean
    arquivoPath?: boolean
    dataEnvio?: boolean
    versao?: boolean
    valido?: boolean
    hashDocumento?: boolean
    assinaturaBase64?: boolean
    assinadoPor?: boolean
  }

  export type DocumentoLicitanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "disputaId" | "licitanteId" | "tipoDocumento" | "nomeOriginal" | "descricao" | "arquivoPath" | "dataEnvio" | "versao" | "valido" | "hashDocumento" | "assinaturaBase64" | "assinadoPor", ExtArgs["result"]["documentoLicitante"]>
  export type DocumentoLicitanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
  }
  export type DocumentoLicitanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
  }
  export type DocumentoLicitanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
  }

  export type $DocumentoLicitantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentoLicitante"
    objects: {
      disputa: Prisma.$DisputaPayload<ExtArgs>
      licitante: Prisma.$LicitantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      disputaId: string
      licitanteId: string
      tipoDocumento: $Enums.TipoDocumento
      nomeOriginal: string
      descricao: string | null
      arquivoPath: string
      dataEnvio: Date
      versao: number
      valido: boolean
      hashDocumento: string | null
      assinaturaBase64: string | null
      assinadoPor: string | null
    }, ExtArgs["result"]["documentoLicitante"]>
    composites: {}
  }

  type DocumentoLicitanteGetPayload<S extends boolean | null | undefined | DocumentoLicitanteDefaultArgs> = $Result.GetResult<Prisma.$DocumentoLicitantePayload, S>

  type DocumentoLicitanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentoLicitanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentoLicitanteCountAggregateInputType | true
    }

  export interface DocumentoLicitanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentoLicitante'], meta: { name: 'DocumentoLicitante' } }
    /**
     * Find zero or one DocumentoLicitante that matches the filter.
     * @param {DocumentoLicitanteFindUniqueArgs} args - Arguments to find a DocumentoLicitante
     * @example
     * // Get one DocumentoLicitante
     * const documentoLicitante = await prisma.documentoLicitante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentoLicitanteFindUniqueArgs>(args: SelectSubset<T, DocumentoLicitanteFindUniqueArgs<ExtArgs>>): Prisma__DocumentoLicitanteClient<$Result.GetResult<Prisma.$DocumentoLicitantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentoLicitante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentoLicitanteFindUniqueOrThrowArgs} args - Arguments to find a DocumentoLicitante
     * @example
     * // Get one DocumentoLicitante
     * const documentoLicitante = await prisma.documentoLicitante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentoLicitanteFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentoLicitanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentoLicitanteClient<$Result.GetResult<Prisma.$DocumentoLicitantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentoLicitante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoLicitanteFindFirstArgs} args - Arguments to find a DocumentoLicitante
     * @example
     * // Get one DocumentoLicitante
     * const documentoLicitante = await prisma.documentoLicitante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentoLicitanteFindFirstArgs>(args?: SelectSubset<T, DocumentoLicitanteFindFirstArgs<ExtArgs>>): Prisma__DocumentoLicitanteClient<$Result.GetResult<Prisma.$DocumentoLicitantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentoLicitante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoLicitanteFindFirstOrThrowArgs} args - Arguments to find a DocumentoLicitante
     * @example
     * // Get one DocumentoLicitante
     * const documentoLicitante = await prisma.documentoLicitante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentoLicitanteFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentoLicitanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentoLicitanteClient<$Result.GetResult<Prisma.$DocumentoLicitantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentoLicitantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoLicitanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentoLicitantes
     * const documentoLicitantes = await prisma.documentoLicitante.findMany()
     * 
     * // Get first 10 DocumentoLicitantes
     * const documentoLicitantes = await prisma.documentoLicitante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentoLicitanteWithIdOnly = await prisma.documentoLicitante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentoLicitanteFindManyArgs>(args?: SelectSubset<T, DocumentoLicitanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoLicitantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentoLicitante.
     * @param {DocumentoLicitanteCreateArgs} args - Arguments to create a DocumentoLicitante.
     * @example
     * // Create one DocumentoLicitante
     * const DocumentoLicitante = await prisma.documentoLicitante.create({
     *   data: {
     *     // ... data to create a DocumentoLicitante
     *   }
     * })
     * 
     */
    create<T extends DocumentoLicitanteCreateArgs>(args: SelectSubset<T, DocumentoLicitanteCreateArgs<ExtArgs>>): Prisma__DocumentoLicitanteClient<$Result.GetResult<Prisma.$DocumentoLicitantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentoLicitantes.
     * @param {DocumentoLicitanteCreateManyArgs} args - Arguments to create many DocumentoLicitantes.
     * @example
     * // Create many DocumentoLicitantes
     * const documentoLicitante = await prisma.documentoLicitante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentoLicitanteCreateManyArgs>(args?: SelectSubset<T, DocumentoLicitanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentoLicitantes and returns the data saved in the database.
     * @param {DocumentoLicitanteCreateManyAndReturnArgs} args - Arguments to create many DocumentoLicitantes.
     * @example
     * // Create many DocumentoLicitantes
     * const documentoLicitante = await prisma.documentoLicitante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentoLicitantes and only return the `id`
     * const documentoLicitanteWithIdOnly = await prisma.documentoLicitante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentoLicitanteCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentoLicitanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoLicitantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentoLicitante.
     * @param {DocumentoLicitanteDeleteArgs} args - Arguments to delete one DocumentoLicitante.
     * @example
     * // Delete one DocumentoLicitante
     * const DocumentoLicitante = await prisma.documentoLicitante.delete({
     *   where: {
     *     // ... filter to delete one DocumentoLicitante
     *   }
     * })
     * 
     */
    delete<T extends DocumentoLicitanteDeleteArgs>(args: SelectSubset<T, DocumentoLicitanteDeleteArgs<ExtArgs>>): Prisma__DocumentoLicitanteClient<$Result.GetResult<Prisma.$DocumentoLicitantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentoLicitante.
     * @param {DocumentoLicitanteUpdateArgs} args - Arguments to update one DocumentoLicitante.
     * @example
     * // Update one DocumentoLicitante
     * const documentoLicitante = await prisma.documentoLicitante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentoLicitanteUpdateArgs>(args: SelectSubset<T, DocumentoLicitanteUpdateArgs<ExtArgs>>): Prisma__DocumentoLicitanteClient<$Result.GetResult<Prisma.$DocumentoLicitantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentoLicitantes.
     * @param {DocumentoLicitanteDeleteManyArgs} args - Arguments to filter DocumentoLicitantes to delete.
     * @example
     * // Delete a few DocumentoLicitantes
     * const { count } = await prisma.documentoLicitante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentoLicitanteDeleteManyArgs>(args?: SelectSubset<T, DocumentoLicitanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentoLicitantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoLicitanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentoLicitantes
     * const documentoLicitante = await prisma.documentoLicitante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentoLicitanteUpdateManyArgs>(args: SelectSubset<T, DocumentoLicitanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentoLicitantes and returns the data updated in the database.
     * @param {DocumentoLicitanteUpdateManyAndReturnArgs} args - Arguments to update many DocumentoLicitantes.
     * @example
     * // Update many DocumentoLicitantes
     * const documentoLicitante = await prisma.documentoLicitante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentoLicitantes and only return the `id`
     * const documentoLicitanteWithIdOnly = await prisma.documentoLicitante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentoLicitanteUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentoLicitanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoLicitantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentoLicitante.
     * @param {DocumentoLicitanteUpsertArgs} args - Arguments to update or create a DocumentoLicitante.
     * @example
     * // Update or create a DocumentoLicitante
     * const documentoLicitante = await prisma.documentoLicitante.upsert({
     *   create: {
     *     // ... data to create a DocumentoLicitante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentoLicitante we want to update
     *   }
     * })
     */
    upsert<T extends DocumentoLicitanteUpsertArgs>(args: SelectSubset<T, DocumentoLicitanteUpsertArgs<ExtArgs>>): Prisma__DocumentoLicitanteClient<$Result.GetResult<Prisma.$DocumentoLicitantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentoLicitantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoLicitanteCountArgs} args - Arguments to filter DocumentoLicitantes to count.
     * @example
     * // Count the number of DocumentoLicitantes
     * const count = await prisma.documentoLicitante.count({
     *   where: {
     *     // ... the filter for the DocumentoLicitantes we want to count
     *   }
     * })
    **/
    count<T extends DocumentoLicitanteCountArgs>(
      args?: Subset<T, DocumentoLicitanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentoLicitanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentoLicitante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoLicitanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentoLicitanteAggregateArgs>(args: Subset<T, DocumentoLicitanteAggregateArgs>): Prisma.PrismaPromise<GetDocumentoLicitanteAggregateType<T>>

    /**
     * Group by DocumentoLicitante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoLicitanteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentoLicitanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentoLicitanteGroupByArgs['orderBy'] }
        : { orderBy?: DocumentoLicitanteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentoLicitanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentoLicitanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentoLicitante model
   */
  readonly fields: DocumentoLicitanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentoLicitante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentoLicitanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disputa<T extends DisputaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisputaDefaultArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    licitante<T extends LicitanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicitanteDefaultArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentoLicitante model
   */
  interface DocumentoLicitanteFieldRefs {
    readonly id: FieldRef<"DocumentoLicitante", 'String'>
    readonly disputaId: FieldRef<"DocumentoLicitante", 'String'>
    readonly licitanteId: FieldRef<"DocumentoLicitante", 'String'>
    readonly tipoDocumento: FieldRef<"DocumentoLicitante", 'TipoDocumento'>
    readonly nomeOriginal: FieldRef<"DocumentoLicitante", 'String'>
    readonly descricao: FieldRef<"DocumentoLicitante", 'String'>
    readonly arquivoPath: FieldRef<"DocumentoLicitante", 'String'>
    readonly dataEnvio: FieldRef<"DocumentoLicitante", 'DateTime'>
    readonly versao: FieldRef<"DocumentoLicitante", 'Int'>
    readonly valido: FieldRef<"DocumentoLicitante", 'Boolean'>
    readonly hashDocumento: FieldRef<"DocumentoLicitante", 'String'>
    readonly assinaturaBase64: FieldRef<"DocumentoLicitante", 'String'>
    readonly assinadoPor: FieldRef<"DocumentoLicitante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DocumentoLicitante findUnique
   */
  export type DocumentoLicitanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoLicitante to fetch.
     */
    where: DocumentoLicitanteWhereUniqueInput
  }

  /**
   * DocumentoLicitante findUniqueOrThrow
   */
  export type DocumentoLicitanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoLicitante to fetch.
     */
    where: DocumentoLicitanteWhereUniqueInput
  }

  /**
   * DocumentoLicitante findFirst
   */
  export type DocumentoLicitanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoLicitante to fetch.
     */
    where?: DocumentoLicitanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoLicitantes to fetch.
     */
    orderBy?: DocumentoLicitanteOrderByWithRelationInput | DocumentoLicitanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentoLicitantes.
     */
    cursor?: DocumentoLicitanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoLicitantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoLicitantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentoLicitantes.
     */
    distinct?: DocumentoLicitanteScalarFieldEnum | DocumentoLicitanteScalarFieldEnum[]
  }

  /**
   * DocumentoLicitante findFirstOrThrow
   */
  export type DocumentoLicitanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoLicitante to fetch.
     */
    where?: DocumentoLicitanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoLicitantes to fetch.
     */
    orderBy?: DocumentoLicitanteOrderByWithRelationInput | DocumentoLicitanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentoLicitantes.
     */
    cursor?: DocumentoLicitanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoLicitantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoLicitantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentoLicitantes.
     */
    distinct?: DocumentoLicitanteScalarFieldEnum | DocumentoLicitanteScalarFieldEnum[]
  }

  /**
   * DocumentoLicitante findMany
   */
  export type DocumentoLicitanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoLicitantes to fetch.
     */
    where?: DocumentoLicitanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoLicitantes to fetch.
     */
    orderBy?: DocumentoLicitanteOrderByWithRelationInput | DocumentoLicitanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentoLicitantes.
     */
    cursor?: DocumentoLicitanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoLicitantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoLicitantes.
     */
    skip?: number
    distinct?: DocumentoLicitanteScalarFieldEnum | DocumentoLicitanteScalarFieldEnum[]
  }

  /**
   * DocumentoLicitante create
   */
  export type DocumentoLicitanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentoLicitante.
     */
    data: XOR<DocumentoLicitanteCreateInput, DocumentoLicitanteUncheckedCreateInput>
  }

  /**
   * DocumentoLicitante createMany
   */
  export type DocumentoLicitanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentoLicitantes.
     */
    data: DocumentoLicitanteCreateManyInput | DocumentoLicitanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentoLicitante createManyAndReturn
   */
  export type DocumentoLicitanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentoLicitantes.
     */
    data: DocumentoLicitanteCreateManyInput | DocumentoLicitanteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentoLicitante update
   */
  export type DocumentoLicitanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentoLicitante.
     */
    data: XOR<DocumentoLicitanteUpdateInput, DocumentoLicitanteUncheckedUpdateInput>
    /**
     * Choose, which DocumentoLicitante to update.
     */
    where: DocumentoLicitanteWhereUniqueInput
  }

  /**
   * DocumentoLicitante updateMany
   */
  export type DocumentoLicitanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentoLicitantes.
     */
    data: XOR<DocumentoLicitanteUpdateManyMutationInput, DocumentoLicitanteUncheckedUpdateManyInput>
    /**
     * Filter which DocumentoLicitantes to update
     */
    where?: DocumentoLicitanteWhereInput
    /**
     * Limit how many DocumentoLicitantes to update.
     */
    limit?: number
  }

  /**
   * DocumentoLicitante updateManyAndReturn
   */
  export type DocumentoLicitanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * The data used to update DocumentoLicitantes.
     */
    data: XOR<DocumentoLicitanteUpdateManyMutationInput, DocumentoLicitanteUncheckedUpdateManyInput>
    /**
     * Filter which DocumentoLicitantes to update
     */
    where?: DocumentoLicitanteWhereInput
    /**
     * Limit how many DocumentoLicitantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentoLicitante upsert
   */
  export type DocumentoLicitanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentoLicitante to update in case it exists.
     */
    where: DocumentoLicitanteWhereUniqueInput
    /**
     * In case the DocumentoLicitante found by the `where` argument doesn't exist, create a new DocumentoLicitante with this data.
     */
    create: XOR<DocumentoLicitanteCreateInput, DocumentoLicitanteUncheckedCreateInput>
    /**
     * In case the DocumentoLicitante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentoLicitanteUpdateInput, DocumentoLicitanteUncheckedUpdateInput>
  }

  /**
   * DocumentoLicitante delete
   */
  export type DocumentoLicitanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteInclude<ExtArgs> | null
    /**
     * Filter which DocumentoLicitante to delete.
     */
    where: DocumentoLicitanteWhereUniqueInput
  }

  /**
   * DocumentoLicitante deleteMany
   */
  export type DocumentoLicitanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentoLicitantes to delete
     */
    where?: DocumentoLicitanteWhereInput
    /**
     * Limit how many DocumentoLicitantes to delete.
     */
    limit?: number
  }

  /**
   * DocumentoLicitante without action
   */
  export type DocumentoLicitanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoLicitante
     */
    select?: DocumentoLicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoLicitante
     */
    omit?: DocumentoLicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoLicitanteInclude<ExtArgs> | null
  }


  /**
   * Model DocumentoObrigatorio
   */

  export type AggregateDocumentoObrigatorio = {
    _count: DocumentoObrigatorioCountAggregateOutputType | null
    _min: DocumentoObrigatorioMinAggregateOutputType | null
    _max: DocumentoObrigatorioMaxAggregateOutputType | null
  }

  export type DocumentoObrigatorioMinAggregateOutputType = {
    id: string | null
    editalId: string | null
    tipoDocumento: $Enums.TipoDocumento | null
    descricao: string | null
  }

  export type DocumentoObrigatorioMaxAggregateOutputType = {
    id: string | null
    editalId: string | null
    tipoDocumento: $Enums.TipoDocumento | null
    descricao: string | null
  }

  export type DocumentoObrigatorioCountAggregateOutputType = {
    id: number
    editalId: number
    tipoDocumento: number
    descricao: number
    _all: number
  }


  export type DocumentoObrigatorioMinAggregateInputType = {
    id?: true
    editalId?: true
    tipoDocumento?: true
    descricao?: true
  }

  export type DocumentoObrigatorioMaxAggregateInputType = {
    id?: true
    editalId?: true
    tipoDocumento?: true
    descricao?: true
  }

  export type DocumentoObrigatorioCountAggregateInputType = {
    id?: true
    editalId?: true
    tipoDocumento?: true
    descricao?: true
    _all?: true
  }

  export type DocumentoObrigatorioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentoObrigatorio to aggregate.
     */
    where?: DocumentoObrigatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoObrigatorios to fetch.
     */
    orderBy?: DocumentoObrigatorioOrderByWithRelationInput | DocumentoObrigatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentoObrigatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoObrigatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoObrigatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentoObrigatorios
    **/
    _count?: true | DocumentoObrigatorioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentoObrigatorioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentoObrigatorioMaxAggregateInputType
  }

  export type GetDocumentoObrigatorioAggregateType<T extends DocumentoObrigatorioAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentoObrigatorio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentoObrigatorio[P]>
      : GetScalarType<T[P], AggregateDocumentoObrigatorio[P]>
  }




  export type DocumentoObrigatorioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoObrigatorioWhereInput
    orderBy?: DocumentoObrigatorioOrderByWithAggregationInput | DocumentoObrigatorioOrderByWithAggregationInput[]
    by: DocumentoObrigatorioScalarFieldEnum[] | DocumentoObrigatorioScalarFieldEnum
    having?: DocumentoObrigatorioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentoObrigatorioCountAggregateInputType | true
    _min?: DocumentoObrigatorioMinAggregateInputType
    _max?: DocumentoObrigatorioMaxAggregateInputType
  }

  export type DocumentoObrigatorioGroupByOutputType = {
    id: string
    editalId: string
    tipoDocumento: $Enums.TipoDocumento
    descricao: string
    _count: DocumentoObrigatorioCountAggregateOutputType | null
    _min: DocumentoObrigatorioMinAggregateOutputType | null
    _max: DocumentoObrigatorioMaxAggregateOutputType | null
  }

  type GetDocumentoObrigatorioGroupByPayload<T extends DocumentoObrigatorioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentoObrigatorioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentoObrigatorioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentoObrigatorioGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentoObrigatorioGroupByOutputType[P]>
        }
      >
    >


  export type DocumentoObrigatorioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    editalId?: boolean
    tipoDocumento?: boolean
    descricao?: boolean
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentoObrigatorio"]>

  export type DocumentoObrigatorioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    editalId?: boolean
    tipoDocumento?: boolean
    descricao?: boolean
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentoObrigatorio"]>

  export type DocumentoObrigatorioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    editalId?: boolean
    tipoDocumento?: boolean
    descricao?: boolean
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentoObrigatorio"]>

  export type DocumentoObrigatorioSelectScalar = {
    id?: boolean
    editalId?: boolean
    tipoDocumento?: boolean
    descricao?: boolean
  }

  export type DocumentoObrigatorioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "editalId" | "tipoDocumento" | "descricao", ExtArgs["result"]["documentoObrigatorio"]>
  export type DocumentoObrigatorioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }
  export type DocumentoObrigatorioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }
  export type DocumentoObrigatorioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }

  export type $DocumentoObrigatorioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentoObrigatorio"
    objects: {
      edital: Prisma.$EditalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      editalId: string
      tipoDocumento: $Enums.TipoDocumento
      descricao: string
    }, ExtArgs["result"]["documentoObrigatorio"]>
    composites: {}
  }

  type DocumentoObrigatorioGetPayload<S extends boolean | null | undefined | DocumentoObrigatorioDefaultArgs> = $Result.GetResult<Prisma.$DocumentoObrigatorioPayload, S>

  type DocumentoObrigatorioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentoObrigatorioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentoObrigatorioCountAggregateInputType | true
    }

  export interface DocumentoObrigatorioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentoObrigatorio'], meta: { name: 'DocumentoObrigatorio' } }
    /**
     * Find zero or one DocumentoObrigatorio that matches the filter.
     * @param {DocumentoObrigatorioFindUniqueArgs} args - Arguments to find a DocumentoObrigatorio
     * @example
     * // Get one DocumentoObrigatorio
     * const documentoObrigatorio = await prisma.documentoObrigatorio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentoObrigatorioFindUniqueArgs>(args: SelectSubset<T, DocumentoObrigatorioFindUniqueArgs<ExtArgs>>): Prisma__DocumentoObrigatorioClient<$Result.GetResult<Prisma.$DocumentoObrigatorioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentoObrigatorio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentoObrigatorioFindUniqueOrThrowArgs} args - Arguments to find a DocumentoObrigatorio
     * @example
     * // Get one DocumentoObrigatorio
     * const documentoObrigatorio = await prisma.documentoObrigatorio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentoObrigatorioFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentoObrigatorioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentoObrigatorioClient<$Result.GetResult<Prisma.$DocumentoObrigatorioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentoObrigatorio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoObrigatorioFindFirstArgs} args - Arguments to find a DocumentoObrigatorio
     * @example
     * // Get one DocumentoObrigatorio
     * const documentoObrigatorio = await prisma.documentoObrigatorio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentoObrigatorioFindFirstArgs>(args?: SelectSubset<T, DocumentoObrigatorioFindFirstArgs<ExtArgs>>): Prisma__DocumentoObrigatorioClient<$Result.GetResult<Prisma.$DocumentoObrigatorioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentoObrigatorio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoObrigatorioFindFirstOrThrowArgs} args - Arguments to find a DocumentoObrigatorio
     * @example
     * // Get one DocumentoObrigatorio
     * const documentoObrigatorio = await prisma.documentoObrigatorio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentoObrigatorioFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentoObrigatorioFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentoObrigatorioClient<$Result.GetResult<Prisma.$DocumentoObrigatorioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentoObrigatorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoObrigatorioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentoObrigatorios
     * const documentoObrigatorios = await prisma.documentoObrigatorio.findMany()
     * 
     * // Get first 10 DocumentoObrigatorios
     * const documentoObrigatorios = await prisma.documentoObrigatorio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentoObrigatorioWithIdOnly = await prisma.documentoObrigatorio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentoObrigatorioFindManyArgs>(args?: SelectSubset<T, DocumentoObrigatorioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoObrigatorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentoObrigatorio.
     * @param {DocumentoObrigatorioCreateArgs} args - Arguments to create a DocumentoObrigatorio.
     * @example
     * // Create one DocumentoObrigatorio
     * const DocumentoObrigatorio = await prisma.documentoObrigatorio.create({
     *   data: {
     *     // ... data to create a DocumentoObrigatorio
     *   }
     * })
     * 
     */
    create<T extends DocumentoObrigatorioCreateArgs>(args: SelectSubset<T, DocumentoObrigatorioCreateArgs<ExtArgs>>): Prisma__DocumentoObrigatorioClient<$Result.GetResult<Prisma.$DocumentoObrigatorioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentoObrigatorios.
     * @param {DocumentoObrigatorioCreateManyArgs} args - Arguments to create many DocumentoObrigatorios.
     * @example
     * // Create many DocumentoObrigatorios
     * const documentoObrigatorio = await prisma.documentoObrigatorio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentoObrigatorioCreateManyArgs>(args?: SelectSubset<T, DocumentoObrigatorioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentoObrigatorios and returns the data saved in the database.
     * @param {DocumentoObrigatorioCreateManyAndReturnArgs} args - Arguments to create many DocumentoObrigatorios.
     * @example
     * // Create many DocumentoObrigatorios
     * const documentoObrigatorio = await prisma.documentoObrigatorio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentoObrigatorios and only return the `id`
     * const documentoObrigatorioWithIdOnly = await prisma.documentoObrigatorio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentoObrigatorioCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentoObrigatorioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoObrigatorioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentoObrigatorio.
     * @param {DocumentoObrigatorioDeleteArgs} args - Arguments to delete one DocumentoObrigatorio.
     * @example
     * // Delete one DocumentoObrigatorio
     * const DocumentoObrigatorio = await prisma.documentoObrigatorio.delete({
     *   where: {
     *     // ... filter to delete one DocumentoObrigatorio
     *   }
     * })
     * 
     */
    delete<T extends DocumentoObrigatorioDeleteArgs>(args: SelectSubset<T, DocumentoObrigatorioDeleteArgs<ExtArgs>>): Prisma__DocumentoObrigatorioClient<$Result.GetResult<Prisma.$DocumentoObrigatorioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentoObrigatorio.
     * @param {DocumentoObrigatorioUpdateArgs} args - Arguments to update one DocumentoObrigatorio.
     * @example
     * // Update one DocumentoObrigatorio
     * const documentoObrigatorio = await prisma.documentoObrigatorio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentoObrigatorioUpdateArgs>(args: SelectSubset<T, DocumentoObrigatorioUpdateArgs<ExtArgs>>): Prisma__DocumentoObrigatorioClient<$Result.GetResult<Prisma.$DocumentoObrigatorioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentoObrigatorios.
     * @param {DocumentoObrigatorioDeleteManyArgs} args - Arguments to filter DocumentoObrigatorios to delete.
     * @example
     * // Delete a few DocumentoObrigatorios
     * const { count } = await prisma.documentoObrigatorio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentoObrigatorioDeleteManyArgs>(args?: SelectSubset<T, DocumentoObrigatorioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentoObrigatorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoObrigatorioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentoObrigatorios
     * const documentoObrigatorio = await prisma.documentoObrigatorio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentoObrigatorioUpdateManyArgs>(args: SelectSubset<T, DocumentoObrigatorioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentoObrigatorios and returns the data updated in the database.
     * @param {DocumentoObrigatorioUpdateManyAndReturnArgs} args - Arguments to update many DocumentoObrigatorios.
     * @example
     * // Update many DocumentoObrigatorios
     * const documentoObrigatorio = await prisma.documentoObrigatorio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentoObrigatorios and only return the `id`
     * const documentoObrigatorioWithIdOnly = await prisma.documentoObrigatorio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentoObrigatorioUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentoObrigatorioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoObrigatorioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentoObrigatorio.
     * @param {DocumentoObrigatorioUpsertArgs} args - Arguments to update or create a DocumentoObrigatorio.
     * @example
     * // Update or create a DocumentoObrigatorio
     * const documentoObrigatorio = await prisma.documentoObrigatorio.upsert({
     *   create: {
     *     // ... data to create a DocumentoObrigatorio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentoObrigatorio we want to update
     *   }
     * })
     */
    upsert<T extends DocumentoObrigatorioUpsertArgs>(args: SelectSubset<T, DocumentoObrigatorioUpsertArgs<ExtArgs>>): Prisma__DocumentoObrigatorioClient<$Result.GetResult<Prisma.$DocumentoObrigatorioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentoObrigatorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoObrigatorioCountArgs} args - Arguments to filter DocumentoObrigatorios to count.
     * @example
     * // Count the number of DocumentoObrigatorios
     * const count = await prisma.documentoObrigatorio.count({
     *   where: {
     *     // ... the filter for the DocumentoObrigatorios we want to count
     *   }
     * })
    **/
    count<T extends DocumentoObrigatorioCountArgs>(
      args?: Subset<T, DocumentoObrigatorioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentoObrigatorioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentoObrigatorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoObrigatorioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentoObrigatorioAggregateArgs>(args: Subset<T, DocumentoObrigatorioAggregateArgs>): Prisma.PrismaPromise<GetDocumentoObrigatorioAggregateType<T>>

    /**
     * Group by DocumentoObrigatorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoObrigatorioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentoObrigatorioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentoObrigatorioGroupByArgs['orderBy'] }
        : { orderBy?: DocumentoObrigatorioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentoObrigatorioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentoObrigatorioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentoObrigatorio model
   */
  readonly fields: DocumentoObrigatorioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentoObrigatorio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentoObrigatorioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    edital<T extends EditalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EditalDefaultArgs<ExtArgs>>): Prisma__EditalClient<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentoObrigatorio model
   */
  interface DocumentoObrigatorioFieldRefs {
    readonly id: FieldRef<"DocumentoObrigatorio", 'String'>
    readonly editalId: FieldRef<"DocumentoObrigatorio", 'String'>
    readonly tipoDocumento: FieldRef<"DocumentoObrigatorio", 'TipoDocumento'>
    readonly descricao: FieldRef<"DocumentoObrigatorio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DocumentoObrigatorio findUnique
   */
  export type DocumentoObrigatorioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoObrigatorio
     */
    select?: DocumentoObrigatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoObrigatorio
     */
    omit?: DocumentoObrigatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoObrigatorioInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoObrigatorio to fetch.
     */
    where: DocumentoObrigatorioWhereUniqueInput
  }

  /**
   * DocumentoObrigatorio findUniqueOrThrow
   */
  export type DocumentoObrigatorioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoObrigatorio
     */
    select?: DocumentoObrigatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoObrigatorio
     */
    omit?: DocumentoObrigatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoObrigatorioInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoObrigatorio to fetch.
     */
    where: DocumentoObrigatorioWhereUniqueInput
  }

  /**
   * DocumentoObrigatorio findFirst
   */
  export type DocumentoObrigatorioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoObrigatorio
     */
    select?: DocumentoObrigatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoObrigatorio
     */
    omit?: DocumentoObrigatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoObrigatorioInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoObrigatorio to fetch.
     */
    where?: DocumentoObrigatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoObrigatorios to fetch.
     */
    orderBy?: DocumentoObrigatorioOrderByWithRelationInput | DocumentoObrigatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentoObrigatorios.
     */
    cursor?: DocumentoObrigatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoObrigatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoObrigatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentoObrigatorios.
     */
    distinct?: DocumentoObrigatorioScalarFieldEnum | DocumentoObrigatorioScalarFieldEnum[]
  }

  /**
   * DocumentoObrigatorio findFirstOrThrow
   */
  export type DocumentoObrigatorioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoObrigatorio
     */
    select?: DocumentoObrigatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoObrigatorio
     */
    omit?: DocumentoObrigatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoObrigatorioInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoObrigatorio to fetch.
     */
    where?: DocumentoObrigatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoObrigatorios to fetch.
     */
    orderBy?: DocumentoObrigatorioOrderByWithRelationInput | DocumentoObrigatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentoObrigatorios.
     */
    cursor?: DocumentoObrigatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoObrigatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoObrigatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentoObrigatorios.
     */
    distinct?: DocumentoObrigatorioScalarFieldEnum | DocumentoObrigatorioScalarFieldEnum[]
  }

  /**
   * DocumentoObrigatorio findMany
   */
  export type DocumentoObrigatorioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoObrigatorio
     */
    select?: DocumentoObrigatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoObrigatorio
     */
    omit?: DocumentoObrigatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoObrigatorioInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoObrigatorios to fetch.
     */
    where?: DocumentoObrigatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoObrigatorios to fetch.
     */
    orderBy?: DocumentoObrigatorioOrderByWithRelationInput | DocumentoObrigatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentoObrigatorios.
     */
    cursor?: DocumentoObrigatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoObrigatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoObrigatorios.
     */
    skip?: number
    distinct?: DocumentoObrigatorioScalarFieldEnum | DocumentoObrigatorioScalarFieldEnum[]
  }

  /**
   * DocumentoObrigatorio create
   */
  export type DocumentoObrigatorioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoObrigatorio
     */
    select?: DocumentoObrigatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoObrigatorio
     */
    omit?: DocumentoObrigatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoObrigatorioInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentoObrigatorio.
     */
    data: XOR<DocumentoObrigatorioCreateInput, DocumentoObrigatorioUncheckedCreateInput>
  }

  /**
   * DocumentoObrigatorio createMany
   */
  export type DocumentoObrigatorioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentoObrigatorios.
     */
    data: DocumentoObrigatorioCreateManyInput | DocumentoObrigatorioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentoObrigatorio createManyAndReturn
   */
  export type DocumentoObrigatorioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoObrigatorio
     */
    select?: DocumentoObrigatorioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoObrigatorio
     */
    omit?: DocumentoObrigatorioOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentoObrigatorios.
     */
    data: DocumentoObrigatorioCreateManyInput | DocumentoObrigatorioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoObrigatorioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentoObrigatorio update
   */
  export type DocumentoObrigatorioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoObrigatorio
     */
    select?: DocumentoObrigatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoObrigatorio
     */
    omit?: DocumentoObrigatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoObrigatorioInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentoObrigatorio.
     */
    data: XOR<DocumentoObrigatorioUpdateInput, DocumentoObrigatorioUncheckedUpdateInput>
    /**
     * Choose, which DocumentoObrigatorio to update.
     */
    where: DocumentoObrigatorioWhereUniqueInput
  }

  /**
   * DocumentoObrigatorio updateMany
   */
  export type DocumentoObrigatorioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentoObrigatorios.
     */
    data: XOR<DocumentoObrigatorioUpdateManyMutationInput, DocumentoObrigatorioUncheckedUpdateManyInput>
    /**
     * Filter which DocumentoObrigatorios to update
     */
    where?: DocumentoObrigatorioWhereInput
    /**
     * Limit how many DocumentoObrigatorios to update.
     */
    limit?: number
  }

  /**
   * DocumentoObrigatorio updateManyAndReturn
   */
  export type DocumentoObrigatorioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoObrigatorio
     */
    select?: DocumentoObrigatorioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoObrigatorio
     */
    omit?: DocumentoObrigatorioOmit<ExtArgs> | null
    /**
     * The data used to update DocumentoObrigatorios.
     */
    data: XOR<DocumentoObrigatorioUpdateManyMutationInput, DocumentoObrigatorioUncheckedUpdateManyInput>
    /**
     * Filter which DocumentoObrigatorios to update
     */
    where?: DocumentoObrigatorioWhereInput
    /**
     * Limit how many DocumentoObrigatorios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoObrigatorioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentoObrigatorio upsert
   */
  export type DocumentoObrigatorioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoObrigatorio
     */
    select?: DocumentoObrigatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoObrigatorio
     */
    omit?: DocumentoObrigatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoObrigatorioInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentoObrigatorio to update in case it exists.
     */
    where: DocumentoObrigatorioWhereUniqueInput
    /**
     * In case the DocumentoObrigatorio found by the `where` argument doesn't exist, create a new DocumentoObrigatorio with this data.
     */
    create: XOR<DocumentoObrigatorioCreateInput, DocumentoObrigatorioUncheckedCreateInput>
    /**
     * In case the DocumentoObrigatorio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentoObrigatorioUpdateInput, DocumentoObrigatorioUncheckedUpdateInput>
  }

  /**
   * DocumentoObrigatorio delete
   */
  export type DocumentoObrigatorioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoObrigatorio
     */
    select?: DocumentoObrigatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoObrigatorio
     */
    omit?: DocumentoObrigatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoObrigatorioInclude<ExtArgs> | null
    /**
     * Filter which DocumentoObrigatorio to delete.
     */
    where: DocumentoObrigatorioWhereUniqueInput
  }

  /**
   * DocumentoObrigatorio deleteMany
   */
  export type DocumentoObrigatorioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentoObrigatorios to delete
     */
    where?: DocumentoObrigatorioWhereInput
    /**
     * Limit how many DocumentoObrigatorios to delete.
     */
    limit?: number
  }

  /**
   * DocumentoObrigatorio without action
   */
  export type DocumentoObrigatorioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoObrigatorio
     */
    select?: DocumentoObrigatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoObrigatorio
     */
    omit?: DocumentoObrigatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoObrigatorioInclude<ExtArgs> | null
  }


  /**
   * Model MensagemChat
   */

  export type AggregateMensagemChat = {
    _count: MensagemChatCountAggregateOutputType | null
    _min: MensagemChatMinAggregateOutputType | null
    _max: MensagemChatMaxAggregateOutputType | null
  }

  export type MensagemChatMinAggregateOutputType = {
    id: string | null
    editalId: string | null
    autorId: string | null
    tipoAutor: $Enums.TipoAutorMensagem | null
    conteudo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    disputaId: string | null
    licitanteId: string | null
  }

  export type MensagemChatMaxAggregateOutputType = {
    id: string | null
    editalId: string | null
    autorId: string | null
    tipoAutor: $Enums.TipoAutorMensagem | null
    conteudo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    disputaId: string | null
    licitanteId: string | null
  }

  export type MensagemChatCountAggregateOutputType = {
    id: number
    editalId: number
    autorId: number
    tipoAutor: number
    conteudo: number
    createdAt: number
    updatedAt: number
    disputaId: number
    licitanteId: number
    _all: number
  }


  export type MensagemChatMinAggregateInputType = {
    id?: true
    editalId?: true
    autorId?: true
    tipoAutor?: true
    conteudo?: true
    createdAt?: true
    updatedAt?: true
    disputaId?: true
    licitanteId?: true
  }

  export type MensagemChatMaxAggregateInputType = {
    id?: true
    editalId?: true
    autorId?: true
    tipoAutor?: true
    conteudo?: true
    createdAt?: true
    updatedAt?: true
    disputaId?: true
    licitanteId?: true
  }

  export type MensagemChatCountAggregateInputType = {
    id?: true
    editalId?: true
    autorId?: true
    tipoAutor?: true
    conteudo?: true
    createdAt?: true
    updatedAt?: true
    disputaId?: true
    licitanteId?: true
    _all?: true
  }

  export type MensagemChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MensagemChat to aggregate.
     */
    where?: MensagemChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemChats to fetch.
     */
    orderBy?: MensagemChatOrderByWithRelationInput | MensagemChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensagemChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MensagemChats
    **/
    _count?: true | MensagemChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensagemChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensagemChatMaxAggregateInputType
  }

  export type GetMensagemChatAggregateType<T extends MensagemChatAggregateArgs> = {
        [P in keyof T & keyof AggregateMensagemChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensagemChat[P]>
      : GetScalarType<T[P], AggregateMensagemChat[P]>
  }




  export type MensagemChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemChatWhereInput
    orderBy?: MensagemChatOrderByWithAggregationInput | MensagemChatOrderByWithAggregationInput[]
    by: MensagemChatScalarFieldEnum[] | MensagemChatScalarFieldEnum
    having?: MensagemChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensagemChatCountAggregateInputType | true
    _min?: MensagemChatMinAggregateInputType
    _max?: MensagemChatMaxAggregateInputType
  }

  export type MensagemChatGroupByOutputType = {
    id: string
    editalId: string
    autorId: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt: Date
    updatedAt: Date
    disputaId: string | null
    licitanteId: string | null
    _count: MensagemChatCountAggregateOutputType | null
    _min: MensagemChatMinAggregateOutputType | null
    _max: MensagemChatMaxAggregateOutputType | null
  }

  type GetMensagemChatGroupByPayload<T extends MensagemChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensagemChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensagemChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensagemChatGroupByOutputType[P]>
            : GetScalarType<T[P], MensagemChatGroupByOutputType[P]>
        }
      >
    >


  export type MensagemChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    editalId?: boolean
    autorId?: boolean
    tipoAutor?: boolean
    conteudo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    edital?: boolean | EditalDefaultArgs<ExtArgs>
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    Disputa?: boolean | MensagemChat$DisputaArgs<ExtArgs>
    Licitante?: boolean | MensagemChat$LicitanteArgs<ExtArgs>
  }, ExtArgs["result"]["mensagemChat"]>

  export type MensagemChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    editalId?: boolean
    autorId?: boolean
    tipoAutor?: boolean
    conteudo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    edital?: boolean | EditalDefaultArgs<ExtArgs>
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    Disputa?: boolean | MensagemChat$DisputaArgs<ExtArgs>
    Licitante?: boolean | MensagemChat$LicitanteArgs<ExtArgs>
  }, ExtArgs["result"]["mensagemChat"]>

  export type MensagemChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    editalId?: boolean
    autorId?: boolean
    tipoAutor?: boolean
    conteudo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disputaId?: boolean
    licitanteId?: boolean
    edital?: boolean | EditalDefaultArgs<ExtArgs>
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    Disputa?: boolean | MensagemChat$DisputaArgs<ExtArgs>
    Licitante?: boolean | MensagemChat$LicitanteArgs<ExtArgs>
  }, ExtArgs["result"]["mensagemChat"]>

  export type MensagemChatSelectScalar = {
    id?: boolean
    editalId?: boolean
    autorId?: boolean
    tipoAutor?: boolean
    conteudo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disputaId?: boolean
    licitanteId?: boolean
  }

  export type MensagemChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "editalId" | "autorId" | "tipoAutor" | "conteudo" | "createdAt" | "updatedAt" | "disputaId" | "licitanteId", ExtArgs["result"]["mensagemChat"]>
  export type MensagemChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edital?: boolean | EditalDefaultArgs<ExtArgs>
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    Disputa?: boolean | MensagemChat$DisputaArgs<ExtArgs>
    Licitante?: boolean | MensagemChat$LicitanteArgs<ExtArgs>
  }
  export type MensagemChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edital?: boolean | EditalDefaultArgs<ExtArgs>
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    Disputa?: boolean | MensagemChat$DisputaArgs<ExtArgs>
    Licitante?: boolean | MensagemChat$LicitanteArgs<ExtArgs>
  }
  export type MensagemChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edital?: boolean | EditalDefaultArgs<ExtArgs>
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    Disputa?: boolean | MensagemChat$DisputaArgs<ExtArgs>
    Licitante?: boolean | MensagemChat$LicitanteArgs<ExtArgs>
  }

  export type $MensagemChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MensagemChat"
    objects: {
      edital: Prisma.$EditalPayload<ExtArgs>
      autor: Prisma.$UsuarioPayload<ExtArgs>
      Disputa: Prisma.$DisputaPayload<ExtArgs> | null
      Licitante: Prisma.$LicitantePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      editalId: string
      autorId: string
      tipoAutor: $Enums.TipoAutorMensagem
      conteudo: string
      createdAt: Date
      updatedAt: Date
      disputaId: string | null
      licitanteId: string | null
    }, ExtArgs["result"]["mensagemChat"]>
    composites: {}
  }

  type MensagemChatGetPayload<S extends boolean | null | undefined | MensagemChatDefaultArgs> = $Result.GetResult<Prisma.$MensagemChatPayload, S>

  type MensagemChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensagemChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensagemChatCountAggregateInputType | true
    }

  export interface MensagemChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MensagemChat'], meta: { name: 'MensagemChat' } }
    /**
     * Find zero or one MensagemChat that matches the filter.
     * @param {MensagemChatFindUniqueArgs} args - Arguments to find a MensagemChat
     * @example
     * // Get one MensagemChat
     * const mensagemChat = await prisma.mensagemChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensagemChatFindUniqueArgs>(args: SelectSubset<T, MensagemChatFindUniqueArgs<ExtArgs>>): Prisma__MensagemChatClient<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MensagemChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensagemChatFindUniqueOrThrowArgs} args - Arguments to find a MensagemChat
     * @example
     * // Get one MensagemChat
     * const mensagemChat = await prisma.mensagemChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensagemChatFindUniqueOrThrowArgs>(args: SelectSubset<T, MensagemChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensagemChatClient<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MensagemChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemChatFindFirstArgs} args - Arguments to find a MensagemChat
     * @example
     * // Get one MensagemChat
     * const mensagemChat = await prisma.mensagemChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensagemChatFindFirstArgs>(args?: SelectSubset<T, MensagemChatFindFirstArgs<ExtArgs>>): Prisma__MensagemChatClient<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MensagemChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemChatFindFirstOrThrowArgs} args - Arguments to find a MensagemChat
     * @example
     * // Get one MensagemChat
     * const mensagemChat = await prisma.mensagemChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensagemChatFindFirstOrThrowArgs>(args?: SelectSubset<T, MensagemChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensagemChatClient<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MensagemChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MensagemChats
     * const mensagemChats = await prisma.mensagemChat.findMany()
     * 
     * // Get first 10 MensagemChats
     * const mensagemChats = await prisma.mensagemChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensagemChatWithIdOnly = await prisma.mensagemChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensagemChatFindManyArgs>(args?: SelectSubset<T, MensagemChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MensagemChat.
     * @param {MensagemChatCreateArgs} args - Arguments to create a MensagemChat.
     * @example
     * // Create one MensagemChat
     * const MensagemChat = await prisma.mensagemChat.create({
     *   data: {
     *     // ... data to create a MensagemChat
     *   }
     * })
     * 
     */
    create<T extends MensagemChatCreateArgs>(args: SelectSubset<T, MensagemChatCreateArgs<ExtArgs>>): Prisma__MensagemChatClient<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MensagemChats.
     * @param {MensagemChatCreateManyArgs} args - Arguments to create many MensagemChats.
     * @example
     * // Create many MensagemChats
     * const mensagemChat = await prisma.mensagemChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensagemChatCreateManyArgs>(args?: SelectSubset<T, MensagemChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MensagemChats and returns the data saved in the database.
     * @param {MensagemChatCreateManyAndReturnArgs} args - Arguments to create many MensagemChats.
     * @example
     * // Create many MensagemChats
     * const mensagemChat = await prisma.mensagemChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MensagemChats and only return the `id`
     * const mensagemChatWithIdOnly = await prisma.mensagemChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensagemChatCreateManyAndReturnArgs>(args?: SelectSubset<T, MensagemChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MensagemChat.
     * @param {MensagemChatDeleteArgs} args - Arguments to delete one MensagemChat.
     * @example
     * // Delete one MensagemChat
     * const MensagemChat = await prisma.mensagemChat.delete({
     *   where: {
     *     // ... filter to delete one MensagemChat
     *   }
     * })
     * 
     */
    delete<T extends MensagemChatDeleteArgs>(args: SelectSubset<T, MensagemChatDeleteArgs<ExtArgs>>): Prisma__MensagemChatClient<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MensagemChat.
     * @param {MensagemChatUpdateArgs} args - Arguments to update one MensagemChat.
     * @example
     * // Update one MensagemChat
     * const mensagemChat = await prisma.mensagemChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensagemChatUpdateArgs>(args: SelectSubset<T, MensagemChatUpdateArgs<ExtArgs>>): Prisma__MensagemChatClient<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MensagemChats.
     * @param {MensagemChatDeleteManyArgs} args - Arguments to filter MensagemChats to delete.
     * @example
     * // Delete a few MensagemChats
     * const { count } = await prisma.mensagemChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensagemChatDeleteManyArgs>(args?: SelectSubset<T, MensagemChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MensagemChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MensagemChats
     * const mensagemChat = await prisma.mensagemChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensagemChatUpdateManyArgs>(args: SelectSubset<T, MensagemChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MensagemChats and returns the data updated in the database.
     * @param {MensagemChatUpdateManyAndReturnArgs} args - Arguments to update many MensagemChats.
     * @example
     * // Update many MensagemChats
     * const mensagemChat = await prisma.mensagemChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MensagemChats and only return the `id`
     * const mensagemChatWithIdOnly = await prisma.mensagemChat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MensagemChatUpdateManyAndReturnArgs>(args: SelectSubset<T, MensagemChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MensagemChat.
     * @param {MensagemChatUpsertArgs} args - Arguments to update or create a MensagemChat.
     * @example
     * // Update or create a MensagemChat
     * const mensagemChat = await prisma.mensagemChat.upsert({
     *   create: {
     *     // ... data to create a MensagemChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MensagemChat we want to update
     *   }
     * })
     */
    upsert<T extends MensagemChatUpsertArgs>(args: SelectSubset<T, MensagemChatUpsertArgs<ExtArgs>>): Prisma__MensagemChatClient<$Result.GetResult<Prisma.$MensagemChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MensagemChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemChatCountArgs} args - Arguments to filter MensagemChats to count.
     * @example
     * // Count the number of MensagemChats
     * const count = await prisma.mensagemChat.count({
     *   where: {
     *     // ... the filter for the MensagemChats we want to count
     *   }
     * })
    **/
    count<T extends MensagemChatCountArgs>(
      args?: Subset<T, MensagemChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensagemChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MensagemChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensagemChatAggregateArgs>(args: Subset<T, MensagemChatAggregateArgs>): Prisma.PrismaPromise<GetMensagemChatAggregateType<T>>

    /**
     * Group by MensagemChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensagemChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensagemChatGroupByArgs['orderBy'] }
        : { orderBy?: MensagemChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensagemChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagemChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MensagemChat model
   */
  readonly fields: MensagemChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MensagemChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensagemChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    edital<T extends EditalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EditalDefaultArgs<ExtArgs>>): Prisma__EditalClient<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    autor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Disputa<T extends MensagemChat$DisputaArgs<ExtArgs> = {}>(args?: Subset<T, MensagemChat$DisputaArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Licitante<T extends MensagemChat$LicitanteArgs<ExtArgs> = {}>(args?: Subset<T, MensagemChat$LicitanteArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MensagemChat model
   */
  interface MensagemChatFieldRefs {
    readonly id: FieldRef<"MensagemChat", 'String'>
    readonly editalId: FieldRef<"MensagemChat", 'String'>
    readonly autorId: FieldRef<"MensagemChat", 'String'>
    readonly tipoAutor: FieldRef<"MensagemChat", 'TipoAutorMensagem'>
    readonly conteudo: FieldRef<"MensagemChat", 'String'>
    readonly createdAt: FieldRef<"MensagemChat", 'DateTime'>
    readonly updatedAt: FieldRef<"MensagemChat", 'DateTime'>
    readonly disputaId: FieldRef<"MensagemChat", 'String'>
    readonly licitanteId: FieldRef<"MensagemChat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MensagemChat findUnique
   */
  export type MensagemChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
    /**
     * Filter, which MensagemChat to fetch.
     */
    where: MensagemChatWhereUniqueInput
  }

  /**
   * MensagemChat findUniqueOrThrow
   */
  export type MensagemChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
    /**
     * Filter, which MensagemChat to fetch.
     */
    where: MensagemChatWhereUniqueInput
  }

  /**
   * MensagemChat findFirst
   */
  export type MensagemChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
    /**
     * Filter, which MensagemChat to fetch.
     */
    where?: MensagemChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemChats to fetch.
     */
    orderBy?: MensagemChatOrderByWithRelationInput | MensagemChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MensagemChats.
     */
    cursor?: MensagemChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MensagemChats.
     */
    distinct?: MensagemChatScalarFieldEnum | MensagemChatScalarFieldEnum[]
  }

  /**
   * MensagemChat findFirstOrThrow
   */
  export type MensagemChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
    /**
     * Filter, which MensagemChat to fetch.
     */
    where?: MensagemChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemChats to fetch.
     */
    orderBy?: MensagemChatOrderByWithRelationInput | MensagemChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MensagemChats.
     */
    cursor?: MensagemChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MensagemChats.
     */
    distinct?: MensagemChatScalarFieldEnum | MensagemChatScalarFieldEnum[]
  }

  /**
   * MensagemChat findMany
   */
  export type MensagemChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
    /**
     * Filter, which MensagemChats to fetch.
     */
    where?: MensagemChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemChats to fetch.
     */
    orderBy?: MensagemChatOrderByWithRelationInput | MensagemChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MensagemChats.
     */
    cursor?: MensagemChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemChats.
     */
    skip?: number
    distinct?: MensagemChatScalarFieldEnum | MensagemChatScalarFieldEnum[]
  }

  /**
   * MensagemChat create
   */
  export type MensagemChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
    /**
     * The data needed to create a MensagemChat.
     */
    data: XOR<MensagemChatCreateInput, MensagemChatUncheckedCreateInput>
  }

  /**
   * MensagemChat createMany
   */
  export type MensagemChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MensagemChats.
     */
    data: MensagemChatCreateManyInput | MensagemChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MensagemChat createManyAndReturn
   */
  export type MensagemChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * The data used to create many MensagemChats.
     */
    data: MensagemChatCreateManyInput | MensagemChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MensagemChat update
   */
  export type MensagemChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
    /**
     * The data needed to update a MensagemChat.
     */
    data: XOR<MensagemChatUpdateInput, MensagemChatUncheckedUpdateInput>
    /**
     * Choose, which MensagemChat to update.
     */
    where: MensagemChatWhereUniqueInput
  }

  /**
   * MensagemChat updateMany
   */
  export type MensagemChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MensagemChats.
     */
    data: XOR<MensagemChatUpdateManyMutationInput, MensagemChatUncheckedUpdateManyInput>
    /**
     * Filter which MensagemChats to update
     */
    where?: MensagemChatWhereInput
    /**
     * Limit how many MensagemChats to update.
     */
    limit?: number
  }

  /**
   * MensagemChat updateManyAndReturn
   */
  export type MensagemChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * The data used to update MensagemChats.
     */
    data: XOR<MensagemChatUpdateManyMutationInput, MensagemChatUncheckedUpdateManyInput>
    /**
     * Filter which MensagemChats to update
     */
    where?: MensagemChatWhereInput
    /**
     * Limit how many MensagemChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MensagemChat upsert
   */
  export type MensagemChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
    /**
     * The filter to search for the MensagemChat to update in case it exists.
     */
    where: MensagemChatWhereUniqueInput
    /**
     * In case the MensagemChat found by the `where` argument doesn't exist, create a new MensagemChat with this data.
     */
    create: XOR<MensagemChatCreateInput, MensagemChatUncheckedCreateInput>
    /**
     * In case the MensagemChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensagemChatUpdateInput, MensagemChatUncheckedUpdateInput>
  }

  /**
   * MensagemChat delete
   */
  export type MensagemChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
    /**
     * Filter which MensagemChat to delete.
     */
    where: MensagemChatWhereUniqueInput
  }

  /**
   * MensagemChat deleteMany
   */
  export type MensagemChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MensagemChats to delete
     */
    where?: MensagemChatWhereInput
    /**
     * Limit how many MensagemChats to delete.
     */
    limit?: number
  }

  /**
   * MensagemChat.Disputa
   */
  export type MensagemChat$DisputaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disputa
     */
    select?: DisputaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disputa
     */
    omit?: DisputaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputaInclude<ExtArgs> | null
    where?: DisputaWhereInput
  }

  /**
   * MensagemChat.Licitante
   */
  export type MensagemChat$LicitanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licitante
     */
    select?: LicitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licitante
     */
    omit?: LicitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicitanteInclude<ExtArgs> | null
    where?: LicitanteWhereInput
  }

  /**
   * MensagemChat without action
   */
  export type MensagemChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemChat
     */
    select?: MensagemChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensagemChat
     */
    omit?: MensagemChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemChatInclude<ExtArgs> | null
  }


  /**
   * Model Sessao
   */

  export type AggregateSessao = {
    _count: SessaoCountAggregateOutputType | null
    _min: SessaoMinAggregateOutputType | null
    _max: SessaoMaxAggregateOutputType | null
  }

  export type SessaoMinAggregateOutputType = {
    id: string | null
    licitanteId: string | null
    disputaId: string | null
    inicio: Date | null
    fim: Date | null
    ip: string | null
    hash: string | null
  }

  export type SessaoMaxAggregateOutputType = {
    id: string | null
    licitanteId: string | null
    disputaId: string | null
    inicio: Date | null
    fim: Date | null
    ip: string | null
    hash: string | null
  }

  export type SessaoCountAggregateOutputType = {
    id: number
    licitanteId: number
    disputaId: number
    inicio: number
    fim: number
    ip: number
    hash: number
    _all: number
  }


  export type SessaoMinAggregateInputType = {
    id?: true
    licitanteId?: true
    disputaId?: true
    inicio?: true
    fim?: true
    ip?: true
    hash?: true
  }

  export type SessaoMaxAggregateInputType = {
    id?: true
    licitanteId?: true
    disputaId?: true
    inicio?: true
    fim?: true
    ip?: true
    hash?: true
  }

  export type SessaoCountAggregateInputType = {
    id?: true
    licitanteId?: true
    disputaId?: true
    inicio?: true
    fim?: true
    ip?: true
    hash?: true
    _all?: true
  }

  export type SessaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessao to aggregate.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessaos
    **/
    _count?: true | SessaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessaoMaxAggregateInputType
  }

  export type GetSessaoAggregateType<T extends SessaoAggregateArgs> = {
        [P in keyof T & keyof AggregateSessao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessao[P]>
      : GetScalarType<T[P], AggregateSessao[P]>
  }




  export type SessaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessaoWhereInput
    orderBy?: SessaoOrderByWithAggregationInput | SessaoOrderByWithAggregationInput[]
    by: SessaoScalarFieldEnum[] | SessaoScalarFieldEnum
    having?: SessaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessaoCountAggregateInputType | true
    _min?: SessaoMinAggregateInputType
    _max?: SessaoMaxAggregateInputType
  }

  export type SessaoGroupByOutputType = {
    id: string
    licitanteId: string
    disputaId: string
    inicio: Date
    fim: Date | null
    ip: string
    hash: string
    _count: SessaoCountAggregateOutputType | null
    _min: SessaoMinAggregateOutputType | null
    _max: SessaoMaxAggregateOutputType | null
  }

  type GetSessaoGroupByPayload<T extends SessaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessaoGroupByOutputType[P]>
            : GetScalarType<T[P], SessaoGroupByOutputType[P]>
        }
      >
    >


  export type SessaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licitanteId?: boolean
    disputaId?: boolean
    inicio?: boolean
    fim?: boolean
    ip?: boolean
    hash?: boolean
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessao"]>

  export type SessaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licitanteId?: boolean
    disputaId?: boolean
    inicio?: boolean
    fim?: boolean
    ip?: boolean
    hash?: boolean
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessao"]>

  export type SessaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licitanteId?: boolean
    disputaId?: boolean
    inicio?: boolean
    fim?: boolean
    ip?: boolean
    hash?: boolean
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessao"]>

  export type SessaoSelectScalar = {
    id?: boolean
    licitanteId?: boolean
    disputaId?: boolean
    inicio?: boolean
    fim?: boolean
    ip?: boolean
    hash?: boolean
  }

  export type SessaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "licitanteId" | "disputaId" | "inicio" | "fim" | "ip" | "hash", ExtArgs["result"]["sessao"]>
  export type SessaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
  }
  export type SessaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
  }
  export type SessaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licitante?: boolean | LicitanteDefaultArgs<ExtArgs>
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
  }

  export type $SessaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessao"
    objects: {
      licitante: Prisma.$LicitantePayload<ExtArgs>
      disputa: Prisma.$DisputaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licitanteId: string
      disputaId: string
      inicio: Date
      fim: Date | null
      ip: string
      hash: string
    }, ExtArgs["result"]["sessao"]>
    composites: {}
  }

  type SessaoGetPayload<S extends boolean | null | undefined | SessaoDefaultArgs> = $Result.GetResult<Prisma.$SessaoPayload, S>

  type SessaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessaoCountAggregateInputType | true
    }

  export interface SessaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessao'], meta: { name: 'Sessao' } }
    /**
     * Find zero or one Sessao that matches the filter.
     * @param {SessaoFindUniqueArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessaoFindUniqueArgs>(args: SelectSubset<T, SessaoFindUniqueArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessaoFindUniqueOrThrowArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessaoFindUniqueOrThrowArgs>(args: SelectSubset<T, SessaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindFirstArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessaoFindFirstArgs>(args?: SelectSubset<T, SessaoFindFirstArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindFirstOrThrowArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessaoFindFirstOrThrowArgs>(args?: SelectSubset<T, SessaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessaos
     * const sessaos = await prisma.sessao.findMany()
     * 
     * // Get first 10 Sessaos
     * const sessaos = await prisma.sessao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessaoWithIdOnly = await prisma.sessao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessaoFindManyArgs>(args?: SelectSubset<T, SessaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessao.
     * @param {SessaoCreateArgs} args - Arguments to create a Sessao.
     * @example
     * // Create one Sessao
     * const Sessao = await prisma.sessao.create({
     *   data: {
     *     // ... data to create a Sessao
     *   }
     * })
     * 
     */
    create<T extends SessaoCreateArgs>(args: SelectSubset<T, SessaoCreateArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessaos.
     * @param {SessaoCreateManyArgs} args - Arguments to create many Sessaos.
     * @example
     * // Create many Sessaos
     * const sessao = await prisma.sessao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessaoCreateManyArgs>(args?: SelectSubset<T, SessaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessaos and returns the data saved in the database.
     * @param {SessaoCreateManyAndReturnArgs} args - Arguments to create many Sessaos.
     * @example
     * // Create many Sessaos
     * const sessao = await prisma.sessao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessaos and only return the `id`
     * const sessaoWithIdOnly = await prisma.sessao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessaoCreateManyAndReturnArgs>(args?: SelectSubset<T, SessaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessao.
     * @param {SessaoDeleteArgs} args - Arguments to delete one Sessao.
     * @example
     * // Delete one Sessao
     * const Sessao = await prisma.sessao.delete({
     *   where: {
     *     // ... filter to delete one Sessao
     *   }
     * })
     * 
     */
    delete<T extends SessaoDeleteArgs>(args: SelectSubset<T, SessaoDeleteArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessao.
     * @param {SessaoUpdateArgs} args - Arguments to update one Sessao.
     * @example
     * // Update one Sessao
     * const sessao = await prisma.sessao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessaoUpdateArgs>(args: SelectSubset<T, SessaoUpdateArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessaos.
     * @param {SessaoDeleteManyArgs} args - Arguments to filter Sessaos to delete.
     * @example
     * // Delete a few Sessaos
     * const { count } = await prisma.sessao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessaoDeleteManyArgs>(args?: SelectSubset<T, SessaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessaos
     * const sessao = await prisma.sessao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessaoUpdateManyArgs>(args: SelectSubset<T, SessaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessaos and returns the data updated in the database.
     * @param {SessaoUpdateManyAndReturnArgs} args - Arguments to update many Sessaos.
     * @example
     * // Update many Sessaos
     * const sessao = await prisma.sessao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessaos and only return the `id`
     * const sessaoWithIdOnly = await prisma.sessao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessaoUpdateManyAndReturnArgs>(args: SelectSubset<T, SessaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessao.
     * @param {SessaoUpsertArgs} args - Arguments to update or create a Sessao.
     * @example
     * // Update or create a Sessao
     * const sessao = await prisma.sessao.upsert({
     *   create: {
     *     // ... data to create a Sessao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessao we want to update
     *   }
     * })
     */
    upsert<T extends SessaoUpsertArgs>(args: SelectSubset<T, SessaoUpsertArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoCountArgs} args - Arguments to filter Sessaos to count.
     * @example
     * // Count the number of Sessaos
     * const count = await prisma.sessao.count({
     *   where: {
     *     // ... the filter for the Sessaos we want to count
     *   }
     * })
    **/
    count<T extends SessaoCountArgs>(
      args?: Subset<T, SessaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessaoAggregateArgs>(args: Subset<T, SessaoAggregateArgs>): Prisma.PrismaPromise<GetSessaoAggregateType<T>>

    /**
     * Group by Sessao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessaoGroupByArgs['orderBy'] }
        : { orderBy?: SessaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessao model
   */
  readonly fields: SessaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    licitante<T extends LicitanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicitanteDefaultArgs<ExtArgs>>): Prisma__LicitanteClient<$Result.GetResult<Prisma.$LicitantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disputa<T extends DisputaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisputaDefaultArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sessao model
   */
  interface SessaoFieldRefs {
    readonly id: FieldRef<"Sessao", 'String'>
    readonly licitanteId: FieldRef<"Sessao", 'String'>
    readonly disputaId: FieldRef<"Sessao", 'String'>
    readonly inicio: FieldRef<"Sessao", 'DateTime'>
    readonly fim: FieldRef<"Sessao", 'DateTime'>
    readonly ip: FieldRef<"Sessao", 'String'>
    readonly hash: FieldRef<"Sessao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sessao findUnique
   */
  export type SessaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao findUniqueOrThrow
   */
  export type SessaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao findFirst
   */
  export type SessaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessaos.
     */
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao findFirstOrThrow
   */
  export type SessaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessaos.
     */
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao findMany
   */
  export type SessaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessaos to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao create
   */
  export type SessaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Sessao.
     */
    data: XOR<SessaoCreateInput, SessaoUncheckedCreateInput>
  }

  /**
   * Sessao createMany
   */
  export type SessaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessaos.
     */
    data: SessaoCreateManyInput | SessaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessao createManyAndReturn
   */
  export type SessaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * The data used to create many Sessaos.
     */
    data: SessaoCreateManyInput | SessaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessao update
   */
  export type SessaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Sessao.
     */
    data: XOR<SessaoUpdateInput, SessaoUncheckedUpdateInput>
    /**
     * Choose, which Sessao to update.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao updateMany
   */
  export type SessaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessaos.
     */
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyInput>
    /**
     * Filter which Sessaos to update
     */
    where?: SessaoWhereInput
    /**
     * Limit how many Sessaos to update.
     */
    limit?: number
  }

  /**
   * Sessao updateManyAndReturn
   */
  export type SessaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * The data used to update Sessaos.
     */
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyInput>
    /**
     * Filter which Sessaos to update
     */
    where?: SessaoWhereInput
    /**
     * Limit how many Sessaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessao upsert
   */
  export type SessaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Sessao to update in case it exists.
     */
    where: SessaoWhereUniqueInput
    /**
     * In case the Sessao found by the `where` argument doesn't exist, create a new Sessao with this data.
     */
    create: XOR<SessaoCreateInput, SessaoUncheckedCreateInput>
    /**
     * In case the Sessao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessaoUpdateInput, SessaoUncheckedUpdateInput>
  }

  /**
   * Sessao delete
   */
  export type SessaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter which Sessao to delete.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao deleteMany
   */
  export type SessaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessaos to delete
     */
    where?: SessaoWhereInput
    /**
     * Limit how many Sessaos to delete.
     */
    limit?: number
  }

  /**
   * Sessao without action
   */
  export type SessaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
  }


  /**
   * Model LogAtividade
   */

  export type AggregateLogAtividade = {
    _count: LogAtividadeCountAggregateOutputType | null
    _min: LogAtividadeMinAggregateOutputType | null
    _max: LogAtividadeMaxAggregateOutputType | null
  }

  export type LogAtividadeMinAggregateOutputType = {
    id: string | null
    disputaId: string | null
    usuarioId: string | null
    acao: string | null
    detalhes: string | null
    data: Date | null
  }

  export type LogAtividadeMaxAggregateOutputType = {
    id: string | null
    disputaId: string | null
    usuarioId: string | null
    acao: string | null
    detalhes: string | null
    data: Date | null
  }

  export type LogAtividadeCountAggregateOutputType = {
    id: number
    disputaId: number
    usuarioId: number
    acao: number
    detalhes: number
    data: number
    _all: number
  }


  export type LogAtividadeMinAggregateInputType = {
    id?: true
    disputaId?: true
    usuarioId?: true
    acao?: true
    detalhes?: true
    data?: true
  }

  export type LogAtividadeMaxAggregateInputType = {
    id?: true
    disputaId?: true
    usuarioId?: true
    acao?: true
    detalhes?: true
    data?: true
  }

  export type LogAtividadeCountAggregateInputType = {
    id?: true
    disputaId?: true
    usuarioId?: true
    acao?: true
    detalhes?: true
    data?: true
    _all?: true
  }

  export type LogAtividadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAtividade to aggregate.
     */
    where?: LogAtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAtividades to fetch.
     */
    orderBy?: LogAtividadeOrderByWithRelationInput | LogAtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogAtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAtividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAtividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogAtividades
    **/
    _count?: true | LogAtividadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogAtividadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogAtividadeMaxAggregateInputType
  }

  export type GetLogAtividadeAggregateType<T extends LogAtividadeAggregateArgs> = {
        [P in keyof T & keyof AggregateLogAtividade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogAtividade[P]>
      : GetScalarType<T[P], AggregateLogAtividade[P]>
  }




  export type LogAtividadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAtividadeWhereInput
    orderBy?: LogAtividadeOrderByWithAggregationInput | LogAtividadeOrderByWithAggregationInput[]
    by: LogAtividadeScalarFieldEnum[] | LogAtividadeScalarFieldEnum
    having?: LogAtividadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogAtividadeCountAggregateInputType | true
    _min?: LogAtividadeMinAggregateInputType
    _max?: LogAtividadeMaxAggregateInputType
  }

  export type LogAtividadeGroupByOutputType = {
    id: string
    disputaId: string
    usuarioId: string | null
    acao: string
    detalhes: string | null
    data: Date
    _count: LogAtividadeCountAggregateOutputType | null
    _min: LogAtividadeMinAggregateOutputType | null
    _max: LogAtividadeMaxAggregateOutputType | null
  }

  type GetLogAtividadeGroupByPayload<T extends LogAtividadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogAtividadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogAtividadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogAtividadeGroupByOutputType[P]>
            : GetScalarType<T[P], LogAtividadeGroupByOutputType[P]>
        }
      >
    >


  export type LogAtividadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputaId?: boolean
    usuarioId?: boolean
    acao?: boolean
    detalhes?: boolean
    data?: boolean
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    usuario?: boolean | LogAtividade$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["logAtividade"]>

  export type LogAtividadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputaId?: boolean
    usuarioId?: boolean
    acao?: boolean
    detalhes?: boolean
    data?: boolean
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    usuario?: boolean | LogAtividade$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["logAtividade"]>

  export type LogAtividadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputaId?: boolean
    usuarioId?: boolean
    acao?: boolean
    detalhes?: boolean
    data?: boolean
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    usuario?: boolean | LogAtividade$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["logAtividade"]>

  export type LogAtividadeSelectScalar = {
    id?: boolean
    disputaId?: boolean
    usuarioId?: boolean
    acao?: boolean
    detalhes?: boolean
    data?: boolean
  }

  export type LogAtividadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "disputaId" | "usuarioId" | "acao" | "detalhes" | "data", ExtArgs["result"]["logAtividade"]>
  export type LogAtividadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    usuario?: boolean | LogAtividade$usuarioArgs<ExtArgs>
  }
  export type LogAtividadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    usuario?: boolean | LogAtividade$usuarioArgs<ExtArgs>
  }
  export type LogAtividadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputa?: boolean | DisputaDefaultArgs<ExtArgs>
    usuario?: boolean | LogAtividade$usuarioArgs<ExtArgs>
  }

  export type $LogAtividadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogAtividade"
    objects: {
      disputa: Prisma.$DisputaPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      disputaId: string
      usuarioId: string | null
      acao: string
      detalhes: string | null
      data: Date
    }, ExtArgs["result"]["logAtividade"]>
    composites: {}
  }

  type LogAtividadeGetPayload<S extends boolean | null | undefined | LogAtividadeDefaultArgs> = $Result.GetResult<Prisma.$LogAtividadePayload, S>

  type LogAtividadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogAtividadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogAtividadeCountAggregateInputType | true
    }

  export interface LogAtividadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogAtividade'], meta: { name: 'LogAtividade' } }
    /**
     * Find zero or one LogAtividade that matches the filter.
     * @param {LogAtividadeFindUniqueArgs} args - Arguments to find a LogAtividade
     * @example
     * // Get one LogAtividade
     * const logAtividade = await prisma.logAtividade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogAtividadeFindUniqueArgs>(args: SelectSubset<T, LogAtividadeFindUniqueArgs<ExtArgs>>): Prisma__LogAtividadeClient<$Result.GetResult<Prisma.$LogAtividadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogAtividade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogAtividadeFindUniqueOrThrowArgs} args - Arguments to find a LogAtividade
     * @example
     * // Get one LogAtividade
     * const logAtividade = await prisma.logAtividade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogAtividadeFindUniqueOrThrowArgs>(args: SelectSubset<T, LogAtividadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogAtividadeClient<$Result.GetResult<Prisma.$LogAtividadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogAtividade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAtividadeFindFirstArgs} args - Arguments to find a LogAtividade
     * @example
     * // Get one LogAtividade
     * const logAtividade = await prisma.logAtividade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogAtividadeFindFirstArgs>(args?: SelectSubset<T, LogAtividadeFindFirstArgs<ExtArgs>>): Prisma__LogAtividadeClient<$Result.GetResult<Prisma.$LogAtividadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogAtividade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAtividadeFindFirstOrThrowArgs} args - Arguments to find a LogAtividade
     * @example
     * // Get one LogAtividade
     * const logAtividade = await prisma.logAtividade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogAtividadeFindFirstOrThrowArgs>(args?: SelectSubset<T, LogAtividadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogAtividadeClient<$Result.GetResult<Prisma.$LogAtividadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogAtividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAtividadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogAtividades
     * const logAtividades = await prisma.logAtividade.findMany()
     * 
     * // Get first 10 LogAtividades
     * const logAtividades = await prisma.logAtividade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logAtividadeWithIdOnly = await prisma.logAtividade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogAtividadeFindManyArgs>(args?: SelectSubset<T, LogAtividadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogAtividade.
     * @param {LogAtividadeCreateArgs} args - Arguments to create a LogAtividade.
     * @example
     * // Create one LogAtividade
     * const LogAtividade = await prisma.logAtividade.create({
     *   data: {
     *     // ... data to create a LogAtividade
     *   }
     * })
     * 
     */
    create<T extends LogAtividadeCreateArgs>(args: SelectSubset<T, LogAtividadeCreateArgs<ExtArgs>>): Prisma__LogAtividadeClient<$Result.GetResult<Prisma.$LogAtividadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogAtividades.
     * @param {LogAtividadeCreateManyArgs} args - Arguments to create many LogAtividades.
     * @example
     * // Create many LogAtividades
     * const logAtividade = await prisma.logAtividade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogAtividadeCreateManyArgs>(args?: SelectSubset<T, LogAtividadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogAtividades and returns the data saved in the database.
     * @param {LogAtividadeCreateManyAndReturnArgs} args - Arguments to create many LogAtividades.
     * @example
     * // Create many LogAtividades
     * const logAtividade = await prisma.logAtividade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogAtividades and only return the `id`
     * const logAtividadeWithIdOnly = await prisma.logAtividade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogAtividadeCreateManyAndReturnArgs>(args?: SelectSubset<T, LogAtividadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAtividadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogAtividade.
     * @param {LogAtividadeDeleteArgs} args - Arguments to delete one LogAtividade.
     * @example
     * // Delete one LogAtividade
     * const LogAtividade = await prisma.logAtividade.delete({
     *   where: {
     *     // ... filter to delete one LogAtividade
     *   }
     * })
     * 
     */
    delete<T extends LogAtividadeDeleteArgs>(args: SelectSubset<T, LogAtividadeDeleteArgs<ExtArgs>>): Prisma__LogAtividadeClient<$Result.GetResult<Prisma.$LogAtividadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogAtividade.
     * @param {LogAtividadeUpdateArgs} args - Arguments to update one LogAtividade.
     * @example
     * // Update one LogAtividade
     * const logAtividade = await prisma.logAtividade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogAtividadeUpdateArgs>(args: SelectSubset<T, LogAtividadeUpdateArgs<ExtArgs>>): Prisma__LogAtividadeClient<$Result.GetResult<Prisma.$LogAtividadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogAtividades.
     * @param {LogAtividadeDeleteManyArgs} args - Arguments to filter LogAtividades to delete.
     * @example
     * // Delete a few LogAtividades
     * const { count } = await prisma.logAtividade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogAtividadeDeleteManyArgs>(args?: SelectSubset<T, LogAtividadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAtividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAtividadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogAtividades
     * const logAtividade = await prisma.logAtividade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogAtividadeUpdateManyArgs>(args: SelectSubset<T, LogAtividadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAtividades and returns the data updated in the database.
     * @param {LogAtividadeUpdateManyAndReturnArgs} args - Arguments to update many LogAtividades.
     * @example
     * // Update many LogAtividades
     * const logAtividade = await prisma.logAtividade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogAtividades and only return the `id`
     * const logAtividadeWithIdOnly = await prisma.logAtividade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogAtividadeUpdateManyAndReturnArgs>(args: SelectSubset<T, LogAtividadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAtividadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogAtividade.
     * @param {LogAtividadeUpsertArgs} args - Arguments to update or create a LogAtividade.
     * @example
     * // Update or create a LogAtividade
     * const logAtividade = await prisma.logAtividade.upsert({
     *   create: {
     *     // ... data to create a LogAtividade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogAtividade we want to update
     *   }
     * })
     */
    upsert<T extends LogAtividadeUpsertArgs>(args: SelectSubset<T, LogAtividadeUpsertArgs<ExtArgs>>): Prisma__LogAtividadeClient<$Result.GetResult<Prisma.$LogAtividadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogAtividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAtividadeCountArgs} args - Arguments to filter LogAtividades to count.
     * @example
     * // Count the number of LogAtividades
     * const count = await prisma.logAtividade.count({
     *   where: {
     *     // ... the filter for the LogAtividades we want to count
     *   }
     * })
    **/
    count<T extends LogAtividadeCountArgs>(
      args?: Subset<T, LogAtividadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogAtividadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogAtividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAtividadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAtividadeAggregateArgs>(args: Subset<T, LogAtividadeAggregateArgs>): Prisma.PrismaPromise<GetLogAtividadeAggregateType<T>>

    /**
     * Group by LogAtividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAtividadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogAtividadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogAtividadeGroupByArgs['orderBy'] }
        : { orderBy?: LogAtividadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogAtividadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogAtividadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogAtividade model
   */
  readonly fields: LogAtividadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogAtividade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogAtividadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disputa<T extends DisputaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisputaDefaultArgs<ExtArgs>>): Prisma__DisputaClient<$Result.GetResult<Prisma.$DisputaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends LogAtividade$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, LogAtividade$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogAtividade model
   */
  interface LogAtividadeFieldRefs {
    readonly id: FieldRef<"LogAtividade", 'String'>
    readonly disputaId: FieldRef<"LogAtividade", 'String'>
    readonly usuarioId: FieldRef<"LogAtividade", 'String'>
    readonly acao: FieldRef<"LogAtividade", 'String'>
    readonly detalhes: FieldRef<"LogAtividade", 'String'>
    readonly data: FieldRef<"LogAtividade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogAtividade findUnique
   */
  export type LogAtividadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeInclude<ExtArgs> | null
    /**
     * Filter, which LogAtividade to fetch.
     */
    where: LogAtividadeWhereUniqueInput
  }

  /**
   * LogAtividade findUniqueOrThrow
   */
  export type LogAtividadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeInclude<ExtArgs> | null
    /**
     * Filter, which LogAtividade to fetch.
     */
    where: LogAtividadeWhereUniqueInput
  }

  /**
   * LogAtividade findFirst
   */
  export type LogAtividadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeInclude<ExtArgs> | null
    /**
     * Filter, which LogAtividade to fetch.
     */
    where?: LogAtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAtividades to fetch.
     */
    orderBy?: LogAtividadeOrderByWithRelationInput | LogAtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAtividades.
     */
    cursor?: LogAtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAtividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAtividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAtividades.
     */
    distinct?: LogAtividadeScalarFieldEnum | LogAtividadeScalarFieldEnum[]
  }

  /**
   * LogAtividade findFirstOrThrow
   */
  export type LogAtividadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeInclude<ExtArgs> | null
    /**
     * Filter, which LogAtividade to fetch.
     */
    where?: LogAtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAtividades to fetch.
     */
    orderBy?: LogAtividadeOrderByWithRelationInput | LogAtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAtividades.
     */
    cursor?: LogAtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAtividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAtividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAtividades.
     */
    distinct?: LogAtividadeScalarFieldEnum | LogAtividadeScalarFieldEnum[]
  }

  /**
   * LogAtividade findMany
   */
  export type LogAtividadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeInclude<ExtArgs> | null
    /**
     * Filter, which LogAtividades to fetch.
     */
    where?: LogAtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAtividades to fetch.
     */
    orderBy?: LogAtividadeOrderByWithRelationInput | LogAtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogAtividades.
     */
    cursor?: LogAtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAtividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAtividades.
     */
    skip?: number
    distinct?: LogAtividadeScalarFieldEnum | LogAtividadeScalarFieldEnum[]
  }

  /**
   * LogAtividade create
   */
  export type LogAtividadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeInclude<ExtArgs> | null
    /**
     * The data needed to create a LogAtividade.
     */
    data: XOR<LogAtividadeCreateInput, LogAtividadeUncheckedCreateInput>
  }

  /**
   * LogAtividade createMany
   */
  export type LogAtividadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogAtividades.
     */
    data: LogAtividadeCreateManyInput | LogAtividadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogAtividade createManyAndReturn
   */
  export type LogAtividadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * The data used to create many LogAtividades.
     */
    data: LogAtividadeCreateManyInput | LogAtividadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogAtividade update
   */
  export type LogAtividadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeInclude<ExtArgs> | null
    /**
     * The data needed to update a LogAtividade.
     */
    data: XOR<LogAtividadeUpdateInput, LogAtividadeUncheckedUpdateInput>
    /**
     * Choose, which LogAtividade to update.
     */
    where: LogAtividadeWhereUniqueInput
  }

  /**
   * LogAtividade updateMany
   */
  export type LogAtividadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogAtividades.
     */
    data: XOR<LogAtividadeUpdateManyMutationInput, LogAtividadeUncheckedUpdateManyInput>
    /**
     * Filter which LogAtividades to update
     */
    where?: LogAtividadeWhereInput
    /**
     * Limit how many LogAtividades to update.
     */
    limit?: number
  }

  /**
   * LogAtividade updateManyAndReturn
   */
  export type LogAtividadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * The data used to update LogAtividades.
     */
    data: XOR<LogAtividadeUpdateManyMutationInput, LogAtividadeUncheckedUpdateManyInput>
    /**
     * Filter which LogAtividades to update
     */
    where?: LogAtividadeWhereInput
    /**
     * Limit how many LogAtividades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogAtividade upsert
   */
  export type LogAtividadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeInclude<ExtArgs> | null
    /**
     * The filter to search for the LogAtividade to update in case it exists.
     */
    where: LogAtividadeWhereUniqueInput
    /**
     * In case the LogAtividade found by the `where` argument doesn't exist, create a new LogAtividade with this data.
     */
    create: XOR<LogAtividadeCreateInput, LogAtividadeUncheckedCreateInput>
    /**
     * In case the LogAtividade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogAtividadeUpdateInput, LogAtividadeUncheckedUpdateInput>
  }

  /**
   * LogAtividade delete
   */
  export type LogAtividadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeInclude<ExtArgs> | null
    /**
     * Filter which LogAtividade to delete.
     */
    where: LogAtividadeWhereUniqueInput
  }

  /**
   * LogAtividade deleteMany
   */
  export type LogAtividadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAtividades to delete
     */
    where?: LogAtividadeWhereInput
    /**
     * Limit how many LogAtividades to delete.
     */
    limit?: number
  }

  /**
   * LogAtividade.usuario
   */
  export type LogAtividade$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * LogAtividade without action
   */
  export type LogAtividadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAtividade
     */
    select?: LogAtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAtividade
     */
    omit?: LogAtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAtividadeInclude<ExtArgs> | null
  }


  /**
   * Model Lote
   */

  export type AggregateLote = {
    _count: LoteCountAggregateOutputType | null
    _min: LoteMinAggregateOutputType | null
    _max: LoteMaxAggregateOutputType | null
  }

  export type LoteMinAggregateOutputType = {
    id: string | null
    numero: string | null
    descricao: string | null
    editalId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoteMaxAggregateOutputType = {
    id: string | null
    numero: string | null
    descricao: string | null
    editalId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoteCountAggregateOutputType = {
    id: number
    numero: number
    descricao: number
    editalId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LoteMinAggregateInputType = {
    id?: true
    numero?: true
    descricao?: true
    editalId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoteMaxAggregateInputType = {
    id?: true
    numero?: true
    descricao?: true
    editalId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoteCountAggregateInputType = {
    id?: true
    numero?: true
    descricao?: true
    editalId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lote to aggregate.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lotes
    **/
    _count?: true | LoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoteMaxAggregateInputType
  }

  export type GetLoteAggregateType<T extends LoteAggregateArgs> = {
        [P in keyof T & keyof AggregateLote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLote[P]>
      : GetScalarType<T[P], AggregateLote[P]>
  }




  export type LoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoteWhereInput
    orderBy?: LoteOrderByWithAggregationInput | LoteOrderByWithAggregationInput[]
    by: LoteScalarFieldEnum[] | LoteScalarFieldEnum
    having?: LoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoteCountAggregateInputType | true
    _min?: LoteMinAggregateInputType
    _max?: LoteMaxAggregateInputType
  }

  export type LoteGroupByOutputType = {
    id: string
    numero: string
    descricao: string
    editalId: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: LoteCountAggregateOutputType | null
    _min: LoteMinAggregateOutputType | null
    _max: LoteMaxAggregateOutputType | null
  }

  type GetLoteGroupByPayload<T extends LoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoteGroupByOutputType[P]>
            : GetScalarType<T[P], LoteGroupByOutputType[P]>
        }
      >
    >


  export type LoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    descricao?: boolean
    editalId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itens?: boolean | Lote$itensArgs<ExtArgs>
    edital?: boolean | EditalDefaultArgs<ExtArgs>
    _count?: boolean | LoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lote"]>

  export type LoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    descricao?: boolean
    editalId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lote"]>

  export type LoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    descricao?: boolean
    editalId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lote"]>

  export type LoteSelectScalar = {
    id?: boolean
    numero?: boolean
    descricao?: boolean
    editalId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "descricao" | "editalId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["lote"]>
  export type LoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | Lote$itensArgs<ExtArgs>
    edital?: boolean | EditalDefaultArgs<ExtArgs>
    _count?: boolean | LoteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }
  export type LoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edital?: boolean | EditalDefaultArgs<ExtArgs>
  }

  export type $LotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lote"
    objects: {
      itens: Prisma.$ItemPayload<ExtArgs>[]
      edital: Prisma.$EditalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numero: string
      descricao: string
      editalId: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lote"]>
    composites: {}
  }

  type LoteGetPayload<S extends boolean | null | undefined | LoteDefaultArgs> = $Result.GetResult<Prisma.$LotePayload, S>

  type LoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoteCountAggregateInputType | true
    }

  export interface LoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lote'], meta: { name: 'Lote' } }
    /**
     * Find zero or one Lote that matches the filter.
     * @param {LoteFindUniqueArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoteFindUniqueArgs>(args: SelectSubset<T, LoteFindUniqueArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoteFindUniqueOrThrowArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoteFindUniqueOrThrowArgs>(args: SelectSubset<T, LoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindFirstArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoteFindFirstArgs>(args?: SelectSubset<T, LoteFindFirstArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindFirstOrThrowArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoteFindFirstOrThrowArgs>(args?: SelectSubset<T, LoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lotes
     * const lotes = await prisma.lote.findMany()
     * 
     * // Get first 10 Lotes
     * const lotes = await prisma.lote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loteWithIdOnly = await prisma.lote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoteFindManyArgs>(args?: SelectSubset<T, LoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lote.
     * @param {LoteCreateArgs} args - Arguments to create a Lote.
     * @example
     * // Create one Lote
     * const Lote = await prisma.lote.create({
     *   data: {
     *     // ... data to create a Lote
     *   }
     * })
     * 
     */
    create<T extends LoteCreateArgs>(args: SelectSubset<T, LoteCreateArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lotes.
     * @param {LoteCreateManyArgs} args - Arguments to create many Lotes.
     * @example
     * // Create many Lotes
     * const lote = await prisma.lote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoteCreateManyArgs>(args?: SelectSubset<T, LoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lotes and returns the data saved in the database.
     * @param {LoteCreateManyAndReturnArgs} args - Arguments to create many Lotes.
     * @example
     * // Create many Lotes
     * const lote = await prisma.lote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lotes and only return the `id`
     * const loteWithIdOnly = await prisma.lote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoteCreateManyAndReturnArgs>(args?: SelectSubset<T, LoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lote.
     * @param {LoteDeleteArgs} args - Arguments to delete one Lote.
     * @example
     * // Delete one Lote
     * const Lote = await prisma.lote.delete({
     *   where: {
     *     // ... filter to delete one Lote
     *   }
     * })
     * 
     */
    delete<T extends LoteDeleteArgs>(args: SelectSubset<T, LoteDeleteArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lote.
     * @param {LoteUpdateArgs} args - Arguments to update one Lote.
     * @example
     * // Update one Lote
     * const lote = await prisma.lote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoteUpdateArgs>(args: SelectSubset<T, LoteUpdateArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lotes.
     * @param {LoteDeleteManyArgs} args - Arguments to filter Lotes to delete.
     * @example
     * // Delete a few Lotes
     * const { count } = await prisma.lote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoteDeleteManyArgs>(args?: SelectSubset<T, LoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lotes
     * const lote = await prisma.lote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoteUpdateManyArgs>(args: SelectSubset<T, LoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lotes and returns the data updated in the database.
     * @param {LoteUpdateManyAndReturnArgs} args - Arguments to update many Lotes.
     * @example
     * // Update many Lotes
     * const lote = await prisma.lote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lotes and only return the `id`
     * const loteWithIdOnly = await prisma.lote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoteUpdateManyAndReturnArgs>(args: SelectSubset<T, LoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lote.
     * @param {LoteUpsertArgs} args - Arguments to update or create a Lote.
     * @example
     * // Update or create a Lote
     * const lote = await prisma.lote.upsert({
     *   create: {
     *     // ... data to create a Lote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lote we want to update
     *   }
     * })
     */
    upsert<T extends LoteUpsertArgs>(args: SelectSubset<T, LoteUpsertArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteCountArgs} args - Arguments to filter Lotes to count.
     * @example
     * // Count the number of Lotes
     * const count = await prisma.lote.count({
     *   where: {
     *     // ... the filter for the Lotes we want to count
     *   }
     * })
    **/
    count<T extends LoteCountArgs>(
      args?: Subset<T, LoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoteAggregateArgs>(args: Subset<T, LoteAggregateArgs>): Prisma.PrismaPromise<GetLoteAggregateType<T>>

    /**
     * Group by Lote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoteGroupByArgs['orderBy'] }
        : { orderBy?: LoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lote model
   */
  readonly fields: LoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itens<T extends Lote$itensArgs<ExtArgs> = {}>(args?: Subset<T, Lote$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    edital<T extends EditalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EditalDefaultArgs<ExtArgs>>): Prisma__EditalClient<$Result.GetResult<Prisma.$EditalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lote model
   */
  interface LoteFieldRefs {
    readonly id: FieldRef<"Lote", 'String'>
    readonly numero: FieldRef<"Lote", 'String'>
    readonly descricao: FieldRef<"Lote", 'String'>
    readonly editalId: FieldRef<"Lote", 'String'>
    readonly status: FieldRef<"Lote", 'String'>
    readonly createdAt: FieldRef<"Lote", 'DateTime'>
    readonly updatedAt: FieldRef<"Lote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lote findUnique
   */
  export type LoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote findUniqueOrThrow
   */
  export type LoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote findFirst
   */
  export type LoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lotes.
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lotes.
     */
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Lote findFirstOrThrow
   */
  export type LoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lotes.
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lotes.
     */
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Lote findMany
   */
  export type LoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lotes to fetch.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lotes.
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Lote create
   */
  export type LoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Lote.
     */
    data: XOR<LoteCreateInput, LoteUncheckedCreateInput>
  }

  /**
   * Lote createMany
   */
  export type LoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lotes.
     */
    data: LoteCreateManyInput | LoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lote createManyAndReturn
   */
  export type LoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * The data used to create many Lotes.
     */
    data: LoteCreateManyInput | LoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lote update
   */
  export type LoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Lote.
     */
    data: XOR<LoteUpdateInput, LoteUncheckedUpdateInput>
    /**
     * Choose, which Lote to update.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote updateMany
   */
  export type LoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lotes.
     */
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyInput>
    /**
     * Filter which Lotes to update
     */
    where?: LoteWhereInput
    /**
     * Limit how many Lotes to update.
     */
    limit?: number
  }

  /**
   * Lote updateManyAndReturn
   */
  export type LoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * The data used to update Lotes.
     */
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyInput>
    /**
     * Filter which Lotes to update
     */
    where?: LoteWhereInput
    /**
     * Limit how many Lotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lote upsert
   */
  export type LoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Lote to update in case it exists.
     */
    where: LoteWhereUniqueInput
    /**
     * In case the Lote found by the `where` argument doesn't exist, create a new Lote with this data.
     */
    create: XOR<LoteCreateInput, LoteUncheckedCreateInput>
    /**
     * In case the Lote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoteUpdateInput, LoteUncheckedUpdateInput>
  }

  /**
   * Lote delete
   */
  export type LoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter which Lote to delete.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote deleteMany
   */
  export type LoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lotes to delete
     */
    where?: LoteWhereInput
    /**
     * Limit how many Lotes to delete.
     */
    limit?: number
  }

  /**
   * Lote.itens
   */
  export type Lote$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Lote without action
   */
  export type LoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    quantidade: number | null
    valorEstimado: number | null
  }

  export type ItemSumAggregateOutputType = {
    quantidade: number | null
    valorEstimado: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    numero: string | null
    descricao: string | null
    quantidade: number | null
    unidade: string | null
    valorEstimado: number | null
    loteId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    numero: string | null
    descricao: string | null
    quantidade: number | null
    unidade: string | null
    valorEstimado: number | null
    loteId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    numero: number
    descricao: number
    quantidade: number
    unidade: number
    valorEstimado: number
    loteId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    quantidade?: true
    valorEstimado?: true
  }

  export type ItemSumAggregateInputType = {
    quantidade?: true
    valorEstimado?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    numero?: true
    descricao?: true
    quantidade?: true
    unidade?: true
    valorEstimado?: true
    loteId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    numero?: true
    descricao?: true
    quantidade?: true
    unidade?: true
    valorEstimado?: true
    loteId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    numero?: true
    descricao?: true
    quantidade?: true
    unidade?: true
    valorEstimado?: true
    loteId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    numero: string
    descricao: string
    quantidade: number
    unidade: string
    valorEstimado: number | null
    loteId: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    descricao?: boolean
    quantidade?: boolean
    unidade?: boolean
    valorEstimado?: boolean
    loteId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lote?: boolean | LoteDefaultArgs<ExtArgs>
    propostas?: boolean | Item$propostasArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    descricao?: boolean
    quantidade?: boolean
    unidade?: boolean
    valorEstimado?: boolean
    loteId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lote?: boolean | LoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    descricao?: boolean
    quantidade?: boolean
    unidade?: boolean
    valorEstimado?: boolean
    loteId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lote?: boolean | LoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    numero?: boolean
    descricao?: boolean
    quantidade?: boolean
    unidade?: boolean
    valorEstimado?: boolean
    loteId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "descricao" | "quantidade" | "unidade" | "valorEstimado" | "loteId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lote?: boolean | LoteDefaultArgs<ExtArgs>
    propostas?: boolean | Item$propostasArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lote?: boolean | LoteDefaultArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lote?: boolean | LoteDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      lote: Prisma.$LotePayload<ExtArgs>
      propostas: Prisma.$PropostaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numero: string
      descricao: string
      quantidade: number
      unidade: string
      valorEstimado: number | null
      loteId: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lote<T extends LoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoteDefaultArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    propostas<T extends Item$propostasArgs<ExtArgs> = {}>(args?: Subset<T, Item$propostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly numero: FieldRef<"Item", 'String'>
    readonly descricao: FieldRef<"Item", 'String'>
    readonly quantidade: FieldRef<"Item", 'Int'>
    readonly unidade: FieldRef<"Item", 'String'>
    readonly valorEstimado: FieldRef<"Item", 'Int'>
    readonly loteId: FieldRef<"Item", 'String'>
    readonly status: FieldRef<"Item", 'String'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.propostas
   */
  export type Item$propostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    where?: PropostaWhereInput
    orderBy?: PropostaOrderByWithRelationInput | PropostaOrderByWithRelationInput[]
    cursor?: PropostaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropostaScalarFieldEnum | PropostaScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    perfil: 'perfil',
    licitanteId: 'licitanteId'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EditalScalarFieldEnum: {
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

  export type EditalScalarFieldEnum = (typeof EditalScalarFieldEnum)[keyof typeof EditalScalarFieldEnum]


  export const DisputaScalarFieldEnum: {
    id: 'id',
    editalId: 'editalId',
    status: 'status',
    inicio: 'inicio',
    fimPrevisto: 'fimPrevisto',
    encerramento: 'encerramento',
    tempoRestante: 'tempoRestante'
  };

  export type DisputaScalarFieldEnum = (typeof DisputaScalarFieldEnum)[keyof typeof DisputaScalarFieldEnum]


  export const LicitanteScalarFieldEnum: {
    id: 'id',
    razaoSocial: 'razaoSocial',
    cnpj: 'cnpj',
    tipoEmpresa: 'tipoEmpresa'
  };

  export type LicitanteScalarFieldEnum = (typeof LicitanteScalarFieldEnum)[keyof typeof LicitanteScalarFieldEnum]


  export const PropostaScalarFieldEnum: {
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

  export type PropostaScalarFieldEnum = (typeof PropostaScalarFieldEnum)[keyof typeof PropostaScalarFieldEnum]


  export const LanceScalarFieldEnum: {
    id: 'id',
    disputaId: 'disputaId',
    licitanteId: 'licitanteId',
    valorCentavos: 'valorCentavos',
    horario: 'horario',
    ip: 'ip',
    userAgent: 'userAgent'
  };

  export type LanceScalarFieldEnum = (typeof LanceScalarFieldEnum)[keyof typeof LanceScalarFieldEnum]


  export const DocumentoLicitanteScalarFieldEnum: {
    id: 'id',
    disputaId: 'disputaId',
    licitanteId: 'licitanteId',
    tipoDocumento: 'tipoDocumento',
    nomeOriginal: 'nomeOriginal',
    descricao: 'descricao',
    arquivoPath: 'arquivoPath',
    dataEnvio: 'dataEnvio',
    versao: 'versao',
    valido: 'valido',
    hashDocumento: 'hashDocumento',
    assinaturaBase64: 'assinaturaBase64',
    assinadoPor: 'assinadoPor'
  };

  export type DocumentoLicitanteScalarFieldEnum = (typeof DocumentoLicitanteScalarFieldEnum)[keyof typeof DocumentoLicitanteScalarFieldEnum]


  export const DocumentoObrigatorioScalarFieldEnum: {
    id: 'id',
    editalId: 'editalId',
    tipoDocumento: 'tipoDocumento',
    descricao: 'descricao'
  };

  export type DocumentoObrigatorioScalarFieldEnum = (typeof DocumentoObrigatorioScalarFieldEnum)[keyof typeof DocumentoObrigatorioScalarFieldEnum]


  export const MensagemChatScalarFieldEnum: {
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

  export type MensagemChatScalarFieldEnum = (typeof MensagemChatScalarFieldEnum)[keyof typeof MensagemChatScalarFieldEnum]


  export const SessaoScalarFieldEnum: {
    id: 'id',
    licitanteId: 'licitanteId',
    disputaId: 'disputaId',
    inicio: 'inicio',
    fim: 'fim',
    ip: 'ip',
    hash: 'hash'
  };

  export type SessaoScalarFieldEnum = (typeof SessaoScalarFieldEnum)[keyof typeof SessaoScalarFieldEnum]


  export const LogAtividadeScalarFieldEnum: {
    id: 'id',
    disputaId: 'disputaId',
    usuarioId: 'usuarioId',
    acao: 'acao',
    detalhes: 'detalhes',
    data: 'data'
  };

  export type LogAtividadeScalarFieldEnum = (typeof LogAtividadeScalarFieldEnum)[keyof typeof LogAtividadeScalarFieldEnum]


  export const LoteScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    descricao: 'descricao',
    editalId: 'editalId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LoteScalarFieldEnum = (typeof LoteScalarFieldEnum)[keyof typeof LoteScalarFieldEnum]


  export const ItemScalarFieldEnum: {
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

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PerfilUsuario'
   */
  export type EnumPerfilUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PerfilUsuario'>
    


  /**
   * Reference to a field of type 'PerfilUsuario[]'
   */
  export type ListEnumPerfilUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PerfilUsuario[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DisputaStatus'
   */
  export type EnumDisputaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisputaStatus'>
    


  /**
   * Reference to a field of type 'DisputaStatus[]'
   */
  export type ListEnumDisputaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisputaStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TipoEmpresa'
   */
  export type EnumTipoEmpresaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoEmpresa'>
    


  /**
   * Reference to a field of type 'TipoEmpresa[]'
   */
  export type ListEnumTipoEmpresaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoEmpresa[]'>
    


  /**
   * Reference to a field of type 'StatusProposta'
   */
  export type EnumStatusPropostaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusProposta'>
    


  /**
   * Reference to a field of type 'StatusProposta[]'
   */
  export type ListEnumStatusPropostaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusProposta[]'>
    


  /**
   * Reference to a field of type 'TipoDocumento'
   */
  export type EnumTipoDocumentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDocumento'>
    


  /**
   * Reference to a field of type 'TipoDocumento[]'
   */
  export type ListEnumTipoDocumentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDocumento[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TipoAutorMensagem'
   */
  export type EnumTipoAutorMensagemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAutorMensagem'>
    


  /**
   * Reference to a field of type 'TipoAutorMensagem[]'
   */
  export type ListEnumTipoAutorMensagemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAutorMensagem[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    perfil?: EnumPerfilUsuarioFilter<"Usuario"> | $Enums.PerfilUsuario
    licitanteId?: StringNullableFilter<"Usuario"> | string | null
    LogAtividade?: LogAtividadeListRelationFilter
    MensagemChat?: MensagemChatListRelationFilter
    licitante?: XOR<LicitanteNullableScalarRelationFilter, LicitanteWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
    licitanteId?: SortOrderInput | SortOrder
    LogAtividade?: LogAtividadeOrderByRelationAggregateInput
    MensagemChat?: MensagemChatOrderByRelationAggregateInput
    licitante?: LicitanteOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    licitanteId?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    perfil?: EnumPerfilUsuarioFilter<"Usuario"> | $Enums.PerfilUsuario
    LogAtividade?: LogAtividadeListRelationFilter
    MensagemChat?: MensagemChatListRelationFilter
    licitante?: XOR<LicitanteNullableScalarRelationFilter, LicitanteWhereInput> | null
  }, "id" | "email" | "licitanteId">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
    licitanteId?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    perfil?: EnumPerfilUsuarioWithAggregatesFilter<"Usuario"> | $Enums.PerfilUsuario
    licitanteId?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type EditalWhereInput = {
    AND?: EditalWhereInput | EditalWhereInput[]
    OR?: EditalWhereInput[]
    NOT?: EditalWhereInput | EditalWhereInput[]
    id?: StringFilter<"Edital"> | string
    numero?: StringFilter<"Edital"> | string
    objeto?: StringFilter<"Edital"> | string
    modalidade?: StringFilter<"Edital"> | string
    status?: StringFilter<"Edital"> | string
    dataAbertura?: DateTimeFilter<"Edital"> | Date | string
    arquivoPdf?: StringNullableFilter<"Edital"> | string | null
    createdAt?: DateTimeFilter<"Edital"> | Date | string
    updatedAt?: DateTimeFilter<"Edital"> | Date | string
    disputas?: DisputaListRelationFilter
    documentosObrigatorios?: DocumentoObrigatorioListRelationFilter
    lotes?: LoteListRelationFilter
    mensagensChat?: MensagemChatListRelationFilter
  }

  export type EditalOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    objeto?: SortOrder
    modalidade?: SortOrder
    status?: SortOrder
    dataAbertura?: SortOrder
    arquivoPdf?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disputas?: DisputaOrderByRelationAggregateInput
    documentosObrigatorios?: DocumentoObrigatorioOrderByRelationAggregateInput
    lotes?: LoteOrderByRelationAggregateInput
    mensagensChat?: MensagemChatOrderByRelationAggregateInput
  }

  export type EditalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numero?: string
    AND?: EditalWhereInput | EditalWhereInput[]
    OR?: EditalWhereInput[]
    NOT?: EditalWhereInput | EditalWhereInput[]
    objeto?: StringFilter<"Edital"> | string
    modalidade?: StringFilter<"Edital"> | string
    status?: StringFilter<"Edital"> | string
    dataAbertura?: DateTimeFilter<"Edital"> | Date | string
    arquivoPdf?: StringNullableFilter<"Edital"> | string | null
    createdAt?: DateTimeFilter<"Edital"> | Date | string
    updatedAt?: DateTimeFilter<"Edital"> | Date | string
    disputas?: DisputaListRelationFilter
    documentosObrigatorios?: DocumentoObrigatorioListRelationFilter
    lotes?: LoteListRelationFilter
    mensagensChat?: MensagemChatListRelationFilter
  }, "id" | "numero">

  export type EditalOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    objeto?: SortOrder
    modalidade?: SortOrder
    status?: SortOrder
    dataAbertura?: SortOrder
    arquivoPdf?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EditalCountOrderByAggregateInput
    _max?: EditalMaxOrderByAggregateInput
    _min?: EditalMinOrderByAggregateInput
  }

  export type EditalScalarWhereWithAggregatesInput = {
    AND?: EditalScalarWhereWithAggregatesInput | EditalScalarWhereWithAggregatesInput[]
    OR?: EditalScalarWhereWithAggregatesInput[]
    NOT?: EditalScalarWhereWithAggregatesInput | EditalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Edital"> | string
    numero?: StringWithAggregatesFilter<"Edital"> | string
    objeto?: StringWithAggregatesFilter<"Edital"> | string
    modalidade?: StringWithAggregatesFilter<"Edital"> | string
    status?: StringWithAggregatesFilter<"Edital"> | string
    dataAbertura?: DateTimeWithAggregatesFilter<"Edital"> | Date | string
    arquivoPdf?: StringNullableWithAggregatesFilter<"Edital"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Edital"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Edital"> | Date | string
  }

  export type DisputaWhereInput = {
    AND?: DisputaWhereInput | DisputaWhereInput[]
    OR?: DisputaWhereInput[]
    NOT?: DisputaWhereInput | DisputaWhereInput[]
    id?: StringFilter<"Disputa"> | string
    editalId?: StringFilter<"Disputa"> | string
    status?: EnumDisputaStatusFilter<"Disputa"> | $Enums.DisputaStatus
    inicio?: DateTimeNullableFilter<"Disputa"> | Date | string | null
    fimPrevisto?: DateTimeNullableFilter<"Disputa"> | Date | string | null
    encerramento?: DateTimeNullableFilter<"Disputa"> | Date | string | null
    tempoRestante?: IntNullableFilter<"Disputa"> | number | null
    edital?: XOR<EditalScalarRelationFilter, EditalWhereInput>
    propostas?: PropostaListRelationFilter
    lances?: LanceListRelationFilter
    documentos?: DocumentoLicitanteListRelationFilter
    mensagensChat?: MensagemChatListRelationFilter
    logs?: LogAtividadeListRelationFilter
    Sessao?: SessaoListRelationFilter
  }

  export type DisputaOrderByWithRelationInput = {
    id?: SortOrder
    editalId?: SortOrder
    status?: SortOrder
    inicio?: SortOrderInput | SortOrder
    fimPrevisto?: SortOrderInput | SortOrder
    encerramento?: SortOrderInput | SortOrder
    tempoRestante?: SortOrderInput | SortOrder
    edital?: EditalOrderByWithRelationInput
    propostas?: PropostaOrderByRelationAggregateInput
    lances?: LanceOrderByRelationAggregateInput
    documentos?: DocumentoLicitanteOrderByRelationAggregateInput
    mensagensChat?: MensagemChatOrderByRelationAggregateInput
    logs?: LogAtividadeOrderByRelationAggregateInput
    Sessao?: SessaoOrderByRelationAggregateInput
  }

  export type DisputaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DisputaWhereInput | DisputaWhereInput[]
    OR?: DisputaWhereInput[]
    NOT?: DisputaWhereInput | DisputaWhereInput[]
    editalId?: StringFilter<"Disputa"> | string
    status?: EnumDisputaStatusFilter<"Disputa"> | $Enums.DisputaStatus
    inicio?: DateTimeNullableFilter<"Disputa"> | Date | string | null
    fimPrevisto?: DateTimeNullableFilter<"Disputa"> | Date | string | null
    encerramento?: DateTimeNullableFilter<"Disputa"> | Date | string | null
    tempoRestante?: IntNullableFilter<"Disputa"> | number | null
    edital?: XOR<EditalScalarRelationFilter, EditalWhereInput>
    propostas?: PropostaListRelationFilter
    lances?: LanceListRelationFilter
    documentos?: DocumentoLicitanteListRelationFilter
    mensagensChat?: MensagemChatListRelationFilter
    logs?: LogAtividadeListRelationFilter
    Sessao?: SessaoListRelationFilter
  }, "id">

  export type DisputaOrderByWithAggregationInput = {
    id?: SortOrder
    editalId?: SortOrder
    status?: SortOrder
    inicio?: SortOrderInput | SortOrder
    fimPrevisto?: SortOrderInput | SortOrder
    encerramento?: SortOrderInput | SortOrder
    tempoRestante?: SortOrderInput | SortOrder
    _count?: DisputaCountOrderByAggregateInput
    _avg?: DisputaAvgOrderByAggregateInput
    _max?: DisputaMaxOrderByAggregateInput
    _min?: DisputaMinOrderByAggregateInput
    _sum?: DisputaSumOrderByAggregateInput
  }

  export type DisputaScalarWhereWithAggregatesInput = {
    AND?: DisputaScalarWhereWithAggregatesInput | DisputaScalarWhereWithAggregatesInput[]
    OR?: DisputaScalarWhereWithAggregatesInput[]
    NOT?: DisputaScalarWhereWithAggregatesInput | DisputaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Disputa"> | string
    editalId?: StringWithAggregatesFilter<"Disputa"> | string
    status?: EnumDisputaStatusWithAggregatesFilter<"Disputa"> | $Enums.DisputaStatus
    inicio?: DateTimeNullableWithAggregatesFilter<"Disputa"> | Date | string | null
    fimPrevisto?: DateTimeNullableWithAggregatesFilter<"Disputa"> | Date | string | null
    encerramento?: DateTimeNullableWithAggregatesFilter<"Disputa"> | Date | string | null
    tempoRestante?: IntNullableWithAggregatesFilter<"Disputa"> | number | null
  }

  export type LicitanteWhereInput = {
    AND?: LicitanteWhereInput | LicitanteWhereInput[]
    OR?: LicitanteWhereInput[]
    NOT?: LicitanteWhereInput | LicitanteWhereInput[]
    id?: StringFilter<"Licitante"> | string
    razaoSocial?: StringFilter<"Licitante"> | string
    cnpj?: StringFilter<"Licitante"> | string
    tipoEmpresa?: EnumTipoEmpresaFilter<"Licitante"> | $Enums.TipoEmpresa
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    propostas?: PropostaListRelationFilter
    lances?: LanceListRelationFilter
    documentos?: DocumentoLicitanteListRelationFilter
    sessoes?: SessaoListRelationFilter
    mensagensChat?: MensagemChatListRelationFilter
  }

  export type LicitanteOrderByWithRelationInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    cnpj?: SortOrder
    tipoEmpresa?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    propostas?: PropostaOrderByRelationAggregateInput
    lances?: LanceOrderByRelationAggregateInput
    documentos?: DocumentoLicitanteOrderByRelationAggregateInput
    sessoes?: SessaoOrderByRelationAggregateInput
    mensagensChat?: MensagemChatOrderByRelationAggregateInput
  }

  export type LicitanteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    AND?: LicitanteWhereInput | LicitanteWhereInput[]
    OR?: LicitanteWhereInput[]
    NOT?: LicitanteWhereInput | LicitanteWhereInput[]
    razaoSocial?: StringFilter<"Licitante"> | string
    tipoEmpresa?: EnumTipoEmpresaFilter<"Licitante"> | $Enums.TipoEmpresa
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    propostas?: PropostaListRelationFilter
    lances?: LanceListRelationFilter
    documentos?: DocumentoLicitanteListRelationFilter
    sessoes?: SessaoListRelationFilter
    mensagensChat?: MensagemChatListRelationFilter
  }, "id" | "cnpj">

  export type LicitanteOrderByWithAggregationInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    cnpj?: SortOrder
    tipoEmpresa?: SortOrder
    _count?: LicitanteCountOrderByAggregateInput
    _max?: LicitanteMaxOrderByAggregateInput
    _min?: LicitanteMinOrderByAggregateInput
  }

  export type LicitanteScalarWhereWithAggregatesInput = {
    AND?: LicitanteScalarWhereWithAggregatesInput | LicitanteScalarWhereWithAggregatesInput[]
    OR?: LicitanteScalarWhereWithAggregatesInput[]
    NOT?: LicitanteScalarWhereWithAggregatesInput | LicitanteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Licitante"> | string
    razaoSocial?: StringWithAggregatesFilter<"Licitante"> | string
    cnpj?: StringWithAggregatesFilter<"Licitante"> | string
    tipoEmpresa?: EnumTipoEmpresaWithAggregatesFilter<"Licitante"> | $Enums.TipoEmpresa
  }

  export type PropostaWhereInput = {
    AND?: PropostaWhereInput | PropostaWhereInput[]
    OR?: PropostaWhereInput[]
    NOT?: PropostaWhereInput | PropostaWhereInput[]
    id?: StringFilter<"Proposta"> | string
    disputaId?: StringFilter<"Proposta"> | string
    licitanteId?: StringFilter<"Proposta"> | string
    itemId?: StringFilter<"Proposta"> | string
    valorCentavos?: IntFilter<"Proposta"> | number
    dataEnvio?: DateTimeFilter<"Proposta"> | Date | string
    arquivo?: StringNullableFilter<"Proposta"> | string | null
    status?: EnumStatusPropostaFilter<"Proposta"> | $Enums.StatusProposta
    observacao?: StringNullableFilter<"Proposta"> | string | null
    versao?: IntFilter<"Proposta"> | number
    createdBy?: StringFilter<"Proposta"> | string
    updatedBy?: StringNullableFilter<"Proposta"> | string | null
    deletedAt?: DateTimeNullableFilter<"Proposta"> | Date | string | null
    createdAt?: DateTimeFilter<"Proposta"> | Date | string
    updatedAt?: DateTimeFilter<"Proposta"> | Date | string
    disputa?: XOR<DisputaScalarRelationFilter, DisputaWhereInput>
    licitante?: XOR<LicitanteScalarRelationFilter, LicitanteWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type PropostaOrderByWithRelationInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    itemId?: SortOrder
    valorCentavos?: SortOrder
    dataEnvio?: SortOrder
    arquivo?: SortOrderInput | SortOrder
    status?: SortOrder
    observacao?: SortOrderInput | SortOrder
    versao?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disputa?: DisputaOrderByWithRelationInput
    licitante?: LicitanteOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type PropostaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    itemId_licitanteId_versao?: PropostaItemIdLicitanteIdVersaoCompoundUniqueInput
    AND?: PropostaWhereInput | PropostaWhereInput[]
    OR?: PropostaWhereInput[]
    NOT?: PropostaWhereInput | PropostaWhereInput[]
    disputaId?: StringFilter<"Proposta"> | string
    licitanteId?: StringFilter<"Proposta"> | string
    itemId?: StringFilter<"Proposta"> | string
    valorCentavos?: IntFilter<"Proposta"> | number
    dataEnvio?: DateTimeFilter<"Proposta"> | Date | string
    arquivo?: StringNullableFilter<"Proposta"> | string | null
    status?: EnumStatusPropostaFilter<"Proposta"> | $Enums.StatusProposta
    observacao?: StringNullableFilter<"Proposta"> | string | null
    versao?: IntFilter<"Proposta"> | number
    createdBy?: StringFilter<"Proposta"> | string
    updatedBy?: StringNullableFilter<"Proposta"> | string | null
    deletedAt?: DateTimeNullableFilter<"Proposta"> | Date | string | null
    createdAt?: DateTimeFilter<"Proposta"> | Date | string
    updatedAt?: DateTimeFilter<"Proposta"> | Date | string
    disputa?: XOR<DisputaScalarRelationFilter, DisputaWhereInput>
    licitante?: XOR<LicitanteScalarRelationFilter, LicitanteWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id" | "itemId_licitanteId_versao">

  export type PropostaOrderByWithAggregationInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    itemId?: SortOrder
    valorCentavos?: SortOrder
    dataEnvio?: SortOrder
    arquivo?: SortOrderInput | SortOrder
    status?: SortOrder
    observacao?: SortOrderInput | SortOrder
    versao?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropostaCountOrderByAggregateInput
    _avg?: PropostaAvgOrderByAggregateInput
    _max?: PropostaMaxOrderByAggregateInput
    _min?: PropostaMinOrderByAggregateInput
    _sum?: PropostaSumOrderByAggregateInput
  }

  export type PropostaScalarWhereWithAggregatesInput = {
    AND?: PropostaScalarWhereWithAggregatesInput | PropostaScalarWhereWithAggregatesInput[]
    OR?: PropostaScalarWhereWithAggregatesInput[]
    NOT?: PropostaScalarWhereWithAggregatesInput | PropostaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proposta"> | string
    disputaId?: StringWithAggregatesFilter<"Proposta"> | string
    licitanteId?: StringWithAggregatesFilter<"Proposta"> | string
    itemId?: StringWithAggregatesFilter<"Proposta"> | string
    valorCentavos?: IntWithAggregatesFilter<"Proposta"> | number
    dataEnvio?: DateTimeWithAggregatesFilter<"Proposta"> | Date | string
    arquivo?: StringNullableWithAggregatesFilter<"Proposta"> | string | null
    status?: EnumStatusPropostaWithAggregatesFilter<"Proposta"> | $Enums.StatusProposta
    observacao?: StringNullableWithAggregatesFilter<"Proposta"> | string | null
    versao?: IntWithAggregatesFilter<"Proposta"> | number
    createdBy?: StringWithAggregatesFilter<"Proposta"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"Proposta"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Proposta"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Proposta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Proposta"> | Date | string
  }

  export type LanceWhereInput = {
    AND?: LanceWhereInput | LanceWhereInput[]
    OR?: LanceWhereInput[]
    NOT?: LanceWhereInput | LanceWhereInput[]
    id?: StringFilter<"Lance"> | string
    disputaId?: StringFilter<"Lance"> | string
    licitanteId?: StringFilter<"Lance"> | string
    valorCentavos?: IntFilter<"Lance"> | number
    horario?: DateTimeFilter<"Lance"> | Date | string
    ip?: StringNullableFilter<"Lance"> | string | null
    userAgent?: StringNullableFilter<"Lance"> | string | null
    disputa?: XOR<DisputaScalarRelationFilter, DisputaWhereInput>
    licitante?: XOR<LicitanteScalarRelationFilter, LicitanteWhereInput>
  }

  export type LanceOrderByWithRelationInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    valorCentavos?: SortOrder
    horario?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    disputa?: DisputaOrderByWithRelationInput
    licitante?: LicitanteOrderByWithRelationInput
  }

  export type LanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LanceWhereInput | LanceWhereInput[]
    OR?: LanceWhereInput[]
    NOT?: LanceWhereInput | LanceWhereInput[]
    disputaId?: StringFilter<"Lance"> | string
    licitanteId?: StringFilter<"Lance"> | string
    valorCentavos?: IntFilter<"Lance"> | number
    horario?: DateTimeFilter<"Lance"> | Date | string
    ip?: StringNullableFilter<"Lance"> | string | null
    userAgent?: StringNullableFilter<"Lance"> | string | null
    disputa?: XOR<DisputaScalarRelationFilter, DisputaWhereInput>
    licitante?: XOR<LicitanteScalarRelationFilter, LicitanteWhereInput>
  }, "id">

  export type LanceOrderByWithAggregationInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    valorCentavos?: SortOrder
    horario?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    _count?: LanceCountOrderByAggregateInput
    _avg?: LanceAvgOrderByAggregateInput
    _max?: LanceMaxOrderByAggregateInput
    _min?: LanceMinOrderByAggregateInput
    _sum?: LanceSumOrderByAggregateInput
  }

  export type LanceScalarWhereWithAggregatesInput = {
    AND?: LanceScalarWhereWithAggregatesInput | LanceScalarWhereWithAggregatesInput[]
    OR?: LanceScalarWhereWithAggregatesInput[]
    NOT?: LanceScalarWhereWithAggregatesInput | LanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lance"> | string
    disputaId?: StringWithAggregatesFilter<"Lance"> | string
    licitanteId?: StringWithAggregatesFilter<"Lance"> | string
    valorCentavos?: IntWithAggregatesFilter<"Lance"> | number
    horario?: DateTimeWithAggregatesFilter<"Lance"> | Date | string
    ip?: StringNullableWithAggregatesFilter<"Lance"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Lance"> | string | null
  }

  export type DocumentoLicitanteWhereInput = {
    AND?: DocumentoLicitanteWhereInput | DocumentoLicitanteWhereInput[]
    OR?: DocumentoLicitanteWhereInput[]
    NOT?: DocumentoLicitanteWhereInput | DocumentoLicitanteWhereInput[]
    id?: StringFilter<"DocumentoLicitante"> | string
    disputaId?: StringFilter<"DocumentoLicitante"> | string
    licitanteId?: StringFilter<"DocumentoLicitante"> | string
    tipoDocumento?: EnumTipoDocumentoFilter<"DocumentoLicitante"> | $Enums.TipoDocumento
    nomeOriginal?: StringFilter<"DocumentoLicitante"> | string
    descricao?: StringNullableFilter<"DocumentoLicitante"> | string | null
    arquivoPath?: StringFilter<"DocumentoLicitante"> | string
    dataEnvio?: DateTimeFilter<"DocumentoLicitante"> | Date | string
    versao?: IntFilter<"DocumentoLicitante"> | number
    valido?: BoolFilter<"DocumentoLicitante"> | boolean
    hashDocumento?: StringNullableFilter<"DocumentoLicitante"> | string | null
    assinaturaBase64?: StringNullableFilter<"DocumentoLicitante"> | string | null
    assinadoPor?: StringNullableFilter<"DocumentoLicitante"> | string | null
    disputa?: XOR<DisputaScalarRelationFilter, DisputaWhereInput>
    licitante?: XOR<LicitanteScalarRelationFilter, LicitanteWhereInput>
  }

  export type DocumentoLicitanteOrderByWithRelationInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    tipoDocumento?: SortOrder
    nomeOriginal?: SortOrder
    descricao?: SortOrderInput | SortOrder
    arquivoPath?: SortOrder
    dataEnvio?: SortOrder
    versao?: SortOrder
    valido?: SortOrder
    hashDocumento?: SortOrderInput | SortOrder
    assinaturaBase64?: SortOrderInput | SortOrder
    assinadoPor?: SortOrderInput | SortOrder
    disputa?: DisputaOrderByWithRelationInput
    licitante?: LicitanteOrderByWithRelationInput
  }

  export type DocumentoLicitanteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentoLicitanteWhereInput | DocumentoLicitanteWhereInput[]
    OR?: DocumentoLicitanteWhereInput[]
    NOT?: DocumentoLicitanteWhereInput | DocumentoLicitanteWhereInput[]
    disputaId?: StringFilter<"DocumentoLicitante"> | string
    licitanteId?: StringFilter<"DocumentoLicitante"> | string
    tipoDocumento?: EnumTipoDocumentoFilter<"DocumentoLicitante"> | $Enums.TipoDocumento
    nomeOriginal?: StringFilter<"DocumentoLicitante"> | string
    descricao?: StringNullableFilter<"DocumentoLicitante"> | string | null
    arquivoPath?: StringFilter<"DocumentoLicitante"> | string
    dataEnvio?: DateTimeFilter<"DocumentoLicitante"> | Date | string
    versao?: IntFilter<"DocumentoLicitante"> | number
    valido?: BoolFilter<"DocumentoLicitante"> | boolean
    hashDocumento?: StringNullableFilter<"DocumentoLicitante"> | string | null
    assinaturaBase64?: StringNullableFilter<"DocumentoLicitante"> | string | null
    assinadoPor?: StringNullableFilter<"DocumentoLicitante"> | string | null
    disputa?: XOR<DisputaScalarRelationFilter, DisputaWhereInput>
    licitante?: XOR<LicitanteScalarRelationFilter, LicitanteWhereInput>
  }, "id">

  export type DocumentoLicitanteOrderByWithAggregationInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    tipoDocumento?: SortOrder
    nomeOriginal?: SortOrder
    descricao?: SortOrderInput | SortOrder
    arquivoPath?: SortOrder
    dataEnvio?: SortOrder
    versao?: SortOrder
    valido?: SortOrder
    hashDocumento?: SortOrderInput | SortOrder
    assinaturaBase64?: SortOrderInput | SortOrder
    assinadoPor?: SortOrderInput | SortOrder
    _count?: DocumentoLicitanteCountOrderByAggregateInput
    _avg?: DocumentoLicitanteAvgOrderByAggregateInput
    _max?: DocumentoLicitanteMaxOrderByAggregateInput
    _min?: DocumentoLicitanteMinOrderByAggregateInput
    _sum?: DocumentoLicitanteSumOrderByAggregateInput
  }

  export type DocumentoLicitanteScalarWhereWithAggregatesInput = {
    AND?: DocumentoLicitanteScalarWhereWithAggregatesInput | DocumentoLicitanteScalarWhereWithAggregatesInput[]
    OR?: DocumentoLicitanteScalarWhereWithAggregatesInput[]
    NOT?: DocumentoLicitanteScalarWhereWithAggregatesInput | DocumentoLicitanteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentoLicitante"> | string
    disputaId?: StringWithAggregatesFilter<"DocumentoLicitante"> | string
    licitanteId?: StringWithAggregatesFilter<"DocumentoLicitante"> | string
    tipoDocumento?: EnumTipoDocumentoWithAggregatesFilter<"DocumentoLicitante"> | $Enums.TipoDocumento
    nomeOriginal?: StringWithAggregatesFilter<"DocumentoLicitante"> | string
    descricao?: StringNullableWithAggregatesFilter<"DocumentoLicitante"> | string | null
    arquivoPath?: StringWithAggregatesFilter<"DocumentoLicitante"> | string
    dataEnvio?: DateTimeWithAggregatesFilter<"DocumentoLicitante"> | Date | string
    versao?: IntWithAggregatesFilter<"DocumentoLicitante"> | number
    valido?: BoolWithAggregatesFilter<"DocumentoLicitante"> | boolean
    hashDocumento?: StringNullableWithAggregatesFilter<"DocumentoLicitante"> | string | null
    assinaturaBase64?: StringNullableWithAggregatesFilter<"DocumentoLicitante"> | string | null
    assinadoPor?: StringNullableWithAggregatesFilter<"DocumentoLicitante"> | string | null
  }

  export type DocumentoObrigatorioWhereInput = {
    AND?: DocumentoObrigatorioWhereInput | DocumentoObrigatorioWhereInput[]
    OR?: DocumentoObrigatorioWhereInput[]
    NOT?: DocumentoObrigatorioWhereInput | DocumentoObrigatorioWhereInput[]
    id?: StringFilter<"DocumentoObrigatorio"> | string
    editalId?: StringFilter<"DocumentoObrigatorio"> | string
    tipoDocumento?: EnumTipoDocumentoFilter<"DocumentoObrigatorio"> | $Enums.TipoDocumento
    descricao?: StringFilter<"DocumentoObrigatorio"> | string
    edital?: XOR<EditalScalarRelationFilter, EditalWhereInput>
  }

  export type DocumentoObrigatorioOrderByWithRelationInput = {
    id?: SortOrder
    editalId?: SortOrder
    tipoDocumento?: SortOrder
    descricao?: SortOrder
    edital?: EditalOrderByWithRelationInput
  }

  export type DocumentoObrigatorioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentoObrigatorioWhereInput | DocumentoObrigatorioWhereInput[]
    OR?: DocumentoObrigatorioWhereInput[]
    NOT?: DocumentoObrigatorioWhereInput | DocumentoObrigatorioWhereInput[]
    editalId?: StringFilter<"DocumentoObrigatorio"> | string
    tipoDocumento?: EnumTipoDocumentoFilter<"DocumentoObrigatorio"> | $Enums.TipoDocumento
    descricao?: StringFilter<"DocumentoObrigatorio"> | string
    edital?: XOR<EditalScalarRelationFilter, EditalWhereInput>
  }, "id">

  export type DocumentoObrigatorioOrderByWithAggregationInput = {
    id?: SortOrder
    editalId?: SortOrder
    tipoDocumento?: SortOrder
    descricao?: SortOrder
    _count?: DocumentoObrigatorioCountOrderByAggregateInput
    _max?: DocumentoObrigatorioMaxOrderByAggregateInput
    _min?: DocumentoObrigatorioMinOrderByAggregateInput
  }

  export type DocumentoObrigatorioScalarWhereWithAggregatesInput = {
    AND?: DocumentoObrigatorioScalarWhereWithAggregatesInput | DocumentoObrigatorioScalarWhereWithAggregatesInput[]
    OR?: DocumentoObrigatorioScalarWhereWithAggregatesInput[]
    NOT?: DocumentoObrigatorioScalarWhereWithAggregatesInput | DocumentoObrigatorioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentoObrigatorio"> | string
    editalId?: StringWithAggregatesFilter<"DocumentoObrigatorio"> | string
    tipoDocumento?: EnumTipoDocumentoWithAggregatesFilter<"DocumentoObrigatorio"> | $Enums.TipoDocumento
    descricao?: StringWithAggregatesFilter<"DocumentoObrigatorio"> | string
  }

  export type MensagemChatWhereInput = {
    AND?: MensagemChatWhereInput | MensagemChatWhereInput[]
    OR?: MensagemChatWhereInput[]
    NOT?: MensagemChatWhereInput | MensagemChatWhereInput[]
    id?: StringFilter<"MensagemChat"> | string
    editalId?: StringFilter<"MensagemChat"> | string
    autorId?: StringFilter<"MensagemChat"> | string
    tipoAutor?: EnumTipoAutorMensagemFilter<"MensagemChat"> | $Enums.TipoAutorMensagem
    conteudo?: StringFilter<"MensagemChat"> | string
    createdAt?: DateTimeFilter<"MensagemChat"> | Date | string
    updatedAt?: DateTimeFilter<"MensagemChat"> | Date | string
    disputaId?: StringNullableFilter<"MensagemChat"> | string | null
    licitanteId?: StringNullableFilter<"MensagemChat"> | string | null
    edital?: XOR<EditalScalarRelationFilter, EditalWhereInput>
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Disputa?: XOR<DisputaNullableScalarRelationFilter, DisputaWhereInput> | null
    Licitante?: XOR<LicitanteNullableScalarRelationFilter, LicitanteWhereInput> | null
  }

  export type MensagemChatOrderByWithRelationInput = {
    id?: SortOrder
    editalId?: SortOrder
    autorId?: SortOrder
    tipoAutor?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disputaId?: SortOrderInput | SortOrder
    licitanteId?: SortOrderInput | SortOrder
    edital?: EditalOrderByWithRelationInput
    autor?: UsuarioOrderByWithRelationInput
    Disputa?: DisputaOrderByWithRelationInput
    Licitante?: LicitanteOrderByWithRelationInput
  }

  export type MensagemChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MensagemChatWhereInput | MensagemChatWhereInput[]
    OR?: MensagemChatWhereInput[]
    NOT?: MensagemChatWhereInput | MensagemChatWhereInput[]
    editalId?: StringFilter<"MensagemChat"> | string
    autorId?: StringFilter<"MensagemChat"> | string
    tipoAutor?: EnumTipoAutorMensagemFilter<"MensagemChat"> | $Enums.TipoAutorMensagem
    conteudo?: StringFilter<"MensagemChat"> | string
    createdAt?: DateTimeFilter<"MensagemChat"> | Date | string
    updatedAt?: DateTimeFilter<"MensagemChat"> | Date | string
    disputaId?: StringNullableFilter<"MensagemChat"> | string | null
    licitanteId?: StringNullableFilter<"MensagemChat"> | string | null
    edital?: XOR<EditalScalarRelationFilter, EditalWhereInput>
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Disputa?: XOR<DisputaNullableScalarRelationFilter, DisputaWhereInput> | null
    Licitante?: XOR<LicitanteNullableScalarRelationFilter, LicitanteWhereInput> | null
  }, "id">

  export type MensagemChatOrderByWithAggregationInput = {
    id?: SortOrder
    editalId?: SortOrder
    autorId?: SortOrder
    tipoAutor?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disputaId?: SortOrderInput | SortOrder
    licitanteId?: SortOrderInput | SortOrder
    _count?: MensagemChatCountOrderByAggregateInput
    _max?: MensagemChatMaxOrderByAggregateInput
    _min?: MensagemChatMinOrderByAggregateInput
  }

  export type MensagemChatScalarWhereWithAggregatesInput = {
    AND?: MensagemChatScalarWhereWithAggregatesInput | MensagemChatScalarWhereWithAggregatesInput[]
    OR?: MensagemChatScalarWhereWithAggregatesInput[]
    NOT?: MensagemChatScalarWhereWithAggregatesInput | MensagemChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MensagemChat"> | string
    editalId?: StringWithAggregatesFilter<"MensagemChat"> | string
    autorId?: StringWithAggregatesFilter<"MensagemChat"> | string
    tipoAutor?: EnumTipoAutorMensagemWithAggregatesFilter<"MensagemChat"> | $Enums.TipoAutorMensagem
    conteudo?: StringWithAggregatesFilter<"MensagemChat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MensagemChat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MensagemChat"> | Date | string
    disputaId?: StringNullableWithAggregatesFilter<"MensagemChat"> | string | null
    licitanteId?: StringNullableWithAggregatesFilter<"MensagemChat"> | string | null
  }

  export type SessaoWhereInput = {
    AND?: SessaoWhereInput | SessaoWhereInput[]
    OR?: SessaoWhereInput[]
    NOT?: SessaoWhereInput | SessaoWhereInput[]
    id?: StringFilter<"Sessao"> | string
    licitanteId?: StringFilter<"Sessao"> | string
    disputaId?: StringFilter<"Sessao"> | string
    inicio?: DateTimeFilter<"Sessao"> | Date | string
    fim?: DateTimeNullableFilter<"Sessao"> | Date | string | null
    ip?: StringFilter<"Sessao"> | string
    hash?: StringFilter<"Sessao"> | string
    licitante?: XOR<LicitanteScalarRelationFilter, LicitanteWhereInput>
    disputa?: XOR<DisputaScalarRelationFilter, DisputaWhereInput>
  }

  export type SessaoOrderByWithRelationInput = {
    id?: SortOrder
    licitanteId?: SortOrder
    disputaId?: SortOrder
    inicio?: SortOrder
    fim?: SortOrderInput | SortOrder
    ip?: SortOrder
    hash?: SortOrder
    licitante?: LicitanteOrderByWithRelationInput
    disputa?: DisputaOrderByWithRelationInput
  }

  export type SessaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessaoWhereInput | SessaoWhereInput[]
    OR?: SessaoWhereInput[]
    NOT?: SessaoWhereInput | SessaoWhereInput[]
    licitanteId?: StringFilter<"Sessao"> | string
    disputaId?: StringFilter<"Sessao"> | string
    inicio?: DateTimeFilter<"Sessao"> | Date | string
    fim?: DateTimeNullableFilter<"Sessao"> | Date | string | null
    ip?: StringFilter<"Sessao"> | string
    hash?: StringFilter<"Sessao"> | string
    licitante?: XOR<LicitanteScalarRelationFilter, LicitanteWhereInput>
    disputa?: XOR<DisputaScalarRelationFilter, DisputaWhereInput>
  }, "id">

  export type SessaoOrderByWithAggregationInput = {
    id?: SortOrder
    licitanteId?: SortOrder
    disputaId?: SortOrder
    inicio?: SortOrder
    fim?: SortOrderInput | SortOrder
    ip?: SortOrder
    hash?: SortOrder
    _count?: SessaoCountOrderByAggregateInput
    _max?: SessaoMaxOrderByAggregateInput
    _min?: SessaoMinOrderByAggregateInput
  }

  export type SessaoScalarWhereWithAggregatesInput = {
    AND?: SessaoScalarWhereWithAggregatesInput | SessaoScalarWhereWithAggregatesInput[]
    OR?: SessaoScalarWhereWithAggregatesInput[]
    NOT?: SessaoScalarWhereWithAggregatesInput | SessaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sessao"> | string
    licitanteId?: StringWithAggregatesFilter<"Sessao"> | string
    disputaId?: StringWithAggregatesFilter<"Sessao"> | string
    inicio?: DateTimeWithAggregatesFilter<"Sessao"> | Date | string
    fim?: DateTimeNullableWithAggregatesFilter<"Sessao"> | Date | string | null
    ip?: StringWithAggregatesFilter<"Sessao"> | string
    hash?: StringWithAggregatesFilter<"Sessao"> | string
  }

  export type LogAtividadeWhereInput = {
    AND?: LogAtividadeWhereInput | LogAtividadeWhereInput[]
    OR?: LogAtividadeWhereInput[]
    NOT?: LogAtividadeWhereInput | LogAtividadeWhereInput[]
    id?: StringFilter<"LogAtividade"> | string
    disputaId?: StringFilter<"LogAtividade"> | string
    usuarioId?: StringNullableFilter<"LogAtividade"> | string | null
    acao?: StringFilter<"LogAtividade"> | string
    detalhes?: StringNullableFilter<"LogAtividade"> | string | null
    data?: DateTimeFilter<"LogAtividade"> | Date | string
    disputa?: XOR<DisputaScalarRelationFilter, DisputaWhereInput>
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type LogAtividadeOrderByWithRelationInput = {
    id?: SortOrder
    disputaId?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    acao?: SortOrder
    detalhes?: SortOrderInput | SortOrder
    data?: SortOrder
    disputa?: DisputaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type LogAtividadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogAtividadeWhereInput | LogAtividadeWhereInput[]
    OR?: LogAtividadeWhereInput[]
    NOT?: LogAtividadeWhereInput | LogAtividadeWhereInput[]
    disputaId?: StringFilter<"LogAtividade"> | string
    usuarioId?: StringNullableFilter<"LogAtividade"> | string | null
    acao?: StringFilter<"LogAtividade"> | string
    detalhes?: StringNullableFilter<"LogAtividade"> | string | null
    data?: DateTimeFilter<"LogAtividade"> | Date | string
    disputa?: XOR<DisputaScalarRelationFilter, DisputaWhereInput>
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id">

  export type LogAtividadeOrderByWithAggregationInput = {
    id?: SortOrder
    disputaId?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    acao?: SortOrder
    detalhes?: SortOrderInput | SortOrder
    data?: SortOrder
    _count?: LogAtividadeCountOrderByAggregateInput
    _max?: LogAtividadeMaxOrderByAggregateInput
    _min?: LogAtividadeMinOrderByAggregateInput
  }

  export type LogAtividadeScalarWhereWithAggregatesInput = {
    AND?: LogAtividadeScalarWhereWithAggregatesInput | LogAtividadeScalarWhereWithAggregatesInput[]
    OR?: LogAtividadeScalarWhereWithAggregatesInput[]
    NOT?: LogAtividadeScalarWhereWithAggregatesInput | LogAtividadeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogAtividade"> | string
    disputaId?: StringWithAggregatesFilter<"LogAtividade"> | string
    usuarioId?: StringNullableWithAggregatesFilter<"LogAtividade"> | string | null
    acao?: StringWithAggregatesFilter<"LogAtividade"> | string
    detalhes?: StringNullableWithAggregatesFilter<"LogAtividade"> | string | null
    data?: DateTimeWithAggregatesFilter<"LogAtividade"> | Date | string
  }

  export type LoteWhereInput = {
    AND?: LoteWhereInput | LoteWhereInput[]
    OR?: LoteWhereInput[]
    NOT?: LoteWhereInput | LoteWhereInput[]
    id?: StringFilter<"Lote"> | string
    numero?: StringFilter<"Lote"> | string
    descricao?: StringFilter<"Lote"> | string
    editalId?: StringFilter<"Lote"> | string
    status?: StringFilter<"Lote"> | string
    createdAt?: DateTimeFilter<"Lote"> | Date | string
    updatedAt?: DateTimeFilter<"Lote"> | Date | string
    itens?: ItemListRelationFilter
    edital?: XOR<EditalScalarRelationFilter, EditalWhereInput>
  }

  export type LoteOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    descricao?: SortOrder
    editalId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itens?: ItemOrderByRelationAggregateInput
    edital?: EditalOrderByWithRelationInput
  }

  export type LoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numero_editalId?: LoteNumeroEditalIdCompoundUniqueInput
    AND?: LoteWhereInput | LoteWhereInput[]
    OR?: LoteWhereInput[]
    NOT?: LoteWhereInput | LoteWhereInput[]
    numero?: StringFilter<"Lote"> | string
    descricao?: StringFilter<"Lote"> | string
    editalId?: StringFilter<"Lote"> | string
    status?: StringFilter<"Lote"> | string
    createdAt?: DateTimeFilter<"Lote"> | Date | string
    updatedAt?: DateTimeFilter<"Lote"> | Date | string
    itens?: ItemListRelationFilter
    edital?: XOR<EditalScalarRelationFilter, EditalWhereInput>
  }, "id" | "numero_editalId">

  export type LoteOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    descricao?: SortOrder
    editalId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LoteCountOrderByAggregateInput
    _max?: LoteMaxOrderByAggregateInput
    _min?: LoteMinOrderByAggregateInput
  }

  export type LoteScalarWhereWithAggregatesInput = {
    AND?: LoteScalarWhereWithAggregatesInput | LoteScalarWhereWithAggregatesInput[]
    OR?: LoteScalarWhereWithAggregatesInput[]
    NOT?: LoteScalarWhereWithAggregatesInput | LoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lote"> | string
    numero?: StringWithAggregatesFilter<"Lote"> | string
    descricao?: StringWithAggregatesFilter<"Lote"> | string
    editalId?: StringWithAggregatesFilter<"Lote"> | string
    status?: StringWithAggregatesFilter<"Lote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lote"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lote"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    numero?: StringFilter<"Item"> | string
    descricao?: StringFilter<"Item"> | string
    quantidade?: IntFilter<"Item"> | number
    unidade?: StringFilter<"Item"> | string
    valorEstimado?: IntNullableFilter<"Item"> | number | null
    loteId?: StringFilter<"Item"> | string
    status?: StringFilter<"Item"> | string
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    lote?: XOR<LoteScalarRelationFilter, LoteWhereInput>
    propostas?: PropostaListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    valorEstimado?: SortOrderInput | SortOrder
    loteId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lote?: LoteOrderByWithRelationInput
    propostas?: PropostaOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numero_loteId?: ItemNumeroLoteIdCompoundUniqueInput
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    numero?: StringFilter<"Item"> | string
    descricao?: StringFilter<"Item"> | string
    quantidade?: IntFilter<"Item"> | number
    unidade?: StringFilter<"Item"> | string
    valorEstimado?: IntNullableFilter<"Item"> | number | null
    loteId?: StringFilter<"Item"> | string
    status?: StringFilter<"Item"> | string
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    lote?: XOR<LoteScalarRelationFilter, LoteWhereInput>
    propostas?: PropostaListRelationFilter
  }, "id" | "numero_loteId">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    valorEstimado?: SortOrderInput | SortOrder
    loteId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    numero?: StringWithAggregatesFilter<"Item"> | string
    descricao?: StringWithAggregatesFilter<"Item"> | string
    quantidade?: IntWithAggregatesFilter<"Item"> | number
    unidade?: StringWithAggregatesFilter<"Item"> | string
    valorEstimado?: IntNullableWithAggregatesFilter<"Item"> | number | null
    loteId?: StringWithAggregatesFilter<"Item"> | string
    status?: StringWithAggregatesFilter<"Item"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    perfil: $Enums.PerfilUsuario
    LogAtividade?: LogAtividadeCreateNestedManyWithoutUsuarioInput
    MensagemChat?: MensagemChatCreateNestedManyWithoutAutorInput
    licitante?: LicitanteCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    perfil: $Enums.PerfilUsuario
    licitanteId?: string | null
    LogAtividade?: LogAtividadeUncheckedCreateNestedManyWithoutUsuarioInput
    MensagemChat?: MensagemChatUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    LogAtividade?: LogAtividadeUpdateManyWithoutUsuarioNestedInput
    MensagemChat?: MensagemChatUpdateManyWithoutAutorNestedInput
    licitante?: LicitanteUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    licitanteId?: NullableStringFieldUpdateOperationsInput | string | null
    LogAtividade?: LogAtividadeUncheckedUpdateManyWithoutUsuarioNestedInput
    MensagemChat?: MensagemChatUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha: string
    perfil: $Enums.PerfilUsuario
    licitanteId?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    licitanteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EditalCreateInput = {
    id?: string
    numero: string
    objeto: string
    modalidade: string
    status: string
    dataAbertura: Date | string
    arquivoPdf?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disputas?: DisputaCreateNestedManyWithoutEditalInput
    documentosObrigatorios?: DocumentoObrigatorioCreateNestedManyWithoutEditalInput
    lotes?: LoteCreateNestedManyWithoutEditalInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutEditalInput
  }

  export type EditalUncheckedCreateInput = {
    id?: string
    numero: string
    objeto: string
    modalidade: string
    status: string
    dataAbertura: Date | string
    arquivoPdf?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disputas?: DisputaUncheckedCreateNestedManyWithoutEditalInput
    documentosObrigatorios?: DocumentoObrigatorioUncheckedCreateNestedManyWithoutEditalInput
    lotes?: LoteUncheckedCreateNestedManyWithoutEditalInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutEditalInput
  }

  export type EditalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivoPdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputas?: DisputaUpdateManyWithoutEditalNestedInput
    documentosObrigatorios?: DocumentoObrigatorioUpdateManyWithoutEditalNestedInput
    lotes?: LoteUpdateManyWithoutEditalNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutEditalNestedInput
  }

  export type EditalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivoPdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputas?: DisputaUncheckedUpdateManyWithoutEditalNestedInput
    documentosObrigatorios?: DocumentoObrigatorioUncheckedUpdateManyWithoutEditalNestedInput
    lotes?: LoteUncheckedUpdateManyWithoutEditalNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutEditalNestedInput
  }

  export type EditalCreateManyInput = {
    id?: string
    numero: string
    objeto: string
    modalidade: string
    status: string
    dataAbertura: Date | string
    arquivoPdf?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EditalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivoPdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivoPdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputaCreateInput = {
    id?: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    edital: EditalCreateNestedOneWithoutDisputasInput
    propostas?: PropostaCreateNestedManyWithoutDisputaInput
    lances?: LanceCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoCreateNestedManyWithoutDisputaInput
  }

  export type DisputaUncheckedCreateInput = {
    id?: string
    editalId: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    propostas?: PropostaUncheckedCreateNestedManyWithoutDisputaInput
    lances?: LanceUncheckedCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteUncheckedCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeUncheckedCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoUncheckedCreateNestedManyWithoutDisputaInput
  }

  export type DisputaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    edital?: EditalUpdateOneRequiredWithoutDisputasNestedInput
    propostas?: PropostaUpdateManyWithoutDisputaNestedInput
    lances?: LanceUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUpdateManyWithoutDisputaNestedInput
  }

  export type DisputaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    propostas?: PropostaUncheckedUpdateManyWithoutDisputaNestedInput
    lances?: LanceUncheckedUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUncheckedUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUncheckedUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUncheckedUpdateManyWithoutDisputaNestedInput
  }

  export type DisputaCreateManyInput = {
    id?: string
    editalId: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
  }

  export type DisputaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DisputaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LicitanteCreateInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    usuario?: UsuarioCreateNestedOneWithoutLicitanteInput
    propostas?: PropostaCreateNestedManyWithoutLicitanteInput
    lances?: LanceCreateNestedManyWithoutLicitanteInput
    documentos?: DocumentoLicitanteCreateNestedManyWithoutLicitanteInput
    sessoes?: SessaoCreateNestedManyWithoutLicitanteInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteUncheckedCreateInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    usuario?: UsuarioUncheckedCreateNestedOneWithoutLicitanteInput
    propostas?: PropostaUncheckedCreateNestedManyWithoutLicitanteInput
    lances?: LanceUncheckedCreateNestedManyWithoutLicitanteInput
    documentos?: DocumentoLicitanteUncheckedCreateNestedManyWithoutLicitanteInput
    sessoes?: SessaoUncheckedCreateNestedManyWithoutLicitanteInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    usuario?: UsuarioUpdateOneWithoutLicitanteNestedInput
    propostas?: PropostaUpdateManyWithoutLicitanteNestedInput
    lances?: LanceUpdateManyWithoutLicitanteNestedInput
    documentos?: DocumentoLicitanteUpdateManyWithoutLicitanteNestedInput
    sessoes?: SessaoUpdateManyWithoutLicitanteNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutLicitanteNestedInput
  }

  export type LicitanteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    usuario?: UsuarioUncheckedUpdateOneWithoutLicitanteNestedInput
    propostas?: PropostaUncheckedUpdateManyWithoutLicitanteNestedInput
    lances?: LanceUncheckedUpdateManyWithoutLicitanteNestedInput
    documentos?: DocumentoLicitanteUncheckedUpdateManyWithoutLicitanteNestedInput
    sessoes?: SessaoUncheckedUpdateManyWithoutLicitanteNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutLicitanteNestedInput
  }

  export type LicitanteCreateManyInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
  }

  export type LicitanteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
  }

  export type LicitanteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
  }

  export type PropostaCreateInput = {
    id?: string
    valorCentavos: number
    dataEnvio: Date | string
    arquivo?: string | null
    status?: $Enums.StatusProposta
    observacao?: string | null
    versao?: number
    createdBy: string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disputa: DisputaCreateNestedOneWithoutPropostasInput
    licitante: LicitanteCreateNestedOneWithoutPropostasInput
    item: ItemCreateNestedOneWithoutPropostasInput
  }

  export type PropostaUncheckedCreateInput = {
    id?: string
    disputaId: string
    licitanteId: string
    itemId: string
    valorCentavos: number
    dataEnvio: Date | string
    arquivo?: string | null
    status?: $Enums.StatusProposta
    observacao?: string | null
    versao?: number
    createdBy: string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    versao?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputa?: DisputaUpdateOneRequiredWithoutPropostasNestedInput
    licitante?: LicitanteUpdateOneRequiredWithoutPropostasNestedInput
    item?: ItemUpdateOneRequiredWithoutPropostasNestedInput
  }

  export type PropostaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    versao?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaCreateManyInput = {
    id?: string
    disputaId: string
    licitanteId: string
    itemId: string
    valorCentavos: number
    dataEnvio: Date | string
    arquivo?: string | null
    status?: $Enums.StatusProposta
    observacao?: string | null
    versao?: number
    createdBy: string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    versao?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    versao?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanceCreateInput = {
    id?: string
    valorCentavos: number
    horario: Date | string
    ip?: string | null
    userAgent?: string | null
    disputa: DisputaCreateNestedOneWithoutLancesInput
    licitante: LicitanteCreateNestedOneWithoutLancesInput
  }

  export type LanceUncheckedCreateInput = {
    id?: string
    disputaId: string
    licitanteId: string
    valorCentavos: number
    horario: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type LanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    disputa?: DisputaUpdateOneRequiredWithoutLancesNestedInput
    licitante?: LicitanteUpdateOneRequiredWithoutLancesNestedInput
  }

  export type LanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LanceCreateManyInput = {
    id?: string
    disputaId: string
    licitanteId: string
    valorCentavos: number
    horario: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type LanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentoLicitanteCreateInput = {
    id?: string
    tipoDocumento: $Enums.TipoDocumento
    nomeOriginal: string
    descricao?: string | null
    arquivoPath: string
    dataEnvio: Date | string
    versao?: number
    valido?: boolean
    hashDocumento?: string | null
    assinaturaBase64?: string | null
    assinadoPor?: string | null
    disputa: DisputaCreateNestedOneWithoutDocumentosInput
    licitante: LicitanteCreateNestedOneWithoutDocumentosInput
  }

  export type DocumentoLicitanteUncheckedCreateInput = {
    id?: string
    disputaId: string
    licitanteId: string
    tipoDocumento: $Enums.TipoDocumento
    nomeOriginal: string
    descricao?: string | null
    arquivoPath: string
    dataEnvio: Date | string
    versao?: number
    valido?: boolean
    hashDocumento?: string | null
    assinaturaBase64?: string | null
    assinadoPor?: string | null
  }

  export type DocumentoLicitanteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoPath?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    versao?: IntFieldUpdateOperationsInput | number
    valido?: BoolFieldUpdateOperationsInput | boolean
    hashDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    assinaturaBase64?: NullableStringFieldUpdateOperationsInput | string | null
    assinadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    disputa?: DisputaUpdateOneRequiredWithoutDocumentosNestedInput
    licitante?: LicitanteUpdateOneRequiredWithoutDocumentosNestedInput
  }

  export type DocumentoLicitanteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoPath?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    versao?: IntFieldUpdateOperationsInput | number
    valido?: BoolFieldUpdateOperationsInput | boolean
    hashDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    assinaturaBase64?: NullableStringFieldUpdateOperationsInput | string | null
    assinadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentoLicitanteCreateManyInput = {
    id?: string
    disputaId: string
    licitanteId: string
    tipoDocumento: $Enums.TipoDocumento
    nomeOriginal: string
    descricao?: string | null
    arquivoPath: string
    dataEnvio: Date | string
    versao?: number
    valido?: boolean
    hashDocumento?: string | null
    assinaturaBase64?: string | null
    assinadoPor?: string | null
  }

  export type DocumentoLicitanteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoPath?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    versao?: IntFieldUpdateOperationsInput | number
    valido?: BoolFieldUpdateOperationsInput | boolean
    hashDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    assinaturaBase64?: NullableStringFieldUpdateOperationsInput | string | null
    assinadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentoLicitanteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoPath?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    versao?: IntFieldUpdateOperationsInput | number
    valido?: BoolFieldUpdateOperationsInput | boolean
    hashDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    assinaturaBase64?: NullableStringFieldUpdateOperationsInput | string | null
    assinadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentoObrigatorioCreateInput = {
    id?: string
    tipoDocumento: $Enums.TipoDocumento
    descricao: string
    edital: EditalCreateNestedOneWithoutDocumentosObrigatoriosInput
  }

  export type DocumentoObrigatorioUncheckedCreateInput = {
    id?: string
    editalId: string
    tipoDocumento: $Enums.TipoDocumento
    descricao: string
  }

  export type DocumentoObrigatorioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    descricao?: StringFieldUpdateOperationsInput | string
    edital?: EditalUpdateOneRequiredWithoutDocumentosObrigatoriosNestedInput
  }

  export type DocumentoObrigatorioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoObrigatorioCreateManyInput = {
    id?: string
    editalId: string
    tipoDocumento: $Enums.TipoDocumento
    descricao: string
  }

  export type DocumentoObrigatorioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoObrigatorioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemChatCreateInput = {
    id?: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    edital: EditalCreateNestedOneWithoutMensagensChatInput
    autor: UsuarioCreateNestedOneWithoutMensagemChatInput
    Disputa?: DisputaCreateNestedOneWithoutMensagensChatInput
    Licitante?: LicitanteCreateNestedOneWithoutMensagensChatInput
  }

  export type MensagemChatUncheckedCreateInput = {
    id?: string
    editalId: string
    autorId: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disputaId?: string | null
    licitanteId?: string | null
  }

  export type MensagemChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    edital?: EditalUpdateOneRequiredWithoutMensagensChatNestedInput
    autor?: UsuarioUpdateOneRequiredWithoutMensagemChatNestedInput
    Disputa?: DisputaUpdateOneWithoutMensagensChatNestedInput
    Licitante?: LicitanteUpdateOneWithoutMensagensChatNestedInput
  }

  export type MensagemChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    autorId?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputaId?: NullableStringFieldUpdateOperationsInput | string | null
    licitanteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MensagemChatCreateManyInput = {
    id?: string
    editalId: string
    autorId: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disputaId?: string | null
    licitanteId?: string | null
  }

  export type MensagemChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    autorId?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputaId?: NullableStringFieldUpdateOperationsInput | string | null
    licitanteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessaoCreateInput = {
    id?: string
    inicio: Date | string
    fim?: Date | string | null
    ip: string
    hash: string
    licitante: LicitanteCreateNestedOneWithoutSessoesInput
    disputa: DisputaCreateNestedOneWithoutSessaoInput
  }

  export type SessaoUncheckedCreateInput = {
    id?: string
    licitanteId: string
    disputaId: string
    inicio: Date | string
    fim?: Date | string | null
    ip: string
    hash: string
  }

  export type SessaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    licitante?: LicitanteUpdateOneRequiredWithoutSessoesNestedInput
    disputa?: DisputaUpdateOneRequiredWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type SessaoCreateManyInput = {
    id?: string
    licitanteId: string
    disputaId: string
    inicio: Date | string
    fim?: Date | string | null
    ip: string
    hash: string
  }

  export type SessaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type SessaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type LogAtividadeCreateInput = {
    id?: string
    acao: string
    detalhes?: string | null
    data?: Date | string
    disputa: DisputaCreateNestedOneWithoutLogsInput
    usuario?: UsuarioCreateNestedOneWithoutLogAtividadeInput
  }

  export type LogAtividadeUncheckedCreateInput = {
    id?: string
    disputaId: string
    usuarioId?: string | null
    acao: string
    detalhes?: string | null
    data?: Date | string
  }

  export type LogAtividadeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    disputa?: DisputaUpdateOneRequiredWithoutLogsNestedInput
    usuario?: UsuarioUpdateOneWithoutLogAtividadeNestedInput
  }

  export type LogAtividadeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    acao?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAtividadeCreateManyInput = {
    id?: string
    disputaId: string
    usuarioId?: string | null
    acao: string
    detalhes?: string | null
    data?: Date | string
  }

  export type LogAtividadeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAtividadeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    acao?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoteCreateInput = {
    id?: string
    numero: string
    descricao: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemCreateNestedManyWithoutLoteInput
    edital: EditalCreateNestedOneWithoutLotesInput
  }

  export type LoteUncheckedCreateInput = {
    id?: string
    numero: string
    descricao: string
    editalId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemUncheckedCreateNestedManyWithoutLoteInput
  }

  export type LoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemUpdateManyWithoutLoteNestedInput
    edital?: EditalUpdateOneRequiredWithoutLotesNestedInput
  }

  export type LoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemUncheckedUpdateManyWithoutLoteNestedInput
  }

  export type LoteCreateManyInput = {
    id?: string
    numero: string
    descricao: string
    editalId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    id?: string
    numero: string
    descricao: string
    quantidade: number
    unidade: string
    valorEstimado?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lote: LoteCreateNestedOneWithoutItensInput
    propostas?: PropostaCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    numero: string
    descricao: string
    quantidade: number
    unidade: string
    valorEstimado?: number | null
    loteId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    propostas?: PropostaUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    valorEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lote?: LoteUpdateOneRequiredWithoutItensNestedInput
    propostas?: PropostaUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    valorEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    loteId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propostas?: PropostaUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    numero: string
    descricao: string
    quantidade: number
    unidade: string
    valorEstimado?: number | null
    loteId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    valorEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    valorEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    loteId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPerfilUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.PerfilUsuario | EnumPerfilUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilUsuarioFilter<$PrismaModel> | $Enums.PerfilUsuario
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LogAtividadeListRelationFilter = {
    every?: LogAtividadeWhereInput
    some?: LogAtividadeWhereInput
    none?: LogAtividadeWhereInput
  }

  export type MensagemChatListRelationFilter = {
    every?: MensagemChatWhereInput
    some?: MensagemChatWhereInput
    none?: MensagemChatWhereInput
  }

  export type LicitanteNullableScalarRelationFilter = {
    is?: LicitanteWhereInput | null
    isNot?: LicitanteWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LogAtividadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MensagemChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
    licitanteId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
    licitanteId?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
    licitanteId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPerfilUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PerfilUsuario | EnumPerfilUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.PerfilUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPerfilUsuarioFilter<$PrismaModel>
    _max?: NestedEnumPerfilUsuarioFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DisputaListRelationFilter = {
    every?: DisputaWhereInput
    some?: DisputaWhereInput
    none?: DisputaWhereInput
  }

  export type DocumentoObrigatorioListRelationFilter = {
    every?: DocumentoObrigatorioWhereInput
    some?: DocumentoObrigatorioWhereInput
    none?: DocumentoObrigatorioWhereInput
  }

  export type LoteListRelationFilter = {
    every?: LoteWhereInput
    some?: LoteWhereInput
    none?: LoteWhereInput
  }

  export type DisputaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentoObrigatorioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EditalCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    objeto?: SortOrder
    modalidade?: SortOrder
    status?: SortOrder
    dataAbertura?: SortOrder
    arquivoPdf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EditalMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    objeto?: SortOrder
    modalidade?: SortOrder
    status?: SortOrder
    dataAbertura?: SortOrder
    arquivoPdf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EditalMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    objeto?: SortOrder
    modalidade?: SortOrder
    status?: SortOrder
    dataAbertura?: SortOrder
    arquivoPdf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDisputaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputaStatus | EnumDisputaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputaStatus[] | ListEnumDisputaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputaStatus[] | ListEnumDisputaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputaStatusFilter<$PrismaModel> | $Enums.DisputaStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EditalScalarRelationFilter = {
    is?: EditalWhereInput
    isNot?: EditalWhereInput
  }

  export type PropostaListRelationFilter = {
    every?: PropostaWhereInput
    some?: PropostaWhereInput
    none?: PropostaWhereInput
  }

  export type LanceListRelationFilter = {
    every?: LanceWhereInput
    some?: LanceWhereInput
    none?: LanceWhereInput
  }

  export type DocumentoLicitanteListRelationFilter = {
    every?: DocumentoLicitanteWhereInput
    some?: DocumentoLicitanteWhereInput
    none?: DocumentoLicitanteWhereInput
  }

  export type SessaoListRelationFilter = {
    every?: SessaoWhereInput
    some?: SessaoWhereInput
    none?: SessaoWhereInput
  }

  export type PropostaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentoLicitanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisputaCountOrderByAggregateInput = {
    id?: SortOrder
    editalId?: SortOrder
    status?: SortOrder
    inicio?: SortOrder
    fimPrevisto?: SortOrder
    encerramento?: SortOrder
    tempoRestante?: SortOrder
  }

  export type DisputaAvgOrderByAggregateInput = {
    tempoRestante?: SortOrder
  }

  export type DisputaMaxOrderByAggregateInput = {
    id?: SortOrder
    editalId?: SortOrder
    status?: SortOrder
    inicio?: SortOrder
    fimPrevisto?: SortOrder
    encerramento?: SortOrder
    tempoRestante?: SortOrder
  }

  export type DisputaMinOrderByAggregateInput = {
    id?: SortOrder
    editalId?: SortOrder
    status?: SortOrder
    inicio?: SortOrder
    fimPrevisto?: SortOrder
    encerramento?: SortOrder
    tempoRestante?: SortOrder
  }

  export type DisputaSumOrderByAggregateInput = {
    tempoRestante?: SortOrder
  }

  export type EnumDisputaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputaStatus | EnumDisputaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputaStatus[] | ListEnumDisputaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputaStatus[] | ListEnumDisputaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputaStatusWithAggregatesFilter<$PrismaModel> | $Enums.DisputaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisputaStatusFilter<$PrismaModel>
    _max?: NestedEnumDisputaStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumTipoEmpresaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEmpresa | EnumTipoEmpresaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEmpresa[] | ListEnumTipoEmpresaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEmpresa[] | ListEnumTipoEmpresaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEmpresaFilter<$PrismaModel> | $Enums.TipoEmpresa
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type LicitanteCountOrderByAggregateInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    cnpj?: SortOrder
    tipoEmpresa?: SortOrder
  }

  export type LicitanteMaxOrderByAggregateInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    cnpj?: SortOrder
    tipoEmpresa?: SortOrder
  }

  export type LicitanteMinOrderByAggregateInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    cnpj?: SortOrder
    tipoEmpresa?: SortOrder
  }

  export type EnumTipoEmpresaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEmpresa | EnumTipoEmpresaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEmpresa[] | ListEnumTipoEmpresaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEmpresa[] | ListEnumTipoEmpresaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEmpresaWithAggregatesFilter<$PrismaModel> | $Enums.TipoEmpresa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoEmpresaFilter<$PrismaModel>
    _max?: NestedEnumTipoEmpresaFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStatusPropostaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProposta | EnumStatusPropostaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPropostaFilter<$PrismaModel> | $Enums.StatusProposta
  }

  export type DisputaScalarRelationFilter = {
    is?: DisputaWhereInput
    isNot?: DisputaWhereInput
  }

  export type LicitanteScalarRelationFilter = {
    is?: LicitanteWhereInput
    isNot?: LicitanteWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type PropostaItemIdLicitanteIdVersaoCompoundUniqueInput = {
    itemId: string
    licitanteId: string
    versao: number
  }

  export type PropostaCountOrderByAggregateInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    itemId?: SortOrder
    valorCentavos?: SortOrder
    dataEnvio?: SortOrder
    arquivo?: SortOrder
    status?: SortOrder
    observacao?: SortOrder
    versao?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropostaAvgOrderByAggregateInput = {
    valorCentavos?: SortOrder
    versao?: SortOrder
  }

  export type PropostaMaxOrderByAggregateInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    itemId?: SortOrder
    valorCentavos?: SortOrder
    dataEnvio?: SortOrder
    arquivo?: SortOrder
    status?: SortOrder
    observacao?: SortOrder
    versao?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropostaMinOrderByAggregateInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    itemId?: SortOrder
    valorCentavos?: SortOrder
    dataEnvio?: SortOrder
    arquivo?: SortOrder
    status?: SortOrder
    observacao?: SortOrder
    versao?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropostaSumOrderByAggregateInput = {
    valorCentavos?: SortOrder
    versao?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusPropostaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProposta | EnumStatusPropostaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPropostaWithAggregatesFilter<$PrismaModel> | $Enums.StatusProposta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPropostaFilter<$PrismaModel>
    _max?: NestedEnumStatusPropostaFilter<$PrismaModel>
  }

  export type LanceCountOrderByAggregateInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    valorCentavos?: SortOrder
    horario?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type LanceAvgOrderByAggregateInput = {
    valorCentavos?: SortOrder
  }

  export type LanceMaxOrderByAggregateInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    valorCentavos?: SortOrder
    horario?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type LanceMinOrderByAggregateInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    valorCentavos?: SortOrder
    horario?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type LanceSumOrderByAggregateInput = {
    valorCentavos?: SortOrder
  }

  export type EnumTipoDocumentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoFilter<$PrismaModel> | $Enums.TipoDocumento
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DocumentoLicitanteCountOrderByAggregateInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    tipoDocumento?: SortOrder
    nomeOriginal?: SortOrder
    descricao?: SortOrder
    arquivoPath?: SortOrder
    dataEnvio?: SortOrder
    versao?: SortOrder
    valido?: SortOrder
    hashDocumento?: SortOrder
    assinaturaBase64?: SortOrder
    assinadoPor?: SortOrder
  }

  export type DocumentoLicitanteAvgOrderByAggregateInput = {
    versao?: SortOrder
  }

  export type DocumentoLicitanteMaxOrderByAggregateInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    tipoDocumento?: SortOrder
    nomeOriginal?: SortOrder
    descricao?: SortOrder
    arquivoPath?: SortOrder
    dataEnvio?: SortOrder
    versao?: SortOrder
    valido?: SortOrder
    hashDocumento?: SortOrder
    assinaturaBase64?: SortOrder
    assinadoPor?: SortOrder
  }

  export type DocumentoLicitanteMinOrderByAggregateInput = {
    id?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
    tipoDocumento?: SortOrder
    nomeOriginal?: SortOrder
    descricao?: SortOrder
    arquivoPath?: SortOrder
    dataEnvio?: SortOrder
    versao?: SortOrder
    valido?: SortOrder
    hashDocumento?: SortOrder
    assinaturaBase64?: SortOrder
    assinadoPor?: SortOrder
  }

  export type DocumentoLicitanteSumOrderByAggregateInput = {
    versao?: SortOrder
  }

  export type EnumTipoDocumentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoDocumento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDocumentoFilter<$PrismaModel>
    _max?: NestedEnumTipoDocumentoFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DocumentoObrigatorioCountOrderByAggregateInput = {
    id?: SortOrder
    editalId?: SortOrder
    tipoDocumento?: SortOrder
    descricao?: SortOrder
  }

  export type DocumentoObrigatorioMaxOrderByAggregateInput = {
    id?: SortOrder
    editalId?: SortOrder
    tipoDocumento?: SortOrder
    descricao?: SortOrder
  }

  export type DocumentoObrigatorioMinOrderByAggregateInput = {
    id?: SortOrder
    editalId?: SortOrder
    tipoDocumento?: SortOrder
    descricao?: SortOrder
  }

  export type EnumTipoAutorMensagemFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAutorMensagem | EnumTipoAutorMensagemFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAutorMensagem[] | ListEnumTipoAutorMensagemFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAutorMensagem[] | ListEnumTipoAutorMensagemFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAutorMensagemFilter<$PrismaModel> | $Enums.TipoAutorMensagem
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type DisputaNullableScalarRelationFilter = {
    is?: DisputaWhereInput | null
    isNot?: DisputaWhereInput | null
  }

  export type MensagemChatCountOrderByAggregateInput = {
    id?: SortOrder
    editalId?: SortOrder
    autorId?: SortOrder
    tipoAutor?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
  }

  export type MensagemChatMaxOrderByAggregateInput = {
    id?: SortOrder
    editalId?: SortOrder
    autorId?: SortOrder
    tipoAutor?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
  }

  export type MensagemChatMinOrderByAggregateInput = {
    id?: SortOrder
    editalId?: SortOrder
    autorId?: SortOrder
    tipoAutor?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disputaId?: SortOrder
    licitanteId?: SortOrder
  }

  export type EnumTipoAutorMensagemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAutorMensagem | EnumTipoAutorMensagemFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAutorMensagem[] | ListEnumTipoAutorMensagemFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAutorMensagem[] | ListEnumTipoAutorMensagemFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAutorMensagemWithAggregatesFilter<$PrismaModel> | $Enums.TipoAutorMensagem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAutorMensagemFilter<$PrismaModel>
    _max?: NestedEnumTipoAutorMensagemFilter<$PrismaModel>
  }

  export type SessaoCountOrderByAggregateInput = {
    id?: SortOrder
    licitanteId?: SortOrder
    disputaId?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    ip?: SortOrder
    hash?: SortOrder
  }

  export type SessaoMaxOrderByAggregateInput = {
    id?: SortOrder
    licitanteId?: SortOrder
    disputaId?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    ip?: SortOrder
    hash?: SortOrder
  }

  export type SessaoMinOrderByAggregateInput = {
    id?: SortOrder
    licitanteId?: SortOrder
    disputaId?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    ip?: SortOrder
    hash?: SortOrder
  }

  export type LogAtividadeCountOrderByAggregateInput = {
    id?: SortOrder
    disputaId?: SortOrder
    usuarioId?: SortOrder
    acao?: SortOrder
    detalhes?: SortOrder
    data?: SortOrder
  }

  export type LogAtividadeMaxOrderByAggregateInput = {
    id?: SortOrder
    disputaId?: SortOrder
    usuarioId?: SortOrder
    acao?: SortOrder
    detalhes?: SortOrder
    data?: SortOrder
  }

  export type LogAtividadeMinOrderByAggregateInput = {
    id?: SortOrder
    disputaId?: SortOrder
    usuarioId?: SortOrder
    acao?: SortOrder
    detalhes?: SortOrder
    data?: SortOrder
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoteNumeroEditalIdCompoundUniqueInput = {
    numero: string
    editalId: string
  }

  export type LoteCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    descricao?: SortOrder
    editalId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoteMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    descricao?: SortOrder
    editalId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoteMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    descricao?: SortOrder
    editalId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoteScalarRelationFilter = {
    is?: LoteWhereInput
    isNot?: LoteWhereInput
  }

  export type ItemNumeroLoteIdCompoundUniqueInput = {
    numero: string
    loteId: string
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    valorEstimado?: SortOrder
    loteId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    quantidade?: SortOrder
    valorEstimado?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    valorEstimado?: SortOrder
    loteId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    valorEstimado?: SortOrder
    loteId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    quantidade?: SortOrder
    valorEstimado?: SortOrder
  }

  export type LogAtividadeCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LogAtividadeCreateWithoutUsuarioInput, LogAtividadeUncheckedCreateWithoutUsuarioInput> | LogAtividadeCreateWithoutUsuarioInput[] | LogAtividadeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAtividadeCreateOrConnectWithoutUsuarioInput | LogAtividadeCreateOrConnectWithoutUsuarioInput[]
    createMany?: LogAtividadeCreateManyUsuarioInputEnvelope
    connect?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
  }

  export type MensagemChatCreateNestedManyWithoutAutorInput = {
    create?: XOR<MensagemChatCreateWithoutAutorInput, MensagemChatUncheckedCreateWithoutAutorInput> | MensagemChatCreateWithoutAutorInput[] | MensagemChatUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutAutorInput | MensagemChatCreateOrConnectWithoutAutorInput[]
    createMany?: MensagemChatCreateManyAutorInputEnvelope
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
  }

  export type LicitanteCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<LicitanteCreateWithoutUsuarioInput, LicitanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: LicitanteCreateOrConnectWithoutUsuarioInput
    connect?: LicitanteWhereUniqueInput
  }

  export type LogAtividadeUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LogAtividadeCreateWithoutUsuarioInput, LogAtividadeUncheckedCreateWithoutUsuarioInput> | LogAtividadeCreateWithoutUsuarioInput[] | LogAtividadeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAtividadeCreateOrConnectWithoutUsuarioInput | LogAtividadeCreateOrConnectWithoutUsuarioInput[]
    createMany?: LogAtividadeCreateManyUsuarioInputEnvelope
    connect?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
  }

  export type MensagemChatUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<MensagemChatCreateWithoutAutorInput, MensagemChatUncheckedCreateWithoutAutorInput> | MensagemChatCreateWithoutAutorInput[] | MensagemChatUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutAutorInput | MensagemChatCreateOrConnectWithoutAutorInput[]
    createMany?: MensagemChatCreateManyAutorInputEnvelope
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPerfilUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.PerfilUsuario
  }

  export type LogAtividadeUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LogAtividadeCreateWithoutUsuarioInput, LogAtividadeUncheckedCreateWithoutUsuarioInput> | LogAtividadeCreateWithoutUsuarioInput[] | LogAtividadeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAtividadeCreateOrConnectWithoutUsuarioInput | LogAtividadeCreateOrConnectWithoutUsuarioInput[]
    upsert?: LogAtividadeUpsertWithWhereUniqueWithoutUsuarioInput | LogAtividadeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LogAtividadeCreateManyUsuarioInputEnvelope
    set?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    disconnect?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    delete?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    connect?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    update?: LogAtividadeUpdateWithWhereUniqueWithoutUsuarioInput | LogAtividadeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LogAtividadeUpdateManyWithWhereWithoutUsuarioInput | LogAtividadeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LogAtividadeScalarWhereInput | LogAtividadeScalarWhereInput[]
  }

  export type MensagemChatUpdateManyWithoutAutorNestedInput = {
    create?: XOR<MensagemChatCreateWithoutAutorInput, MensagemChatUncheckedCreateWithoutAutorInput> | MensagemChatCreateWithoutAutorInput[] | MensagemChatUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutAutorInput | MensagemChatCreateOrConnectWithoutAutorInput[]
    upsert?: MensagemChatUpsertWithWhereUniqueWithoutAutorInput | MensagemChatUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: MensagemChatCreateManyAutorInputEnvelope
    set?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    disconnect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    delete?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    update?: MensagemChatUpdateWithWhereUniqueWithoutAutorInput | MensagemChatUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: MensagemChatUpdateManyWithWhereWithoutAutorInput | MensagemChatUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: MensagemChatScalarWhereInput | MensagemChatScalarWhereInput[]
  }

  export type LicitanteUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<LicitanteCreateWithoutUsuarioInput, LicitanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: LicitanteCreateOrConnectWithoutUsuarioInput
    upsert?: LicitanteUpsertWithoutUsuarioInput
    disconnect?: LicitanteWhereInput | boolean
    delete?: LicitanteWhereInput | boolean
    connect?: LicitanteWhereUniqueInput
    update?: XOR<XOR<LicitanteUpdateToOneWithWhereWithoutUsuarioInput, LicitanteUpdateWithoutUsuarioInput>, LicitanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LogAtividadeUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LogAtividadeCreateWithoutUsuarioInput, LogAtividadeUncheckedCreateWithoutUsuarioInput> | LogAtividadeCreateWithoutUsuarioInput[] | LogAtividadeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAtividadeCreateOrConnectWithoutUsuarioInput | LogAtividadeCreateOrConnectWithoutUsuarioInput[]
    upsert?: LogAtividadeUpsertWithWhereUniqueWithoutUsuarioInput | LogAtividadeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LogAtividadeCreateManyUsuarioInputEnvelope
    set?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    disconnect?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    delete?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    connect?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    update?: LogAtividadeUpdateWithWhereUniqueWithoutUsuarioInput | LogAtividadeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LogAtividadeUpdateManyWithWhereWithoutUsuarioInput | LogAtividadeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LogAtividadeScalarWhereInput | LogAtividadeScalarWhereInput[]
  }

  export type MensagemChatUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<MensagemChatCreateWithoutAutorInput, MensagemChatUncheckedCreateWithoutAutorInput> | MensagemChatCreateWithoutAutorInput[] | MensagemChatUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutAutorInput | MensagemChatCreateOrConnectWithoutAutorInput[]
    upsert?: MensagemChatUpsertWithWhereUniqueWithoutAutorInput | MensagemChatUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: MensagemChatCreateManyAutorInputEnvelope
    set?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    disconnect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    delete?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    update?: MensagemChatUpdateWithWhereUniqueWithoutAutorInput | MensagemChatUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: MensagemChatUpdateManyWithWhereWithoutAutorInput | MensagemChatUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: MensagemChatScalarWhereInput | MensagemChatScalarWhereInput[]
  }

  export type DisputaCreateNestedManyWithoutEditalInput = {
    create?: XOR<DisputaCreateWithoutEditalInput, DisputaUncheckedCreateWithoutEditalInput> | DisputaCreateWithoutEditalInput[] | DisputaUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: DisputaCreateOrConnectWithoutEditalInput | DisputaCreateOrConnectWithoutEditalInput[]
    createMany?: DisputaCreateManyEditalInputEnvelope
    connect?: DisputaWhereUniqueInput | DisputaWhereUniqueInput[]
  }

  export type DocumentoObrigatorioCreateNestedManyWithoutEditalInput = {
    create?: XOR<DocumentoObrigatorioCreateWithoutEditalInput, DocumentoObrigatorioUncheckedCreateWithoutEditalInput> | DocumentoObrigatorioCreateWithoutEditalInput[] | DocumentoObrigatorioUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: DocumentoObrigatorioCreateOrConnectWithoutEditalInput | DocumentoObrigatorioCreateOrConnectWithoutEditalInput[]
    createMany?: DocumentoObrigatorioCreateManyEditalInputEnvelope
    connect?: DocumentoObrigatorioWhereUniqueInput | DocumentoObrigatorioWhereUniqueInput[]
  }

  export type LoteCreateNestedManyWithoutEditalInput = {
    create?: XOR<LoteCreateWithoutEditalInput, LoteUncheckedCreateWithoutEditalInput> | LoteCreateWithoutEditalInput[] | LoteUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutEditalInput | LoteCreateOrConnectWithoutEditalInput[]
    createMany?: LoteCreateManyEditalInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type MensagemChatCreateNestedManyWithoutEditalInput = {
    create?: XOR<MensagemChatCreateWithoutEditalInput, MensagemChatUncheckedCreateWithoutEditalInput> | MensagemChatCreateWithoutEditalInput[] | MensagemChatUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutEditalInput | MensagemChatCreateOrConnectWithoutEditalInput[]
    createMany?: MensagemChatCreateManyEditalInputEnvelope
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
  }

  export type DisputaUncheckedCreateNestedManyWithoutEditalInput = {
    create?: XOR<DisputaCreateWithoutEditalInput, DisputaUncheckedCreateWithoutEditalInput> | DisputaCreateWithoutEditalInput[] | DisputaUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: DisputaCreateOrConnectWithoutEditalInput | DisputaCreateOrConnectWithoutEditalInput[]
    createMany?: DisputaCreateManyEditalInputEnvelope
    connect?: DisputaWhereUniqueInput | DisputaWhereUniqueInput[]
  }

  export type DocumentoObrigatorioUncheckedCreateNestedManyWithoutEditalInput = {
    create?: XOR<DocumentoObrigatorioCreateWithoutEditalInput, DocumentoObrigatorioUncheckedCreateWithoutEditalInput> | DocumentoObrigatorioCreateWithoutEditalInput[] | DocumentoObrigatorioUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: DocumentoObrigatorioCreateOrConnectWithoutEditalInput | DocumentoObrigatorioCreateOrConnectWithoutEditalInput[]
    createMany?: DocumentoObrigatorioCreateManyEditalInputEnvelope
    connect?: DocumentoObrigatorioWhereUniqueInput | DocumentoObrigatorioWhereUniqueInput[]
  }

  export type LoteUncheckedCreateNestedManyWithoutEditalInput = {
    create?: XOR<LoteCreateWithoutEditalInput, LoteUncheckedCreateWithoutEditalInput> | LoteCreateWithoutEditalInput[] | LoteUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutEditalInput | LoteCreateOrConnectWithoutEditalInput[]
    createMany?: LoteCreateManyEditalInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type MensagemChatUncheckedCreateNestedManyWithoutEditalInput = {
    create?: XOR<MensagemChatCreateWithoutEditalInput, MensagemChatUncheckedCreateWithoutEditalInput> | MensagemChatCreateWithoutEditalInput[] | MensagemChatUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutEditalInput | MensagemChatCreateOrConnectWithoutEditalInput[]
    createMany?: MensagemChatCreateManyEditalInputEnvelope
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DisputaUpdateManyWithoutEditalNestedInput = {
    create?: XOR<DisputaCreateWithoutEditalInput, DisputaUncheckedCreateWithoutEditalInput> | DisputaCreateWithoutEditalInput[] | DisputaUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: DisputaCreateOrConnectWithoutEditalInput | DisputaCreateOrConnectWithoutEditalInput[]
    upsert?: DisputaUpsertWithWhereUniqueWithoutEditalInput | DisputaUpsertWithWhereUniqueWithoutEditalInput[]
    createMany?: DisputaCreateManyEditalInputEnvelope
    set?: DisputaWhereUniqueInput | DisputaWhereUniqueInput[]
    disconnect?: DisputaWhereUniqueInput | DisputaWhereUniqueInput[]
    delete?: DisputaWhereUniqueInput | DisputaWhereUniqueInput[]
    connect?: DisputaWhereUniqueInput | DisputaWhereUniqueInput[]
    update?: DisputaUpdateWithWhereUniqueWithoutEditalInput | DisputaUpdateWithWhereUniqueWithoutEditalInput[]
    updateMany?: DisputaUpdateManyWithWhereWithoutEditalInput | DisputaUpdateManyWithWhereWithoutEditalInput[]
    deleteMany?: DisputaScalarWhereInput | DisputaScalarWhereInput[]
  }

  export type DocumentoObrigatorioUpdateManyWithoutEditalNestedInput = {
    create?: XOR<DocumentoObrigatorioCreateWithoutEditalInput, DocumentoObrigatorioUncheckedCreateWithoutEditalInput> | DocumentoObrigatorioCreateWithoutEditalInput[] | DocumentoObrigatorioUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: DocumentoObrigatorioCreateOrConnectWithoutEditalInput | DocumentoObrigatorioCreateOrConnectWithoutEditalInput[]
    upsert?: DocumentoObrigatorioUpsertWithWhereUniqueWithoutEditalInput | DocumentoObrigatorioUpsertWithWhereUniqueWithoutEditalInput[]
    createMany?: DocumentoObrigatorioCreateManyEditalInputEnvelope
    set?: DocumentoObrigatorioWhereUniqueInput | DocumentoObrigatorioWhereUniqueInput[]
    disconnect?: DocumentoObrigatorioWhereUniqueInput | DocumentoObrigatorioWhereUniqueInput[]
    delete?: DocumentoObrigatorioWhereUniqueInput | DocumentoObrigatorioWhereUniqueInput[]
    connect?: DocumentoObrigatorioWhereUniqueInput | DocumentoObrigatorioWhereUniqueInput[]
    update?: DocumentoObrigatorioUpdateWithWhereUniqueWithoutEditalInput | DocumentoObrigatorioUpdateWithWhereUniqueWithoutEditalInput[]
    updateMany?: DocumentoObrigatorioUpdateManyWithWhereWithoutEditalInput | DocumentoObrigatorioUpdateManyWithWhereWithoutEditalInput[]
    deleteMany?: DocumentoObrigatorioScalarWhereInput | DocumentoObrigatorioScalarWhereInput[]
  }

  export type LoteUpdateManyWithoutEditalNestedInput = {
    create?: XOR<LoteCreateWithoutEditalInput, LoteUncheckedCreateWithoutEditalInput> | LoteCreateWithoutEditalInput[] | LoteUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutEditalInput | LoteCreateOrConnectWithoutEditalInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutEditalInput | LoteUpsertWithWhereUniqueWithoutEditalInput[]
    createMany?: LoteCreateManyEditalInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutEditalInput | LoteUpdateWithWhereUniqueWithoutEditalInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutEditalInput | LoteUpdateManyWithWhereWithoutEditalInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type MensagemChatUpdateManyWithoutEditalNestedInput = {
    create?: XOR<MensagemChatCreateWithoutEditalInput, MensagemChatUncheckedCreateWithoutEditalInput> | MensagemChatCreateWithoutEditalInput[] | MensagemChatUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutEditalInput | MensagemChatCreateOrConnectWithoutEditalInput[]
    upsert?: MensagemChatUpsertWithWhereUniqueWithoutEditalInput | MensagemChatUpsertWithWhereUniqueWithoutEditalInput[]
    createMany?: MensagemChatCreateManyEditalInputEnvelope
    set?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    disconnect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    delete?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    update?: MensagemChatUpdateWithWhereUniqueWithoutEditalInput | MensagemChatUpdateWithWhereUniqueWithoutEditalInput[]
    updateMany?: MensagemChatUpdateManyWithWhereWithoutEditalInput | MensagemChatUpdateManyWithWhereWithoutEditalInput[]
    deleteMany?: MensagemChatScalarWhereInput | MensagemChatScalarWhereInput[]
  }

  export type DisputaUncheckedUpdateManyWithoutEditalNestedInput = {
    create?: XOR<DisputaCreateWithoutEditalInput, DisputaUncheckedCreateWithoutEditalInput> | DisputaCreateWithoutEditalInput[] | DisputaUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: DisputaCreateOrConnectWithoutEditalInput | DisputaCreateOrConnectWithoutEditalInput[]
    upsert?: DisputaUpsertWithWhereUniqueWithoutEditalInput | DisputaUpsertWithWhereUniqueWithoutEditalInput[]
    createMany?: DisputaCreateManyEditalInputEnvelope
    set?: DisputaWhereUniqueInput | DisputaWhereUniqueInput[]
    disconnect?: DisputaWhereUniqueInput | DisputaWhereUniqueInput[]
    delete?: DisputaWhereUniqueInput | DisputaWhereUniqueInput[]
    connect?: DisputaWhereUniqueInput | DisputaWhereUniqueInput[]
    update?: DisputaUpdateWithWhereUniqueWithoutEditalInput | DisputaUpdateWithWhereUniqueWithoutEditalInput[]
    updateMany?: DisputaUpdateManyWithWhereWithoutEditalInput | DisputaUpdateManyWithWhereWithoutEditalInput[]
    deleteMany?: DisputaScalarWhereInput | DisputaScalarWhereInput[]
  }

  export type DocumentoObrigatorioUncheckedUpdateManyWithoutEditalNestedInput = {
    create?: XOR<DocumentoObrigatorioCreateWithoutEditalInput, DocumentoObrigatorioUncheckedCreateWithoutEditalInput> | DocumentoObrigatorioCreateWithoutEditalInput[] | DocumentoObrigatorioUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: DocumentoObrigatorioCreateOrConnectWithoutEditalInput | DocumentoObrigatorioCreateOrConnectWithoutEditalInput[]
    upsert?: DocumentoObrigatorioUpsertWithWhereUniqueWithoutEditalInput | DocumentoObrigatorioUpsertWithWhereUniqueWithoutEditalInput[]
    createMany?: DocumentoObrigatorioCreateManyEditalInputEnvelope
    set?: DocumentoObrigatorioWhereUniqueInput | DocumentoObrigatorioWhereUniqueInput[]
    disconnect?: DocumentoObrigatorioWhereUniqueInput | DocumentoObrigatorioWhereUniqueInput[]
    delete?: DocumentoObrigatorioWhereUniqueInput | DocumentoObrigatorioWhereUniqueInput[]
    connect?: DocumentoObrigatorioWhereUniqueInput | DocumentoObrigatorioWhereUniqueInput[]
    update?: DocumentoObrigatorioUpdateWithWhereUniqueWithoutEditalInput | DocumentoObrigatorioUpdateWithWhereUniqueWithoutEditalInput[]
    updateMany?: DocumentoObrigatorioUpdateManyWithWhereWithoutEditalInput | DocumentoObrigatorioUpdateManyWithWhereWithoutEditalInput[]
    deleteMany?: DocumentoObrigatorioScalarWhereInput | DocumentoObrigatorioScalarWhereInput[]
  }

  export type LoteUncheckedUpdateManyWithoutEditalNestedInput = {
    create?: XOR<LoteCreateWithoutEditalInput, LoteUncheckedCreateWithoutEditalInput> | LoteCreateWithoutEditalInput[] | LoteUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutEditalInput | LoteCreateOrConnectWithoutEditalInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutEditalInput | LoteUpsertWithWhereUniqueWithoutEditalInput[]
    createMany?: LoteCreateManyEditalInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutEditalInput | LoteUpdateWithWhereUniqueWithoutEditalInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutEditalInput | LoteUpdateManyWithWhereWithoutEditalInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type MensagemChatUncheckedUpdateManyWithoutEditalNestedInput = {
    create?: XOR<MensagemChatCreateWithoutEditalInput, MensagemChatUncheckedCreateWithoutEditalInput> | MensagemChatCreateWithoutEditalInput[] | MensagemChatUncheckedCreateWithoutEditalInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutEditalInput | MensagemChatCreateOrConnectWithoutEditalInput[]
    upsert?: MensagemChatUpsertWithWhereUniqueWithoutEditalInput | MensagemChatUpsertWithWhereUniqueWithoutEditalInput[]
    createMany?: MensagemChatCreateManyEditalInputEnvelope
    set?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    disconnect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    delete?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    update?: MensagemChatUpdateWithWhereUniqueWithoutEditalInput | MensagemChatUpdateWithWhereUniqueWithoutEditalInput[]
    updateMany?: MensagemChatUpdateManyWithWhereWithoutEditalInput | MensagemChatUpdateManyWithWhereWithoutEditalInput[]
    deleteMany?: MensagemChatScalarWhereInput | MensagemChatScalarWhereInput[]
  }

  export type EditalCreateNestedOneWithoutDisputasInput = {
    create?: XOR<EditalCreateWithoutDisputasInput, EditalUncheckedCreateWithoutDisputasInput>
    connectOrCreate?: EditalCreateOrConnectWithoutDisputasInput
    connect?: EditalWhereUniqueInput
  }

  export type PropostaCreateNestedManyWithoutDisputaInput = {
    create?: XOR<PropostaCreateWithoutDisputaInput, PropostaUncheckedCreateWithoutDisputaInput> | PropostaCreateWithoutDisputaInput[] | PropostaUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutDisputaInput | PropostaCreateOrConnectWithoutDisputaInput[]
    createMany?: PropostaCreateManyDisputaInputEnvelope
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
  }

  export type LanceCreateNestedManyWithoutDisputaInput = {
    create?: XOR<LanceCreateWithoutDisputaInput, LanceUncheckedCreateWithoutDisputaInput> | LanceCreateWithoutDisputaInput[] | LanceUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: LanceCreateOrConnectWithoutDisputaInput | LanceCreateOrConnectWithoutDisputaInput[]
    createMany?: LanceCreateManyDisputaInputEnvelope
    connect?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
  }

  export type DocumentoLicitanteCreateNestedManyWithoutDisputaInput = {
    create?: XOR<DocumentoLicitanteCreateWithoutDisputaInput, DocumentoLicitanteUncheckedCreateWithoutDisputaInput> | DocumentoLicitanteCreateWithoutDisputaInput[] | DocumentoLicitanteUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: DocumentoLicitanteCreateOrConnectWithoutDisputaInput | DocumentoLicitanteCreateOrConnectWithoutDisputaInput[]
    createMany?: DocumentoLicitanteCreateManyDisputaInputEnvelope
    connect?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
  }

  export type MensagemChatCreateNestedManyWithoutDisputaInput = {
    create?: XOR<MensagemChatCreateWithoutDisputaInput, MensagemChatUncheckedCreateWithoutDisputaInput> | MensagemChatCreateWithoutDisputaInput[] | MensagemChatUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutDisputaInput | MensagemChatCreateOrConnectWithoutDisputaInput[]
    createMany?: MensagemChatCreateManyDisputaInputEnvelope
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
  }

  export type LogAtividadeCreateNestedManyWithoutDisputaInput = {
    create?: XOR<LogAtividadeCreateWithoutDisputaInput, LogAtividadeUncheckedCreateWithoutDisputaInput> | LogAtividadeCreateWithoutDisputaInput[] | LogAtividadeUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: LogAtividadeCreateOrConnectWithoutDisputaInput | LogAtividadeCreateOrConnectWithoutDisputaInput[]
    createMany?: LogAtividadeCreateManyDisputaInputEnvelope
    connect?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
  }

  export type SessaoCreateNestedManyWithoutDisputaInput = {
    create?: XOR<SessaoCreateWithoutDisputaInput, SessaoUncheckedCreateWithoutDisputaInput> | SessaoCreateWithoutDisputaInput[] | SessaoUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutDisputaInput | SessaoCreateOrConnectWithoutDisputaInput[]
    createMany?: SessaoCreateManyDisputaInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type PropostaUncheckedCreateNestedManyWithoutDisputaInput = {
    create?: XOR<PropostaCreateWithoutDisputaInput, PropostaUncheckedCreateWithoutDisputaInput> | PropostaCreateWithoutDisputaInput[] | PropostaUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutDisputaInput | PropostaCreateOrConnectWithoutDisputaInput[]
    createMany?: PropostaCreateManyDisputaInputEnvelope
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
  }

  export type LanceUncheckedCreateNestedManyWithoutDisputaInput = {
    create?: XOR<LanceCreateWithoutDisputaInput, LanceUncheckedCreateWithoutDisputaInput> | LanceCreateWithoutDisputaInput[] | LanceUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: LanceCreateOrConnectWithoutDisputaInput | LanceCreateOrConnectWithoutDisputaInput[]
    createMany?: LanceCreateManyDisputaInputEnvelope
    connect?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
  }

  export type DocumentoLicitanteUncheckedCreateNestedManyWithoutDisputaInput = {
    create?: XOR<DocumentoLicitanteCreateWithoutDisputaInput, DocumentoLicitanteUncheckedCreateWithoutDisputaInput> | DocumentoLicitanteCreateWithoutDisputaInput[] | DocumentoLicitanteUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: DocumentoLicitanteCreateOrConnectWithoutDisputaInput | DocumentoLicitanteCreateOrConnectWithoutDisputaInput[]
    createMany?: DocumentoLicitanteCreateManyDisputaInputEnvelope
    connect?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
  }

  export type MensagemChatUncheckedCreateNestedManyWithoutDisputaInput = {
    create?: XOR<MensagemChatCreateWithoutDisputaInput, MensagemChatUncheckedCreateWithoutDisputaInput> | MensagemChatCreateWithoutDisputaInput[] | MensagemChatUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutDisputaInput | MensagemChatCreateOrConnectWithoutDisputaInput[]
    createMany?: MensagemChatCreateManyDisputaInputEnvelope
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
  }

  export type LogAtividadeUncheckedCreateNestedManyWithoutDisputaInput = {
    create?: XOR<LogAtividadeCreateWithoutDisputaInput, LogAtividadeUncheckedCreateWithoutDisputaInput> | LogAtividadeCreateWithoutDisputaInput[] | LogAtividadeUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: LogAtividadeCreateOrConnectWithoutDisputaInput | LogAtividadeCreateOrConnectWithoutDisputaInput[]
    createMany?: LogAtividadeCreateManyDisputaInputEnvelope
    connect?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
  }

  export type SessaoUncheckedCreateNestedManyWithoutDisputaInput = {
    create?: XOR<SessaoCreateWithoutDisputaInput, SessaoUncheckedCreateWithoutDisputaInput> | SessaoCreateWithoutDisputaInput[] | SessaoUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutDisputaInput | SessaoCreateOrConnectWithoutDisputaInput[]
    createMany?: SessaoCreateManyDisputaInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type EnumDisputaStatusFieldUpdateOperationsInput = {
    set?: $Enums.DisputaStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EditalUpdateOneRequiredWithoutDisputasNestedInput = {
    create?: XOR<EditalCreateWithoutDisputasInput, EditalUncheckedCreateWithoutDisputasInput>
    connectOrCreate?: EditalCreateOrConnectWithoutDisputasInput
    upsert?: EditalUpsertWithoutDisputasInput
    connect?: EditalWhereUniqueInput
    update?: XOR<XOR<EditalUpdateToOneWithWhereWithoutDisputasInput, EditalUpdateWithoutDisputasInput>, EditalUncheckedUpdateWithoutDisputasInput>
  }

  export type PropostaUpdateManyWithoutDisputaNestedInput = {
    create?: XOR<PropostaCreateWithoutDisputaInput, PropostaUncheckedCreateWithoutDisputaInput> | PropostaCreateWithoutDisputaInput[] | PropostaUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutDisputaInput | PropostaCreateOrConnectWithoutDisputaInput[]
    upsert?: PropostaUpsertWithWhereUniqueWithoutDisputaInput | PropostaUpsertWithWhereUniqueWithoutDisputaInput[]
    createMany?: PropostaCreateManyDisputaInputEnvelope
    set?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    disconnect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    delete?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    update?: PropostaUpdateWithWhereUniqueWithoutDisputaInput | PropostaUpdateWithWhereUniqueWithoutDisputaInput[]
    updateMany?: PropostaUpdateManyWithWhereWithoutDisputaInput | PropostaUpdateManyWithWhereWithoutDisputaInput[]
    deleteMany?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
  }

  export type LanceUpdateManyWithoutDisputaNestedInput = {
    create?: XOR<LanceCreateWithoutDisputaInput, LanceUncheckedCreateWithoutDisputaInput> | LanceCreateWithoutDisputaInput[] | LanceUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: LanceCreateOrConnectWithoutDisputaInput | LanceCreateOrConnectWithoutDisputaInput[]
    upsert?: LanceUpsertWithWhereUniqueWithoutDisputaInput | LanceUpsertWithWhereUniqueWithoutDisputaInput[]
    createMany?: LanceCreateManyDisputaInputEnvelope
    set?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    disconnect?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    delete?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    connect?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    update?: LanceUpdateWithWhereUniqueWithoutDisputaInput | LanceUpdateWithWhereUniqueWithoutDisputaInput[]
    updateMany?: LanceUpdateManyWithWhereWithoutDisputaInput | LanceUpdateManyWithWhereWithoutDisputaInput[]
    deleteMany?: LanceScalarWhereInput | LanceScalarWhereInput[]
  }

  export type DocumentoLicitanteUpdateManyWithoutDisputaNestedInput = {
    create?: XOR<DocumentoLicitanteCreateWithoutDisputaInput, DocumentoLicitanteUncheckedCreateWithoutDisputaInput> | DocumentoLicitanteCreateWithoutDisputaInput[] | DocumentoLicitanteUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: DocumentoLicitanteCreateOrConnectWithoutDisputaInput | DocumentoLicitanteCreateOrConnectWithoutDisputaInput[]
    upsert?: DocumentoLicitanteUpsertWithWhereUniqueWithoutDisputaInput | DocumentoLicitanteUpsertWithWhereUniqueWithoutDisputaInput[]
    createMany?: DocumentoLicitanteCreateManyDisputaInputEnvelope
    set?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    disconnect?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    delete?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    connect?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    update?: DocumentoLicitanteUpdateWithWhereUniqueWithoutDisputaInput | DocumentoLicitanteUpdateWithWhereUniqueWithoutDisputaInput[]
    updateMany?: DocumentoLicitanteUpdateManyWithWhereWithoutDisputaInput | DocumentoLicitanteUpdateManyWithWhereWithoutDisputaInput[]
    deleteMany?: DocumentoLicitanteScalarWhereInput | DocumentoLicitanteScalarWhereInput[]
  }

  export type MensagemChatUpdateManyWithoutDisputaNestedInput = {
    create?: XOR<MensagemChatCreateWithoutDisputaInput, MensagemChatUncheckedCreateWithoutDisputaInput> | MensagemChatCreateWithoutDisputaInput[] | MensagemChatUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutDisputaInput | MensagemChatCreateOrConnectWithoutDisputaInput[]
    upsert?: MensagemChatUpsertWithWhereUniqueWithoutDisputaInput | MensagemChatUpsertWithWhereUniqueWithoutDisputaInput[]
    createMany?: MensagemChatCreateManyDisputaInputEnvelope
    set?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    disconnect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    delete?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    update?: MensagemChatUpdateWithWhereUniqueWithoutDisputaInput | MensagemChatUpdateWithWhereUniqueWithoutDisputaInput[]
    updateMany?: MensagemChatUpdateManyWithWhereWithoutDisputaInput | MensagemChatUpdateManyWithWhereWithoutDisputaInput[]
    deleteMany?: MensagemChatScalarWhereInput | MensagemChatScalarWhereInput[]
  }

  export type LogAtividadeUpdateManyWithoutDisputaNestedInput = {
    create?: XOR<LogAtividadeCreateWithoutDisputaInput, LogAtividadeUncheckedCreateWithoutDisputaInput> | LogAtividadeCreateWithoutDisputaInput[] | LogAtividadeUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: LogAtividadeCreateOrConnectWithoutDisputaInput | LogAtividadeCreateOrConnectWithoutDisputaInput[]
    upsert?: LogAtividadeUpsertWithWhereUniqueWithoutDisputaInput | LogAtividadeUpsertWithWhereUniqueWithoutDisputaInput[]
    createMany?: LogAtividadeCreateManyDisputaInputEnvelope
    set?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    disconnect?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    delete?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    connect?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    update?: LogAtividadeUpdateWithWhereUniqueWithoutDisputaInput | LogAtividadeUpdateWithWhereUniqueWithoutDisputaInput[]
    updateMany?: LogAtividadeUpdateManyWithWhereWithoutDisputaInput | LogAtividadeUpdateManyWithWhereWithoutDisputaInput[]
    deleteMany?: LogAtividadeScalarWhereInput | LogAtividadeScalarWhereInput[]
  }

  export type SessaoUpdateManyWithoutDisputaNestedInput = {
    create?: XOR<SessaoCreateWithoutDisputaInput, SessaoUncheckedCreateWithoutDisputaInput> | SessaoCreateWithoutDisputaInput[] | SessaoUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutDisputaInput | SessaoCreateOrConnectWithoutDisputaInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutDisputaInput | SessaoUpsertWithWhereUniqueWithoutDisputaInput[]
    createMany?: SessaoCreateManyDisputaInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutDisputaInput | SessaoUpdateWithWhereUniqueWithoutDisputaInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutDisputaInput | SessaoUpdateManyWithWhereWithoutDisputaInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type PropostaUncheckedUpdateManyWithoutDisputaNestedInput = {
    create?: XOR<PropostaCreateWithoutDisputaInput, PropostaUncheckedCreateWithoutDisputaInput> | PropostaCreateWithoutDisputaInput[] | PropostaUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutDisputaInput | PropostaCreateOrConnectWithoutDisputaInput[]
    upsert?: PropostaUpsertWithWhereUniqueWithoutDisputaInput | PropostaUpsertWithWhereUniqueWithoutDisputaInput[]
    createMany?: PropostaCreateManyDisputaInputEnvelope
    set?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    disconnect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    delete?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    update?: PropostaUpdateWithWhereUniqueWithoutDisputaInput | PropostaUpdateWithWhereUniqueWithoutDisputaInput[]
    updateMany?: PropostaUpdateManyWithWhereWithoutDisputaInput | PropostaUpdateManyWithWhereWithoutDisputaInput[]
    deleteMany?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
  }

  export type LanceUncheckedUpdateManyWithoutDisputaNestedInput = {
    create?: XOR<LanceCreateWithoutDisputaInput, LanceUncheckedCreateWithoutDisputaInput> | LanceCreateWithoutDisputaInput[] | LanceUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: LanceCreateOrConnectWithoutDisputaInput | LanceCreateOrConnectWithoutDisputaInput[]
    upsert?: LanceUpsertWithWhereUniqueWithoutDisputaInput | LanceUpsertWithWhereUniqueWithoutDisputaInput[]
    createMany?: LanceCreateManyDisputaInputEnvelope
    set?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    disconnect?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    delete?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    connect?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    update?: LanceUpdateWithWhereUniqueWithoutDisputaInput | LanceUpdateWithWhereUniqueWithoutDisputaInput[]
    updateMany?: LanceUpdateManyWithWhereWithoutDisputaInput | LanceUpdateManyWithWhereWithoutDisputaInput[]
    deleteMany?: LanceScalarWhereInput | LanceScalarWhereInput[]
  }

  export type DocumentoLicitanteUncheckedUpdateManyWithoutDisputaNestedInput = {
    create?: XOR<DocumentoLicitanteCreateWithoutDisputaInput, DocumentoLicitanteUncheckedCreateWithoutDisputaInput> | DocumentoLicitanteCreateWithoutDisputaInput[] | DocumentoLicitanteUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: DocumentoLicitanteCreateOrConnectWithoutDisputaInput | DocumentoLicitanteCreateOrConnectWithoutDisputaInput[]
    upsert?: DocumentoLicitanteUpsertWithWhereUniqueWithoutDisputaInput | DocumentoLicitanteUpsertWithWhereUniqueWithoutDisputaInput[]
    createMany?: DocumentoLicitanteCreateManyDisputaInputEnvelope
    set?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    disconnect?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    delete?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    connect?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    update?: DocumentoLicitanteUpdateWithWhereUniqueWithoutDisputaInput | DocumentoLicitanteUpdateWithWhereUniqueWithoutDisputaInput[]
    updateMany?: DocumentoLicitanteUpdateManyWithWhereWithoutDisputaInput | DocumentoLicitanteUpdateManyWithWhereWithoutDisputaInput[]
    deleteMany?: DocumentoLicitanteScalarWhereInput | DocumentoLicitanteScalarWhereInput[]
  }

  export type MensagemChatUncheckedUpdateManyWithoutDisputaNestedInput = {
    create?: XOR<MensagemChatCreateWithoutDisputaInput, MensagemChatUncheckedCreateWithoutDisputaInput> | MensagemChatCreateWithoutDisputaInput[] | MensagemChatUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutDisputaInput | MensagemChatCreateOrConnectWithoutDisputaInput[]
    upsert?: MensagemChatUpsertWithWhereUniqueWithoutDisputaInput | MensagemChatUpsertWithWhereUniqueWithoutDisputaInput[]
    createMany?: MensagemChatCreateManyDisputaInputEnvelope
    set?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    disconnect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    delete?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    update?: MensagemChatUpdateWithWhereUniqueWithoutDisputaInput | MensagemChatUpdateWithWhereUniqueWithoutDisputaInput[]
    updateMany?: MensagemChatUpdateManyWithWhereWithoutDisputaInput | MensagemChatUpdateManyWithWhereWithoutDisputaInput[]
    deleteMany?: MensagemChatScalarWhereInput | MensagemChatScalarWhereInput[]
  }

  export type LogAtividadeUncheckedUpdateManyWithoutDisputaNestedInput = {
    create?: XOR<LogAtividadeCreateWithoutDisputaInput, LogAtividadeUncheckedCreateWithoutDisputaInput> | LogAtividadeCreateWithoutDisputaInput[] | LogAtividadeUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: LogAtividadeCreateOrConnectWithoutDisputaInput | LogAtividadeCreateOrConnectWithoutDisputaInput[]
    upsert?: LogAtividadeUpsertWithWhereUniqueWithoutDisputaInput | LogAtividadeUpsertWithWhereUniqueWithoutDisputaInput[]
    createMany?: LogAtividadeCreateManyDisputaInputEnvelope
    set?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    disconnect?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    delete?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    connect?: LogAtividadeWhereUniqueInput | LogAtividadeWhereUniqueInput[]
    update?: LogAtividadeUpdateWithWhereUniqueWithoutDisputaInput | LogAtividadeUpdateWithWhereUniqueWithoutDisputaInput[]
    updateMany?: LogAtividadeUpdateManyWithWhereWithoutDisputaInput | LogAtividadeUpdateManyWithWhereWithoutDisputaInput[]
    deleteMany?: LogAtividadeScalarWhereInput | LogAtividadeScalarWhereInput[]
  }

  export type SessaoUncheckedUpdateManyWithoutDisputaNestedInput = {
    create?: XOR<SessaoCreateWithoutDisputaInput, SessaoUncheckedCreateWithoutDisputaInput> | SessaoCreateWithoutDisputaInput[] | SessaoUncheckedCreateWithoutDisputaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutDisputaInput | SessaoCreateOrConnectWithoutDisputaInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutDisputaInput | SessaoUpsertWithWhereUniqueWithoutDisputaInput[]
    createMany?: SessaoCreateManyDisputaInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutDisputaInput | SessaoUpdateWithWhereUniqueWithoutDisputaInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutDisputaInput | SessaoUpdateManyWithWhereWithoutDisputaInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutLicitanteInput = {
    create?: XOR<UsuarioCreateWithoutLicitanteInput, UsuarioUncheckedCreateWithoutLicitanteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLicitanteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PropostaCreateNestedManyWithoutLicitanteInput = {
    create?: XOR<PropostaCreateWithoutLicitanteInput, PropostaUncheckedCreateWithoutLicitanteInput> | PropostaCreateWithoutLicitanteInput[] | PropostaUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutLicitanteInput | PropostaCreateOrConnectWithoutLicitanteInput[]
    createMany?: PropostaCreateManyLicitanteInputEnvelope
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
  }

  export type LanceCreateNestedManyWithoutLicitanteInput = {
    create?: XOR<LanceCreateWithoutLicitanteInput, LanceUncheckedCreateWithoutLicitanteInput> | LanceCreateWithoutLicitanteInput[] | LanceUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: LanceCreateOrConnectWithoutLicitanteInput | LanceCreateOrConnectWithoutLicitanteInput[]
    createMany?: LanceCreateManyLicitanteInputEnvelope
    connect?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
  }

  export type DocumentoLicitanteCreateNestedManyWithoutLicitanteInput = {
    create?: XOR<DocumentoLicitanteCreateWithoutLicitanteInput, DocumentoLicitanteUncheckedCreateWithoutLicitanteInput> | DocumentoLicitanteCreateWithoutLicitanteInput[] | DocumentoLicitanteUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: DocumentoLicitanteCreateOrConnectWithoutLicitanteInput | DocumentoLicitanteCreateOrConnectWithoutLicitanteInput[]
    createMany?: DocumentoLicitanteCreateManyLicitanteInputEnvelope
    connect?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
  }

  export type SessaoCreateNestedManyWithoutLicitanteInput = {
    create?: XOR<SessaoCreateWithoutLicitanteInput, SessaoUncheckedCreateWithoutLicitanteInput> | SessaoCreateWithoutLicitanteInput[] | SessaoUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutLicitanteInput | SessaoCreateOrConnectWithoutLicitanteInput[]
    createMany?: SessaoCreateManyLicitanteInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type MensagemChatCreateNestedManyWithoutLicitanteInput = {
    create?: XOR<MensagemChatCreateWithoutLicitanteInput, MensagemChatUncheckedCreateWithoutLicitanteInput> | MensagemChatCreateWithoutLicitanteInput[] | MensagemChatUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutLicitanteInput | MensagemChatCreateOrConnectWithoutLicitanteInput[]
    createMany?: MensagemChatCreateManyLicitanteInputEnvelope
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedOneWithoutLicitanteInput = {
    create?: XOR<UsuarioCreateWithoutLicitanteInput, UsuarioUncheckedCreateWithoutLicitanteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLicitanteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PropostaUncheckedCreateNestedManyWithoutLicitanteInput = {
    create?: XOR<PropostaCreateWithoutLicitanteInput, PropostaUncheckedCreateWithoutLicitanteInput> | PropostaCreateWithoutLicitanteInput[] | PropostaUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutLicitanteInput | PropostaCreateOrConnectWithoutLicitanteInput[]
    createMany?: PropostaCreateManyLicitanteInputEnvelope
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
  }

  export type LanceUncheckedCreateNestedManyWithoutLicitanteInput = {
    create?: XOR<LanceCreateWithoutLicitanteInput, LanceUncheckedCreateWithoutLicitanteInput> | LanceCreateWithoutLicitanteInput[] | LanceUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: LanceCreateOrConnectWithoutLicitanteInput | LanceCreateOrConnectWithoutLicitanteInput[]
    createMany?: LanceCreateManyLicitanteInputEnvelope
    connect?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
  }

  export type DocumentoLicitanteUncheckedCreateNestedManyWithoutLicitanteInput = {
    create?: XOR<DocumentoLicitanteCreateWithoutLicitanteInput, DocumentoLicitanteUncheckedCreateWithoutLicitanteInput> | DocumentoLicitanteCreateWithoutLicitanteInput[] | DocumentoLicitanteUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: DocumentoLicitanteCreateOrConnectWithoutLicitanteInput | DocumentoLicitanteCreateOrConnectWithoutLicitanteInput[]
    createMany?: DocumentoLicitanteCreateManyLicitanteInputEnvelope
    connect?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
  }

  export type SessaoUncheckedCreateNestedManyWithoutLicitanteInput = {
    create?: XOR<SessaoCreateWithoutLicitanteInput, SessaoUncheckedCreateWithoutLicitanteInput> | SessaoCreateWithoutLicitanteInput[] | SessaoUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutLicitanteInput | SessaoCreateOrConnectWithoutLicitanteInput[]
    createMany?: SessaoCreateManyLicitanteInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type MensagemChatUncheckedCreateNestedManyWithoutLicitanteInput = {
    create?: XOR<MensagemChatCreateWithoutLicitanteInput, MensagemChatUncheckedCreateWithoutLicitanteInput> | MensagemChatCreateWithoutLicitanteInput[] | MensagemChatUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutLicitanteInput | MensagemChatCreateOrConnectWithoutLicitanteInput[]
    createMany?: MensagemChatCreateManyLicitanteInputEnvelope
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
  }

  export type EnumTipoEmpresaFieldUpdateOperationsInput = {
    set?: $Enums.TipoEmpresa
  }

  export type UsuarioUpdateOneWithoutLicitanteNestedInput = {
    create?: XOR<UsuarioCreateWithoutLicitanteInput, UsuarioUncheckedCreateWithoutLicitanteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLicitanteInput
    upsert?: UsuarioUpsertWithoutLicitanteInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLicitanteInput, UsuarioUpdateWithoutLicitanteInput>, UsuarioUncheckedUpdateWithoutLicitanteInput>
  }

  export type PropostaUpdateManyWithoutLicitanteNestedInput = {
    create?: XOR<PropostaCreateWithoutLicitanteInput, PropostaUncheckedCreateWithoutLicitanteInput> | PropostaCreateWithoutLicitanteInput[] | PropostaUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutLicitanteInput | PropostaCreateOrConnectWithoutLicitanteInput[]
    upsert?: PropostaUpsertWithWhereUniqueWithoutLicitanteInput | PropostaUpsertWithWhereUniqueWithoutLicitanteInput[]
    createMany?: PropostaCreateManyLicitanteInputEnvelope
    set?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    disconnect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    delete?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    update?: PropostaUpdateWithWhereUniqueWithoutLicitanteInput | PropostaUpdateWithWhereUniqueWithoutLicitanteInput[]
    updateMany?: PropostaUpdateManyWithWhereWithoutLicitanteInput | PropostaUpdateManyWithWhereWithoutLicitanteInput[]
    deleteMany?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
  }

  export type LanceUpdateManyWithoutLicitanteNestedInput = {
    create?: XOR<LanceCreateWithoutLicitanteInput, LanceUncheckedCreateWithoutLicitanteInput> | LanceCreateWithoutLicitanteInput[] | LanceUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: LanceCreateOrConnectWithoutLicitanteInput | LanceCreateOrConnectWithoutLicitanteInput[]
    upsert?: LanceUpsertWithWhereUniqueWithoutLicitanteInput | LanceUpsertWithWhereUniqueWithoutLicitanteInput[]
    createMany?: LanceCreateManyLicitanteInputEnvelope
    set?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    disconnect?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    delete?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    connect?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    update?: LanceUpdateWithWhereUniqueWithoutLicitanteInput | LanceUpdateWithWhereUniqueWithoutLicitanteInput[]
    updateMany?: LanceUpdateManyWithWhereWithoutLicitanteInput | LanceUpdateManyWithWhereWithoutLicitanteInput[]
    deleteMany?: LanceScalarWhereInput | LanceScalarWhereInput[]
  }

  export type DocumentoLicitanteUpdateManyWithoutLicitanteNestedInput = {
    create?: XOR<DocumentoLicitanteCreateWithoutLicitanteInput, DocumentoLicitanteUncheckedCreateWithoutLicitanteInput> | DocumentoLicitanteCreateWithoutLicitanteInput[] | DocumentoLicitanteUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: DocumentoLicitanteCreateOrConnectWithoutLicitanteInput | DocumentoLicitanteCreateOrConnectWithoutLicitanteInput[]
    upsert?: DocumentoLicitanteUpsertWithWhereUniqueWithoutLicitanteInput | DocumentoLicitanteUpsertWithWhereUniqueWithoutLicitanteInput[]
    createMany?: DocumentoLicitanteCreateManyLicitanteInputEnvelope
    set?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    disconnect?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    delete?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    connect?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    update?: DocumentoLicitanteUpdateWithWhereUniqueWithoutLicitanteInput | DocumentoLicitanteUpdateWithWhereUniqueWithoutLicitanteInput[]
    updateMany?: DocumentoLicitanteUpdateManyWithWhereWithoutLicitanteInput | DocumentoLicitanteUpdateManyWithWhereWithoutLicitanteInput[]
    deleteMany?: DocumentoLicitanteScalarWhereInput | DocumentoLicitanteScalarWhereInput[]
  }

  export type SessaoUpdateManyWithoutLicitanteNestedInput = {
    create?: XOR<SessaoCreateWithoutLicitanteInput, SessaoUncheckedCreateWithoutLicitanteInput> | SessaoCreateWithoutLicitanteInput[] | SessaoUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutLicitanteInput | SessaoCreateOrConnectWithoutLicitanteInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutLicitanteInput | SessaoUpsertWithWhereUniqueWithoutLicitanteInput[]
    createMany?: SessaoCreateManyLicitanteInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutLicitanteInput | SessaoUpdateWithWhereUniqueWithoutLicitanteInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutLicitanteInput | SessaoUpdateManyWithWhereWithoutLicitanteInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type MensagemChatUpdateManyWithoutLicitanteNestedInput = {
    create?: XOR<MensagemChatCreateWithoutLicitanteInput, MensagemChatUncheckedCreateWithoutLicitanteInput> | MensagemChatCreateWithoutLicitanteInput[] | MensagemChatUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutLicitanteInput | MensagemChatCreateOrConnectWithoutLicitanteInput[]
    upsert?: MensagemChatUpsertWithWhereUniqueWithoutLicitanteInput | MensagemChatUpsertWithWhereUniqueWithoutLicitanteInput[]
    createMany?: MensagemChatCreateManyLicitanteInputEnvelope
    set?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    disconnect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    delete?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    update?: MensagemChatUpdateWithWhereUniqueWithoutLicitanteInput | MensagemChatUpdateWithWhereUniqueWithoutLicitanteInput[]
    updateMany?: MensagemChatUpdateManyWithWhereWithoutLicitanteInput | MensagemChatUpdateManyWithWhereWithoutLicitanteInput[]
    deleteMany?: MensagemChatScalarWhereInput | MensagemChatScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateOneWithoutLicitanteNestedInput = {
    create?: XOR<UsuarioCreateWithoutLicitanteInput, UsuarioUncheckedCreateWithoutLicitanteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLicitanteInput
    upsert?: UsuarioUpsertWithoutLicitanteInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLicitanteInput, UsuarioUpdateWithoutLicitanteInput>, UsuarioUncheckedUpdateWithoutLicitanteInput>
  }

  export type PropostaUncheckedUpdateManyWithoutLicitanteNestedInput = {
    create?: XOR<PropostaCreateWithoutLicitanteInput, PropostaUncheckedCreateWithoutLicitanteInput> | PropostaCreateWithoutLicitanteInput[] | PropostaUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutLicitanteInput | PropostaCreateOrConnectWithoutLicitanteInput[]
    upsert?: PropostaUpsertWithWhereUniqueWithoutLicitanteInput | PropostaUpsertWithWhereUniqueWithoutLicitanteInput[]
    createMany?: PropostaCreateManyLicitanteInputEnvelope
    set?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    disconnect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    delete?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    update?: PropostaUpdateWithWhereUniqueWithoutLicitanteInput | PropostaUpdateWithWhereUniqueWithoutLicitanteInput[]
    updateMany?: PropostaUpdateManyWithWhereWithoutLicitanteInput | PropostaUpdateManyWithWhereWithoutLicitanteInput[]
    deleteMany?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
  }

  export type LanceUncheckedUpdateManyWithoutLicitanteNestedInput = {
    create?: XOR<LanceCreateWithoutLicitanteInput, LanceUncheckedCreateWithoutLicitanteInput> | LanceCreateWithoutLicitanteInput[] | LanceUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: LanceCreateOrConnectWithoutLicitanteInput | LanceCreateOrConnectWithoutLicitanteInput[]
    upsert?: LanceUpsertWithWhereUniqueWithoutLicitanteInput | LanceUpsertWithWhereUniqueWithoutLicitanteInput[]
    createMany?: LanceCreateManyLicitanteInputEnvelope
    set?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    disconnect?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    delete?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    connect?: LanceWhereUniqueInput | LanceWhereUniqueInput[]
    update?: LanceUpdateWithWhereUniqueWithoutLicitanteInput | LanceUpdateWithWhereUniqueWithoutLicitanteInput[]
    updateMany?: LanceUpdateManyWithWhereWithoutLicitanteInput | LanceUpdateManyWithWhereWithoutLicitanteInput[]
    deleteMany?: LanceScalarWhereInput | LanceScalarWhereInput[]
  }

  export type DocumentoLicitanteUncheckedUpdateManyWithoutLicitanteNestedInput = {
    create?: XOR<DocumentoLicitanteCreateWithoutLicitanteInput, DocumentoLicitanteUncheckedCreateWithoutLicitanteInput> | DocumentoLicitanteCreateWithoutLicitanteInput[] | DocumentoLicitanteUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: DocumentoLicitanteCreateOrConnectWithoutLicitanteInput | DocumentoLicitanteCreateOrConnectWithoutLicitanteInput[]
    upsert?: DocumentoLicitanteUpsertWithWhereUniqueWithoutLicitanteInput | DocumentoLicitanteUpsertWithWhereUniqueWithoutLicitanteInput[]
    createMany?: DocumentoLicitanteCreateManyLicitanteInputEnvelope
    set?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    disconnect?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    delete?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    connect?: DocumentoLicitanteWhereUniqueInput | DocumentoLicitanteWhereUniqueInput[]
    update?: DocumentoLicitanteUpdateWithWhereUniqueWithoutLicitanteInput | DocumentoLicitanteUpdateWithWhereUniqueWithoutLicitanteInput[]
    updateMany?: DocumentoLicitanteUpdateManyWithWhereWithoutLicitanteInput | DocumentoLicitanteUpdateManyWithWhereWithoutLicitanteInput[]
    deleteMany?: DocumentoLicitanteScalarWhereInput | DocumentoLicitanteScalarWhereInput[]
  }

  export type SessaoUncheckedUpdateManyWithoutLicitanteNestedInput = {
    create?: XOR<SessaoCreateWithoutLicitanteInput, SessaoUncheckedCreateWithoutLicitanteInput> | SessaoCreateWithoutLicitanteInput[] | SessaoUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutLicitanteInput | SessaoCreateOrConnectWithoutLicitanteInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutLicitanteInput | SessaoUpsertWithWhereUniqueWithoutLicitanteInput[]
    createMany?: SessaoCreateManyLicitanteInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutLicitanteInput | SessaoUpdateWithWhereUniqueWithoutLicitanteInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutLicitanteInput | SessaoUpdateManyWithWhereWithoutLicitanteInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type MensagemChatUncheckedUpdateManyWithoutLicitanteNestedInput = {
    create?: XOR<MensagemChatCreateWithoutLicitanteInput, MensagemChatUncheckedCreateWithoutLicitanteInput> | MensagemChatCreateWithoutLicitanteInput[] | MensagemChatUncheckedCreateWithoutLicitanteInput[]
    connectOrCreate?: MensagemChatCreateOrConnectWithoutLicitanteInput | MensagemChatCreateOrConnectWithoutLicitanteInput[]
    upsert?: MensagemChatUpsertWithWhereUniqueWithoutLicitanteInput | MensagemChatUpsertWithWhereUniqueWithoutLicitanteInput[]
    createMany?: MensagemChatCreateManyLicitanteInputEnvelope
    set?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    disconnect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    delete?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    connect?: MensagemChatWhereUniqueInput | MensagemChatWhereUniqueInput[]
    update?: MensagemChatUpdateWithWhereUniqueWithoutLicitanteInput | MensagemChatUpdateWithWhereUniqueWithoutLicitanteInput[]
    updateMany?: MensagemChatUpdateManyWithWhereWithoutLicitanteInput | MensagemChatUpdateManyWithWhereWithoutLicitanteInput[]
    deleteMany?: MensagemChatScalarWhereInput | MensagemChatScalarWhereInput[]
  }

  export type DisputaCreateNestedOneWithoutPropostasInput = {
    create?: XOR<DisputaCreateWithoutPropostasInput, DisputaUncheckedCreateWithoutPropostasInput>
    connectOrCreate?: DisputaCreateOrConnectWithoutPropostasInput
    connect?: DisputaWhereUniqueInput
  }

  export type LicitanteCreateNestedOneWithoutPropostasInput = {
    create?: XOR<LicitanteCreateWithoutPropostasInput, LicitanteUncheckedCreateWithoutPropostasInput>
    connectOrCreate?: LicitanteCreateOrConnectWithoutPropostasInput
    connect?: LicitanteWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutPropostasInput = {
    create?: XOR<ItemCreateWithoutPropostasInput, ItemUncheckedCreateWithoutPropostasInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPropostasInput
    connect?: ItemWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusPropostaFieldUpdateOperationsInput = {
    set?: $Enums.StatusProposta
  }

  export type DisputaUpdateOneRequiredWithoutPropostasNestedInput = {
    create?: XOR<DisputaCreateWithoutPropostasInput, DisputaUncheckedCreateWithoutPropostasInput>
    connectOrCreate?: DisputaCreateOrConnectWithoutPropostasInput
    upsert?: DisputaUpsertWithoutPropostasInput
    connect?: DisputaWhereUniqueInput
    update?: XOR<XOR<DisputaUpdateToOneWithWhereWithoutPropostasInput, DisputaUpdateWithoutPropostasInput>, DisputaUncheckedUpdateWithoutPropostasInput>
  }

  export type LicitanteUpdateOneRequiredWithoutPropostasNestedInput = {
    create?: XOR<LicitanteCreateWithoutPropostasInput, LicitanteUncheckedCreateWithoutPropostasInput>
    connectOrCreate?: LicitanteCreateOrConnectWithoutPropostasInput
    upsert?: LicitanteUpsertWithoutPropostasInput
    connect?: LicitanteWhereUniqueInput
    update?: XOR<XOR<LicitanteUpdateToOneWithWhereWithoutPropostasInput, LicitanteUpdateWithoutPropostasInput>, LicitanteUncheckedUpdateWithoutPropostasInput>
  }

  export type ItemUpdateOneRequiredWithoutPropostasNestedInput = {
    create?: XOR<ItemCreateWithoutPropostasInput, ItemUncheckedCreateWithoutPropostasInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPropostasInput
    upsert?: ItemUpsertWithoutPropostasInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutPropostasInput, ItemUpdateWithoutPropostasInput>, ItemUncheckedUpdateWithoutPropostasInput>
  }

  export type DisputaCreateNestedOneWithoutLancesInput = {
    create?: XOR<DisputaCreateWithoutLancesInput, DisputaUncheckedCreateWithoutLancesInput>
    connectOrCreate?: DisputaCreateOrConnectWithoutLancesInput
    connect?: DisputaWhereUniqueInput
  }

  export type LicitanteCreateNestedOneWithoutLancesInput = {
    create?: XOR<LicitanteCreateWithoutLancesInput, LicitanteUncheckedCreateWithoutLancesInput>
    connectOrCreate?: LicitanteCreateOrConnectWithoutLancesInput
    connect?: LicitanteWhereUniqueInput
  }

  export type DisputaUpdateOneRequiredWithoutLancesNestedInput = {
    create?: XOR<DisputaCreateWithoutLancesInput, DisputaUncheckedCreateWithoutLancesInput>
    connectOrCreate?: DisputaCreateOrConnectWithoutLancesInput
    upsert?: DisputaUpsertWithoutLancesInput
    connect?: DisputaWhereUniqueInput
    update?: XOR<XOR<DisputaUpdateToOneWithWhereWithoutLancesInput, DisputaUpdateWithoutLancesInput>, DisputaUncheckedUpdateWithoutLancesInput>
  }

  export type LicitanteUpdateOneRequiredWithoutLancesNestedInput = {
    create?: XOR<LicitanteCreateWithoutLancesInput, LicitanteUncheckedCreateWithoutLancesInput>
    connectOrCreate?: LicitanteCreateOrConnectWithoutLancesInput
    upsert?: LicitanteUpsertWithoutLancesInput
    connect?: LicitanteWhereUniqueInput
    update?: XOR<XOR<LicitanteUpdateToOneWithWhereWithoutLancesInput, LicitanteUpdateWithoutLancesInput>, LicitanteUncheckedUpdateWithoutLancesInput>
  }

  export type DisputaCreateNestedOneWithoutDocumentosInput = {
    create?: XOR<DisputaCreateWithoutDocumentosInput, DisputaUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: DisputaCreateOrConnectWithoutDocumentosInput
    connect?: DisputaWhereUniqueInput
  }

  export type LicitanteCreateNestedOneWithoutDocumentosInput = {
    create?: XOR<LicitanteCreateWithoutDocumentosInput, LicitanteUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: LicitanteCreateOrConnectWithoutDocumentosInput
    connect?: LicitanteWhereUniqueInput
  }

  export type EnumTipoDocumentoFieldUpdateOperationsInput = {
    set?: $Enums.TipoDocumento
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DisputaUpdateOneRequiredWithoutDocumentosNestedInput = {
    create?: XOR<DisputaCreateWithoutDocumentosInput, DisputaUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: DisputaCreateOrConnectWithoutDocumentosInput
    upsert?: DisputaUpsertWithoutDocumentosInput
    connect?: DisputaWhereUniqueInput
    update?: XOR<XOR<DisputaUpdateToOneWithWhereWithoutDocumentosInput, DisputaUpdateWithoutDocumentosInput>, DisputaUncheckedUpdateWithoutDocumentosInput>
  }

  export type LicitanteUpdateOneRequiredWithoutDocumentosNestedInput = {
    create?: XOR<LicitanteCreateWithoutDocumentosInput, LicitanteUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: LicitanteCreateOrConnectWithoutDocumentosInput
    upsert?: LicitanteUpsertWithoutDocumentosInput
    connect?: LicitanteWhereUniqueInput
    update?: XOR<XOR<LicitanteUpdateToOneWithWhereWithoutDocumentosInput, LicitanteUpdateWithoutDocumentosInput>, LicitanteUncheckedUpdateWithoutDocumentosInput>
  }

  export type EditalCreateNestedOneWithoutDocumentosObrigatoriosInput = {
    create?: XOR<EditalCreateWithoutDocumentosObrigatoriosInput, EditalUncheckedCreateWithoutDocumentosObrigatoriosInput>
    connectOrCreate?: EditalCreateOrConnectWithoutDocumentosObrigatoriosInput
    connect?: EditalWhereUniqueInput
  }

  export type EditalUpdateOneRequiredWithoutDocumentosObrigatoriosNestedInput = {
    create?: XOR<EditalCreateWithoutDocumentosObrigatoriosInput, EditalUncheckedCreateWithoutDocumentosObrigatoriosInput>
    connectOrCreate?: EditalCreateOrConnectWithoutDocumentosObrigatoriosInput
    upsert?: EditalUpsertWithoutDocumentosObrigatoriosInput
    connect?: EditalWhereUniqueInput
    update?: XOR<XOR<EditalUpdateToOneWithWhereWithoutDocumentosObrigatoriosInput, EditalUpdateWithoutDocumentosObrigatoriosInput>, EditalUncheckedUpdateWithoutDocumentosObrigatoriosInput>
  }

  export type EditalCreateNestedOneWithoutMensagensChatInput = {
    create?: XOR<EditalCreateWithoutMensagensChatInput, EditalUncheckedCreateWithoutMensagensChatInput>
    connectOrCreate?: EditalCreateOrConnectWithoutMensagensChatInput
    connect?: EditalWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMensagemChatInput = {
    create?: XOR<UsuarioCreateWithoutMensagemChatInput, UsuarioUncheckedCreateWithoutMensagemChatInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensagemChatInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DisputaCreateNestedOneWithoutMensagensChatInput = {
    create?: XOR<DisputaCreateWithoutMensagensChatInput, DisputaUncheckedCreateWithoutMensagensChatInput>
    connectOrCreate?: DisputaCreateOrConnectWithoutMensagensChatInput
    connect?: DisputaWhereUniqueInput
  }

  export type LicitanteCreateNestedOneWithoutMensagensChatInput = {
    create?: XOR<LicitanteCreateWithoutMensagensChatInput, LicitanteUncheckedCreateWithoutMensagensChatInput>
    connectOrCreate?: LicitanteCreateOrConnectWithoutMensagensChatInput
    connect?: LicitanteWhereUniqueInput
  }

  export type EnumTipoAutorMensagemFieldUpdateOperationsInput = {
    set?: $Enums.TipoAutorMensagem
  }

  export type EditalUpdateOneRequiredWithoutMensagensChatNestedInput = {
    create?: XOR<EditalCreateWithoutMensagensChatInput, EditalUncheckedCreateWithoutMensagensChatInput>
    connectOrCreate?: EditalCreateOrConnectWithoutMensagensChatInput
    upsert?: EditalUpsertWithoutMensagensChatInput
    connect?: EditalWhereUniqueInput
    update?: XOR<XOR<EditalUpdateToOneWithWhereWithoutMensagensChatInput, EditalUpdateWithoutMensagensChatInput>, EditalUncheckedUpdateWithoutMensagensChatInput>
  }

  export type UsuarioUpdateOneRequiredWithoutMensagemChatNestedInput = {
    create?: XOR<UsuarioCreateWithoutMensagemChatInput, UsuarioUncheckedCreateWithoutMensagemChatInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensagemChatInput
    upsert?: UsuarioUpsertWithoutMensagemChatInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMensagemChatInput, UsuarioUpdateWithoutMensagemChatInput>, UsuarioUncheckedUpdateWithoutMensagemChatInput>
  }

  export type DisputaUpdateOneWithoutMensagensChatNestedInput = {
    create?: XOR<DisputaCreateWithoutMensagensChatInput, DisputaUncheckedCreateWithoutMensagensChatInput>
    connectOrCreate?: DisputaCreateOrConnectWithoutMensagensChatInput
    upsert?: DisputaUpsertWithoutMensagensChatInput
    disconnect?: DisputaWhereInput | boolean
    delete?: DisputaWhereInput | boolean
    connect?: DisputaWhereUniqueInput
    update?: XOR<XOR<DisputaUpdateToOneWithWhereWithoutMensagensChatInput, DisputaUpdateWithoutMensagensChatInput>, DisputaUncheckedUpdateWithoutMensagensChatInput>
  }

  export type LicitanteUpdateOneWithoutMensagensChatNestedInput = {
    create?: XOR<LicitanteCreateWithoutMensagensChatInput, LicitanteUncheckedCreateWithoutMensagensChatInput>
    connectOrCreate?: LicitanteCreateOrConnectWithoutMensagensChatInput
    upsert?: LicitanteUpsertWithoutMensagensChatInput
    disconnect?: LicitanteWhereInput | boolean
    delete?: LicitanteWhereInput | boolean
    connect?: LicitanteWhereUniqueInput
    update?: XOR<XOR<LicitanteUpdateToOneWithWhereWithoutMensagensChatInput, LicitanteUpdateWithoutMensagensChatInput>, LicitanteUncheckedUpdateWithoutMensagensChatInput>
  }

  export type LicitanteCreateNestedOneWithoutSessoesInput = {
    create?: XOR<LicitanteCreateWithoutSessoesInput, LicitanteUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: LicitanteCreateOrConnectWithoutSessoesInput
    connect?: LicitanteWhereUniqueInput
  }

  export type DisputaCreateNestedOneWithoutSessaoInput = {
    create?: XOR<DisputaCreateWithoutSessaoInput, DisputaUncheckedCreateWithoutSessaoInput>
    connectOrCreate?: DisputaCreateOrConnectWithoutSessaoInput
    connect?: DisputaWhereUniqueInput
  }

  export type LicitanteUpdateOneRequiredWithoutSessoesNestedInput = {
    create?: XOR<LicitanteCreateWithoutSessoesInput, LicitanteUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: LicitanteCreateOrConnectWithoutSessoesInput
    upsert?: LicitanteUpsertWithoutSessoesInput
    connect?: LicitanteWhereUniqueInput
    update?: XOR<XOR<LicitanteUpdateToOneWithWhereWithoutSessoesInput, LicitanteUpdateWithoutSessoesInput>, LicitanteUncheckedUpdateWithoutSessoesInput>
  }

  export type DisputaUpdateOneRequiredWithoutSessaoNestedInput = {
    create?: XOR<DisputaCreateWithoutSessaoInput, DisputaUncheckedCreateWithoutSessaoInput>
    connectOrCreate?: DisputaCreateOrConnectWithoutSessaoInput
    upsert?: DisputaUpsertWithoutSessaoInput
    connect?: DisputaWhereUniqueInput
    update?: XOR<XOR<DisputaUpdateToOneWithWhereWithoutSessaoInput, DisputaUpdateWithoutSessaoInput>, DisputaUncheckedUpdateWithoutSessaoInput>
  }

  export type DisputaCreateNestedOneWithoutLogsInput = {
    create?: XOR<DisputaCreateWithoutLogsInput, DisputaUncheckedCreateWithoutLogsInput>
    connectOrCreate?: DisputaCreateOrConnectWithoutLogsInput
    connect?: DisputaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutLogAtividadeInput = {
    create?: XOR<UsuarioCreateWithoutLogAtividadeInput, UsuarioUncheckedCreateWithoutLogAtividadeInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogAtividadeInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DisputaUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<DisputaCreateWithoutLogsInput, DisputaUncheckedCreateWithoutLogsInput>
    connectOrCreate?: DisputaCreateOrConnectWithoutLogsInput
    upsert?: DisputaUpsertWithoutLogsInput
    connect?: DisputaWhereUniqueInput
    update?: XOR<XOR<DisputaUpdateToOneWithWhereWithoutLogsInput, DisputaUpdateWithoutLogsInput>, DisputaUncheckedUpdateWithoutLogsInput>
  }

  export type UsuarioUpdateOneWithoutLogAtividadeNestedInput = {
    create?: XOR<UsuarioCreateWithoutLogAtividadeInput, UsuarioUncheckedCreateWithoutLogAtividadeInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogAtividadeInput
    upsert?: UsuarioUpsertWithoutLogAtividadeInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLogAtividadeInput, UsuarioUpdateWithoutLogAtividadeInput>, UsuarioUncheckedUpdateWithoutLogAtividadeInput>
  }

  export type ItemCreateNestedManyWithoutLoteInput = {
    create?: XOR<ItemCreateWithoutLoteInput, ItemUncheckedCreateWithoutLoteInput> | ItemCreateWithoutLoteInput[] | ItemUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutLoteInput | ItemCreateOrConnectWithoutLoteInput[]
    createMany?: ItemCreateManyLoteInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type EditalCreateNestedOneWithoutLotesInput = {
    create?: XOR<EditalCreateWithoutLotesInput, EditalUncheckedCreateWithoutLotesInput>
    connectOrCreate?: EditalCreateOrConnectWithoutLotesInput
    connect?: EditalWhereUniqueInput
  }

  export type ItemUncheckedCreateNestedManyWithoutLoteInput = {
    create?: XOR<ItemCreateWithoutLoteInput, ItemUncheckedCreateWithoutLoteInput> | ItemCreateWithoutLoteInput[] | ItemUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutLoteInput | ItemCreateOrConnectWithoutLoteInput[]
    createMany?: ItemCreateManyLoteInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUpdateManyWithoutLoteNestedInput = {
    create?: XOR<ItemCreateWithoutLoteInput, ItemUncheckedCreateWithoutLoteInput> | ItemCreateWithoutLoteInput[] | ItemUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutLoteInput | ItemCreateOrConnectWithoutLoteInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutLoteInput | ItemUpsertWithWhereUniqueWithoutLoteInput[]
    createMany?: ItemCreateManyLoteInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutLoteInput | ItemUpdateWithWhereUniqueWithoutLoteInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutLoteInput | ItemUpdateManyWithWhereWithoutLoteInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type EditalUpdateOneRequiredWithoutLotesNestedInput = {
    create?: XOR<EditalCreateWithoutLotesInput, EditalUncheckedCreateWithoutLotesInput>
    connectOrCreate?: EditalCreateOrConnectWithoutLotesInput
    upsert?: EditalUpsertWithoutLotesInput
    connect?: EditalWhereUniqueInput
    update?: XOR<XOR<EditalUpdateToOneWithWhereWithoutLotesInput, EditalUpdateWithoutLotesInput>, EditalUncheckedUpdateWithoutLotesInput>
  }

  export type ItemUncheckedUpdateManyWithoutLoteNestedInput = {
    create?: XOR<ItemCreateWithoutLoteInput, ItemUncheckedCreateWithoutLoteInput> | ItemCreateWithoutLoteInput[] | ItemUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutLoteInput | ItemCreateOrConnectWithoutLoteInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutLoteInput | ItemUpsertWithWhereUniqueWithoutLoteInput[]
    createMany?: ItemCreateManyLoteInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutLoteInput | ItemUpdateWithWhereUniqueWithoutLoteInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutLoteInput | ItemUpdateManyWithWhereWithoutLoteInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type LoteCreateNestedOneWithoutItensInput = {
    create?: XOR<LoteCreateWithoutItensInput, LoteUncheckedCreateWithoutItensInput>
    connectOrCreate?: LoteCreateOrConnectWithoutItensInput
    connect?: LoteWhereUniqueInput
  }

  export type PropostaCreateNestedManyWithoutItemInput = {
    create?: XOR<PropostaCreateWithoutItemInput, PropostaUncheckedCreateWithoutItemInput> | PropostaCreateWithoutItemInput[] | PropostaUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutItemInput | PropostaCreateOrConnectWithoutItemInput[]
    createMany?: PropostaCreateManyItemInputEnvelope
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
  }

  export type PropostaUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<PropostaCreateWithoutItemInput, PropostaUncheckedCreateWithoutItemInput> | PropostaCreateWithoutItemInput[] | PropostaUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutItemInput | PropostaCreateOrConnectWithoutItemInput[]
    createMany?: PropostaCreateManyItemInputEnvelope
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
  }

  export type LoteUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<LoteCreateWithoutItensInput, LoteUncheckedCreateWithoutItensInput>
    connectOrCreate?: LoteCreateOrConnectWithoutItensInput
    upsert?: LoteUpsertWithoutItensInput
    connect?: LoteWhereUniqueInput
    update?: XOR<XOR<LoteUpdateToOneWithWhereWithoutItensInput, LoteUpdateWithoutItensInput>, LoteUncheckedUpdateWithoutItensInput>
  }

  export type PropostaUpdateManyWithoutItemNestedInput = {
    create?: XOR<PropostaCreateWithoutItemInput, PropostaUncheckedCreateWithoutItemInput> | PropostaCreateWithoutItemInput[] | PropostaUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutItemInput | PropostaCreateOrConnectWithoutItemInput[]
    upsert?: PropostaUpsertWithWhereUniqueWithoutItemInput | PropostaUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: PropostaCreateManyItemInputEnvelope
    set?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    disconnect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    delete?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    update?: PropostaUpdateWithWhereUniqueWithoutItemInput | PropostaUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: PropostaUpdateManyWithWhereWithoutItemInput | PropostaUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
  }

  export type PropostaUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<PropostaCreateWithoutItemInput, PropostaUncheckedCreateWithoutItemInput> | PropostaCreateWithoutItemInput[] | PropostaUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutItemInput | PropostaCreateOrConnectWithoutItemInput[]
    upsert?: PropostaUpsertWithWhereUniqueWithoutItemInput | PropostaUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: PropostaCreateManyItemInputEnvelope
    set?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    disconnect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    delete?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    update?: PropostaUpdateWithWhereUniqueWithoutItemInput | PropostaUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: PropostaUpdateManyWithWhereWithoutItemInput | PropostaUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPerfilUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.PerfilUsuario | EnumPerfilUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilUsuarioFilter<$PrismaModel> | $Enums.PerfilUsuario
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumPerfilUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PerfilUsuario | EnumPerfilUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.PerfilUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPerfilUsuarioFilter<$PrismaModel>
    _max?: NestedEnumPerfilUsuarioFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDisputaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputaStatus | EnumDisputaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputaStatus[] | ListEnumDisputaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputaStatus[] | ListEnumDisputaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputaStatusFilter<$PrismaModel> | $Enums.DisputaStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDisputaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputaStatus | EnumDisputaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputaStatus[] | ListEnumDisputaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputaStatus[] | ListEnumDisputaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputaStatusWithAggregatesFilter<$PrismaModel> | $Enums.DisputaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisputaStatusFilter<$PrismaModel>
    _max?: NestedEnumDisputaStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoEmpresaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEmpresa | EnumTipoEmpresaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEmpresa[] | ListEnumTipoEmpresaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEmpresa[] | ListEnumTipoEmpresaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEmpresaFilter<$PrismaModel> | $Enums.TipoEmpresa
  }

  export type NestedEnumTipoEmpresaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEmpresa | EnumTipoEmpresaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEmpresa[] | ListEnumTipoEmpresaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEmpresa[] | ListEnumTipoEmpresaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEmpresaWithAggregatesFilter<$PrismaModel> | $Enums.TipoEmpresa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoEmpresaFilter<$PrismaModel>
    _max?: NestedEnumTipoEmpresaFilter<$PrismaModel>
  }

  export type NestedEnumStatusPropostaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProposta | EnumStatusPropostaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPropostaFilter<$PrismaModel> | $Enums.StatusProposta
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusPropostaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProposta | EnumStatusPropostaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPropostaWithAggregatesFilter<$PrismaModel> | $Enums.StatusProposta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPropostaFilter<$PrismaModel>
    _max?: NestedEnumStatusPropostaFilter<$PrismaModel>
  }

  export type NestedEnumTipoDocumentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoFilter<$PrismaModel> | $Enums.TipoDocumento
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTipoDocumentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoDocumento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDocumentoFilter<$PrismaModel>
    _max?: NestedEnumTipoDocumentoFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTipoAutorMensagemFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAutorMensagem | EnumTipoAutorMensagemFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAutorMensagem[] | ListEnumTipoAutorMensagemFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAutorMensagem[] | ListEnumTipoAutorMensagemFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAutorMensagemFilter<$PrismaModel> | $Enums.TipoAutorMensagem
  }

  export type NestedEnumTipoAutorMensagemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAutorMensagem | EnumTipoAutorMensagemFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAutorMensagem[] | ListEnumTipoAutorMensagemFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAutorMensagem[] | ListEnumTipoAutorMensagemFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAutorMensagemWithAggregatesFilter<$PrismaModel> | $Enums.TipoAutorMensagem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAutorMensagemFilter<$PrismaModel>
    _max?: NestedEnumTipoAutorMensagemFilter<$PrismaModel>
  }

  export type LogAtividadeCreateWithoutUsuarioInput = {
    id?: string
    acao: string
    detalhes?: string | null
    data?: Date | string
    disputa: DisputaCreateNestedOneWithoutLogsInput
  }

  export type LogAtividadeUncheckedCreateWithoutUsuarioInput = {
    id?: string
    disputaId: string
    acao: string
    detalhes?: string | null
    data?: Date | string
  }

  export type LogAtividadeCreateOrConnectWithoutUsuarioInput = {
    where: LogAtividadeWhereUniqueInput
    create: XOR<LogAtividadeCreateWithoutUsuarioInput, LogAtividadeUncheckedCreateWithoutUsuarioInput>
  }

  export type LogAtividadeCreateManyUsuarioInputEnvelope = {
    data: LogAtividadeCreateManyUsuarioInput | LogAtividadeCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type MensagemChatCreateWithoutAutorInput = {
    id?: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    edital: EditalCreateNestedOneWithoutMensagensChatInput
    Disputa?: DisputaCreateNestedOneWithoutMensagensChatInput
    Licitante?: LicitanteCreateNestedOneWithoutMensagensChatInput
  }

  export type MensagemChatUncheckedCreateWithoutAutorInput = {
    id?: string
    editalId: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disputaId?: string | null
    licitanteId?: string | null
  }

  export type MensagemChatCreateOrConnectWithoutAutorInput = {
    where: MensagemChatWhereUniqueInput
    create: XOR<MensagemChatCreateWithoutAutorInput, MensagemChatUncheckedCreateWithoutAutorInput>
  }

  export type MensagemChatCreateManyAutorInputEnvelope = {
    data: MensagemChatCreateManyAutorInput | MensagemChatCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type LicitanteCreateWithoutUsuarioInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    propostas?: PropostaCreateNestedManyWithoutLicitanteInput
    lances?: LanceCreateNestedManyWithoutLicitanteInput
    documentos?: DocumentoLicitanteCreateNestedManyWithoutLicitanteInput
    sessoes?: SessaoCreateNestedManyWithoutLicitanteInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteUncheckedCreateWithoutUsuarioInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    propostas?: PropostaUncheckedCreateNestedManyWithoutLicitanteInput
    lances?: LanceUncheckedCreateNestedManyWithoutLicitanteInput
    documentos?: DocumentoLicitanteUncheckedCreateNestedManyWithoutLicitanteInput
    sessoes?: SessaoUncheckedCreateNestedManyWithoutLicitanteInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteCreateOrConnectWithoutUsuarioInput = {
    where: LicitanteWhereUniqueInput
    create: XOR<LicitanteCreateWithoutUsuarioInput, LicitanteUncheckedCreateWithoutUsuarioInput>
  }

  export type LogAtividadeUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: LogAtividadeWhereUniqueInput
    update: XOR<LogAtividadeUpdateWithoutUsuarioInput, LogAtividadeUncheckedUpdateWithoutUsuarioInput>
    create: XOR<LogAtividadeCreateWithoutUsuarioInput, LogAtividadeUncheckedCreateWithoutUsuarioInput>
  }

  export type LogAtividadeUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: LogAtividadeWhereUniqueInput
    data: XOR<LogAtividadeUpdateWithoutUsuarioInput, LogAtividadeUncheckedUpdateWithoutUsuarioInput>
  }

  export type LogAtividadeUpdateManyWithWhereWithoutUsuarioInput = {
    where: LogAtividadeScalarWhereInput
    data: XOR<LogAtividadeUpdateManyMutationInput, LogAtividadeUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type LogAtividadeScalarWhereInput = {
    AND?: LogAtividadeScalarWhereInput | LogAtividadeScalarWhereInput[]
    OR?: LogAtividadeScalarWhereInput[]
    NOT?: LogAtividadeScalarWhereInput | LogAtividadeScalarWhereInput[]
    id?: StringFilter<"LogAtividade"> | string
    disputaId?: StringFilter<"LogAtividade"> | string
    usuarioId?: StringNullableFilter<"LogAtividade"> | string | null
    acao?: StringFilter<"LogAtividade"> | string
    detalhes?: StringNullableFilter<"LogAtividade"> | string | null
    data?: DateTimeFilter<"LogAtividade"> | Date | string
  }

  export type MensagemChatUpsertWithWhereUniqueWithoutAutorInput = {
    where: MensagemChatWhereUniqueInput
    update: XOR<MensagemChatUpdateWithoutAutorInput, MensagemChatUncheckedUpdateWithoutAutorInput>
    create: XOR<MensagemChatCreateWithoutAutorInput, MensagemChatUncheckedCreateWithoutAutorInput>
  }

  export type MensagemChatUpdateWithWhereUniqueWithoutAutorInput = {
    where: MensagemChatWhereUniqueInput
    data: XOR<MensagemChatUpdateWithoutAutorInput, MensagemChatUncheckedUpdateWithoutAutorInput>
  }

  export type MensagemChatUpdateManyWithWhereWithoutAutorInput = {
    where: MensagemChatScalarWhereInput
    data: XOR<MensagemChatUpdateManyMutationInput, MensagemChatUncheckedUpdateManyWithoutAutorInput>
  }

  export type MensagemChatScalarWhereInput = {
    AND?: MensagemChatScalarWhereInput | MensagemChatScalarWhereInput[]
    OR?: MensagemChatScalarWhereInput[]
    NOT?: MensagemChatScalarWhereInput | MensagemChatScalarWhereInput[]
    id?: StringFilter<"MensagemChat"> | string
    editalId?: StringFilter<"MensagemChat"> | string
    autorId?: StringFilter<"MensagemChat"> | string
    tipoAutor?: EnumTipoAutorMensagemFilter<"MensagemChat"> | $Enums.TipoAutorMensagem
    conteudo?: StringFilter<"MensagemChat"> | string
    createdAt?: DateTimeFilter<"MensagemChat"> | Date | string
    updatedAt?: DateTimeFilter<"MensagemChat"> | Date | string
    disputaId?: StringNullableFilter<"MensagemChat"> | string | null
    licitanteId?: StringNullableFilter<"MensagemChat"> | string | null
  }

  export type LicitanteUpsertWithoutUsuarioInput = {
    update: XOR<LicitanteUpdateWithoutUsuarioInput, LicitanteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<LicitanteCreateWithoutUsuarioInput, LicitanteUncheckedCreateWithoutUsuarioInput>
    where?: LicitanteWhereInput
  }

  export type LicitanteUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: LicitanteWhereInput
    data: XOR<LicitanteUpdateWithoutUsuarioInput, LicitanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type LicitanteUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    propostas?: PropostaUpdateManyWithoutLicitanteNestedInput
    lances?: LanceUpdateManyWithoutLicitanteNestedInput
    documentos?: DocumentoLicitanteUpdateManyWithoutLicitanteNestedInput
    sessoes?: SessaoUpdateManyWithoutLicitanteNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutLicitanteNestedInput
  }

  export type LicitanteUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    propostas?: PropostaUncheckedUpdateManyWithoutLicitanteNestedInput
    lances?: LanceUncheckedUpdateManyWithoutLicitanteNestedInput
    documentos?: DocumentoLicitanteUncheckedUpdateManyWithoutLicitanteNestedInput
    sessoes?: SessaoUncheckedUpdateManyWithoutLicitanteNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutLicitanteNestedInput
  }

  export type DisputaCreateWithoutEditalInput = {
    id?: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    propostas?: PropostaCreateNestedManyWithoutDisputaInput
    lances?: LanceCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoCreateNestedManyWithoutDisputaInput
  }

  export type DisputaUncheckedCreateWithoutEditalInput = {
    id?: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    propostas?: PropostaUncheckedCreateNestedManyWithoutDisputaInput
    lances?: LanceUncheckedCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteUncheckedCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeUncheckedCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoUncheckedCreateNestedManyWithoutDisputaInput
  }

  export type DisputaCreateOrConnectWithoutEditalInput = {
    where: DisputaWhereUniqueInput
    create: XOR<DisputaCreateWithoutEditalInput, DisputaUncheckedCreateWithoutEditalInput>
  }

  export type DisputaCreateManyEditalInputEnvelope = {
    data: DisputaCreateManyEditalInput | DisputaCreateManyEditalInput[]
    skipDuplicates?: boolean
  }

  export type DocumentoObrigatorioCreateWithoutEditalInput = {
    id?: string
    tipoDocumento: $Enums.TipoDocumento
    descricao: string
  }

  export type DocumentoObrigatorioUncheckedCreateWithoutEditalInput = {
    id?: string
    tipoDocumento: $Enums.TipoDocumento
    descricao: string
  }

  export type DocumentoObrigatorioCreateOrConnectWithoutEditalInput = {
    where: DocumentoObrigatorioWhereUniqueInput
    create: XOR<DocumentoObrigatorioCreateWithoutEditalInput, DocumentoObrigatorioUncheckedCreateWithoutEditalInput>
  }

  export type DocumentoObrigatorioCreateManyEditalInputEnvelope = {
    data: DocumentoObrigatorioCreateManyEditalInput | DocumentoObrigatorioCreateManyEditalInput[]
    skipDuplicates?: boolean
  }

  export type LoteCreateWithoutEditalInput = {
    id?: string
    numero: string
    descricao: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemCreateNestedManyWithoutLoteInput
  }

  export type LoteUncheckedCreateWithoutEditalInput = {
    id?: string
    numero: string
    descricao: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemUncheckedCreateNestedManyWithoutLoteInput
  }

  export type LoteCreateOrConnectWithoutEditalInput = {
    where: LoteWhereUniqueInput
    create: XOR<LoteCreateWithoutEditalInput, LoteUncheckedCreateWithoutEditalInput>
  }

  export type LoteCreateManyEditalInputEnvelope = {
    data: LoteCreateManyEditalInput | LoteCreateManyEditalInput[]
    skipDuplicates?: boolean
  }

  export type MensagemChatCreateWithoutEditalInput = {
    id?: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    autor: UsuarioCreateNestedOneWithoutMensagemChatInput
    Disputa?: DisputaCreateNestedOneWithoutMensagensChatInput
    Licitante?: LicitanteCreateNestedOneWithoutMensagensChatInput
  }

  export type MensagemChatUncheckedCreateWithoutEditalInput = {
    id?: string
    autorId: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disputaId?: string | null
    licitanteId?: string | null
  }

  export type MensagemChatCreateOrConnectWithoutEditalInput = {
    where: MensagemChatWhereUniqueInput
    create: XOR<MensagemChatCreateWithoutEditalInput, MensagemChatUncheckedCreateWithoutEditalInput>
  }

  export type MensagemChatCreateManyEditalInputEnvelope = {
    data: MensagemChatCreateManyEditalInput | MensagemChatCreateManyEditalInput[]
    skipDuplicates?: boolean
  }

  export type DisputaUpsertWithWhereUniqueWithoutEditalInput = {
    where: DisputaWhereUniqueInput
    update: XOR<DisputaUpdateWithoutEditalInput, DisputaUncheckedUpdateWithoutEditalInput>
    create: XOR<DisputaCreateWithoutEditalInput, DisputaUncheckedCreateWithoutEditalInput>
  }

  export type DisputaUpdateWithWhereUniqueWithoutEditalInput = {
    where: DisputaWhereUniqueInput
    data: XOR<DisputaUpdateWithoutEditalInput, DisputaUncheckedUpdateWithoutEditalInput>
  }

  export type DisputaUpdateManyWithWhereWithoutEditalInput = {
    where: DisputaScalarWhereInput
    data: XOR<DisputaUpdateManyMutationInput, DisputaUncheckedUpdateManyWithoutEditalInput>
  }

  export type DisputaScalarWhereInput = {
    AND?: DisputaScalarWhereInput | DisputaScalarWhereInput[]
    OR?: DisputaScalarWhereInput[]
    NOT?: DisputaScalarWhereInput | DisputaScalarWhereInput[]
    id?: StringFilter<"Disputa"> | string
    editalId?: StringFilter<"Disputa"> | string
    status?: EnumDisputaStatusFilter<"Disputa"> | $Enums.DisputaStatus
    inicio?: DateTimeNullableFilter<"Disputa"> | Date | string | null
    fimPrevisto?: DateTimeNullableFilter<"Disputa"> | Date | string | null
    encerramento?: DateTimeNullableFilter<"Disputa"> | Date | string | null
    tempoRestante?: IntNullableFilter<"Disputa"> | number | null
  }

  export type DocumentoObrigatorioUpsertWithWhereUniqueWithoutEditalInput = {
    where: DocumentoObrigatorioWhereUniqueInput
    update: XOR<DocumentoObrigatorioUpdateWithoutEditalInput, DocumentoObrigatorioUncheckedUpdateWithoutEditalInput>
    create: XOR<DocumentoObrigatorioCreateWithoutEditalInput, DocumentoObrigatorioUncheckedCreateWithoutEditalInput>
  }

  export type DocumentoObrigatorioUpdateWithWhereUniqueWithoutEditalInput = {
    where: DocumentoObrigatorioWhereUniqueInput
    data: XOR<DocumentoObrigatorioUpdateWithoutEditalInput, DocumentoObrigatorioUncheckedUpdateWithoutEditalInput>
  }

  export type DocumentoObrigatorioUpdateManyWithWhereWithoutEditalInput = {
    where: DocumentoObrigatorioScalarWhereInput
    data: XOR<DocumentoObrigatorioUpdateManyMutationInput, DocumentoObrigatorioUncheckedUpdateManyWithoutEditalInput>
  }

  export type DocumentoObrigatorioScalarWhereInput = {
    AND?: DocumentoObrigatorioScalarWhereInput | DocumentoObrigatorioScalarWhereInput[]
    OR?: DocumentoObrigatorioScalarWhereInput[]
    NOT?: DocumentoObrigatorioScalarWhereInput | DocumentoObrigatorioScalarWhereInput[]
    id?: StringFilter<"DocumentoObrigatorio"> | string
    editalId?: StringFilter<"DocumentoObrigatorio"> | string
    tipoDocumento?: EnumTipoDocumentoFilter<"DocumentoObrigatorio"> | $Enums.TipoDocumento
    descricao?: StringFilter<"DocumentoObrigatorio"> | string
  }

  export type LoteUpsertWithWhereUniqueWithoutEditalInput = {
    where: LoteWhereUniqueInput
    update: XOR<LoteUpdateWithoutEditalInput, LoteUncheckedUpdateWithoutEditalInput>
    create: XOR<LoteCreateWithoutEditalInput, LoteUncheckedCreateWithoutEditalInput>
  }

  export type LoteUpdateWithWhereUniqueWithoutEditalInput = {
    where: LoteWhereUniqueInput
    data: XOR<LoteUpdateWithoutEditalInput, LoteUncheckedUpdateWithoutEditalInput>
  }

  export type LoteUpdateManyWithWhereWithoutEditalInput = {
    where: LoteScalarWhereInput
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyWithoutEditalInput>
  }

  export type LoteScalarWhereInput = {
    AND?: LoteScalarWhereInput | LoteScalarWhereInput[]
    OR?: LoteScalarWhereInput[]
    NOT?: LoteScalarWhereInput | LoteScalarWhereInput[]
    id?: StringFilter<"Lote"> | string
    numero?: StringFilter<"Lote"> | string
    descricao?: StringFilter<"Lote"> | string
    editalId?: StringFilter<"Lote"> | string
    status?: StringFilter<"Lote"> | string
    createdAt?: DateTimeFilter<"Lote"> | Date | string
    updatedAt?: DateTimeFilter<"Lote"> | Date | string
  }

  export type MensagemChatUpsertWithWhereUniqueWithoutEditalInput = {
    where: MensagemChatWhereUniqueInput
    update: XOR<MensagemChatUpdateWithoutEditalInput, MensagemChatUncheckedUpdateWithoutEditalInput>
    create: XOR<MensagemChatCreateWithoutEditalInput, MensagemChatUncheckedCreateWithoutEditalInput>
  }

  export type MensagemChatUpdateWithWhereUniqueWithoutEditalInput = {
    where: MensagemChatWhereUniqueInput
    data: XOR<MensagemChatUpdateWithoutEditalInput, MensagemChatUncheckedUpdateWithoutEditalInput>
  }

  export type MensagemChatUpdateManyWithWhereWithoutEditalInput = {
    where: MensagemChatScalarWhereInput
    data: XOR<MensagemChatUpdateManyMutationInput, MensagemChatUncheckedUpdateManyWithoutEditalInput>
  }

  export type EditalCreateWithoutDisputasInput = {
    id?: string
    numero: string
    objeto: string
    modalidade: string
    status: string
    dataAbertura: Date | string
    arquivoPdf?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documentosObrigatorios?: DocumentoObrigatorioCreateNestedManyWithoutEditalInput
    lotes?: LoteCreateNestedManyWithoutEditalInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutEditalInput
  }

  export type EditalUncheckedCreateWithoutDisputasInput = {
    id?: string
    numero: string
    objeto: string
    modalidade: string
    status: string
    dataAbertura: Date | string
    arquivoPdf?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documentosObrigatorios?: DocumentoObrigatorioUncheckedCreateNestedManyWithoutEditalInput
    lotes?: LoteUncheckedCreateNestedManyWithoutEditalInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutEditalInput
  }

  export type EditalCreateOrConnectWithoutDisputasInput = {
    where: EditalWhereUniqueInput
    create: XOR<EditalCreateWithoutDisputasInput, EditalUncheckedCreateWithoutDisputasInput>
  }

  export type PropostaCreateWithoutDisputaInput = {
    id?: string
    valorCentavos: number
    dataEnvio: Date | string
    arquivo?: string | null
    status?: $Enums.StatusProposta
    observacao?: string | null
    versao?: number
    createdBy: string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    licitante: LicitanteCreateNestedOneWithoutPropostasInput
    item: ItemCreateNestedOneWithoutPropostasInput
  }

  export type PropostaUncheckedCreateWithoutDisputaInput = {
    id?: string
    licitanteId: string
    itemId: string
    valorCentavos: number
    dataEnvio: Date | string
    arquivo?: string | null
    status?: $Enums.StatusProposta
    observacao?: string | null
    versao?: number
    createdBy: string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaCreateOrConnectWithoutDisputaInput = {
    where: PropostaWhereUniqueInput
    create: XOR<PropostaCreateWithoutDisputaInput, PropostaUncheckedCreateWithoutDisputaInput>
  }

  export type PropostaCreateManyDisputaInputEnvelope = {
    data: PropostaCreateManyDisputaInput | PropostaCreateManyDisputaInput[]
    skipDuplicates?: boolean
  }

  export type LanceCreateWithoutDisputaInput = {
    id?: string
    valorCentavos: number
    horario: Date | string
    ip?: string | null
    userAgent?: string | null
    licitante: LicitanteCreateNestedOneWithoutLancesInput
  }

  export type LanceUncheckedCreateWithoutDisputaInput = {
    id?: string
    licitanteId: string
    valorCentavos: number
    horario: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type LanceCreateOrConnectWithoutDisputaInput = {
    where: LanceWhereUniqueInput
    create: XOR<LanceCreateWithoutDisputaInput, LanceUncheckedCreateWithoutDisputaInput>
  }

  export type LanceCreateManyDisputaInputEnvelope = {
    data: LanceCreateManyDisputaInput | LanceCreateManyDisputaInput[]
    skipDuplicates?: boolean
  }

  export type DocumentoLicitanteCreateWithoutDisputaInput = {
    id?: string
    tipoDocumento: $Enums.TipoDocumento
    nomeOriginal: string
    descricao?: string | null
    arquivoPath: string
    dataEnvio: Date | string
    versao?: number
    valido?: boolean
    hashDocumento?: string | null
    assinaturaBase64?: string | null
    assinadoPor?: string | null
    licitante: LicitanteCreateNestedOneWithoutDocumentosInput
  }

  export type DocumentoLicitanteUncheckedCreateWithoutDisputaInput = {
    id?: string
    licitanteId: string
    tipoDocumento: $Enums.TipoDocumento
    nomeOriginal: string
    descricao?: string | null
    arquivoPath: string
    dataEnvio: Date | string
    versao?: number
    valido?: boolean
    hashDocumento?: string | null
    assinaturaBase64?: string | null
    assinadoPor?: string | null
  }

  export type DocumentoLicitanteCreateOrConnectWithoutDisputaInput = {
    where: DocumentoLicitanteWhereUniqueInput
    create: XOR<DocumentoLicitanteCreateWithoutDisputaInput, DocumentoLicitanteUncheckedCreateWithoutDisputaInput>
  }

  export type DocumentoLicitanteCreateManyDisputaInputEnvelope = {
    data: DocumentoLicitanteCreateManyDisputaInput | DocumentoLicitanteCreateManyDisputaInput[]
    skipDuplicates?: boolean
  }

  export type MensagemChatCreateWithoutDisputaInput = {
    id?: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    edital: EditalCreateNestedOneWithoutMensagensChatInput
    autor: UsuarioCreateNestedOneWithoutMensagemChatInput
    Licitante?: LicitanteCreateNestedOneWithoutMensagensChatInput
  }

  export type MensagemChatUncheckedCreateWithoutDisputaInput = {
    id?: string
    editalId: string
    autorId: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    licitanteId?: string | null
  }

  export type MensagemChatCreateOrConnectWithoutDisputaInput = {
    where: MensagemChatWhereUniqueInput
    create: XOR<MensagemChatCreateWithoutDisputaInput, MensagemChatUncheckedCreateWithoutDisputaInput>
  }

  export type MensagemChatCreateManyDisputaInputEnvelope = {
    data: MensagemChatCreateManyDisputaInput | MensagemChatCreateManyDisputaInput[]
    skipDuplicates?: boolean
  }

  export type LogAtividadeCreateWithoutDisputaInput = {
    id?: string
    acao: string
    detalhes?: string | null
    data?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutLogAtividadeInput
  }

  export type LogAtividadeUncheckedCreateWithoutDisputaInput = {
    id?: string
    usuarioId?: string | null
    acao: string
    detalhes?: string | null
    data?: Date | string
  }

  export type LogAtividadeCreateOrConnectWithoutDisputaInput = {
    where: LogAtividadeWhereUniqueInput
    create: XOR<LogAtividadeCreateWithoutDisputaInput, LogAtividadeUncheckedCreateWithoutDisputaInput>
  }

  export type LogAtividadeCreateManyDisputaInputEnvelope = {
    data: LogAtividadeCreateManyDisputaInput | LogAtividadeCreateManyDisputaInput[]
    skipDuplicates?: boolean
  }

  export type SessaoCreateWithoutDisputaInput = {
    id?: string
    inicio: Date | string
    fim?: Date | string | null
    ip: string
    hash: string
    licitante: LicitanteCreateNestedOneWithoutSessoesInput
  }

  export type SessaoUncheckedCreateWithoutDisputaInput = {
    id?: string
    licitanteId: string
    inicio: Date | string
    fim?: Date | string | null
    ip: string
    hash: string
  }

  export type SessaoCreateOrConnectWithoutDisputaInput = {
    where: SessaoWhereUniqueInput
    create: XOR<SessaoCreateWithoutDisputaInput, SessaoUncheckedCreateWithoutDisputaInput>
  }

  export type SessaoCreateManyDisputaInputEnvelope = {
    data: SessaoCreateManyDisputaInput | SessaoCreateManyDisputaInput[]
    skipDuplicates?: boolean
  }

  export type EditalUpsertWithoutDisputasInput = {
    update: XOR<EditalUpdateWithoutDisputasInput, EditalUncheckedUpdateWithoutDisputasInput>
    create: XOR<EditalCreateWithoutDisputasInput, EditalUncheckedCreateWithoutDisputasInput>
    where?: EditalWhereInput
  }

  export type EditalUpdateToOneWithWhereWithoutDisputasInput = {
    where?: EditalWhereInput
    data: XOR<EditalUpdateWithoutDisputasInput, EditalUncheckedUpdateWithoutDisputasInput>
  }

  export type EditalUpdateWithoutDisputasInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivoPdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentosObrigatorios?: DocumentoObrigatorioUpdateManyWithoutEditalNestedInput
    lotes?: LoteUpdateManyWithoutEditalNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutEditalNestedInput
  }

  export type EditalUncheckedUpdateWithoutDisputasInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivoPdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentosObrigatorios?: DocumentoObrigatorioUncheckedUpdateManyWithoutEditalNestedInput
    lotes?: LoteUncheckedUpdateManyWithoutEditalNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutEditalNestedInput
  }

  export type PropostaUpsertWithWhereUniqueWithoutDisputaInput = {
    where: PropostaWhereUniqueInput
    update: XOR<PropostaUpdateWithoutDisputaInput, PropostaUncheckedUpdateWithoutDisputaInput>
    create: XOR<PropostaCreateWithoutDisputaInput, PropostaUncheckedCreateWithoutDisputaInput>
  }

  export type PropostaUpdateWithWhereUniqueWithoutDisputaInput = {
    where: PropostaWhereUniqueInput
    data: XOR<PropostaUpdateWithoutDisputaInput, PropostaUncheckedUpdateWithoutDisputaInput>
  }

  export type PropostaUpdateManyWithWhereWithoutDisputaInput = {
    where: PropostaScalarWhereInput
    data: XOR<PropostaUpdateManyMutationInput, PropostaUncheckedUpdateManyWithoutDisputaInput>
  }

  export type PropostaScalarWhereInput = {
    AND?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
    OR?: PropostaScalarWhereInput[]
    NOT?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
    id?: StringFilter<"Proposta"> | string
    disputaId?: StringFilter<"Proposta"> | string
    licitanteId?: StringFilter<"Proposta"> | string
    itemId?: StringFilter<"Proposta"> | string
    valorCentavos?: IntFilter<"Proposta"> | number
    dataEnvio?: DateTimeFilter<"Proposta"> | Date | string
    arquivo?: StringNullableFilter<"Proposta"> | string | null
    status?: EnumStatusPropostaFilter<"Proposta"> | $Enums.StatusProposta
    observacao?: StringNullableFilter<"Proposta"> | string | null
    versao?: IntFilter<"Proposta"> | number
    createdBy?: StringFilter<"Proposta"> | string
    updatedBy?: StringNullableFilter<"Proposta"> | string | null
    deletedAt?: DateTimeNullableFilter<"Proposta"> | Date | string | null
    createdAt?: DateTimeFilter<"Proposta"> | Date | string
    updatedAt?: DateTimeFilter<"Proposta"> | Date | string
  }

  export type LanceUpsertWithWhereUniqueWithoutDisputaInput = {
    where: LanceWhereUniqueInput
    update: XOR<LanceUpdateWithoutDisputaInput, LanceUncheckedUpdateWithoutDisputaInput>
    create: XOR<LanceCreateWithoutDisputaInput, LanceUncheckedCreateWithoutDisputaInput>
  }

  export type LanceUpdateWithWhereUniqueWithoutDisputaInput = {
    where: LanceWhereUniqueInput
    data: XOR<LanceUpdateWithoutDisputaInput, LanceUncheckedUpdateWithoutDisputaInput>
  }

  export type LanceUpdateManyWithWhereWithoutDisputaInput = {
    where: LanceScalarWhereInput
    data: XOR<LanceUpdateManyMutationInput, LanceUncheckedUpdateManyWithoutDisputaInput>
  }

  export type LanceScalarWhereInput = {
    AND?: LanceScalarWhereInput | LanceScalarWhereInput[]
    OR?: LanceScalarWhereInput[]
    NOT?: LanceScalarWhereInput | LanceScalarWhereInput[]
    id?: StringFilter<"Lance"> | string
    disputaId?: StringFilter<"Lance"> | string
    licitanteId?: StringFilter<"Lance"> | string
    valorCentavos?: IntFilter<"Lance"> | number
    horario?: DateTimeFilter<"Lance"> | Date | string
    ip?: StringNullableFilter<"Lance"> | string | null
    userAgent?: StringNullableFilter<"Lance"> | string | null
  }

  export type DocumentoLicitanteUpsertWithWhereUniqueWithoutDisputaInput = {
    where: DocumentoLicitanteWhereUniqueInput
    update: XOR<DocumentoLicitanteUpdateWithoutDisputaInput, DocumentoLicitanteUncheckedUpdateWithoutDisputaInput>
    create: XOR<DocumentoLicitanteCreateWithoutDisputaInput, DocumentoLicitanteUncheckedCreateWithoutDisputaInput>
  }

  export type DocumentoLicitanteUpdateWithWhereUniqueWithoutDisputaInput = {
    where: DocumentoLicitanteWhereUniqueInput
    data: XOR<DocumentoLicitanteUpdateWithoutDisputaInput, DocumentoLicitanteUncheckedUpdateWithoutDisputaInput>
  }

  export type DocumentoLicitanteUpdateManyWithWhereWithoutDisputaInput = {
    where: DocumentoLicitanteScalarWhereInput
    data: XOR<DocumentoLicitanteUpdateManyMutationInput, DocumentoLicitanteUncheckedUpdateManyWithoutDisputaInput>
  }

  export type DocumentoLicitanteScalarWhereInput = {
    AND?: DocumentoLicitanteScalarWhereInput | DocumentoLicitanteScalarWhereInput[]
    OR?: DocumentoLicitanteScalarWhereInput[]
    NOT?: DocumentoLicitanteScalarWhereInput | DocumentoLicitanteScalarWhereInput[]
    id?: StringFilter<"DocumentoLicitante"> | string
    disputaId?: StringFilter<"DocumentoLicitante"> | string
    licitanteId?: StringFilter<"DocumentoLicitante"> | string
    tipoDocumento?: EnumTipoDocumentoFilter<"DocumentoLicitante"> | $Enums.TipoDocumento
    nomeOriginal?: StringFilter<"DocumentoLicitante"> | string
    descricao?: StringNullableFilter<"DocumentoLicitante"> | string | null
    arquivoPath?: StringFilter<"DocumentoLicitante"> | string
    dataEnvio?: DateTimeFilter<"DocumentoLicitante"> | Date | string
    versao?: IntFilter<"DocumentoLicitante"> | number
    valido?: BoolFilter<"DocumentoLicitante"> | boolean
    hashDocumento?: StringNullableFilter<"DocumentoLicitante"> | string | null
    assinaturaBase64?: StringNullableFilter<"DocumentoLicitante"> | string | null
    assinadoPor?: StringNullableFilter<"DocumentoLicitante"> | string | null
  }

  export type MensagemChatUpsertWithWhereUniqueWithoutDisputaInput = {
    where: MensagemChatWhereUniqueInput
    update: XOR<MensagemChatUpdateWithoutDisputaInput, MensagemChatUncheckedUpdateWithoutDisputaInput>
    create: XOR<MensagemChatCreateWithoutDisputaInput, MensagemChatUncheckedCreateWithoutDisputaInput>
  }

  export type MensagemChatUpdateWithWhereUniqueWithoutDisputaInput = {
    where: MensagemChatWhereUniqueInput
    data: XOR<MensagemChatUpdateWithoutDisputaInput, MensagemChatUncheckedUpdateWithoutDisputaInput>
  }

  export type MensagemChatUpdateManyWithWhereWithoutDisputaInput = {
    where: MensagemChatScalarWhereInput
    data: XOR<MensagemChatUpdateManyMutationInput, MensagemChatUncheckedUpdateManyWithoutDisputaInput>
  }

  export type LogAtividadeUpsertWithWhereUniqueWithoutDisputaInput = {
    where: LogAtividadeWhereUniqueInput
    update: XOR<LogAtividadeUpdateWithoutDisputaInput, LogAtividadeUncheckedUpdateWithoutDisputaInput>
    create: XOR<LogAtividadeCreateWithoutDisputaInput, LogAtividadeUncheckedCreateWithoutDisputaInput>
  }

  export type LogAtividadeUpdateWithWhereUniqueWithoutDisputaInput = {
    where: LogAtividadeWhereUniqueInput
    data: XOR<LogAtividadeUpdateWithoutDisputaInput, LogAtividadeUncheckedUpdateWithoutDisputaInput>
  }

  export type LogAtividadeUpdateManyWithWhereWithoutDisputaInput = {
    where: LogAtividadeScalarWhereInput
    data: XOR<LogAtividadeUpdateManyMutationInput, LogAtividadeUncheckedUpdateManyWithoutDisputaInput>
  }

  export type SessaoUpsertWithWhereUniqueWithoutDisputaInput = {
    where: SessaoWhereUniqueInput
    update: XOR<SessaoUpdateWithoutDisputaInput, SessaoUncheckedUpdateWithoutDisputaInput>
    create: XOR<SessaoCreateWithoutDisputaInput, SessaoUncheckedCreateWithoutDisputaInput>
  }

  export type SessaoUpdateWithWhereUniqueWithoutDisputaInput = {
    where: SessaoWhereUniqueInput
    data: XOR<SessaoUpdateWithoutDisputaInput, SessaoUncheckedUpdateWithoutDisputaInput>
  }

  export type SessaoUpdateManyWithWhereWithoutDisputaInput = {
    where: SessaoScalarWhereInput
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyWithoutDisputaInput>
  }

  export type SessaoScalarWhereInput = {
    AND?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
    OR?: SessaoScalarWhereInput[]
    NOT?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
    id?: StringFilter<"Sessao"> | string
    licitanteId?: StringFilter<"Sessao"> | string
    disputaId?: StringFilter<"Sessao"> | string
    inicio?: DateTimeFilter<"Sessao"> | Date | string
    fim?: DateTimeNullableFilter<"Sessao"> | Date | string | null
    ip?: StringFilter<"Sessao"> | string
    hash?: StringFilter<"Sessao"> | string
  }

  export type UsuarioCreateWithoutLicitanteInput = {
    id?: string
    nome: string
    email: string
    senha: string
    perfil: $Enums.PerfilUsuario
    LogAtividade?: LogAtividadeCreateNestedManyWithoutUsuarioInput
    MensagemChat?: MensagemChatCreateNestedManyWithoutAutorInput
  }

  export type UsuarioUncheckedCreateWithoutLicitanteInput = {
    id?: string
    nome: string
    email: string
    senha: string
    perfil: $Enums.PerfilUsuario
    LogAtividade?: LogAtividadeUncheckedCreateNestedManyWithoutUsuarioInput
    MensagemChat?: MensagemChatUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuarioCreateOrConnectWithoutLicitanteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLicitanteInput, UsuarioUncheckedCreateWithoutLicitanteInput>
  }

  export type PropostaCreateWithoutLicitanteInput = {
    id?: string
    valorCentavos: number
    dataEnvio: Date | string
    arquivo?: string | null
    status?: $Enums.StatusProposta
    observacao?: string | null
    versao?: number
    createdBy: string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disputa: DisputaCreateNestedOneWithoutPropostasInput
    item: ItemCreateNestedOneWithoutPropostasInput
  }

  export type PropostaUncheckedCreateWithoutLicitanteInput = {
    id?: string
    disputaId: string
    itemId: string
    valorCentavos: number
    dataEnvio: Date | string
    arquivo?: string | null
    status?: $Enums.StatusProposta
    observacao?: string | null
    versao?: number
    createdBy: string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaCreateOrConnectWithoutLicitanteInput = {
    where: PropostaWhereUniqueInput
    create: XOR<PropostaCreateWithoutLicitanteInput, PropostaUncheckedCreateWithoutLicitanteInput>
  }

  export type PropostaCreateManyLicitanteInputEnvelope = {
    data: PropostaCreateManyLicitanteInput | PropostaCreateManyLicitanteInput[]
    skipDuplicates?: boolean
  }

  export type LanceCreateWithoutLicitanteInput = {
    id?: string
    valorCentavos: number
    horario: Date | string
    ip?: string | null
    userAgent?: string | null
    disputa: DisputaCreateNestedOneWithoutLancesInput
  }

  export type LanceUncheckedCreateWithoutLicitanteInput = {
    id?: string
    disputaId: string
    valorCentavos: number
    horario: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type LanceCreateOrConnectWithoutLicitanteInput = {
    where: LanceWhereUniqueInput
    create: XOR<LanceCreateWithoutLicitanteInput, LanceUncheckedCreateWithoutLicitanteInput>
  }

  export type LanceCreateManyLicitanteInputEnvelope = {
    data: LanceCreateManyLicitanteInput | LanceCreateManyLicitanteInput[]
    skipDuplicates?: boolean
  }

  export type DocumentoLicitanteCreateWithoutLicitanteInput = {
    id?: string
    tipoDocumento: $Enums.TipoDocumento
    nomeOriginal: string
    descricao?: string | null
    arquivoPath: string
    dataEnvio: Date | string
    versao?: number
    valido?: boolean
    hashDocumento?: string | null
    assinaturaBase64?: string | null
    assinadoPor?: string | null
    disputa: DisputaCreateNestedOneWithoutDocumentosInput
  }

  export type DocumentoLicitanteUncheckedCreateWithoutLicitanteInput = {
    id?: string
    disputaId: string
    tipoDocumento: $Enums.TipoDocumento
    nomeOriginal: string
    descricao?: string | null
    arquivoPath: string
    dataEnvio: Date | string
    versao?: number
    valido?: boolean
    hashDocumento?: string | null
    assinaturaBase64?: string | null
    assinadoPor?: string | null
  }

  export type DocumentoLicitanteCreateOrConnectWithoutLicitanteInput = {
    where: DocumentoLicitanteWhereUniqueInput
    create: XOR<DocumentoLicitanteCreateWithoutLicitanteInput, DocumentoLicitanteUncheckedCreateWithoutLicitanteInput>
  }

  export type DocumentoLicitanteCreateManyLicitanteInputEnvelope = {
    data: DocumentoLicitanteCreateManyLicitanteInput | DocumentoLicitanteCreateManyLicitanteInput[]
    skipDuplicates?: boolean
  }

  export type SessaoCreateWithoutLicitanteInput = {
    id?: string
    inicio: Date | string
    fim?: Date | string | null
    ip: string
    hash: string
    disputa: DisputaCreateNestedOneWithoutSessaoInput
  }

  export type SessaoUncheckedCreateWithoutLicitanteInput = {
    id?: string
    disputaId: string
    inicio: Date | string
    fim?: Date | string | null
    ip: string
    hash: string
  }

  export type SessaoCreateOrConnectWithoutLicitanteInput = {
    where: SessaoWhereUniqueInput
    create: XOR<SessaoCreateWithoutLicitanteInput, SessaoUncheckedCreateWithoutLicitanteInput>
  }

  export type SessaoCreateManyLicitanteInputEnvelope = {
    data: SessaoCreateManyLicitanteInput | SessaoCreateManyLicitanteInput[]
    skipDuplicates?: boolean
  }

  export type MensagemChatCreateWithoutLicitanteInput = {
    id?: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    edital: EditalCreateNestedOneWithoutMensagensChatInput
    autor: UsuarioCreateNestedOneWithoutMensagemChatInput
    Disputa?: DisputaCreateNestedOneWithoutMensagensChatInput
  }

  export type MensagemChatUncheckedCreateWithoutLicitanteInput = {
    id?: string
    editalId: string
    autorId: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disputaId?: string | null
  }

  export type MensagemChatCreateOrConnectWithoutLicitanteInput = {
    where: MensagemChatWhereUniqueInput
    create: XOR<MensagemChatCreateWithoutLicitanteInput, MensagemChatUncheckedCreateWithoutLicitanteInput>
  }

  export type MensagemChatCreateManyLicitanteInputEnvelope = {
    data: MensagemChatCreateManyLicitanteInput | MensagemChatCreateManyLicitanteInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutLicitanteInput = {
    update: XOR<UsuarioUpdateWithoutLicitanteInput, UsuarioUncheckedUpdateWithoutLicitanteInput>
    create: XOR<UsuarioCreateWithoutLicitanteInput, UsuarioUncheckedCreateWithoutLicitanteInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLicitanteInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLicitanteInput, UsuarioUncheckedUpdateWithoutLicitanteInput>
  }

  export type UsuarioUpdateWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    LogAtividade?: LogAtividadeUpdateManyWithoutUsuarioNestedInput
    MensagemChat?: MensagemChatUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    LogAtividade?: LogAtividadeUncheckedUpdateManyWithoutUsuarioNestedInput
    MensagemChat?: MensagemChatUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type PropostaUpsertWithWhereUniqueWithoutLicitanteInput = {
    where: PropostaWhereUniqueInput
    update: XOR<PropostaUpdateWithoutLicitanteInput, PropostaUncheckedUpdateWithoutLicitanteInput>
    create: XOR<PropostaCreateWithoutLicitanteInput, PropostaUncheckedCreateWithoutLicitanteInput>
  }

  export type PropostaUpdateWithWhereUniqueWithoutLicitanteInput = {
    where: PropostaWhereUniqueInput
    data: XOR<PropostaUpdateWithoutLicitanteInput, PropostaUncheckedUpdateWithoutLicitanteInput>
  }

  export type PropostaUpdateManyWithWhereWithoutLicitanteInput = {
    where: PropostaScalarWhereInput
    data: XOR<PropostaUpdateManyMutationInput, PropostaUncheckedUpdateManyWithoutLicitanteInput>
  }

  export type LanceUpsertWithWhereUniqueWithoutLicitanteInput = {
    where: LanceWhereUniqueInput
    update: XOR<LanceUpdateWithoutLicitanteInput, LanceUncheckedUpdateWithoutLicitanteInput>
    create: XOR<LanceCreateWithoutLicitanteInput, LanceUncheckedCreateWithoutLicitanteInput>
  }

  export type LanceUpdateWithWhereUniqueWithoutLicitanteInput = {
    where: LanceWhereUniqueInput
    data: XOR<LanceUpdateWithoutLicitanteInput, LanceUncheckedUpdateWithoutLicitanteInput>
  }

  export type LanceUpdateManyWithWhereWithoutLicitanteInput = {
    where: LanceScalarWhereInput
    data: XOR<LanceUpdateManyMutationInput, LanceUncheckedUpdateManyWithoutLicitanteInput>
  }

  export type DocumentoLicitanteUpsertWithWhereUniqueWithoutLicitanteInput = {
    where: DocumentoLicitanteWhereUniqueInput
    update: XOR<DocumentoLicitanteUpdateWithoutLicitanteInput, DocumentoLicitanteUncheckedUpdateWithoutLicitanteInput>
    create: XOR<DocumentoLicitanteCreateWithoutLicitanteInput, DocumentoLicitanteUncheckedCreateWithoutLicitanteInput>
  }

  export type DocumentoLicitanteUpdateWithWhereUniqueWithoutLicitanteInput = {
    where: DocumentoLicitanteWhereUniqueInput
    data: XOR<DocumentoLicitanteUpdateWithoutLicitanteInput, DocumentoLicitanteUncheckedUpdateWithoutLicitanteInput>
  }

  export type DocumentoLicitanteUpdateManyWithWhereWithoutLicitanteInput = {
    where: DocumentoLicitanteScalarWhereInput
    data: XOR<DocumentoLicitanteUpdateManyMutationInput, DocumentoLicitanteUncheckedUpdateManyWithoutLicitanteInput>
  }

  export type SessaoUpsertWithWhereUniqueWithoutLicitanteInput = {
    where: SessaoWhereUniqueInput
    update: XOR<SessaoUpdateWithoutLicitanteInput, SessaoUncheckedUpdateWithoutLicitanteInput>
    create: XOR<SessaoCreateWithoutLicitanteInput, SessaoUncheckedCreateWithoutLicitanteInput>
  }

  export type SessaoUpdateWithWhereUniqueWithoutLicitanteInput = {
    where: SessaoWhereUniqueInput
    data: XOR<SessaoUpdateWithoutLicitanteInput, SessaoUncheckedUpdateWithoutLicitanteInput>
  }

  export type SessaoUpdateManyWithWhereWithoutLicitanteInput = {
    where: SessaoScalarWhereInput
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyWithoutLicitanteInput>
  }

  export type MensagemChatUpsertWithWhereUniqueWithoutLicitanteInput = {
    where: MensagemChatWhereUniqueInput
    update: XOR<MensagemChatUpdateWithoutLicitanteInput, MensagemChatUncheckedUpdateWithoutLicitanteInput>
    create: XOR<MensagemChatCreateWithoutLicitanteInput, MensagemChatUncheckedCreateWithoutLicitanteInput>
  }

  export type MensagemChatUpdateWithWhereUniqueWithoutLicitanteInput = {
    where: MensagemChatWhereUniqueInput
    data: XOR<MensagemChatUpdateWithoutLicitanteInput, MensagemChatUncheckedUpdateWithoutLicitanteInput>
  }

  export type MensagemChatUpdateManyWithWhereWithoutLicitanteInput = {
    where: MensagemChatScalarWhereInput
    data: XOR<MensagemChatUpdateManyMutationInput, MensagemChatUncheckedUpdateManyWithoutLicitanteInput>
  }

  export type DisputaCreateWithoutPropostasInput = {
    id?: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    edital: EditalCreateNestedOneWithoutDisputasInput
    lances?: LanceCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoCreateNestedManyWithoutDisputaInput
  }

  export type DisputaUncheckedCreateWithoutPropostasInput = {
    id?: string
    editalId: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    lances?: LanceUncheckedCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteUncheckedCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeUncheckedCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoUncheckedCreateNestedManyWithoutDisputaInput
  }

  export type DisputaCreateOrConnectWithoutPropostasInput = {
    where: DisputaWhereUniqueInput
    create: XOR<DisputaCreateWithoutPropostasInput, DisputaUncheckedCreateWithoutPropostasInput>
  }

  export type LicitanteCreateWithoutPropostasInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    usuario?: UsuarioCreateNestedOneWithoutLicitanteInput
    lances?: LanceCreateNestedManyWithoutLicitanteInput
    documentos?: DocumentoLicitanteCreateNestedManyWithoutLicitanteInput
    sessoes?: SessaoCreateNestedManyWithoutLicitanteInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteUncheckedCreateWithoutPropostasInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    usuario?: UsuarioUncheckedCreateNestedOneWithoutLicitanteInput
    lances?: LanceUncheckedCreateNestedManyWithoutLicitanteInput
    documentos?: DocumentoLicitanteUncheckedCreateNestedManyWithoutLicitanteInput
    sessoes?: SessaoUncheckedCreateNestedManyWithoutLicitanteInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteCreateOrConnectWithoutPropostasInput = {
    where: LicitanteWhereUniqueInput
    create: XOR<LicitanteCreateWithoutPropostasInput, LicitanteUncheckedCreateWithoutPropostasInput>
  }

  export type ItemCreateWithoutPropostasInput = {
    id?: string
    numero: string
    descricao: string
    quantidade: number
    unidade: string
    valorEstimado?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lote: LoteCreateNestedOneWithoutItensInput
  }

  export type ItemUncheckedCreateWithoutPropostasInput = {
    id?: string
    numero: string
    descricao: string
    quantidade: number
    unidade: string
    valorEstimado?: number | null
    loteId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutPropostasInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutPropostasInput, ItemUncheckedCreateWithoutPropostasInput>
  }

  export type DisputaUpsertWithoutPropostasInput = {
    update: XOR<DisputaUpdateWithoutPropostasInput, DisputaUncheckedUpdateWithoutPropostasInput>
    create: XOR<DisputaCreateWithoutPropostasInput, DisputaUncheckedCreateWithoutPropostasInput>
    where?: DisputaWhereInput
  }

  export type DisputaUpdateToOneWithWhereWithoutPropostasInput = {
    where?: DisputaWhereInput
    data: XOR<DisputaUpdateWithoutPropostasInput, DisputaUncheckedUpdateWithoutPropostasInput>
  }

  export type DisputaUpdateWithoutPropostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    edital?: EditalUpdateOneRequiredWithoutDisputasNestedInput
    lances?: LanceUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUpdateManyWithoutDisputaNestedInput
  }

  export type DisputaUncheckedUpdateWithoutPropostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    lances?: LanceUncheckedUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUncheckedUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUncheckedUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUncheckedUpdateManyWithoutDisputaNestedInput
  }

  export type LicitanteUpsertWithoutPropostasInput = {
    update: XOR<LicitanteUpdateWithoutPropostasInput, LicitanteUncheckedUpdateWithoutPropostasInput>
    create: XOR<LicitanteCreateWithoutPropostasInput, LicitanteUncheckedCreateWithoutPropostasInput>
    where?: LicitanteWhereInput
  }

  export type LicitanteUpdateToOneWithWhereWithoutPropostasInput = {
    where?: LicitanteWhereInput
    data: XOR<LicitanteUpdateWithoutPropostasInput, LicitanteUncheckedUpdateWithoutPropostasInput>
  }

  export type LicitanteUpdateWithoutPropostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    usuario?: UsuarioUpdateOneWithoutLicitanteNestedInput
    lances?: LanceUpdateManyWithoutLicitanteNestedInput
    documentos?: DocumentoLicitanteUpdateManyWithoutLicitanteNestedInput
    sessoes?: SessaoUpdateManyWithoutLicitanteNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutLicitanteNestedInput
  }

  export type LicitanteUncheckedUpdateWithoutPropostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    usuario?: UsuarioUncheckedUpdateOneWithoutLicitanteNestedInput
    lances?: LanceUncheckedUpdateManyWithoutLicitanteNestedInput
    documentos?: DocumentoLicitanteUncheckedUpdateManyWithoutLicitanteNestedInput
    sessoes?: SessaoUncheckedUpdateManyWithoutLicitanteNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutLicitanteNestedInput
  }

  export type ItemUpsertWithoutPropostasInput = {
    update: XOR<ItemUpdateWithoutPropostasInput, ItemUncheckedUpdateWithoutPropostasInput>
    create: XOR<ItemCreateWithoutPropostasInput, ItemUncheckedCreateWithoutPropostasInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutPropostasInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutPropostasInput, ItemUncheckedUpdateWithoutPropostasInput>
  }

  export type ItemUpdateWithoutPropostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    valorEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lote?: LoteUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemUncheckedUpdateWithoutPropostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    valorEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    loteId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputaCreateWithoutLancesInput = {
    id?: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    edital: EditalCreateNestedOneWithoutDisputasInput
    propostas?: PropostaCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoCreateNestedManyWithoutDisputaInput
  }

  export type DisputaUncheckedCreateWithoutLancesInput = {
    id?: string
    editalId: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    propostas?: PropostaUncheckedCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteUncheckedCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeUncheckedCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoUncheckedCreateNestedManyWithoutDisputaInput
  }

  export type DisputaCreateOrConnectWithoutLancesInput = {
    where: DisputaWhereUniqueInput
    create: XOR<DisputaCreateWithoutLancesInput, DisputaUncheckedCreateWithoutLancesInput>
  }

  export type LicitanteCreateWithoutLancesInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    usuario?: UsuarioCreateNestedOneWithoutLicitanteInput
    propostas?: PropostaCreateNestedManyWithoutLicitanteInput
    documentos?: DocumentoLicitanteCreateNestedManyWithoutLicitanteInput
    sessoes?: SessaoCreateNestedManyWithoutLicitanteInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteUncheckedCreateWithoutLancesInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    usuario?: UsuarioUncheckedCreateNestedOneWithoutLicitanteInput
    propostas?: PropostaUncheckedCreateNestedManyWithoutLicitanteInput
    documentos?: DocumentoLicitanteUncheckedCreateNestedManyWithoutLicitanteInput
    sessoes?: SessaoUncheckedCreateNestedManyWithoutLicitanteInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteCreateOrConnectWithoutLancesInput = {
    where: LicitanteWhereUniqueInput
    create: XOR<LicitanteCreateWithoutLancesInput, LicitanteUncheckedCreateWithoutLancesInput>
  }

  export type DisputaUpsertWithoutLancesInput = {
    update: XOR<DisputaUpdateWithoutLancesInput, DisputaUncheckedUpdateWithoutLancesInput>
    create: XOR<DisputaCreateWithoutLancesInput, DisputaUncheckedCreateWithoutLancesInput>
    where?: DisputaWhereInput
  }

  export type DisputaUpdateToOneWithWhereWithoutLancesInput = {
    where?: DisputaWhereInput
    data: XOR<DisputaUpdateWithoutLancesInput, DisputaUncheckedUpdateWithoutLancesInput>
  }

  export type DisputaUpdateWithoutLancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    edital?: EditalUpdateOneRequiredWithoutDisputasNestedInput
    propostas?: PropostaUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUpdateManyWithoutDisputaNestedInput
  }

  export type DisputaUncheckedUpdateWithoutLancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    propostas?: PropostaUncheckedUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUncheckedUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUncheckedUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUncheckedUpdateManyWithoutDisputaNestedInput
  }

  export type LicitanteUpsertWithoutLancesInput = {
    update: XOR<LicitanteUpdateWithoutLancesInput, LicitanteUncheckedUpdateWithoutLancesInput>
    create: XOR<LicitanteCreateWithoutLancesInput, LicitanteUncheckedCreateWithoutLancesInput>
    where?: LicitanteWhereInput
  }

  export type LicitanteUpdateToOneWithWhereWithoutLancesInput = {
    where?: LicitanteWhereInput
    data: XOR<LicitanteUpdateWithoutLancesInput, LicitanteUncheckedUpdateWithoutLancesInput>
  }

  export type LicitanteUpdateWithoutLancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    usuario?: UsuarioUpdateOneWithoutLicitanteNestedInput
    propostas?: PropostaUpdateManyWithoutLicitanteNestedInput
    documentos?: DocumentoLicitanteUpdateManyWithoutLicitanteNestedInput
    sessoes?: SessaoUpdateManyWithoutLicitanteNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutLicitanteNestedInput
  }

  export type LicitanteUncheckedUpdateWithoutLancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    usuario?: UsuarioUncheckedUpdateOneWithoutLicitanteNestedInput
    propostas?: PropostaUncheckedUpdateManyWithoutLicitanteNestedInput
    documentos?: DocumentoLicitanteUncheckedUpdateManyWithoutLicitanteNestedInput
    sessoes?: SessaoUncheckedUpdateManyWithoutLicitanteNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutLicitanteNestedInput
  }

  export type DisputaCreateWithoutDocumentosInput = {
    id?: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    edital: EditalCreateNestedOneWithoutDisputasInput
    propostas?: PropostaCreateNestedManyWithoutDisputaInput
    lances?: LanceCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoCreateNestedManyWithoutDisputaInput
  }

  export type DisputaUncheckedCreateWithoutDocumentosInput = {
    id?: string
    editalId: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    propostas?: PropostaUncheckedCreateNestedManyWithoutDisputaInput
    lances?: LanceUncheckedCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeUncheckedCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoUncheckedCreateNestedManyWithoutDisputaInput
  }

  export type DisputaCreateOrConnectWithoutDocumentosInput = {
    where: DisputaWhereUniqueInput
    create: XOR<DisputaCreateWithoutDocumentosInput, DisputaUncheckedCreateWithoutDocumentosInput>
  }

  export type LicitanteCreateWithoutDocumentosInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    usuario?: UsuarioCreateNestedOneWithoutLicitanteInput
    propostas?: PropostaCreateNestedManyWithoutLicitanteInput
    lances?: LanceCreateNestedManyWithoutLicitanteInput
    sessoes?: SessaoCreateNestedManyWithoutLicitanteInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteUncheckedCreateWithoutDocumentosInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    usuario?: UsuarioUncheckedCreateNestedOneWithoutLicitanteInput
    propostas?: PropostaUncheckedCreateNestedManyWithoutLicitanteInput
    lances?: LanceUncheckedCreateNestedManyWithoutLicitanteInput
    sessoes?: SessaoUncheckedCreateNestedManyWithoutLicitanteInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteCreateOrConnectWithoutDocumentosInput = {
    where: LicitanteWhereUniqueInput
    create: XOR<LicitanteCreateWithoutDocumentosInput, LicitanteUncheckedCreateWithoutDocumentosInput>
  }

  export type DisputaUpsertWithoutDocumentosInput = {
    update: XOR<DisputaUpdateWithoutDocumentosInput, DisputaUncheckedUpdateWithoutDocumentosInput>
    create: XOR<DisputaCreateWithoutDocumentosInput, DisputaUncheckedCreateWithoutDocumentosInput>
    where?: DisputaWhereInput
  }

  export type DisputaUpdateToOneWithWhereWithoutDocumentosInput = {
    where?: DisputaWhereInput
    data: XOR<DisputaUpdateWithoutDocumentosInput, DisputaUncheckedUpdateWithoutDocumentosInput>
  }

  export type DisputaUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    edital?: EditalUpdateOneRequiredWithoutDisputasNestedInput
    propostas?: PropostaUpdateManyWithoutDisputaNestedInput
    lances?: LanceUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUpdateManyWithoutDisputaNestedInput
  }

  export type DisputaUncheckedUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    propostas?: PropostaUncheckedUpdateManyWithoutDisputaNestedInput
    lances?: LanceUncheckedUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUncheckedUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUncheckedUpdateManyWithoutDisputaNestedInput
  }

  export type LicitanteUpsertWithoutDocumentosInput = {
    update: XOR<LicitanteUpdateWithoutDocumentosInput, LicitanteUncheckedUpdateWithoutDocumentosInput>
    create: XOR<LicitanteCreateWithoutDocumentosInput, LicitanteUncheckedCreateWithoutDocumentosInput>
    where?: LicitanteWhereInput
  }

  export type LicitanteUpdateToOneWithWhereWithoutDocumentosInput = {
    where?: LicitanteWhereInput
    data: XOR<LicitanteUpdateWithoutDocumentosInput, LicitanteUncheckedUpdateWithoutDocumentosInput>
  }

  export type LicitanteUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    usuario?: UsuarioUpdateOneWithoutLicitanteNestedInput
    propostas?: PropostaUpdateManyWithoutLicitanteNestedInput
    lances?: LanceUpdateManyWithoutLicitanteNestedInput
    sessoes?: SessaoUpdateManyWithoutLicitanteNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutLicitanteNestedInput
  }

  export type LicitanteUncheckedUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    usuario?: UsuarioUncheckedUpdateOneWithoutLicitanteNestedInput
    propostas?: PropostaUncheckedUpdateManyWithoutLicitanteNestedInput
    lances?: LanceUncheckedUpdateManyWithoutLicitanteNestedInput
    sessoes?: SessaoUncheckedUpdateManyWithoutLicitanteNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutLicitanteNestedInput
  }

  export type EditalCreateWithoutDocumentosObrigatoriosInput = {
    id?: string
    numero: string
    objeto: string
    modalidade: string
    status: string
    dataAbertura: Date | string
    arquivoPdf?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disputas?: DisputaCreateNestedManyWithoutEditalInput
    lotes?: LoteCreateNestedManyWithoutEditalInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutEditalInput
  }

  export type EditalUncheckedCreateWithoutDocumentosObrigatoriosInput = {
    id?: string
    numero: string
    objeto: string
    modalidade: string
    status: string
    dataAbertura: Date | string
    arquivoPdf?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disputas?: DisputaUncheckedCreateNestedManyWithoutEditalInput
    lotes?: LoteUncheckedCreateNestedManyWithoutEditalInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutEditalInput
  }

  export type EditalCreateOrConnectWithoutDocumentosObrigatoriosInput = {
    where: EditalWhereUniqueInput
    create: XOR<EditalCreateWithoutDocumentosObrigatoriosInput, EditalUncheckedCreateWithoutDocumentosObrigatoriosInput>
  }

  export type EditalUpsertWithoutDocumentosObrigatoriosInput = {
    update: XOR<EditalUpdateWithoutDocumentosObrigatoriosInput, EditalUncheckedUpdateWithoutDocumentosObrigatoriosInput>
    create: XOR<EditalCreateWithoutDocumentosObrigatoriosInput, EditalUncheckedCreateWithoutDocumentosObrigatoriosInput>
    where?: EditalWhereInput
  }

  export type EditalUpdateToOneWithWhereWithoutDocumentosObrigatoriosInput = {
    where?: EditalWhereInput
    data: XOR<EditalUpdateWithoutDocumentosObrigatoriosInput, EditalUncheckedUpdateWithoutDocumentosObrigatoriosInput>
  }

  export type EditalUpdateWithoutDocumentosObrigatoriosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivoPdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputas?: DisputaUpdateManyWithoutEditalNestedInput
    lotes?: LoteUpdateManyWithoutEditalNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutEditalNestedInput
  }

  export type EditalUncheckedUpdateWithoutDocumentosObrigatoriosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivoPdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputas?: DisputaUncheckedUpdateManyWithoutEditalNestedInput
    lotes?: LoteUncheckedUpdateManyWithoutEditalNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutEditalNestedInput
  }

  export type EditalCreateWithoutMensagensChatInput = {
    id?: string
    numero: string
    objeto: string
    modalidade: string
    status: string
    dataAbertura: Date | string
    arquivoPdf?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disputas?: DisputaCreateNestedManyWithoutEditalInput
    documentosObrigatorios?: DocumentoObrigatorioCreateNestedManyWithoutEditalInput
    lotes?: LoteCreateNestedManyWithoutEditalInput
  }

  export type EditalUncheckedCreateWithoutMensagensChatInput = {
    id?: string
    numero: string
    objeto: string
    modalidade: string
    status: string
    dataAbertura: Date | string
    arquivoPdf?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disputas?: DisputaUncheckedCreateNestedManyWithoutEditalInput
    documentosObrigatorios?: DocumentoObrigatorioUncheckedCreateNestedManyWithoutEditalInput
    lotes?: LoteUncheckedCreateNestedManyWithoutEditalInput
  }

  export type EditalCreateOrConnectWithoutMensagensChatInput = {
    where: EditalWhereUniqueInput
    create: XOR<EditalCreateWithoutMensagensChatInput, EditalUncheckedCreateWithoutMensagensChatInput>
  }

  export type UsuarioCreateWithoutMensagemChatInput = {
    id?: string
    nome: string
    email: string
    senha: string
    perfil: $Enums.PerfilUsuario
    LogAtividade?: LogAtividadeCreateNestedManyWithoutUsuarioInput
    licitante?: LicitanteCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMensagemChatInput = {
    id?: string
    nome: string
    email: string
    senha: string
    perfil: $Enums.PerfilUsuario
    licitanteId?: string | null
    LogAtividade?: LogAtividadeUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMensagemChatInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMensagemChatInput, UsuarioUncheckedCreateWithoutMensagemChatInput>
  }

  export type DisputaCreateWithoutMensagensChatInput = {
    id?: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    edital: EditalCreateNestedOneWithoutDisputasInput
    propostas?: PropostaCreateNestedManyWithoutDisputaInput
    lances?: LanceCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoCreateNestedManyWithoutDisputaInput
  }

  export type DisputaUncheckedCreateWithoutMensagensChatInput = {
    id?: string
    editalId: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    propostas?: PropostaUncheckedCreateNestedManyWithoutDisputaInput
    lances?: LanceUncheckedCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteUncheckedCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeUncheckedCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoUncheckedCreateNestedManyWithoutDisputaInput
  }

  export type DisputaCreateOrConnectWithoutMensagensChatInput = {
    where: DisputaWhereUniqueInput
    create: XOR<DisputaCreateWithoutMensagensChatInput, DisputaUncheckedCreateWithoutMensagensChatInput>
  }

  export type LicitanteCreateWithoutMensagensChatInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    usuario?: UsuarioCreateNestedOneWithoutLicitanteInput
    propostas?: PropostaCreateNestedManyWithoutLicitanteInput
    lances?: LanceCreateNestedManyWithoutLicitanteInput
    documentos?: DocumentoLicitanteCreateNestedManyWithoutLicitanteInput
    sessoes?: SessaoCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteUncheckedCreateWithoutMensagensChatInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    usuario?: UsuarioUncheckedCreateNestedOneWithoutLicitanteInput
    propostas?: PropostaUncheckedCreateNestedManyWithoutLicitanteInput
    lances?: LanceUncheckedCreateNestedManyWithoutLicitanteInput
    documentos?: DocumentoLicitanteUncheckedCreateNestedManyWithoutLicitanteInput
    sessoes?: SessaoUncheckedCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteCreateOrConnectWithoutMensagensChatInput = {
    where: LicitanteWhereUniqueInput
    create: XOR<LicitanteCreateWithoutMensagensChatInput, LicitanteUncheckedCreateWithoutMensagensChatInput>
  }

  export type EditalUpsertWithoutMensagensChatInput = {
    update: XOR<EditalUpdateWithoutMensagensChatInput, EditalUncheckedUpdateWithoutMensagensChatInput>
    create: XOR<EditalCreateWithoutMensagensChatInput, EditalUncheckedCreateWithoutMensagensChatInput>
    where?: EditalWhereInput
  }

  export type EditalUpdateToOneWithWhereWithoutMensagensChatInput = {
    where?: EditalWhereInput
    data: XOR<EditalUpdateWithoutMensagensChatInput, EditalUncheckedUpdateWithoutMensagensChatInput>
  }

  export type EditalUpdateWithoutMensagensChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivoPdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputas?: DisputaUpdateManyWithoutEditalNestedInput
    documentosObrigatorios?: DocumentoObrigatorioUpdateManyWithoutEditalNestedInput
    lotes?: LoteUpdateManyWithoutEditalNestedInput
  }

  export type EditalUncheckedUpdateWithoutMensagensChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivoPdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputas?: DisputaUncheckedUpdateManyWithoutEditalNestedInput
    documentosObrigatorios?: DocumentoObrigatorioUncheckedUpdateManyWithoutEditalNestedInput
    lotes?: LoteUncheckedUpdateManyWithoutEditalNestedInput
  }

  export type UsuarioUpsertWithoutMensagemChatInput = {
    update: XOR<UsuarioUpdateWithoutMensagemChatInput, UsuarioUncheckedUpdateWithoutMensagemChatInput>
    create: XOR<UsuarioCreateWithoutMensagemChatInput, UsuarioUncheckedCreateWithoutMensagemChatInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMensagemChatInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMensagemChatInput, UsuarioUncheckedUpdateWithoutMensagemChatInput>
  }

  export type UsuarioUpdateWithoutMensagemChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    LogAtividade?: LogAtividadeUpdateManyWithoutUsuarioNestedInput
    licitante?: LicitanteUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMensagemChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    licitanteId?: NullableStringFieldUpdateOperationsInput | string | null
    LogAtividade?: LogAtividadeUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DisputaUpsertWithoutMensagensChatInput = {
    update: XOR<DisputaUpdateWithoutMensagensChatInput, DisputaUncheckedUpdateWithoutMensagensChatInput>
    create: XOR<DisputaCreateWithoutMensagensChatInput, DisputaUncheckedCreateWithoutMensagensChatInput>
    where?: DisputaWhereInput
  }

  export type DisputaUpdateToOneWithWhereWithoutMensagensChatInput = {
    where?: DisputaWhereInput
    data: XOR<DisputaUpdateWithoutMensagensChatInput, DisputaUncheckedUpdateWithoutMensagensChatInput>
  }

  export type DisputaUpdateWithoutMensagensChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    edital?: EditalUpdateOneRequiredWithoutDisputasNestedInput
    propostas?: PropostaUpdateManyWithoutDisputaNestedInput
    lances?: LanceUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUpdateManyWithoutDisputaNestedInput
  }

  export type DisputaUncheckedUpdateWithoutMensagensChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    propostas?: PropostaUncheckedUpdateManyWithoutDisputaNestedInput
    lances?: LanceUncheckedUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUncheckedUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUncheckedUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUncheckedUpdateManyWithoutDisputaNestedInput
  }

  export type LicitanteUpsertWithoutMensagensChatInput = {
    update: XOR<LicitanteUpdateWithoutMensagensChatInput, LicitanteUncheckedUpdateWithoutMensagensChatInput>
    create: XOR<LicitanteCreateWithoutMensagensChatInput, LicitanteUncheckedCreateWithoutMensagensChatInput>
    where?: LicitanteWhereInput
  }

  export type LicitanteUpdateToOneWithWhereWithoutMensagensChatInput = {
    where?: LicitanteWhereInput
    data: XOR<LicitanteUpdateWithoutMensagensChatInput, LicitanteUncheckedUpdateWithoutMensagensChatInput>
  }

  export type LicitanteUpdateWithoutMensagensChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    usuario?: UsuarioUpdateOneWithoutLicitanteNestedInput
    propostas?: PropostaUpdateManyWithoutLicitanteNestedInput
    lances?: LanceUpdateManyWithoutLicitanteNestedInput
    documentos?: DocumentoLicitanteUpdateManyWithoutLicitanteNestedInput
    sessoes?: SessaoUpdateManyWithoutLicitanteNestedInput
  }

  export type LicitanteUncheckedUpdateWithoutMensagensChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    usuario?: UsuarioUncheckedUpdateOneWithoutLicitanteNestedInput
    propostas?: PropostaUncheckedUpdateManyWithoutLicitanteNestedInput
    lances?: LanceUncheckedUpdateManyWithoutLicitanteNestedInput
    documentos?: DocumentoLicitanteUncheckedUpdateManyWithoutLicitanteNestedInput
    sessoes?: SessaoUncheckedUpdateManyWithoutLicitanteNestedInput
  }

  export type LicitanteCreateWithoutSessoesInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    usuario?: UsuarioCreateNestedOneWithoutLicitanteInput
    propostas?: PropostaCreateNestedManyWithoutLicitanteInput
    lances?: LanceCreateNestedManyWithoutLicitanteInput
    documentos?: DocumentoLicitanteCreateNestedManyWithoutLicitanteInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteUncheckedCreateWithoutSessoesInput = {
    id?: string
    razaoSocial: string
    cnpj: string
    tipoEmpresa: $Enums.TipoEmpresa
    usuario?: UsuarioUncheckedCreateNestedOneWithoutLicitanteInput
    propostas?: PropostaUncheckedCreateNestedManyWithoutLicitanteInput
    lances?: LanceUncheckedCreateNestedManyWithoutLicitanteInput
    documentos?: DocumentoLicitanteUncheckedCreateNestedManyWithoutLicitanteInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutLicitanteInput
  }

  export type LicitanteCreateOrConnectWithoutSessoesInput = {
    where: LicitanteWhereUniqueInput
    create: XOR<LicitanteCreateWithoutSessoesInput, LicitanteUncheckedCreateWithoutSessoesInput>
  }

  export type DisputaCreateWithoutSessaoInput = {
    id?: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    edital: EditalCreateNestedOneWithoutDisputasInput
    propostas?: PropostaCreateNestedManyWithoutDisputaInput
    lances?: LanceCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeCreateNestedManyWithoutDisputaInput
  }

  export type DisputaUncheckedCreateWithoutSessaoInput = {
    id?: string
    editalId: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    propostas?: PropostaUncheckedCreateNestedManyWithoutDisputaInput
    lances?: LanceUncheckedCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteUncheckedCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutDisputaInput
    logs?: LogAtividadeUncheckedCreateNestedManyWithoutDisputaInput
  }

  export type DisputaCreateOrConnectWithoutSessaoInput = {
    where: DisputaWhereUniqueInput
    create: XOR<DisputaCreateWithoutSessaoInput, DisputaUncheckedCreateWithoutSessaoInput>
  }

  export type LicitanteUpsertWithoutSessoesInput = {
    update: XOR<LicitanteUpdateWithoutSessoesInput, LicitanteUncheckedUpdateWithoutSessoesInput>
    create: XOR<LicitanteCreateWithoutSessoesInput, LicitanteUncheckedCreateWithoutSessoesInput>
    where?: LicitanteWhereInput
  }

  export type LicitanteUpdateToOneWithWhereWithoutSessoesInput = {
    where?: LicitanteWhereInput
    data: XOR<LicitanteUpdateWithoutSessoesInput, LicitanteUncheckedUpdateWithoutSessoesInput>
  }

  export type LicitanteUpdateWithoutSessoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    usuario?: UsuarioUpdateOneWithoutLicitanteNestedInput
    propostas?: PropostaUpdateManyWithoutLicitanteNestedInput
    lances?: LanceUpdateManyWithoutLicitanteNestedInput
    documentos?: DocumentoLicitanteUpdateManyWithoutLicitanteNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutLicitanteNestedInput
  }

  export type LicitanteUncheckedUpdateWithoutSessoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipoEmpresa?: EnumTipoEmpresaFieldUpdateOperationsInput | $Enums.TipoEmpresa
    usuario?: UsuarioUncheckedUpdateOneWithoutLicitanteNestedInput
    propostas?: PropostaUncheckedUpdateManyWithoutLicitanteNestedInput
    lances?: LanceUncheckedUpdateManyWithoutLicitanteNestedInput
    documentos?: DocumentoLicitanteUncheckedUpdateManyWithoutLicitanteNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutLicitanteNestedInput
  }

  export type DisputaUpsertWithoutSessaoInput = {
    update: XOR<DisputaUpdateWithoutSessaoInput, DisputaUncheckedUpdateWithoutSessaoInput>
    create: XOR<DisputaCreateWithoutSessaoInput, DisputaUncheckedCreateWithoutSessaoInput>
    where?: DisputaWhereInput
  }

  export type DisputaUpdateToOneWithWhereWithoutSessaoInput = {
    where?: DisputaWhereInput
    data: XOR<DisputaUpdateWithoutSessaoInput, DisputaUncheckedUpdateWithoutSessaoInput>
  }

  export type DisputaUpdateWithoutSessaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    edital?: EditalUpdateOneRequiredWithoutDisputasNestedInput
    propostas?: PropostaUpdateManyWithoutDisputaNestedInput
    lances?: LanceUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUpdateManyWithoutDisputaNestedInput
  }

  export type DisputaUncheckedUpdateWithoutSessaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    propostas?: PropostaUncheckedUpdateManyWithoutDisputaNestedInput
    lances?: LanceUncheckedUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUncheckedUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUncheckedUpdateManyWithoutDisputaNestedInput
  }

  export type DisputaCreateWithoutLogsInput = {
    id?: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    edital: EditalCreateNestedOneWithoutDisputasInput
    propostas?: PropostaCreateNestedManyWithoutDisputaInput
    lances?: LanceCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoCreateNestedManyWithoutDisputaInput
  }

  export type DisputaUncheckedCreateWithoutLogsInput = {
    id?: string
    editalId: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
    propostas?: PropostaUncheckedCreateNestedManyWithoutDisputaInput
    lances?: LanceUncheckedCreateNestedManyWithoutDisputaInput
    documentos?: DocumentoLicitanteUncheckedCreateNestedManyWithoutDisputaInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutDisputaInput
    Sessao?: SessaoUncheckedCreateNestedManyWithoutDisputaInput
  }

  export type DisputaCreateOrConnectWithoutLogsInput = {
    where: DisputaWhereUniqueInput
    create: XOR<DisputaCreateWithoutLogsInput, DisputaUncheckedCreateWithoutLogsInput>
  }

  export type UsuarioCreateWithoutLogAtividadeInput = {
    id?: string
    nome: string
    email: string
    senha: string
    perfil: $Enums.PerfilUsuario
    MensagemChat?: MensagemChatCreateNestedManyWithoutAutorInput
    licitante?: LicitanteCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutLogAtividadeInput = {
    id?: string
    nome: string
    email: string
    senha: string
    perfil: $Enums.PerfilUsuario
    licitanteId?: string | null
    MensagemChat?: MensagemChatUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuarioCreateOrConnectWithoutLogAtividadeInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLogAtividadeInput, UsuarioUncheckedCreateWithoutLogAtividadeInput>
  }

  export type DisputaUpsertWithoutLogsInput = {
    update: XOR<DisputaUpdateWithoutLogsInput, DisputaUncheckedUpdateWithoutLogsInput>
    create: XOR<DisputaCreateWithoutLogsInput, DisputaUncheckedCreateWithoutLogsInput>
    where?: DisputaWhereInput
  }

  export type DisputaUpdateToOneWithWhereWithoutLogsInput = {
    where?: DisputaWhereInput
    data: XOR<DisputaUpdateWithoutLogsInput, DisputaUncheckedUpdateWithoutLogsInput>
  }

  export type DisputaUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    edital?: EditalUpdateOneRequiredWithoutDisputasNestedInput
    propostas?: PropostaUpdateManyWithoutDisputaNestedInput
    lances?: LanceUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUpdateManyWithoutDisputaNestedInput
  }

  export type DisputaUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    propostas?: PropostaUncheckedUpdateManyWithoutDisputaNestedInput
    lances?: LanceUncheckedUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUncheckedUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUncheckedUpdateManyWithoutDisputaNestedInput
  }

  export type UsuarioUpsertWithoutLogAtividadeInput = {
    update: XOR<UsuarioUpdateWithoutLogAtividadeInput, UsuarioUncheckedUpdateWithoutLogAtividadeInput>
    create: XOR<UsuarioCreateWithoutLogAtividadeInput, UsuarioUncheckedCreateWithoutLogAtividadeInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLogAtividadeInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLogAtividadeInput, UsuarioUncheckedUpdateWithoutLogAtividadeInput>
  }

  export type UsuarioUpdateWithoutLogAtividadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    MensagemChat?: MensagemChatUpdateManyWithoutAutorNestedInput
    licitante?: LicitanteUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLogAtividadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    licitanteId?: NullableStringFieldUpdateOperationsInput | string | null
    MensagemChat?: MensagemChatUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type ItemCreateWithoutLoteInput = {
    id?: string
    numero: string
    descricao: string
    quantidade: number
    unidade: string
    valorEstimado?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    propostas?: PropostaCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutLoteInput = {
    id?: string
    numero: string
    descricao: string
    quantidade: number
    unidade: string
    valorEstimado?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    propostas?: PropostaUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutLoteInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutLoteInput, ItemUncheckedCreateWithoutLoteInput>
  }

  export type ItemCreateManyLoteInputEnvelope = {
    data: ItemCreateManyLoteInput | ItemCreateManyLoteInput[]
    skipDuplicates?: boolean
  }

  export type EditalCreateWithoutLotesInput = {
    id?: string
    numero: string
    objeto: string
    modalidade: string
    status: string
    dataAbertura: Date | string
    arquivoPdf?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disputas?: DisputaCreateNestedManyWithoutEditalInput
    documentosObrigatorios?: DocumentoObrigatorioCreateNestedManyWithoutEditalInput
    mensagensChat?: MensagemChatCreateNestedManyWithoutEditalInput
  }

  export type EditalUncheckedCreateWithoutLotesInput = {
    id?: string
    numero: string
    objeto: string
    modalidade: string
    status: string
    dataAbertura: Date | string
    arquivoPdf?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disputas?: DisputaUncheckedCreateNestedManyWithoutEditalInput
    documentosObrigatorios?: DocumentoObrigatorioUncheckedCreateNestedManyWithoutEditalInput
    mensagensChat?: MensagemChatUncheckedCreateNestedManyWithoutEditalInput
  }

  export type EditalCreateOrConnectWithoutLotesInput = {
    where: EditalWhereUniqueInput
    create: XOR<EditalCreateWithoutLotesInput, EditalUncheckedCreateWithoutLotesInput>
  }

  export type ItemUpsertWithWhereUniqueWithoutLoteInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutLoteInput, ItemUncheckedUpdateWithoutLoteInput>
    create: XOR<ItemCreateWithoutLoteInput, ItemUncheckedCreateWithoutLoteInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutLoteInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutLoteInput, ItemUncheckedUpdateWithoutLoteInput>
  }

  export type ItemUpdateManyWithWhereWithoutLoteInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutLoteInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: StringFilter<"Item"> | string
    numero?: StringFilter<"Item"> | string
    descricao?: StringFilter<"Item"> | string
    quantidade?: IntFilter<"Item"> | number
    unidade?: StringFilter<"Item"> | string
    valorEstimado?: IntNullableFilter<"Item"> | number | null
    loteId?: StringFilter<"Item"> | string
    status?: StringFilter<"Item"> | string
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
  }

  export type EditalUpsertWithoutLotesInput = {
    update: XOR<EditalUpdateWithoutLotesInput, EditalUncheckedUpdateWithoutLotesInput>
    create: XOR<EditalCreateWithoutLotesInput, EditalUncheckedCreateWithoutLotesInput>
    where?: EditalWhereInput
  }

  export type EditalUpdateToOneWithWhereWithoutLotesInput = {
    where?: EditalWhereInput
    data: XOR<EditalUpdateWithoutLotesInput, EditalUncheckedUpdateWithoutLotesInput>
  }

  export type EditalUpdateWithoutLotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivoPdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputas?: DisputaUpdateManyWithoutEditalNestedInput
    documentosObrigatorios?: DocumentoObrigatorioUpdateManyWithoutEditalNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutEditalNestedInput
  }

  export type EditalUncheckedUpdateWithoutLotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivoPdf?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputas?: DisputaUncheckedUpdateManyWithoutEditalNestedInput
    documentosObrigatorios?: DocumentoObrigatorioUncheckedUpdateManyWithoutEditalNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutEditalNestedInput
  }

  export type LoteCreateWithoutItensInput = {
    id?: string
    numero: string
    descricao: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    edital: EditalCreateNestedOneWithoutLotesInput
  }

  export type LoteUncheckedCreateWithoutItensInput = {
    id?: string
    numero: string
    descricao: string
    editalId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoteCreateOrConnectWithoutItensInput = {
    where: LoteWhereUniqueInput
    create: XOR<LoteCreateWithoutItensInput, LoteUncheckedCreateWithoutItensInput>
  }

  export type PropostaCreateWithoutItemInput = {
    id?: string
    valorCentavos: number
    dataEnvio: Date | string
    arquivo?: string | null
    status?: $Enums.StatusProposta
    observacao?: string | null
    versao?: number
    createdBy: string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disputa: DisputaCreateNestedOneWithoutPropostasInput
    licitante: LicitanteCreateNestedOneWithoutPropostasInput
  }

  export type PropostaUncheckedCreateWithoutItemInput = {
    id?: string
    disputaId: string
    licitanteId: string
    valorCentavos: number
    dataEnvio: Date | string
    arquivo?: string | null
    status?: $Enums.StatusProposta
    observacao?: string | null
    versao?: number
    createdBy: string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaCreateOrConnectWithoutItemInput = {
    where: PropostaWhereUniqueInput
    create: XOR<PropostaCreateWithoutItemInput, PropostaUncheckedCreateWithoutItemInput>
  }

  export type PropostaCreateManyItemInputEnvelope = {
    data: PropostaCreateManyItemInput | PropostaCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type LoteUpsertWithoutItensInput = {
    update: XOR<LoteUpdateWithoutItensInput, LoteUncheckedUpdateWithoutItensInput>
    create: XOR<LoteCreateWithoutItensInput, LoteUncheckedCreateWithoutItensInput>
    where?: LoteWhereInput
  }

  export type LoteUpdateToOneWithWhereWithoutItensInput = {
    where?: LoteWhereInput
    data: XOR<LoteUpdateWithoutItensInput, LoteUncheckedUpdateWithoutItensInput>
  }

  export type LoteUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    edital?: EditalUpdateOneRequiredWithoutLotesNestedInput
  }

  export type LoteUncheckedUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaUpsertWithWhereUniqueWithoutItemInput = {
    where: PropostaWhereUniqueInput
    update: XOR<PropostaUpdateWithoutItemInput, PropostaUncheckedUpdateWithoutItemInput>
    create: XOR<PropostaCreateWithoutItemInput, PropostaUncheckedCreateWithoutItemInput>
  }

  export type PropostaUpdateWithWhereUniqueWithoutItemInput = {
    where: PropostaWhereUniqueInput
    data: XOR<PropostaUpdateWithoutItemInput, PropostaUncheckedUpdateWithoutItemInput>
  }

  export type PropostaUpdateManyWithWhereWithoutItemInput = {
    where: PropostaScalarWhereInput
    data: XOR<PropostaUpdateManyMutationInput, PropostaUncheckedUpdateManyWithoutItemInput>
  }

  export type LogAtividadeCreateManyUsuarioInput = {
    id?: string
    disputaId: string
    acao: string
    detalhes?: string | null
    data?: Date | string
  }

  export type MensagemChatCreateManyAutorInput = {
    id?: string
    editalId: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disputaId?: string | null
    licitanteId?: string | null
  }

  export type LogAtividadeUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    disputa?: DisputaUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogAtividadeUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAtividadeUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemChatUpdateWithoutAutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    edital?: EditalUpdateOneRequiredWithoutMensagensChatNestedInput
    Disputa?: DisputaUpdateOneWithoutMensagensChatNestedInput
    Licitante?: LicitanteUpdateOneWithoutMensagensChatNestedInput
  }

  export type MensagemChatUncheckedUpdateWithoutAutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputaId?: NullableStringFieldUpdateOperationsInput | string | null
    licitanteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MensagemChatUncheckedUpdateManyWithoutAutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputaId?: NullableStringFieldUpdateOperationsInput | string | null
    licitanteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DisputaCreateManyEditalInput = {
    id?: string
    status: $Enums.DisputaStatus
    inicio?: Date | string | null
    fimPrevisto?: Date | string | null
    encerramento?: Date | string | null
    tempoRestante?: number | null
  }

  export type DocumentoObrigatorioCreateManyEditalInput = {
    id?: string
    tipoDocumento: $Enums.TipoDocumento
    descricao: string
  }

  export type LoteCreateManyEditalInput = {
    id?: string
    numero: string
    descricao: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MensagemChatCreateManyEditalInput = {
    id?: string
    autorId: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disputaId?: string | null
    licitanteId?: string | null
  }

  export type DisputaUpdateWithoutEditalInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    propostas?: PropostaUpdateManyWithoutDisputaNestedInput
    lances?: LanceUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUpdateManyWithoutDisputaNestedInput
  }

  export type DisputaUncheckedUpdateWithoutEditalInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
    propostas?: PropostaUncheckedUpdateManyWithoutDisputaNestedInput
    lances?: LanceUncheckedUpdateManyWithoutDisputaNestedInput
    documentos?: DocumentoLicitanteUncheckedUpdateManyWithoutDisputaNestedInput
    mensagensChat?: MensagemChatUncheckedUpdateManyWithoutDisputaNestedInput
    logs?: LogAtividadeUncheckedUpdateManyWithoutDisputaNestedInput
    Sessao?: SessaoUncheckedUpdateManyWithoutDisputaNestedInput
  }

  export type DisputaUncheckedUpdateManyWithoutEditalInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputaStatusFieldUpdateOperationsInput | $Enums.DisputaStatus
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPrevisto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encerramento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempoRestante?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DocumentoObrigatorioUpdateWithoutEditalInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoObrigatorioUncheckedUpdateWithoutEditalInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoObrigatorioUncheckedUpdateManyWithoutEditalInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type LoteUpdateWithoutEditalInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemUpdateManyWithoutLoteNestedInput
  }

  export type LoteUncheckedUpdateWithoutEditalInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemUncheckedUpdateManyWithoutLoteNestedInput
  }

  export type LoteUncheckedUpdateManyWithoutEditalInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemChatUpdateWithoutEditalInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutMensagemChatNestedInput
    Disputa?: DisputaUpdateOneWithoutMensagensChatNestedInput
    Licitante?: LicitanteUpdateOneWithoutMensagensChatNestedInput
  }

  export type MensagemChatUncheckedUpdateWithoutEditalInput = {
    id?: StringFieldUpdateOperationsInput | string
    autorId?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputaId?: NullableStringFieldUpdateOperationsInput | string | null
    licitanteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MensagemChatUncheckedUpdateManyWithoutEditalInput = {
    id?: StringFieldUpdateOperationsInput | string
    autorId?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputaId?: NullableStringFieldUpdateOperationsInput | string | null
    licitanteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropostaCreateManyDisputaInput = {
    id?: string
    licitanteId: string
    itemId: string
    valorCentavos: number
    dataEnvio: Date | string
    arquivo?: string | null
    status?: $Enums.StatusProposta
    observacao?: string | null
    versao?: number
    createdBy: string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanceCreateManyDisputaInput = {
    id?: string
    licitanteId: string
    valorCentavos: number
    horario: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type DocumentoLicitanteCreateManyDisputaInput = {
    id?: string
    licitanteId: string
    tipoDocumento: $Enums.TipoDocumento
    nomeOriginal: string
    descricao?: string | null
    arquivoPath: string
    dataEnvio: Date | string
    versao?: number
    valido?: boolean
    hashDocumento?: string | null
    assinaturaBase64?: string | null
    assinadoPor?: string | null
  }

  export type MensagemChatCreateManyDisputaInput = {
    id?: string
    editalId: string
    autorId: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    licitanteId?: string | null
  }

  export type LogAtividadeCreateManyDisputaInput = {
    id?: string
    usuarioId?: string | null
    acao: string
    detalhes?: string | null
    data?: Date | string
  }

  export type SessaoCreateManyDisputaInput = {
    id?: string
    licitanteId: string
    inicio: Date | string
    fim?: Date | string | null
    ip: string
    hash: string
  }

  export type PropostaUpdateWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    versao?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licitante?: LicitanteUpdateOneRequiredWithoutPropostasNestedInput
    item?: ItemUpdateOneRequiredWithoutPropostasNestedInput
  }

  export type PropostaUncheckedUpdateWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    versao?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaUncheckedUpdateManyWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    versao?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanceUpdateWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    licitante?: LicitanteUpdateOneRequiredWithoutLancesNestedInput
  }

  export type LanceUncheckedUpdateWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LanceUncheckedUpdateManyWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentoLicitanteUpdateWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoPath?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    versao?: IntFieldUpdateOperationsInput | number
    valido?: BoolFieldUpdateOperationsInput | boolean
    hashDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    assinaturaBase64?: NullableStringFieldUpdateOperationsInput | string | null
    assinadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    licitante?: LicitanteUpdateOneRequiredWithoutDocumentosNestedInput
  }

  export type DocumentoLicitanteUncheckedUpdateWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoPath?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    versao?: IntFieldUpdateOperationsInput | number
    valido?: BoolFieldUpdateOperationsInput | boolean
    hashDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    assinaturaBase64?: NullableStringFieldUpdateOperationsInput | string | null
    assinadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentoLicitanteUncheckedUpdateManyWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoPath?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    versao?: IntFieldUpdateOperationsInput | number
    valido?: BoolFieldUpdateOperationsInput | boolean
    hashDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    assinaturaBase64?: NullableStringFieldUpdateOperationsInput | string | null
    assinadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MensagemChatUpdateWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    edital?: EditalUpdateOneRequiredWithoutMensagensChatNestedInput
    autor?: UsuarioUpdateOneRequiredWithoutMensagemChatNestedInput
    Licitante?: LicitanteUpdateOneWithoutMensagensChatNestedInput
  }

  export type MensagemChatUncheckedUpdateWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    autorId?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licitanteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MensagemChatUncheckedUpdateManyWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    autorId?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licitanteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogAtividadeUpdateWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutLogAtividadeNestedInput
  }

  export type LogAtividadeUncheckedUpdateWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    acao?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAtividadeUncheckedUpdateManyWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    acao?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessaoUpdateWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    licitante?: LicitanteUpdateOneRequiredWithoutSessoesNestedInput
  }

  export type SessaoUncheckedUpdateWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type SessaoUncheckedUpdateManyWithoutDisputaInput = {
    id?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type PropostaCreateManyLicitanteInput = {
    id?: string
    disputaId: string
    itemId: string
    valorCentavos: number
    dataEnvio: Date | string
    arquivo?: string | null
    status?: $Enums.StatusProposta
    observacao?: string | null
    versao?: number
    createdBy: string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanceCreateManyLicitanteInput = {
    id?: string
    disputaId: string
    valorCentavos: number
    horario: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type DocumentoLicitanteCreateManyLicitanteInput = {
    id?: string
    disputaId: string
    tipoDocumento: $Enums.TipoDocumento
    nomeOriginal: string
    descricao?: string | null
    arquivoPath: string
    dataEnvio: Date | string
    versao?: number
    valido?: boolean
    hashDocumento?: string | null
    assinaturaBase64?: string | null
    assinadoPor?: string | null
  }

  export type SessaoCreateManyLicitanteInput = {
    id?: string
    disputaId: string
    inicio: Date | string
    fim?: Date | string | null
    ip: string
    hash: string
  }

  export type MensagemChatCreateManyLicitanteInput = {
    id?: string
    editalId: string
    autorId: string
    tipoAutor: $Enums.TipoAutorMensagem
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disputaId?: string | null
  }

  export type PropostaUpdateWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    versao?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputa?: DisputaUpdateOneRequiredWithoutPropostasNestedInput
    item?: ItemUpdateOneRequiredWithoutPropostasNestedInput
  }

  export type PropostaUncheckedUpdateWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    versao?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaUncheckedUpdateManyWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    versao?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanceUpdateWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    disputa?: DisputaUpdateOneRequiredWithoutLancesNestedInput
  }

  export type LanceUncheckedUpdateWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LanceUncheckedUpdateManyWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentoLicitanteUpdateWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoPath?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    versao?: IntFieldUpdateOperationsInput | number
    valido?: BoolFieldUpdateOperationsInput | boolean
    hashDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    assinaturaBase64?: NullableStringFieldUpdateOperationsInput | string | null
    assinadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    disputa?: DisputaUpdateOneRequiredWithoutDocumentosNestedInput
  }

  export type DocumentoLicitanteUncheckedUpdateWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoPath?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    versao?: IntFieldUpdateOperationsInput | number
    valido?: BoolFieldUpdateOperationsInput | boolean
    hashDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    assinaturaBase64?: NullableStringFieldUpdateOperationsInput | string | null
    assinadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentoLicitanteUncheckedUpdateManyWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoPath?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    versao?: IntFieldUpdateOperationsInput | number
    valido?: BoolFieldUpdateOperationsInput | boolean
    hashDocumento?: NullableStringFieldUpdateOperationsInput | string | null
    assinaturaBase64?: NullableStringFieldUpdateOperationsInput | string | null
    assinadoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessaoUpdateWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    disputa?: DisputaUpdateOneRequiredWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type SessaoUncheckedUpdateManyWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemChatUpdateWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    edital?: EditalUpdateOneRequiredWithoutMensagensChatNestedInput
    autor?: UsuarioUpdateOneRequiredWithoutMensagemChatNestedInput
    Disputa?: DisputaUpdateOneWithoutMensagensChatNestedInput
  }

  export type MensagemChatUncheckedUpdateWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    autorId?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MensagemChatUncheckedUpdateManyWithoutLicitanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    editalId?: StringFieldUpdateOperationsInput | string
    autorId?: StringFieldUpdateOperationsInput | string
    tipoAutor?: EnumTipoAutorMensagemFieldUpdateOperationsInput | $Enums.TipoAutorMensagem
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemCreateManyLoteInput = {
    id?: string
    numero: string
    descricao: string
    quantidade: number
    unidade: string
    valorEstimado?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateWithoutLoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    valorEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propostas?: PropostaUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutLoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    valorEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propostas?: PropostaUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutLoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    valorEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaCreateManyItemInput = {
    id?: string
    disputaId: string
    licitanteId: string
    valorCentavos: number
    dataEnvio: Date | string
    arquivo?: string | null
    status?: $Enums.StatusProposta
    observacao?: string | null
    versao?: number
    createdBy: string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    versao?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputa?: DisputaUpdateOneRequiredWithoutPropostasNestedInput
    licitante?: LicitanteUpdateOneRequiredWithoutPropostasNestedInput
  }

  export type PropostaUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    versao?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputaId?: StringFieldUpdateOperationsInput | string
    licitanteId?: StringFieldUpdateOperationsInput | string
    valorCentavos?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    versao?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}