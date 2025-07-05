
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
 * Model apply_history
 * 
 */
export type apply_history = $Result.DefaultSelection<Prisma.$apply_historyPayload>
/**
 * Model positions
 * 
 */
export type positions = $Result.DefaultSelection<Prisma.$positionsPayload>
/**
 * Model stack_categories
 * 
 */
export type stack_categories = $Result.DefaultSelection<Prisma.$stack_categoriesPayload>
/**
 * Model stacks
 * 
 */
export type stacks = $Result.DefaultSelection<Prisma.$stacksPayload>
/**
 * Model team_stack_positions
 * 
 */
export type team_stack_positions = $Result.DefaultSelection<Prisma.$team_stack_positionsPayload>
/**
 * Model team_users
 * 
 */
export type team_users = $Result.DefaultSelection<Prisma.$team_usersPayload>
/**
 * Model teams
 * 
 */
export type teams = $Result.DefaultSelection<Prisma.$teamsPayload>
/**
 * Model user_stacks
 * 
 */
export type user_stacks = $Result.DefaultSelection<Prisma.$user_stacksPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model user_auths
 * 
 */
export type user_auths = $Result.DefaultSelection<Prisma.$user_authsPayload>
/**
 * Model auth_methods
 * 
 */
export type auth_methods = $Result.DefaultSelection<Prisma.$auth_methodsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const apply_from: {
  INDIVIDUAL: 'INDIVIDUAL',
  OWNER: 'OWNER'
};

export type apply_from = (typeof apply_from)[keyof typeof apply_from]


export const apply_status: {
  FAILED: 'FAILED',
  SUBMITTED: 'SUBMITTED',
  SUCCESS: 'SUCCESS',
  REJECTED: 'REJECTED'
};

export type apply_status = (typeof apply_status)[keyof typeof apply_status]


export const auth_method: {
  OAuth: 'OAuth',
  Social: 'Social'
};

export type auth_method = (typeof auth_method)[keyof typeof auth_method]


export const member_status: {
  ON_BOARD: 'ON_BOARD',
  OFF_BOARD: 'OFF_BOARD'
};

export type member_status = (typeof member_status)[keyof typeof member_status]


export const proceed_type: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  BOTH: 'BOTH'
};

export type proceed_type = (typeof proceed_type)[keyof typeof proceed_type]


export const recruit_status: {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE'
};

export type recruit_status = (typeof recruit_status)[keyof typeof recruit_status]


export const roles: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MASTER: 'MASTER'
};

export type roles = (typeof roles)[keyof typeof roles]


export const meetings: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  BOTH: 'BOTH'
};

export type meetings = (typeof meetings)[keyof typeof meetings]

}

export type apply_from = $Enums.apply_from

export const apply_from: typeof $Enums.apply_from

export type apply_status = $Enums.apply_status

export const apply_status: typeof $Enums.apply_status

export type auth_method = $Enums.auth_method

export const auth_method: typeof $Enums.auth_method

export type member_status = $Enums.member_status

export const member_status: typeof $Enums.member_status

export type proceed_type = $Enums.proceed_type

export const proceed_type: typeof $Enums.proceed_type

export type recruit_status = $Enums.recruit_status

export const recruit_status: typeof $Enums.recruit_status

export type roles = $Enums.roles

export const roles: typeof $Enums.roles

export type meetings = $Enums.meetings

export const meetings: typeof $Enums.meetings

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Apply_histories
 * const apply_histories = await prisma.apply_history.findMany()
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
   * // Fetch zero or more Apply_histories
   * const apply_histories = await prisma.apply_history.findMany()
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
   * `prisma.apply_history`: Exposes CRUD operations for the **apply_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apply_histories
    * const apply_histories = await prisma.apply_history.findMany()
    * ```
    */
  get apply_history(): Prisma.apply_historyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.positions`: Exposes CRUD operations for the **positions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.positions.findMany()
    * ```
    */
  get positions(): Prisma.positionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stack_categories`: Exposes CRUD operations for the **stack_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stack_categories
    * const stack_categories = await prisma.stack_categories.findMany()
    * ```
    */
  get stack_categories(): Prisma.stack_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stacks`: Exposes CRUD operations for the **stacks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stacks
    * const stacks = await prisma.stacks.findMany()
    * ```
    */
  get stacks(): Prisma.stacksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team_stack_positions`: Exposes CRUD operations for the **team_stack_positions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Team_stack_positions
    * const team_stack_positions = await prisma.team_stack_positions.findMany()
    * ```
    */
  get team_stack_positions(): Prisma.team_stack_positionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team_users`: Exposes CRUD operations for the **team_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Team_users
    * const team_users = await prisma.team_users.findMany()
    * ```
    */
  get team_users(): Prisma.team_usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teams`: Exposes CRUD operations for the **teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.teams.findMany()
    * ```
    */
  get teams(): Prisma.teamsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_stacks`: Exposes CRUD operations for the **user_stacks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_stacks
    * const user_stacks = await prisma.user_stacks.findMany()
    * ```
    */
  get user_stacks(): Prisma.user_stacksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_auths`: Exposes CRUD operations for the **user_auths** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_auths
    * const user_auths = await prisma.user_auths.findMany()
    * ```
    */
  get user_auths(): Prisma.user_authsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auth_methods`: Exposes CRUD operations for the **auth_methods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_methods
    * const auth_methods = await prisma.auth_methods.findMany()
    * ```
    */
  get auth_methods(): Prisma.auth_methodsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    apply_history: 'apply_history',
    positions: 'positions',
    stack_categories: 'stack_categories',
    stacks: 'stacks',
    team_stack_positions: 'team_stack_positions',
    team_users: 'team_users',
    teams: 'teams',
    user_stacks: 'user_stacks',
    users: 'users',
    user_auths: 'user_auths',
    auth_methods: 'auth_methods'
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
      modelProps: "apply_history" | "positions" | "stack_categories" | "stacks" | "team_stack_positions" | "team_users" | "teams" | "user_stacks" | "users" | "user_auths" | "auth_methods"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      apply_history: {
        payload: Prisma.$apply_historyPayload<ExtArgs>
        fields: Prisma.apply_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.apply_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apply_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.apply_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apply_historyPayload>
          }
          findFirst: {
            args: Prisma.apply_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apply_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.apply_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apply_historyPayload>
          }
          findMany: {
            args: Prisma.apply_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apply_historyPayload>[]
          }
          create: {
            args: Prisma.apply_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apply_historyPayload>
          }
          createMany: {
            args: Prisma.apply_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.apply_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apply_historyPayload>[]
          }
          delete: {
            args: Prisma.apply_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apply_historyPayload>
          }
          update: {
            args: Prisma.apply_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apply_historyPayload>
          }
          deleteMany: {
            args: Prisma.apply_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.apply_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.apply_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apply_historyPayload>[]
          }
          upsert: {
            args: Prisma.apply_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apply_historyPayload>
          }
          aggregate: {
            args: Prisma.Apply_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApply_history>
          }
          groupBy: {
            args: Prisma.apply_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Apply_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.apply_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Apply_historyCountAggregateOutputType> | number
          }
        }
      }
      positions: {
        payload: Prisma.$positionsPayload<ExtArgs>
        fields: Prisma.positionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.positionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.positionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>
          }
          findFirst: {
            args: Prisma.positionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.positionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>
          }
          findMany: {
            args: Prisma.positionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>[]
          }
          create: {
            args: Prisma.positionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>
          }
          createMany: {
            args: Prisma.positionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.positionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>[]
          }
          delete: {
            args: Prisma.positionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>
          }
          update: {
            args: Prisma.positionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>
          }
          deleteMany: {
            args: Prisma.positionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.positionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.positionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>[]
          }
          upsert: {
            args: Prisma.positionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>
          }
          aggregate: {
            args: Prisma.PositionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePositions>
          }
          groupBy: {
            args: Prisma.positionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.positionsCountArgs<ExtArgs>
            result: $Utils.Optional<PositionsCountAggregateOutputType> | number
          }
        }
      }
      stack_categories: {
        payload: Prisma.$stack_categoriesPayload<ExtArgs>
        fields: Prisma.stack_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stack_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stack_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stack_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stack_categoriesPayload>
          }
          findFirst: {
            args: Prisma.stack_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stack_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stack_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stack_categoriesPayload>
          }
          findMany: {
            args: Prisma.stack_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stack_categoriesPayload>[]
          }
          create: {
            args: Prisma.stack_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stack_categoriesPayload>
          }
          createMany: {
            args: Prisma.stack_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stack_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stack_categoriesPayload>[]
          }
          delete: {
            args: Prisma.stack_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stack_categoriesPayload>
          }
          update: {
            args: Prisma.stack_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stack_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.stack_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stack_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stack_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stack_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.stack_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stack_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Stack_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStack_categories>
          }
          groupBy: {
            args: Prisma.stack_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stack_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.stack_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Stack_categoriesCountAggregateOutputType> | number
          }
        }
      }
      stacks: {
        payload: Prisma.$stacksPayload<ExtArgs>
        fields: Prisma.stacksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stacksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stacksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stacksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>
          }
          findFirst: {
            args: Prisma.stacksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stacksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stacksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>
          }
          findMany: {
            args: Prisma.stacksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>[]
          }
          create: {
            args: Prisma.stacksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>
          }
          createMany: {
            args: Prisma.stacksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stacksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>[]
          }
          delete: {
            args: Prisma.stacksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>
          }
          update: {
            args: Prisma.stacksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>
          }
          deleteMany: {
            args: Prisma.stacksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stacksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stacksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>[]
          }
          upsert: {
            args: Prisma.stacksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stacksPayload>
          }
          aggregate: {
            args: Prisma.StacksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStacks>
          }
          groupBy: {
            args: Prisma.stacksGroupByArgs<ExtArgs>
            result: $Utils.Optional<StacksGroupByOutputType>[]
          }
          count: {
            args: Prisma.stacksCountArgs<ExtArgs>
            result: $Utils.Optional<StacksCountAggregateOutputType> | number
          }
        }
      }
      team_stack_positions: {
        payload: Prisma.$team_stack_positionsPayload<ExtArgs>
        fields: Prisma.team_stack_positionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.team_stack_positionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_stack_positionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.team_stack_positionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_stack_positionsPayload>
          }
          findFirst: {
            args: Prisma.team_stack_positionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_stack_positionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.team_stack_positionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_stack_positionsPayload>
          }
          findMany: {
            args: Prisma.team_stack_positionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_stack_positionsPayload>[]
          }
          create: {
            args: Prisma.team_stack_positionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_stack_positionsPayload>
          }
          createMany: {
            args: Prisma.team_stack_positionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.team_stack_positionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_stack_positionsPayload>[]
          }
          delete: {
            args: Prisma.team_stack_positionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_stack_positionsPayload>
          }
          update: {
            args: Prisma.team_stack_positionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_stack_positionsPayload>
          }
          deleteMany: {
            args: Prisma.team_stack_positionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.team_stack_positionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.team_stack_positionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_stack_positionsPayload>[]
          }
          upsert: {
            args: Prisma.team_stack_positionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_stack_positionsPayload>
          }
          aggregate: {
            args: Prisma.Team_stack_positionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam_stack_positions>
          }
          groupBy: {
            args: Prisma.team_stack_positionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Team_stack_positionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.team_stack_positionsCountArgs<ExtArgs>
            result: $Utils.Optional<Team_stack_positionsCountAggregateOutputType> | number
          }
        }
      }
      team_users: {
        payload: Prisma.$team_usersPayload<ExtArgs>
        fields: Prisma.team_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.team_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.team_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_usersPayload>
          }
          findFirst: {
            args: Prisma.team_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.team_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_usersPayload>
          }
          findMany: {
            args: Prisma.team_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_usersPayload>[]
          }
          create: {
            args: Prisma.team_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_usersPayload>
          }
          createMany: {
            args: Prisma.team_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.team_usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_usersPayload>[]
          }
          delete: {
            args: Prisma.team_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_usersPayload>
          }
          update: {
            args: Prisma.team_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_usersPayload>
          }
          deleteMany: {
            args: Prisma.team_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.team_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.team_usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_usersPayload>[]
          }
          upsert: {
            args: Prisma.team_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_usersPayload>
          }
          aggregate: {
            args: Prisma.Team_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam_users>
          }
          groupBy: {
            args: Prisma.team_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Team_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.team_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Team_usersCountAggregateOutputType> | number
          }
        }
      }
      teams: {
        payload: Prisma.$teamsPayload<ExtArgs>
        fields: Prisma.teamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          findFirst: {
            args: Prisma.teamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          findMany: {
            args: Prisma.teamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>[]
          }
          create: {
            args: Prisma.teamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          createMany: {
            args: Prisma.teamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.teamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>[]
          }
          delete: {
            args: Prisma.teamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          update: {
            args: Prisma.teamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          deleteMany: {
            args: Prisma.teamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.teamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>[]
          }
          upsert: {
            args: Prisma.teamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          aggregate: {
            args: Prisma.TeamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeams>
          }
          groupBy: {
            args: Prisma.teamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.teamsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamsCountAggregateOutputType> | number
          }
        }
      }
      user_stacks: {
        payload: Prisma.$user_stacksPayload<ExtArgs>
        fields: Prisma.user_stacksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_stacksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_stacksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_stacksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_stacksPayload>
          }
          findFirst: {
            args: Prisma.user_stacksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_stacksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_stacksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_stacksPayload>
          }
          findMany: {
            args: Prisma.user_stacksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_stacksPayload>[]
          }
          create: {
            args: Prisma.user_stacksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_stacksPayload>
          }
          createMany: {
            args: Prisma.user_stacksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_stacksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_stacksPayload>[]
          }
          delete: {
            args: Prisma.user_stacksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_stacksPayload>
          }
          update: {
            args: Prisma.user_stacksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_stacksPayload>
          }
          deleteMany: {
            args: Prisma.user_stacksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_stacksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_stacksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_stacksPayload>[]
          }
          upsert: {
            args: Prisma.user_stacksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_stacksPayload>
          }
          aggregate: {
            args: Prisma.User_stacksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_stacks>
          }
          groupBy: {
            args: Prisma.user_stacksGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_stacksGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_stacksCountArgs<ExtArgs>
            result: $Utils.Optional<User_stacksCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      user_auths: {
        payload: Prisma.$user_authsPayload<ExtArgs>
        fields: Prisma.user_authsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_authsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_authsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_authsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_authsPayload>
          }
          findFirst: {
            args: Prisma.user_authsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_authsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_authsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_authsPayload>
          }
          findMany: {
            args: Prisma.user_authsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_authsPayload>[]
          }
          create: {
            args: Prisma.user_authsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_authsPayload>
          }
          createMany: {
            args: Prisma.user_authsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_authsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_authsPayload>[]
          }
          delete: {
            args: Prisma.user_authsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_authsPayload>
          }
          update: {
            args: Prisma.user_authsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_authsPayload>
          }
          deleteMany: {
            args: Prisma.user_authsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_authsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_authsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_authsPayload>[]
          }
          upsert: {
            args: Prisma.user_authsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_authsPayload>
          }
          aggregate: {
            args: Prisma.User_authsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_auths>
          }
          groupBy: {
            args: Prisma.user_authsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_authsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_authsCountArgs<ExtArgs>
            result: $Utils.Optional<User_authsCountAggregateOutputType> | number
          }
        }
      }
      auth_methods: {
        payload: Prisma.$auth_methodsPayload<ExtArgs>
        fields: Prisma.auth_methodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auth_methodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_methodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auth_methodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_methodsPayload>
          }
          findFirst: {
            args: Prisma.auth_methodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_methodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auth_methodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_methodsPayload>
          }
          findMany: {
            args: Prisma.auth_methodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_methodsPayload>[]
          }
          create: {
            args: Prisma.auth_methodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_methodsPayload>
          }
          createMany: {
            args: Prisma.auth_methodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auth_methodsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_methodsPayload>[]
          }
          delete: {
            args: Prisma.auth_methodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_methodsPayload>
          }
          update: {
            args: Prisma.auth_methodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_methodsPayload>
          }
          deleteMany: {
            args: Prisma.auth_methodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auth_methodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auth_methodsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_methodsPayload>[]
          }
          upsert: {
            args: Prisma.auth_methodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_methodsPayload>
          }
          aggregate: {
            args: Prisma.Auth_methodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_methods>
          }
          groupBy: {
            args: Prisma.auth_methodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_methodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.auth_methodsCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_methodsCountAggregateOutputType> | number
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
    apply_history?: apply_historyOmit
    positions?: positionsOmit
    stack_categories?: stack_categoriesOmit
    stacks?: stacksOmit
    team_stack_positions?: team_stack_positionsOmit
    team_users?: team_usersOmit
    teams?: teamsOmit
    user_stacks?: user_stacksOmit
    users?: usersOmit
    user_auths?: user_authsOmit
    auth_methods?: auth_methodsOmit
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
   * Count Type PositionsCountOutputType
   */

  export type PositionsCountOutputType = {
    team_stack_positions: number
    users: number
  }

  export type PositionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_stack_positions?: boolean | PositionsCountOutputTypeCountTeam_stack_positionsArgs
    users?: boolean | PositionsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PositionsCountOutputType without action
   */
  export type PositionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionsCountOutputType
     */
    select?: PositionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PositionsCountOutputType without action
   */
  export type PositionsCountOutputTypeCountTeam_stack_positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_stack_positionsWhereInput
  }

  /**
   * PositionsCountOutputType without action
   */
  export type PositionsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type Stack_categoriesCountOutputType
   */

  export type Stack_categoriesCountOutputType = {
    stacks: number
  }

  export type Stack_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stacks?: boolean | Stack_categoriesCountOutputTypeCountStacksArgs
  }

  // Custom InputTypes
  /**
   * Stack_categoriesCountOutputType without action
   */
  export type Stack_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stack_categoriesCountOutputType
     */
    select?: Stack_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Stack_categoriesCountOutputType without action
   */
  export type Stack_categoriesCountOutputTypeCountStacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stacksWhereInput
  }


  /**
   * Count Type StacksCountOutputType
   */

  export type StacksCountOutputType = {
    team_stack_positions: number
    user_stacks: number
  }

  export type StacksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_stack_positions?: boolean | StacksCountOutputTypeCountTeam_stack_positionsArgs
    user_stacks?: boolean | StacksCountOutputTypeCountUser_stacksArgs
  }

  // Custom InputTypes
  /**
   * StacksCountOutputType without action
   */
  export type StacksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StacksCountOutputType
     */
    select?: StacksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StacksCountOutputType without action
   */
  export type StacksCountOutputTypeCountTeam_stack_positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_stack_positionsWhereInput
  }

  /**
   * StacksCountOutputType without action
   */
  export type StacksCountOutputTypeCountUser_stacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_stacksWhereInput
  }


  /**
   * Count Type Team_stack_positionsCountOutputType
   */

  export type Team_stack_positionsCountOutputType = {
    team_users: number
  }

  export type Team_stack_positionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_users?: boolean | Team_stack_positionsCountOutputTypeCountTeam_usersArgs
  }

  // Custom InputTypes
  /**
   * Team_stack_positionsCountOutputType without action
   */
  export type Team_stack_positionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team_stack_positionsCountOutputType
     */
    select?: Team_stack_positionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Team_stack_positionsCountOutputType without action
   */
  export type Team_stack_positionsCountOutputTypeCountTeam_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_usersWhereInput
  }


  /**
   * Count Type TeamsCountOutputType
   */

  export type TeamsCountOutputType = {
    apply_history: number
    team_stack_positions: number
  }

  export type TeamsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apply_history?: boolean | TeamsCountOutputTypeCountApply_historyArgs
    team_stack_positions?: boolean | TeamsCountOutputTypeCountTeam_stack_positionsArgs
  }

  // Custom InputTypes
  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsCountOutputType
     */
    select?: TeamsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountApply_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apply_historyWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountTeam_stack_positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_stack_positionsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    apply_history: number
    team_users: number
    user_auths: number
    user_stacks: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apply_history?: boolean | UsersCountOutputTypeCountApply_historyArgs
    team_users?: boolean | UsersCountOutputTypeCountTeam_usersArgs
    user_auths?: boolean | UsersCountOutputTypeCountUser_authsArgs
    user_stacks?: boolean | UsersCountOutputTypeCountUser_stacksArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountApply_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apply_historyWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTeam_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_usersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_authsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_authsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_stacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_stacksWhereInput
  }


  /**
   * Count Type Auth_methodsCountOutputType
   */

  export type Auth_methodsCountOutputType = {
    user_auths: number
  }

  export type Auth_methodsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_auths?: boolean | Auth_methodsCountOutputTypeCountUser_authsArgs
  }

  // Custom InputTypes
  /**
   * Auth_methodsCountOutputType without action
   */
  export type Auth_methodsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_methodsCountOutputType
     */
    select?: Auth_methodsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Auth_methodsCountOutputType without action
   */
  export type Auth_methodsCountOutputTypeCountUser_authsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_authsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model apply_history
   */

  export type AggregateApply_history = {
    _count: Apply_historyCountAggregateOutputType | null
    _min: Apply_historyMinAggregateOutputType | null
    _max: Apply_historyMaxAggregateOutputType | null
  }

  export type Apply_historyMinAggregateOutputType = {
    id: string | null
    team_id: string | null
    user_id: string | null
    ment: string | null
    apply_status: $Enums.apply_status | null
    apply_from: $Enums.apply_from | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Apply_historyMaxAggregateOutputType = {
    id: string | null
    team_id: string | null
    user_id: string | null
    ment: string | null
    apply_status: $Enums.apply_status | null
    apply_from: $Enums.apply_from | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Apply_historyCountAggregateOutputType = {
    id: number
    team_id: number
    user_id: number
    ment: number
    apply_status: number
    apply_from: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Apply_historyMinAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
    ment?: true
    apply_status?: true
    apply_from?: true
    created_at?: true
    updated_at?: true
  }

  export type Apply_historyMaxAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
    ment?: true
    apply_status?: true
    apply_from?: true
    created_at?: true
    updated_at?: true
  }

  export type Apply_historyCountAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
    ment?: true
    apply_status?: true
    apply_from?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Apply_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apply_history to aggregate.
     */
    where?: apply_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apply_histories to fetch.
     */
    orderBy?: apply_historyOrderByWithRelationInput | apply_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: apply_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apply_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apply_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apply_histories
    **/
    _count?: true | Apply_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Apply_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Apply_historyMaxAggregateInputType
  }

  export type GetApply_historyAggregateType<T extends Apply_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateApply_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApply_history[P]>
      : GetScalarType<T[P], AggregateApply_history[P]>
  }




  export type apply_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apply_historyWhereInput
    orderBy?: apply_historyOrderByWithAggregationInput | apply_historyOrderByWithAggregationInput[]
    by: Apply_historyScalarFieldEnum[] | Apply_historyScalarFieldEnum
    having?: apply_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Apply_historyCountAggregateInputType | true
    _min?: Apply_historyMinAggregateInputType
    _max?: Apply_historyMaxAggregateInputType
  }

  export type Apply_historyGroupByOutputType = {
    id: string
    team_id: string
    user_id: string
    ment: string | null
    apply_status: $Enums.apply_status | null
    apply_from: $Enums.apply_from
    created_at: Date | null
    updated_at: Date | null
    _count: Apply_historyCountAggregateOutputType | null
    _min: Apply_historyMinAggregateOutputType | null
    _max: Apply_historyMaxAggregateOutputType | null
  }

  type GetApply_historyGroupByPayload<T extends apply_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Apply_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Apply_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Apply_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Apply_historyGroupByOutputType[P]>
        }
      >
    >


  export type apply_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    ment?: boolean
    apply_status?: boolean
    apply_from?: boolean
    created_at?: boolean
    updated_at?: boolean
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apply_history"]>

  export type apply_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    ment?: boolean
    apply_status?: boolean
    apply_from?: boolean
    created_at?: boolean
    updated_at?: boolean
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apply_history"]>

  export type apply_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    ment?: boolean
    apply_status?: boolean
    apply_from?: boolean
    created_at?: boolean
    updated_at?: boolean
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apply_history"]>

  export type apply_historySelectScalar = {
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    ment?: boolean
    apply_status?: boolean
    apply_from?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type apply_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "team_id" | "user_id" | "ment" | "apply_status" | "apply_from" | "created_at" | "updated_at", ExtArgs["result"]["apply_history"]>
  export type apply_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type apply_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type apply_historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $apply_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apply_history"
    objects: {
      teams: Prisma.$teamsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      team_id: string
      user_id: string
      ment: string | null
      apply_status: $Enums.apply_status | null
      apply_from: $Enums.apply_from
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["apply_history"]>
    composites: {}
  }

  type apply_historyGetPayload<S extends boolean | null | undefined | apply_historyDefaultArgs> = $Result.GetResult<Prisma.$apply_historyPayload, S>

  type apply_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<apply_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Apply_historyCountAggregateInputType | true
    }

  export interface apply_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apply_history'], meta: { name: 'apply_history' } }
    /**
     * Find zero or one Apply_history that matches the filter.
     * @param {apply_historyFindUniqueArgs} args - Arguments to find a Apply_history
     * @example
     * // Get one Apply_history
     * const apply_history = await prisma.apply_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends apply_historyFindUniqueArgs>(args: SelectSubset<T, apply_historyFindUniqueArgs<ExtArgs>>): Prisma__apply_historyClient<$Result.GetResult<Prisma.$apply_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apply_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {apply_historyFindUniqueOrThrowArgs} args - Arguments to find a Apply_history
     * @example
     * // Get one Apply_history
     * const apply_history = await prisma.apply_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends apply_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, apply_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__apply_historyClient<$Result.GetResult<Prisma.$apply_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apply_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apply_historyFindFirstArgs} args - Arguments to find a Apply_history
     * @example
     * // Get one Apply_history
     * const apply_history = await prisma.apply_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends apply_historyFindFirstArgs>(args?: SelectSubset<T, apply_historyFindFirstArgs<ExtArgs>>): Prisma__apply_historyClient<$Result.GetResult<Prisma.$apply_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apply_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apply_historyFindFirstOrThrowArgs} args - Arguments to find a Apply_history
     * @example
     * // Get one Apply_history
     * const apply_history = await prisma.apply_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends apply_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, apply_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__apply_historyClient<$Result.GetResult<Prisma.$apply_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apply_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apply_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apply_histories
     * const apply_histories = await prisma.apply_history.findMany()
     * 
     * // Get first 10 Apply_histories
     * const apply_histories = await prisma.apply_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apply_historyWithIdOnly = await prisma.apply_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends apply_historyFindManyArgs>(args?: SelectSubset<T, apply_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apply_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apply_history.
     * @param {apply_historyCreateArgs} args - Arguments to create a Apply_history.
     * @example
     * // Create one Apply_history
     * const Apply_history = await prisma.apply_history.create({
     *   data: {
     *     // ... data to create a Apply_history
     *   }
     * })
     * 
     */
    create<T extends apply_historyCreateArgs>(args: SelectSubset<T, apply_historyCreateArgs<ExtArgs>>): Prisma__apply_historyClient<$Result.GetResult<Prisma.$apply_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apply_histories.
     * @param {apply_historyCreateManyArgs} args - Arguments to create many Apply_histories.
     * @example
     * // Create many Apply_histories
     * const apply_history = await prisma.apply_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends apply_historyCreateManyArgs>(args?: SelectSubset<T, apply_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apply_histories and returns the data saved in the database.
     * @param {apply_historyCreateManyAndReturnArgs} args - Arguments to create many Apply_histories.
     * @example
     * // Create many Apply_histories
     * const apply_history = await prisma.apply_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apply_histories and only return the `id`
     * const apply_historyWithIdOnly = await prisma.apply_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends apply_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, apply_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apply_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Apply_history.
     * @param {apply_historyDeleteArgs} args - Arguments to delete one Apply_history.
     * @example
     * // Delete one Apply_history
     * const Apply_history = await prisma.apply_history.delete({
     *   where: {
     *     // ... filter to delete one Apply_history
     *   }
     * })
     * 
     */
    delete<T extends apply_historyDeleteArgs>(args: SelectSubset<T, apply_historyDeleteArgs<ExtArgs>>): Prisma__apply_historyClient<$Result.GetResult<Prisma.$apply_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apply_history.
     * @param {apply_historyUpdateArgs} args - Arguments to update one Apply_history.
     * @example
     * // Update one Apply_history
     * const apply_history = await prisma.apply_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends apply_historyUpdateArgs>(args: SelectSubset<T, apply_historyUpdateArgs<ExtArgs>>): Prisma__apply_historyClient<$Result.GetResult<Prisma.$apply_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apply_histories.
     * @param {apply_historyDeleteManyArgs} args - Arguments to filter Apply_histories to delete.
     * @example
     * // Delete a few Apply_histories
     * const { count } = await prisma.apply_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends apply_historyDeleteManyArgs>(args?: SelectSubset<T, apply_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apply_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apply_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apply_histories
     * const apply_history = await prisma.apply_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends apply_historyUpdateManyArgs>(args: SelectSubset<T, apply_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apply_histories and returns the data updated in the database.
     * @param {apply_historyUpdateManyAndReturnArgs} args - Arguments to update many Apply_histories.
     * @example
     * // Update many Apply_histories
     * const apply_history = await prisma.apply_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apply_histories and only return the `id`
     * const apply_historyWithIdOnly = await prisma.apply_history.updateManyAndReturn({
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
    updateManyAndReturn<T extends apply_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, apply_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apply_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Apply_history.
     * @param {apply_historyUpsertArgs} args - Arguments to update or create a Apply_history.
     * @example
     * // Update or create a Apply_history
     * const apply_history = await prisma.apply_history.upsert({
     *   create: {
     *     // ... data to create a Apply_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apply_history we want to update
     *   }
     * })
     */
    upsert<T extends apply_historyUpsertArgs>(args: SelectSubset<T, apply_historyUpsertArgs<ExtArgs>>): Prisma__apply_historyClient<$Result.GetResult<Prisma.$apply_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apply_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apply_historyCountArgs} args - Arguments to filter Apply_histories to count.
     * @example
     * // Count the number of Apply_histories
     * const count = await prisma.apply_history.count({
     *   where: {
     *     // ... the filter for the Apply_histories we want to count
     *   }
     * })
    **/
    count<T extends apply_historyCountArgs>(
      args?: Subset<T, apply_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Apply_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apply_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apply_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Apply_historyAggregateArgs>(args: Subset<T, Apply_historyAggregateArgs>): Prisma.PrismaPromise<GetApply_historyAggregateType<T>>

    /**
     * Group by Apply_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apply_historyGroupByArgs} args - Group by arguments.
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
      T extends apply_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: apply_historyGroupByArgs['orderBy'] }
        : { orderBy?: apply_historyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, apply_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApply_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apply_history model
   */
  readonly fields: apply_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apply_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__apply_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends teamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamsDefaultArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the apply_history model
   */
  interface apply_historyFieldRefs {
    readonly id: FieldRef<"apply_history", 'String'>
    readonly team_id: FieldRef<"apply_history", 'String'>
    readonly user_id: FieldRef<"apply_history", 'String'>
    readonly ment: FieldRef<"apply_history", 'String'>
    readonly apply_status: FieldRef<"apply_history", 'apply_status'>
    readonly apply_from: FieldRef<"apply_history", 'apply_from'>
    readonly created_at: FieldRef<"apply_history", 'DateTime'>
    readonly updated_at: FieldRef<"apply_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * apply_history findUnique
   */
  export type apply_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyInclude<ExtArgs> | null
    /**
     * Filter, which apply_history to fetch.
     */
    where: apply_historyWhereUniqueInput
  }

  /**
   * apply_history findUniqueOrThrow
   */
  export type apply_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyInclude<ExtArgs> | null
    /**
     * Filter, which apply_history to fetch.
     */
    where: apply_historyWhereUniqueInput
  }

  /**
   * apply_history findFirst
   */
  export type apply_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyInclude<ExtArgs> | null
    /**
     * Filter, which apply_history to fetch.
     */
    where?: apply_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apply_histories to fetch.
     */
    orderBy?: apply_historyOrderByWithRelationInput | apply_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apply_histories.
     */
    cursor?: apply_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apply_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apply_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apply_histories.
     */
    distinct?: Apply_historyScalarFieldEnum | Apply_historyScalarFieldEnum[]
  }

  /**
   * apply_history findFirstOrThrow
   */
  export type apply_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyInclude<ExtArgs> | null
    /**
     * Filter, which apply_history to fetch.
     */
    where?: apply_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apply_histories to fetch.
     */
    orderBy?: apply_historyOrderByWithRelationInput | apply_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apply_histories.
     */
    cursor?: apply_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apply_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apply_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apply_histories.
     */
    distinct?: Apply_historyScalarFieldEnum | Apply_historyScalarFieldEnum[]
  }

  /**
   * apply_history findMany
   */
  export type apply_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyInclude<ExtArgs> | null
    /**
     * Filter, which apply_histories to fetch.
     */
    where?: apply_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apply_histories to fetch.
     */
    orderBy?: apply_historyOrderByWithRelationInput | apply_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apply_histories.
     */
    cursor?: apply_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apply_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apply_histories.
     */
    skip?: number
    distinct?: Apply_historyScalarFieldEnum | Apply_historyScalarFieldEnum[]
  }

  /**
   * apply_history create
   */
  export type apply_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a apply_history.
     */
    data: XOR<apply_historyCreateInput, apply_historyUncheckedCreateInput>
  }

  /**
   * apply_history createMany
   */
  export type apply_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apply_histories.
     */
    data: apply_historyCreateManyInput | apply_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apply_history createManyAndReturn
   */
  export type apply_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * The data used to create many apply_histories.
     */
    data: apply_historyCreateManyInput | apply_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * apply_history update
   */
  export type apply_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a apply_history.
     */
    data: XOR<apply_historyUpdateInput, apply_historyUncheckedUpdateInput>
    /**
     * Choose, which apply_history to update.
     */
    where: apply_historyWhereUniqueInput
  }

  /**
   * apply_history updateMany
   */
  export type apply_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apply_histories.
     */
    data: XOR<apply_historyUpdateManyMutationInput, apply_historyUncheckedUpdateManyInput>
    /**
     * Filter which apply_histories to update
     */
    where?: apply_historyWhereInput
    /**
     * Limit how many apply_histories to update.
     */
    limit?: number
  }

  /**
   * apply_history updateManyAndReturn
   */
  export type apply_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * The data used to update apply_histories.
     */
    data: XOR<apply_historyUpdateManyMutationInput, apply_historyUncheckedUpdateManyInput>
    /**
     * Filter which apply_histories to update
     */
    where?: apply_historyWhereInput
    /**
     * Limit how many apply_histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * apply_history upsert
   */
  export type apply_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the apply_history to update in case it exists.
     */
    where: apply_historyWhereUniqueInput
    /**
     * In case the apply_history found by the `where` argument doesn't exist, create a new apply_history with this data.
     */
    create: XOR<apply_historyCreateInput, apply_historyUncheckedCreateInput>
    /**
     * In case the apply_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<apply_historyUpdateInput, apply_historyUncheckedUpdateInput>
  }

  /**
   * apply_history delete
   */
  export type apply_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyInclude<ExtArgs> | null
    /**
     * Filter which apply_history to delete.
     */
    where: apply_historyWhereUniqueInput
  }

  /**
   * apply_history deleteMany
   */
  export type apply_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apply_histories to delete
     */
    where?: apply_historyWhereInput
    /**
     * Limit how many apply_histories to delete.
     */
    limit?: number
  }

  /**
   * apply_history without action
   */
  export type apply_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyInclude<ExtArgs> | null
  }


  /**
   * Model positions
   */

  export type AggregatePositions = {
    _count: PositionsCountAggregateOutputType | null
    _min: PositionsMinAggregateOutputType | null
    _max: PositionsMaxAggregateOutputType | null
  }

  export type PositionsMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PositionsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PositionsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PositionsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type PositionsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type PositionsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PositionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which positions to aggregate.
     */
    where?: positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of positions to fetch.
     */
    orderBy?: positionsOrderByWithRelationInput | positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned positions
    **/
    _count?: true | PositionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionsMaxAggregateInputType
  }

  export type GetPositionsAggregateType<T extends PositionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePositions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePositions[P]>
      : GetScalarType<T[P], AggregatePositions[P]>
  }




  export type positionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: positionsWhereInput
    orderBy?: positionsOrderByWithAggregationInput | positionsOrderByWithAggregationInput[]
    by: PositionsScalarFieldEnum[] | PositionsScalarFieldEnum
    having?: positionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionsCountAggregateInputType | true
    _min?: PositionsMinAggregateInputType
    _max?: PositionsMaxAggregateInputType
  }

  export type PositionsGroupByOutputType = {
    id: string
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: PositionsCountAggregateOutputType | null
    _min: PositionsMinAggregateOutputType | null
    _max: PositionsMaxAggregateOutputType | null
  }

  type GetPositionsGroupByPayload<T extends positionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionsGroupByOutputType[P]>
            : GetScalarType<T[P], PositionsGroupByOutputType[P]>
        }
      >
    >


  export type positionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    team_stack_positions?: boolean | positions$team_stack_positionsArgs<ExtArgs>
    users?: boolean | positions$usersArgs<ExtArgs>
    _count?: boolean | PositionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["positions"]>

  export type positionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["positions"]>

  export type positionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["positions"]>

  export type positionsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type positionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["positions"]>
  export type positionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_stack_positions?: boolean | positions$team_stack_positionsArgs<ExtArgs>
    users?: boolean | positions$usersArgs<ExtArgs>
    _count?: boolean | PositionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type positionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type positionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $positionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "positions"
    objects: {
      team_stack_positions: Prisma.$team_stack_positionsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["positions"]>
    composites: {}
  }

  type positionsGetPayload<S extends boolean | null | undefined | positionsDefaultArgs> = $Result.GetResult<Prisma.$positionsPayload, S>

  type positionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<positionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionsCountAggregateInputType | true
    }

  export interface positionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['positions'], meta: { name: 'positions' } }
    /**
     * Find zero or one Positions that matches the filter.
     * @param {positionsFindUniqueArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends positionsFindUniqueArgs>(args: SelectSubset<T, positionsFindUniqueArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Positions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {positionsFindUniqueOrThrowArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends positionsFindUniqueOrThrowArgs>(args: SelectSubset<T, positionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsFindFirstArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends positionsFindFirstArgs>(args?: SelectSubset<T, positionsFindFirstArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Positions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsFindFirstOrThrowArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends positionsFindFirstOrThrowArgs>(args?: SelectSubset<T, positionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.positions.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.positions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionsWithIdOnly = await prisma.positions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends positionsFindManyArgs>(args?: SelectSubset<T, positionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Positions.
     * @param {positionsCreateArgs} args - Arguments to create a Positions.
     * @example
     * // Create one Positions
     * const Positions = await prisma.positions.create({
     *   data: {
     *     // ... data to create a Positions
     *   }
     * })
     * 
     */
    create<T extends positionsCreateArgs>(args: SelectSubset<T, positionsCreateArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Positions.
     * @param {positionsCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const positions = await prisma.positions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends positionsCreateManyArgs>(args?: SelectSubset<T, positionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {positionsCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const positions = await prisma.positions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `id`
     * const positionsWithIdOnly = await prisma.positions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends positionsCreateManyAndReturnArgs>(args?: SelectSubset<T, positionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Positions.
     * @param {positionsDeleteArgs} args - Arguments to delete one Positions.
     * @example
     * // Delete one Positions
     * const Positions = await prisma.positions.delete({
     *   where: {
     *     // ... filter to delete one Positions
     *   }
     * })
     * 
     */
    delete<T extends positionsDeleteArgs>(args: SelectSubset<T, positionsDeleteArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Positions.
     * @param {positionsUpdateArgs} args - Arguments to update one Positions.
     * @example
     * // Update one Positions
     * const positions = await prisma.positions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends positionsUpdateArgs>(args: SelectSubset<T, positionsUpdateArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Positions.
     * @param {positionsDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.positions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends positionsDeleteManyArgs>(args?: SelectSubset<T, positionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const positions = await prisma.positions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends positionsUpdateManyArgs>(args: SelectSubset<T, positionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {positionsUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const positions = await prisma.positions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Positions and only return the `id`
     * const positionsWithIdOnly = await prisma.positions.updateManyAndReturn({
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
    updateManyAndReturn<T extends positionsUpdateManyAndReturnArgs>(args: SelectSubset<T, positionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Positions.
     * @param {positionsUpsertArgs} args - Arguments to update or create a Positions.
     * @example
     * // Update or create a Positions
     * const positions = await prisma.positions.upsert({
     *   create: {
     *     // ... data to create a Positions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Positions we want to update
     *   }
     * })
     */
    upsert<T extends positionsUpsertArgs>(args: SelectSubset<T, positionsUpsertArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.positions.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends positionsCountArgs>(
      args?: Subset<T, positionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PositionsAggregateArgs>(args: Subset<T, PositionsAggregateArgs>): Prisma.PrismaPromise<GetPositionsAggregateType<T>>

    /**
     * Group by Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsGroupByArgs} args - Group by arguments.
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
      T extends positionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: positionsGroupByArgs['orderBy'] }
        : { orderBy?: positionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, positionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the positions model
   */
  readonly fields: positionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for positions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__positionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team_stack_positions<T extends positions$team_stack_positionsArgs<ExtArgs> = {}>(args?: Subset<T, positions$team_stack_positionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends positions$usersArgs<ExtArgs> = {}>(args?: Subset<T, positions$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the positions model
   */
  interface positionsFieldRefs {
    readonly id: FieldRef<"positions", 'String'>
    readonly name: FieldRef<"positions", 'String'>
    readonly created_at: FieldRef<"positions", 'DateTime'>
    readonly updated_at: FieldRef<"positions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * positions findUnique
   */
  export type positionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionsInclude<ExtArgs> | null
    /**
     * Filter, which positions to fetch.
     */
    where: positionsWhereUniqueInput
  }

  /**
   * positions findUniqueOrThrow
   */
  export type positionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionsInclude<ExtArgs> | null
    /**
     * Filter, which positions to fetch.
     */
    where: positionsWhereUniqueInput
  }

  /**
   * positions findFirst
   */
  export type positionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionsInclude<ExtArgs> | null
    /**
     * Filter, which positions to fetch.
     */
    where?: positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of positions to fetch.
     */
    orderBy?: positionsOrderByWithRelationInput | positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for positions.
     */
    cursor?: positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of positions.
     */
    distinct?: PositionsScalarFieldEnum | PositionsScalarFieldEnum[]
  }

  /**
   * positions findFirstOrThrow
   */
  export type positionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionsInclude<ExtArgs> | null
    /**
     * Filter, which positions to fetch.
     */
    where?: positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of positions to fetch.
     */
    orderBy?: positionsOrderByWithRelationInput | positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for positions.
     */
    cursor?: positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of positions.
     */
    distinct?: PositionsScalarFieldEnum | PositionsScalarFieldEnum[]
  }

  /**
   * positions findMany
   */
  export type positionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionsInclude<ExtArgs> | null
    /**
     * Filter, which positions to fetch.
     */
    where?: positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of positions to fetch.
     */
    orderBy?: positionsOrderByWithRelationInput | positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing positions.
     */
    cursor?: positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` positions.
     */
    skip?: number
    distinct?: PositionsScalarFieldEnum | PositionsScalarFieldEnum[]
  }

  /**
   * positions create
   */
  export type positionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionsInclude<ExtArgs> | null
    /**
     * The data needed to create a positions.
     */
    data?: XOR<positionsCreateInput, positionsUncheckedCreateInput>
  }

  /**
   * positions createMany
   */
  export type positionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many positions.
     */
    data: positionsCreateManyInput | positionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * positions createManyAndReturn
   */
  export type positionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * The data used to create many positions.
     */
    data: positionsCreateManyInput | positionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * positions update
   */
  export type positionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionsInclude<ExtArgs> | null
    /**
     * The data needed to update a positions.
     */
    data: XOR<positionsUpdateInput, positionsUncheckedUpdateInput>
    /**
     * Choose, which positions to update.
     */
    where: positionsWhereUniqueInput
  }

  /**
   * positions updateMany
   */
  export type positionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update positions.
     */
    data: XOR<positionsUpdateManyMutationInput, positionsUncheckedUpdateManyInput>
    /**
     * Filter which positions to update
     */
    where?: positionsWhereInput
    /**
     * Limit how many positions to update.
     */
    limit?: number
  }

  /**
   * positions updateManyAndReturn
   */
  export type positionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * The data used to update positions.
     */
    data: XOR<positionsUpdateManyMutationInput, positionsUncheckedUpdateManyInput>
    /**
     * Filter which positions to update
     */
    where?: positionsWhereInput
    /**
     * Limit how many positions to update.
     */
    limit?: number
  }

  /**
   * positions upsert
   */
  export type positionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionsInclude<ExtArgs> | null
    /**
     * The filter to search for the positions to update in case it exists.
     */
    where: positionsWhereUniqueInput
    /**
     * In case the positions found by the `where` argument doesn't exist, create a new positions with this data.
     */
    create: XOR<positionsCreateInput, positionsUncheckedCreateInput>
    /**
     * In case the positions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<positionsUpdateInput, positionsUncheckedUpdateInput>
  }

  /**
   * positions delete
   */
  export type positionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionsInclude<ExtArgs> | null
    /**
     * Filter which positions to delete.
     */
    where: positionsWhereUniqueInput
  }

  /**
   * positions deleteMany
   */
  export type positionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which positions to delete
     */
    where?: positionsWhereInput
    /**
     * Limit how many positions to delete.
     */
    limit?: number
  }

  /**
   * positions.team_stack_positions
   */
  export type positions$team_stack_positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsInclude<ExtArgs> | null
    where?: team_stack_positionsWhereInput
    orderBy?: team_stack_positionsOrderByWithRelationInput | team_stack_positionsOrderByWithRelationInput[]
    cursor?: team_stack_positionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_stack_positionsScalarFieldEnum | Team_stack_positionsScalarFieldEnum[]
  }

  /**
   * positions.users
   */
  export type positions$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * positions without action
   */
  export type positionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionsInclude<ExtArgs> | null
  }


  /**
   * Model stack_categories
   */

  export type AggregateStack_categories = {
    _count: Stack_categoriesCountAggregateOutputType | null
    _min: Stack_categoriesMinAggregateOutputType | null
    _max: Stack_categoriesMaxAggregateOutputType | null
  }

  export type Stack_categoriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Stack_categoriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Stack_categoriesCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Stack_categoriesMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Stack_categoriesMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Stack_categoriesCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Stack_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stack_categories to aggregate.
     */
    where?: stack_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stack_categories to fetch.
     */
    orderBy?: stack_categoriesOrderByWithRelationInput | stack_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stack_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stack_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stack_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stack_categories
    **/
    _count?: true | Stack_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stack_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stack_categoriesMaxAggregateInputType
  }

  export type GetStack_categoriesAggregateType<T extends Stack_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateStack_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStack_categories[P]>
      : GetScalarType<T[P], AggregateStack_categories[P]>
  }




  export type stack_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stack_categoriesWhereInput
    orderBy?: stack_categoriesOrderByWithAggregationInput | stack_categoriesOrderByWithAggregationInput[]
    by: Stack_categoriesScalarFieldEnum[] | Stack_categoriesScalarFieldEnum
    having?: stack_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stack_categoriesCountAggregateInputType | true
    _min?: Stack_categoriesMinAggregateInputType
    _max?: Stack_categoriesMaxAggregateInputType
  }

  export type Stack_categoriesGroupByOutputType = {
    id: string
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Stack_categoriesCountAggregateOutputType | null
    _min: Stack_categoriesMinAggregateOutputType | null
    _max: Stack_categoriesMaxAggregateOutputType | null
  }

  type GetStack_categoriesGroupByPayload<T extends stack_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stack_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stack_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stack_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Stack_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type stack_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    stacks?: boolean | stack_categories$stacksArgs<ExtArgs>
    _count?: boolean | Stack_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stack_categories"]>

  export type stack_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["stack_categories"]>

  export type stack_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["stack_categories"]>

  export type stack_categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type stack_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["stack_categories"]>
  export type stack_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stacks?: boolean | stack_categories$stacksArgs<ExtArgs>
    _count?: boolean | Stack_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stack_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type stack_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $stack_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stack_categories"
    objects: {
      stacks: Prisma.$stacksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["stack_categories"]>
    composites: {}
  }

  type stack_categoriesGetPayload<S extends boolean | null | undefined | stack_categoriesDefaultArgs> = $Result.GetResult<Prisma.$stack_categoriesPayload, S>

  type stack_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stack_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stack_categoriesCountAggregateInputType | true
    }

  export interface stack_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stack_categories'], meta: { name: 'stack_categories' } }
    /**
     * Find zero or one Stack_categories that matches the filter.
     * @param {stack_categoriesFindUniqueArgs} args - Arguments to find a Stack_categories
     * @example
     * // Get one Stack_categories
     * const stack_categories = await prisma.stack_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stack_categoriesFindUniqueArgs>(args: SelectSubset<T, stack_categoriesFindUniqueArgs<ExtArgs>>): Prisma__stack_categoriesClient<$Result.GetResult<Prisma.$stack_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stack_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stack_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Stack_categories
     * @example
     * // Get one Stack_categories
     * const stack_categories = await prisma.stack_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stack_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, stack_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stack_categoriesClient<$Result.GetResult<Prisma.$stack_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stack_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stack_categoriesFindFirstArgs} args - Arguments to find a Stack_categories
     * @example
     * // Get one Stack_categories
     * const stack_categories = await prisma.stack_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stack_categoriesFindFirstArgs>(args?: SelectSubset<T, stack_categoriesFindFirstArgs<ExtArgs>>): Prisma__stack_categoriesClient<$Result.GetResult<Prisma.$stack_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stack_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stack_categoriesFindFirstOrThrowArgs} args - Arguments to find a Stack_categories
     * @example
     * // Get one Stack_categories
     * const stack_categories = await prisma.stack_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stack_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, stack_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__stack_categoriesClient<$Result.GetResult<Prisma.$stack_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stack_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stack_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stack_categories
     * const stack_categories = await prisma.stack_categories.findMany()
     * 
     * // Get first 10 Stack_categories
     * const stack_categories = await prisma.stack_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stack_categoriesWithIdOnly = await prisma.stack_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stack_categoriesFindManyArgs>(args?: SelectSubset<T, stack_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stack_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stack_categories.
     * @param {stack_categoriesCreateArgs} args - Arguments to create a Stack_categories.
     * @example
     * // Create one Stack_categories
     * const Stack_categories = await prisma.stack_categories.create({
     *   data: {
     *     // ... data to create a Stack_categories
     *   }
     * })
     * 
     */
    create<T extends stack_categoriesCreateArgs>(args: SelectSubset<T, stack_categoriesCreateArgs<ExtArgs>>): Prisma__stack_categoriesClient<$Result.GetResult<Prisma.$stack_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stack_categories.
     * @param {stack_categoriesCreateManyArgs} args - Arguments to create many Stack_categories.
     * @example
     * // Create many Stack_categories
     * const stack_categories = await prisma.stack_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stack_categoriesCreateManyArgs>(args?: SelectSubset<T, stack_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stack_categories and returns the data saved in the database.
     * @param {stack_categoriesCreateManyAndReturnArgs} args - Arguments to create many Stack_categories.
     * @example
     * // Create many Stack_categories
     * const stack_categories = await prisma.stack_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stack_categories and only return the `id`
     * const stack_categoriesWithIdOnly = await prisma.stack_categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stack_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, stack_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stack_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stack_categories.
     * @param {stack_categoriesDeleteArgs} args - Arguments to delete one Stack_categories.
     * @example
     * // Delete one Stack_categories
     * const Stack_categories = await prisma.stack_categories.delete({
     *   where: {
     *     // ... filter to delete one Stack_categories
     *   }
     * })
     * 
     */
    delete<T extends stack_categoriesDeleteArgs>(args: SelectSubset<T, stack_categoriesDeleteArgs<ExtArgs>>): Prisma__stack_categoriesClient<$Result.GetResult<Prisma.$stack_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stack_categories.
     * @param {stack_categoriesUpdateArgs} args - Arguments to update one Stack_categories.
     * @example
     * // Update one Stack_categories
     * const stack_categories = await prisma.stack_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stack_categoriesUpdateArgs>(args: SelectSubset<T, stack_categoriesUpdateArgs<ExtArgs>>): Prisma__stack_categoriesClient<$Result.GetResult<Prisma.$stack_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stack_categories.
     * @param {stack_categoriesDeleteManyArgs} args - Arguments to filter Stack_categories to delete.
     * @example
     * // Delete a few Stack_categories
     * const { count } = await prisma.stack_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stack_categoriesDeleteManyArgs>(args?: SelectSubset<T, stack_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stack_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stack_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stack_categories
     * const stack_categories = await prisma.stack_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stack_categoriesUpdateManyArgs>(args: SelectSubset<T, stack_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stack_categories and returns the data updated in the database.
     * @param {stack_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Stack_categories.
     * @example
     * // Update many Stack_categories
     * const stack_categories = await prisma.stack_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stack_categories and only return the `id`
     * const stack_categoriesWithIdOnly = await prisma.stack_categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends stack_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, stack_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stack_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stack_categories.
     * @param {stack_categoriesUpsertArgs} args - Arguments to update or create a Stack_categories.
     * @example
     * // Update or create a Stack_categories
     * const stack_categories = await prisma.stack_categories.upsert({
     *   create: {
     *     // ... data to create a Stack_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stack_categories we want to update
     *   }
     * })
     */
    upsert<T extends stack_categoriesUpsertArgs>(args: SelectSubset<T, stack_categoriesUpsertArgs<ExtArgs>>): Prisma__stack_categoriesClient<$Result.GetResult<Prisma.$stack_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stack_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stack_categoriesCountArgs} args - Arguments to filter Stack_categories to count.
     * @example
     * // Count the number of Stack_categories
     * const count = await prisma.stack_categories.count({
     *   where: {
     *     // ... the filter for the Stack_categories we want to count
     *   }
     * })
    **/
    count<T extends stack_categoriesCountArgs>(
      args?: Subset<T, stack_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stack_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stack_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stack_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Stack_categoriesAggregateArgs>(args: Subset<T, Stack_categoriesAggregateArgs>): Prisma.PrismaPromise<GetStack_categoriesAggregateType<T>>

    /**
     * Group by Stack_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stack_categoriesGroupByArgs} args - Group by arguments.
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
      T extends stack_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stack_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: stack_categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stack_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStack_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stack_categories model
   */
  readonly fields: stack_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stack_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stack_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stacks<T extends stack_categories$stacksArgs<ExtArgs> = {}>(args?: Subset<T, stack_categories$stacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the stack_categories model
   */
  interface stack_categoriesFieldRefs {
    readonly id: FieldRef<"stack_categories", 'String'>
    readonly name: FieldRef<"stack_categories", 'String'>
    readonly created_at: FieldRef<"stack_categories", 'DateTime'>
    readonly updated_at: FieldRef<"stack_categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stack_categories findUnique
   */
  export type stack_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stack_categories
     */
    select?: stack_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stack_categories
     */
    omit?: stack_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stack_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which stack_categories to fetch.
     */
    where: stack_categoriesWhereUniqueInput
  }

  /**
   * stack_categories findUniqueOrThrow
   */
  export type stack_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stack_categories
     */
    select?: stack_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stack_categories
     */
    omit?: stack_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stack_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which stack_categories to fetch.
     */
    where: stack_categoriesWhereUniqueInput
  }

  /**
   * stack_categories findFirst
   */
  export type stack_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stack_categories
     */
    select?: stack_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stack_categories
     */
    omit?: stack_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stack_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which stack_categories to fetch.
     */
    where?: stack_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stack_categories to fetch.
     */
    orderBy?: stack_categoriesOrderByWithRelationInput | stack_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stack_categories.
     */
    cursor?: stack_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stack_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stack_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stack_categories.
     */
    distinct?: Stack_categoriesScalarFieldEnum | Stack_categoriesScalarFieldEnum[]
  }

  /**
   * stack_categories findFirstOrThrow
   */
  export type stack_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stack_categories
     */
    select?: stack_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stack_categories
     */
    omit?: stack_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stack_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which stack_categories to fetch.
     */
    where?: stack_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stack_categories to fetch.
     */
    orderBy?: stack_categoriesOrderByWithRelationInput | stack_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stack_categories.
     */
    cursor?: stack_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stack_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stack_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stack_categories.
     */
    distinct?: Stack_categoriesScalarFieldEnum | Stack_categoriesScalarFieldEnum[]
  }

  /**
   * stack_categories findMany
   */
  export type stack_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stack_categories
     */
    select?: stack_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stack_categories
     */
    omit?: stack_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stack_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which stack_categories to fetch.
     */
    where?: stack_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stack_categories to fetch.
     */
    orderBy?: stack_categoriesOrderByWithRelationInput | stack_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stack_categories.
     */
    cursor?: stack_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stack_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stack_categories.
     */
    skip?: number
    distinct?: Stack_categoriesScalarFieldEnum | Stack_categoriesScalarFieldEnum[]
  }

  /**
   * stack_categories create
   */
  export type stack_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stack_categories
     */
    select?: stack_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stack_categories
     */
    omit?: stack_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stack_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a stack_categories.
     */
    data?: XOR<stack_categoriesCreateInput, stack_categoriesUncheckedCreateInput>
  }

  /**
   * stack_categories createMany
   */
  export type stack_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stack_categories.
     */
    data: stack_categoriesCreateManyInput | stack_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stack_categories createManyAndReturn
   */
  export type stack_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stack_categories
     */
    select?: stack_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stack_categories
     */
    omit?: stack_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many stack_categories.
     */
    data: stack_categoriesCreateManyInput | stack_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stack_categories update
   */
  export type stack_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stack_categories
     */
    select?: stack_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stack_categories
     */
    omit?: stack_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stack_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a stack_categories.
     */
    data: XOR<stack_categoriesUpdateInput, stack_categoriesUncheckedUpdateInput>
    /**
     * Choose, which stack_categories to update.
     */
    where: stack_categoriesWhereUniqueInput
  }

  /**
   * stack_categories updateMany
   */
  export type stack_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stack_categories.
     */
    data: XOR<stack_categoriesUpdateManyMutationInput, stack_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which stack_categories to update
     */
    where?: stack_categoriesWhereInput
    /**
     * Limit how many stack_categories to update.
     */
    limit?: number
  }

  /**
   * stack_categories updateManyAndReturn
   */
  export type stack_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stack_categories
     */
    select?: stack_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stack_categories
     */
    omit?: stack_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update stack_categories.
     */
    data: XOR<stack_categoriesUpdateManyMutationInput, stack_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which stack_categories to update
     */
    where?: stack_categoriesWhereInput
    /**
     * Limit how many stack_categories to update.
     */
    limit?: number
  }

  /**
   * stack_categories upsert
   */
  export type stack_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stack_categories
     */
    select?: stack_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stack_categories
     */
    omit?: stack_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stack_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the stack_categories to update in case it exists.
     */
    where: stack_categoriesWhereUniqueInput
    /**
     * In case the stack_categories found by the `where` argument doesn't exist, create a new stack_categories with this data.
     */
    create: XOR<stack_categoriesCreateInput, stack_categoriesUncheckedCreateInput>
    /**
     * In case the stack_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stack_categoriesUpdateInput, stack_categoriesUncheckedUpdateInput>
  }

  /**
   * stack_categories delete
   */
  export type stack_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stack_categories
     */
    select?: stack_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stack_categories
     */
    omit?: stack_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stack_categoriesInclude<ExtArgs> | null
    /**
     * Filter which stack_categories to delete.
     */
    where: stack_categoriesWhereUniqueInput
  }

  /**
   * stack_categories deleteMany
   */
  export type stack_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stack_categories to delete
     */
    where?: stack_categoriesWhereInput
    /**
     * Limit how many stack_categories to delete.
     */
    limit?: number
  }

  /**
   * stack_categories.stacks
   */
  export type stack_categories$stacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stacks
     */
    omit?: stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stacksInclude<ExtArgs> | null
    where?: stacksWhereInput
    orderBy?: stacksOrderByWithRelationInput | stacksOrderByWithRelationInput[]
    cursor?: stacksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StacksScalarFieldEnum | StacksScalarFieldEnum[]
  }

  /**
   * stack_categories without action
   */
  export type stack_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stack_categories
     */
    select?: stack_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stack_categories
     */
    omit?: stack_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stack_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model stacks
   */

  export type AggregateStacks = {
    _count: StacksCountAggregateOutputType | null
    _min: StacksMinAggregateOutputType | null
    _max: StacksMaxAggregateOutputType | null
  }

  export type StacksMinAggregateOutputType = {
    id: string | null
    category_id: string | null
    name: string | null
    img_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StacksMaxAggregateOutputType = {
    id: string | null
    category_id: string | null
    name: string | null
    img_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StacksCountAggregateOutputType = {
    id: number
    category_id: number
    name: number
    img_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StacksMinAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    img_url?: true
    created_at?: true
    updated_at?: true
  }

  export type StacksMaxAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    img_url?: true
    created_at?: true
    updated_at?: true
  }

  export type StacksCountAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    img_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StacksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stacks to aggregate.
     */
    where?: stacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stacks to fetch.
     */
    orderBy?: stacksOrderByWithRelationInput | stacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stacks
    **/
    _count?: true | StacksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StacksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StacksMaxAggregateInputType
  }

  export type GetStacksAggregateType<T extends StacksAggregateArgs> = {
        [P in keyof T & keyof AggregateStacks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStacks[P]>
      : GetScalarType<T[P], AggregateStacks[P]>
  }




  export type stacksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stacksWhereInput
    orderBy?: stacksOrderByWithAggregationInput | stacksOrderByWithAggregationInput[]
    by: StacksScalarFieldEnum[] | StacksScalarFieldEnum
    having?: stacksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StacksCountAggregateInputType | true
    _min?: StacksMinAggregateInputType
    _max?: StacksMaxAggregateInputType
  }

  export type StacksGroupByOutputType = {
    id: string
    category_id: string
    name: string | null
    img_url: string
    created_at: Date | null
    updated_at: Date | null
    _count: StacksCountAggregateOutputType | null
    _min: StacksMinAggregateOutputType | null
    _max: StacksMaxAggregateOutputType | null
  }

  type GetStacksGroupByPayload<T extends stacksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StacksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StacksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StacksGroupByOutputType[P]>
            : GetScalarType<T[P], StacksGroupByOutputType[P]>
        }
      >
    >


  export type stacksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    img_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    stack_categories?: boolean | stack_categoriesDefaultArgs<ExtArgs>
    team_stack_positions?: boolean | stacks$team_stack_positionsArgs<ExtArgs>
    user_stacks?: boolean | stacks$user_stacksArgs<ExtArgs>
    _count?: boolean | StacksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stacks"]>

  export type stacksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    img_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    stack_categories?: boolean | stack_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stacks"]>

  export type stacksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    img_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    stack_categories?: boolean | stack_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stacks"]>

  export type stacksSelectScalar = {
    id?: boolean
    category_id?: boolean
    name?: boolean
    img_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type stacksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_id" | "name" | "img_url" | "created_at" | "updated_at", ExtArgs["result"]["stacks"]>
  export type stacksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stack_categories?: boolean | stack_categoriesDefaultArgs<ExtArgs>
    team_stack_positions?: boolean | stacks$team_stack_positionsArgs<ExtArgs>
    user_stacks?: boolean | stacks$user_stacksArgs<ExtArgs>
    _count?: boolean | StacksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stacksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stack_categories?: boolean | stack_categoriesDefaultArgs<ExtArgs>
  }
  export type stacksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stack_categories?: boolean | stack_categoriesDefaultArgs<ExtArgs>
  }

  export type $stacksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stacks"
    objects: {
      stack_categories: Prisma.$stack_categoriesPayload<ExtArgs>
      team_stack_positions: Prisma.$team_stack_positionsPayload<ExtArgs>[]
      user_stacks: Prisma.$user_stacksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category_id: string
      name: string | null
      img_url: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["stacks"]>
    composites: {}
  }

  type stacksGetPayload<S extends boolean | null | undefined | stacksDefaultArgs> = $Result.GetResult<Prisma.$stacksPayload, S>

  type stacksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stacksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StacksCountAggregateInputType | true
    }

  export interface stacksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stacks'], meta: { name: 'stacks' } }
    /**
     * Find zero or one Stacks that matches the filter.
     * @param {stacksFindUniqueArgs} args - Arguments to find a Stacks
     * @example
     * // Get one Stacks
     * const stacks = await prisma.stacks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stacksFindUniqueArgs>(args: SelectSubset<T, stacksFindUniqueArgs<ExtArgs>>): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stacks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stacksFindUniqueOrThrowArgs} args - Arguments to find a Stacks
     * @example
     * // Get one Stacks
     * const stacks = await prisma.stacks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stacksFindUniqueOrThrowArgs>(args: SelectSubset<T, stacksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stacksFindFirstArgs} args - Arguments to find a Stacks
     * @example
     * // Get one Stacks
     * const stacks = await prisma.stacks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stacksFindFirstArgs>(args?: SelectSubset<T, stacksFindFirstArgs<ExtArgs>>): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stacks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stacksFindFirstOrThrowArgs} args - Arguments to find a Stacks
     * @example
     * // Get one Stacks
     * const stacks = await prisma.stacks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stacksFindFirstOrThrowArgs>(args?: SelectSubset<T, stacksFindFirstOrThrowArgs<ExtArgs>>): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stacksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stacks
     * const stacks = await prisma.stacks.findMany()
     * 
     * // Get first 10 Stacks
     * const stacks = await prisma.stacks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stacksWithIdOnly = await prisma.stacks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stacksFindManyArgs>(args?: SelectSubset<T, stacksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stacks.
     * @param {stacksCreateArgs} args - Arguments to create a Stacks.
     * @example
     * // Create one Stacks
     * const Stacks = await prisma.stacks.create({
     *   data: {
     *     // ... data to create a Stacks
     *   }
     * })
     * 
     */
    create<T extends stacksCreateArgs>(args: SelectSubset<T, stacksCreateArgs<ExtArgs>>): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stacks.
     * @param {stacksCreateManyArgs} args - Arguments to create many Stacks.
     * @example
     * // Create many Stacks
     * const stacks = await prisma.stacks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stacksCreateManyArgs>(args?: SelectSubset<T, stacksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stacks and returns the data saved in the database.
     * @param {stacksCreateManyAndReturnArgs} args - Arguments to create many Stacks.
     * @example
     * // Create many Stacks
     * const stacks = await prisma.stacks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stacks and only return the `id`
     * const stacksWithIdOnly = await prisma.stacks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stacksCreateManyAndReturnArgs>(args?: SelectSubset<T, stacksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stacks.
     * @param {stacksDeleteArgs} args - Arguments to delete one Stacks.
     * @example
     * // Delete one Stacks
     * const Stacks = await prisma.stacks.delete({
     *   where: {
     *     // ... filter to delete one Stacks
     *   }
     * })
     * 
     */
    delete<T extends stacksDeleteArgs>(args: SelectSubset<T, stacksDeleteArgs<ExtArgs>>): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stacks.
     * @param {stacksUpdateArgs} args - Arguments to update one Stacks.
     * @example
     * // Update one Stacks
     * const stacks = await prisma.stacks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stacksUpdateArgs>(args: SelectSubset<T, stacksUpdateArgs<ExtArgs>>): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stacks.
     * @param {stacksDeleteManyArgs} args - Arguments to filter Stacks to delete.
     * @example
     * // Delete a few Stacks
     * const { count } = await prisma.stacks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stacksDeleteManyArgs>(args?: SelectSubset<T, stacksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stacksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stacks
     * const stacks = await prisma.stacks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stacksUpdateManyArgs>(args: SelectSubset<T, stacksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stacks and returns the data updated in the database.
     * @param {stacksUpdateManyAndReturnArgs} args - Arguments to update many Stacks.
     * @example
     * // Update many Stacks
     * const stacks = await prisma.stacks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stacks and only return the `id`
     * const stacksWithIdOnly = await prisma.stacks.updateManyAndReturn({
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
    updateManyAndReturn<T extends stacksUpdateManyAndReturnArgs>(args: SelectSubset<T, stacksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stacks.
     * @param {stacksUpsertArgs} args - Arguments to update or create a Stacks.
     * @example
     * // Update or create a Stacks
     * const stacks = await prisma.stacks.upsert({
     *   create: {
     *     // ... data to create a Stacks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stacks we want to update
     *   }
     * })
     */
    upsert<T extends stacksUpsertArgs>(args: SelectSubset<T, stacksUpsertArgs<ExtArgs>>): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stacksCountArgs} args - Arguments to filter Stacks to count.
     * @example
     * // Count the number of Stacks
     * const count = await prisma.stacks.count({
     *   where: {
     *     // ... the filter for the Stacks we want to count
     *   }
     * })
    **/
    count<T extends stacksCountArgs>(
      args?: Subset<T, stacksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StacksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StacksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StacksAggregateArgs>(args: Subset<T, StacksAggregateArgs>): Prisma.PrismaPromise<GetStacksAggregateType<T>>

    /**
     * Group by Stacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stacksGroupByArgs} args - Group by arguments.
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
      T extends stacksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stacksGroupByArgs['orderBy'] }
        : { orderBy?: stacksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stacksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStacksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stacks model
   */
  readonly fields: stacksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stacks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stacksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stack_categories<T extends stack_categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stack_categoriesDefaultArgs<ExtArgs>>): Prisma__stack_categoriesClient<$Result.GetResult<Prisma.$stack_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team_stack_positions<T extends stacks$team_stack_positionsArgs<ExtArgs> = {}>(args?: Subset<T, stacks$team_stack_positionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_stacks<T extends stacks$user_stacksArgs<ExtArgs> = {}>(args?: Subset<T, stacks$user_stacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_stacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the stacks model
   */
  interface stacksFieldRefs {
    readonly id: FieldRef<"stacks", 'String'>
    readonly category_id: FieldRef<"stacks", 'String'>
    readonly name: FieldRef<"stacks", 'String'>
    readonly img_url: FieldRef<"stacks", 'String'>
    readonly created_at: FieldRef<"stacks", 'DateTime'>
    readonly updated_at: FieldRef<"stacks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stacks findUnique
   */
  export type stacksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stacks
     */
    omit?: stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * Filter, which stacks to fetch.
     */
    where: stacksWhereUniqueInput
  }

  /**
   * stacks findUniqueOrThrow
   */
  export type stacksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stacks
     */
    omit?: stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * Filter, which stacks to fetch.
     */
    where: stacksWhereUniqueInput
  }

  /**
   * stacks findFirst
   */
  export type stacksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stacks
     */
    omit?: stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * Filter, which stacks to fetch.
     */
    where?: stacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stacks to fetch.
     */
    orderBy?: stacksOrderByWithRelationInput | stacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stacks.
     */
    cursor?: stacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stacks.
     */
    distinct?: StacksScalarFieldEnum | StacksScalarFieldEnum[]
  }

  /**
   * stacks findFirstOrThrow
   */
  export type stacksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stacks
     */
    omit?: stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * Filter, which stacks to fetch.
     */
    where?: stacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stacks to fetch.
     */
    orderBy?: stacksOrderByWithRelationInput | stacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stacks.
     */
    cursor?: stacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stacks.
     */
    distinct?: StacksScalarFieldEnum | StacksScalarFieldEnum[]
  }

  /**
   * stacks findMany
   */
  export type stacksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stacks
     */
    omit?: stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * Filter, which stacks to fetch.
     */
    where?: stacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stacks to fetch.
     */
    orderBy?: stacksOrderByWithRelationInput | stacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stacks.
     */
    cursor?: stacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stacks.
     */
    skip?: number
    distinct?: StacksScalarFieldEnum | StacksScalarFieldEnum[]
  }

  /**
   * stacks create
   */
  export type stacksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stacks
     */
    omit?: stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * The data needed to create a stacks.
     */
    data: XOR<stacksCreateInput, stacksUncheckedCreateInput>
  }

  /**
   * stacks createMany
   */
  export type stacksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stacks.
     */
    data: stacksCreateManyInput | stacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stacks createManyAndReturn
   */
  export type stacksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stacks
     */
    omit?: stacksOmit<ExtArgs> | null
    /**
     * The data used to create many stacks.
     */
    data: stacksCreateManyInput | stacksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stacksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stacks update
   */
  export type stacksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stacks
     */
    omit?: stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * The data needed to update a stacks.
     */
    data: XOR<stacksUpdateInput, stacksUncheckedUpdateInput>
    /**
     * Choose, which stacks to update.
     */
    where: stacksWhereUniqueInput
  }

  /**
   * stacks updateMany
   */
  export type stacksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stacks.
     */
    data: XOR<stacksUpdateManyMutationInput, stacksUncheckedUpdateManyInput>
    /**
     * Filter which stacks to update
     */
    where?: stacksWhereInput
    /**
     * Limit how many stacks to update.
     */
    limit?: number
  }

  /**
   * stacks updateManyAndReturn
   */
  export type stacksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stacks
     */
    omit?: stacksOmit<ExtArgs> | null
    /**
     * The data used to update stacks.
     */
    data: XOR<stacksUpdateManyMutationInput, stacksUncheckedUpdateManyInput>
    /**
     * Filter which stacks to update
     */
    where?: stacksWhereInput
    /**
     * Limit how many stacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stacksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stacks upsert
   */
  export type stacksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stacks
     */
    omit?: stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * The filter to search for the stacks to update in case it exists.
     */
    where: stacksWhereUniqueInput
    /**
     * In case the stacks found by the `where` argument doesn't exist, create a new stacks with this data.
     */
    create: XOR<stacksCreateInput, stacksUncheckedCreateInput>
    /**
     * In case the stacks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stacksUpdateInput, stacksUncheckedUpdateInput>
  }

  /**
   * stacks delete
   */
  export type stacksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stacks
     */
    omit?: stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stacksInclude<ExtArgs> | null
    /**
     * Filter which stacks to delete.
     */
    where: stacksWhereUniqueInput
  }

  /**
   * stacks deleteMany
   */
  export type stacksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stacks to delete
     */
    where?: stacksWhereInput
    /**
     * Limit how many stacks to delete.
     */
    limit?: number
  }

  /**
   * stacks.team_stack_positions
   */
  export type stacks$team_stack_positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsInclude<ExtArgs> | null
    where?: team_stack_positionsWhereInput
    orderBy?: team_stack_positionsOrderByWithRelationInput | team_stack_positionsOrderByWithRelationInput[]
    cursor?: team_stack_positionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_stack_positionsScalarFieldEnum | Team_stack_positionsScalarFieldEnum[]
  }

  /**
   * stacks.user_stacks
   */
  export type stacks$user_stacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksInclude<ExtArgs> | null
    where?: user_stacksWhereInput
    orderBy?: user_stacksOrderByWithRelationInput | user_stacksOrderByWithRelationInput[]
    cursor?: user_stacksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_stacksScalarFieldEnum | User_stacksScalarFieldEnum[]
  }

  /**
   * stacks without action
   */
  export type stacksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stacks
     */
    select?: stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stacks
     */
    omit?: stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stacksInclude<ExtArgs> | null
  }


  /**
   * Model team_stack_positions
   */

  export type AggregateTeam_stack_positions = {
    _count: Team_stack_positionsCountAggregateOutputType | null
    _avg: Team_stack_positionsAvgAggregateOutputType | null
    _sum: Team_stack_positionsSumAggregateOutputType | null
    _min: Team_stack_positionsMinAggregateOutputType | null
    _max: Team_stack_positionsMaxAggregateOutputType | null
  }

  export type Team_stack_positionsAvgAggregateOutputType = {
    count: number | null
  }

  export type Team_stack_positionsSumAggregateOutputType = {
    count: number | null
  }

  export type Team_stack_positionsMinAggregateOutputType = {
    id: string | null
    team_id: string | null
    stack_id: string | null
    position_id: string | null
    status: boolean | null
    recruit_status: $Enums.recruit_status | null
    count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Team_stack_positionsMaxAggregateOutputType = {
    id: string | null
    team_id: string | null
    stack_id: string | null
    position_id: string | null
    status: boolean | null
    recruit_status: $Enums.recruit_status | null
    count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Team_stack_positionsCountAggregateOutputType = {
    id: number
    team_id: number
    stack_id: number
    position_id: number
    status: number
    recruit_status: number
    count: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Team_stack_positionsAvgAggregateInputType = {
    count?: true
  }

  export type Team_stack_positionsSumAggregateInputType = {
    count?: true
  }

  export type Team_stack_positionsMinAggregateInputType = {
    id?: true
    team_id?: true
    stack_id?: true
    position_id?: true
    status?: true
    recruit_status?: true
    count?: true
    created_at?: true
    updated_at?: true
  }

  export type Team_stack_positionsMaxAggregateInputType = {
    id?: true
    team_id?: true
    stack_id?: true
    position_id?: true
    status?: true
    recruit_status?: true
    count?: true
    created_at?: true
    updated_at?: true
  }

  export type Team_stack_positionsCountAggregateInputType = {
    id?: true
    team_id?: true
    stack_id?: true
    position_id?: true
    status?: true
    recruit_status?: true
    count?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Team_stack_positionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_stack_positions to aggregate.
     */
    where?: team_stack_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_stack_positions to fetch.
     */
    orderBy?: team_stack_positionsOrderByWithRelationInput | team_stack_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: team_stack_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_stack_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_stack_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned team_stack_positions
    **/
    _count?: true | Team_stack_positionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Team_stack_positionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Team_stack_positionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Team_stack_positionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Team_stack_positionsMaxAggregateInputType
  }

  export type GetTeam_stack_positionsAggregateType<T extends Team_stack_positionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam_stack_positions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam_stack_positions[P]>
      : GetScalarType<T[P], AggregateTeam_stack_positions[P]>
  }




  export type team_stack_positionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_stack_positionsWhereInput
    orderBy?: team_stack_positionsOrderByWithAggregationInput | team_stack_positionsOrderByWithAggregationInput[]
    by: Team_stack_positionsScalarFieldEnum[] | Team_stack_positionsScalarFieldEnum
    having?: team_stack_positionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Team_stack_positionsCountAggregateInputType | true
    _avg?: Team_stack_positionsAvgAggregateInputType
    _sum?: Team_stack_positionsSumAggregateInputType
    _min?: Team_stack_positionsMinAggregateInputType
    _max?: Team_stack_positionsMaxAggregateInputType
  }

  export type Team_stack_positionsGroupByOutputType = {
    id: string
    team_id: string
    stack_id: string
    position_id: string
    status: boolean
    recruit_status: $Enums.recruit_status | null
    count: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: Team_stack_positionsCountAggregateOutputType | null
    _avg: Team_stack_positionsAvgAggregateOutputType | null
    _sum: Team_stack_positionsSumAggregateOutputType | null
    _min: Team_stack_positionsMinAggregateOutputType | null
    _max: Team_stack_positionsMaxAggregateOutputType | null
  }

  type GetTeam_stack_positionsGroupByPayload<T extends team_stack_positionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Team_stack_positionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Team_stack_positionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Team_stack_positionsGroupByOutputType[P]>
            : GetScalarType<T[P], Team_stack_positionsGroupByOutputType[P]>
        }
      >
    >


  export type team_stack_positionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    stack_id?: boolean
    position_id?: boolean
    status?: boolean
    recruit_status?: boolean
    count?: boolean
    created_at?: boolean
    updated_at?: boolean
    positions?: boolean | positionsDefaultArgs<ExtArgs>
    stacks?: boolean | stacksDefaultArgs<ExtArgs>
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    team_users?: boolean | team_stack_positions$team_usersArgs<ExtArgs>
    _count?: boolean | Team_stack_positionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team_stack_positions"]>

  export type team_stack_positionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    stack_id?: boolean
    position_id?: boolean
    status?: boolean
    recruit_status?: boolean
    count?: boolean
    created_at?: boolean
    updated_at?: boolean
    positions?: boolean | positionsDefaultArgs<ExtArgs>
    stacks?: boolean | stacksDefaultArgs<ExtArgs>
    teams?: boolean | teamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team_stack_positions"]>

  export type team_stack_positionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    stack_id?: boolean
    position_id?: boolean
    status?: boolean
    recruit_status?: boolean
    count?: boolean
    created_at?: boolean
    updated_at?: boolean
    positions?: boolean | positionsDefaultArgs<ExtArgs>
    stacks?: boolean | stacksDefaultArgs<ExtArgs>
    teams?: boolean | teamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team_stack_positions"]>

  export type team_stack_positionsSelectScalar = {
    id?: boolean
    team_id?: boolean
    stack_id?: boolean
    position_id?: boolean
    status?: boolean
    recruit_status?: boolean
    count?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type team_stack_positionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "team_id" | "stack_id" | "position_id" | "status" | "recruit_status" | "count" | "created_at" | "updated_at", ExtArgs["result"]["team_stack_positions"]>
  export type team_stack_positionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    positions?: boolean | positionsDefaultArgs<ExtArgs>
    stacks?: boolean | stacksDefaultArgs<ExtArgs>
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    team_users?: boolean | team_stack_positions$team_usersArgs<ExtArgs>
    _count?: boolean | Team_stack_positionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type team_stack_positionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    positions?: boolean | positionsDefaultArgs<ExtArgs>
    stacks?: boolean | stacksDefaultArgs<ExtArgs>
    teams?: boolean | teamsDefaultArgs<ExtArgs>
  }
  export type team_stack_positionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    positions?: boolean | positionsDefaultArgs<ExtArgs>
    stacks?: boolean | stacksDefaultArgs<ExtArgs>
    teams?: boolean | teamsDefaultArgs<ExtArgs>
  }

  export type $team_stack_positionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "team_stack_positions"
    objects: {
      positions: Prisma.$positionsPayload<ExtArgs>
      stacks: Prisma.$stacksPayload<ExtArgs>
      teams: Prisma.$teamsPayload<ExtArgs>
      team_users: Prisma.$team_usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      team_id: string
      stack_id: string
      position_id: string
      status: boolean
      recruit_status: $Enums.recruit_status | null
      count: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["team_stack_positions"]>
    composites: {}
  }

  type team_stack_positionsGetPayload<S extends boolean | null | undefined | team_stack_positionsDefaultArgs> = $Result.GetResult<Prisma.$team_stack_positionsPayload, S>

  type team_stack_positionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<team_stack_positionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Team_stack_positionsCountAggregateInputType | true
    }

  export interface team_stack_positionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team_stack_positions'], meta: { name: 'team_stack_positions' } }
    /**
     * Find zero or one Team_stack_positions that matches the filter.
     * @param {team_stack_positionsFindUniqueArgs} args - Arguments to find a Team_stack_positions
     * @example
     * // Get one Team_stack_positions
     * const team_stack_positions = await prisma.team_stack_positions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends team_stack_positionsFindUniqueArgs>(args: SelectSubset<T, team_stack_positionsFindUniqueArgs<ExtArgs>>): Prisma__team_stack_positionsClient<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team_stack_positions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {team_stack_positionsFindUniqueOrThrowArgs} args - Arguments to find a Team_stack_positions
     * @example
     * // Get one Team_stack_positions
     * const team_stack_positions = await prisma.team_stack_positions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends team_stack_positionsFindUniqueOrThrowArgs>(args: SelectSubset<T, team_stack_positionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__team_stack_positionsClient<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team_stack_positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_stack_positionsFindFirstArgs} args - Arguments to find a Team_stack_positions
     * @example
     * // Get one Team_stack_positions
     * const team_stack_positions = await prisma.team_stack_positions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends team_stack_positionsFindFirstArgs>(args?: SelectSubset<T, team_stack_positionsFindFirstArgs<ExtArgs>>): Prisma__team_stack_positionsClient<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team_stack_positions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_stack_positionsFindFirstOrThrowArgs} args - Arguments to find a Team_stack_positions
     * @example
     * // Get one Team_stack_positions
     * const team_stack_positions = await prisma.team_stack_positions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends team_stack_positionsFindFirstOrThrowArgs>(args?: SelectSubset<T, team_stack_positionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__team_stack_positionsClient<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Team_stack_positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_stack_positionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Team_stack_positions
     * const team_stack_positions = await prisma.team_stack_positions.findMany()
     * 
     * // Get first 10 Team_stack_positions
     * const team_stack_positions = await prisma.team_stack_positions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const team_stack_positionsWithIdOnly = await prisma.team_stack_positions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends team_stack_positionsFindManyArgs>(args?: SelectSubset<T, team_stack_positionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team_stack_positions.
     * @param {team_stack_positionsCreateArgs} args - Arguments to create a Team_stack_positions.
     * @example
     * // Create one Team_stack_positions
     * const Team_stack_positions = await prisma.team_stack_positions.create({
     *   data: {
     *     // ... data to create a Team_stack_positions
     *   }
     * })
     * 
     */
    create<T extends team_stack_positionsCreateArgs>(args: SelectSubset<T, team_stack_positionsCreateArgs<ExtArgs>>): Prisma__team_stack_positionsClient<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Team_stack_positions.
     * @param {team_stack_positionsCreateManyArgs} args - Arguments to create many Team_stack_positions.
     * @example
     * // Create many Team_stack_positions
     * const team_stack_positions = await prisma.team_stack_positions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends team_stack_positionsCreateManyArgs>(args?: SelectSubset<T, team_stack_positionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Team_stack_positions and returns the data saved in the database.
     * @param {team_stack_positionsCreateManyAndReturnArgs} args - Arguments to create many Team_stack_positions.
     * @example
     * // Create many Team_stack_positions
     * const team_stack_positions = await prisma.team_stack_positions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Team_stack_positions and only return the `id`
     * const team_stack_positionsWithIdOnly = await prisma.team_stack_positions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends team_stack_positionsCreateManyAndReturnArgs>(args?: SelectSubset<T, team_stack_positionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team_stack_positions.
     * @param {team_stack_positionsDeleteArgs} args - Arguments to delete one Team_stack_positions.
     * @example
     * // Delete one Team_stack_positions
     * const Team_stack_positions = await prisma.team_stack_positions.delete({
     *   where: {
     *     // ... filter to delete one Team_stack_positions
     *   }
     * })
     * 
     */
    delete<T extends team_stack_positionsDeleteArgs>(args: SelectSubset<T, team_stack_positionsDeleteArgs<ExtArgs>>): Prisma__team_stack_positionsClient<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team_stack_positions.
     * @param {team_stack_positionsUpdateArgs} args - Arguments to update one Team_stack_positions.
     * @example
     * // Update one Team_stack_positions
     * const team_stack_positions = await prisma.team_stack_positions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends team_stack_positionsUpdateArgs>(args: SelectSubset<T, team_stack_positionsUpdateArgs<ExtArgs>>): Prisma__team_stack_positionsClient<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Team_stack_positions.
     * @param {team_stack_positionsDeleteManyArgs} args - Arguments to filter Team_stack_positions to delete.
     * @example
     * // Delete a few Team_stack_positions
     * const { count } = await prisma.team_stack_positions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends team_stack_positionsDeleteManyArgs>(args?: SelectSubset<T, team_stack_positionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Team_stack_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_stack_positionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Team_stack_positions
     * const team_stack_positions = await prisma.team_stack_positions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends team_stack_positionsUpdateManyArgs>(args: SelectSubset<T, team_stack_positionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Team_stack_positions and returns the data updated in the database.
     * @param {team_stack_positionsUpdateManyAndReturnArgs} args - Arguments to update many Team_stack_positions.
     * @example
     * // Update many Team_stack_positions
     * const team_stack_positions = await prisma.team_stack_positions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Team_stack_positions and only return the `id`
     * const team_stack_positionsWithIdOnly = await prisma.team_stack_positions.updateManyAndReturn({
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
    updateManyAndReturn<T extends team_stack_positionsUpdateManyAndReturnArgs>(args: SelectSubset<T, team_stack_positionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team_stack_positions.
     * @param {team_stack_positionsUpsertArgs} args - Arguments to update or create a Team_stack_positions.
     * @example
     * // Update or create a Team_stack_positions
     * const team_stack_positions = await prisma.team_stack_positions.upsert({
     *   create: {
     *     // ... data to create a Team_stack_positions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team_stack_positions we want to update
     *   }
     * })
     */
    upsert<T extends team_stack_positionsUpsertArgs>(args: SelectSubset<T, team_stack_positionsUpsertArgs<ExtArgs>>): Prisma__team_stack_positionsClient<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Team_stack_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_stack_positionsCountArgs} args - Arguments to filter Team_stack_positions to count.
     * @example
     * // Count the number of Team_stack_positions
     * const count = await prisma.team_stack_positions.count({
     *   where: {
     *     // ... the filter for the Team_stack_positions we want to count
     *   }
     * })
    **/
    count<T extends team_stack_positionsCountArgs>(
      args?: Subset<T, team_stack_positionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Team_stack_positionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team_stack_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_stack_positionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Team_stack_positionsAggregateArgs>(args: Subset<T, Team_stack_positionsAggregateArgs>): Prisma.PrismaPromise<GetTeam_stack_positionsAggregateType<T>>

    /**
     * Group by Team_stack_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_stack_positionsGroupByArgs} args - Group by arguments.
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
      T extends team_stack_positionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: team_stack_positionsGroupByArgs['orderBy'] }
        : { orderBy?: team_stack_positionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, team_stack_positionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeam_stack_positionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the team_stack_positions model
   */
  readonly fields: team_stack_positionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team_stack_positions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__team_stack_positionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    positions<T extends positionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, positionsDefaultArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stacks<T extends stacksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stacksDefaultArgs<ExtArgs>>): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teams<T extends teamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamsDefaultArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team_users<T extends team_stack_positions$team_usersArgs<ExtArgs> = {}>(args?: Subset<T, team_stack_positions$team_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the team_stack_positions model
   */
  interface team_stack_positionsFieldRefs {
    readonly id: FieldRef<"team_stack_positions", 'String'>
    readonly team_id: FieldRef<"team_stack_positions", 'String'>
    readonly stack_id: FieldRef<"team_stack_positions", 'String'>
    readonly position_id: FieldRef<"team_stack_positions", 'String'>
    readonly status: FieldRef<"team_stack_positions", 'Boolean'>
    readonly recruit_status: FieldRef<"team_stack_positions", 'recruit_status'>
    readonly count: FieldRef<"team_stack_positions", 'Int'>
    readonly created_at: FieldRef<"team_stack_positions", 'DateTime'>
    readonly updated_at: FieldRef<"team_stack_positions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * team_stack_positions findUnique
   */
  export type team_stack_positionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsInclude<ExtArgs> | null
    /**
     * Filter, which team_stack_positions to fetch.
     */
    where: team_stack_positionsWhereUniqueInput
  }

  /**
   * team_stack_positions findUniqueOrThrow
   */
  export type team_stack_positionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsInclude<ExtArgs> | null
    /**
     * Filter, which team_stack_positions to fetch.
     */
    where: team_stack_positionsWhereUniqueInput
  }

  /**
   * team_stack_positions findFirst
   */
  export type team_stack_positionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsInclude<ExtArgs> | null
    /**
     * Filter, which team_stack_positions to fetch.
     */
    where?: team_stack_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_stack_positions to fetch.
     */
    orderBy?: team_stack_positionsOrderByWithRelationInput | team_stack_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for team_stack_positions.
     */
    cursor?: team_stack_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_stack_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_stack_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of team_stack_positions.
     */
    distinct?: Team_stack_positionsScalarFieldEnum | Team_stack_positionsScalarFieldEnum[]
  }

  /**
   * team_stack_positions findFirstOrThrow
   */
  export type team_stack_positionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsInclude<ExtArgs> | null
    /**
     * Filter, which team_stack_positions to fetch.
     */
    where?: team_stack_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_stack_positions to fetch.
     */
    orderBy?: team_stack_positionsOrderByWithRelationInput | team_stack_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for team_stack_positions.
     */
    cursor?: team_stack_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_stack_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_stack_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of team_stack_positions.
     */
    distinct?: Team_stack_positionsScalarFieldEnum | Team_stack_positionsScalarFieldEnum[]
  }

  /**
   * team_stack_positions findMany
   */
  export type team_stack_positionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsInclude<ExtArgs> | null
    /**
     * Filter, which team_stack_positions to fetch.
     */
    where?: team_stack_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_stack_positions to fetch.
     */
    orderBy?: team_stack_positionsOrderByWithRelationInput | team_stack_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing team_stack_positions.
     */
    cursor?: team_stack_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_stack_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_stack_positions.
     */
    skip?: number
    distinct?: Team_stack_positionsScalarFieldEnum | Team_stack_positionsScalarFieldEnum[]
  }

  /**
   * team_stack_positions create
   */
  export type team_stack_positionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsInclude<ExtArgs> | null
    /**
     * The data needed to create a team_stack_positions.
     */
    data: XOR<team_stack_positionsCreateInput, team_stack_positionsUncheckedCreateInput>
  }

  /**
   * team_stack_positions createMany
   */
  export type team_stack_positionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many team_stack_positions.
     */
    data: team_stack_positionsCreateManyInput | team_stack_positionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * team_stack_positions createManyAndReturn
   */
  export type team_stack_positionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * The data used to create many team_stack_positions.
     */
    data: team_stack_positionsCreateManyInput | team_stack_positionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * team_stack_positions update
   */
  export type team_stack_positionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsInclude<ExtArgs> | null
    /**
     * The data needed to update a team_stack_positions.
     */
    data: XOR<team_stack_positionsUpdateInput, team_stack_positionsUncheckedUpdateInput>
    /**
     * Choose, which team_stack_positions to update.
     */
    where: team_stack_positionsWhereUniqueInput
  }

  /**
   * team_stack_positions updateMany
   */
  export type team_stack_positionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update team_stack_positions.
     */
    data: XOR<team_stack_positionsUpdateManyMutationInput, team_stack_positionsUncheckedUpdateManyInput>
    /**
     * Filter which team_stack_positions to update
     */
    where?: team_stack_positionsWhereInput
    /**
     * Limit how many team_stack_positions to update.
     */
    limit?: number
  }

  /**
   * team_stack_positions updateManyAndReturn
   */
  export type team_stack_positionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * The data used to update team_stack_positions.
     */
    data: XOR<team_stack_positionsUpdateManyMutationInput, team_stack_positionsUncheckedUpdateManyInput>
    /**
     * Filter which team_stack_positions to update
     */
    where?: team_stack_positionsWhereInput
    /**
     * Limit how many team_stack_positions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * team_stack_positions upsert
   */
  export type team_stack_positionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsInclude<ExtArgs> | null
    /**
     * The filter to search for the team_stack_positions to update in case it exists.
     */
    where: team_stack_positionsWhereUniqueInput
    /**
     * In case the team_stack_positions found by the `where` argument doesn't exist, create a new team_stack_positions with this data.
     */
    create: XOR<team_stack_positionsCreateInput, team_stack_positionsUncheckedCreateInput>
    /**
     * In case the team_stack_positions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<team_stack_positionsUpdateInput, team_stack_positionsUncheckedUpdateInput>
  }

  /**
   * team_stack_positions delete
   */
  export type team_stack_positionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsInclude<ExtArgs> | null
    /**
     * Filter which team_stack_positions to delete.
     */
    where: team_stack_positionsWhereUniqueInput
  }

  /**
   * team_stack_positions deleteMany
   */
  export type team_stack_positionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_stack_positions to delete
     */
    where?: team_stack_positionsWhereInput
    /**
     * Limit how many team_stack_positions to delete.
     */
    limit?: number
  }

  /**
   * team_stack_positions.team_users
   */
  export type team_stack_positions$team_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersInclude<ExtArgs> | null
    where?: team_usersWhereInput
    orderBy?: team_usersOrderByWithRelationInput | team_usersOrderByWithRelationInput[]
    cursor?: team_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_usersScalarFieldEnum | Team_usersScalarFieldEnum[]
  }

  /**
   * team_stack_positions without action
   */
  export type team_stack_positionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsInclude<ExtArgs> | null
  }


  /**
   * Model team_users
   */

  export type AggregateTeam_users = {
    _count: Team_usersCountAggregateOutputType | null
    _min: Team_usersMinAggregateOutputType | null
    _max: Team_usersMaxAggregateOutputType | null
  }

  export type Team_usersMinAggregateOutputType = {
    user_id: string | null
    team_position_id: string | null
    isOwner: boolean | null
    message: string | null
    member_status: $Enums.member_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Team_usersMaxAggregateOutputType = {
    user_id: string | null
    team_position_id: string | null
    isOwner: boolean | null
    message: string | null
    member_status: $Enums.member_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Team_usersCountAggregateOutputType = {
    user_id: number
    team_position_id: number
    isOwner: number
    message: number
    member_status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Team_usersMinAggregateInputType = {
    user_id?: true
    team_position_id?: true
    isOwner?: true
    message?: true
    member_status?: true
    created_at?: true
    updated_at?: true
  }

  export type Team_usersMaxAggregateInputType = {
    user_id?: true
    team_position_id?: true
    isOwner?: true
    message?: true
    member_status?: true
    created_at?: true
    updated_at?: true
  }

  export type Team_usersCountAggregateInputType = {
    user_id?: true
    team_position_id?: true
    isOwner?: true
    message?: true
    member_status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Team_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_users to aggregate.
     */
    where?: team_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_users to fetch.
     */
    orderBy?: team_usersOrderByWithRelationInput | team_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: team_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned team_users
    **/
    _count?: true | Team_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Team_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Team_usersMaxAggregateInputType
  }

  export type GetTeam_usersAggregateType<T extends Team_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam_users[P]>
      : GetScalarType<T[P], AggregateTeam_users[P]>
  }




  export type team_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_usersWhereInput
    orderBy?: team_usersOrderByWithAggregationInput | team_usersOrderByWithAggregationInput[]
    by: Team_usersScalarFieldEnum[] | Team_usersScalarFieldEnum
    having?: team_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Team_usersCountAggregateInputType | true
    _min?: Team_usersMinAggregateInputType
    _max?: Team_usersMaxAggregateInputType
  }

  export type Team_usersGroupByOutputType = {
    user_id: string
    team_position_id: string
    isOwner: boolean | null
    message: string | null
    member_status: $Enums.member_status | null
    created_at: Date | null
    updated_at: Date | null
    _count: Team_usersCountAggregateOutputType | null
    _min: Team_usersMinAggregateOutputType | null
    _max: Team_usersMaxAggregateOutputType | null
  }

  type GetTeam_usersGroupByPayload<T extends team_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Team_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Team_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Team_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Team_usersGroupByOutputType[P]>
        }
      >
    >


  export type team_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    team_position_id?: boolean
    isOwner?: boolean
    message?: boolean
    member_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    team_stack_positions?: boolean | team_stack_positionsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team_users"]>

  export type team_usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    team_position_id?: boolean
    isOwner?: boolean
    message?: boolean
    member_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    team_stack_positions?: boolean | team_stack_positionsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team_users"]>

  export type team_usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    team_position_id?: boolean
    isOwner?: boolean
    message?: boolean
    member_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    team_stack_positions?: boolean | team_stack_positionsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team_users"]>

  export type team_usersSelectScalar = {
    user_id?: boolean
    team_position_id?: boolean
    isOwner?: boolean
    message?: boolean
    member_status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type team_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "team_position_id" | "isOwner" | "message" | "member_status" | "created_at" | "updated_at", ExtArgs["result"]["team_users"]>
  export type team_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_stack_positions?: boolean | team_stack_positionsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type team_usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_stack_positions?: boolean | team_stack_positionsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type team_usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_stack_positions?: boolean | team_stack_positionsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $team_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "team_users"
    objects: {
      team_stack_positions: Prisma.$team_stack_positionsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      team_position_id: string
      isOwner: boolean | null
      message: string | null
      member_status: $Enums.member_status | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["team_users"]>
    composites: {}
  }

  type team_usersGetPayload<S extends boolean | null | undefined | team_usersDefaultArgs> = $Result.GetResult<Prisma.$team_usersPayload, S>

  type team_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<team_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Team_usersCountAggregateInputType | true
    }

  export interface team_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team_users'], meta: { name: 'team_users' } }
    /**
     * Find zero or one Team_users that matches the filter.
     * @param {team_usersFindUniqueArgs} args - Arguments to find a Team_users
     * @example
     * // Get one Team_users
     * const team_users = await prisma.team_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends team_usersFindUniqueArgs>(args: SelectSubset<T, team_usersFindUniqueArgs<ExtArgs>>): Prisma__team_usersClient<$Result.GetResult<Prisma.$team_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {team_usersFindUniqueOrThrowArgs} args - Arguments to find a Team_users
     * @example
     * // Get one Team_users
     * const team_users = await prisma.team_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends team_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, team_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__team_usersClient<$Result.GetResult<Prisma.$team_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_usersFindFirstArgs} args - Arguments to find a Team_users
     * @example
     * // Get one Team_users
     * const team_users = await prisma.team_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends team_usersFindFirstArgs>(args?: SelectSubset<T, team_usersFindFirstArgs<ExtArgs>>): Prisma__team_usersClient<$Result.GetResult<Prisma.$team_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_usersFindFirstOrThrowArgs} args - Arguments to find a Team_users
     * @example
     * // Get one Team_users
     * const team_users = await prisma.team_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends team_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, team_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__team_usersClient<$Result.GetResult<Prisma.$team_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Team_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Team_users
     * const team_users = await prisma.team_users.findMany()
     * 
     * // Get first 10 Team_users
     * const team_users = await prisma.team_users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const team_usersWithUser_idOnly = await prisma.team_users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends team_usersFindManyArgs>(args?: SelectSubset<T, team_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team_users.
     * @param {team_usersCreateArgs} args - Arguments to create a Team_users.
     * @example
     * // Create one Team_users
     * const Team_users = await prisma.team_users.create({
     *   data: {
     *     // ... data to create a Team_users
     *   }
     * })
     * 
     */
    create<T extends team_usersCreateArgs>(args: SelectSubset<T, team_usersCreateArgs<ExtArgs>>): Prisma__team_usersClient<$Result.GetResult<Prisma.$team_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Team_users.
     * @param {team_usersCreateManyArgs} args - Arguments to create many Team_users.
     * @example
     * // Create many Team_users
     * const team_users = await prisma.team_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends team_usersCreateManyArgs>(args?: SelectSubset<T, team_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Team_users and returns the data saved in the database.
     * @param {team_usersCreateManyAndReturnArgs} args - Arguments to create many Team_users.
     * @example
     * // Create many Team_users
     * const team_users = await prisma.team_users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Team_users and only return the `user_id`
     * const team_usersWithUser_idOnly = await prisma.team_users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends team_usersCreateManyAndReturnArgs>(args?: SelectSubset<T, team_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team_users.
     * @param {team_usersDeleteArgs} args - Arguments to delete one Team_users.
     * @example
     * // Delete one Team_users
     * const Team_users = await prisma.team_users.delete({
     *   where: {
     *     // ... filter to delete one Team_users
     *   }
     * })
     * 
     */
    delete<T extends team_usersDeleteArgs>(args: SelectSubset<T, team_usersDeleteArgs<ExtArgs>>): Prisma__team_usersClient<$Result.GetResult<Prisma.$team_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team_users.
     * @param {team_usersUpdateArgs} args - Arguments to update one Team_users.
     * @example
     * // Update one Team_users
     * const team_users = await prisma.team_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends team_usersUpdateArgs>(args: SelectSubset<T, team_usersUpdateArgs<ExtArgs>>): Prisma__team_usersClient<$Result.GetResult<Prisma.$team_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Team_users.
     * @param {team_usersDeleteManyArgs} args - Arguments to filter Team_users to delete.
     * @example
     * // Delete a few Team_users
     * const { count } = await prisma.team_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends team_usersDeleteManyArgs>(args?: SelectSubset<T, team_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Team_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Team_users
     * const team_users = await prisma.team_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends team_usersUpdateManyArgs>(args: SelectSubset<T, team_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Team_users and returns the data updated in the database.
     * @param {team_usersUpdateManyAndReturnArgs} args - Arguments to update many Team_users.
     * @example
     * // Update many Team_users
     * const team_users = await prisma.team_users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Team_users and only return the `user_id`
     * const team_usersWithUser_idOnly = await prisma.team_users.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends team_usersUpdateManyAndReturnArgs>(args: SelectSubset<T, team_usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team_users.
     * @param {team_usersUpsertArgs} args - Arguments to update or create a Team_users.
     * @example
     * // Update or create a Team_users
     * const team_users = await prisma.team_users.upsert({
     *   create: {
     *     // ... data to create a Team_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team_users we want to update
     *   }
     * })
     */
    upsert<T extends team_usersUpsertArgs>(args: SelectSubset<T, team_usersUpsertArgs<ExtArgs>>): Prisma__team_usersClient<$Result.GetResult<Prisma.$team_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Team_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_usersCountArgs} args - Arguments to filter Team_users to count.
     * @example
     * // Count the number of Team_users
     * const count = await prisma.team_users.count({
     *   where: {
     *     // ... the filter for the Team_users we want to count
     *   }
     * })
    **/
    count<T extends team_usersCountArgs>(
      args?: Subset<T, team_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Team_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Team_usersAggregateArgs>(args: Subset<T, Team_usersAggregateArgs>): Prisma.PrismaPromise<GetTeam_usersAggregateType<T>>

    /**
     * Group by Team_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_usersGroupByArgs} args - Group by arguments.
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
      T extends team_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: team_usersGroupByArgs['orderBy'] }
        : { orderBy?: team_usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, team_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeam_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the team_users model
   */
  readonly fields: team_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__team_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team_stack_positions<T extends team_stack_positionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, team_stack_positionsDefaultArgs<ExtArgs>>): Prisma__team_stack_positionsClient<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the team_users model
   */
  interface team_usersFieldRefs {
    readonly user_id: FieldRef<"team_users", 'String'>
    readonly team_position_id: FieldRef<"team_users", 'String'>
    readonly isOwner: FieldRef<"team_users", 'Boolean'>
    readonly message: FieldRef<"team_users", 'String'>
    readonly member_status: FieldRef<"team_users", 'member_status'>
    readonly created_at: FieldRef<"team_users", 'DateTime'>
    readonly updated_at: FieldRef<"team_users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * team_users findUnique
   */
  export type team_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersInclude<ExtArgs> | null
    /**
     * Filter, which team_users to fetch.
     */
    where: team_usersWhereUniqueInput
  }

  /**
   * team_users findUniqueOrThrow
   */
  export type team_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersInclude<ExtArgs> | null
    /**
     * Filter, which team_users to fetch.
     */
    where: team_usersWhereUniqueInput
  }

  /**
   * team_users findFirst
   */
  export type team_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersInclude<ExtArgs> | null
    /**
     * Filter, which team_users to fetch.
     */
    where?: team_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_users to fetch.
     */
    orderBy?: team_usersOrderByWithRelationInput | team_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for team_users.
     */
    cursor?: team_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of team_users.
     */
    distinct?: Team_usersScalarFieldEnum | Team_usersScalarFieldEnum[]
  }

  /**
   * team_users findFirstOrThrow
   */
  export type team_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersInclude<ExtArgs> | null
    /**
     * Filter, which team_users to fetch.
     */
    where?: team_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_users to fetch.
     */
    orderBy?: team_usersOrderByWithRelationInput | team_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for team_users.
     */
    cursor?: team_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of team_users.
     */
    distinct?: Team_usersScalarFieldEnum | Team_usersScalarFieldEnum[]
  }

  /**
   * team_users findMany
   */
  export type team_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersInclude<ExtArgs> | null
    /**
     * Filter, which team_users to fetch.
     */
    where?: team_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_users to fetch.
     */
    orderBy?: team_usersOrderByWithRelationInput | team_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing team_users.
     */
    cursor?: team_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_users.
     */
    skip?: number
    distinct?: Team_usersScalarFieldEnum | Team_usersScalarFieldEnum[]
  }

  /**
   * team_users create
   */
  export type team_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a team_users.
     */
    data: XOR<team_usersCreateInput, team_usersUncheckedCreateInput>
  }

  /**
   * team_users createMany
   */
  export type team_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many team_users.
     */
    data: team_usersCreateManyInput | team_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * team_users createManyAndReturn
   */
  export type team_usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * The data used to create many team_users.
     */
    data: team_usersCreateManyInput | team_usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * team_users update
   */
  export type team_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a team_users.
     */
    data: XOR<team_usersUpdateInput, team_usersUncheckedUpdateInput>
    /**
     * Choose, which team_users to update.
     */
    where: team_usersWhereUniqueInput
  }

  /**
   * team_users updateMany
   */
  export type team_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update team_users.
     */
    data: XOR<team_usersUpdateManyMutationInput, team_usersUncheckedUpdateManyInput>
    /**
     * Filter which team_users to update
     */
    where?: team_usersWhereInput
    /**
     * Limit how many team_users to update.
     */
    limit?: number
  }

  /**
   * team_users updateManyAndReturn
   */
  export type team_usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * The data used to update team_users.
     */
    data: XOR<team_usersUpdateManyMutationInput, team_usersUncheckedUpdateManyInput>
    /**
     * Filter which team_users to update
     */
    where?: team_usersWhereInput
    /**
     * Limit how many team_users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * team_users upsert
   */
  export type team_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the team_users to update in case it exists.
     */
    where: team_usersWhereUniqueInput
    /**
     * In case the team_users found by the `where` argument doesn't exist, create a new team_users with this data.
     */
    create: XOR<team_usersCreateInput, team_usersUncheckedCreateInput>
    /**
     * In case the team_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<team_usersUpdateInput, team_usersUncheckedUpdateInput>
  }

  /**
   * team_users delete
   */
  export type team_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersInclude<ExtArgs> | null
    /**
     * Filter which team_users to delete.
     */
    where: team_usersWhereUniqueInput
  }

  /**
   * team_users deleteMany
   */
  export type team_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_users to delete
     */
    where?: team_usersWhereInput
    /**
     * Limit how many team_users to delete.
     */
    limit?: number
  }

  /**
   * team_users without action
   */
  export type team_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersInclude<ExtArgs> | null
  }


  /**
   * Model teams
   */

  export type AggregateTeams = {
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  export type TeamsMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    user_id: string | null
    Field: boolean | null
    recruit_status: $Enums.recruit_status | null
    proceed_type: $Enums.proceed_type | null
    img: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    user_id: string | null
    Field: boolean | null
    recruit_status: $Enums.recruit_status | null
    proceed_type: $Enums.proceed_type | null
    img: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamsCountAggregateOutputType = {
    id: number
    title: number
    content: number
    user_id: number
    Field: number
    recruit_status: number
    proceed_type: number
    img: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TeamsMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    user_id?: true
    Field?: true
    recruit_status?: true
    proceed_type?: true
    img?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamsMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    user_id?: true
    Field?: true
    recruit_status?: true
    proceed_type?: true
    img?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamsCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    user_id?: true
    Field?: true
    recruit_status?: true
    proceed_type?: true
    img?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to aggregate.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teams
    **/
    _count?: true | TeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsMaxAggregateInputType
  }

  export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams[P]>
      : GetScalarType<T[P], AggregateTeams[P]>
  }




  export type teamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamsWhereInput
    orderBy?: teamsOrderByWithAggregationInput | teamsOrderByWithAggregationInput[]
    by: TeamsScalarFieldEnum[] | TeamsScalarFieldEnum
    having?: teamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsCountAggregateInputType | true
    _min?: TeamsMinAggregateInputType
    _max?: TeamsMaxAggregateInputType
  }

  export type TeamsGroupByOutputType = {
    id: string
    title: string | null
    content: string | null
    user_id: string | null
    Field: boolean | null
    recruit_status: $Enums.recruit_status | null
    proceed_type: $Enums.proceed_type | null
    img: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  type GetTeamsGroupByPayload<T extends teamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
        }
      >
    >


  export type teamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    user_id?: boolean
    Field?: boolean
    recruit_status?: boolean
    proceed_type?: boolean
    img?: boolean
    created_at?: boolean
    updated_at?: boolean
    apply_history?: boolean | teams$apply_historyArgs<ExtArgs>
    team_stack_positions?: boolean | teams$team_stack_positionsArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type teamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    user_id?: boolean
    Field?: boolean
    recruit_status?: boolean
    proceed_type?: boolean
    img?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["teams"]>

  export type teamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    user_id?: boolean
    Field?: boolean
    recruit_status?: boolean
    proceed_type?: boolean
    img?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["teams"]>

  export type teamsSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    user_id?: boolean
    Field?: boolean
    recruit_status?: boolean
    proceed_type?: boolean
    img?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type teamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "user_id" | "Field" | "recruit_status" | "proceed_type" | "img" | "created_at" | "updated_at", ExtArgs["result"]["teams"]>
  export type teamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apply_history?: boolean | teams$apply_historyArgs<ExtArgs>
    team_stack_positions?: boolean | teams$team_stack_positionsArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type teamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type teamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $teamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teams"
    objects: {
      apply_history: Prisma.$apply_historyPayload<ExtArgs>[]
      team_stack_positions: Prisma.$team_stack_positionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      content: string | null
      user_id: string | null
      Field: boolean | null
      recruit_status: $Enums.recruit_status | null
      proceed_type: $Enums.proceed_type | null
      img: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["teams"]>
    composites: {}
  }

  type teamsGetPayload<S extends boolean | null | undefined | teamsDefaultArgs> = $Result.GetResult<Prisma.$teamsPayload, S>

  type teamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamsCountAggregateInputType | true
    }

  export interface teamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teams'], meta: { name: 'teams' } }
    /**
     * Find zero or one Teams that matches the filter.
     * @param {teamsFindUniqueArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teamsFindUniqueArgs>(args: SelectSubset<T, teamsFindUniqueArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teamsFindUniqueOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teamsFindUniqueOrThrowArgs>(args: SelectSubset<T, teamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindFirstArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teamsFindFirstArgs>(args?: SelectSubset<T, teamsFindFirstArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindFirstOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teamsFindFirstOrThrowArgs>(args?: SelectSubset<T, teamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.teams.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.teams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsWithIdOnly = await prisma.teams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teamsFindManyArgs>(args?: SelectSubset<T, teamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teams.
     * @param {teamsCreateArgs} args - Arguments to create a Teams.
     * @example
     * // Create one Teams
     * const Teams = await prisma.teams.create({
     *   data: {
     *     // ... data to create a Teams
     *   }
     * })
     * 
     */
    create<T extends teamsCreateArgs>(args: SelectSubset<T, teamsCreateArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {teamsCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teamsCreateManyArgs>(args?: SelectSubset<T, teamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {teamsCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends teamsCreateManyAndReturnArgs>(args?: SelectSubset<T, teamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teams.
     * @param {teamsDeleteArgs} args - Arguments to delete one Teams.
     * @example
     * // Delete one Teams
     * const Teams = await prisma.teams.delete({
     *   where: {
     *     // ... filter to delete one Teams
     *   }
     * })
     * 
     */
    delete<T extends teamsDeleteArgs>(args: SelectSubset<T, teamsDeleteArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teams.
     * @param {teamsUpdateArgs} args - Arguments to update one Teams.
     * @example
     * // Update one Teams
     * const teams = await prisma.teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teamsUpdateArgs>(args: SelectSubset<T, teamsUpdateArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {teamsDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teamsDeleteManyArgs>(args?: SelectSubset<T, teamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teamsUpdateManyArgs>(args: SelectSubset<T, teamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {teamsUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.updateManyAndReturn({
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
    updateManyAndReturn<T extends teamsUpdateManyAndReturnArgs>(args: SelectSubset<T, teamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teams.
     * @param {teamsUpsertArgs} args - Arguments to update or create a Teams.
     * @example
     * // Update or create a Teams
     * const teams = await prisma.teams.upsert({
     *   create: {
     *     // ... data to create a Teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams we want to update
     *   }
     * })
     */
    upsert<T extends teamsUpsertArgs>(args: SelectSubset<T, teamsUpsertArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.teams.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends teamsCountArgs>(
      args?: Subset<T, teamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamsAggregateArgs>(args: Subset<T, TeamsAggregateArgs>): Prisma.PrismaPromise<GetTeamsAggregateType<T>>

    /**
     * Group by Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsGroupByArgs} args - Group by arguments.
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
      T extends teamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamsGroupByArgs['orderBy'] }
        : { orderBy?: teamsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, teamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teams model
   */
  readonly fields: teamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apply_history<T extends teams$apply_historyArgs<ExtArgs> = {}>(args?: Subset<T, teams$apply_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apply_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    team_stack_positions<T extends teams$team_stack_positionsArgs<ExtArgs> = {}>(args?: Subset<T, teams$team_stack_positionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_stack_positionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the teams model
   */
  interface teamsFieldRefs {
    readonly id: FieldRef<"teams", 'String'>
    readonly title: FieldRef<"teams", 'String'>
    readonly content: FieldRef<"teams", 'String'>
    readonly user_id: FieldRef<"teams", 'String'>
    readonly Field: FieldRef<"teams", 'Boolean'>
    readonly recruit_status: FieldRef<"teams", 'recruit_status'>
    readonly proceed_type: FieldRef<"teams", 'proceed_type'>
    readonly img: FieldRef<"teams", 'String'>
    readonly created_at: FieldRef<"teams", 'DateTime'>
    readonly updated_at: FieldRef<"teams", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * teams findUnique
   */
  export type teamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams findUniqueOrThrow
   */
  export type teamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams findFirst
   */
  export type teamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * teams findFirstOrThrow
   */
  export type teamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * teams findMany
   */
  export type teamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * teams create
   */
  export type teamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * The data needed to create a teams.
     */
    data?: XOR<teamsCreateInput, teamsUncheckedCreateInput>
  }

  /**
   * teams createMany
   */
  export type teamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamsCreateManyInput | teamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teams createManyAndReturn
   */
  export type teamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * The data used to create many teams.
     */
    data: teamsCreateManyInput | teamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teams update
   */
  export type teamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * The data needed to update a teams.
     */
    data: XOR<teamsUpdateInput, teamsUncheckedUpdateInput>
    /**
     * Choose, which teams to update.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams updateMany
   */
  export type teamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamsUpdateManyMutationInput, teamsUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamsWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
  }

  /**
   * teams updateManyAndReturn
   */
  export type teamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * The data used to update teams.
     */
    data: XOR<teamsUpdateManyMutationInput, teamsUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamsWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
  }

  /**
   * teams upsert
   */
  export type teamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * The filter to search for the teams to update in case it exists.
     */
    where: teamsWhereUniqueInput
    /**
     * In case the teams found by the `where` argument doesn't exist, create a new teams with this data.
     */
    create: XOR<teamsCreateInput, teamsUncheckedCreateInput>
    /**
     * In case the teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamsUpdateInput, teamsUncheckedUpdateInput>
  }

  /**
   * teams delete
   */
  export type teamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter which teams to delete.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams deleteMany
   */
  export type teamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamsWhereInput
    /**
     * Limit how many teams to delete.
     */
    limit?: number
  }

  /**
   * teams.apply_history
   */
  export type teams$apply_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyInclude<ExtArgs> | null
    where?: apply_historyWhereInput
    orderBy?: apply_historyOrderByWithRelationInput | apply_historyOrderByWithRelationInput[]
    cursor?: apply_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Apply_historyScalarFieldEnum | Apply_historyScalarFieldEnum[]
  }

  /**
   * teams.team_stack_positions
   */
  export type teams$team_stack_positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_stack_positions
     */
    select?: team_stack_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_stack_positions
     */
    omit?: team_stack_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_stack_positionsInclude<ExtArgs> | null
    where?: team_stack_positionsWhereInput
    orderBy?: team_stack_positionsOrderByWithRelationInput | team_stack_positionsOrderByWithRelationInput[]
    cursor?: team_stack_positionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_stack_positionsScalarFieldEnum | Team_stack_positionsScalarFieldEnum[]
  }

  /**
   * teams without action
   */
  export type teamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
  }


  /**
   * Model user_stacks
   */

  export type AggregateUser_stacks = {
    _count: User_stacksCountAggregateOutputType | null
    _min: User_stacksMinAggregateOutputType | null
    _max: User_stacksMaxAggregateOutputType | null
  }

  export type User_stacksMinAggregateOutputType = {
    user_id: string | null
    stack_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_stacksMaxAggregateOutputType = {
    user_id: string | null
    stack_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_stacksCountAggregateOutputType = {
    user_id: number
    stack_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_stacksMinAggregateInputType = {
    user_id?: true
    stack_id?: true
    created_at?: true
    updated_at?: true
  }

  export type User_stacksMaxAggregateInputType = {
    user_id?: true
    stack_id?: true
    created_at?: true
    updated_at?: true
  }

  export type User_stacksCountAggregateInputType = {
    user_id?: true
    stack_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_stacksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_stacks to aggregate.
     */
    where?: user_stacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_stacks to fetch.
     */
    orderBy?: user_stacksOrderByWithRelationInput | user_stacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_stacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_stacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_stacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_stacks
    **/
    _count?: true | User_stacksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_stacksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_stacksMaxAggregateInputType
  }

  export type GetUser_stacksAggregateType<T extends User_stacksAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_stacks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_stacks[P]>
      : GetScalarType<T[P], AggregateUser_stacks[P]>
  }




  export type user_stacksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_stacksWhereInput
    orderBy?: user_stacksOrderByWithAggregationInput | user_stacksOrderByWithAggregationInput[]
    by: User_stacksScalarFieldEnum[] | User_stacksScalarFieldEnum
    having?: user_stacksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_stacksCountAggregateInputType | true
    _min?: User_stacksMinAggregateInputType
    _max?: User_stacksMaxAggregateInputType
  }

  export type User_stacksGroupByOutputType = {
    user_id: string
    stack_id: string
    created_at: Date | null
    updated_at: Date | null
    _count: User_stacksCountAggregateOutputType | null
    _min: User_stacksMinAggregateOutputType | null
    _max: User_stacksMaxAggregateOutputType | null
  }

  type GetUser_stacksGroupByPayload<T extends user_stacksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_stacksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_stacksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_stacksGroupByOutputType[P]>
            : GetScalarType<T[P], User_stacksGroupByOutputType[P]>
        }
      >
    >


  export type user_stacksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    stack_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    stacks?: boolean | stacksDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_stacks"]>

  export type user_stacksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    stack_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    stacks?: boolean | stacksDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_stacks"]>

  export type user_stacksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    stack_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    stacks?: boolean | stacksDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_stacks"]>

  export type user_stacksSelectScalar = {
    user_id?: boolean
    stack_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_stacksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "stack_id" | "created_at" | "updated_at", ExtArgs["result"]["user_stacks"]>
  export type user_stacksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stacks?: boolean | stacksDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_stacksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stacks?: boolean | stacksDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_stacksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stacks?: boolean | stacksDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_stacksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_stacks"
    objects: {
      stacks: Prisma.$stacksPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      stack_id: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user_stacks"]>
    composites: {}
  }

  type user_stacksGetPayload<S extends boolean | null | undefined | user_stacksDefaultArgs> = $Result.GetResult<Prisma.$user_stacksPayload, S>

  type user_stacksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_stacksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_stacksCountAggregateInputType | true
    }

  export interface user_stacksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_stacks'], meta: { name: 'user_stacks' } }
    /**
     * Find zero or one User_stacks that matches the filter.
     * @param {user_stacksFindUniqueArgs} args - Arguments to find a User_stacks
     * @example
     * // Get one User_stacks
     * const user_stacks = await prisma.user_stacks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_stacksFindUniqueArgs>(args: SelectSubset<T, user_stacksFindUniqueArgs<ExtArgs>>): Prisma__user_stacksClient<$Result.GetResult<Prisma.$user_stacksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_stacks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_stacksFindUniqueOrThrowArgs} args - Arguments to find a User_stacks
     * @example
     * // Get one User_stacks
     * const user_stacks = await prisma.user_stacks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_stacksFindUniqueOrThrowArgs>(args: SelectSubset<T, user_stacksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_stacksClient<$Result.GetResult<Prisma.$user_stacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_stacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_stacksFindFirstArgs} args - Arguments to find a User_stacks
     * @example
     * // Get one User_stacks
     * const user_stacks = await prisma.user_stacks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_stacksFindFirstArgs>(args?: SelectSubset<T, user_stacksFindFirstArgs<ExtArgs>>): Prisma__user_stacksClient<$Result.GetResult<Prisma.$user_stacksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_stacks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_stacksFindFirstOrThrowArgs} args - Arguments to find a User_stacks
     * @example
     * // Get one User_stacks
     * const user_stacks = await prisma.user_stacks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_stacksFindFirstOrThrowArgs>(args?: SelectSubset<T, user_stacksFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_stacksClient<$Result.GetResult<Prisma.$user_stacksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_stacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_stacksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_stacks
     * const user_stacks = await prisma.user_stacks.findMany()
     * 
     * // Get first 10 User_stacks
     * const user_stacks = await prisma.user_stacks.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_stacksWithUser_idOnly = await prisma.user_stacks.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_stacksFindManyArgs>(args?: SelectSubset<T, user_stacksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_stacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_stacks.
     * @param {user_stacksCreateArgs} args - Arguments to create a User_stacks.
     * @example
     * // Create one User_stacks
     * const User_stacks = await prisma.user_stacks.create({
     *   data: {
     *     // ... data to create a User_stacks
     *   }
     * })
     * 
     */
    create<T extends user_stacksCreateArgs>(args: SelectSubset<T, user_stacksCreateArgs<ExtArgs>>): Prisma__user_stacksClient<$Result.GetResult<Prisma.$user_stacksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_stacks.
     * @param {user_stacksCreateManyArgs} args - Arguments to create many User_stacks.
     * @example
     * // Create many User_stacks
     * const user_stacks = await prisma.user_stacks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_stacksCreateManyArgs>(args?: SelectSubset<T, user_stacksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_stacks and returns the data saved in the database.
     * @param {user_stacksCreateManyAndReturnArgs} args - Arguments to create many User_stacks.
     * @example
     * // Create many User_stacks
     * const user_stacks = await prisma.user_stacks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_stacks and only return the `user_id`
     * const user_stacksWithUser_idOnly = await prisma.user_stacks.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_stacksCreateManyAndReturnArgs>(args?: SelectSubset<T, user_stacksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_stacksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_stacks.
     * @param {user_stacksDeleteArgs} args - Arguments to delete one User_stacks.
     * @example
     * // Delete one User_stacks
     * const User_stacks = await prisma.user_stacks.delete({
     *   where: {
     *     // ... filter to delete one User_stacks
     *   }
     * })
     * 
     */
    delete<T extends user_stacksDeleteArgs>(args: SelectSubset<T, user_stacksDeleteArgs<ExtArgs>>): Prisma__user_stacksClient<$Result.GetResult<Prisma.$user_stacksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_stacks.
     * @param {user_stacksUpdateArgs} args - Arguments to update one User_stacks.
     * @example
     * // Update one User_stacks
     * const user_stacks = await prisma.user_stacks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_stacksUpdateArgs>(args: SelectSubset<T, user_stacksUpdateArgs<ExtArgs>>): Prisma__user_stacksClient<$Result.GetResult<Prisma.$user_stacksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_stacks.
     * @param {user_stacksDeleteManyArgs} args - Arguments to filter User_stacks to delete.
     * @example
     * // Delete a few User_stacks
     * const { count } = await prisma.user_stacks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_stacksDeleteManyArgs>(args?: SelectSubset<T, user_stacksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_stacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_stacksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_stacks
     * const user_stacks = await prisma.user_stacks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_stacksUpdateManyArgs>(args: SelectSubset<T, user_stacksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_stacks and returns the data updated in the database.
     * @param {user_stacksUpdateManyAndReturnArgs} args - Arguments to update many User_stacks.
     * @example
     * // Update many User_stacks
     * const user_stacks = await prisma.user_stacks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_stacks and only return the `user_id`
     * const user_stacksWithUser_idOnly = await prisma.user_stacks.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends user_stacksUpdateManyAndReturnArgs>(args: SelectSubset<T, user_stacksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_stacksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_stacks.
     * @param {user_stacksUpsertArgs} args - Arguments to update or create a User_stacks.
     * @example
     * // Update or create a User_stacks
     * const user_stacks = await prisma.user_stacks.upsert({
     *   create: {
     *     // ... data to create a User_stacks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_stacks we want to update
     *   }
     * })
     */
    upsert<T extends user_stacksUpsertArgs>(args: SelectSubset<T, user_stacksUpsertArgs<ExtArgs>>): Prisma__user_stacksClient<$Result.GetResult<Prisma.$user_stacksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_stacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_stacksCountArgs} args - Arguments to filter User_stacks to count.
     * @example
     * // Count the number of User_stacks
     * const count = await prisma.user_stacks.count({
     *   where: {
     *     // ... the filter for the User_stacks we want to count
     *   }
     * })
    **/
    count<T extends user_stacksCountArgs>(
      args?: Subset<T, user_stacksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_stacksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_stacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_stacksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_stacksAggregateArgs>(args: Subset<T, User_stacksAggregateArgs>): Prisma.PrismaPromise<GetUser_stacksAggregateType<T>>

    /**
     * Group by User_stacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_stacksGroupByArgs} args - Group by arguments.
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
      T extends user_stacksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_stacksGroupByArgs['orderBy'] }
        : { orderBy?: user_stacksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_stacksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_stacksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_stacks model
   */
  readonly fields: user_stacksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_stacks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_stacksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stacks<T extends stacksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stacksDefaultArgs<ExtArgs>>): Prisma__stacksClient<$Result.GetResult<Prisma.$stacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_stacks model
   */
  interface user_stacksFieldRefs {
    readonly user_id: FieldRef<"user_stacks", 'String'>
    readonly stack_id: FieldRef<"user_stacks", 'String'>
    readonly created_at: FieldRef<"user_stacks", 'DateTime'>
    readonly updated_at: FieldRef<"user_stacks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_stacks findUnique
   */
  export type user_stacksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksInclude<ExtArgs> | null
    /**
     * Filter, which user_stacks to fetch.
     */
    where: user_stacksWhereUniqueInput
  }

  /**
   * user_stacks findUniqueOrThrow
   */
  export type user_stacksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksInclude<ExtArgs> | null
    /**
     * Filter, which user_stacks to fetch.
     */
    where: user_stacksWhereUniqueInput
  }

  /**
   * user_stacks findFirst
   */
  export type user_stacksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksInclude<ExtArgs> | null
    /**
     * Filter, which user_stacks to fetch.
     */
    where?: user_stacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_stacks to fetch.
     */
    orderBy?: user_stacksOrderByWithRelationInput | user_stacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_stacks.
     */
    cursor?: user_stacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_stacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_stacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_stacks.
     */
    distinct?: User_stacksScalarFieldEnum | User_stacksScalarFieldEnum[]
  }

  /**
   * user_stacks findFirstOrThrow
   */
  export type user_stacksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksInclude<ExtArgs> | null
    /**
     * Filter, which user_stacks to fetch.
     */
    where?: user_stacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_stacks to fetch.
     */
    orderBy?: user_stacksOrderByWithRelationInput | user_stacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_stacks.
     */
    cursor?: user_stacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_stacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_stacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_stacks.
     */
    distinct?: User_stacksScalarFieldEnum | User_stacksScalarFieldEnum[]
  }

  /**
   * user_stacks findMany
   */
  export type user_stacksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksInclude<ExtArgs> | null
    /**
     * Filter, which user_stacks to fetch.
     */
    where?: user_stacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_stacks to fetch.
     */
    orderBy?: user_stacksOrderByWithRelationInput | user_stacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_stacks.
     */
    cursor?: user_stacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_stacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_stacks.
     */
    skip?: number
    distinct?: User_stacksScalarFieldEnum | User_stacksScalarFieldEnum[]
  }

  /**
   * user_stacks create
   */
  export type user_stacksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksInclude<ExtArgs> | null
    /**
     * The data needed to create a user_stacks.
     */
    data: XOR<user_stacksCreateInput, user_stacksUncheckedCreateInput>
  }

  /**
   * user_stacks createMany
   */
  export type user_stacksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_stacks.
     */
    data: user_stacksCreateManyInput | user_stacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_stacks createManyAndReturn
   */
  export type user_stacksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * The data used to create many user_stacks.
     */
    data: user_stacksCreateManyInput | user_stacksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_stacks update
   */
  export type user_stacksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksInclude<ExtArgs> | null
    /**
     * The data needed to update a user_stacks.
     */
    data: XOR<user_stacksUpdateInput, user_stacksUncheckedUpdateInput>
    /**
     * Choose, which user_stacks to update.
     */
    where: user_stacksWhereUniqueInput
  }

  /**
   * user_stacks updateMany
   */
  export type user_stacksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_stacks.
     */
    data: XOR<user_stacksUpdateManyMutationInput, user_stacksUncheckedUpdateManyInput>
    /**
     * Filter which user_stacks to update
     */
    where?: user_stacksWhereInput
    /**
     * Limit how many user_stacks to update.
     */
    limit?: number
  }

  /**
   * user_stacks updateManyAndReturn
   */
  export type user_stacksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * The data used to update user_stacks.
     */
    data: XOR<user_stacksUpdateManyMutationInput, user_stacksUncheckedUpdateManyInput>
    /**
     * Filter which user_stacks to update
     */
    where?: user_stacksWhereInput
    /**
     * Limit how many user_stacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_stacks upsert
   */
  export type user_stacksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksInclude<ExtArgs> | null
    /**
     * The filter to search for the user_stacks to update in case it exists.
     */
    where: user_stacksWhereUniqueInput
    /**
     * In case the user_stacks found by the `where` argument doesn't exist, create a new user_stacks with this data.
     */
    create: XOR<user_stacksCreateInput, user_stacksUncheckedCreateInput>
    /**
     * In case the user_stacks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_stacksUpdateInput, user_stacksUncheckedUpdateInput>
  }

  /**
   * user_stacks delete
   */
  export type user_stacksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksInclude<ExtArgs> | null
    /**
     * Filter which user_stacks to delete.
     */
    where: user_stacksWhereUniqueInput
  }

  /**
   * user_stacks deleteMany
   */
  export type user_stacksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_stacks to delete
     */
    where?: user_stacksWhereInput
    /**
     * Limit how many user_stacks to delete.
     */
    limit?: number
  }

  /**
   * user_stacks without action
   */
  export type user_stacksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    position_id: string | null
    role: $Enums.roles | null
    name: string | null
    nickname: string | null
    salt: string | null
    github_url: string | null
    img: string | null
    address: string | null
    join_status: boolean | null
    create_at: Date | null
    updated_at: Date | null
    Field: string | null
    preferred_meeting: $Enums.meetings | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    position_id: string | null
    role: $Enums.roles | null
    name: string | null
    nickname: string | null
    salt: string | null
    github_url: string | null
    img: string | null
    address: string | null
    join_status: boolean | null
    create_at: Date | null
    updated_at: Date | null
    Field: string | null
    preferred_meeting: $Enums.meetings | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    position_id: number
    role: number
    name: number
    nickname: number
    salt: number
    github_url: number
    img: number
    address: number
    join_status: number
    create_at: number
    updated_at: number
    Field: number
    preferred_meeting: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    position_id?: true
    role?: true
    name?: true
    nickname?: true
    salt?: true
    github_url?: true
    img?: true
    address?: true
    join_status?: true
    create_at?: true
    updated_at?: true
    Field?: true
    preferred_meeting?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    position_id?: true
    role?: true
    name?: true
    nickname?: true
    salt?: true
    github_url?: true
    img?: true
    address?: true
    join_status?: true
    create_at?: true
    updated_at?: true
    Field?: true
    preferred_meeting?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    position_id?: true
    role?: true
    name?: true
    nickname?: true
    salt?: true
    github_url?: true
    img?: true
    address?: true
    join_status?: true
    create_at?: true
    updated_at?: true
    Field?: true
    preferred_meeting?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    position_id: string | null
    role: $Enums.roles | null
    name: string
    nickname: string | null
    salt: string | null
    github_url: string | null
    img: string | null
    address: string | null
    join_status: boolean | null
    create_at: Date | null
    updated_at: Date | null
    Field: string | null
    preferred_meeting: $Enums.meetings | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position_id?: boolean
    role?: boolean
    name?: boolean
    nickname?: boolean
    salt?: boolean
    github_url?: boolean
    img?: boolean
    address?: boolean
    join_status?: boolean
    create_at?: boolean
    updated_at?: boolean
    Field?: boolean
    preferred_meeting?: boolean
    apply_history?: boolean | users$apply_historyArgs<ExtArgs>
    team_users?: boolean | users$team_usersArgs<ExtArgs>
    user_auths?: boolean | users$user_authsArgs<ExtArgs>
    positions?: boolean | users$positionsArgs<ExtArgs>
    user_stacks?: boolean | users$user_stacksArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position_id?: boolean
    role?: boolean
    name?: boolean
    nickname?: boolean
    salt?: boolean
    github_url?: boolean
    img?: boolean
    address?: boolean
    join_status?: boolean
    create_at?: boolean
    updated_at?: boolean
    Field?: boolean
    preferred_meeting?: boolean
    positions?: boolean | users$positionsArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position_id?: boolean
    role?: boolean
    name?: boolean
    nickname?: boolean
    salt?: boolean
    github_url?: boolean
    img?: boolean
    address?: boolean
    join_status?: boolean
    create_at?: boolean
    updated_at?: boolean
    Field?: boolean
    preferred_meeting?: boolean
    positions?: boolean | users$positionsArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    position_id?: boolean
    role?: boolean
    name?: boolean
    nickname?: boolean
    salt?: boolean
    github_url?: boolean
    img?: boolean
    address?: boolean
    join_status?: boolean
    create_at?: boolean
    updated_at?: boolean
    Field?: boolean
    preferred_meeting?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position_id" | "role" | "name" | "nickname" | "salt" | "github_url" | "img" | "address" | "join_status" | "create_at" | "updated_at" | "Field" | "preferred_meeting", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apply_history?: boolean | users$apply_historyArgs<ExtArgs>
    team_users?: boolean | users$team_usersArgs<ExtArgs>
    user_auths?: boolean | users$user_authsArgs<ExtArgs>
    positions?: boolean | users$positionsArgs<ExtArgs>
    user_stacks?: boolean | users$user_stacksArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    positions?: boolean | users$positionsArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    positions?: boolean | users$positionsArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      apply_history: Prisma.$apply_historyPayload<ExtArgs>[]
      team_users: Prisma.$team_usersPayload<ExtArgs>[]
      user_auths: Prisma.$user_authsPayload<ExtArgs>[]
      positions: Prisma.$positionsPayload<ExtArgs> | null
      user_stacks: Prisma.$user_stacksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      position_id: string | null
      role: $Enums.roles | null
      name: string
      nickname: string | null
      salt: string | null
      github_url: string | null
      img: string | null
      address: string | null
      join_status: boolean | null
      create_at: Date | null
      updated_at: Date | null
      Field: string | null
      preferred_meeting: $Enums.meetings | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apply_history<T extends users$apply_historyArgs<ExtArgs> = {}>(args?: Subset<T, users$apply_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apply_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    team_users<T extends users$team_usersArgs<ExtArgs> = {}>(args?: Subset<T, users$team_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_auths<T extends users$user_authsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_authsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_authsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    positions<T extends users$positionsArgs<ExtArgs> = {}>(args?: Subset<T, users$positionsArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_stacks<T extends users$user_stacksArgs<ExtArgs> = {}>(args?: Subset<T, users$user_stacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_stacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly position_id: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'roles'>
    readonly name: FieldRef<"users", 'String'>
    readonly nickname: FieldRef<"users", 'String'>
    readonly salt: FieldRef<"users", 'String'>
    readonly github_url: FieldRef<"users", 'String'>
    readonly img: FieldRef<"users", 'String'>
    readonly address: FieldRef<"users", 'String'>
    readonly join_status: FieldRef<"users", 'Boolean'>
    readonly create_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly Field: FieldRef<"users", 'String'>
    readonly preferred_meeting: FieldRef<"users", 'meetings'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.apply_history
   */
  export type users$apply_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apply_history
     */
    select?: apply_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apply_history
     */
    omit?: apply_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apply_historyInclude<ExtArgs> | null
    where?: apply_historyWhereInput
    orderBy?: apply_historyOrderByWithRelationInput | apply_historyOrderByWithRelationInput[]
    cursor?: apply_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Apply_historyScalarFieldEnum | Apply_historyScalarFieldEnum[]
  }

  /**
   * users.team_users
   */
  export type users$team_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_users
     */
    select?: team_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_users
     */
    omit?: team_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_usersInclude<ExtArgs> | null
    where?: team_usersWhereInput
    orderBy?: team_usersOrderByWithRelationInput | team_usersOrderByWithRelationInput[]
    cursor?: team_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_usersScalarFieldEnum | Team_usersScalarFieldEnum[]
  }

  /**
   * users.user_auths
   */
  export type users$user_authsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsInclude<ExtArgs> | null
    where?: user_authsWhereInput
    orderBy?: user_authsOrderByWithRelationInput | user_authsOrderByWithRelationInput[]
    cursor?: user_authsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_authsScalarFieldEnum | User_authsScalarFieldEnum[]
  }

  /**
   * users.positions
   */
  export type users$positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionsInclude<ExtArgs> | null
    where?: positionsWhereInput
  }

  /**
   * users.user_stacks
   */
  export type users$user_stacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_stacks
     */
    select?: user_stacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_stacks
     */
    omit?: user_stacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_stacksInclude<ExtArgs> | null
    where?: user_stacksWhereInput
    orderBy?: user_stacksOrderByWithRelationInput | user_stacksOrderByWithRelationInput[]
    cursor?: user_stacksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_stacksScalarFieldEnum | User_stacksScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model user_auths
   */

  export type AggregateUser_auths = {
    _count: User_authsCountAggregateOutputType | null
    _min: User_authsMinAggregateOutputType | null
    _max: User_authsMaxAggregateOutputType | null
  }

  export type User_authsMinAggregateOutputType = {
    user_id: string | null
    auth_id: string | null
    external_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_authsMaxAggregateOutputType = {
    user_id: string | null
    auth_id: string | null
    external_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_authsCountAggregateOutputType = {
    user_id: number
    auth_id: number
    external_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_authsMinAggregateInputType = {
    user_id?: true
    auth_id?: true
    external_id?: true
    created_at?: true
    updated_at?: true
  }

  export type User_authsMaxAggregateInputType = {
    user_id?: true
    auth_id?: true
    external_id?: true
    created_at?: true
    updated_at?: true
  }

  export type User_authsCountAggregateInputType = {
    user_id?: true
    auth_id?: true
    external_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_authsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_auths to aggregate.
     */
    where?: user_authsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_auths to fetch.
     */
    orderBy?: user_authsOrderByWithRelationInput | user_authsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_authsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_auths
    **/
    _count?: true | User_authsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_authsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_authsMaxAggregateInputType
  }

  export type GetUser_authsAggregateType<T extends User_authsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_auths]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_auths[P]>
      : GetScalarType<T[P], AggregateUser_auths[P]>
  }




  export type user_authsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_authsWhereInput
    orderBy?: user_authsOrderByWithAggregationInput | user_authsOrderByWithAggregationInput[]
    by: User_authsScalarFieldEnum[] | User_authsScalarFieldEnum
    having?: user_authsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_authsCountAggregateInputType | true
    _min?: User_authsMinAggregateInputType
    _max?: User_authsMaxAggregateInputType
  }

  export type User_authsGroupByOutputType = {
    user_id: string
    auth_id: string
    external_id: string
    created_at: Date | null
    updated_at: Date | null
    _count: User_authsCountAggregateOutputType | null
    _min: User_authsMinAggregateOutputType | null
    _max: User_authsMaxAggregateOutputType | null
  }

  type GetUser_authsGroupByPayload<T extends user_authsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_authsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_authsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_authsGroupByOutputType[P]>
            : GetScalarType<T[P], User_authsGroupByOutputType[P]>
        }
      >
    >


  export type user_authsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    auth_id?: boolean
    external_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    auth_methods?: boolean | auth_methodsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_auths"]>

  export type user_authsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    auth_id?: boolean
    external_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    auth_methods?: boolean | auth_methodsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_auths"]>

  export type user_authsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    auth_id?: boolean
    external_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    auth_methods?: boolean | auth_methodsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_auths"]>

  export type user_authsSelectScalar = {
    user_id?: boolean
    auth_id?: boolean
    external_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_authsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "auth_id" | "external_id" | "created_at" | "updated_at", ExtArgs["result"]["user_auths"]>
  export type user_authsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_methods?: boolean | auth_methodsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_authsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_methods?: boolean | auth_methodsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_authsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_methods?: boolean | auth_methodsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_authsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_auths"
    objects: {
      auth_methods: Prisma.$auth_methodsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      auth_id: string
      external_id: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user_auths"]>
    composites: {}
  }

  type user_authsGetPayload<S extends boolean | null | undefined | user_authsDefaultArgs> = $Result.GetResult<Prisma.$user_authsPayload, S>

  type user_authsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_authsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_authsCountAggregateInputType | true
    }

  export interface user_authsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_auths'], meta: { name: 'user_auths' } }
    /**
     * Find zero or one User_auths that matches the filter.
     * @param {user_authsFindUniqueArgs} args - Arguments to find a User_auths
     * @example
     * // Get one User_auths
     * const user_auths = await prisma.user_auths.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_authsFindUniqueArgs>(args: SelectSubset<T, user_authsFindUniqueArgs<ExtArgs>>): Prisma__user_authsClient<$Result.GetResult<Prisma.$user_authsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_auths that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_authsFindUniqueOrThrowArgs} args - Arguments to find a User_auths
     * @example
     * // Get one User_auths
     * const user_auths = await prisma.user_auths.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_authsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_authsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_authsClient<$Result.GetResult<Prisma.$user_authsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_auths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_authsFindFirstArgs} args - Arguments to find a User_auths
     * @example
     * // Get one User_auths
     * const user_auths = await prisma.user_auths.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_authsFindFirstArgs>(args?: SelectSubset<T, user_authsFindFirstArgs<ExtArgs>>): Prisma__user_authsClient<$Result.GetResult<Prisma.$user_authsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_auths that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_authsFindFirstOrThrowArgs} args - Arguments to find a User_auths
     * @example
     * // Get one User_auths
     * const user_auths = await prisma.user_auths.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_authsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_authsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_authsClient<$Result.GetResult<Prisma.$user_authsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_auths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_authsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_auths
     * const user_auths = await prisma.user_auths.findMany()
     * 
     * // Get first 10 User_auths
     * const user_auths = await prisma.user_auths.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_authsWithUser_idOnly = await prisma.user_auths.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_authsFindManyArgs>(args?: SelectSubset<T, user_authsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_authsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_auths.
     * @param {user_authsCreateArgs} args - Arguments to create a User_auths.
     * @example
     * // Create one User_auths
     * const User_auths = await prisma.user_auths.create({
     *   data: {
     *     // ... data to create a User_auths
     *   }
     * })
     * 
     */
    create<T extends user_authsCreateArgs>(args: SelectSubset<T, user_authsCreateArgs<ExtArgs>>): Prisma__user_authsClient<$Result.GetResult<Prisma.$user_authsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_auths.
     * @param {user_authsCreateManyArgs} args - Arguments to create many User_auths.
     * @example
     * // Create many User_auths
     * const user_auths = await prisma.user_auths.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_authsCreateManyArgs>(args?: SelectSubset<T, user_authsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_auths and returns the data saved in the database.
     * @param {user_authsCreateManyAndReturnArgs} args - Arguments to create many User_auths.
     * @example
     * // Create many User_auths
     * const user_auths = await prisma.user_auths.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_auths and only return the `user_id`
     * const user_authsWithUser_idOnly = await prisma.user_auths.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_authsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_authsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_authsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_auths.
     * @param {user_authsDeleteArgs} args - Arguments to delete one User_auths.
     * @example
     * // Delete one User_auths
     * const User_auths = await prisma.user_auths.delete({
     *   where: {
     *     // ... filter to delete one User_auths
     *   }
     * })
     * 
     */
    delete<T extends user_authsDeleteArgs>(args: SelectSubset<T, user_authsDeleteArgs<ExtArgs>>): Prisma__user_authsClient<$Result.GetResult<Prisma.$user_authsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_auths.
     * @param {user_authsUpdateArgs} args - Arguments to update one User_auths.
     * @example
     * // Update one User_auths
     * const user_auths = await prisma.user_auths.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_authsUpdateArgs>(args: SelectSubset<T, user_authsUpdateArgs<ExtArgs>>): Prisma__user_authsClient<$Result.GetResult<Prisma.$user_authsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_auths.
     * @param {user_authsDeleteManyArgs} args - Arguments to filter User_auths to delete.
     * @example
     * // Delete a few User_auths
     * const { count } = await prisma.user_auths.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_authsDeleteManyArgs>(args?: SelectSubset<T, user_authsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_authsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_auths
     * const user_auths = await prisma.user_auths.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_authsUpdateManyArgs>(args: SelectSubset<T, user_authsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_auths and returns the data updated in the database.
     * @param {user_authsUpdateManyAndReturnArgs} args - Arguments to update many User_auths.
     * @example
     * // Update many User_auths
     * const user_auths = await prisma.user_auths.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_auths and only return the `user_id`
     * const user_authsWithUser_idOnly = await prisma.user_auths.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends user_authsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_authsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_authsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_auths.
     * @param {user_authsUpsertArgs} args - Arguments to update or create a User_auths.
     * @example
     * // Update or create a User_auths
     * const user_auths = await prisma.user_auths.upsert({
     *   create: {
     *     // ... data to create a User_auths
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_auths we want to update
     *   }
     * })
     */
    upsert<T extends user_authsUpsertArgs>(args: SelectSubset<T, user_authsUpsertArgs<ExtArgs>>): Prisma__user_authsClient<$Result.GetResult<Prisma.$user_authsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_authsCountArgs} args - Arguments to filter User_auths to count.
     * @example
     * // Count the number of User_auths
     * const count = await prisma.user_auths.count({
     *   where: {
     *     // ... the filter for the User_auths we want to count
     *   }
     * })
    **/
    count<T extends user_authsCountArgs>(
      args?: Subset<T, user_authsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_authsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_authsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_authsAggregateArgs>(args: Subset<T, User_authsAggregateArgs>): Prisma.PrismaPromise<GetUser_authsAggregateType<T>>

    /**
     * Group by User_auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_authsGroupByArgs} args - Group by arguments.
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
      T extends user_authsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_authsGroupByArgs['orderBy'] }
        : { orderBy?: user_authsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_authsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_authsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_auths model
   */
  readonly fields: user_authsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_auths.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_authsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth_methods<T extends auth_methodsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, auth_methodsDefaultArgs<ExtArgs>>): Prisma__auth_methodsClient<$Result.GetResult<Prisma.$auth_methodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_auths model
   */
  interface user_authsFieldRefs {
    readonly user_id: FieldRef<"user_auths", 'String'>
    readonly auth_id: FieldRef<"user_auths", 'String'>
    readonly external_id: FieldRef<"user_auths", 'String'>
    readonly created_at: FieldRef<"user_auths", 'DateTime'>
    readonly updated_at: FieldRef<"user_auths", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_auths findUnique
   */
  export type user_authsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsInclude<ExtArgs> | null
    /**
     * Filter, which user_auths to fetch.
     */
    where: user_authsWhereUniqueInput
  }

  /**
   * user_auths findUniqueOrThrow
   */
  export type user_authsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsInclude<ExtArgs> | null
    /**
     * Filter, which user_auths to fetch.
     */
    where: user_authsWhereUniqueInput
  }

  /**
   * user_auths findFirst
   */
  export type user_authsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsInclude<ExtArgs> | null
    /**
     * Filter, which user_auths to fetch.
     */
    where?: user_authsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_auths to fetch.
     */
    orderBy?: user_authsOrderByWithRelationInput | user_authsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_auths.
     */
    cursor?: user_authsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_auths.
     */
    distinct?: User_authsScalarFieldEnum | User_authsScalarFieldEnum[]
  }

  /**
   * user_auths findFirstOrThrow
   */
  export type user_authsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsInclude<ExtArgs> | null
    /**
     * Filter, which user_auths to fetch.
     */
    where?: user_authsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_auths to fetch.
     */
    orderBy?: user_authsOrderByWithRelationInput | user_authsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_auths.
     */
    cursor?: user_authsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_auths.
     */
    distinct?: User_authsScalarFieldEnum | User_authsScalarFieldEnum[]
  }

  /**
   * user_auths findMany
   */
  export type user_authsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsInclude<ExtArgs> | null
    /**
     * Filter, which user_auths to fetch.
     */
    where?: user_authsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_auths to fetch.
     */
    orderBy?: user_authsOrderByWithRelationInput | user_authsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_auths.
     */
    cursor?: user_authsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_auths.
     */
    skip?: number
    distinct?: User_authsScalarFieldEnum | User_authsScalarFieldEnum[]
  }

  /**
   * user_auths create
   */
  export type user_authsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_auths.
     */
    data: XOR<user_authsCreateInput, user_authsUncheckedCreateInput>
  }

  /**
   * user_auths createMany
   */
  export type user_authsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_auths.
     */
    data: user_authsCreateManyInput | user_authsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_auths createManyAndReturn
   */
  export type user_authsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * The data used to create many user_auths.
     */
    data: user_authsCreateManyInput | user_authsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_auths update
   */
  export type user_authsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_auths.
     */
    data: XOR<user_authsUpdateInput, user_authsUncheckedUpdateInput>
    /**
     * Choose, which user_auths to update.
     */
    where: user_authsWhereUniqueInput
  }

  /**
   * user_auths updateMany
   */
  export type user_authsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_auths.
     */
    data: XOR<user_authsUpdateManyMutationInput, user_authsUncheckedUpdateManyInput>
    /**
     * Filter which user_auths to update
     */
    where?: user_authsWhereInput
    /**
     * Limit how many user_auths to update.
     */
    limit?: number
  }

  /**
   * user_auths updateManyAndReturn
   */
  export type user_authsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * The data used to update user_auths.
     */
    data: XOR<user_authsUpdateManyMutationInput, user_authsUncheckedUpdateManyInput>
    /**
     * Filter which user_auths to update
     */
    where?: user_authsWhereInput
    /**
     * Limit how many user_auths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_auths upsert
   */
  export type user_authsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_auths to update in case it exists.
     */
    where: user_authsWhereUniqueInput
    /**
     * In case the user_auths found by the `where` argument doesn't exist, create a new user_auths with this data.
     */
    create: XOR<user_authsCreateInput, user_authsUncheckedCreateInput>
    /**
     * In case the user_auths was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_authsUpdateInput, user_authsUncheckedUpdateInput>
  }

  /**
   * user_auths delete
   */
  export type user_authsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsInclude<ExtArgs> | null
    /**
     * Filter which user_auths to delete.
     */
    where: user_authsWhereUniqueInput
  }

  /**
   * user_auths deleteMany
   */
  export type user_authsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_auths to delete
     */
    where?: user_authsWhereInput
    /**
     * Limit how many user_auths to delete.
     */
    limit?: number
  }

  /**
   * user_auths without action
   */
  export type user_authsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsInclude<ExtArgs> | null
  }


  /**
   * Model auth_methods
   */

  export type AggregateAuth_methods = {
    _count: Auth_methodsCountAggregateOutputType | null
    _min: Auth_methodsMinAggregateOutputType | null
    _max: Auth_methodsMaxAggregateOutputType | null
  }

  export type Auth_methodsMinAggregateOutputType = {
    id: string | null
    auth_method: $Enums.auth_method | null
    platform: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Auth_methodsMaxAggregateOutputType = {
    id: string | null
    auth_method: $Enums.auth_method | null
    platform: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Auth_methodsCountAggregateOutputType = {
    id: number
    auth_method: number
    platform: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Auth_methodsMinAggregateInputType = {
    id?: true
    auth_method?: true
    platform?: true
    created_at?: true
    updated_at?: true
  }

  export type Auth_methodsMaxAggregateInputType = {
    id?: true
    auth_method?: true
    platform?: true
    created_at?: true
    updated_at?: true
  }

  export type Auth_methodsCountAggregateInputType = {
    id?: true
    auth_method?: true
    platform?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Auth_methodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_methods to aggregate.
     */
    where?: auth_methodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_methods to fetch.
     */
    orderBy?: auth_methodsOrderByWithRelationInput | auth_methodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_methodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_methods
    **/
    _count?: true | Auth_methodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_methodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_methodsMaxAggregateInputType
  }

  export type GetAuth_methodsAggregateType<T extends Auth_methodsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_methods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_methods[P]>
      : GetScalarType<T[P], AggregateAuth_methods[P]>
  }




  export type auth_methodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_methodsWhereInput
    orderBy?: auth_methodsOrderByWithAggregationInput | auth_methodsOrderByWithAggregationInput[]
    by: Auth_methodsScalarFieldEnum[] | Auth_methodsScalarFieldEnum
    having?: auth_methodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_methodsCountAggregateInputType | true
    _min?: Auth_methodsMinAggregateInputType
    _max?: Auth_methodsMaxAggregateInputType
  }

  export type Auth_methodsGroupByOutputType = {
    id: string
    auth_method: $Enums.auth_method | null
    platform: string
    created_at: Date | null
    updated_at: Date | null
    _count: Auth_methodsCountAggregateOutputType | null
    _min: Auth_methodsMinAggregateOutputType | null
    _max: Auth_methodsMaxAggregateOutputType | null
  }

  type GetAuth_methodsGroupByPayload<T extends auth_methodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_methodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_methodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_methodsGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_methodsGroupByOutputType[P]>
        }
      >
    >


  export type auth_methodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth_method?: boolean
    platform?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_auths?: boolean | auth_methods$user_authsArgs<ExtArgs>
    _count?: boolean | Auth_methodsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_methods"]>

  export type auth_methodsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth_method?: boolean
    platform?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["auth_methods"]>

  export type auth_methodsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth_method?: boolean
    platform?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["auth_methods"]>

  export type auth_methodsSelectScalar = {
    id?: boolean
    auth_method?: boolean
    platform?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type auth_methodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "auth_method" | "platform" | "created_at" | "updated_at", ExtArgs["result"]["auth_methods"]>
  export type auth_methodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_auths?: boolean | auth_methods$user_authsArgs<ExtArgs>
    _count?: boolean | Auth_methodsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type auth_methodsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type auth_methodsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $auth_methodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_methods"
    objects: {
      user_auths: Prisma.$user_authsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auth_method: $Enums.auth_method | null
      platform: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["auth_methods"]>
    composites: {}
  }

  type auth_methodsGetPayload<S extends boolean | null | undefined | auth_methodsDefaultArgs> = $Result.GetResult<Prisma.$auth_methodsPayload, S>

  type auth_methodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auth_methodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auth_methodsCountAggregateInputType | true
    }

  export interface auth_methodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth_methods'], meta: { name: 'auth_methods' } }
    /**
     * Find zero or one Auth_methods that matches the filter.
     * @param {auth_methodsFindUniqueArgs} args - Arguments to find a Auth_methods
     * @example
     * // Get one Auth_methods
     * const auth_methods = await prisma.auth_methods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auth_methodsFindUniqueArgs>(args: SelectSubset<T, auth_methodsFindUniqueArgs<ExtArgs>>): Prisma__auth_methodsClient<$Result.GetResult<Prisma.$auth_methodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth_methods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auth_methodsFindUniqueOrThrowArgs} args - Arguments to find a Auth_methods
     * @example
     * // Get one Auth_methods
     * const auth_methods = await prisma.auth_methods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auth_methodsFindUniqueOrThrowArgs>(args: SelectSubset<T, auth_methodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auth_methodsClient<$Result.GetResult<Prisma.$auth_methodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_methods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_methodsFindFirstArgs} args - Arguments to find a Auth_methods
     * @example
     * // Get one Auth_methods
     * const auth_methods = await prisma.auth_methods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auth_methodsFindFirstArgs>(args?: SelectSubset<T, auth_methodsFindFirstArgs<ExtArgs>>): Prisma__auth_methodsClient<$Result.GetResult<Prisma.$auth_methodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_methods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_methodsFindFirstOrThrowArgs} args - Arguments to find a Auth_methods
     * @example
     * // Get one Auth_methods
     * const auth_methods = await prisma.auth_methods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auth_methodsFindFirstOrThrowArgs>(args?: SelectSubset<T, auth_methodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__auth_methodsClient<$Result.GetResult<Prisma.$auth_methodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auth_methods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_methodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_methods
     * const auth_methods = await prisma.auth_methods.findMany()
     * 
     * // Get first 10 Auth_methods
     * const auth_methods = await prisma.auth_methods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_methodsWithIdOnly = await prisma.auth_methods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auth_methodsFindManyArgs>(args?: SelectSubset<T, auth_methodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_methodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth_methods.
     * @param {auth_methodsCreateArgs} args - Arguments to create a Auth_methods.
     * @example
     * // Create one Auth_methods
     * const Auth_methods = await prisma.auth_methods.create({
     *   data: {
     *     // ... data to create a Auth_methods
     *   }
     * })
     * 
     */
    create<T extends auth_methodsCreateArgs>(args: SelectSubset<T, auth_methodsCreateArgs<ExtArgs>>): Prisma__auth_methodsClient<$Result.GetResult<Prisma.$auth_methodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auth_methods.
     * @param {auth_methodsCreateManyArgs} args - Arguments to create many Auth_methods.
     * @example
     * // Create many Auth_methods
     * const auth_methods = await prisma.auth_methods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auth_methodsCreateManyArgs>(args?: SelectSubset<T, auth_methodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auth_methods and returns the data saved in the database.
     * @param {auth_methodsCreateManyAndReturnArgs} args - Arguments to create many Auth_methods.
     * @example
     * // Create many Auth_methods
     * const auth_methods = await prisma.auth_methods.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auth_methods and only return the `id`
     * const auth_methodsWithIdOnly = await prisma.auth_methods.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auth_methodsCreateManyAndReturnArgs>(args?: SelectSubset<T, auth_methodsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_methodsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth_methods.
     * @param {auth_methodsDeleteArgs} args - Arguments to delete one Auth_methods.
     * @example
     * // Delete one Auth_methods
     * const Auth_methods = await prisma.auth_methods.delete({
     *   where: {
     *     // ... filter to delete one Auth_methods
     *   }
     * })
     * 
     */
    delete<T extends auth_methodsDeleteArgs>(args: SelectSubset<T, auth_methodsDeleteArgs<ExtArgs>>): Prisma__auth_methodsClient<$Result.GetResult<Prisma.$auth_methodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth_methods.
     * @param {auth_methodsUpdateArgs} args - Arguments to update one Auth_methods.
     * @example
     * // Update one Auth_methods
     * const auth_methods = await prisma.auth_methods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auth_methodsUpdateArgs>(args: SelectSubset<T, auth_methodsUpdateArgs<ExtArgs>>): Prisma__auth_methodsClient<$Result.GetResult<Prisma.$auth_methodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auth_methods.
     * @param {auth_methodsDeleteManyArgs} args - Arguments to filter Auth_methods to delete.
     * @example
     * // Delete a few Auth_methods
     * const { count } = await prisma.auth_methods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auth_methodsDeleteManyArgs>(args?: SelectSubset<T, auth_methodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_methodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_methods
     * const auth_methods = await prisma.auth_methods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auth_methodsUpdateManyArgs>(args: SelectSubset<T, auth_methodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_methods and returns the data updated in the database.
     * @param {auth_methodsUpdateManyAndReturnArgs} args - Arguments to update many Auth_methods.
     * @example
     * // Update many Auth_methods
     * const auth_methods = await prisma.auth_methods.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auth_methods and only return the `id`
     * const auth_methodsWithIdOnly = await prisma.auth_methods.updateManyAndReturn({
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
    updateManyAndReturn<T extends auth_methodsUpdateManyAndReturnArgs>(args: SelectSubset<T, auth_methodsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_methodsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth_methods.
     * @param {auth_methodsUpsertArgs} args - Arguments to update or create a Auth_methods.
     * @example
     * // Update or create a Auth_methods
     * const auth_methods = await prisma.auth_methods.upsert({
     *   create: {
     *     // ... data to create a Auth_methods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_methods we want to update
     *   }
     * })
     */
    upsert<T extends auth_methodsUpsertArgs>(args: SelectSubset<T, auth_methodsUpsertArgs<ExtArgs>>): Prisma__auth_methodsClient<$Result.GetResult<Prisma.$auth_methodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auth_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_methodsCountArgs} args - Arguments to filter Auth_methods to count.
     * @example
     * // Count the number of Auth_methods
     * const count = await prisma.auth_methods.count({
     *   where: {
     *     // ... the filter for the Auth_methods we want to count
     *   }
     * })
    **/
    count<T extends auth_methodsCountArgs>(
      args?: Subset<T, auth_methodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_methodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_methodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Auth_methodsAggregateArgs>(args: Subset<T, Auth_methodsAggregateArgs>): Prisma.PrismaPromise<GetAuth_methodsAggregateType<T>>

    /**
     * Group by Auth_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_methodsGroupByArgs} args - Group by arguments.
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
      T extends auth_methodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auth_methodsGroupByArgs['orderBy'] }
        : { orderBy?: auth_methodsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, auth_methodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_methodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth_methods model
   */
  readonly fields: auth_methodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_methods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auth_methodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_auths<T extends auth_methods$user_authsArgs<ExtArgs> = {}>(args?: Subset<T, auth_methods$user_authsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_authsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the auth_methods model
   */
  interface auth_methodsFieldRefs {
    readonly id: FieldRef<"auth_methods", 'String'>
    readonly auth_method: FieldRef<"auth_methods", 'auth_method'>
    readonly platform: FieldRef<"auth_methods", 'String'>
    readonly created_at: FieldRef<"auth_methods", 'DateTime'>
    readonly updated_at: FieldRef<"auth_methods", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * auth_methods findUnique
   */
  export type auth_methodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_methods
     */
    select?: auth_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_methods
     */
    omit?: auth_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_methodsInclude<ExtArgs> | null
    /**
     * Filter, which auth_methods to fetch.
     */
    where: auth_methodsWhereUniqueInput
  }

  /**
   * auth_methods findUniqueOrThrow
   */
  export type auth_methodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_methods
     */
    select?: auth_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_methods
     */
    omit?: auth_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_methodsInclude<ExtArgs> | null
    /**
     * Filter, which auth_methods to fetch.
     */
    where: auth_methodsWhereUniqueInput
  }

  /**
   * auth_methods findFirst
   */
  export type auth_methodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_methods
     */
    select?: auth_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_methods
     */
    omit?: auth_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_methodsInclude<ExtArgs> | null
    /**
     * Filter, which auth_methods to fetch.
     */
    where?: auth_methodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_methods to fetch.
     */
    orderBy?: auth_methodsOrderByWithRelationInput | auth_methodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_methods.
     */
    cursor?: auth_methodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_methods.
     */
    distinct?: Auth_methodsScalarFieldEnum | Auth_methodsScalarFieldEnum[]
  }

  /**
   * auth_methods findFirstOrThrow
   */
  export type auth_methodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_methods
     */
    select?: auth_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_methods
     */
    omit?: auth_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_methodsInclude<ExtArgs> | null
    /**
     * Filter, which auth_methods to fetch.
     */
    where?: auth_methodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_methods to fetch.
     */
    orderBy?: auth_methodsOrderByWithRelationInput | auth_methodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_methods.
     */
    cursor?: auth_methodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_methods.
     */
    distinct?: Auth_methodsScalarFieldEnum | Auth_methodsScalarFieldEnum[]
  }

  /**
   * auth_methods findMany
   */
  export type auth_methodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_methods
     */
    select?: auth_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_methods
     */
    omit?: auth_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_methodsInclude<ExtArgs> | null
    /**
     * Filter, which auth_methods to fetch.
     */
    where?: auth_methodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_methods to fetch.
     */
    orderBy?: auth_methodsOrderByWithRelationInput | auth_methodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_methods.
     */
    cursor?: auth_methodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_methods.
     */
    skip?: number
    distinct?: Auth_methodsScalarFieldEnum | Auth_methodsScalarFieldEnum[]
  }

  /**
   * auth_methods create
   */
  export type auth_methodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_methods
     */
    select?: auth_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_methods
     */
    omit?: auth_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_methodsInclude<ExtArgs> | null
    /**
     * The data needed to create a auth_methods.
     */
    data: XOR<auth_methodsCreateInput, auth_methodsUncheckedCreateInput>
  }

  /**
   * auth_methods createMany
   */
  export type auth_methodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auth_methods.
     */
    data: auth_methodsCreateManyInput | auth_methodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_methods createManyAndReturn
   */
  export type auth_methodsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_methods
     */
    select?: auth_methodsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_methods
     */
    omit?: auth_methodsOmit<ExtArgs> | null
    /**
     * The data used to create many auth_methods.
     */
    data: auth_methodsCreateManyInput | auth_methodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_methods update
   */
  export type auth_methodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_methods
     */
    select?: auth_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_methods
     */
    omit?: auth_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_methodsInclude<ExtArgs> | null
    /**
     * The data needed to update a auth_methods.
     */
    data: XOR<auth_methodsUpdateInput, auth_methodsUncheckedUpdateInput>
    /**
     * Choose, which auth_methods to update.
     */
    where: auth_methodsWhereUniqueInput
  }

  /**
   * auth_methods updateMany
   */
  export type auth_methodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auth_methods.
     */
    data: XOR<auth_methodsUpdateManyMutationInput, auth_methodsUncheckedUpdateManyInput>
    /**
     * Filter which auth_methods to update
     */
    where?: auth_methodsWhereInput
    /**
     * Limit how many auth_methods to update.
     */
    limit?: number
  }

  /**
   * auth_methods updateManyAndReturn
   */
  export type auth_methodsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_methods
     */
    select?: auth_methodsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_methods
     */
    omit?: auth_methodsOmit<ExtArgs> | null
    /**
     * The data used to update auth_methods.
     */
    data: XOR<auth_methodsUpdateManyMutationInput, auth_methodsUncheckedUpdateManyInput>
    /**
     * Filter which auth_methods to update
     */
    where?: auth_methodsWhereInput
    /**
     * Limit how many auth_methods to update.
     */
    limit?: number
  }

  /**
   * auth_methods upsert
   */
  export type auth_methodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_methods
     */
    select?: auth_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_methods
     */
    omit?: auth_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_methodsInclude<ExtArgs> | null
    /**
     * The filter to search for the auth_methods to update in case it exists.
     */
    where: auth_methodsWhereUniqueInput
    /**
     * In case the auth_methods found by the `where` argument doesn't exist, create a new auth_methods with this data.
     */
    create: XOR<auth_methodsCreateInput, auth_methodsUncheckedCreateInput>
    /**
     * In case the auth_methods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_methodsUpdateInput, auth_methodsUncheckedUpdateInput>
  }

  /**
   * auth_methods delete
   */
  export type auth_methodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_methods
     */
    select?: auth_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_methods
     */
    omit?: auth_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_methodsInclude<ExtArgs> | null
    /**
     * Filter which auth_methods to delete.
     */
    where: auth_methodsWhereUniqueInput
  }

  /**
   * auth_methods deleteMany
   */
  export type auth_methodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_methods to delete
     */
    where?: auth_methodsWhereInput
    /**
     * Limit how many auth_methods to delete.
     */
    limit?: number
  }

  /**
   * auth_methods.user_auths
   */
  export type auth_methods$user_authsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_auths
     */
    select?: user_authsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_auths
     */
    omit?: user_authsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_authsInclude<ExtArgs> | null
    where?: user_authsWhereInput
    orderBy?: user_authsOrderByWithRelationInput | user_authsOrderByWithRelationInput[]
    cursor?: user_authsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_authsScalarFieldEnum | User_authsScalarFieldEnum[]
  }

  /**
   * auth_methods without action
   */
  export type auth_methodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_methods
     */
    select?: auth_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_methods
     */
    omit?: auth_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_methodsInclude<ExtArgs> | null
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


  export const Apply_historyScalarFieldEnum: {
    id: 'id',
    team_id: 'team_id',
    user_id: 'user_id',
    ment: 'ment',
    apply_status: 'apply_status',
    apply_from: 'apply_from',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Apply_historyScalarFieldEnum = (typeof Apply_historyScalarFieldEnum)[keyof typeof Apply_historyScalarFieldEnum]


  export const PositionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PositionsScalarFieldEnum = (typeof PositionsScalarFieldEnum)[keyof typeof PositionsScalarFieldEnum]


  export const Stack_categoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Stack_categoriesScalarFieldEnum = (typeof Stack_categoriesScalarFieldEnum)[keyof typeof Stack_categoriesScalarFieldEnum]


  export const StacksScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    name: 'name',
    img_url: 'img_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StacksScalarFieldEnum = (typeof StacksScalarFieldEnum)[keyof typeof StacksScalarFieldEnum]


  export const Team_stack_positionsScalarFieldEnum: {
    id: 'id',
    team_id: 'team_id',
    stack_id: 'stack_id',
    position_id: 'position_id',
    status: 'status',
    recruit_status: 'recruit_status',
    count: 'count',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Team_stack_positionsScalarFieldEnum = (typeof Team_stack_positionsScalarFieldEnum)[keyof typeof Team_stack_positionsScalarFieldEnum]


  export const Team_usersScalarFieldEnum: {
    user_id: 'user_id',
    team_position_id: 'team_position_id',
    isOwner: 'isOwner',
    message: 'message',
    member_status: 'member_status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Team_usersScalarFieldEnum = (typeof Team_usersScalarFieldEnum)[keyof typeof Team_usersScalarFieldEnum]


  export const TeamsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    user_id: 'user_id',
    Field: 'Field',
    recruit_status: 'recruit_status',
    proceed_type: 'proceed_type',
    img: 'img',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TeamsScalarFieldEnum = (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]


  export const User_stacksScalarFieldEnum: {
    user_id: 'user_id',
    stack_id: 'stack_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_stacksScalarFieldEnum = (typeof User_stacksScalarFieldEnum)[keyof typeof User_stacksScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    position_id: 'position_id',
    role: 'role',
    name: 'name',
    nickname: 'nickname',
    salt: 'salt',
    github_url: 'github_url',
    img: 'img',
    address: 'address',
    join_status: 'join_status',
    create_at: 'create_at',
    updated_at: 'updated_at',
    Field: 'Field',
    preferred_meeting: 'preferred_meeting'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const User_authsScalarFieldEnum: {
    user_id: 'user_id',
    auth_id: 'auth_id',
    external_id: 'external_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_authsScalarFieldEnum = (typeof User_authsScalarFieldEnum)[keyof typeof User_authsScalarFieldEnum]


  export const Auth_methodsScalarFieldEnum: {
    id: 'id',
    auth_method: 'auth_method',
    platform: 'platform',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Auth_methodsScalarFieldEnum = (typeof Auth_methodsScalarFieldEnum)[keyof typeof Auth_methodsScalarFieldEnum]


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
   * Reference to a field of type 'apply_status'
   */
  export type Enumapply_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'apply_status'>
    


  /**
   * Reference to a field of type 'apply_status[]'
   */
  export type ListEnumapply_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'apply_status[]'>
    


  /**
   * Reference to a field of type 'apply_from'
   */
  export type Enumapply_fromFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'apply_from'>
    


  /**
   * Reference to a field of type 'apply_from[]'
   */
  export type ListEnumapply_fromFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'apply_from[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'recruit_status'
   */
  export type Enumrecruit_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'recruit_status'>
    


  /**
   * Reference to a field of type 'recruit_status[]'
   */
  export type ListEnumrecruit_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'recruit_status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'member_status'
   */
  export type Enummember_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'member_status'>
    


  /**
   * Reference to a field of type 'member_status[]'
   */
  export type ListEnummember_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'member_status[]'>
    


  /**
   * Reference to a field of type 'proceed_type'
   */
  export type Enumproceed_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'proceed_type'>
    


  /**
   * Reference to a field of type 'proceed_type[]'
   */
  export type ListEnumproceed_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'proceed_type[]'>
    


  /**
   * Reference to a field of type 'roles'
   */
  export type EnumrolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'roles'>
    


  /**
   * Reference to a field of type 'roles[]'
   */
  export type ListEnumrolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'roles[]'>
    


  /**
   * Reference to a field of type 'meetings'
   */
  export type EnummeetingsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'meetings'>
    


  /**
   * Reference to a field of type 'meetings[]'
   */
  export type ListEnummeetingsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'meetings[]'>
    


  /**
   * Reference to a field of type 'auth_method'
   */
  export type Enumauth_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'auth_method'>
    


  /**
   * Reference to a field of type 'auth_method[]'
   */
  export type ListEnumauth_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'auth_method[]'>
    


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


  export type apply_historyWhereInput = {
    AND?: apply_historyWhereInput | apply_historyWhereInput[]
    OR?: apply_historyWhereInput[]
    NOT?: apply_historyWhereInput | apply_historyWhereInput[]
    id?: UuidFilter<"apply_history"> | string
    team_id?: UuidFilter<"apply_history"> | string
    user_id?: UuidFilter<"apply_history"> | string
    ment?: StringNullableFilter<"apply_history"> | string | null
    apply_status?: Enumapply_statusNullableFilter<"apply_history"> | $Enums.apply_status | null
    apply_from?: Enumapply_fromFilter<"apply_history"> | $Enums.apply_from
    created_at?: DateTimeNullableFilter<"apply_history"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"apply_history"> | Date | string | null
    teams?: XOR<TeamsScalarRelationFilter, teamsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type apply_historyOrderByWithRelationInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    ment?: SortOrderInput | SortOrder
    apply_status?: SortOrderInput | SortOrder
    apply_from?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    teams?: teamsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type apply_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: apply_historyWhereInput | apply_historyWhereInput[]
    OR?: apply_historyWhereInput[]
    NOT?: apply_historyWhereInput | apply_historyWhereInput[]
    team_id?: UuidFilter<"apply_history"> | string
    user_id?: UuidFilter<"apply_history"> | string
    ment?: StringNullableFilter<"apply_history"> | string | null
    apply_status?: Enumapply_statusNullableFilter<"apply_history"> | $Enums.apply_status | null
    apply_from?: Enumapply_fromFilter<"apply_history"> | $Enums.apply_from
    created_at?: DateTimeNullableFilter<"apply_history"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"apply_history"> | Date | string | null
    teams?: XOR<TeamsScalarRelationFilter, teamsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type apply_historyOrderByWithAggregationInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    ment?: SortOrderInput | SortOrder
    apply_status?: SortOrderInput | SortOrder
    apply_from?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: apply_historyCountOrderByAggregateInput
    _max?: apply_historyMaxOrderByAggregateInput
    _min?: apply_historyMinOrderByAggregateInput
  }

  export type apply_historyScalarWhereWithAggregatesInput = {
    AND?: apply_historyScalarWhereWithAggregatesInput | apply_historyScalarWhereWithAggregatesInput[]
    OR?: apply_historyScalarWhereWithAggregatesInput[]
    NOT?: apply_historyScalarWhereWithAggregatesInput | apply_historyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"apply_history"> | string
    team_id?: UuidWithAggregatesFilter<"apply_history"> | string
    user_id?: UuidWithAggregatesFilter<"apply_history"> | string
    ment?: StringNullableWithAggregatesFilter<"apply_history"> | string | null
    apply_status?: Enumapply_statusNullableWithAggregatesFilter<"apply_history"> | $Enums.apply_status | null
    apply_from?: Enumapply_fromWithAggregatesFilter<"apply_history"> | $Enums.apply_from
    created_at?: DateTimeNullableWithAggregatesFilter<"apply_history"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"apply_history"> | Date | string | null
  }

  export type positionsWhereInput = {
    AND?: positionsWhereInput | positionsWhereInput[]
    OR?: positionsWhereInput[]
    NOT?: positionsWhereInput | positionsWhereInput[]
    id?: UuidFilter<"positions"> | string
    name?: StringNullableFilter<"positions"> | string | null
    created_at?: DateTimeNullableFilter<"positions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"positions"> | Date | string | null
    team_stack_positions?: Team_stack_positionsListRelationFilter
    users?: UsersListRelationFilter
  }

  export type positionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    team_stack_positions?: team_stack_positionsOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type positionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: positionsWhereInput | positionsWhereInput[]
    OR?: positionsWhereInput[]
    NOT?: positionsWhereInput | positionsWhereInput[]
    name?: StringNullableFilter<"positions"> | string | null
    created_at?: DateTimeNullableFilter<"positions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"positions"> | Date | string | null
    team_stack_positions?: Team_stack_positionsListRelationFilter
    users?: UsersListRelationFilter
  }, "id">

  export type positionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: positionsCountOrderByAggregateInput
    _max?: positionsMaxOrderByAggregateInput
    _min?: positionsMinOrderByAggregateInput
  }

  export type positionsScalarWhereWithAggregatesInput = {
    AND?: positionsScalarWhereWithAggregatesInput | positionsScalarWhereWithAggregatesInput[]
    OR?: positionsScalarWhereWithAggregatesInput[]
    NOT?: positionsScalarWhereWithAggregatesInput | positionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"positions"> | string
    name?: StringNullableWithAggregatesFilter<"positions"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"positions"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"positions"> | Date | string | null
  }

  export type stack_categoriesWhereInput = {
    AND?: stack_categoriesWhereInput | stack_categoriesWhereInput[]
    OR?: stack_categoriesWhereInput[]
    NOT?: stack_categoriesWhereInput | stack_categoriesWhereInput[]
    id?: UuidFilter<"stack_categories"> | string
    name?: StringNullableFilter<"stack_categories"> | string | null
    created_at?: DateTimeNullableFilter<"stack_categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"stack_categories"> | Date | string | null
    stacks?: StacksListRelationFilter
  }

  export type stack_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    stacks?: stacksOrderByRelationAggregateInput
  }

  export type stack_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: stack_categoriesWhereInput | stack_categoriesWhereInput[]
    OR?: stack_categoriesWhereInput[]
    NOT?: stack_categoriesWhereInput | stack_categoriesWhereInput[]
    name?: StringNullableFilter<"stack_categories"> | string | null
    created_at?: DateTimeNullableFilter<"stack_categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"stack_categories"> | Date | string | null
    stacks?: StacksListRelationFilter
  }, "id">

  export type stack_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: stack_categoriesCountOrderByAggregateInput
    _max?: stack_categoriesMaxOrderByAggregateInput
    _min?: stack_categoriesMinOrderByAggregateInput
  }

  export type stack_categoriesScalarWhereWithAggregatesInput = {
    AND?: stack_categoriesScalarWhereWithAggregatesInput | stack_categoriesScalarWhereWithAggregatesInput[]
    OR?: stack_categoriesScalarWhereWithAggregatesInput[]
    NOT?: stack_categoriesScalarWhereWithAggregatesInput | stack_categoriesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"stack_categories"> | string
    name?: StringNullableWithAggregatesFilter<"stack_categories"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"stack_categories"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"stack_categories"> | Date | string | null
  }

  export type stacksWhereInput = {
    AND?: stacksWhereInput | stacksWhereInput[]
    OR?: stacksWhereInput[]
    NOT?: stacksWhereInput | stacksWhereInput[]
    id?: UuidFilter<"stacks"> | string
    category_id?: UuidFilter<"stacks"> | string
    name?: StringNullableFilter<"stacks"> | string | null
    img_url?: StringFilter<"stacks"> | string
    created_at?: DateTimeNullableFilter<"stacks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"stacks"> | Date | string | null
    stack_categories?: XOR<Stack_categoriesScalarRelationFilter, stack_categoriesWhereInput>
    team_stack_positions?: Team_stack_positionsListRelationFilter
    user_stacks?: User_stacksListRelationFilter
  }

  export type stacksOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrderInput | SortOrder
    img_url?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    stack_categories?: stack_categoriesOrderByWithRelationInput
    team_stack_positions?: team_stack_positionsOrderByRelationAggregateInput
    user_stacks?: user_stacksOrderByRelationAggregateInput
  }

  export type stacksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: stacksWhereInput | stacksWhereInput[]
    OR?: stacksWhereInput[]
    NOT?: stacksWhereInput | stacksWhereInput[]
    category_id?: UuidFilter<"stacks"> | string
    name?: StringNullableFilter<"stacks"> | string | null
    img_url?: StringFilter<"stacks"> | string
    created_at?: DateTimeNullableFilter<"stacks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"stacks"> | Date | string | null
    stack_categories?: XOR<Stack_categoriesScalarRelationFilter, stack_categoriesWhereInput>
    team_stack_positions?: Team_stack_positionsListRelationFilter
    user_stacks?: User_stacksListRelationFilter
  }, "id">

  export type stacksOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrderInput | SortOrder
    img_url?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: stacksCountOrderByAggregateInput
    _max?: stacksMaxOrderByAggregateInput
    _min?: stacksMinOrderByAggregateInput
  }

  export type stacksScalarWhereWithAggregatesInput = {
    AND?: stacksScalarWhereWithAggregatesInput | stacksScalarWhereWithAggregatesInput[]
    OR?: stacksScalarWhereWithAggregatesInput[]
    NOT?: stacksScalarWhereWithAggregatesInput | stacksScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"stacks"> | string
    category_id?: UuidWithAggregatesFilter<"stacks"> | string
    name?: StringNullableWithAggregatesFilter<"stacks"> | string | null
    img_url?: StringWithAggregatesFilter<"stacks"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"stacks"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"stacks"> | Date | string | null
  }

  export type team_stack_positionsWhereInput = {
    AND?: team_stack_positionsWhereInput | team_stack_positionsWhereInput[]
    OR?: team_stack_positionsWhereInput[]
    NOT?: team_stack_positionsWhereInput | team_stack_positionsWhereInput[]
    id?: UuidFilter<"team_stack_positions"> | string
    team_id?: UuidFilter<"team_stack_positions"> | string
    stack_id?: UuidFilter<"team_stack_positions"> | string
    position_id?: UuidFilter<"team_stack_positions"> | string
    status?: BoolFilter<"team_stack_positions"> | boolean
    recruit_status?: Enumrecruit_statusNullableFilter<"team_stack_positions"> | $Enums.recruit_status | null
    count?: IntNullableFilter<"team_stack_positions"> | number | null
    created_at?: DateTimeNullableFilter<"team_stack_positions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"team_stack_positions"> | Date | string | null
    positions?: XOR<PositionsScalarRelationFilter, positionsWhereInput>
    stacks?: XOR<StacksScalarRelationFilter, stacksWhereInput>
    teams?: XOR<TeamsScalarRelationFilter, teamsWhereInput>
    team_users?: Team_usersListRelationFilter
  }

  export type team_stack_positionsOrderByWithRelationInput = {
    id?: SortOrder
    team_id?: SortOrder
    stack_id?: SortOrder
    position_id?: SortOrder
    status?: SortOrder
    recruit_status?: SortOrderInput | SortOrder
    count?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    positions?: positionsOrderByWithRelationInput
    stacks?: stacksOrderByWithRelationInput
    teams?: teamsOrderByWithRelationInput
    team_users?: team_usersOrderByRelationAggregateInput
  }

  export type team_stack_positionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: team_stack_positionsWhereInput | team_stack_positionsWhereInput[]
    OR?: team_stack_positionsWhereInput[]
    NOT?: team_stack_positionsWhereInput | team_stack_positionsWhereInput[]
    team_id?: UuidFilter<"team_stack_positions"> | string
    stack_id?: UuidFilter<"team_stack_positions"> | string
    position_id?: UuidFilter<"team_stack_positions"> | string
    status?: BoolFilter<"team_stack_positions"> | boolean
    recruit_status?: Enumrecruit_statusNullableFilter<"team_stack_positions"> | $Enums.recruit_status | null
    count?: IntNullableFilter<"team_stack_positions"> | number | null
    created_at?: DateTimeNullableFilter<"team_stack_positions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"team_stack_positions"> | Date | string | null
    positions?: XOR<PositionsScalarRelationFilter, positionsWhereInput>
    stacks?: XOR<StacksScalarRelationFilter, stacksWhereInput>
    teams?: XOR<TeamsScalarRelationFilter, teamsWhereInput>
    team_users?: Team_usersListRelationFilter
  }, "id">

  export type team_stack_positionsOrderByWithAggregationInput = {
    id?: SortOrder
    team_id?: SortOrder
    stack_id?: SortOrder
    position_id?: SortOrder
    status?: SortOrder
    recruit_status?: SortOrderInput | SortOrder
    count?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: team_stack_positionsCountOrderByAggregateInput
    _avg?: team_stack_positionsAvgOrderByAggregateInput
    _max?: team_stack_positionsMaxOrderByAggregateInput
    _min?: team_stack_positionsMinOrderByAggregateInput
    _sum?: team_stack_positionsSumOrderByAggregateInput
  }

  export type team_stack_positionsScalarWhereWithAggregatesInput = {
    AND?: team_stack_positionsScalarWhereWithAggregatesInput | team_stack_positionsScalarWhereWithAggregatesInput[]
    OR?: team_stack_positionsScalarWhereWithAggregatesInput[]
    NOT?: team_stack_positionsScalarWhereWithAggregatesInput | team_stack_positionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"team_stack_positions"> | string
    team_id?: UuidWithAggregatesFilter<"team_stack_positions"> | string
    stack_id?: UuidWithAggregatesFilter<"team_stack_positions"> | string
    position_id?: UuidWithAggregatesFilter<"team_stack_positions"> | string
    status?: BoolWithAggregatesFilter<"team_stack_positions"> | boolean
    recruit_status?: Enumrecruit_statusNullableWithAggregatesFilter<"team_stack_positions"> | $Enums.recruit_status | null
    count?: IntNullableWithAggregatesFilter<"team_stack_positions"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"team_stack_positions"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"team_stack_positions"> | Date | string | null
  }

  export type team_usersWhereInput = {
    AND?: team_usersWhereInput | team_usersWhereInput[]
    OR?: team_usersWhereInput[]
    NOT?: team_usersWhereInput | team_usersWhereInput[]
    user_id?: UuidFilter<"team_users"> | string
    team_position_id?: UuidFilter<"team_users"> | string
    isOwner?: BoolNullableFilter<"team_users"> | boolean | null
    message?: StringNullableFilter<"team_users"> | string | null
    member_status?: Enummember_statusNullableFilter<"team_users"> | $Enums.member_status | null
    created_at?: DateTimeNullableFilter<"team_users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"team_users"> | Date | string | null
    team_stack_positions?: XOR<Team_stack_positionsScalarRelationFilter, team_stack_positionsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type team_usersOrderByWithRelationInput = {
    user_id?: SortOrder
    team_position_id?: SortOrder
    isOwner?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    member_status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    team_stack_positions?: team_stack_positionsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type team_usersWhereUniqueInput = Prisma.AtLeast<{
    user_id_team_position_id?: team_usersUser_idTeam_position_idCompoundUniqueInput
    AND?: team_usersWhereInput | team_usersWhereInput[]
    OR?: team_usersWhereInput[]
    NOT?: team_usersWhereInput | team_usersWhereInput[]
    user_id?: UuidFilter<"team_users"> | string
    team_position_id?: UuidFilter<"team_users"> | string
    isOwner?: BoolNullableFilter<"team_users"> | boolean | null
    message?: StringNullableFilter<"team_users"> | string | null
    member_status?: Enummember_statusNullableFilter<"team_users"> | $Enums.member_status | null
    created_at?: DateTimeNullableFilter<"team_users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"team_users"> | Date | string | null
    team_stack_positions?: XOR<Team_stack_positionsScalarRelationFilter, team_stack_positionsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id_team_position_id">

  export type team_usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    team_position_id?: SortOrder
    isOwner?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    member_status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: team_usersCountOrderByAggregateInput
    _max?: team_usersMaxOrderByAggregateInput
    _min?: team_usersMinOrderByAggregateInput
  }

  export type team_usersScalarWhereWithAggregatesInput = {
    AND?: team_usersScalarWhereWithAggregatesInput | team_usersScalarWhereWithAggregatesInput[]
    OR?: team_usersScalarWhereWithAggregatesInput[]
    NOT?: team_usersScalarWhereWithAggregatesInput | team_usersScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"team_users"> | string
    team_position_id?: UuidWithAggregatesFilter<"team_users"> | string
    isOwner?: BoolNullableWithAggregatesFilter<"team_users"> | boolean | null
    message?: StringNullableWithAggregatesFilter<"team_users"> | string | null
    member_status?: Enummember_statusNullableWithAggregatesFilter<"team_users"> | $Enums.member_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"team_users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"team_users"> | Date | string | null
  }

  export type teamsWhereInput = {
    AND?: teamsWhereInput | teamsWhereInput[]
    OR?: teamsWhereInput[]
    NOT?: teamsWhereInput | teamsWhereInput[]
    id?: UuidFilter<"teams"> | string
    title?: StringNullableFilter<"teams"> | string | null
    content?: StringNullableFilter<"teams"> | string | null
    user_id?: UuidNullableFilter<"teams"> | string | null
    Field?: BoolNullableFilter<"teams"> | boolean | null
    recruit_status?: Enumrecruit_statusNullableFilter<"teams"> | $Enums.recruit_status | null
    proceed_type?: Enumproceed_typeNullableFilter<"teams"> | $Enums.proceed_type | null
    img?: StringNullableFilter<"teams"> | string | null
    created_at?: DateTimeNullableFilter<"teams"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"teams"> | Date | string | null
    apply_history?: Apply_historyListRelationFilter
    team_stack_positions?: Team_stack_positionsListRelationFilter
  }

  export type teamsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    Field?: SortOrderInput | SortOrder
    recruit_status?: SortOrderInput | SortOrder
    proceed_type?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    apply_history?: apply_historyOrderByRelationAggregateInput
    team_stack_positions?: team_stack_positionsOrderByRelationAggregateInput
  }

  export type teamsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: teamsWhereInput | teamsWhereInput[]
    OR?: teamsWhereInput[]
    NOT?: teamsWhereInput | teamsWhereInput[]
    title?: StringNullableFilter<"teams"> | string | null
    content?: StringNullableFilter<"teams"> | string | null
    user_id?: UuidNullableFilter<"teams"> | string | null
    Field?: BoolNullableFilter<"teams"> | boolean | null
    recruit_status?: Enumrecruit_statusNullableFilter<"teams"> | $Enums.recruit_status | null
    proceed_type?: Enumproceed_typeNullableFilter<"teams"> | $Enums.proceed_type | null
    img?: StringNullableFilter<"teams"> | string | null
    created_at?: DateTimeNullableFilter<"teams"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"teams"> | Date | string | null
    apply_history?: Apply_historyListRelationFilter
    team_stack_positions?: Team_stack_positionsListRelationFilter
  }, "id">

  export type teamsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    Field?: SortOrderInput | SortOrder
    recruit_status?: SortOrderInput | SortOrder
    proceed_type?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: teamsCountOrderByAggregateInput
    _max?: teamsMaxOrderByAggregateInput
    _min?: teamsMinOrderByAggregateInput
  }

  export type teamsScalarWhereWithAggregatesInput = {
    AND?: teamsScalarWhereWithAggregatesInput | teamsScalarWhereWithAggregatesInput[]
    OR?: teamsScalarWhereWithAggregatesInput[]
    NOT?: teamsScalarWhereWithAggregatesInput | teamsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"teams"> | string
    title?: StringNullableWithAggregatesFilter<"teams"> | string | null
    content?: StringNullableWithAggregatesFilter<"teams"> | string | null
    user_id?: UuidNullableWithAggregatesFilter<"teams"> | string | null
    Field?: BoolNullableWithAggregatesFilter<"teams"> | boolean | null
    recruit_status?: Enumrecruit_statusNullableWithAggregatesFilter<"teams"> | $Enums.recruit_status | null
    proceed_type?: Enumproceed_typeNullableWithAggregatesFilter<"teams"> | $Enums.proceed_type | null
    img?: StringNullableWithAggregatesFilter<"teams"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"teams"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"teams"> | Date | string | null
  }

  export type user_stacksWhereInput = {
    AND?: user_stacksWhereInput | user_stacksWhereInput[]
    OR?: user_stacksWhereInput[]
    NOT?: user_stacksWhereInput | user_stacksWhereInput[]
    user_id?: UuidFilter<"user_stacks"> | string
    stack_id?: UuidFilter<"user_stacks"> | string
    created_at?: DateTimeNullableFilter<"user_stacks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_stacks"> | Date | string | null
    stacks?: XOR<StacksScalarRelationFilter, stacksWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_stacksOrderByWithRelationInput = {
    user_id?: SortOrder
    stack_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    stacks?: stacksOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_stacksWhereUniqueInput = Prisma.AtLeast<{
    user_id_stack_id?: user_stacksUser_idStack_idCompoundUniqueInput
    AND?: user_stacksWhereInput | user_stacksWhereInput[]
    OR?: user_stacksWhereInput[]
    NOT?: user_stacksWhereInput | user_stacksWhereInput[]
    user_id?: UuidFilter<"user_stacks"> | string
    stack_id?: UuidFilter<"user_stacks"> | string
    created_at?: DateTimeNullableFilter<"user_stacks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_stacks"> | Date | string | null
    stacks?: XOR<StacksScalarRelationFilter, stacksWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id_stack_id">

  export type user_stacksOrderByWithAggregationInput = {
    user_id?: SortOrder
    stack_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: user_stacksCountOrderByAggregateInput
    _max?: user_stacksMaxOrderByAggregateInput
    _min?: user_stacksMinOrderByAggregateInput
  }

  export type user_stacksScalarWhereWithAggregatesInput = {
    AND?: user_stacksScalarWhereWithAggregatesInput | user_stacksScalarWhereWithAggregatesInput[]
    OR?: user_stacksScalarWhereWithAggregatesInput[]
    NOT?: user_stacksScalarWhereWithAggregatesInput | user_stacksScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"user_stacks"> | string
    stack_id?: UuidWithAggregatesFilter<"user_stacks"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"user_stacks"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_stacks"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    position_id?: UuidNullableFilter<"users"> | string | null
    role?: EnumrolesNullableFilter<"users"> | $Enums.roles | null
    name?: StringFilter<"users"> | string
    nickname?: StringNullableFilter<"users"> | string | null
    salt?: StringNullableFilter<"users"> | string | null
    github_url?: StringNullableFilter<"users"> | string | null
    img?: StringNullableFilter<"users"> | string | null
    address?: StringNullableFilter<"users"> | string | null
    join_status?: BoolNullableFilter<"users"> | boolean | null
    create_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    Field?: StringNullableFilter<"users"> | string | null
    preferred_meeting?: EnummeetingsNullableFilter<"users"> | $Enums.meetings | null
    apply_history?: Apply_historyListRelationFilter
    team_users?: Team_usersListRelationFilter
    user_auths?: User_authsListRelationFilter
    positions?: XOR<PositionsNullableScalarRelationFilter, positionsWhereInput> | null
    user_stacks?: User_stacksListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    position_id?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    name?: SortOrder
    nickname?: SortOrderInput | SortOrder
    salt?: SortOrderInput | SortOrder
    github_url?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    join_status?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Field?: SortOrderInput | SortOrder
    preferred_meeting?: SortOrderInput | SortOrder
    apply_history?: apply_historyOrderByRelationAggregateInput
    team_users?: team_usersOrderByRelationAggregateInput
    user_auths?: user_authsOrderByRelationAggregateInput
    positions?: positionsOrderByWithRelationInput
    user_stacks?: user_stacksOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    position_id?: UuidNullableFilter<"users"> | string | null
    role?: EnumrolesNullableFilter<"users"> | $Enums.roles | null
    name?: StringFilter<"users"> | string
    nickname?: StringNullableFilter<"users"> | string | null
    salt?: StringNullableFilter<"users"> | string | null
    github_url?: StringNullableFilter<"users"> | string | null
    img?: StringNullableFilter<"users"> | string | null
    address?: StringNullableFilter<"users"> | string | null
    join_status?: BoolNullableFilter<"users"> | boolean | null
    create_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    Field?: StringNullableFilter<"users"> | string | null
    preferred_meeting?: EnummeetingsNullableFilter<"users"> | $Enums.meetings | null
    apply_history?: Apply_historyListRelationFilter
    team_users?: Team_usersListRelationFilter
    user_auths?: User_authsListRelationFilter
    positions?: XOR<PositionsNullableScalarRelationFilter, positionsWhereInput> | null
    user_stacks?: User_stacksListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    position_id?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    name?: SortOrder
    nickname?: SortOrderInput | SortOrder
    salt?: SortOrderInput | SortOrder
    github_url?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    join_status?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Field?: SortOrderInput | SortOrder
    preferred_meeting?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    position_id?: UuidNullableWithAggregatesFilter<"users"> | string | null
    role?: EnumrolesNullableWithAggregatesFilter<"users"> | $Enums.roles | null
    name?: StringWithAggregatesFilter<"users"> | string
    nickname?: StringNullableWithAggregatesFilter<"users"> | string | null
    salt?: StringNullableWithAggregatesFilter<"users"> | string | null
    github_url?: StringNullableWithAggregatesFilter<"users"> | string | null
    img?: StringNullableWithAggregatesFilter<"users"> | string | null
    address?: StringNullableWithAggregatesFilter<"users"> | string | null
    join_status?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    create_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    Field?: StringNullableWithAggregatesFilter<"users"> | string | null
    preferred_meeting?: EnummeetingsNullableWithAggregatesFilter<"users"> | $Enums.meetings | null
  }

  export type user_authsWhereInput = {
    AND?: user_authsWhereInput | user_authsWhereInput[]
    OR?: user_authsWhereInput[]
    NOT?: user_authsWhereInput | user_authsWhereInput[]
    user_id?: UuidFilter<"user_auths"> | string
    auth_id?: UuidFilter<"user_auths"> | string
    external_id?: StringFilter<"user_auths"> | string
    created_at?: DateTimeNullableFilter<"user_auths"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_auths"> | Date | string | null
    auth_methods?: XOR<Auth_methodsScalarRelationFilter, auth_methodsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_authsOrderByWithRelationInput = {
    user_id?: SortOrder
    auth_id?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    auth_methods?: auth_methodsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_authsWhereUniqueInput = Prisma.AtLeast<{
    user_id_auth_id?: user_authsUser_idAuth_idCompoundUniqueInput
    AND?: user_authsWhereInput | user_authsWhereInput[]
    OR?: user_authsWhereInput[]
    NOT?: user_authsWhereInput | user_authsWhereInput[]
    user_id?: UuidFilter<"user_auths"> | string
    auth_id?: UuidFilter<"user_auths"> | string
    external_id?: StringFilter<"user_auths"> | string
    created_at?: DateTimeNullableFilter<"user_auths"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_auths"> | Date | string | null
    auth_methods?: XOR<Auth_methodsScalarRelationFilter, auth_methodsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id_auth_id">

  export type user_authsOrderByWithAggregationInput = {
    user_id?: SortOrder
    auth_id?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: user_authsCountOrderByAggregateInput
    _max?: user_authsMaxOrderByAggregateInput
    _min?: user_authsMinOrderByAggregateInput
  }

  export type user_authsScalarWhereWithAggregatesInput = {
    AND?: user_authsScalarWhereWithAggregatesInput | user_authsScalarWhereWithAggregatesInput[]
    OR?: user_authsScalarWhereWithAggregatesInput[]
    NOT?: user_authsScalarWhereWithAggregatesInput | user_authsScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"user_auths"> | string
    auth_id?: UuidWithAggregatesFilter<"user_auths"> | string
    external_id?: StringWithAggregatesFilter<"user_auths"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"user_auths"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_auths"> | Date | string | null
  }

  export type auth_methodsWhereInput = {
    AND?: auth_methodsWhereInput | auth_methodsWhereInput[]
    OR?: auth_methodsWhereInput[]
    NOT?: auth_methodsWhereInput | auth_methodsWhereInput[]
    id?: UuidFilter<"auth_methods"> | string
    auth_method?: Enumauth_methodNullableFilter<"auth_methods"> | $Enums.auth_method | null
    platform?: StringFilter<"auth_methods"> | string
    created_at?: DateTimeNullableFilter<"auth_methods"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"auth_methods"> | Date | string | null
    user_auths?: User_authsListRelationFilter
  }

  export type auth_methodsOrderByWithRelationInput = {
    id?: SortOrder
    auth_method?: SortOrderInput | SortOrder
    platform?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_auths?: user_authsOrderByRelationAggregateInput
  }

  export type auth_methodsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: auth_methodsWhereInput | auth_methodsWhereInput[]
    OR?: auth_methodsWhereInput[]
    NOT?: auth_methodsWhereInput | auth_methodsWhereInput[]
    auth_method?: Enumauth_methodNullableFilter<"auth_methods"> | $Enums.auth_method | null
    platform?: StringFilter<"auth_methods"> | string
    created_at?: DateTimeNullableFilter<"auth_methods"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"auth_methods"> | Date | string | null
    user_auths?: User_authsListRelationFilter
  }, "id">

  export type auth_methodsOrderByWithAggregationInput = {
    id?: SortOrder
    auth_method?: SortOrderInput | SortOrder
    platform?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: auth_methodsCountOrderByAggregateInput
    _max?: auth_methodsMaxOrderByAggregateInput
    _min?: auth_methodsMinOrderByAggregateInput
  }

  export type auth_methodsScalarWhereWithAggregatesInput = {
    AND?: auth_methodsScalarWhereWithAggregatesInput | auth_methodsScalarWhereWithAggregatesInput[]
    OR?: auth_methodsScalarWhereWithAggregatesInput[]
    NOT?: auth_methodsScalarWhereWithAggregatesInput | auth_methodsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"auth_methods"> | string
    auth_method?: Enumauth_methodNullableWithAggregatesFilter<"auth_methods"> | $Enums.auth_method | null
    platform?: StringWithAggregatesFilter<"auth_methods"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"auth_methods"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"auth_methods"> | Date | string | null
  }

  export type apply_historyCreateInput = {
    id?: string
    ment?: string | null
    apply_status?: $Enums.apply_status | null
    apply_from: $Enums.apply_from
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teams: teamsCreateNestedOneWithoutApply_historyInput
    users: usersCreateNestedOneWithoutApply_historyInput
  }

  export type apply_historyUncheckedCreateInput = {
    id?: string
    team_id: string
    user_id: string
    ment?: string | null
    apply_status?: $Enums.apply_status | null
    apply_from: $Enums.apply_from
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type apply_historyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ment?: NullableStringFieldUpdateOperationsInput | string | null
    apply_status?: NullableEnumapply_statusFieldUpdateOperationsInput | $Enums.apply_status | null
    apply_from?: Enumapply_fromFieldUpdateOperationsInput | $Enums.apply_from
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: teamsUpdateOneRequiredWithoutApply_historyNestedInput
    users?: usersUpdateOneRequiredWithoutApply_historyNestedInput
  }

  export type apply_historyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ment?: NullableStringFieldUpdateOperationsInput | string | null
    apply_status?: NullableEnumapply_statusFieldUpdateOperationsInput | $Enums.apply_status | null
    apply_from?: Enumapply_fromFieldUpdateOperationsInput | $Enums.apply_from
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type apply_historyCreateManyInput = {
    id?: string
    team_id: string
    user_id: string
    ment?: string | null
    apply_status?: $Enums.apply_status | null
    apply_from: $Enums.apply_from
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type apply_historyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ment?: NullableStringFieldUpdateOperationsInput | string | null
    apply_status?: NullableEnumapply_statusFieldUpdateOperationsInput | $Enums.apply_status | null
    apply_from?: Enumapply_fromFieldUpdateOperationsInput | $Enums.apply_from
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type apply_historyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ment?: NullableStringFieldUpdateOperationsInput | string | null
    apply_status?: NullableEnumapply_statusFieldUpdateOperationsInput | $Enums.apply_status | null
    apply_from?: Enumapply_fromFieldUpdateOperationsInput | $Enums.apply_from
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type positionsCreateInput = {
    id?: string
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_stack_positions?: team_stack_positionsCreateNestedManyWithoutPositionsInput
    users?: usersCreateNestedManyWithoutPositionsInput
  }

  export type positionsUncheckedCreateInput = {
    id?: string
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_stack_positions?: team_stack_positionsUncheckedCreateNestedManyWithoutPositionsInput
    users?: usersUncheckedCreateNestedManyWithoutPositionsInput
  }

  export type positionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_stack_positions?: team_stack_positionsUpdateManyWithoutPositionsNestedInput
    users?: usersUpdateManyWithoutPositionsNestedInput
  }

  export type positionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_stack_positions?: team_stack_positionsUncheckedUpdateManyWithoutPositionsNestedInput
    users?: usersUncheckedUpdateManyWithoutPositionsNestedInput
  }

  export type positionsCreateManyInput = {
    id?: string
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type positionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type positionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stack_categoriesCreateInput = {
    id?: string
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    stacks?: stacksCreateNestedManyWithoutStack_categoriesInput
  }

  export type stack_categoriesUncheckedCreateInput = {
    id?: string
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    stacks?: stacksUncheckedCreateNestedManyWithoutStack_categoriesInput
  }

  export type stack_categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stacks?: stacksUpdateManyWithoutStack_categoriesNestedInput
  }

  export type stack_categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stacks?: stacksUncheckedUpdateManyWithoutStack_categoriesNestedInput
  }

  export type stack_categoriesCreateManyInput = {
    id?: string
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type stack_categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stack_categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stacksCreateInput = {
    id?: string
    name?: string | null
    img_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    stack_categories: stack_categoriesCreateNestedOneWithoutStacksInput
    team_stack_positions?: team_stack_positionsCreateNestedManyWithoutStacksInput
    user_stacks?: user_stacksCreateNestedManyWithoutStacksInput
  }

  export type stacksUncheckedCreateInput = {
    id?: string
    category_id: string
    name?: string | null
    img_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_stack_positions?: team_stack_positionsUncheckedCreateNestedManyWithoutStacksInput
    user_stacks?: user_stacksUncheckedCreateNestedManyWithoutStacksInput
  }

  export type stacksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stack_categories?: stack_categoriesUpdateOneRequiredWithoutStacksNestedInput
    team_stack_positions?: team_stack_positionsUpdateManyWithoutStacksNestedInput
    user_stacks?: user_stacksUpdateManyWithoutStacksNestedInput
  }

  export type stacksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_stack_positions?: team_stack_positionsUncheckedUpdateManyWithoutStacksNestedInput
    user_stacks?: user_stacksUncheckedUpdateManyWithoutStacksNestedInput
  }

  export type stacksCreateManyInput = {
    id?: string
    category_id: string
    name?: string | null
    img_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type stacksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stacksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_stack_positionsCreateInput = {
    id?: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    positions: positionsCreateNestedOneWithoutTeam_stack_positionsInput
    stacks: stacksCreateNestedOneWithoutTeam_stack_positionsInput
    teams: teamsCreateNestedOneWithoutTeam_stack_positionsInput
    team_users?: team_usersCreateNestedManyWithoutTeam_stack_positionsInput
  }

  export type team_stack_positionsUncheckedCreateInput = {
    id?: string
    team_id: string
    stack_id: string
    position_id: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_users?: team_usersUncheckedCreateNestedManyWithoutTeam_stack_positionsInput
  }

  export type team_stack_positionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    positions?: positionsUpdateOneRequiredWithoutTeam_stack_positionsNestedInput
    stacks?: stacksUpdateOneRequiredWithoutTeam_stack_positionsNestedInput
    teams?: teamsUpdateOneRequiredWithoutTeam_stack_positionsNestedInput
    team_users?: team_usersUpdateManyWithoutTeam_stack_positionsNestedInput
  }

  export type team_stack_positionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    stack_id?: StringFieldUpdateOperationsInput | string
    position_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_users?: team_usersUncheckedUpdateManyWithoutTeam_stack_positionsNestedInput
  }

  export type team_stack_positionsCreateManyInput = {
    id?: string
    team_id: string
    stack_id: string
    position_id: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_stack_positionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_stack_positionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    stack_id?: StringFieldUpdateOperationsInput | string
    position_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_usersCreateInput = {
    isOwner?: boolean | null
    message?: string | null
    member_status?: $Enums.member_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_stack_positions?: team_stack_positionsCreateNestedOneWithoutTeam_usersInput
    users: usersCreateNestedOneWithoutTeam_usersInput
  }

  export type team_usersUncheckedCreateInput = {
    user_id: string
    team_position_id?: string
    isOwner?: boolean | null
    message?: string | null
    member_status?: $Enums.member_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_usersUpdateInput = {
    isOwner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    member_status?: NullableEnummember_statusFieldUpdateOperationsInput | $Enums.member_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_stack_positions?: team_stack_positionsUpdateOneRequiredWithoutTeam_usersNestedInput
    users?: usersUpdateOneRequiredWithoutTeam_usersNestedInput
  }

  export type team_usersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    team_position_id?: StringFieldUpdateOperationsInput | string
    isOwner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    member_status?: NullableEnummember_statusFieldUpdateOperationsInput | $Enums.member_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_usersCreateManyInput = {
    user_id: string
    team_position_id?: string
    isOwner?: boolean | null
    message?: string | null
    member_status?: $Enums.member_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_usersUpdateManyMutationInput = {
    isOwner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    member_status?: NullableEnummember_statusFieldUpdateOperationsInput | $Enums.member_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_usersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    team_position_id?: StringFieldUpdateOperationsInput | string
    isOwner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    member_status?: NullableEnummember_statusFieldUpdateOperationsInput | $Enums.member_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type teamsCreateInput = {
    id?: string
    title?: string | null
    content?: string | null
    user_id?: string | null
    Field?: boolean | null
    recruit_status?: $Enums.recruit_status | null
    proceed_type?: $Enums.proceed_type | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apply_history?: apply_historyCreateNestedManyWithoutTeamsInput
    team_stack_positions?: team_stack_positionsCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateInput = {
    id?: string
    title?: string | null
    content?: string | null
    user_id?: string | null
    Field?: boolean | null
    recruit_status?: $Enums.recruit_status | null
    proceed_type?: $Enums.proceed_type | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apply_history?: apply_historyUncheckedCreateNestedManyWithoutTeamsInput
    team_stack_positions?: team_stack_positionsUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    Field?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    proceed_type?: NullableEnumproceed_typeFieldUpdateOperationsInput | $Enums.proceed_type | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apply_history?: apply_historyUpdateManyWithoutTeamsNestedInput
    team_stack_positions?: team_stack_positionsUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    Field?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    proceed_type?: NullableEnumproceed_typeFieldUpdateOperationsInput | $Enums.proceed_type | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apply_history?: apply_historyUncheckedUpdateManyWithoutTeamsNestedInput
    team_stack_positions?: team_stack_positionsUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type teamsCreateManyInput = {
    id?: string
    title?: string | null
    content?: string | null
    user_id?: string | null
    Field?: boolean | null
    recruit_status?: $Enums.recruit_status | null
    proceed_type?: $Enums.proceed_type | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type teamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    Field?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    proceed_type?: NullableEnumproceed_typeFieldUpdateOperationsInput | $Enums.proceed_type | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type teamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    Field?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    proceed_type?: NullableEnumproceed_typeFieldUpdateOperationsInput | $Enums.proceed_type | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_stacksCreateInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    stacks: stacksCreateNestedOneWithoutUser_stacksInput
    users: usersCreateNestedOneWithoutUser_stacksInput
  }

  export type user_stacksUncheckedCreateInput = {
    user_id: string
    stack_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_stacksUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stacks?: stacksUpdateOneRequiredWithoutUser_stacksNestedInput
    users?: usersUpdateOneRequiredWithoutUser_stacksNestedInput
  }

  export type user_stacksUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    stack_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_stacksCreateManyInput = {
    user_id: string
    stack_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_stacksUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_stacksUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    stack_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
    apply_history?: apply_historyCreateNestedManyWithoutUsersInput
    team_users?: team_usersCreateNestedManyWithoutUsersInput
    user_auths?: user_authsCreateNestedManyWithoutUsersInput
    positions?: positionsCreateNestedOneWithoutUsersInput
    user_stacks?: user_stacksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    position_id?: string | null
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
    apply_history?: apply_historyUncheckedCreateNestedManyWithoutUsersInput
    team_users?: team_usersUncheckedCreateNestedManyWithoutUsersInput
    user_auths?: user_authsUncheckedCreateNestedManyWithoutUsersInput
    user_stacks?: user_stacksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
    apply_history?: apply_historyUpdateManyWithoutUsersNestedInput
    team_users?: team_usersUpdateManyWithoutUsersNestedInput
    user_auths?: user_authsUpdateManyWithoutUsersNestedInput
    positions?: positionsUpdateOneWithoutUsersNestedInput
    user_stacks?: user_stacksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
    apply_history?: apply_historyUncheckedUpdateManyWithoutUsersNestedInput
    team_users?: team_usersUncheckedUpdateManyWithoutUsersNestedInput
    user_auths?: user_authsUncheckedUpdateManyWithoutUsersNestedInput
    user_stacks?: user_stacksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    position_id?: string | null
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    position_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
  }

  export type user_authsCreateInput = {
    external_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    auth_methods: auth_methodsCreateNestedOneWithoutUser_authsInput
    users: usersCreateNestedOneWithoutUser_authsInput
  }

  export type user_authsUncheckedCreateInput = {
    user_id: string
    auth_id: string
    external_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_authsUpdateInput = {
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth_methods?: auth_methodsUpdateOneRequiredWithoutUser_authsNestedInput
    users?: usersUpdateOneRequiredWithoutUser_authsNestedInput
  }

  export type user_authsUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    auth_id?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_authsCreateManyInput = {
    user_id: string
    auth_id: string
    external_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_authsUpdateManyMutationInput = {
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_authsUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    auth_id?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_methodsCreateInput = {
    id?: string
    auth_method?: $Enums.auth_method | null
    platform: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_auths?: user_authsCreateNestedManyWithoutAuth_methodsInput
  }

  export type auth_methodsUncheckedCreateInput = {
    id?: string
    auth_method?: $Enums.auth_method | null
    platform: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_auths?: user_authsUncheckedCreateNestedManyWithoutAuth_methodsInput
  }

  export type auth_methodsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_method?: NullableEnumauth_methodFieldUpdateOperationsInput | $Enums.auth_method | null
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_auths?: user_authsUpdateManyWithoutAuth_methodsNestedInput
  }

  export type auth_methodsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_method?: NullableEnumauth_methodFieldUpdateOperationsInput | $Enums.auth_method | null
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_auths?: user_authsUncheckedUpdateManyWithoutAuth_methodsNestedInput
  }

  export type auth_methodsCreateManyInput = {
    id?: string
    auth_method?: $Enums.auth_method | null
    platform: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type auth_methodsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_method?: NullableEnumauth_methodFieldUpdateOperationsInput | $Enums.auth_method | null
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_methodsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_method?: NullableEnumauth_methodFieldUpdateOperationsInput | $Enums.auth_method | null
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type Enumapply_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.apply_status | Enumapply_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.apply_status[] | ListEnumapply_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.apply_status[] | ListEnumapply_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumapply_statusNullableFilter<$PrismaModel> | $Enums.apply_status | null
  }

  export type Enumapply_fromFilter<$PrismaModel = never> = {
    equals?: $Enums.apply_from | Enumapply_fromFieldRefInput<$PrismaModel>
    in?: $Enums.apply_from[] | ListEnumapply_fromFieldRefInput<$PrismaModel>
    notIn?: $Enums.apply_from[] | ListEnumapply_fromFieldRefInput<$PrismaModel>
    not?: NestedEnumapply_fromFilter<$PrismaModel> | $Enums.apply_from
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

  export type TeamsScalarRelationFilter = {
    is?: teamsWhereInput
    isNot?: teamsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type apply_historyCountOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    ment?: SortOrder
    apply_status?: SortOrder
    apply_from?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type apply_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    ment?: SortOrder
    apply_status?: SortOrder
    apply_from?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type apply_historyMinOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    ment?: SortOrder
    apply_status?: SortOrder
    apply_from?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type Enumapply_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.apply_status | Enumapply_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.apply_status[] | ListEnumapply_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.apply_status[] | ListEnumapply_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumapply_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.apply_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumapply_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumapply_statusNullableFilter<$PrismaModel>
  }

  export type Enumapply_fromWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.apply_from | Enumapply_fromFieldRefInput<$PrismaModel>
    in?: $Enums.apply_from[] | ListEnumapply_fromFieldRefInput<$PrismaModel>
    notIn?: $Enums.apply_from[] | ListEnumapply_fromFieldRefInput<$PrismaModel>
    not?: NestedEnumapply_fromWithAggregatesFilter<$PrismaModel> | $Enums.apply_from
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumapply_fromFilter<$PrismaModel>
    _max?: NestedEnumapply_fromFilter<$PrismaModel>
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

  export type Team_stack_positionsListRelationFilter = {
    every?: team_stack_positionsWhereInput
    some?: team_stack_positionsWhereInput
    none?: team_stack_positionsWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type team_stack_positionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type positionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type positionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type positionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StacksListRelationFilter = {
    every?: stacksWhereInput
    some?: stacksWhereInput
    none?: stacksWhereInput
  }

  export type stacksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stack_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type stack_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type stack_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type Stack_categoriesScalarRelationFilter = {
    is?: stack_categoriesWhereInput
    isNot?: stack_categoriesWhereInput
  }

  export type User_stacksListRelationFilter = {
    every?: user_stacksWhereInput
    some?: user_stacksWhereInput
    none?: user_stacksWhereInput
  }

  export type user_stacksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stacksCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    img_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type stacksMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    img_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type stacksMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    img_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Enumrecruit_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.recruit_status | Enumrecruit_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.recruit_status[] | ListEnumrecruit_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.recruit_status[] | ListEnumrecruit_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrecruit_statusNullableFilter<$PrismaModel> | $Enums.recruit_status | null
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

  export type PositionsScalarRelationFilter = {
    is?: positionsWhereInput
    isNot?: positionsWhereInput
  }

  export type StacksScalarRelationFilter = {
    is?: stacksWhereInput
    isNot?: stacksWhereInput
  }

  export type Team_usersListRelationFilter = {
    every?: team_usersWhereInput
    some?: team_usersWhereInput
    none?: team_usersWhereInput
  }

  export type team_usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type team_stack_positionsCountOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    stack_id?: SortOrder
    position_id?: SortOrder
    status?: SortOrder
    recruit_status?: SortOrder
    count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type team_stack_positionsAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type team_stack_positionsMaxOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    stack_id?: SortOrder
    position_id?: SortOrder
    status?: SortOrder
    recruit_status?: SortOrder
    count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type team_stack_positionsMinOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    stack_id?: SortOrder
    position_id?: SortOrder
    status?: SortOrder
    recruit_status?: SortOrder
    count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type team_stack_positionsSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Enumrecruit_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.recruit_status | Enumrecruit_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.recruit_status[] | ListEnumrecruit_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.recruit_status[] | ListEnumrecruit_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrecruit_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.recruit_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumrecruit_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumrecruit_statusNullableFilter<$PrismaModel>
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Enummember_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.member_status | Enummember_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.member_status[] | ListEnummember_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.member_status[] | ListEnummember_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnummember_statusNullableFilter<$PrismaModel> | $Enums.member_status | null
  }

  export type Team_stack_positionsScalarRelationFilter = {
    is?: team_stack_positionsWhereInput
    isNot?: team_stack_positionsWhereInput
  }

  export type team_usersUser_idTeam_position_idCompoundUniqueInput = {
    user_id: string
    team_position_id: string
  }

  export type team_usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    team_position_id?: SortOrder
    isOwner?: SortOrder
    message?: SortOrder
    member_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type team_usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    team_position_id?: SortOrder
    isOwner?: SortOrder
    message?: SortOrder
    member_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type team_usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    team_position_id?: SortOrder
    isOwner?: SortOrder
    message?: SortOrder
    member_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Enummember_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.member_status | Enummember_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.member_status[] | ListEnummember_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.member_status[] | ListEnummember_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnummember_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.member_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummember_statusNullableFilter<$PrismaModel>
    _max?: NestedEnummember_statusNullableFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type Enumproceed_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.proceed_type | Enumproceed_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.proceed_type[] | ListEnumproceed_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.proceed_type[] | ListEnumproceed_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproceed_typeNullableFilter<$PrismaModel> | $Enums.proceed_type | null
  }

  export type Apply_historyListRelationFilter = {
    every?: apply_historyWhereInput
    some?: apply_historyWhereInput
    none?: apply_historyWhereInput
  }

  export type apply_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teamsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    Field?: SortOrder
    recruit_status?: SortOrder
    proceed_type?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type teamsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    Field?: SortOrder
    recruit_status?: SortOrder
    proceed_type?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type teamsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    Field?: SortOrder
    recruit_status?: SortOrder
    proceed_type?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumproceed_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.proceed_type | Enumproceed_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.proceed_type[] | ListEnumproceed_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.proceed_type[] | ListEnumproceed_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproceed_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.proceed_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumproceed_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumproceed_typeNullableFilter<$PrismaModel>
  }

  export type user_stacksUser_idStack_idCompoundUniqueInput = {
    user_id: string
    stack_id: string
  }

  export type user_stacksCountOrderByAggregateInput = {
    user_id?: SortOrder
    stack_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_stacksMaxOrderByAggregateInput = {
    user_id?: SortOrder
    stack_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_stacksMinOrderByAggregateInput = {
    user_id?: SortOrder
    stack_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumrolesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.roles | EnumrolesFieldRefInput<$PrismaModel> | null
    in?: $Enums.roles[] | ListEnumrolesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.roles[] | ListEnumrolesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrolesNullableFilter<$PrismaModel> | $Enums.roles | null
  }

  export type EnummeetingsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.meetings | EnummeetingsFieldRefInput<$PrismaModel> | null
    in?: $Enums.meetings[] | ListEnummeetingsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.meetings[] | ListEnummeetingsFieldRefInput<$PrismaModel> | null
    not?: NestedEnummeetingsNullableFilter<$PrismaModel> | $Enums.meetings | null
  }

  export type User_authsListRelationFilter = {
    every?: user_authsWhereInput
    some?: user_authsWhereInput
    none?: user_authsWhereInput
  }

  export type PositionsNullableScalarRelationFilter = {
    is?: positionsWhereInput | null
    isNot?: positionsWhereInput | null
  }

  export type user_authsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    position_id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    salt?: SortOrder
    github_url?: SortOrder
    img?: SortOrder
    address?: SortOrder
    join_status?: SortOrder
    create_at?: SortOrder
    updated_at?: SortOrder
    Field?: SortOrder
    preferred_meeting?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    position_id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    salt?: SortOrder
    github_url?: SortOrder
    img?: SortOrder
    address?: SortOrder
    join_status?: SortOrder
    create_at?: SortOrder
    updated_at?: SortOrder
    Field?: SortOrder
    preferred_meeting?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    position_id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    salt?: SortOrder
    github_url?: SortOrder
    img?: SortOrder
    address?: SortOrder
    join_status?: SortOrder
    create_at?: SortOrder
    updated_at?: SortOrder
    Field?: SortOrder
    preferred_meeting?: SortOrder
  }

  export type EnumrolesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.roles | EnumrolesFieldRefInput<$PrismaModel> | null
    in?: $Enums.roles[] | ListEnumrolesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.roles[] | ListEnumrolesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrolesNullableWithAggregatesFilter<$PrismaModel> | $Enums.roles | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumrolesNullableFilter<$PrismaModel>
    _max?: NestedEnumrolesNullableFilter<$PrismaModel>
  }

  export type EnummeetingsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.meetings | EnummeetingsFieldRefInput<$PrismaModel> | null
    in?: $Enums.meetings[] | ListEnummeetingsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.meetings[] | ListEnummeetingsFieldRefInput<$PrismaModel> | null
    not?: NestedEnummeetingsNullableWithAggregatesFilter<$PrismaModel> | $Enums.meetings | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummeetingsNullableFilter<$PrismaModel>
    _max?: NestedEnummeetingsNullableFilter<$PrismaModel>
  }

  export type Auth_methodsScalarRelationFilter = {
    is?: auth_methodsWhereInput
    isNot?: auth_methodsWhereInput
  }

  export type user_authsUser_idAuth_idCompoundUniqueInput = {
    user_id: string
    auth_id: string
  }

  export type user_authsCountOrderByAggregateInput = {
    user_id?: SortOrder
    auth_id?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_authsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    auth_id?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_authsMinOrderByAggregateInput = {
    user_id?: SortOrder
    auth_id?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Enumauth_methodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.auth_method | Enumauth_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.auth_method[] | ListEnumauth_methodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.auth_method[] | ListEnumauth_methodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumauth_methodNullableFilter<$PrismaModel> | $Enums.auth_method | null
  }

  export type auth_methodsCountOrderByAggregateInput = {
    id?: SortOrder
    auth_method?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type auth_methodsMaxOrderByAggregateInput = {
    id?: SortOrder
    auth_method?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type auth_methodsMinOrderByAggregateInput = {
    id?: SortOrder
    auth_method?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Enumauth_methodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.auth_method | Enumauth_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.auth_method[] | ListEnumauth_methodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.auth_method[] | ListEnumauth_methodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumauth_methodNullableWithAggregatesFilter<$PrismaModel> | $Enums.auth_method | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumauth_methodNullableFilter<$PrismaModel>
    _max?: NestedEnumauth_methodNullableFilter<$PrismaModel>
  }

  export type teamsCreateNestedOneWithoutApply_historyInput = {
    create?: XOR<teamsCreateWithoutApply_historyInput, teamsUncheckedCreateWithoutApply_historyInput>
    connectOrCreate?: teamsCreateOrConnectWithoutApply_historyInput
    connect?: teamsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutApply_historyInput = {
    create?: XOR<usersCreateWithoutApply_historyInput, usersUncheckedCreateWithoutApply_historyInput>
    connectOrCreate?: usersCreateOrConnectWithoutApply_historyInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumapply_statusFieldUpdateOperationsInput = {
    set?: $Enums.apply_status | null
  }

  export type Enumapply_fromFieldUpdateOperationsInput = {
    set?: $Enums.apply_from
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type teamsUpdateOneRequiredWithoutApply_historyNestedInput = {
    create?: XOR<teamsCreateWithoutApply_historyInput, teamsUncheckedCreateWithoutApply_historyInput>
    connectOrCreate?: teamsCreateOrConnectWithoutApply_historyInput
    upsert?: teamsUpsertWithoutApply_historyInput
    connect?: teamsWhereUniqueInput
    update?: XOR<XOR<teamsUpdateToOneWithWhereWithoutApply_historyInput, teamsUpdateWithoutApply_historyInput>, teamsUncheckedUpdateWithoutApply_historyInput>
  }

  export type usersUpdateOneRequiredWithoutApply_historyNestedInput = {
    create?: XOR<usersCreateWithoutApply_historyInput, usersUncheckedCreateWithoutApply_historyInput>
    connectOrCreate?: usersCreateOrConnectWithoutApply_historyInput
    upsert?: usersUpsertWithoutApply_historyInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutApply_historyInput, usersUpdateWithoutApply_historyInput>, usersUncheckedUpdateWithoutApply_historyInput>
  }

  export type team_stack_positionsCreateNestedManyWithoutPositionsInput = {
    create?: XOR<team_stack_positionsCreateWithoutPositionsInput, team_stack_positionsUncheckedCreateWithoutPositionsInput> | team_stack_positionsCreateWithoutPositionsInput[] | team_stack_positionsUncheckedCreateWithoutPositionsInput[]
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutPositionsInput | team_stack_positionsCreateOrConnectWithoutPositionsInput[]
    createMany?: team_stack_positionsCreateManyPositionsInputEnvelope
    connect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutPositionsInput = {
    create?: XOR<usersCreateWithoutPositionsInput, usersUncheckedCreateWithoutPositionsInput> | usersCreateWithoutPositionsInput[] | usersUncheckedCreateWithoutPositionsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPositionsInput | usersCreateOrConnectWithoutPositionsInput[]
    createMany?: usersCreateManyPositionsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type team_stack_positionsUncheckedCreateNestedManyWithoutPositionsInput = {
    create?: XOR<team_stack_positionsCreateWithoutPositionsInput, team_stack_positionsUncheckedCreateWithoutPositionsInput> | team_stack_positionsCreateWithoutPositionsInput[] | team_stack_positionsUncheckedCreateWithoutPositionsInput[]
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutPositionsInput | team_stack_positionsCreateOrConnectWithoutPositionsInput[]
    createMany?: team_stack_positionsCreateManyPositionsInputEnvelope
    connect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutPositionsInput = {
    create?: XOR<usersCreateWithoutPositionsInput, usersUncheckedCreateWithoutPositionsInput> | usersCreateWithoutPositionsInput[] | usersUncheckedCreateWithoutPositionsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPositionsInput | usersCreateOrConnectWithoutPositionsInput[]
    createMany?: usersCreateManyPositionsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type team_stack_positionsUpdateManyWithoutPositionsNestedInput = {
    create?: XOR<team_stack_positionsCreateWithoutPositionsInput, team_stack_positionsUncheckedCreateWithoutPositionsInput> | team_stack_positionsCreateWithoutPositionsInput[] | team_stack_positionsUncheckedCreateWithoutPositionsInput[]
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutPositionsInput | team_stack_positionsCreateOrConnectWithoutPositionsInput[]
    upsert?: team_stack_positionsUpsertWithWhereUniqueWithoutPositionsInput | team_stack_positionsUpsertWithWhereUniqueWithoutPositionsInput[]
    createMany?: team_stack_positionsCreateManyPositionsInputEnvelope
    set?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    disconnect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    delete?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    connect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    update?: team_stack_positionsUpdateWithWhereUniqueWithoutPositionsInput | team_stack_positionsUpdateWithWhereUniqueWithoutPositionsInput[]
    updateMany?: team_stack_positionsUpdateManyWithWhereWithoutPositionsInput | team_stack_positionsUpdateManyWithWhereWithoutPositionsInput[]
    deleteMany?: team_stack_positionsScalarWhereInput | team_stack_positionsScalarWhereInput[]
  }

  export type usersUpdateManyWithoutPositionsNestedInput = {
    create?: XOR<usersCreateWithoutPositionsInput, usersUncheckedCreateWithoutPositionsInput> | usersCreateWithoutPositionsInput[] | usersUncheckedCreateWithoutPositionsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPositionsInput | usersCreateOrConnectWithoutPositionsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPositionsInput | usersUpsertWithWhereUniqueWithoutPositionsInput[]
    createMany?: usersCreateManyPositionsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPositionsInput | usersUpdateWithWhereUniqueWithoutPositionsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPositionsInput | usersUpdateManyWithWhereWithoutPositionsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type team_stack_positionsUncheckedUpdateManyWithoutPositionsNestedInput = {
    create?: XOR<team_stack_positionsCreateWithoutPositionsInput, team_stack_positionsUncheckedCreateWithoutPositionsInput> | team_stack_positionsCreateWithoutPositionsInput[] | team_stack_positionsUncheckedCreateWithoutPositionsInput[]
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutPositionsInput | team_stack_positionsCreateOrConnectWithoutPositionsInput[]
    upsert?: team_stack_positionsUpsertWithWhereUniqueWithoutPositionsInput | team_stack_positionsUpsertWithWhereUniqueWithoutPositionsInput[]
    createMany?: team_stack_positionsCreateManyPositionsInputEnvelope
    set?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    disconnect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    delete?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    connect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    update?: team_stack_positionsUpdateWithWhereUniqueWithoutPositionsInput | team_stack_positionsUpdateWithWhereUniqueWithoutPositionsInput[]
    updateMany?: team_stack_positionsUpdateManyWithWhereWithoutPositionsInput | team_stack_positionsUpdateManyWithWhereWithoutPositionsInput[]
    deleteMany?: team_stack_positionsScalarWhereInput | team_stack_positionsScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutPositionsNestedInput = {
    create?: XOR<usersCreateWithoutPositionsInput, usersUncheckedCreateWithoutPositionsInput> | usersCreateWithoutPositionsInput[] | usersUncheckedCreateWithoutPositionsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPositionsInput | usersCreateOrConnectWithoutPositionsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPositionsInput | usersUpsertWithWhereUniqueWithoutPositionsInput[]
    createMany?: usersCreateManyPositionsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPositionsInput | usersUpdateWithWhereUniqueWithoutPositionsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPositionsInput | usersUpdateManyWithWhereWithoutPositionsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type stacksCreateNestedManyWithoutStack_categoriesInput = {
    create?: XOR<stacksCreateWithoutStack_categoriesInput, stacksUncheckedCreateWithoutStack_categoriesInput> | stacksCreateWithoutStack_categoriesInput[] | stacksUncheckedCreateWithoutStack_categoriesInput[]
    connectOrCreate?: stacksCreateOrConnectWithoutStack_categoriesInput | stacksCreateOrConnectWithoutStack_categoriesInput[]
    createMany?: stacksCreateManyStack_categoriesInputEnvelope
    connect?: stacksWhereUniqueInput | stacksWhereUniqueInput[]
  }

  export type stacksUncheckedCreateNestedManyWithoutStack_categoriesInput = {
    create?: XOR<stacksCreateWithoutStack_categoriesInput, stacksUncheckedCreateWithoutStack_categoriesInput> | stacksCreateWithoutStack_categoriesInput[] | stacksUncheckedCreateWithoutStack_categoriesInput[]
    connectOrCreate?: stacksCreateOrConnectWithoutStack_categoriesInput | stacksCreateOrConnectWithoutStack_categoriesInput[]
    createMany?: stacksCreateManyStack_categoriesInputEnvelope
    connect?: stacksWhereUniqueInput | stacksWhereUniqueInput[]
  }

  export type stacksUpdateManyWithoutStack_categoriesNestedInput = {
    create?: XOR<stacksCreateWithoutStack_categoriesInput, stacksUncheckedCreateWithoutStack_categoriesInput> | stacksCreateWithoutStack_categoriesInput[] | stacksUncheckedCreateWithoutStack_categoriesInput[]
    connectOrCreate?: stacksCreateOrConnectWithoutStack_categoriesInput | stacksCreateOrConnectWithoutStack_categoriesInput[]
    upsert?: stacksUpsertWithWhereUniqueWithoutStack_categoriesInput | stacksUpsertWithWhereUniqueWithoutStack_categoriesInput[]
    createMany?: stacksCreateManyStack_categoriesInputEnvelope
    set?: stacksWhereUniqueInput | stacksWhereUniqueInput[]
    disconnect?: stacksWhereUniqueInput | stacksWhereUniqueInput[]
    delete?: stacksWhereUniqueInput | stacksWhereUniqueInput[]
    connect?: stacksWhereUniqueInput | stacksWhereUniqueInput[]
    update?: stacksUpdateWithWhereUniqueWithoutStack_categoriesInput | stacksUpdateWithWhereUniqueWithoutStack_categoriesInput[]
    updateMany?: stacksUpdateManyWithWhereWithoutStack_categoriesInput | stacksUpdateManyWithWhereWithoutStack_categoriesInput[]
    deleteMany?: stacksScalarWhereInput | stacksScalarWhereInput[]
  }

  export type stacksUncheckedUpdateManyWithoutStack_categoriesNestedInput = {
    create?: XOR<stacksCreateWithoutStack_categoriesInput, stacksUncheckedCreateWithoutStack_categoriesInput> | stacksCreateWithoutStack_categoriesInput[] | stacksUncheckedCreateWithoutStack_categoriesInput[]
    connectOrCreate?: stacksCreateOrConnectWithoutStack_categoriesInput | stacksCreateOrConnectWithoutStack_categoriesInput[]
    upsert?: stacksUpsertWithWhereUniqueWithoutStack_categoriesInput | stacksUpsertWithWhereUniqueWithoutStack_categoriesInput[]
    createMany?: stacksCreateManyStack_categoriesInputEnvelope
    set?: stacksWhereUniqueInput | stacksWhereUniqueInput[]
    disconnect?: stacksWhereUniqueInput | stacksWhereUniqueInput[]
    delete?: stacksWhereUniqueInput | stacksWhereUniqueInput[]
    connect?: stacksWhereUniqueInput | stacksWhereUniqueInput[]
    update?: stacksUpdateWithWhereUniqueWithoutStack_categoriesInput | stacksUpdateWithWhereUniqueWithoutStack_categoriesInput[]
    updateMany?: stacksUpdateManyWithWhereWithoutStack_categoriesInput | stacksUpdateManyWithWhereWithoutStack_categoriesInput[]
    deleteMany?: stacksScalarWhereInput | stacksScalarWhereInput[]
  }

  export type stack_categoriesCreateNestedOneWithoutStacksInput = {
    create?: XOR<stack_categoriesCreateWithoutStacksInput, stack_categoriesUncheckedCreateWithoutStacksInput>
    connectOrCreate?: stack_categoriesCreateOrConnectWithoutStacksInput
    connect?: stack_categoriesWhereUniqueInput
  }

  export type team_stack_positionsCreateNestedManyWithoutStacksInput = {
    create?: XOR<team_stack_positionsCreateWithoutStacksInput, team_stack_positionsUncheckedCreateWithoutStacksInput> | team_stack_positionsCreateWithoutStacksInput[] | team_stack_positionsUncheckedCreateWithoutStacksInput[]
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutStacksInput | team_stack_positionsCreateOrConnectWithoutStacksInput[]
    createMany?: team_stack_positionsCreateManyStacksInputEnvelope
    connect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
  }

  export type user_stacksCreateNestedManyWithoutStacksInput = {
    create?: XOR<user_stacksCreateWithoutStacksInput, user_stacksUncheckedCreateWithoutStacksInput> | user_stacksCreateWithoutStacksInput[] | user_stacksUncheckedCreateWithoutStacksInput[]
    connectOrCreate?: user_stacksCreateOrConnectWithoutStacksInput | user_stacksCreateOrConnectWithoutStacksInput[]
    createMany?: user_stacksCreateManyStacksInputEnvelope
    connect?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
  }

  export type team_stack_positionsUncheckedCreateNestedManyWithoutStacksInput = {
    create?: XOR<team_stack_positionsCreateWithoutStacksInput, team_stack_positionsUncheckedCreateWithoutStacksInput> | team_stack_positionsCreateWithoutStacksInput[] | team_stack_positionsUncheckedCreateWithoutStacksInput[]
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutStacksInput | team_stack_positionsCreateOrConnectWithoutStacksInput[]
    createMany?: team_stack_positionsCreateManyStacksInputEnvelope
    connect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
  }

  export type user_stacksUncheckedCreateNestedManyWithoutStacksInput = {
    create?: XOR<user_stacksCreateWithoutStacksInput, user_stacksUncheckedCreateWithoutStacksInput> | user_stacksCreateWithoutStacksInput[] | user_stacksUncheckedCreateWithoutStacksInput[]
    connectOrCreate?: user_stacksCreateOrConnectWithoutStacksInput | user_stacksCreateOrConnectWithoutStacksInput[]
    createMany?: user_stacksCreateManyStacksInputEnvelope
    connect?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
  }

  export type stack_categoriesUpdateOneRequiredWithoutStacksNestedInput = {
    create?: XOR<stack_categoriesCreateWithoutStacksInput, stack_categoriesUncheckedCreateWithoutStacksInput>
    connectOrCreate?: stack_categoriesCreateOrConnectWithoutStacksInput
    upsert?: stack_categoriesUpsertWithoutStacksInput
    connect?: stack_categoriesWhereUniqueInput
    update?: XOR<XOR<stack_categoriesUpdateToOneWithWhereWithoutStacksInput, stack_categoriesUpdateWithoutStacksInput>, stack_categoriesUncheckedUpdateWithoutStacksInput>
  }

  export type team_stack_positionsUpdateManyWithoutStacksNestedInput = {
    create?: XOR<team_stack_positionsCreateWithoutStacksInput, team_stack_positionsUncheckedCreateWithoutStacksInput> | team_stack_positionsCreateWithoutStacksInput[] | team_stack_positionsUncheckedCreateWithoutStacksInput[]
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutStacksInput | team_stack_positionsCreateOrConnectWithoutStacksInput[]
    upsert?: team_stack_positionsUpsertWithWhereUniqueWithoutStacksInput | team_stack_positionsUpsertWithWhereUniqueWithoutStacksInput[]
    createMany?: team_stack_positionsCreateManyStacksInputEnvelope
    set?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    disconnect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    delete?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    connect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    update?: team_stack_positionsUpdateWithWhereUniqueWithoutStacksInput | team_stack_positionsUpdateWithWhereUniqueWithoutStacksInput[]
    updateMany?: team_stack_positionsUpdateManyWithWhereWithoutStacksInput | team_stack_positionsUpdateManyWithWhereWithoutStacksInput[]
    deleteMany?: team_stack_positionsScalarWhereInput | team_stack_positionsScalarWhereInput[]
  }

  export type user_stacksUpdateManyWithoutStacksNestedInput = {
    create?: XOR<user_stacksCreateWithoutStacksInput, user_stacksUncheckedCreateWithoutStacksInput> | user_stacksCreateWithoutStacksInput[] | user_stacksUncheckedCreateWithoutStacksInput[]
    connectOrCreate?: user_stacksCreateOrConnectWithoutStacksInput | user_stacksCreateOrConnectWithoutStacksInput[]
    upsert?: user_stacksUpsertWithWhereUniqueWithoutStacksInput | user_stacksUpsertWithWhereUniqueWithoutStacksInput[]
    createMany?: user_stacksCreateManyStacksInputEnvelope
    set?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    disconnect?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    delete?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    connect?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    update?: user_stacksUpdateWithWhereUniqueWithoutStacksInput | user_stacksUpdateWithWhereUniqueWithoutStacksInput[]
    updateMany?: user_stacksUpdateManyWithWhereWithoutStacksInput | user_stacksUpdateManyWithWhereWithoutStacksInput[]
    deleteMany?: user_stacksScalarWhereInput | user_stacksScalarWhereInput[]
  }

  export type team_stack_positionsUncheckedUpdateManyWithoutStacksNestedInput = {
    create?: XOR<team_stack_positionsCreateWithoutStacksInput, team_stack_positionsUncheckedCreateWithoutStacksInput> | team_stack_positionsCreateWithoutStacksInput[] | team_stack_positionsUncheckedCreateWithoutStacksInput[]
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutStacksInput | team_stack_positionsCreateOrConnectWithoutStacksInput[]
    upsert?: team_stack_positionsUpsertWithWhereUniqueWithoutStacksInput | team_stack_positionsUpsertWithWhereUniqueWithoutStacksInput[]
    createMany?: team_stack_positionsCreateManyStacksInputEnvelope
    set?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    disconnect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    delete?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    connect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    update?: team_stack_positionsUpdateWithWhereUniqueWithoutStacksInput | team_stack_positionsUpdateWithWhereUniqueWithoutStacksInput[]
    updateMany?: team_stack_positionsUpdateManyWithWhereWithoutStacksInput | team_stack_positionsUpdateManyWithWhereWithoutStacksInput[]
    deleteMany?: team_stack_positionsScalarWhereInput | team_stack_positionsScalarWhereInput[]
  }

  export type user_stacksUncheckedUpdateManyWithoutStacksNestedInput = {
    create?: XOR<user_stacksCreateWithoutStacksInput, user_stacksUncheckedCreateWithoutStacksInput> | user_stacksCreateWithoutStacksInput[] | user_stacksUncheckedCreateWithoutStacksInput[]
    connectOrCreate?: user_stacksCreateOrConnectWithoutStacksInput | user_stacksCreateOrConnectWithoutStacksInput[]
    upsert?: user_stacksUpsertWithWhereUniqueWithoutStacksInput | user_stacksUpsertWithWhereUniqueWithoutStacksInput[]
    createMany?: user_stacksCreateManyStacksInputEnvelope
    set?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    disconnect?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    delete?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    connect?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    update?: user_stacksUpdateWithWhereUniqueWithoutStacksInput | user_stacksUpdateWithWhereUniqueWithoutStacksInput[]
    updateMany?: user_stacksUpdateManyWithWhereWithoutStacksInput | user_stacksUpdateManyWithWhereWithoutStacksInput[]
    deleteMany?: user_stacksScalarWhereInput | user_stacksScalarWhereInput[]
  }

  export type positionsCreateNestedOneWithoutTeam_stack_positionsInput = {
    create?: XOR<positionsCreateWithoutTeam_stack_positionsInput, positionsUncheckedCreateWithoutTeam_stack_positionsInput>
    connectOrCreate?: positionsCreateOrConnectWithoutTeam_stack_positionsInput
    connect?: positionsWhereUniqueInput
  }

  export type stacksCreateNestedOneWithoutTeam_stack_positionsInput = {
    create?: XOR<stacksCreateWithoutTeam_stack_positionsInput, stacksUncheckedCreateWithoutTeam_stack_positionsInput>
    connectOrCreate?: stacksCreateOrConnectWithoutTeam_stack_positionsInput
    connect?: stacksWhereUniqueInput
  }

  export type teamsCreateNestedOneWithoutTeam_stack_positionsInput = {
    create?: XOR<teamsCreateWithoutTeam_stack_positionsInput, teamsUncheckedCreateWithoutTeam_stack_positionsInput>
    connectOrCreate?: teamsCreateOrConnectWithoutTeam_stack_positionsInput
    connect?: teamsWhereUniqueInput
  }

  export type team_usersCreateNestedManyWithoutTeam_stack_positionsInput = {
    create?: XOR<team_usersCreateWithoutTeam_stack_positionsInput, team_usersUncheckedCreateWithoutTeam_stack_positionsInput> | team_usersCreateWithoutTeam_stack_positionsInput[] | team_usersUncheckedCreateWithoutTeam_stack_positionsInput[]
    connectOrCreate?: team_usersCreateOrConnectWithoutTeam_stack_positionsInput | team_usersCreateOrConnectWithoutTeam_stack_positionsInput[]
    createMany?: team_usersCreateManyTeam_stack_positionsInputEnvelope
    connect?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
  }

  export type team_usersUncheckedCreateNestedManyWithoutTeam_stack_positionsInput = {
    create?: XOR<team_usersCreateWithoutTeam_stack_positionsInput, team_usersUncheckedCreateWithoutTeam_stack_positionsInput> | team_usersCreateWithoutTeam_stack_positionsInput[] | team_usersUncheckedCreateWithoutTeam_stack_positionsInput[]
    connectOrCreate?: team_usersCreateOrConnectWithoutTeam_stack_positionsInput | team_usersCreateOrConnectWithoutTeam_stack_positionsInput[]
    createMany?: team_usersCreateManyTeam_stack_positionsInputEnvelope
    connect?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumrecruit_statusFieldUpdateOperationsInput = {
    set?: $Enums.recruit_status | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type positionsUpdateOneRequiredWithoutTeam_stack_positionsNestedInput = {
    create?: XOR<positionsCreateWithoutTeam_stack_positionsInput, positionsUncheckedCreateWithoutTeam_stack_positionsInput>
    connectOrCreate?: positionsCreateOrConnectWithoutTeam_stack_positionsInput
    upsert?: positionsUpsertWithoutTeam_stack_positionsInput
    connect?: positionsWhereUniqueInput
    update?: XOR<XOR<positionsUpdateToOneWithWhereWithoutTeam_stack_positionsInput, positionsUpdateWithoutTeam_stack_positionsInput>, positionsUncheckedUpdateWithoutTeam_stack_positionsInput>
  }

  export type stacksUpdateOneRequiredWithoutTeam_stack_positionsNestedInput = {
    create?: XOR<stacksCreateWithoutTeam_stack_positionsInput, stacksUncheckedCreateWithoutTeam_stack_positionsInput>
    connectOrCreate?: stacksCreateOrConnectWithoutTeam_stack_positionsInput
    upsert?: stacksUpsertWithoutTeam_stack_positionsInput
    connect?: stacksWhereUniqueInput
    update?: XOR<XOR<stacksUpdateToOneWithWhereWithoutTeam_stack_positionsInput, stacksUpdateWithoutTeam_stack_positionsInput>, stacksUncheckedUpdateWithoutTeam_stack_positionsInput>
  }

  export type teamsUpdateOneRequiredWithoutTeam_stack_positionsNestedInput = {
    create?: XOR<teamsCreateWithoutTeam_stack_positionsInput, teamsUncheckedCreateWithoutTeam_stack_positionsInput>
    connectOrCreate?: teamsCreateOrConnectWithoutTeam_stack_positionsInput
    upsert?: teamsUpsertWithoutTeam_stack_positionsInput
    connect?: teamsWhereUniqueInput
    update?: XOR<XOR<teamsUpdateToOneWithWhereWithoutTeam_stack_positionsInput, teamsUpdateWithoutTeam_stack_positionsInput>, teamsUncheckedUpdateWithoutTeam_stack_positionsInput>
  }

  export type team_usersUpdateManyWithoutTeam_stack_positionsNestedInput = {
    create?: XOR<team_usersCreateWithoutTeam_stack_positionsInput, team_usersUncheckedCreateWithoutTeam_stack_positionsInput> | team_usersCreateWithoutTeam_stack_positionsInput[] | team_usersUncheckedCreateWithoutTeam_stack_positionsInput[]
    connectOrCreate?: team_usersCreateOrConnectWithoutTeam_stack_positionsInput | team_usersCreateOrConnectWithoutTeam_stack_positionsInput[]
    upsert?: team_usersUpsertWithWhereUniqueWithoutTeam_stack_positionsInput | team_usersUpsertWithWhereUniqueWithoutTeam_stack_positionsInput[]
    createMany?: team_usersCreateManyTeam_stack_positionsInputEnvelope
    set?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    disconnect?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    delete?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    connect?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    update?: team_usersUpdateWithWhereUniqueWithoutTeam_stack_positionsInput | team_usersUpdateWithWhereUniqueWithoutTeam_stack_positionsInput[]
    updateMany?: team_usersUpdateManyWithWhereWithoutTeam_stack_positionsInput | team_usersUpdateManyWithWhereWithoutTeam_stack_positionsInput[]
    deleteMany?: team_usersScalarWhereInput | team_usersScalarWhereInput[]
  }

  export type team_usersUncheckedUpdateManyWithoutTeam_stack_positionsNestedInput = {
    create?: XOR<team_usersCreateWithoutTeam_stack_positionsInput, team_usersUncheckedCreateWithoutTeam_stack_positionsInput> | team_usersCreateWithoutTeam_stack_positionsInput[] | team_usersUncheckedCreateWithoutTeam_stack_positionsInput[]
    connectOrCreate?: team_usersCreateOrConnectWithoutTeam_stack_positionsInput | team_usersCreateOrConnectWithoutTeam_stack_positionsInput[]
    upsert?: team_usersUpsertWithWhereUniqueWithoutTeam_stack_positionsInput | team_usersUpsertWithWhereUniqueWithoutTeam_stack_positionsInput[]
    createMany?: team_usersCreateManyTeam_stack_positionsInputEnvelope
    set?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    disconnect?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    delete?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    connect?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    update?: team_usersUpdateWithWhereUniqueWithoutTeam_stack_positionsInput | team_usersUpdateWithWhereUniqueWithoutTeam_stack_positionsInput[]
    updateMany?: team_usersUpdateManyWithWhereWithoutTeam_stack_positionsInput | team_usersUpdateManyWithWhereWithoutTeam_stack_positionsInput[]
    deleteMany?: team_usersScalarWhereInput | team_usersScalarWhereInput[]
  }

  export type team_stack_positionsCreateNestedOneWithoutTeam_usersInput = {
    create?: XOR<team_stack_positionsCreateWithoutTeam_usersInput, team_stack_positionsUncheckedCreateWithoutTeam_usersInput>
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutTeam_usersInput
    connect?: team_stack_positionsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTeam_usersInput = {
    create?: XOR<usersCreateWithoutTeam_usersInput, usersUncheckedCreateWithoutTeam_usersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTeam_usersInput
    connect?: usersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableEnummember_statusFieldUpdateOperationsInput = {
    set?: $Enums.member_status | null
  }

  export type team_stack_positionsUpdateOneRequiredWithoutTeam_usersNestedInput = {
    create?: XOR<team_stack_positionsCreateWithoutTeam_usersInput, team_stack_positionsUncheckedCreateWithoutTeam_usersInput>
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutTeam_usersInput
    upsert?: team_stack_positionsUpsertWithoutTeam_usersInput
    connect?: team_stack_positionsWhereUniqueInput
    update?: XOR<XOR<team_stack_positionsUpdateToOneWithWhereWithoutTeam_usersInput, team_stack_positionsUpdateWithoutTeam_usersInput>, team_stack_positionsUncheckedUpdateWithoutTeam_usersInput>
  }

  export type usersUpdateOneRequiredWithoutTeam_usersNestedInput = {
    create?: XOR<usersCreateWithoutTeam_usersInput, usersUncheckedCreateWithoutTeam_usersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTeam_usersInput
    upsert?: usersUpsertWithoutTeam_usersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTeam_usersInput, usersUpdateWithoutTeam_usersInput>, usersUncheckedUpdateWithoutTeam_usersInput>
  }

  export type apply_historyCreateNestedManyWithoutTeamsInput = {
    create?: XOR<apply_historyCreateWithoutTeamsInput, apply_historyUncheckedCreateWithoutTeamsInput> | apply_historyCreateWithoutTeamsInput[] | apply_historyUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: apply_historyCreateOrConnectWithoutTeamsInput | apply_historyCreateOrConnectWithoutTeamsInput[]
    createMany?: apply_historyCreateManyTeamsInputEnvelope
    connect?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
  }

  export type team_stack_positionsCreateNestedManyWithoutTeamsInput = {
    create?: XOR<team_stack_positionsCreateWithoutTeamsInput, team_stack_positionsUncheckedCreateWithoutTeamsInput> | team_stack_positionsCreateWithoutTeamsInput[] | team_stack_positionsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutTeamsInput | team_stack_positionsCreateOrConnectWithoutTeamsInput[]
    createMany?: team_stack_positionsCreateManyTeamsInputEnvelope
    connect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
  }

  export type apply_historyUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<apply_historyCreateWithoutTeamsInput, apply_historyUncheckedCreateWithoutTeamsInput> | apply_historyCreateWithoutTeamsInput[] | apply_historyUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: apply_historyCreateOrConnectWithoutTeamsInput | apply_historyCreateOrConnectWithoutTeamsInput[]
    createMany?: apply_historyCreateManyTeamsInputEnvelope
    connect?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
  }

  export type team_stack_positionsUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<team_stack_positionsCreateWithoutTeamsInput, team_stack_positionsUncheckedCreateWithoutTeamsInput> | team_stack_positionsCreateWithoutTeamsInput[] | team_stack_positionsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutTeamsInput | team_stack_positionsCreateOrConnectWithoutTeamsInput[]
    createMany?: team_stack_positionsCreateManyTeamsInputEnvelope
    connect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
  }

  export type NullableEnumproceed_typeFieldUpdateOperationsInput = {
    set?: $Enums.proceed_type | null
  }

  export type apply_historyUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<apply_historyCreateWithoutTeamsInput, apply_historyUncheckedCreateWithoutTeamsInput> | apply_historyCreateWithoutTeamsInput[] | apply_historyUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: apply_historyCreateOrConnectWithoutTeamsInput | apply_historyCreateOrConnectWithoutTeamsInput[]
    upsert?: apply_historyUpsertWithWhereUniqueWithoutTeamsInput | apply_historyUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: apply_historyCreateManyTeamsInputEnvelope
    set?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    disconnect?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    delete?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    connect?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    update?: apply_historyUpdateWithWhereUniqueWithoutTeamsInput | apply_historyUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: apply_historyUpdateManyWithWhereWithoutTeamsInput | apply_historyUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: apply_historyScalarWhereInput | apply_historyScalarWhereInput[]
  }

  export type team_stack_positionsUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<team_stack_positionsCreateWithoutTeamsInput, team_stack_positionsUncheckedCreateWithoutTeamsInput> | team_stack_positionsCreateWithoutTeamsInput[] | team_stack_positionsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutTeamsInput | team_stack_positionsCreateOrConnectWithoutTeamsInput[]
    upsert?: team_stack_positionsUpsertWithWhereUniqueWithoutTeamsInput | team_stack_positionsUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: team_stack_positionsCreateManyTeamsInputEnvelope
    set?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    disconnect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    delete?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    connect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    update?: team_stack_positionsUpdateWithWhereUniqueWithoutTeamsInput | team_stack_positionsUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: team_stack_positionsUpdateManyWithWhereWithoutTeamsInput | team_stack_positionsUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: team_stack_positionsScalarWhereInput | team_stack_positionsScalarWhereInput[]
  }

  export type apply_historyUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<apply_historyCreateWithoutTeamsInput, apply_historyUncheckedCreateWithoutTeamsInput> | apply_historyCreateWithoutTeamsInput[] | apply_historyUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: apply_historyCreateOrConnectWithoutTeamsInput | apply_historyCreateOrConnectWithoutTeamsInput[]
    upsert?: apply_historyUpsertWithWhereUniqueWithoutTeamsInput | apply_historyUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: apply_historyCreateManyTeamsInputEnvelope
    set?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    disconnect?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    delete?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    connect?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    update?: apply_historyUpdateWithWhereUniqueWithoutTeamsInput | apply_historyUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: apply_historyUpdateManyWithWhereWithoutTeamsInput | apply_historyUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: apply_historyScalarWhereInput | apply_historyScalarWhereInput[]
  }

  export type team_stack_positionsUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<team_stack_positionsCreateWithoutTeamsInput, team_stack_positionsUncheckedCreateWithoutTeamsInput> | team_stack_positionsCreateWithoutTeamsInput[] | team_stack_positionsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: team_stack_positionsCreateOrConnectWithoutTeamsInput | team_stack_positionsCreateOrConnectWithoutTeamsInput[]
    upsert?: team_stack_positionsUpsertWithWhereUniqueWithoutTeamsInput | team_stack_positionsUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: team_stack_positionsCreateManyTeamsInputEnvelope
    set?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    disconnect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    delete?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    connect?: team_stack_positionsWhereUniqueInput | team_stack_positionsWhereUniqueInput[]
    update?: team_stack_positionsUpdateWithWhereUniqueWithoutTeamsInput | team_stack_positionsUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: team_stack_positionsUpdateManyWithWhereWithoutTeamsInput | team_stack_positionsUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: team_stack_positionsScalarWhereInput | team_stack_positionsScalarWhereInput[]
  }

  export type stacksCreateNestedOneWithoutUser_stacksInput = {
    create?: XOR<stacksCreateWithoutUser_stacksInput, stacksUncheckedCreateWithoutUser_stacksInput>
    connectOrCreate?: stacksCreateOrConnectWithoutUser_stacksInput
    connect?: stacksWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_stacksInput = {
    create?: XOR<usersCreateWithoutUser_stacksInput, usersUncheckedCreateWithoutUser_stacksInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_stacksInput
    connect?: usersWhereUniqueInput
  }

  export type stacksUpdateOneRequiredWithoutUser_stacksNestedInput = {
    create?: XOR<stacksCreateWithoutUser_stacksInput, stacksUncheckedCreateWithoutUser_stacksInput>
    connectOrCreate?: stacksCreateOrConnectWithoutUser_stacksInput
    upsert?: stacksUpsertWithoutUser_stacksInput
    connect?: stacksWhereUniqueInput
    update?: XOR<XOR<stacksUpdateToOneWithWhereWithoutUser_stacksInput, stacksUpdateWithoutUser_stacksInput>, stacksUncheckedUpdateWithoutUser_stacksInput>
  }

  export type usersUpdateOneRequiredWithoutUser_stacksNestedInput = {
    create?: XOR<usersCreateWithoutUser_stacksInput, usersUncheckedCreateWithoutUser_stacksInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_stacksInput
    upsert?: usersUpsertWithoutUser_stacksInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_stacksInput, usersUpdateWithoutUser_stacksInput>, usersUncheckedUpdateWithoutUser_stacksInput>
  }

  export type apply_historyCreateNestedManyWithoutUsersInput = {
    create?: XOR<apply_historyCreateWithoutUsersInput, apply_historyUncheckedCreateWithoutUsersInput> | apply_historyCreateWithoutUsersInput[] | apply_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: apply_historyCreateOrConnectWithoutUsersInput | apply_historyCreateOrConnectWithoutUsersInput[]
    createMany?: apply_historyCreateManyUsersInputEnvelope
    connect?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
  }

  export type team_usersCreateNestedManyWithoutUsersInput = {
    create?: XOR<team_usersCreateWithoutUsersInput, team_usersUncheckedCreateWithoutUsersInput> | team_usersCreateWithoutUsersInput[] | team_usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_usersCreateOrConnectWithoutUsersInput | team_usersCreateOrConnectWithoutUsersInput[]
    createMany?: team_usersCreateManyUsersInputEnvelope
    connect?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
  }

  export type user_authsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_authsCreateWithoutUsersInput, user_authsUncheckedCreateWithoutUsersInput> | user_authsCreateWithoutUsersInput[] | user_authsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_authsCreateOrConnectWithoutUsersInput | user_authsCreateOrConnectWithoutUsersInput[]
    createMany?: user_authsCreateManyUsersInputEnvelope
    connect?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
  }

  export type positionsCreateNestedOneWithoutUsersInput = {
    create?: XOR<positionsCreateWithoutUsersInput, positionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: positionsCreateOrConnectWithoutUsersInput
    connect?: positionsWhereUniqueInput
  }

  export type user_stacksCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_stacksCreateWithoutUsersInput, user_stacksUncheckedCreateWithoutUsersInput> | user_stacksCreateWithoutUsersInput[] | user_stacksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_stacksCreateOrConnectWithoutUsersInput | user_stacksCreateOrConnectWithoutUsersInput[]
    createMany?: user_stacksCreateManyUsersInputEnvelope
    connect?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
  }

  export type apply_historyUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<apply_historyCreateWithoutUsersInput, apply_historyUncheckedCreateWithoutUsersInput> | apply_historyCreateWithoutUsersInput[] | apply_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: apply_historyCreateOrConnectWithoutUsersInput | apply_historyCreateOrConnectWithoutUsersInput[]
    createMany?: apply_historyCreateManyUsersInputEnvelope
    connect?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
  }

  export type team_usersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<team_usersCreateWithoutUsersInput, team_usersUncheckedCreateWithoutUsersInput> | team_usersCreateWithoutUsersInput[] | team_usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_usersCreateOrConnectWithoutUsersInput | team_usersCreateOrConnectWithoutUsersInput[]
    createMany?: team_usersCreateManyUsersInputEnvelope
    connect?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
  }

  export type user_authsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_authsCreateWithoutUsersInput, user_authsUncheckedCreateWithoutUsersInput> | user_authsCreateWithoutUsersInput[] | user_authsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_authsCreateOrConnectWithoutUsersInput | user_authsCreateOrConnectWithoutUsersInput[]
    createMany?: user_authsCreateManyUsersInputEnvelope
    connect?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
  }

  export type user_stacksUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_stacksCreateWithoutUsersInput, user_stacksUncheckedCreateWithoutUsersInput> | user_stacksCreateWithoutUsersInput[] | user_stacksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_stacksCreateOrConnectWithoutUsersInput | user_stacksCreateOrConnectWithoutUsersInput[]
    createMany?: user_stacksCreateManyUsersInputEnvelope
    connect?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
  }

  export type NullableEnumrolesFieldUpdateOperationsInput = {
    set?: $Enums.roles | null
  }

  export type NullableEnummeetingsFieldUpdateOperationsInput = {
    set?: $Enums.meetings | null
  }

  export type apply_historyUpdateManyWithoutUsersNestedInput = {
    create?: XOR<apply_historyCreateWithoutUsersInput, apply_historyUncheckedCreateWithoutUsersInput> | apply_historyCreateWithoutUsersInput[] | apply_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: apply_historyCreateOrConnectWithoutUsersInput | apply_historyCreateOrConnectWithoutUsersInput[]
    upsert?: apply_historyUpsertWithWhereUniqueWithoutUsersInput | apply_historyUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: apply_historyCreateManyUsersInputEnvelope
    set?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    disconnect?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    delete?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    connect?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    update?: apply_historyUpdateWithWhereUniqueWithoutUsersInput | apply_historyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: apply_historyUpdateManyWithWhereWithoutUsersInput | apply_historyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: apply_historyScalarWhereInput | apply_historyScalarWhereInput[]
  }

  export type team_usersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<team_usersCreateWithoutUsersInput, team_usersUncheckedCreateWithoutUsersInput> | team_usersCreateWithoutUsersInput[] | team_usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_usersCreateOrConnectWithoutUsersInput | team_usersCreateOrConnectWithoutUsersInput[]
    upsert?: team_usersUpsertWithWhereUniqueWithoutUsersInput | team_usersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: team_usersCreateManyUsersInputEnvelope
    set?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    disconnect?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    delete?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    connect?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    update?: team_usersUpdateWithWhereUniqueWithoutUsersInput | team_usersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: team_usersUpdateManyWithWhereWithoutUsersInput | team_usersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: team_usersScalarWhereInput | team_usersScalarWhereInput[]
  }

  export type user_authsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_authsCreateWithoutUsersInput, user_authsUncheckedCreateWithoutUsersInput> | user_authsCreateWithoutUsersInput[] | user_authsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_authsCreateOrConnectWithoutUsersInput | user_authsCreateOrConnectWithoutUsersInput[]
    upsert?: user_authsUpsertWithWhereUniqueWithoutUsersInput | user_authsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_authsCreateManyUsersInputEnvelope
    set?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    disconnect?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    delete?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    connect?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    update?: user_authsUpdateWithWhereUniqueWithoutUsersInput | user_authsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_authsUpdateManyWithWhereWithoutUsersInput | user_authsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_authsScalarWhereInput | user_authsScalarWhereInput[]
  }

  export type positionsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<positionsCreateWithoutUsersInput, positionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: positionsCreateOrConnectWithoutUsersInput
    upsert?: positionsUpsertWithoutUsersInput
    disconnect?: positionsWhereInput | boolean
    delete?: positionsWhereInput | boolean
    connect?: positionsWhereUniqueInput
    update?: XOR<XOR<positionsUpdateToOneWithWhereWithoutUsersInput, positionsUpdateWithoutUsersInput>, positionsUncheckedUpdateWithoutUsersInput>
  }

  export type user_stacksUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_stacksCreateWithoutUsersInput, user_stacksUncheckedCreateWithoutUsersInput> | user_stacksCreateWithoutUsersInput[] | user_stacksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_stacksCreateOrConnectWithoutUsersInput | user_stacksCreateOrConnectWithoutUsersInput[]
    upsert?: user_stacksUpsertWithWhereUniqueWithoutUsersInput | user_stacksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_stacksCreateManyUsersInputEnvelope
    set?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    disconnect?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    delete?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    connect?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    update?: user_stacksUpdateWithWhereUniqueWithoutUsersInput | user_stacksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_stacksUpdateManyWithWhereWithoutUsersInput | user_stacksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_stacksScalarWhereInput | user_stacksScalarWhereInput[]
  }

  export type apply_historyUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<apply_historyCreateWithoutUsersInput, apply_historyUncheckedCreateWithoutUsersInput> | apply_historyCreateWithoutUsersInput[] | apply_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: apply_historyCreateOrConnectWithoutUsersInput | apply_historyCreateOrConnectWithoutUsersInput[]
    upsert?: apply_historyUpsertWithWhereUniqueWithoutUsersInput | apply_historyUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: apply_historyCreateManyUsersInputEnvelope
    set?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    disconnect?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    delete?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    connect?: apply_historyWhereUniqueInput | apply_historyWhereUniqueInput[]
    update?: apply_historyUpdateWithWhereUniqueWithoutUsersInput | apply_historyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: apply_historyUpdateManyWithWhereWithoutUsersInput | apply_historyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: apply_historyScalarWhereInput | apply_historyScalarWhereInput[]
  }

  export type team_usersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<team_usersCreateWithoutUsersInput, team_usersUncheckedCreateWithoutUsersInput> | team_usersCreateWithoutUsersInput[] | team_usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_usersCreateOrConnectWithoutUsersInput | team_usersCreateOrConnectWithoutUsersInput[]
    upsert?: team_usersUpsertWithWhereUniqueWithoutUsersInput | team_usersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: team_usersCreateManyUsersInputEnvelope
    set?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    disconnect?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    delete?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    connect?: team_usersWhereUniqueInput | team_usersWhereUniqueInput[]
    update?: team_usersUpdateWithWhereUniqueWithoutUsersInput | team_usersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: team_usersUpdateManyWithWhereWithoutUsersInput | team_usersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: team_usersScalarWhereInput | team_usersScalarWhereInput[]
  }

  export type user_authsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_authsCreateWithoutUsersInput, user_authsUncheckedCreateWithoutUsersInput> | user_authsCreateWithoutUsersInput[] | user_authsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_authsCreateOrConnectWithoutUsersInput | user_authsCreateOrConnectWithoutUsersInput[]
    upsert?: user_authsUpsertWithWhereUniqueWithoutUsersInput | user_authsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_authsCreateManyUsersInputEnvelope
    set?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    disconnect?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    delete?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    connect?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    update?: user_authsUpdateWithWhereUniqueWithoutUsersInput | user_authsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_authsUpdateManyWithWhereWithoutUsersInput | user_authsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_authsScalarWhereInput | user_authsScalarWhereInput[]
  }

  export type user_stacksUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_stacksCreateWithoutUsersInput, user_stacksUncheckedCreateWithoutUsersInput> | user_stacksCreateWithoutUsersInput[] | user_stacksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_stacksCreateOrConnectWithoutUsersInput | user_stacksCreateOrConnectWithoutUsersInput[]
    upsert?: user_stacksUpsertWithWhereUniqueWithoutUsersInput | user_stacksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_stacksCreateManyUsersInputEnvelope
    set?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    disconnect?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    delete?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    connect?: user_stacksWhereUniqueInput | user_stacksWhereUniqueInput[]
    update?: user_stacksUpdateWithWhereUniqueWithoutUsersInput | user_stacksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_stacksUpdateManyWithWhereWithoutUsersInput | user_stacksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_stacksScalarWhereInput | user_stacksScalarWhereInput[]
  }

  export type auth_methodsCreateNestedOneWithoutUser_authsInput = {
    create?: XOR<auth_methodsCreateWithoutUser_authsInput, auth_methodsUncheckedCreateWithoutUser_authsInput>
    connectOrCreate?: auth_methodsCreateOrConnectWithoutUser_authsInput
    connect?: auth_methodsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_authsInput = {
    create?: XOR<usersCreateWithoutUser_authsInput, usersUncheckedCreateWithoutUser_authsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_authsInput
    connect?: usersWhereUniqueInput
  }

  export type auth_methodsUpdateOneRequiredWithoutUser_authsNestedInput = {
    create?: XOR<auth_methodsCreateWithoutUser_authsInput, auth_methodsUncheckedCreateWithoutUser_authsInput>
    connectOrCreate?: auth_methodsCreateOrConnectWithoutUser_authsInput
    upsert?: auth_methodsUpsertWithoutUser_authsInput
    connect?: auth_methodsWhereUniqueInput
    update?: XOR<XOR<auth_methodsUpdateToOneWithWhereWithoutUser_authsInput, auth_methodsUpdateWithoutUser_authsInput>, auth_methodsUncheckedUpdateWithoutUser_authsInput>
  }

  export type usersUpdateOneRequiredWithoutUser_authsNestedInput = {
    create?: XOR<usersCreateWithoutUser_authsInput, usersUncheckedCreateWithoutUser_authsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_authsInput
    upsert?: usersUpsertWithoutUser_authsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_authsInput, usersUpdateWithoutUser_authsInput>, usersUncheckedUpdateWithoutUser_authsInput>
  }

  export type user_authsCreateNestedManyWithoutAuth_methodsInput = {
    create?: XOR<user_authsCreateWithoutAuth_methodsInput, user_authsUncheckedCreateWithoutAuth_methodsInput> | user_authsCreateWithoutAuth_methodsInput[] | user_authsUncheckedCreateWithoutAuth_methodsInput[]
    connectOrCreate?: user_authsCreateOrConnectWithoutAuth_methodsInput | user_authsCreateOrConnectWithoutAuth_methodsInput[]
    createMany?: user_authsCreateManyAuth_methodsInputEnvelope
    connect?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
  }

  export type user_authsUncheckedCreateNestedManyWithoutAuth_methodsInput = {
    create?: XOR<user_authsCreateWithoutAuth_methodsInput, user_authsUncheckedCreateWithoutAuth_methodsInput> | user_authsCreateWithoutAuth_methodsInput[] | user_authsUncheckedCreateWithoutAuth_methodsInput[]
    connectOrCreate?: user_authsCreateOrConnectWithoutAuth_methodsInput | user_authsCreateOrConnectWithoutAuth_methodsInput[]
    createMany?: user_authsCreateManyAuth_methodsInputEnvelope
    connect?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
  }

  export type NullableEnumauth_methodFieldUpdateOperationsInput = {
    set?: $Enums.auth_method | null
  }

  export type user_authsUpdateManyWithoutAuth_methodsNestedInput = {
    create?: XOR<user_authsCreateWithoutAuth_methodsInput, user_authsUncheckedCreateWithoutAuth_methodsInput> | user_authsCreateWithoutAuth_methodsInput[] | user_authsUncheckedCreateWithoutAuth_methodsInput[]
    connectOrCreate?: user_authsCreateOrConnectWithoutAuth_methodsInput | user_authsCreateOrConnectWithoutAuth_methodsInput[]
    upsert?: user_authsUpsertWithWhereUniqueWithoutAuth_methodsInput | user_authsUpsertWithWhereUniqueWithoutAuth_methodsInput[]
    createMany?: user_authsCreateManyAuth_methodsInputEnvelope
    set?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    disconnect?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    delete?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    connect?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    update?: user_authsUpdateWithWhereUniqueWithoutAuth_methodsInput | user_authsUpdateWithWhereUniqueWithoutAuth_methodsInput[]
    updateMany?: user_authsUpdateManyWithWhereWithoutAuth_methodsInput | user_authsUpdateManyWithWhereWithoutAuth_methodsInput[]
    deleteMany?: user_authsScalarWhereInput | user_authsScalarWhereInput[]
  }

  export type user_authsUncheckedUpdateManyWithoutAuth_methodsNestedInput = {
    create?: XOR<user_authsCreateWithoutAuth_methodsInput, user_authsUncheckedCreateWithoutAuth_methodsInput> | user_authsCreateWithoutAuth_methodsInput[] | user_authsUncheckedCreateWithoutAuth_methodsInput[]
    connectOrCreate?: user_authsCreateOrConnectWithoutAuth_methodsInput | user_authsCreateOrConnectWithoutAuth_methodsInput[]
    upsert?: user_authsUpsertWithWhereUniqueWithoutAuth_methodsInput | user_authsUpsertWithWhereUniqueWithoutAuth_methodsInput[]
    createMany?: user_authsCreateManyAuth_methodsInputEnvelope
    set?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    disconnect?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    delete?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    connect?: user_authsWhereUniqueInput | user_authsWhereUniqueInput[]
    update?: user_authsUpdateWithWhereUniqueWithoutAuth_methodsInput | user_authsUpdateWithWhereUniqueWithoutAuth_methodsInput[]
    updateMany?: user_authsUpdateManyWithWhereWithoutAuth_methodsInput | user_authsUpdateManyWithWhereWithoutAuth_methodsInput[]
    deleteMany?: user_authsScalarWhereInput | user_authsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumapply_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.apply_status | Enumapply_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.apply_status[] | ListEnumapply_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.apply_status[] | ListEnumapply_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumapply_statusNullableFilter<$PrismaModel> | $Enums.apply_status | null
  }

  export type NestedEnumapply_fromFilter<$PrismaModel = never> = {
    equals?: $Enums.apply_from | Enumapply_fromFieldRefInput<$PrismaModel>
    in?: $Enums.apply_from[] | ListEnumapply_fromFieldRefInput<$PrismaModel>
    notIn?: $Enums.apply_from[] | ListEnumapply_fromFieldRefInput<$PrismaModel>
    not?: NestedEnumapply_fromFilter<$PrismaModel> | $Enums.apply_from
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedEnumapply_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.apply_status | Enumapply_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.apply_status[] | ListEnumapply_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.apply_status[] | ListEnumapply_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumapply_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.apply_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumapply_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumapply_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumapply_fromWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.apply_from | Enumapply_fromFieldRefInput<$PrismaModel>
    in?: $Enums.apply_from[] | ListEnumapply_fromFieldRefInput<$PrismaModel>
    notIn?: $Enums.apply_from[] | ListEnumapply_fromFieldRefInput<$PrismaModel>
    not?: NestedEnumapply_fromWithAggregatesFilter<$PrismaModel> | $Enums.apply_from
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumapply_fromFilter<$PrismaModel>
    _max?: NestedEnumapply_fromFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumrecruit_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.recruit_status | Enumrecruit_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.recruit_status[] | ListEnumrecruit_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.recruit_status[] | ListEnumrecruit_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrecruit_statusNullableFilter<$PrismaModel> | $Enums.recruit_status | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumrecruit_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.recruit_status | Enumrecruit_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.recruit_status[] | ListEnumrecruit_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.recruit_status[] | ListEnumrecruit_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrecruit_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.recruit_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumrecruit_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumrecruit_statusNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnummember_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.member_status | Enummember_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.member_status[] | ListEnummember_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.member_status[] | ListEnummember_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnummember_statusNullableFilter<$PrismaModel> | $Enums.member_status | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnummember_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.member_status | Enummember_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.member_status[] | ListEnummember_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.member_status[] | ListEnummember_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnummember_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.member_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummember_statusNullableFilter<$PrismaModel>
    _max?: NestedEnummember_statusNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumproceed_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.proceed_type | Enumproceed_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.proceed_type[] | ListEnumproceed_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.proceed_type[] | ListEnumproceed_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproceed_typeNullableFilter<$PrismaModel> | $Enums.proceed_type | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumproceed_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.proceed_type | Enumproceed_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.proceed_type[] | ListEnumproceed_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.proceed_type[] | ListEnumproceed_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproceed_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.proceed_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumproceed_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumproceed_typeNullableFilter<$PrismaModel>
  }

  export type NestedEnumrolesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.roles | EnumrolesFieldRefInput<$PrismaModel> | null
    in?: $Enums.roles[] | ListEnumrolesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.roles[] | ListEnumrolesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrolesNullableFilter<$PrismaModel> | $Enums.roles | null
  }

  export type NestedEnummeetingsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.meetings | EnummeetingsFieldRefInput<$PrismaModel> | null
    in?: $Enums.meetings[] | ListEnummeetingsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.meetings[] | ListEnummeetingsFieldRefInput<$PrismaModel> | null
    not?: NestedEnummeetingsNullableFilter<$PrismaModel> | $Enums.meetings | null
  }

  export type NestedEnumrolesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.roles | EnumrolesFieldRefInput<$PrismaModel> | null
    in?: $Enums.roles[] | ListEnumrolesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.roles[] | ListEnumrolesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrolesNullableWithAggregatesFilter<$PrismaModel> | $Enums.roles | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumrolesNullableFilter<$PrismaModel>
    _max?: NestedEnumrolesNullableFilter<$PrismaModel>
  }

  export type NestedEnummeetingsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.meetings | EnummeetingsFieldRefInput<$PrismaModel> | null
    in?: $Enums.meetings[] | ListEnummeetingsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.meetings[] | ListEnummeetingsFieldRefInput<$PrismaModel> | null
    not?: NestedEnummeetingsNullableWithAggregatesFilter<$PrismaModel> | $Enums.meetings | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummeetingsNullableFilter<$PrismaModel>
    _max?: NestedEnummeetingsNullableFilter<$PrismaModel>
  }

  export type NestedEnumauth_methodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.auth_method | Enumauth_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.auth_method[] | ListEnumauth_methodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.auth_method[] | ListEnumauth_methodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumauth_methodNullableFilter<$PrismaModel> | $Enums.auth_method | null
  }

  export type NestedEnumauth_methodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.auth_method | Enumauth_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.auth_method[] | ListEnumauth_methodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.auth_method[] | ListEnumauth_methodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumauth_methodNullableWithAggregatesFilter<$PrismaModel> | $Enums.auth_method | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumauth_methodNullableFilter<$PrismaModel>
    _max?: NestedEnumauth_methodNullableFilter<$PrismaModel>
  }

  export type teamsCreateWithoutApply_historyInput = {
    id?: string
    title?: string | null
    content?: string | null
    user_id?: string | null
    Field?: boolean | null
    recruit_status?: $Enums.recruit_status | null
    proceed_type?: $Enums.proceed_type | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_stack_positions?: team_stack_positionsCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutApply_historyInput = {
    id?: string
    title?: string | null
    content?: string | null
    user_id?: string | null
    Field?: boolean | null
    recruit_status?: $Enums.recruit_status | null
    proceed_type?: $Enums.proceed_type | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_stack_positions?: team_stack_positionsUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsCreateOrConnectWithoutApply_historyInput = {
    where: teamsWhereUniqueInput
    create: XOR<teamsCreateWithoutApply_historyInput, teamsUncheckedCreateWithoutApply_historyInput>
  }

  export type usersCreateWithoutApply_historyInput = {
    id?: string
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
    team_users?: team_usersCreateNestedManyWithoutUsersInput
    user_auths?: user_authsCreateNestedManyWithoutUsersInput
    positions?: positionsCreateNestedOneWithoutUsersInput
    user_stacks?: user_stacksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutApply_historyInput = {
    id?: string
    position_id?: string | null
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
    team_users?: team_usersUncheckedCreateNestedManyWithoutUsersInput
    user_auths?: user_authsUncheckedCreateNestedManyWithoutUsersInput
    user_stacks?: user_stacksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutApply_historyInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutApply_historyInput, usersUncheckedCreateWithoutApply_historyInput>
  }

  export type teamsUpsertWithoutApply_historyInput = {
    update: XOR<teamsUpdateWithoutApply_historyInput, teamsUncheckedUpdateWithoutApply_historyInput>
    create: XOR<teamsCreateWithoutApply_historyInput, teamsUncheckedCreateWithoutApply_historyInput>
    where?: teamsWhereInput
  }

  export type teamsUpdateToOneWithWhereWithoutApply_historyInput = {
    where?: teamsWhereInput
    data: XOR<teamsUpdateWithoutApply_historyInput, teamsUncheckedUpdateWithoutApply_historyInput>
  }

  export type teamsUpdateWithoutApply_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    Field?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    proceed_type?: NullableEnumproceed_typeFieldUpdateOperationsInput | $Enums.proceed_type | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_stack_positions?: team_stack_positionsUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutApply_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    Field?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    proceed_type?: NullableEnumproceed_typeFieldUpdateOperationsInput | $Enums.proceed_type | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_stack_positions?: team_stack_positionsUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type usersUpsertWithoutApply_historyInput = {
    update: XOR<usersUpdateWithoutApply_historyInput, usersUncheckedUpdateWithoutApply_historyInput>
    create: XOR<usersCreateWithoutApply_historyInput, usersUncheckedCreateWithoutApply_historyInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutApply_historyInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutApply_historyInput, usersUncheckedUpdateWithoutApply_historyInput>
  }

  export type usersUpdateWithoutApply_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
    team_users?: team_usersUpdateManyWithoutUsersNestedInput
    user_auths?: user_authsUpdateManyWithoutUsersNestedInput
    positions?: positionsUpdateOneWithoutUsersNestedInput
    user_stacks?: user_stacksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutApply_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    position_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
    team_users?: team_usersUncheckedUpdateManyWithoutUsersNestedInput
    user_auths?: user_authsUncheckedUpdateManyWithoutUsersNestedInput
    user_stacks?: user_stacksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type team_stack_positionsCreateWithoutPositionsInput = {
    id?: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    stacks: stacksCreateNestedOneWithoutTeam_stack_positionsInput
    teams: teamsCreateNestedOneWithoutTeam_stack_positionsInput
    team_users?: team_usersCreateNestedManyWithoutTeam_stack_positionsInput
  }

  export type team_stack_positionsUncheckedCreateWithoutPositionsInput = {
    id?: string
    team_id: string
    stack_id: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_users?: team_usersUncheckedCreateNestedManyWithoutTeam_stack_positionsInput
  }

  export type team_stack_positionsCreateOrConnectWithoutPositionsInput = {
    where: team_stack_positionsWhereUniqueInput
    create: XOR<team_stack_positionsCreateWithoutPositionsInput, team_stack_positionsUncheckedCreateWithoutPositionsInput>
  }

  export type team_stack_positionsCreateManyPositionsInputEnvelope = {
    data: team_stack_positionsCreateManyPositionsInput | team_stack_positionsCreateManyPositionsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPositionsInput = {
    id?: string
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
    apply_history?: apply_historyCreateNestedManyWithoutUsersInput
    team_users?: team_usersCreateNestedManyWithoutUsersInput
    user_auths?: user_authsCreateNestedManyWithoutUsersInput
    user_stacks?: user_stacksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPositionsInput = {
    id?: string
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
    apply_history?: apply_historyUncheckedCreateNestedManyWithoutUsersInput
    team_users?: team_usersUncheckedCreateNestedManyWithoutUsersInput
    user_auths?: user_authsUncheckedCreateNestedManyWithoutUsersInput
    user_stacks?: user_stacksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPositionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPositionsInput, usersUncheckedCreateWithoutPositionsInput>
  }

  export type usersCreateManyPositionsInputEnvelope = {
    data: usersCreateManyPositionsInput | usersCreateManyPositionsInput[]
    skipDuplicates?: boolean
  }

  export type team_stack_positionsUpsertWithWhereUniqueWithoutPositionsInput = {
    where: team_stack_positionsWhereUniqueInput
    update: XOR<team_stack_positionsUpdateWithoutPositionsInput, team_stack_positionsUncheckedUpdateWithoutPositionsInput>
    create: XOR<team_stack_positionsCreateWithoutPositionsInput, team_stack_positionsUncheckedCreateWithoutPositionsInput>
  }

  export type team_stack_positionsUpdateWithWhereUniqueWithoutPositionsInput = {
    where: team_stack_positionsWhereUniqueInput
    data: XOR<team_stack_positionsUpdateWithoutPositionsInput, team_stack_positionsUncheckedUpdateWithoutPositionsInput>
  }

  export type team_stack_positionsUpdateManyWithWhereWithoutPositionsInput = {
    where: team_stack_positionsScalarWhereInput
    data: XOR<team_stack_positionsUpdateManyMutationInput, team_stack_positionsUncheckedUpdateManyWithoutPositionsInput>
  }

  export type team_stack_positionsScalarWhereInput = {
    AND?: team_stack_positionsScalarWhereInput | team_stack_positionsScalarWhereInput[]
    OR?: team_stack_positionsScalarWhereInput[]
    NOT?: team_stack_positionsScalarWhereInput | team_stack_positionsScalarWhereInput[]
    id?: UuidFilter<"team_stack_positions"> | string
    team_id?: UuidFilter<"team_stack_positions"> | string
    stack_id?: UuidFilter<"team_stack_positions"> | string
    position_id?: UuidFilter<"team_stack_positions"> | string
    status?: BoolFilter<"team_stack_positions"> | boolean
    recruit_status?: Enumrecruit_statusNullableFilter<"team_stack_positions"> | $Enums.recruit_status | null
    count?: IntNullableFilter<"team_stack_positions"> | number | null
    created_at?: DateTimeNullableFilter<"team_stack_positions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"team_stack_positions"> | Date | string | null
  }

  export type usersUpsertWithWhereUniqueWithoutPositionsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutPositionsInput, usersUncheckedUpdateWithoutPositionsInput>
    create: XOR<usersCreateWithoutPositionsInput, usersUncheckedCreateWithoutPositionsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutPositionsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutPositionsInput, usersUncheckedUpdateWithoutPositionsInput>
  }

  export type usersUpdateManyWithWhereWithoutPositionsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutPositionsInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: UuidFilter<"users"> | string
    position_id?: UuidNullableFilter<"users"> | string | null
    role?: EnumrolesNullableFilter<"users"> | $Enums.roles | null
    name?: StringFilter<"users"> | string
    nickname?: StringNullableFilter<"users"> | string | null
    salt?: StringNullableFilter<"users"> | string | null
    github_url?: StringNullableFilter<"users"> | string | null
    img?: StringNullableFilter<"users"> | string | null
    address?: StringNullableFilter<"users"> | string | null
    join_status?: BoolNullableFilter<"users"> | boolean | null
    create_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    Field?: StringNullableFilter<"users"> | string | null
    preferred_meeting?: EnummeetingsNullableFilter<"users"> | $Enums.meetings | null
  }

  export type stacksCreateWithoutStack_categoriesInput = {
    id?: string
    name?: string | null
    img_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_stack_positions?: team_stack_positionsCreateNestedManyWithoutStacksInput
    user_stacks?: user_stacksCreateNestedManyWithoutStacksInput
  }

  export type stacksUncheckedCreateWithoutStack_categoriesInput = {
    id?: string
    name?: string | null
    img_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_stack_positions?: team_stack_positionsUncheckedCreateNestedManyWithoutStacksInput
    user_stacks?: user_stacksUncheckedCreateNestedManyWithoutStacksInput
  }

  export type stacksCreateOrConnectWithoutStack_categoriesInput = {
    where: stacksWhereUniqueInput
    create: XOR<stacksCreateWithoutStack_categoriesInput, stacksUncheckedCreateWithoutStack_categoriesInput>
  }

  export type stacksCreateManyStack_categoriesInputEnvelope = {
    data: stacksCreateManyStack_categoriesInput | stacksCreateManyStack_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type stacksUpsertWithWhereUniqueWithoutStack_categoriesInput = {
    where: stacksWhereUniqueInput
    update: XOR<stacksUpdateWithoutStack_categoriesInput, stacksUncheckedUpdateWithoutStack_categoriesInput>
    create: XOR<stacksCreateWithoutStack_categoriesInput, stacksUncheckedCreateWithoutStack_categoriesInput>
  }

  export type stacksUpdateWithWhereUniqueWithoutStack_categoriesInput = {
    where: stacksWhereUniqueInput
    data: XOR<stacksUpdateWithoutStack_categoriesInput, stacksUncheckedUpdateWithoutStack_categoriesInput>
  }

  export type stacksUpdateManyWithWhereWithoutStack_categoriesInput = {
    where: stacksScalarWhereInput
    data: XOR<stacksUpdateManyMutationInput, stacksUncheckedUpdateManyWithoutStack_categoriesInput>
  }

  export type stacksScalarWhereInput = {
    AND?: stacksScalarWhereInput | stacksScalarWhereInput[]
    OR?: stacksScalarWhereInput[]
    NOT?: stacksScalarWhereInput | stacksScalarWhereInput[]
    id?: UuidFilter<"stacks"> | string
    category_id?: UuidFilter<"stacks"> | string
    name?: StringNullableFilter<"stacks"> | string | null
    img_url?: StringFilter<"stacks"> | string
    created_at?: DateTimeNullableFilter<"stacks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"stacks"> | Date | string | null
  }

  export type stack_categoriesCreateWithoutStacksInput = {
    id?: string
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type stack_categoriesUncheckedCreateWithoutStacksInput = {
    id?: string
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type stack_categoriesCreateOrConnectWithoutStacksInput = {
    where: stack_categoriesWhereUniqueInput
    create: XOR<stack_categoriesCreateWithoutStacksInput, stack_categoriesUncheckedCreateWithoutStacksInput>
  }

  export type team_stack_positionsCreateWithoutStacksInput = {
    id?: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    positions: positionsCreateNestedOneWithoutTeam_stack_positionsInput
    teams: teamsCreateNestedOneWithoutTeam_stack_positionsInput
    team_users?: team_usersCreateNestedManyWithoutTeam_stack_positionsInput
  }

  export type team_stack_positionsUncheckedCreateWithoutStacksInput = {
    id?: string
    team_id: string
    position_id: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_users?: team_usersUncheckedCreateNestedManyWithoutTeam_stack_positionsInput
  }

  export type team_stack_positionsCreateOrConnectWithoutStacksInput = {
    where: team_stack_positionsWhereUniqueInput
    create: XOR<team_stack_positionsCreateWithoutStacksInput, team_stack_positionsUncheckedCreateWithoutStacksInput>
  }

  export type team_stack_positionsCreateManyStacksInputEnvelope = {
    data: team_stack_positionsCreateManyStacksInput | team_stack_positionsCreateManyStacksInput[]
    skipDuplicates?: boolean
  }

  export type user_stacksCreateWithoutStacksInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutUser_stacksInput
  }

  export type user_stacksUncheckedCreateWithoutStacksInput = {
    user_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_stacksCreateOrConnectWithoutStacksInput = {
    where: user_stacksWhereUniqueInput
    create: XOR<user_stacksCreateWithoutStacksInput, user_stacksUncheckedCreateWithoutStacksInput>
  }

  export type user_stacksCreateManyStacksInputEnvelope = {
    data: user_stacksCreateManyStacksInput | user_stacksCreateManyStacksInput[]
    skipDuplicates?: boolean
  }

  export type stack_categoriesUpsertWithoutStacksInput = {
    update: XOR<stack_categoriesUpdateWithoutStacksInput, stack_categoriesUncheckedUpdateWithoutStacksInput>
    create: XOR<stack_categoriesCreateWithoutStacksInput, stack_categoriesUncheckedCreateWithoutStacksInput>
    where?: stack_categoriesWhereInput
  }

  export type stack_categoriesUpdateToOneWithWhereWithoutStacksInput = {
    where?: stack_categoriesWhereInput
    data: XOR<stack_categoriesUpdateWithoutStacksInput, stack_categoriesUncheckedUpdateWithoutStacksInput>
  }

  export type stack_categoriesUpdateWithoutStacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stack_categoriesUncheckedUpdateWithoutStacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_stack_positionsUpsertWithWhereUniqueWithoutStacksInput = {
    where: team_stack_positionsWhereUniqueInput
    update: XOR<team_stack_positionsUpdateWithoutStacksInput, team_stack_positionsUncheckedUpdateWithoutStacksInput>
    create: XOR<team_stack_positionsCreateWithoutStacksInput, team_stack_positionsUncheckedCreateWithoutStacksInput>
  }

  export type team_stack_positionsUpdateWithWhereUniqueWithoutStacksInput = {
    where: team_stack_positionsWhereUniqueInput
    data: XOR<team_stack_positionsUpdateWithoutStacksInput, team_stack_positionsUncheckedUpdateWithoutStacksInput>
  }

  export type team_stack_positionsUpdateManyWithWhereWithoutStacksInput = {
    where: team_stack_positionsScalarWhereInput
    data: XOR<team_stack_positionsUpdateManyMutationInput, team_stack_positionsUncheckedUpdateManyWithoutStacksInput>
  }

  export type user_stacksUpsertWithWhereUniqueWithoutStacksInput = {
    where: user_stacksWhereUniqueInput
    update: XOR<user_stacksUpdateWithoutStacksInput, user_stacksUncheckedUpdateWithoutStacksInput>
    create: XOR<user_stacksCreateWithoutStacksInput, user_stacksUncheckedCreateWithoutStacksInput>
  }

  export type user_stacksUpdateWithWhereUniqueWithoutStacksInput = {
    where: user_stacksWhereUniqueInput
    data: XOR<user_stacksUpdateWithoutStacksInput, user_stacksUncheckedUpdateWithoutStacksInput>
  }

  export type user_stacksUpdateManyWithWhereWithoutStacksInput = {
    where: user_stacksScalarWhereInput
    data: XOR<user_stacksUpdateManyMutationInput, user_stacksUncheckedUpdateManyWithoutStacksInput>
  }

  export type user_stacksScalarWhereInput = {
    AND?: user_stacksScalarWhereInput | user_stacksScalarWhereInput[]
    OR?: user_stacksScalarWhereInput[]
    NOT?: user_stacksScalarWhereInput | user_stacksScalarWhereInput[]
    user_id?: UuidFilter<"user_stacks"> | string
    stack_id?: UuidFilter<"user_stacks"> | string
    created_at?: DateTimeNullableFilter<"user_stacks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_stacks"> | Date | string | null
  }

  export type positionsCreateWithoutTeam_stack_positionsInput = {
    id?: string
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedManyWithoutPositionsInput
  }

  export type positionsUncheckedCreateWithoutTeam_stack_positionsInput = {
    id?: string
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutPositionsInput
  }

  export type positionsCreateOrConnectWithoutTeam_stack_positionsInput = {
    where: positionsWhereUniqueInput
    create: XOR<positionsCreateWithoutTeam_stack_positionsInput, positionsUncheckedCreateWithoutTeam_stack_positionsInput>
  }

  export type stacksCreateWithoutTeam_stack_positionsInput = {
    id?: string
    name?: string | null
    img_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    stack_categories: stack_categoriesCreateNestedOneWithoutStacksInput
    user_stacks?: user_stacksCreateNestedManyWithoutStacksInput
  }

  export type stacksUncheckedCreateWithoutTeam_stack_positionsInput = {
    id?: string
    category_id: string
    name?: string | null
    img_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_stacks?: user_stacksUncheckedCreateNestedManyWithoutStacksInput
  }

  export type stacksCreateOrConnectWithoutTeam_stack_positionsInput = {
    where: stacksWhereUniqueInput
    create: XOR<stacksCreateWithoutTeam_stack_positionsInput, stacksUncheckedCreateWithoutTeam_stack_positionsInput>
  }

  export type teamsCreateWithoutTeam_stack_positionsInput = {
    id?: string
    title?: string | null
    content?: string | null
    user_id?: string | null
    Field?: boolean | null
    recruit_status?: $Enums.recruit_status | null
    proceed_type?: $Enums.proceed_type | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apply_history?: apply_historyCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutTeam_stack_positionsInput = {
    id?: string
    title?: string | null
    content?: string | null
    user_id?: string | null
    Field?: boolean | null
    recruit_status?: $Enums.recruit_status | null
    proceed_type?: $Enums.proceed_type | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apply_history?: apply_historyUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsCreateOrConnectWithoutTeam_stack_positionsInput = {
    where: teamsWhereUniqueInput
    create: XOR<teamsCreateWithoutTeam_stack_positionsInput, teamsUncheckedCreateWithoutTeam_stack_positionsInput>
  }

  export type team_usersCreateWithoutTeam_stack_positionsInput = {
    isOwner?: boolean | null
    message?: string | null
    member_status?: $Enums.member_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutTeam_usersInput
  }

  export type team_usersUncheckedCreateWithoutTeam_stack_positionsInput = {
    user_id: string
    isOwner?: boolean | null
    message?: string | null
    member_status?: $Enums.member_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_usersCreateOrConnectWithoutTeam_stack_positionsInput = {
    where: team_usersWhereUniqueInput
    create: XOR<team_usersCreateWithoutTeam_stack_positionsInput, team_usersUncheckedCreateWithoutTeam_stack_positionsInput>
  }

  export type team_usersCreateManyTeam_stack_positionsInputEnvelope = {
    data: team_usersCreateManyTeam_stack_positionsInput | team_usersCreateManyTeam_stack_positionsInput[]
    skipDuplicates?: boolean
  }

  export type positionsUpsertWithoutTeam_stack_positionsInput = {
    update: XOR<positionsUpdateWithoutTeam_stack_positionsInput, positionsUncheckedUpdateWithoutTeam_stack_positionsInput>
    create: XOR<positionsCreateWithoutTeam_stack_positionsInput, positionsUncheckedCreateWithoutTeam_stack_positionsInput>
    where?: positionsWhereInput
  }

  export type positionsUpdateToOneWithWhereWithoutTeam_stack_positionsInput = {
    where?: positionsWhereInput
    data: XOR<positionsUpdateWithoutTeam_stack_positionsInput, positionsUncheckedUpdateWithoutTeam_stack_positionsInput>
  }

  export type positionsUpdateWithoutTeam_stack_positionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateManyWithoutPositionsNestedInput
  }

  export type positionsUncheckedUpdateWithoutTeam_stack_positionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutPositionsNestedInput
  }

  export type stacksUpsertWithoutTeam_stack_positionsInput = {
    update: XOR<stacksUpdateWithoutTeam_stack_positionsInput, stacksUncheckedUpdateWithoutTeam_stack_positionsInput>
    create: XOR<stacksCreateWithoutTeam_stack_positionsInput, stacksUncheckedCreateWithoutTeam_stack_positionsInput>
    where?: stacksWhereInput
  }

  export type stacksUpdateToOneWithWhereWithoutTeam_stack_positionsInput = {
    where?: stacksWhereInput
    data: XOR<stacksUpdateWithoutTeam_stack_positionsInput, stacksUncheckedUpdateWithoutTeam_stack_positionsInput>
  }

  export type stacksUpdateWithoutTeam_stack_positionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stack_categories?: stack_categoriesUpdateOneRequiredWithoutStacksNestedInput
    user_stacks?: user_stacksUpdateManyWithoutStacksNestedInput
  }

  export type stacksUncheckedUpdateWithoutTeam_stack_positionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_stacks?: user_stacksUncheckedUpdateManyWithoutStacksNestedInput
  }

  export type teamsUpsertWithoutTeam_stack_positionsInput = {
    update: XOR<teamsUpdateWithoutTeam_stack_positionsInput, teamsUncheckedUpdateWithoutTeam_stack_positionsInput>
    create: XOR<teamsCreateWithoutTeam_stack_positionsInput, teamsUncheckedCreateWithoutTeam_stack_positionsInput>
    where?: teamsWhereInput
  }

  export type teamsUpdateToOneWithWhereWithoutTeam_stack_positionsInput = {
    where?: teamsWhereInput
    data: XOR<teamsUpdateWithoutTeam_stack_positionsInput, teamsUncheckedUpdateWithoutTeam_stack_positionsInput>
  }

  export type teamsUpdateWithoutTeam_stack_positionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    Field?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    proceed_type?: NullableEnumproceed_typeFieldUpdateOperationsInput | $Enums.proceed_type | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apply_history?: apply_historyUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutTeam_stack_positionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    Field?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    proceed_type?: NullableEnumproceed_typeFieldUpdateOperationsInput | $Enums.proceed_type | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apply_history?: apply_historyUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type team_usersUpsertWithWhereUniqueWithoutTeam_stack_positionsInput = {
    where: team_usersWhereUniqueInput
    update: XOR<team_usersUpdateWithoutTeam_stack_positionsInput, team_usersUncheckedUpdateWithoutTeam_stack_positionsInput>
    create: XOR<team_usersCreateWithoutTeam_stack_positionsInput, team_usersUncheckedCreateWithoutTeam_stack_positionsInput>
  }

  export type team_usersUpdateWithWhereUniqueWithoutTeam_stack_positionsInput = {
    where: team_usersWhereUniqueInput
    data: XOR<team_usersUpdateWithoutTeam_stack_positionsInput, team_usersUncheckedUpdateWithoutTeam_stack_positionsInput>
  }

  export type team_usersUpdateManyWithWhereWithoutTeam_stack_positionsInput = {
    where: team_usersScalarWhereInput
    data: XOR<team_usersUpdateManyMutationInput, team_usersUncheckedUpdateManyWithoutTeam_stack_positionsInput>
  }

  export type team_usersScalarWhereInput = {
    AND?: team_usersScalarWhereInput | team_usersScalarWhereInput[]
    OR?: team_usersScalarWhereInput[]
    NOT?: team_usersScalarWhereInput | team_usersScalarWhereInput[]
    user_id?: UuidFilter<"team_users"> | string
    team_position_id?: UuidFilter<"team_users"> | string
    isOwner?: BoolNullableFilter<"team_users"> | boolean | null
    message?: StringNullableFilter<"team_users"> | string | null
    member_status?: Enummember_statusNullableFilter<"team_users"> | $Enums.member_status | null
    created_at?: DateTimeNullableFilter<"team_users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"team_users"> | Date | string | null
  }

  export type team_stack_positionsCreateWithoutTeam_usersInput = {
    id?: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    positions: positionsCreateNestedOneWithoutTeam_stack_positionsInput
    stacks: stacksCreateNestedOneWithoutTeam_stack_positionsInput
    teams: teamsCreateNestedOneWithoutTeam_stack_positionsInput
  }

  export type team_stack_positionsUncheckedCreateWithoutTeam_usersInput = {
    id?: string
    team_id: string
    stack_id: string
    position_id: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_stack_positionsCreateOrConnectWithoutTeam_usersInput = {
    where: team_stack_positionsWhereUniqueInput
    create: XOR<team_stack_positionsCreateWithoutTeam_usersInput, team_stack_positionsUncheckedCreateWithoutTeam_usersInput>
  }

  export type usersCreateWithoutTeam_usersInput = {
    id?: string
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
    apply_history?: apply_historyCreateNestedManyWithoutUsersInput
    user_auths?: user_authsCreateNestedManyWithoutUsersInput
    positions?: positionsCreateNestedOneWithoutUsersInput
    user_stacks?: user_stacksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTeam_usersInput = {
    id?: string
    position_id?: string | null
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
    apply_history?: apply_historyUncheckedCreateNestedManyWithoutUsersInput
    user_auths?: user_authsUncheckedCreateNestedManyWithoutUsersInput
    user_stacks?: user_stacksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTeam_usersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTeam_usersInput, usersUncheckedCreateWithoutTeam_usersInput>
  }

  export type team_stack_positionsUpsertWithoutTeam_usersInput = {
    update: XOR<team_stack_positionsUpdateWithoutTeam_usersInput, team_stack_positionsUncheckedUpdateWithoutTeam_usersInput>
    create: XOR<team_stack_positionsCreateWithoutTeam_usersInput, team_stack_positionsUncheckedCreateWithoutTeam_usersInput>
    where?: team_stack_positionsWhereInput
  }

  export type team_stack_positionsUpdateToOneWithWhereWithoutTeam_usersInput = {
    where?: team_stack_positionsWhereInput
    data: XOR<team_stack_positionsUpdateWithoutTeam_usersInput, team_stack_positionsUncheckedUpdateWithoutTeam_usersInput>
  }

  export type team_stack_positionsUpdateWithoutTeam_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    positions?: positionsUpdateOneRequiredWithoutTeam_stack_positionsNestedInput
    stacks?: stacksUpdateOneRequiredWithoutTeam_stack_positionsNestedInput
    teams?: teamsUpdateOneRequiredWithoutTeam_stack_positionsNestedInput
  }

  export type team_stack_positionsUncheckedUpdateWithoutTeam_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    stack_id?: StringFieldUpdateOperationsInput | string
    position_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutTeam_usersInput = {
    update: XOR<usersUpdateWithoutTeam_usersInput, usersUncheckedUpdateWithoutTeam_usersInput>
    create: XOR<usersCreateWithoutTeam_usersInput, usersUncheckedCreateWithoutTeam_usersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTeam_usersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTeam_usersInput, usersUncheckedUpdateWithoutTeam_usersInput>
  }

  export type usersUpdateWithoutTeam_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
    apply_history?: apply_historyUpdateManyWithoutUsersNestedInput
    user_auths?: user_authsUpdateManyWithoutUsersNestedInput
    positions?: positionsUpdateOneWithoutUsersNestedInput
    user_stacks?: user_stacksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTeam_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    position_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
    apply_history?: apply_historyUncheckedUpdateManyWithoutUsersNestedInput
    user_auths?: user_authsUncheckedUpdateManyWithoutUsersNestedInput
    user_stacks?: user_stacksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type apply_historyCreateWithoutTeamsInput = {
    id?: string
    ment?: string | null
    apply_status?: $Enums.apply_status | null
    apply_from: $Enums.apply_from
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutApply_historyInput
  }

  export type apply_historyUncheckedCreateWithoutTeamsInput = {
    id?: string
    user_id: string
    ment?: string | null
    apply_status?: $Enums.apply_status | null
    apply_from: $Enums.apply_from
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type apply_historyCreateOrConnectWithoutTeamsInput = {
    where: apply_historyWhereUniqueInput
    create: XOR<apply_historyCreateWithoutTeamsInput, apply_historyUncheckedCreateWithoutTeamsInput>
  }

  export type apply_historyCreateManyTeamsInputEnvelope = {
    data: apply_historyCreateManyTeamsInput | apply_historyCreateManyTeamsInput[]
    skipDuplicates?: boolean
  }

  export type team_stack_positionsCreateWithoutTeamsInput = {
    id?: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    positions: positionsCreateNestedOneWithoutTeam_stack_positionsInput
    stacks: stacksCreateNestedOneWithoutTeam_stack_positionsInput
    team_users?: team_usersCreateNestedManyWithoutTeam_stack_positionsInput
  }

  export type team_stack_positionsUncheckedCreateWithoutTeamsInput = {
    id?: string
    stack_id: string
    position_id: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_users?: team_usersUncheckedCreateNestedManyWithoutTeam_stack_positionsInput
  }

  export type team_stack_positionsCreateOrConnectWithoutTeamsInput = {
    where: team_stack_positionsWhereUniqueInput
    create: XOR<team_stack_positionsCreateWithoutTeamsInput, team_stack_positionsUncheckedCreateWithoutTeamsInput>
  }

  export type team_stack_positionsCreateManyTeamsInputEnvelope = {
    data: team_stack_positionsCreateManyTeamsInput | team_stack_positionsCreateManyTeamsInput[]
    skipDuplicates?: boolean
  }

  export type apply_historyUpsertWithWhereUniqueWithoutTeamsInput = {
    where: apply_historyWhereUniqueInput
    update: XOR<apply_historyUpdateWithoutTeamsInput, apply_historyUncheckedUpdateWithoutTeamsInput>
    create: XOR<apply_historyCreateWithoutTeamsInput, apply_historyUncheckedCreateWithoutTeamsInput>
  }

  export type apply_historyUpdateWithWhereUniqueWithoutTeamsInput = {
    where: apply_historyWhereUniqueInput
    data: XOR<apply_historyUpdateWithoutTeamsInput, apply_historyUncheckedUpdateWithoutTeamsInput>
  }

  export type apply_historyUpdateManyWithWhereWithoutTeamsInput = {
    where: apply_historyScalarWhereInput
    data: XOR<apply_historyUpdateManyMutationInput, apply_historyUncheckedUpdateManyWithoutTeamsInput>
  }

  export type apply_historyScalarWhereInput = {
    AND?: apply_historyScalarWhereInput | apply_historyScalarWhereInput[]
    OR?: apply_historyScalarWhereInput[]
    NOT?: apply_historyScalarWhereInput | apply_historyScalarWhereInput[]
    id?: UuidFilter<"apply_history"> | string
    team_id?: UuidFilter<"apply_history"> | string
    user_id?: UuidFilter<"apply_history"> | string
    ment?: StringNullableFilter<"apply_history"> | string | null
    apply_status?: Enumapply_statusNullableFilter<"apply_history"> | $Enums.apply_status | null
    apply_from?: Enumapply_fromFilter<"apply_history"> | $Enums.apply_from
    created_at?: DateTimeNullableFilter<"apply_history"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"apply_history"> | Date | string | null
  }

  export type team_stack_positionsUpsertWithWhereUniqueWithoutTeamsInput = {
    where: team_stack_positionsWhereUniqueInput
    update: XOR<team_stack_positionsUpdateWithoutTeamsInput, team_stack_positionsUncheckedUpdateWithoutTeamsInput>
    create: XOR<team_stack_positionsCreateWithoutTeamsInput, team_stack_positionsUncheckedCreateWithoutTeamsInput>
  }

  export type team_stack_positionsUpdateWithWhereUniqueWithoutTeamsInput = {
    where: team_stack_positionsWhereUniqueInput
    data: XOR<team_stack_positionsUpdateWithoutTeamsInput, team_stack_positionsUncheckedUpdateWithoutTeamsInput>
  }

  export type team_stack_positionsUpdateManyWithWhereWithoutTeamsInput = {
    where: team_stack_positionsScalarWhereInput
    data: XOR<team_stack_positionsUpdateManyMutationInput, team_stack_positionsUncheckedUpdateManyWithoutTeamsInput>
  }

  export type stacksCreateWithoutUser_stacksInput = {
    id?: string
    name?: string | null
    img_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    stack_categories: stack_categoriesCreateNestedOneWithoutStacksInput
    team_stack_positions?: team_stack_positionsCreateNestedManyWithoutStacksInput
  }

  export type stacksUncheckedCreateWithoutUser_stacksInput = {
    id?: string
    category_id: string
    name?: string | null
    img_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_stack_positions?: team_stack_positionsUncheckedCreateNestedManyWithoutStacksInput
  }

  export type stacksCreateOrConnectWithoutUser_stacksInput = {
    where: stacksWhereUniqueInput
    create: XOR<stacksCreateWithoutUser_stacksInput, stacksUncheckedCreateWithoutUser_stacksInput>
  }

  export type usersCreateWithoutUser_stacksInput = {
    id?: string
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
    apply_history?: apply_historyCreateNestedManyWithoutUsersInput
    team_users?: team_usersCreateNestedManyWithoutUsersInput
    user_auths?: user_authsCreateNestedManyWithoutUsersInput
    positions?: positionsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_stacksInput = {
    id?: string
    position_id?: string | null
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
    apply_history?: apply_historyUncheckedCreateNestedManyWithoutUsersInput
    team_users?: team_usersUncheckedCreateNestedManyWithoutUsersInput
    user_auths?: user_authsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_stacksInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_stacksInput, usersUncheckedCreateWithoutUser_stacksInput>
  }

  export type stacksUpsertWithoutUser_stacksInput = {
    update: XOR<stacksUpdateWithoutUser_stacksInput, stacksUncheckedUpdateWithoutUser_stacksInput>
    create: XOR<stacksCreateWithoutUser_stacksInput, stacksUncheckedCreateWithoutUser_stacksInput>
    where?: stacksWhereInput
  }

  export type stacksUpdateToOneWithWhereWithoutUser_stacksInput = {
    where?: stacksWhereInput
    data: XOR<stacksUpdateWithoutUser_stacksInput, stacksUncheckedUpdateWithoutUser_stacksInput>
  }

  export type stacksUpdateWithoutUser_stacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stack_categories?: stack_categoriesUpdateOneRequiredWithoutStacksNestedInput
    team_stack_positions?: team_stack_positionsUpdateManyWithoutStacksNestedInput
  }

  export type stacksUncheckedUpdateWithoutUser_stacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_stack_positions?: team_stack_positionsUncheckedUpdateManyWithoutStacksNestedInput
  }

  export type usersUpsertWithoutUser_stacksInput = {
    update: XOR<usersUpdateWithoutUser_stacksInput, usersUncheckedUpdateWithoutUser_stacksInput>
    create: XOR<usersCreateWithoutUser_stacksInput, usersUncheckedCreateWithoutUser_stacksInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_stacksInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_stacksInput, usersUncheckedUpdateWithoutUser_stacksInput>
  }

  export type usersUpdateWithoutUser_stacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
    apply_history?: apply_historyUpdateManyWithoutUsersNestedInput
    team_users?: team_usersUpdateManyWithoutUsersNestedInput
    user_auths?: user_authsUpdateManyWithoutUsersNestedInput
    positions?: positionsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_stacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    position_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
    apply_history?: apply_historyUncheckedUpdateManyWithoutUsersNestedInput
    team_users?: team_usersUncheckedUpdateManyWithoutUsersNestedInput
    user_auths?: user_authsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type apply_historyCreateWithoutUsersInput = {
    id?: string
    ment?: string | null
    apply_status?: $Enums.apply_status | null
    apply_from: $Enums.apply_from
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teams: teamsCreateNestedOneWithoutApply_historyInput
  }

  export type apply_historyUncheckedCreateWithoutUsersInput = {
    id?: string
    team_id: string
    ment?: string | null
    apply_status?: $Enums.apply_status | null
    apply_from: $Enums.apply_from
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type apply_historyCreateOrConnectWithoutUsersInput = {
    where: apply_historyWhereUniqueInput
    create: XOR<apply_historyCreateWithoutUsersInput, apply_historyUncheckedCreateWithoutUsersInput>
  }

  export type apply_historyCreateManyUsersInputEnvelope = {
    data: apply_historyCreateManyUsersInput | apply_historyCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type team_usersCreateWithoutUsersInput = {
    isOwner?: boolean | null
    message?: string | null
    member_status?: $Enums.member_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_stack_positions?: team_stack_positionsCreateNestedOneWithoutTeam_usersInput
  }

  export type team_usersUncheckedCreateWithoutUsersInput = {
    team_position_id?: string
    isOwner?: boolean | null
    message?: string | null
    member_status?: $Enums.member_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_usersCreateOrConnectWithoutUsersInput = {
    where: team_usersWhereUniqueInput
    create: XOR<team_usersCreateWithoutUsersInput, team_usersUncheckedCreateWithoutUsersInput>
  }

  export type team_usersCreateManyUsersInputEnvelope = {
    data: team_usersCreateManyUsersInput | team_usersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_authsCreateWithoutUsersInput = {
    external_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    auth_methods: auth_methodsCreateNestedOneWithoutUser_authsInput
  }

  export type user_authsUncheckedCreateWithoutUsersInput = {
    auth_id: string
    external_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_authsCreateOrConnectWithoutUsersInput = {
    where: user_authsWhereUniqueInput
    create: XOR<user_authsCreateWithoutUsersInput, user_authsUncheckedCreateWithoutUsersInput>
  }

  export type user_authsCreateManyUsersInputEnvelope = {
    data: user_authsCreateManyUsersInput | user_authsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type positionsCreateWithoutUsersInput = {
    id?: string
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_stack_positions?: team_stack_positionsCreateNestedManyWithoutPositionsInput
  }

  export type positionsUncheckedCreateWithoutUsersInput = {
    id?: string
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_stack_positions?: team_stack_positionsUncheckedCreateNestedManyWithoutPositionsInput
  }

  export type positionsCreateOrConnectWithoutUsersInput = {
    where: positionsWhereUniqueInput
    create: XOR<positionsCreateWithoutUsersInput, positionsUncheckedCreateWithoutUsersInput>
  }

  export type user_stacksCreateWithoutUsersInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    stacks: stacksCreateNestedOneWithoutUser_stacksInput
  }

  export type user_stacksUncheckedCreateWithoutUsersInput = {
    stack_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_stacksCreateOrConnectWithoutUsersInput = {
    where: user_stacksWhereUniqueInput
    create: XOR<user_stacksCreateWithoutUsersInput, user_stacksUncheckedCreateWithoutUsersInput>
  }

  export type user_stacksCreateManyUsersInputEnvelope = {
    data: user_stacksCreateManyUsersInput | user_stacksCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type apply_historyUpsertWithWhereUniqueWithoutUsersInput = {
    where: apply_historyWhereUniqueInput
    update: XOR<apply_historyUpdateWithoutUsersInput, apply_historyUncheckedUpdateWithoutUsersInput>
    create: XOR<apply_historyCreateWithoutUsersInput, apply_historyUncheckedCreateWithoutUsersInput>
  }

  export type apply_historyUpdateWithWhereUniqueWithoutUsersInput = {
    where: apply_historyWhereUniqueInput
    data: XOR<apply_historyUpdateWithoutUsersInput, apply_historyUncheckedUpdateWithoutUsersInput>
  }

  export type apply_historyUpdateManyWithWhereWithoutUsersInput = {
    where: apply_historyScalarWhereInput
    data: XOR<apply_historyUpdateManyMutationInput, apply_historyUncheckedUpdateManyWithoutUsersInput>
  }

  export type team_usersUpsertWithWhereUniqueWithoutUsersInput = {
    where: team_usersWhereUniqueInput
    update: XOR<team_usersUpdateWithoutUsersInput, team_usersUncheckedUpdateWithoutUsersInput>
    create: XOR<team_usersCreateWithoutUsersInput, team_usersUncheckedCreateWithoutUsersInput>
  }

  export type team_usersUpdateWithWhereUniqueWithoutUsersInput = {
    where: team_usersWhereUniqueInput
    data: XOR<team_usersUpdateWithoutUsersInput, team_usersUncheckedUpdateWithoutUsersInput>
  }

  export type team_usersUpdateManyWithWhereWithoutUsersInput = {
    where: team_usersScalarWhereInput
    data: XOR<team_usersUpdateManyMutationInput, team_usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_authsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_authsWhereUniqueInput
    update: XOR<user_authsUpdateWithoutUsersInput, user_authsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_authsCreateWithoutUsersInput, user_authsUncheckedCreateWithoutUsersInput>
  }

  export type user_authsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_authsWhereUniqueInput
    data: XOR<user_authsUpdateWithoutUsersInput, user_authsUncheckedUpdateWithoutUsersInput>
  }

  export type user_authsUpdateManyWithWhereWithoutUsersInput = {
    where: user_authsScalarWhereInput
    data: XOR<user_authsUpdateManyMutationInput, user_authsUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_authsScalarWhereInput = {
    AND?: user_authsScalarWhereInput | user_authsScalarWhereInput[]
    OR?: user_authsScalarWhereInput[]
    NOT?: user_authsScalarWhereInput | user_authsScalarWhereInput[]
    user_id?: UuidFilter<"user_auths"> | string
    auth_id?: UuidFilter<"user_auths"> | string
    external_id?: StringFilter<"user_auths"> | string
    created_at?: DateTimeNullableFilter<"user_auths"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_auths"> | Date | string | null
  }

  export type positionsUpsertWithoutUsersInput = {
    update: XOR<positionsUpdateWithoutUsersInput, positionsUncheckedUpdateWithoutUsersInput>
    create: XOR<positionsCreateWithoutUsersInput, positionsUncheckedCreateWithoutUsersInput>
    where?: positionsWhereInput
  }

  export type positionsUpdateToOneWithWhereWithoutUsersInput = {
    where?: positionsWhereInput
    data: XOR<positionsUpdateWithoutUsersInput, positionsUncheckedUpdateWithoutUsersInput>
  }

  export type positionsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_stack_positions?: team_stack_positionsUpdateManyWithoutPositionsNestedInput
  }

  export type positionsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_stack_positions?: team_stack_positionsUncheckedUpdateManyWithoutPositionsNestedInput
  }

  export type user_stacksUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_stacksWhereUniqueInput
    update: XOR<user_stacksUpdateWithoutUsersInput, user_stacksUncheckedUpdateWithoutUsersInput>
    create: XOR<user_stacksCreateWithoutUsersInput, user_stacksUncheckedCreateWithoutUsersInput>
  }

  export type user_stacksUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_stacksWhereUniqueInput
    data: XOR<user_stacksUpdateWithoutUsersInput, user_stacksUncheckedUpdateWithoutUsersInput>
  }

  export type user_stacksUpdateManyWithWhereWithoutUsersInput = {
    where: user_stacksScalarWhereInput
    data: XOR<user_stacksUpdateManyMutationInput, user_stacksUncheckedUpdateManyWithoutUsersInput>
  }

  export type auth_methodsCreateWithoutUser_authsInput = {
    id?: string
    auth_method?: $Enums.auth_method | null
    platform: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type auth_methodsUncheckedCreateWithoutUser_authsInput = {
    id?: string
    auth_method?: $Enums.auth_method | null
    platform: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type auth_methodsCreateOrConnectWithoutUser_authsInput = {
    where: auth_methodsWhereUniqueInput
    create: XOR<auth_methodsCreateWithoutUser_authsInput, auth_methodsUncheckedCreateWithoutUser_authsInput>
  }

  export type usersCreateWithoutUser_authsInput = {
    id?: string
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
    apply_history?: apply_historyCreateNestedManyWithoutUsersInput
    team_users?: team_usersCreateNestedManyWithoutUsersInput
    positions?: positionsCreateNestedOneWithoutUsersInput
    user_stacks?: user_stacksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_authsInput = {
    id?: string
    position_id?: string | null
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
    apply_history?: apply_historyUncheckedCreateNestedManyWithoutUsersInput
    team_users?: team_usersUncheckedCreateNestedManyWithoutUsersInput
    user_stacks?: user_stacksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_authsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_authsInput, usersUncheckedCreateWithoutUser_authsInput>
  }

  export type auth_methodsUpsertWithoutUser_authsInput = {
    update: XOR<auth_methodsUpdateWithoutUser_authsInput, auth_methodsUncheckedUpdateWithoutUser_authsInput>
    create: XOR<auth_methodsCreateWithoutUser_authsInput, auth_methodsUncheckedCreateWithoutUser_authsInput>
    where?: auth_methodsWhereInput
  }

  export type auth_methodsUpdateToOneWithWhereWithoutUser_authsInput = {
    where?: auth_methodsWhereInput
    data: XOR<auth_methodsUpdateWithoutUser_authsInput, auth_methodsUncheckedUpdateWithoutUser_authsInput>
  }

  export type auth_methodsUpdateWithoutUser_authsInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_method?: NullableEnumauth_methodFieldUpdateOperationsInput | $Enums.auth_method | null
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_methodsUncheckedUpdateWithoutUser_authsInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_method?: NullableEnumauth_methodFieldUpdateOperationsInput | $Enums.auth_method | null
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutUser_authsInput = {
    update: XOR<usersUpdateWithoutUser_authsInput, usersUncheckedUpdateWithoutUser_authsInput>
    create: XOR<usersCreateWithoutUser_authsInput, usersUncheckedCreateWithoutUser_authsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_authsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_authsInput, usersUncheckedUpdateWithoutUser_authsInput>
  }

  export type usersUpdateWithoutUser_authsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
    apply_history?: apply_historyUpdateManyWithoutUsersNestedInput
    team_users?: team_usersUpdateManyWithoutUsersNestedInput
    positions?: positionsUpdateOneWithoutUsersNestedInput
    user_stacks?: user_stacksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_authsInput = {
    id?: StringFieldUpdateOperationsInput | string
    position_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
    apply_history?: apply_historyUncheckedUpdateManyWithoutUsersNestedInput
    team_users?: team_usersUncheckedUpdateManyWithoutUsersNestedInput
    user_stacks?: user_stacksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type user_authsCreateWithoutAuth_methodsInput = {
    external_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutUser_authsInput
  }

  export type user_authsUncheckedCreateWithoutAuth_methodsInput = {
    user_id: string
    external_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_authsCreateOrConnectWithoutAuth_methodsInput = {
    where: user_authsWhereUniqueInput
    create: XOR<user_authsCreateWithoutAuth_methodsInput, user_authsUncheckedCreateWithoutAuth_methodsInput>
  }

  export type user_authsCreateManyAuth_methodsInputEnvelope = {
    data: user_authsCreateManyAuth_methodsInput | user_authsCreateManyAuth_methodsInput[]
    skipDuplicates?: boolean
  }

  export type user_authsUpsertWithWhereUniqueWithoutAuth_methodsInput = {
    where: user_authsWhereUniqueInput
    update: XOR<user_authsUpdateWithoutAuth_methodsInput, user_authsUncheckedUpdateWithoutAuth_methodsInput>
    create: XOR<user_authsCreateWithoutAuth_methodsInput, user_authsUncheckedCreateWithoutAuth_methodsInput>
  }

  export type user_authsUpdateWithWhereUniqueWithoutAuth_methodsInput = {
    where: user_authsWhereUniqueInput
    data: XOR<user_authsUpdateWithoutAuth_methodsInput, user_authsUncheckedUpdateWithoutAuth_methodsInput>
  }

  export type user_authsUpdateManyWithWhereWithoutAuth_methodsInput = {
    where: user_authsScalarWhereInput
    data: XOR<user_authsUpdateManyMutationInput, user_authsUncheckedUpdateManyWithoutAuth_methodsInput>
  }

  export type team_stack_positionsCreateManyPositionsInput = {
    id?: string
    team_id: string
    stack_id: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersCreateManyPositionsInput = {
    id?: string
    role?: $Enums.roles | null
    name: string
    nickname?: string | null
    salt?: string | null
    github_url?: string | null
    img?: string | null
    address?: string | null
    join_status?: boolean | null
    create_at?: Date | string | null
    updated_at?: Date | string | null
    Field?: string | null
    preferred_meeting?: $Enums.meetings | null
  }

  export type team_stack_positionsUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stacks?: stacksUpdateOneRequiredWithoutTeam_stack_positionsNestedInput
    teams?: teamsUpdateOneRequiredWithoutTeam_stack_positionsNestedInput
    team_users?: team_usersUpdateManyWithoutTeam_stack_positionsNestedInput
  }

  export type team_stack_positionsUncheckedUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    stack_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_users?: team_usersUncheckedUpdateManyWithoutTeam_stack_positionsNestedInput
  }

  export type team_stack_positionsUncheckedUpdateManyWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    stack_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
    apply_history?: apply_historyUpdateManyWithoutUsersNestedInput
    team_users?: team_usersUpdateManyWithoutUsersNestedInput
    user_auths?: user_authsUpdateManyWithoutUsersNestedInput
    user_stacks?: user_stacksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
    apply_history?: apply_historyUncheckedUpdateManyWithoutUsersNestedInput
    team_users?: team_usersUncheckedUpdateManyWithoutUsersNestedInput
    user_auths?: user_authsUncheckedUpdateManyWithoutUsersNestedInput
    user_stacks?: user_stacksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumrolesFieldUpdateOperationsInput | $Enums.roles | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    join_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Field?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_meeting?: NullableEnummeetingsFieldUpdateOperationsInput | $Enums.meetings | null
  }

  export type stacksCreateManyStack_categoriesInput = {
    id?: string
    name?: string | null
    img_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type stacksUpdateWithoutStack_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_stack_positions?: team_stack_positionsUpdateManyWithoutStacksNestedInput
    user_stacks?: user_stacksUpdateManyWithoutStacksNestedInput
  }

  export type stacksUncheckedUpdateWithoutStack_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_stack_positions?: team_stack_positionsUncheckedUpdateManyWithoutStacksNestedInput
    user_stacks?: user_stacksUncheckedUpdateManyWithoutStacksNestedInput
  }

  export type stacksUncheckedUpdateManyWithoutStack_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_stack_positionsCreateManyStacksInput = {
    id?: string
    team_id: string
    position_id: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_stacksCreateManyStacksInput = {
    user_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_stack_positionsUpdateWithoutStacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    positions?: positionsUpdateOneRequiredWithoutTeam_stack_positionsNestedInput
    teams?: teamsUpdateOneRequiredWithoutTeam_stack_positionsNestedInput
    team_users?: team_usersUpdateManyWithoutTeam_stack_positionsNestedInput
  }

  export type team_stack_positionsUncheckedUpdateWithoutStacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    position_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_users?: team_usersUncheckedUpdateManyWithoutTeam_stack_positionsNestedInput
  }

  export type team_stack_positionsUncheckedUpdateManyWithoutStacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    position_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_stacksUpdateWithoutStacksInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutUser_stacksNestedInput
  }

  export type user_stacksUncheckedUpdateWithoutStacksInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_stacksUncheckedUpdateManyWithoutStacksInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_usersCreateManyTeam_stack_positionsInput = {
    user_id: string
    isOwner?: boolean | null
    message?: string | null
    member_status?: $Enums.member_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_usersUpdateWithoutTeam_stack_positionsInput = {
    isOwner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    member_status?: NullableEnummember_statusFieldUpdateOperationsInput | $Enums.member_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutTeam_usersNestedInput
  }

  export type team_usersUncheckedUpdateWithoutTeam_stack_positionsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    isOwner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    member_status?: NullableEnummember_statusFieldUpdateOperationsInput | $Enums.member_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_usersUncheckedUpdateManyWithoutTeam_stack_positionsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    isOwner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    member_status?: NullableEnummember_statusFieldUpdateOperationsInput | $Enums.member_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type apply_historyCreateManyTeamsInput = {
    id?: string
    user_id: string
    ment?: string | null
    apply_status?: $Enums.apply_status | null
    apply_from: $Enums.apply_from
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_stack_positionsCreateManyTeamsInput = {
    id?: string
    stack_id: string
    position_id: string
    status: boolean
    recruit_status?: $Enums.recruit_status | null
    count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type apply_historyUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ment?: NullableStringFieldUpdateOperationsInput | string | null
    apply_status?: NullableEnumapply_statusFieldUpdateOperationsInput | $Enums.apply_status | null
    apply_from?: Enumapply_fromFieldUpdateOperationsInput | $Enums.apply_from
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutApply_historyNestedInput
  }

  export type apply_historyUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ment?: NullableStringFieldUpdateOperationsInput | string | null
    apply_status?: NullableEnumapply_statusFieldUpdateOperationsInput | $Enums.apply_status | null
    apply_from?: Enumapply_fromFieldUpdateOperationsInput | $Enums.apply_from
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type apply_historyUncheckedUpdateManyWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ment?: NullableStringFieldUpdateOperationsInput | string | null
    apply_status?: NullableEnumapply_statusFieldUpdateOperationsInput | $Enums.apply_status | null
    apply_from?: Enumapply_fromFieldUpdateOperationsInput | $Enums.apply_from
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_stack_positionsUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    positions?: positionsUpdateOneRequiredWithoutTeam_stack_positionsNestedInput
    stacks?: stacksUpdateOneRequiredWithoutTeam_stack_positionsNestedInput
    team_users?: team_usersUpdateManyWithoutTeam_stack_positionsNestedInput
  }

  export type team_stack_positionsUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stack_id?: StringFieldUpdateOperationsInput | string
    position_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_users?: team_usersUncheckedUpdateManyWithoutTeam_stack_positionsNestedInput
  }

  export type team_stack_positionsUncheckedUpdateManyWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stack_id?: StringFieldUpdateOperationsInput | string
    position_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    recruit_status?: NullableEnumrecruit_statusFieldUpdateOperationsInput | $Enums.recruit_status | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type apply_historyCreateManyUsersInput = {
    id?: string
    team_id: string
    ment?: string | null
    apply_status?: $Enums.apply_status | null
    apply_from: $Enums.apply_from
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_usersCreateManyUsersInput = {
    team_position_id?: string
    isOwner?: boolean | null
    message?: string | null
    member_status?: $Enums.member_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_authsCreateManyUsersInput = {
    auth_id: string
    external_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_stacksCreateManyUsersInput = {
    stack_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type apply_historyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ment?: NullableStringFieldUpdateOperationsInput | string | null
    apply_status?: NullableEnumapply_statusFieldUpdateOperationsInput | $Enums.apply_status | null
    apply_from?: Enumapply_fromFieldUpdateOperationsInput | $Enums.apply_from
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: teamsUpdateOneRequiredWithoutApply_historyNestedInput
  }

  export type apply_historyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    ment?: NullableStringFieldUpdateOperationsInput | string | null
    apply_status?: NullableEnumapply_statusFieldUpdateOperationsInput | $Enums.apply_status | null
    apply_from?: Enumapply_fromFieldUpdateOperationsInput | $Enums.apply_from
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type apply_historyUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    ment?: NullableStringFieldUpdateOperationsInput | string | null
    apply_status?: NullableEnumapply_statusFieldUpdateOperationsInput | $Enums.apply_status | null
    apply_from?: Enumapply_fromFieldUpdateOperationsInput | $Enums.apply_from
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_usersUpdateWithoutUsersInput = {
    isOwner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    member_status?: NullableEnummember_statusFieldUpdateOperationsInput | $Enums.member_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_stack_positions?: team_stack_positionsUpdateOneRequiredWithoutTeam_usersNestedInput
  }

  export type team_usersUncheckedUpdateWithoutUsersInput = {
    team_position_id?: StringFieldUpdateOperationsInput | string
    isOwner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    member_status?: NullableEnummember_statusFieldUpdateOperationsInput | $Enums.member_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_usersUncheckedUpdateManyWithoutUsersInput = {
    team_position_id?: StringFieldUpdateOperationsInput | string
    isOwner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    member_status?: NullableEnummember_statusFieldUpdateOperationsInput | $Enums.member_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_authsUpdateWithoutUsersInput = {
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth_methods?: auth_methodsUpdateOneRequiredWithoutUser_authsNestedInput
  }

  export type user_authsUncheckedUpdateWithoutUsersInput = {
    auth_id?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_authsUncheckedUpdateManyWithoutUsersInput = {
    auth_id?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_stacksUpdateWithoutUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stacks?: stacksUpdateOneRequiredWithoutUser_stacksNestedInput
  }

  export type user_stacksUncheckedUpdateWithoutUsersInput = {
    stack_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_stacksUncheckedUpdateManyWithoutUsersInput = {
    stack_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_authsCreateManyAuth_methodsInput = {
    user_id: string
    external_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_authsUpdateWithoutAuth_methodsInput = {
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutUser_authsNestedInput
  }

  export type user_authsUncheckedUpdateWithoutAuth_methodsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_authsUncheckedUpdateManyWithoutAuth_methodsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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