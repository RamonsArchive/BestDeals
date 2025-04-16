
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
 * Model items6
 * 
 */
export type items6 = $Result.DefaultSelection<Prisma.$items6Payload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model UserHeartedProduct
 * 
 */
export type UserHeartedProduct = $Result.DefaultSelection<Prisma.$UserHeartedProductPayload>
/**
 * Model UserReview
 * 
 */
export type UserReview = $Result.DefaultSelection<Prisma.$UserReviewPayload>
/**
 * Model UserRecentlyViewed
 * 
 */
export type UserRecentlyViewed = $Result.DefaultSelection<Prisma.$UserRecentlyViewedPayload>
/**
 * Model UserSearch
 * 
 */
export type UserSearch = $Result.DefaultSelection<Prisma.$UserSearchPayload>
/**
 * Model UserCategory
 * 
 */
export type UserCategory = $Result.DefaultSelection<Prisma.$UserCategoryPayload>
/**
 * Model FlaggedReview
 * 
 */
export type FlaggedReview = $Result.DefaultSelection<Prisma.$FlaggedReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Provider: {
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
  GITHUB: 'GITHUB'
};

export type Provider = (typeof Provider)[keyof typeof Provider]


export const FlagReason: {
  inappropriate: 'inappropriate',
  misleading: 'misleading',
  hatespeech: 'hatespeech',
  harassment: 'harassment',
  violence: 'violence',
  spam: 'spam',
  other: 'other'
};

export type FlagReason = (typeof FlagReason)[keyof typeof FlagReason]


export const ModerationStatus: {
  pending: 'pending',
  reviewed: 'reviewed',
  removed: 'removed'
};

export type ModerationStatus = (typeof ModerationStatus)[keyof typeof ModerationStatus]

}

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type FlagReason = $Enums.FlagReason

export const FlagReason: typeof $Enums.FlagReason

export type ModerationStatus = $Enums.ModerationStatus

export const ModerationStatus: typeof $Enums.ModerationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Items6s
 * const items6s = await prisma.items6.findMany()
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
   * // Fetch zero or more Items6s
   * const items6s = await prisma.items6.findMany()
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
   * `prisma.items6`: Exposes CRUD operations for the **items6** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items6s
    * const items6s = await prisma.items6.findMany()
    * ```
    */
  get items6(): Prisma.items6Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userHeartedProduct`: Exposes CRUD operations for the **UserHeartedProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserHeartedProducts
    * const userHeartedProducts = await prisma.userHeartedProduct.findMany()
    * ```
    */
  get userHeartedProduct(): Prisma.UserHeartedProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userReview`: Exposes CRUD operations for the **UserReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserReviews
    * const userReviews = await prisma.userReview.findMany()
    * ```
    */
  get userReview(): Prisma.UserReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRecentlyViewed`: Exposes CRUD operations for the **UserRecentlyViewed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRecentlyVieweds
    * const userRecentlyVieweds = await prisma.userRecentlyViewed.findMany()
    * ```
    */
  get userRecentlyViewed(): Prisma.UserRecentlyViewedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSearch`: Exposes CRUD operations for the **UserSearch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSearches
    * const userSearches = await prisma.userSearch.findMany()
    * ```
    */
  get userSearch(): Prisma.UserSearchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCategory`: Exposes CRUD operations for the **UserCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCategories
    * const userCategories = await prisma.userCategory.findMany()
    * ```
    */
  get userCategory(): Prisma.UserCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flaggedReview`: Exposes CRUD operations for the **FlaggedReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlaggedReviews
    * const flaggedReviews = await prisma.flaggedReview.findMany()
    * ```
    */
  get flaggedReview(): Prisma.FlaggedReviewDelegate<ExtArgs, ClientOptions>;
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
    items6: 'items6',
    User: 'User',
    Product: 'Product',
    UserHeartedProduct: 'UserHeartedProduct',
    UserReview: 'UserReview',
    UserRecentlyViewed: 'UserRecentlyViewed',
    UserSearch: 'UserSearch',
    UserCategory: 'UserCategory',
    FlaggedReview: 'FlaggedReview'
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
      modelProps: "items6" | "user" | "product" | "userHeartedProduct" | "userReview" | "userRecentlyViewed" | "userSearch" | "userCategory" | "flaggedReview"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      items6: {
        payload: Prisma.$items6Payload<ExtArgs>
        fields: Prisma.items6FieldRefs
        operations: {
          findUnique: {
            args: Prisma.items6FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items6Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.items6FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items6Payload>
          }
          findFirst: {
            args: Prisma.items6FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items6Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.items6FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items6Payload>
          }
          findMany: {
            args: Prisma.items6FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items6Payload>[]
          }
          create: {
            args: Prisma.items6CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items6Payload>
          }
          createMany: {
            args: Prisma.items6CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.items6DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items6Payload>
          }
          update: {
            args: Prisma.items6UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items6Payload>
          }
          deleteMany: {
            args: Prisma.items6DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.items6UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.items6UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items6Payload>
          }
          aggregate: {
            args: Prisma.Items6AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItems6>
          }
          groupBy: {
            args: Prisma.items6GroupByArgs<ExtArgs>
            result: $Utils.Optional<Items6GroupByOutputType>[]
          }
          count: {
            args: Prisma.items6CountArgs<ExtArgs>
            result: $Utils.Optional<Items6CountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      UserHeartedProduct: {
        payload: Prisma.$UserHeartedProductPayload<ExtArgs>
        fields: Prisma.UserHeartedProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserHeartedProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeartedProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserHeartedProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeartedProductPayload>
          }
          findFirst: {
            args: Prisma.UserHeartedProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeartedProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserHeartedProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeartedProductPayload>
          }
          findMany: {
            args: Prisma.UserHeartedProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeartedProductPayload>[]
          }
          create: {
            args: Prisma.UserHeartedProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeartedProductPayload>
          }
          createMany: {
            args: Prisma.UserHeartedProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserHeartedProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeartedProductPayload>
          }
          update: {
            args: Prisma.UserHeartedProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeartedProductPayload>
          }
          deleteMany: {
            args: Prisma.UserHeartedProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserHeartedProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserHeartedProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeartedProductPayload>
          }
          aggregate: {
            args: Prisma.UserHeartedProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserHeartedProduct>
          }
          groupBy: {
            args: Prisma.UserHeartedProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserHeartedProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserHeartedProductCountArgs<ExtArgs>
            result: $Utils.Optional<UserHeartedProductCountAggregateOutputType> | number
          }
        }
      }
      UserReview: {
        payload: Prisma.$UserReviewPayload<ExtArgs>
        fields: Prisma.UserReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          findFirst: {
            args: Prisma.UserReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          findMany: {
            args: Prisma.UserReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>[]
          }
          create: {
            args: Prisma.UserReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          createMany: {
            args: Prisma.UserReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          update: {
            args: Prisma.UserReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          deleteMany: {
            args: Prisma.UserReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          aggregate: {
            args: Prisma.UserReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserReview>
          }
          groupBy: {
            args: Prisma.UserReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserReviewCountArgs<ExtArgs>
            result: $Utils.Optional<UserReviewCountAggregateOutputType> | number
          }
        }
      }
      UserRecentlyViewed: {
        payload: Prisma.$UserRecentlyViewedPayload<ExtArgs>
        fields: Prisma.UserRecentlyViewedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRecentlyViewedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentlyViewedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRecentlyViewedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentlyViewedPayload>
          }
          findFirst: {
            args: Prisma.UserRecentlyViewedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentlyViewedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRecentlyViewedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentlyViewedPayload>
          }
          findMany: {
            args: Prisma.UserRecentlyViewedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentlyViewedPayload>[]
          }
          create: {
            args: Prisma.UserRecentlyViewedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentlyViewedPayload>
          }
          createMany: {
            args: Prisma.UserRecentlyViewedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserRecentlyViewedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentlyViewedPayload>
          }
          update: {
            args: Prisma.UserRecentlyViewedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentlyViewedPayload>
          }
          deleteMany: {
            args: Prisma.UserRecentlyViewedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRecentlyViewedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRecentlyViewedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRecentlyViewedPayload>
          }
          aggregate: {
            args: Prisma.UserRecentlyViewedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRecentlyViewed>
          }
          groupBy: {
            args: Prisma.UserRecentlyViewedGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRecentlyViewedGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRecentlyViewedCountArgs<ExtArgs>
            result: $Utils.Optional<UserRecentlyViewedCountAggregateOutputType> | number
          }
        }
      }
      UserSearch: {
        payload: Prisma.$UserSearchPayload<ExtArgs>
        fields: Prisma.UserSearchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSearchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSearchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchPayload>
          }
          findFirst: {
            args: Prisma.UserSearchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSearchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchPayload>
          }
          findMany: {
            args: Prisma.UserSearchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchPayload>[]
          }
          create: {
            args: Prisma.UserSearchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchPayload>
          }
          createMany: {
            args: Prisma.UserSearchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserSearchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchPayload>
          }
          update: {
            args: Prisma.UserSearchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchPayload>
          }
          deleteMany: {
            args: Prisma.UserSearchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSearchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserSearchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchPayload>
          }
          aggregate: {
            args: Prisma.UserSearchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSearch>
          }
          groupBy: {
            args: Prisma.UserSearchGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSearchGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSearchCountArgs<ExtArgs>
            result: $Utils.Optional<UserSearchCountAggregateOutputType> | number
          }
        }
      }
      UserCategory: {
        payload: Prisma.$UserCategoryPayload<ExtArgs>
        fields: Prisma.UserCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          findFirst: {
            args: Prisma.UserCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          findMany: {
            args: Prisma.UserCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>[]
          }
          create: {
            args: Prisma.UserCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          createMany: {
            args: Prisma.UserCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          update: {
            args: Prisma.UserCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          deleteMany: {
            args: Prisma.UserCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          aggregate: {
            args: Prisma.UserCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCategory>
          }
          groupBy: {
            args: Prisma.UserCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserCategoryCountAggregateOutputType> | number
          }
        }
      }
      FlaggedReview: {
        payload: Prisma.$FlaggedReviewPayload<ExtArgs>
        fields: Prisma.FlaggedReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlaggedReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlaggedReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedReviewPayload>
          }
          findFirst: {
            args: Prisma.FlaggedReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlaggedReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedReviewPayload>
          }
          findMany: {
            args: Prisma.FlaggedReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedReviewPayload>[]
          }
          create: {
            args: Prisma.FlaggedReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedReviewPayload>
          }
          createMany: {
            args: Prisma.FlaggedReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlaggedReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedReviewPayload>
          }
          update: {
            args: Prisma.FlaggedReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedReviewPayload>
          }
          deleteMany: {
            args: Prisma.FlaggedReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlaggedReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlaggedReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedReviewPayload>
          }
          aggregate: {
            args: Prisma.FlaggedReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlaggedReview>
          }
          groupBy: {
            args: Prisma.FlaggedReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlaggedReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlaggedReviewCountArgs<ExtArgs>
            result: $Utils.Optional<FlaggedReviewCountAggregateOutputType> | number
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
    items6?: items6Omit
    user?: UserOmit
    product?: ProductOmit
    userHeartedProduct?: UserHeartedProductOmit
    userReview?: UserReviewOmit
    userRecentlyViewed?: UserRecentlyViewedOmit
    userSearch?: UserSearchOmit
    userCategory?: UserCategoryOmit
    flaggedReview?: FlaggedReviewOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    heartedProducts: number
    reviews: number
    recentlyViewed: number
    searches: number
    categories: number
    flaggedReviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    heartedProducts?: boolean | UserCountOutputTypeCountHeartedProductsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    recentlyViewed?: boolean | UserCountOutputTypeCountRecentlyViewedArgs
    searches?: boolean | UserCountOutputTypeCountSearchesArgs
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
    flaggedReviews?: boolean | UserCountOutputTypeCountFlaggedReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHeartedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHeartedProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecentlyViewedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRecentlyViewedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSearchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSearchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlaggedReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlaggedReviewWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    reviews: number
    viewedBy: number
    heartedBy: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | ProductCountOutputTypeCountReviewsArgs
    viewedBy?: boolean | ProductCountOutputTypeCountViewedByArgs
    heartedBy?: boolean | ProductCountOutputTypeCountHeartedByArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReviewWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountViewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRecentlyViewedWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountHeartedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHeartedProductWhereInput
  }


  /**
   * Count Type UserReviewCountOutputType
   */

  export type UserReviewCountOutputType = {
    flags: number
  }

  export type UserReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flags?: boolean | UserReviewCountOutputTypeCountFlagsArgs
  }

  // Custom InputTypes
  /**
   * UserReviewCountOutputType without action
   */
  export type UserReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReviewCountOutputType
     */
    select?: UserReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserReviewCountOutputType without action
   */
  export type UserReviewCountOutputTypeCountFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlaggedReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model items6
   */

  export type AggregateItems6 = {
    _count: Items6CountAggregateOutputType | null
    _avg: Items6AvgAggregateOutputType | null
    _sum: Items6SumAggregateOutputType | null
    _min: Items6MinAggregateOutputType | null
    _max: Items6MaxAggregateOutputType | null
  }

  export type Items6AvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    new_price_column: Decimal | null
  }

  export type Items6SumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    new_price_column: Decimal | null
  }

  export type Items6MinAggregateOutputType = {
    id: number | null
    price: Decimal | null
    description: string | null
    location: string | null
    link: string | null
    new_price_column: Decimal | null
    deal: string | null
  }

  export type Items6MaxAggregateOutputType = {
    id: number | null
    price: Decimal | null
    description: string | null
    location: string | null
    link: string | null
    new_price_column: Decimal | null
    deal: string | null
  }

  export type Items6CountAggregateOutputType = {
    id: number
    price: number
    description: number
    location: number
    link: number
    new_price_column: number
    deal: number
    _all: number
  }


  export type Items6AvgAggregateInputType = {
    id?: true
    price?: true
    new_price_column?: true
  }

  export type Items6SumAggregateInputType = {
    id?: true
    price?: true
    new_price_column?: true
  }

  export type Items6MinAggregateInputType = {
    id?: true
    price?: true
    description?: true
    location?: true
    link?: true
    new_price_column?: true
    deal?: true
  }

  export type Items6MaxAggregateInputType = {
    id?: true
    price?: true
    description?: true
    location?: true
    link?: true
    new_price_column?: true
    deal?: true
  }

  export type Items6CountAggregateInputType = {
    id?: true
    price?: true
    description?: true
    location?: true
    link?: true
    new_price_column?: true
    deal?: true
    _all?: true
  }

  export type Items6AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items6 to aggregate.
     */
    where?: items6WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items6s to fetch.
     */
    orderBy?: items6OrderByWithRelationInput | items6OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: items6WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items6s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items6s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned items6s
    **/
    _count?: true | Items6CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Items6AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Items6SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Items6MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Items6MaxAggregateInputType
  }

  export type GetItems6AggregateType<T extends Items6AggregateArgs> = {
        [P in keyof T & keyof AggregateItems6]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems6[P]>
      : GetScalarType<T[P], AggregateItems6[P]>
  }




  export type items6GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: items6WhereInput
    orderBy?: items6OrderByWithAggregationInput | items6OrderByWithAggregationInput[]
    by: Items6ScalarFieldEnum[] | Items6ScalarFieldEnum
    having?: items6ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Items6CountAggregateInputType | true
    _avg?: Items6AvgAggregateInputType
    _sum?: Items6SumAggregateInputType
    _min?: Items6MinAggregateInputType
    _max?: Items6MaxAggregateInputType
  }

  export type Items6GroupByOutputType = {
    id: number
    price: Decimal | null
    description: string | null
    location: string | null
    link: string | null
    new_price_column: Decimal | null
    deal: string | null
    _count: Items6CountAggregateOutputType | null
    _avg: Items6AvgAggregateOutputType | null
    _sum: Items6SumAggregateOutputType | null
    _min: Items6MinAggregateOutputType | null
    _max: Items6MaxAggregateOutputType | null
  }

  type GetItems6GroupByPayload<T extends items6GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Items6GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Items6GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Items6GroupByOutputType[P]>
            : GetScalarType<T[P], Items6GroupByOutputType[P]>
        }
      >
    >


  export type items6Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    description?: boolean
    location?: boolean
    link?: boolean
    new_price_column?: boolean
    deal?: boolean
  }, ExtArgs["result"]["items6"]>



  export type items6SelectScalar = {
    id?: boolean
    price?: boolean
    description?: boolean
    location?: boolean
    link?: boolean
    new_price_column?: boolean
    deal?: boolean
  }

  export type items6Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "description" | "location" | "link" | "new_price_column" | "deal", ExtArgs["result"]["items6"]>

  export type $items6Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "items6"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      price: Prisma.Decimal | null
      description: string | null
      location: string | null
      link: string | null
      new_price_column: Prisma.Decimal | null
      deal: string | null
    }, ExtArgs["result"]["items6"]>
    composites: {}
  }

  type items6GetPayload<S extends boolean | null | undefined | items6DefaultArgs> = $Result.GetResult<Prisma.$items6Payload, S>

  type items6CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<items6FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Items6CountAggregateInputType | true
    }

  export interface items6Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['items6'], meta: { name: 'items6' } }
    /**
     * Find zero or one Items6 that matches the filter.
     * @param {items6FindUniqueArgs} args - Arguments to find a Items6
     * @example
     * // Get one Items6
     * const items6 = await prisma.items6.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends items6FindUniqueArgs>(args: SelectSubset<T, items6FindUniqueArgs<ExtArgs>>): Prisma__items6Client<$Result.GetResult<Prisma.$items6Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Items6 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {items6FindUniqueOrThrowArgs} args - Arguments to find a Items6
     * @example
     * // Get one Items6
     * const items6 = await prisma.items6.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends items6FindUniqueOrThrowArgs>(args: SelectSubset<T, items6FindUniqueOrThrowArgs<ExtArgs>>): Prisma__items6Client<$Result.GetResult<Prisma.$items6Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items6 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {items6FindFirstArgs} args - Arguments to find a Items6
     * @example
     * // Get one Items6
     * const items6 = await prisma.items6.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends items6FindFirstArgs>(args?: SelectSubset<T, items6FindFirstArgs<ExtArgs>>): Prisma__items6Client<$Result.GetResult<Prisma.$items6Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items6 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {items6FindFirstOrThrowArgs} args - Arguments to find a Items6
     * @example
     * // Get one Items6
     * const items6 = await prisma.items6.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends items6FindFirstOrThrowArgs>(args?: SelectSubset<T, items6FindFirstOrThrowArgs<ExtArgs>>): Prisma__items6Client<$Result.GetResult<Prisma.$items6Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items6s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {items6FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items6s
     * const items6s = await prisma.items6.findMany()
     * 
     * // Get first 10 Items6s
     * const items6s = await prisma.items6.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const items6WithIdOnly = await prisma.items6.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends items6FindManyArgs>(args?: SelectSubset<T, items6FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$items6Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Items6.
     * @param {items6CreateArgs} args - Arguments to create a Items6.
     * @example
     * // Create one Items6
     * const Items6 = await prisma.items6.create({
     *   data: {
     *     // ... data to create a Items6
     *   }
     * })
     * 
     */
    create<T extends items6CreateArgs>(args: SelectSubset<T, items6CreateArgs<ExtArgs>>): Prisma__items6Client<$Result.GetResult<Prisma.$items6Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items6s.
     * @param {items6CreateManyArgs} args - Arguments to create many Items6s.
     * @example
     * // Create many Items6s
     * const items6 = await prisma.items6.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends items6CreateManyArgs>(args?: SelectSubset<T, items6CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Items6.
     * @param {items6DeleteArgs} args - Arguments to delete one Items6.
     * @example
     * // Delete one Items6
     * const Items6 = await prisma.items6.delete({
     *   where: {
     *     // ... filter to delete one Items6
     *   }
     * })
     * 
     */
    delete<T extends items6DeleteArgs>(args: SelectSubset<T, items6DeleteArgs<ExtArgs>>): Prisma__items6Client<$Result.GetResult<Prisma.$items6Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Items6.
     * @param {items6UpdateArgs} args - Arguments to update one Items6.
     * @example
     * // Update one Items6
     * const items6 = await prisma.items6.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends items6UpdateArgs>(args: SelectSubset<T, items6UpdateArgs<ExtArgs>>): Prisma__items6Client<$Result.GetResult<Prisma.$items6Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items6s.
     * @param {items6DeleteManyArgs} args - Arguments to filter Items6s to delete.
     * @example
     * // Delete a few Items6s
     * const { count } = await prisma.items6.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends items6DeleteManyArgs>(args?: SelectSubset<T, items6DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items6s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {items6UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items6s
     * const items6 = await prisma.items6.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends items6UpdateManyArgs>(args: SelectSubset<T, items6UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Items6.
     * @param {items6UpsertArgs} args - Arguments to update or create a Items6.
     * @example
     * // Update or create a Items6
     * const items6 = await prisma.items6.upsert({
     *   create: {
     *     // ... data to create a Items6
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items6 we want to update
     *   }
     * })
     */
    upsert<T extends items6UpsertArgs>(args: SelectSubset<T, items6UpsertArgs<ExtArgs>>): Prisma__items6Client<$Result.GetResult<Prisma.$items6Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items6s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {items6CountArgs} args - Arguments to filter Items6s to count.
     * @example
     * // Count the number of Items6s
     * const count = await prisma.items6.count({
     *   where: {
     *     // ... the filter for the Items6s we want to count
     *   }
     * })
    **/
    count<T extends items6CountArgs>(
      args?: Subset<T, items6CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Items6CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items6.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Items6AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Items6AggregateArgs>(args: Subset<T, Items6AggregateArgs>): Prisma.PrismaPromise<GetItems6AggregateType<T>>

    /**
     * Group by Items6.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {items6GroupByArgs} args - Group by arguments.
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
      T extends items6GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: items6GroupByArgs['orderBy'] }
        : { orderBy?: items6GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, items6GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItems6GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the items6 model
   */
  readonly fields: items6FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for items6.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__items6Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the items6 model
   */
  interface items6FieldRefs {
    readonly id: FieldRef<"items6", 'Int'>
    readonly price: FieldRef<"items6", 'Decimal'>
    readonly description: FieldRef<"items6", 'String'>
    readonly location: FieldRef<"items6", 'String'>
    readonly link: FieldRef<"items6", 'String'>
    readonly new_price_column: FieldRef<"items6", 'Decimal'>
    readonly deal: FieldRef<"items6", 'String'>
  }
    

  // Custom InputTypes
  /**
   * items6 findUnique
   */
  export type items6FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items6
     */
    select?: items6Select<ExtArgs> | null
    /**
     * Omit specific fields from the items6
     */
    omit?: items6Omit<ExtArgs> | null
    /**
     * Filter, which items6 to fetch.
     */
    where: items6WhereUniqueInput
  }

  /**
   * items6 findUniqueOrThrow
   */
  export type items6FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items6
     */
    select?: items6Select<ExtArgs> | null
    /**
     * Omit specific fields from the items6
     */
    omit?: items6Omit<ExtArgs> | null
    /**
     * Filter, which items6 to fetch.
     */
    where: items6WhereUniqueInput
  }

  /**
   * items6 findFirst
   */
  export type items6FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items6
     */
    select?: items6Select<ExtArgs> | null
    /**
     * Omit specific fields from the items6
     */
    omit?: items6Omit<ExtArgs> | null
    /**
     * Filter, which items6 to fetch.
     */
    where?: items6WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items6s to fetch.
     */
    orderBy?: items6OrderByWithRelationInput | items6OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items6s.
     */
    cursor?: items6WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items6s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items6s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items6s.
     */
    distinct?: Items6ScalarFieldEnum | Items6ScalarFieldEnum[]
  }

  /**
   * items6 findFirstOrThrow
   */
  export type items6FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items6
     */
    select?: items6Select<ExtArgs> | null
    /**
     * Omit specific fields from the items6
     */
    omit?: items6Omit<ExtArgs> | null
    /**
     * Filter, which items6 to fetch.
     */
    where?: items6WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items6s to fetch.
     */
    orderBy?: items6OrderByWithRelationInput | items6OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items6s.
     */
    cursor?: items6WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items6s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items6s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items6s.
     */
    distinct?: Items6ScalarFieldEnum | Items6ScalarFieldEnum[]
  }

  /**
   * items6 findMany
   */
  export type items6FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items6
     */
    select?: items6Select<ExtArgs> | null
    /**
     * Omit specific fields from the items6
     */
    omit?: items6Omit<ExtArgs> | null
    /**
     * Filter, which items6s to fetch.
     */
    where?: items6WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items6s to fetch.
     */
    orderBy?: items6OrderByWithRelationInput | items6OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing items6s.
     */
    cursor?: items6WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items6s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items6s.
     */
    skip?: number
    distinct?: Items6ScalarFieldEnum | Items6ScalarFieldEnum[]
  }

  /**
   * items6 create
   */
  export type items6CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items6
     */
    select?: items6Select<ExtArgs> | null
    /**
     * Omit specific fields from the items6
     */
    omit?: items6Omit<ExtArgs> | null
    /**
     * The data needed to create a items6.
     */
    data?: XOR<items6CreateInput, items6UncheckedCreateInput>
  }

  /**
   * items6 createMany
   */
  export type items6CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many items6s.
     */
    data: items6CreateManyInput | items6CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * items6 update
   */
  export type items6UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items6
     */
    select?: items6Select<ExtArgs> | null
    /**
     * Omit specific fields from the items6
     */
    omit?: items6Omit<ExtArgs> | null
    /**
     * The data needed to update a items6.
     */
    data: XOR<items6UpdateInput, items6UncheckedUpdateInput>
    /**
     * Choose, which items6 to update.
     */
    where: items6WhereUniqueInput
  }

  /**
   * items6 updateMany
   */
  export type items6UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update items6s.
     */
    data: XOR<items6UpdateManyMutationInput, items6UncheckedUpdateManyInput>
    /**
     * Filter which items6s to update
     */
    where?: items6WhereInput
    /**
     * Limit how many items6s to update.
     */
    limit?: number
  }

  /**
   * items6 upsert
   */
  export type items6UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items6
     */
    select?: items6Select<ExtArgs> | null
    /**
     * Omit specific fields from the items6
     */
    omit?: items6Omit<ExtArgs> | null
    /**
     * The filter to search for the items6 to update in case it exists.
     */
    where: items6WhereUniqueInput
    /**
     * In case the items6 found by the `where` argument doesn't exist, create a new items6 with this data.
     */
    create: XOR<items6CreateInput, items6UncheckedCreateInput>
    /**
     * In case the items6 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<items6UpdateInput, items6UncheckedUpdateInput>
  }

  /**
   * items6 delete
   */
  export type items6DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items6
     */
    select?: items6Select<ExtArgs> | null
    /**
     * Omit specific fields from the items6
     */
    omit?: items6Omit<ExtArgs> | null
    /**
     * Filter which items6 to delete.
     */
    where: items6WhereUniqueInput
  }

  /**
   * items6 deleteMany
   */
  export type items6DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items6s to delete
     */
    where?: items6WhereInput
    /**
     * Limit how many items6s to delete.
     */
    limit?: number
  }

  /**
   * items6 without action
   */
  export type items6DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items6
     */
    select?: items6Select<ExtArgs> | null
    /**
     * Omit specific fields from the items6
     */
    omit?: items6Omit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    imageUrl: string | null
    provider: $Enums.Provider | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    imageUrl: string | null
    provider: $Enums.Provider | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    email: number
    imageUrl: number
    provider: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    imageUrl?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    imageUrl?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    imageUrl?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl: string | null
    provider: $Enums.Provider
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    imageUrl?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    heartedProducts?: boolean | User$heartedProductsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    recentlyViewed?: boolean | User$recentlyViewedArgs<ExtArgs>
    searches?: boolean | User$searchesArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    flaggedReviews?: boolean | User$flaggedReviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    imageUrl?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "email" | "imageUrl" | "provider" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    heartedProducts?: boolean | User$heartedProductsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    recentlyViewed?: boolean | User$recentlyViewedArgs<ExtArgs>
    searches?: boolean | User$searchesArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    flaggedReviews?: boolean | User$flaggedReviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      heartedProducts: Prisma.$UserHeartedProductPayload<ExtArgs>[]
      reviews: Prisma.$UserReviewPayload<ExtArgs>[]
      recentlyViewed: Prisma.$UserRecentlyViewedPayload<ExtArgs>[]
      searches: Prisma.$UserSearchPayload<ExtArgs>[]
      categories: Prisma.$UserCategoryPayload<ExtArgs>[]
      flaggedReviews: Prisma.$FlaggedReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      firstName: string
      lastName: string
      email: string
      imageUrl: string | null
      provider: $Enums.Provider
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    heartedProducts<T extends User$heartedProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$heartedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHeartedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recentlyViewed<T extends User$recentlyViewedArgs<ExtArgs> = {}>(args?: Subset<T, User$recentlyViewedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRecentlyViewedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    searches<T extends User$searchesArgs<ExtArgs> = {}>(args?: Subset<T, User$searchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flaggedReviews<T extends User$flaggedReviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$flaggedReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlaggedReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly userId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'Provider'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.heartedProducts
   */
  export type User$heartedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHeartedProduct
     */
    select?: UserHeartedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHeartedProduct
     */
    omit?: UserHeartedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeartedProductInclude<ExtArgs> | null
    where?: UserHeartedProductWhereInput
    orderBy?: UserHeartedProductOrderByWithRelationInput | UserHeartedProductOrderByWithRelationInput[]
    cursor?: UserHeartedProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHeartedProductScalarFieldEnum | UserHeartedProductScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    where?: UserReviewWhereInput
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    cursor?: UserReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * User.recentlyViewed
   */
  export type User$recentlyViewedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentlyViewed
     */
    select?: UserRecentlyViewedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentlyViewed
     */
    omit?: UserRecentlyViewedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentlyViewedInclude<ExtArgs> | null
    where?: UserRecentlyViewedWhereInput
    orderBy?: UserRecentlyViewedOrderByWithRelationInput | UserRecentlyViewedOrderByWithRelationInput[]
    cursor?: UserRecentlyViewedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRecentlyViewedScalarFieldEnum | UserRecentlyViewedScalarFieldEnum[]
  }

  /**
   * User.searches
   */
  export type User$searchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearch
     */
    select?: UserSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearch
     */
    omit?: UserSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchInclude<ExtArgs> | null
    where?: UserSearchWhereInput
    orderBy?: UserSearchOrderByWithRelationInput | UserSearchOrderByWithRelationInput[]
    cursor?: UserSearchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSearchScalarFieldEnum | UserSearchScalarFieldEnum[]
  }

  /**
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    where?: UserCategoryWhereInput
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    cursor?: UserCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCategoryScalarFieldEnum | UserCategoryScalarFieldEnum[]
  }

  /**
   * User.flaggedReviews
   */
  export type User$flaggedReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedReview
     */
    select?: FlaggedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedReview
     */
    omit?: FlaggedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedReviewInclude<ExtArgs> | null
    where?: FlaggedReviewWhereInput
    orderBy?: FlaggedReviewOrderByWithRelationInput | FlaggedReviewOrderByWithRelationInput[]
    cursor?: FlaggedReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlaggedReviewScalarFieldEnum | FlaggedReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    new_price_column: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    new_price_column: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    price: number | null
    description: string | null
    location: string | null
    link: string | null
    new_price_column: number | null
    deal: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    price: number | null
    description: string | null
    location: string | null
    link: string | null
    new_price_column: number | null
    deal: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    price: number
    description: number
    location: number
    link: number
    new_price_column: number
    deal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    new_price_column?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    new_price_column?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    price?: true
    description?: true
    location?: true
    link?: true
    new_price_column?: true
    deal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    price?: true
    description?: true
    location?: true
    link?: true
    new_price_column?: true
    deal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    price?: true
    description?: true
    location?: true
    link?: true
    new_price_column?: true
    deal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    price: number
    description: string
    location: string
    link: string
    new_price_column: number
    deal: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    description?: boolean
    location?: boolean
    link?: boolean
    new_price_column?: boolean
    deal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    viewedBy?: boolean | Product$viewedByArgs<ExtArgs>
    heartedBy?: boolean | Product$heartedByArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    price?: boolean
    description?: boolean
    location?: boolean
    link?: boolean
    new_price_column?: boolean
    deal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "description" | "location" | "link" | "new_price_column" | "deal" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    viewedBy?: boolean | Product$viewedByArgs<ExtArgs>
    heartedBy?: boolean | Product$heartedByArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      reviews: Prisma.$UserReviewPayload<ExtArgs>[]
      viewedBy: Prisma.$UserRecentlyViewedPayload<ExtArgs>[]
      heartedBy: Prisma.$UserHeartedProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      price: number
      description: string
      location: string
      link: string
      new_price_column: number
      deal: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends Product$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Product$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewedBy<T extends Product$viewedByArgs<ExtArgs> = {}>(args?: Subset<T, Product$viewedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRecentlyViewedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    heartedBy<T extends Product$heartedByArgs<ExtArgs> = {}>(args?: Subset<T, Product$heartedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHeartedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly description: FieldRef<"Product", 'String'>
    readonly location: FieldRef<"Product", 'String'>
    readonly link: FieldRef<"Product", 'String'>
    readonly new_price_column: FieldRef<"Product", 'Float'>
    readonly deal: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.reviews
   */
  export type Product$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    where?: UserReviewWhereInput
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    cursor?: UserReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * Product.viewedBy
   */
  export type Product$viewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentlyViewed
     */
    select?: UserRecentlyViewedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentlyViewed
     */
    omit?: UserRecentlyViewedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentlyViewedInclude<ExtArgs> | null
    where?: UserRecentlyViewedWhereInput
    orderBy?: UserRecentlyViewedOrderByWithRelationInput | UserRecentlyViewedOrderByWithRelationInput[]
    cursor?: UserRecentlyViewedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRecentlyViewedScalarFieldEnum | UserRecentlyViewedScalarFieldEnum[]
  }

  /**
   * Product.heartedBy
   */
  export type Product$heartedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHeartedProduct
     */
    select?: UserHeartedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHeartedProduct
     */
    omit?: UserHeartedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeartedProductInclude<ExtArgs> | null
    where?: UserHeartedProductWhereInput
    orderBy?: UserHeartedProductOrderByWithRelationInput | UserHeartedProductOrderByWithRelationInput[]
    cursor?: UserHeartedProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHeartedProductScalarFieldEnum | UserHeartedProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model UserHeartedProduct
   */

  export type AggregateUserHeartedProduct = {
    _count: UserHeartedProductCountAggregateOutputType | null
    _avg: UserHeartedProductAvgAggregateOutputType | null
    _sum: UserHeartedProductSumAggregateOutputType | null
    _min: UserHeartedProductMinAggregateOutputType | null
    _max: UserHeartedProductMaxAggregateOutputType | null
  }

  export type UserHeartedProductAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
  }

  export type UserHeartedProductSumAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
  }

  export type UserHeartedProductMinAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    createdAt: Date | null
  }

  export type UserHeartedProductMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    createdAt: Date | null
  }

  export type UserHeartedProductCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    createdAt: number
    _all: number
  }


  export type UserHeartedProductAvgAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
  }

  export type UserHeartedProductSumAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
  }

  export type UserHeartedProductMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
  }

  export type UserHeartedProductMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
  }

  export type UserHeartedProductCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
    _all?: true
  }

  export type UserHeartedProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHeartedProduct to aggregate.
     */
    where?: UserHeartedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHeartedProducts to fetch.
     */
    orderBy?: UserHeartedProductOrderByWithRelationInput | UserHeartedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserHeartedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHeartedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHeartedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserHeartedProducts
    **/
    _count?: true | UserHeartedProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserHeartedProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserHeartedProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserHeartedProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserHeartedProductMaxAggregateInputType
  }

  export type GetUserHeartedProductAggregateType<T extends UserHeartedProductAggregateArgs> = {
        [P in keyof T & keyof AggregateUserHeartedProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserHeartedProduct[P]>
      : GetScalarType<T[P], AggregateUserHeartedProduct[P]>
  }




  export type UserHeartedProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHeartedProductWhereInput
    orderBy?: UserHeartedProductOrderByWithAggregationInput | UserHeartedProductOrderByWithAggregationInput[]
    by: UserHeartedProductScalarFieldEnum[] | UserHeartedProductScalarFieldEnum
    having?: UserHeartedProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserHeartedProductCountAggregateInputType | true
    _avg?: UserHeartedProductAvgAggregateInputType
    _sum?: UserHeartedProductSumAggregateInputType
    _min?: UserHeartedProductMinAggregateInputType
    _max?: UserHeartedProductMaxAggregateInputType
  }

  export type UserHeartedProductGroupByOutputType = {
    id: number
    userId: number
    productId: number
    createdAt: Date
    _count: UserHeartedProductCountAggregateOutputType | null
    _avg: UserHeartedProductAvgAggregateOutputType | null
    _sum: UserHeartedProductSumAggregateOutputType | null
    _min: UserHeartedProductMinAggregateOutputType | null
    _max: UserHeartedProductMaxAggregateOutputType | null
  }

  type GetUserHeartedProductGroupByPayload<T extends UserHeartedProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserHeartedProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserHeartedProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserHeartedProductGroupByOutputType[P]>
            : GetScalarType<T[P], UserHeartedProductGroupByOutputType[P]>
        }
      >
    >


  export type UserHeartedProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHeartedProduct"]>



  export type UserHeartedProductSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
  }

  export type UserHeartedProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "createdAt", ExtArgs["result"]["userHeartedProduct"]>
  export type UserHeartedProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $UserHeartedProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserHeartedProduct"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      productId: number
      createdAt: Date
    }, ExtArgs["result"]["userHeartedProduct"]>
    composites: {}
  }

  type UserHeartedProductGetPayload<S extends boolean | null | undefined | UserHeartedProductDefaultArgs> = $Result.GetResult<Prisma.$UserHeartedProductPayload, S>

  type UserHeartedProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserHeartedProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserHeartedProductCountAggregateInputType | true
    }

  export interface UserHeartedProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserHeartedProduct'], meta: { name: 'UserHeartedProduct' } }
    /**
     * Find zero or one UserHeartedProduct that matches the filter.
     * @param {UserHeartedProductFindUniqueArgs} args - Arguments to find a UserHeartedProduct
     * @example
     * // Get one UserHeartedProduct
     * const userHeartedProduct = await prisma.userHeartedProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserHeartedProductFindUniqueArgs>(args: SelectSubset<T, UserHeartedProductFindUniqueArgs<ExtArgs>>): Prisma__UserHeartedProductClient<$Result.GetResult<Prisma.$UserHeartedProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserHeartedProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserHeartedProductFindUniqueOrThrowArgs} args - Arguments to find a UserHeartedProduct
     * @example
     * // Get one UserHeartedProduct
     * const userHeartedProduct = await prisma.userHeartedProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserHeartedProductFindUniqueOrThrowArgs>(args: SelectSubset<T, UserHeartedProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserHeartedProductClient<$Result.GetResult<Prisma.$UserHeartedProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHeartedProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeartedProductFindFirstArgs} args - Arguments to find a UserHeartedProduct
     * @example
     * // Get one UserHeartedProduct
     * const userHeartedProduct = await prisma.userHeartedProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserHeartedProductFindFirstArgs>(args?: SelectSubset<T, UserHeartedProductFindFirstArgs<ExtArgs>>): Prisma__UserHeartedProductClient<$Result.GetResult<Prisma.$UserHeartedProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHeartedProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeartedProductFindFirstOrThrowArgs} args - Arguments to find a UserHeartedProduct
     * @example
     * // Get one UserHeartedProduct
     * const userHeartedProduct = await prisma.userHeartedProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserHeartedProductFindFirstOrThrowArgs>(args?: SelectSubset<T, UserHeartedProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserHeartedProductClient<$Result.GetResult<Prisma.$UserHeartedProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserHeartedProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeartedProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserHeartedProducts
     * const userHeartedProducts = await prisma.userHeartedProduct.findMany()
     * 
     * // Get first 10 UserHeartedProducts
     * const userHeartedProducts = await prisma.userHeartedProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userHeartedProductWithIdOnly = await prisma.userHeartedProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserHeartedProductFindManyArgs>(args?: SelectSubset<T, UserHeartedProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHeartedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserHeartedProduct.
     * @param {UserHeartedProductCreateArgs} args - Arguments to create a UserHeartedProduct.
     * @example
     * // Create one UserHeartedProduct
     * const UserHeartedProduct = await prisma.userHeartedProduct.create({
     *   data: {
     *     // ... data to create a UserHeartedProduct
     *   }
     * })
     * 
     */
    create<T extends UserHeartedProductCreateArgs>(args: SelectSubset<T, UserHeartedProductCreateArgs<ExtArgs>>): Prisma__UserHeartedProductClient<$Result.GetResult<Prisma.$UserHeartedProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserHeartedProducts.
     * @param {UserHeartedProductCreateManyArgs} args - Arguments to create many UserHeartedProducts.
     * @example
     * // Create many UserHeartedProducts
     * const userHeartedProduct = await prisma.userHeartedProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserHeartedProductCreateManyArgs>(args?: SelectSubset<T, UserHeartedProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserHeartedProduct.
     * @param {UserHeartedProductDeleteArgs} args - Arguments to delete one UserHeartedProduct.
     * @example
     * // Delete one UserHeartedProduct
     * const UserHeartedProduct = await prisma.userHeartedProduct.delete({
     *   where: {
     *     // ... filter to delete one UserHeartedProduct
     *   }
     * })
     * 
     */
    delete<T extends UserHeartedProductDeleteArgs>(args: SelectSubset<T, UserHeartedProductDeleteArgs<ExtArgs>>): Prisma__UserHeartedProductClient<$Result.GetResult<Prisma.$UserHeartedProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserHeartedProduct.
     * @param {UserHeartedProductUpdateArgs} args - Arguments to update one UserHeartedProduct.
     * @example
     * // Update one UserHeartedProduct
     * const userHeartedProduct = await prisma.userHeartedProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserHeartedProductUpdateArgs>(args: SelectSubset<T, UserHeartedProductUpdateArgs<ExtArgs>>): Prisma__UserHeartedProductClient<$Result.GetResult<Prisma.$UserHeartedProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserHeartedProducts.
     * @param {UserHeartedProductDeleteManyArgs} args - Arguments to filter UserHeartedProducts to delete.
     * @example
     * // Delete a few UserHeartedProducts
     * const { count } = await prisma.userHeartedProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserHeartedProductDeleteManyArgs>(args?: SelectSubset<T, UserHeartedProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHeartedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeartedProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserHeartedProducts
     * const userHeartedProduct = await prisma.userHeartedProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserHeartedProductUpdateManyArgs>(args: SelectSubset<T, UserHeartedProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserHeartedProduct.
     * @param {UserHeartedProductUpsertArgs} args - Arguments to update or create a UserHeartedProduct.
     * @example
     * // Update or create a UserHeartedProduct
     * const userHeartedProduct = await prisma.userHeartedProduct.upsert({
     *   create: {
     *     // ... data to create a UserHeartedProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserHeartedProduct we want to update
     *   }
     * })
     */
    upsert<T extends UserHeartedProductUpsertArgs>(args: SelectSubset<T, UserHeartedProductUpsertArgs<ExtArgs>>): Prisma__UserHeartedProductClient<$Result.GetResult<Prisma.$UserHeartedProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserHeartedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeartedProductCountArgs} args - Arguments to filter UserHeartedProducts to count.
     * @example
     * // Count the number of UserHeartedProducts
     * const count = await prisma.userHeartedProduct.count({
     *   where: {
     *     // ... the filter for the UserHeartedProducts we want to count
     *   }
     * })
    **/
    count<T extends UserHeartedProductCountArgs>(
      args?: Subset<T, UserHeartedProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserHeartedProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserHeartedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeartedProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserHeartedProductAggregateArgs>(args: Subset<T, UserHeartedProductAggregateArgs>): Prisma.PrismaPromise<GetUserHeartedProductAggregateType<T>>

    /**
     * Group by UserHeartedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeartedProductGroupByArgs} args - Group by arguments.
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
      T extends UserHeartedProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserHeartedProductGroupByArgs['orderBy'] }
        : { orderBy?: UserHeartedProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserHeartedProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserHeartedProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserHeartedProduct model
   */
  readonly fields: UserHeartedProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserHeartedProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserHeartedProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserHeartedProduct model
   */
  interface UserHeartedProductFieldRefs {
    readonly id: FieldRef<"UserHeartedProduct", 'Int'>
    readonly userId: FieldRef<"UserHeartedProduct", 'Int'>
    readonly productId: FieldRef<"UserHeartedProduct", 'Int'>
    readonly createdAt: FieldRef<"UserHeartedProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserHeartedProduct findUnique
   */
  export type UserHeartedProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHeartedProduct
     */
    select?: UserHeartedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHeartedProduct
     */
    omit?: UserHeartedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeartedProductInclude<ExtArgs> | null
    /**
     * Filter, which UserHeartedProduct to fetch.
     */
    where: UserHeartedProductWhereUniqueInput
  }

  /**
   * UserHeartedProduct findUniqueOrThrow
   */
  export type UserHeartedProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHeartedProduct
     */
    select?: UserHeartedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHeartedProduct
     */
    omit?: UserHeartedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeartedProductInclude<ExtArgs> | null
    /**
     * Filter, which UserHeartedProduct to fetch.
     */
    where: UserHeartedProductWhereUniqueInput
  }

  /**
   * UserHeartedProduct findFirst
   */
  export type UserHeartedProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHeartedProduct
     */
    select?: UserHeartedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHeartedProduct
     */
    omit?: UserHeartedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeartedProductInclude<ExtArgs> | null
    /**
     * Filter, which UserHeartedProduct to fetch.
     */
    where?: UserHeartedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHeartedProducts to fetch.
     */
    orderBy?: UserHeartedProductOrderByWithRelationInput | UserHeartedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHeartedProducts.
     */
    cursor?: UserHeartedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHeartedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHeartedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHeartedProducts.
     */
    distinct?: UserHeartedProductScalarFieldEnum | UserHeartedProductScalarFieldEnum[]
  }

  /**
   * UserHeartedProduct findFirstOrThrow
   */
  export type UserHeartedProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHeartedProduct
     */
    select?: UserHeartedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHeartedProduct
     */
    omit?: UserHeartedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeartedProductInclude<ExtArgs> | null
    /**
     * Filter, which UserHeartedProduct to fetch.
     */
    where?: UserHeartedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHeartedProducts to fetch.
     */
    orderBy?: UserHeartedProductOrderByWithRelationInput | UserHeartedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHeartedProducts.
     */
    cursor?: UserHeartedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHeartedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHeartedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHeartedProducts.
     */
    distinct?: UserHeartedProductScalarFieldEnum | UserHeartedProductScalarFieldEnum[]
  }

  /**
   * UserHeartedProduct findMany
   */
  export type UserHeartedProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHeartedProduct
     */
    select?: UserHeartedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHeartedProduct
     */
    omit?: UserHeartedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeartedProductInclude<ExtArgs> | null
    /**
     * Filter, which UserHeartedProducts to fetch.
     */
    where?: UserHeartedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHeartedProducts to fetch.
     */
    orderBy?: UserHeartedProductOrderByWithRelationInput | UserHeartedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserHeartedProducts.
     */
    cursor?: UserHeartedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHeartedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHeartedProducts.
     */
    skip?: number
    distinct?: UserHeartedProductScalarFieldEnum | UserHeartedProductScalarFieldEnum[]
  }

  /**
   * UserHeartedProduct create
   */
  export type UserHeartedProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHeartedProduct
     */
    select?: UserHeartedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHeartedProduct
     */
    omit?: UserHeartedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeartedProductInclude<ExtArgs> | null
    /**
     * The data needed to create a UserHeartedProduct.
     */
    data: XOR<UserHeartedProductCreateInput, UserHeartedProductUncheckedCreateInput>
  }

  /**
   * UserHeartedProduct createMany
   */
  export type UserHeartedProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserHeartedProducts.
     */
    data: UserHeartedProductCreateManyInput | UserHeartedProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserHeartedProduct update
   */
  export type UserHeartedProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHeartedProduct
     */
    select?: UserHeartedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHeartedProduct
     */
    omit?: UserHeartedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeartedProductInclude<ExtArgs> | null
    /**
     * The data needed to update a UserHeartedProduct.
     */
    data: XOR<UserHeartedProductUpdateInput, UserHeartedProductUncheckedUpdateInput>
    /**
     * Choose, which UserHeartedProduct to update.
     */
    where: UserHeartedProductWhereUniqueInput
  }

  /**
   * UserHeartedProduct updateMany
   */
  export type UserHeartedProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserHeartedProducts.
     */
    data: XOR<UserHeartedProductUpdateManyMutationInput, UserHeartedProductUncheckedUpdateManyInput>
    /**
     * Filter which UserHeartedProducts to update
     */
    where?: UserHeartedProductWhereInput
    /**
     * Limit how many UserHeartedProducts to update.
     */
    limit?: number
  }

  /**
   * UserHeartedProduct upsert
   */
  export type UserHeartedProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHeartedProduct
     */
    select?: UserHeartedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHeartedProduct
     */
    omit?: UserHeartedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeartedProductInclude<ExtArgs> | null
    /**
     * The filter to search for the UserHeartedProduct to update in case it exists.
     */
    where: UserHeartedProductWhereUniqueInput
    /**
     * In case the UserHeartedProduct found by the `where` argument doesn't exist, create a new UserHeartedProduct with this data.
     */
    create: XOR<UserHeartedProductCreateInput, UserHeartedProductUncheckedCreateInput>
    /**
     * In case the UserHeartedProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserHeartedProductUpdateInput, UserHeartedProductUncheckedUpdateInput>
  }

  /**
   * UserHeartedProduct delete
   */
  export type UserHeartedProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHeartedProduct
     */
    select?: UserHeartedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHeartedProduct
     */
    omit?: UserHeartedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeartedProductInclude<ExtArgs> | null
    /**
     * Filter which UserHeartedProduct to delete.
     */
    where: UserHeartedProductWhereUniqueInput
  }

  /**
   * UserHeartedProduct deleteMany
   */
  export type UserHeartedProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHeartedProducts to delete
     */
    where?: UserHeartedProductWhereInput
    /**
     * Limit how many UserHeartedProducts to delete.
     */
    limit?: number
  }

  /**
   * UserHeartedProduct without action
   */
  export type UserHeartedProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHeartedProduct
     */
    select?: UserHeartedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHeartedProduct
     */
    omit?: UserHeartedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeartedProductInclude<ExtArgs> | null
  }


  /**
   * Model UserReview
   */

  export type AggregateUserReview = {
    _count: UserReviewCountAggregateOutputType | null
    _avg: UserReviewAvgAggregateOutputType | null
    _sum: UserReviewSumAggregateOutputType | null
    _min: UserReviewMinAggregateOutputType | null
    _max: UserReviewMaxAggregateOutputType | null
  }

  export type UserReviewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    rating: number | null
  }

  export type UserReviewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    rating: number | null
  }

  export type UserReviewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type UserReviewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type UserReviewCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type UserReviewAvgAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
  }

  export type UserReviewSumAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
  }

  export type UserReviewMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type UserReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type UserReviewCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type UserReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReview to aggregate.
     */
    where?: UserReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviews to fetch.
     */
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserReviews
    **/
    _count?: true | UserReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserReviewMaxAggregateInputType
  }

  export type GetUserReviewAggregateType<T extends UserReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateUserReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserReview[P]>
      : GetScalarType<T[P], AggregateUserReview[P]>
  }




  export type UserReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReviewWhereInput
    orderBy?: UserReviewOrderByWithAggregationInput | UserReviewOrderByWithAggregationInput[]
    by: UserReviewScalarFieldEnum[] | UserReviewScalarFieldEnum
    having?: UserReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserReviewCountAggregateInputType | true
    _avg?: UserReviewAvgAggregateInputType
    _sum?: UserReviewSumAggregateInputType
    _min?: UserReviewMinAggregateInputType
    _max?: UserReviewMaxAggregateInputType
  }

  export type UserReviewGroupByOutputType = {
    id: number
    userId: number
    productId: number
    rating: number
    comment: string | null
    createdAt: Date
    _count: UserReviewCountAggregateOutputType | null
    _avg: UserReviewAvgAggregateOutputType | null
    _sum: UserReviewSumAggregateOutputType | null
    _min: UserReviewMinAggregateOutputType | null
    _max: UserReviewMaxAggregateOutputType | null
  }

  type GetUserReviewGroupByPayload<T extends UserReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserReviewGroupByOutputType[P]>
            : GetScalarType<T[P], UserReviewGroupByOutputType[P]>
        }
      >
    >


  export type UserReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    flags?: boolean | UserReview$flagsArgs<ExtArgs>
    _count?: boolean | UserReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReview"]>



  export type UserReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type UserReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["userReview"]>
  export type UserReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    flags?: boolean | UserReview$flagsArgs<ExtArgs>
    _count?: boolean | UserReviewCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserReview"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      flags: Prisma.$FlaggedReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      productId: number
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["userReview"]>
    composites: {}
  }

  type UserReviewGetPayload<S extends boolean | null | undefined | UserReviewDefaultArgs> = $Result.GetResult<Prisma.$UserReviewPayload, S>

  type UserReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserReviewCountAggregateInputType | true
    }

  export interface UserReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserReview'], meta: { name: 'UserReview' } }
    /**
     * Find zero or one UserReview that matches the filter.
     * @param {UserReviewFindUniqueArgs} args - Arguments to find a UserReview
     * @example
     * // Get one UserReview
     * const userReview = await prisma.userReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserReviewFindUniqueArgs>(args: SelectSubset<T, UserReviewFindUniqueArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserReviewFindUniqueOrThrowArgs} args - Arguments to find a UserReview
     * @example
     * // Get one UserReview
     * const userReview = await prisma.userReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, UserReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewFindFirstArgs} args - Arguments to find a UserReview
     * @example
     * // Get one UserReview
     * const userReview = await prisma.userReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserReviewFindFirstArgs>(args?: SelectSubset<T, UserReviewFindFirstArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewFindFirstOrThrowArgs} args - Arguments to find a UserReview
     * @example
     * // Get one UserReview
     * const userReview = await prisma.userReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, UserReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserReviews
     * const userReviews = await prisma.userReview.findMany()
     * 
     * // Get first 10 UserReviews
     * const userReviews = await prisma.userReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userReviewWithIdOnly = await prisma.userReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserReviewFindManyArgs>(args?: SelectSubset<T, UserReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserReview.
     * @param {UserReviewCreateArgs} args - Arguments to create a UserReview.
     * @example
     * // Create one UserReview
     * const UserReview = await prisma.userReview.create({
     *   data: {
     *     // ... data to create a UserReview
     *   }
     * })
     * 
     */
    create<T extends UserReviewCreateArgs>(args: SelectSubset<T, UserReviewCreateArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserReviews.
     * @param {UserReviewCreateManyArgs} args - Arguments to create many UserReviews.
     * @example
     * // Create many UserReviews
     * const userReview = await prisma.userReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserReviewCreateManyArgs>(args?: SelectSubset<T, UserReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserReview.
     * @param {UserReviewDeleteArgs} args - Arguments to delete one UserReview.
     * @example
     * // Delete one UserReview
     * const UserReview = await prisma.userReview.delete({
     *   where: {
     *     // ... filter to delete one UserReview
     *   }
     * })
     * 
     */
    delete<T extends UserReviewDeleteArgs>(args: SelectSubset<T, UserReviewDeleteArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserReview.
     * @param {UserReviewUpdateArgs} args - Arguments to update one UserReview.
     * @example
     * // Update one UserReview
     * const userReview = await prisma.userReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserReviewUpdateArgs>(args: SelectSubset<T, UserReviewUpdateArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserReviews.
     * @param {UserReviewDeleteManyArgs} args - Arguments to filter UserReviews to delete.
     * @example
     * // Delete a few UserReviews
     * const { count } = await prisma.userReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserReviewDeleteManyArgs>(args?: SelectSubset<T, UserReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserReviews
     * const userReview = await prisma.userReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserReviewUpdateManyArgs>(args: SelectSubset<T, UserReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserReview.
     * @param {UserReviewUpsertArgs} args - Arguments to update or create a UserReview.
     * @example
     * // Update or create a UserReview
     * const userReview = await prisma.userReview.upsert({
     *   create: {
     *     // ... data to create a UserReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserReview we want to update
     *   }
     * })
     */
    upsert<T extends UserReviewUpsertArgs>(args: SelectSubset<T, UserReviewUpsertArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewCountArgs} args - Arguments to filter UserReviews to count.
     * @example
     * // Count the number of UserReviews
     * const count = await prisma.userReview.count({
     *   where: {
     *     // ... the filter for the UserReviews we want to count
     *   }
     * })
    **/
    count<T extends UserReviewCountArgs>(
      args?: Subset<T, UserReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserReviewAggregateArgs>(args: Subset<T, UserReviewAggregateArgs>): Prisma.PrismaPromise<GetUserReviewAggregateType<T>>

    /**
     * Group by UserReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewGroupByArgs} args - Group by arguments.
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
      T extends UserReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserReviewGroupByArgs['orderBy'] }
        : { orderBy?: UserReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserReview model
   */
  readonly fields: UserReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flags<T extends UserReview$flagsArgs<ExtArgs> = {}>(args?: Subset<T, UserReview$flagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlaggedReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserReview model
   */
  interface UserReviewFieldRefs {
    readonly id: FieldRef<"UserReview", 'Int'>
    readonly userId: FieldRef<"UserReview", 'Int'>
    readonly productId: FieldRef<"UserReview", 'Int'>
    readonly rating: FieldRef<"UserReview", 'Int'>
    readonly comment: FieldRef<"UserReview", 'String'>
    readonly createdAt: FieldRef<"UserReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserReview findUnique
   */
  export type UserReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReview to fetch.
     */
    where: UserReviewWhereUniqueInput
  }

  /**
   * UserReview findUniqueOrThrow
   */
  export type UserReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReview to fetch.
     */
    where: UserReviewWhereUniqueInput
  }

  /**
   * UserReview findFirst
   */
  export type UserReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReview to fetch.
     */
    where?: UserReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviews to fetch.
     */
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReviews.
     */
    cursor?: UserReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReviews.
     */
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * UserReview findFirstOrThrow
   */
  export type UserReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReview to fetch.
     */
    where?: UserReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviews to fetch.
     */
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReviews.
     */
    cursor?: UserReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReviews.
     */
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * UserReview findMany
   */
  export type UserReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReviews to fetch.
     */
    where?: UserReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviews to fetch.
     */
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserReviews.
     */
    cursor?: UserReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviews.
     */
    skip?: number
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * UserReview create
   */
  export type UserReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a UserReview.
     */
    data: XOR<UserReviewCreateInput, UserReviewUncheckedCreateInput>
  }

  /**
   * UserReview createMany
   */
  export type UserReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserReviews.
     */
    data: UserReviewCreateManyInput | UserReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserReview update
   */
  export type UserReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a UserReview.
     */
    data: XOR<UserReviewUpdateInput, UserReviewUncheckedUpdateInput>
    /**
     * Choose, which UserReview to update.
     */
    where: UserReviewWhereUniqueInput
  }

  /**
   * UserReview updateMany
   */
  export type UserReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserReviews.
     */
    data: XOR<UserReviewUpdateManyMutationInput, UserReviewUncheckedUpdateManyInput>
    /**
     * Filter which UserReviews to update
     */
    where?: UserReviewWhereInput
    /**
     * Limit how many UserReviews to update.
     */
    limit?: number
  }

  /**
   * UserReview upsert
   */
  export type UserReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the UserReview to update in case it exists.
     */
    where: UserReviewWhereUniqueInput
    /**
     * In case the UserReview found by the `where` argument doesn't exist, create a new UserReview with this data.
     */
    create: XOR<UserReviewCreateInput, UserReviewUncheckedCreateInput>
    /**
     * In case the UserReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserReviewUpdateInput, UserReviewUncheckedUpdateInput>
  }

  /**
   * UserReview delete
   */
  export type UserReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter which UserReview to delete.
     */
    where: UserReviewWhereUniqueInput
  }

  /**
   * UserReview deleteMany
   */
  export type UserReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReviews to delete
     */
    where?: UserReviewWhereInput
    /**
     * Limit how many UserReviews to delete.
     */
    limit?: number
  }

  /**
   * UserReview.flags
   */
  export type UserReview$flagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedReview
     */
    select?: FlaggedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedReview
     */
    omit?: FlaggedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedReviewInclude<ExtArgs> | null
    where?: FlaggedReviewWhereInput
    orderBy?: FlaggedReviewOrderByWithRelationInput | FlaggedReviewOrderByWithRelationInput[]
    cursor?: FlaggedReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlaggedReviewScalarFieldEnum | FlaggedReviewScalarFieldEnum[]
  }

  /**
   * UserReview without action
   */
  export type UserReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
  }


  /**
   * Model UserRecentlyViewed
   */

  export type AggregateUserRecentlyViewed = {
    _count: UserRecentlyViewedCountAggregateOutputType | null
    _avg: UserRecentlyViewedAvgAggregateOutputType | null
    _sum: UserRecentlyViewedSumAggregateOutputType | null
    _min: UserRecentlyViewedMinAggregateOutputType | null
    _max: UserRecentlyViewedMaxAggregateOutputType | null
  }

  export type UserRecentlyViewedAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
  }

  export type UserRecentlyViewedSumAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
  }

  export type UserRecentlyViewedMinAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    viewedAt: Date | null
  }

  export type UserRecentlyViewedMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    viewedAt: Date | null
  }

  export type UserRecentlyViewedCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    viewedAt: number
    _all: number
  }


  export type UserRecentlyViewedAvgAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
  }

  export type UserRecentlyViewedSumAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
  }

  export type UserRecentlyViewedMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    viewedAt?: true
  }

  export type UserRecentlyViewedMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    viewedAt?: true
  }

  export type UserRecentlyViewedCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    viewedAt?: true
    _all?: true
  }

  export type UserRecentlyViewedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRecentlyViewed to aggregate.
     */
    where?: UserRecentlyViewedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRecentlyVieweds to fetch.
     */
    orderBy?: UserRecentlyViewedOrderByWithRelationInput | UserRecentlyViewedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRecentlyViewedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRecentlyVieweds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRecentlyVieweds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRecentlyVieweds
    **/
    _count?: true | UserRecentlyViewedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRecentlyViewedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRecentlyViewedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRecentlyViewedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRecentlyViewedMaxAggregateInputType
  }

  export type GetUserRecentlyViewedAggregateType<T extends UserRecentlyViewedAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRecentlyViewed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRecentlyViewed[P]>
      : GetScalarType<T[P], AggregateUserRecentlyViewed[P]>
  }




  export type UserRecentlyViewedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRecentlyViewedWhereInput
    orderBy?: UserRecentlyViewedOrderByWithAggregationInput | UserRecentlyViewedOrderByWithAggregationInput[]
    by: UserRecentlyViewedScalarFieldEnum[] | UserRecentlyViewedScalarFieldEnum
    having?: UserRecentlyViewedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRecentlyViewedCountAggregateInputType | true
    _avg?: UserRecentlyViewedAvgAggregateInputType
    _sum?: UserRecentlyViewedSumAggregateInputType
    _min?: UserRecentlyViewedMinAggregateInputType
    _max?: UserRecentlyViewedMaxAggregateInputType
  }

  export type UserRecentlyViewedGroupByOutputType = {
    id: number
    userId: number
    productId: number
    viewedAt: Date
    _count: UserRecentlyViewedCountAggregateOutputType | null
    _avg: UserRecentlyViewedAvgAggregateOutputType | null
    _sum: UserRecentlyViewedSumAggregateOutputType | null
    _min: UserRecentlyViewedMinAggregateOutputType | null
    _max: UserRecentlyViewedMaxAggregateOutputType | null
  }

  type GetUserRecentlyViewedGroupByPayload<T extends UserRecentlyViewedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRecentlyViewedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRecentlyViewedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRecentlyViewedGroupByOutputType[P]>
            : GetScalarType<T[P], UserRecentlyViewedGroupByOutputType[P]>
        }
      >
    >


  export type UserRecentlyViewedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    viewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRecentlyViewed"]>



  export type UserRecentlyViewedSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    viewedAt?: boolean
  }

  export type UserRecentlyViewedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "viewedAt", ExtArgs["result"]["userRecentlyViewed"]>
  export type UserRecentlyViewedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $UserRecentlyViewedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRecentlyViewed"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      productId: number
      viewedAt: Date
    }, ExtArgs["result"]["userRecentlyViewed"]>
    composites: {}
  }

  type UserRecentlyViewedGetPayload<S extends boolean | null | undefined | UserRecentlyViewedDefaultArgs> = $Result.GetResult<Prisma.$UserRecentlyViewedPayload, S>

  type UserRecentlyViewedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRecentlyViewedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRecentlyViewedCountAggregateInputType | true
    }

  export interface UserRecentlyViewedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRecentlyViewed'], meta: { name: 'UserRecentlyViewed' } }
    /**
     * Find zero or one UserRecentlyViewed that matches the filter.
     * @param {UserRecentlyViewedFindUniqueArgs} args - Arguments to find a UserRecentlyViewed
     * @example
     * // Get one UserRecentlyViewed
     * const userRecentlyViewed = await prisma.userRecentlyViewed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRecentlyViewedFindUniqueArgs>(args: SelectSubset<T, UserRecentlyViewedFindUniqueArgs<ExtArgs>>): Prisma__UserRecentlyViewedClient<$Result.GetResult<Prisma.$UserRecentlyViewedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRecentlyViewed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRecentlyViewedFindUniqueOrThrowArgs} args - Arguments to find a UserRecentlyViewed
     * @example
     * // Get one UserRecentlyViewed
     * const userRecentlyViewed = await prisma.userRecentlyViewed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRecentlyViewedFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRecentlyViewedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRecentlyViewedClient<$Result.GetResult<Prisma.$UserRecentlyViewedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRecentlyViewed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentlyViewedFindFirstArgs} args - Arguments to find a UserRecentlyViewed
     * @example
     * // Get one UserRecentlyViewed
     * const userRecentlyViewed = await prisma.userRecentlyViewed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRecentlyViewedFindFirstArgs>(args?: SelectSubset<T, UserRecentlyViewedFindFirstArgs<ExtArgs>>): Prisma__UserRecentlyViewedClient<$Result.GetResult<Prisma.$UserRecentlyViewedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRecentlyViewed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentlyViewedFindFirstOrThrowArgs} args - Arguments to find a UserRecentlyViewed
     * @example
     * // Get one UserRecentlyViewed
     * const userRecentlyViewed = await prisma.userRecentlyViewed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRecentlyViewedFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRecentlyViewedFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRecentlyViewedClient<$Result.GetResult<Prisma.$UserRecentlyViewedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRecentlyVieweds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentlyViewedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRecentlyVieweds
     * const userRecentlyVieweds = await prisma.userRecentlyViewed.findMany()
     * 
     * // Get first 10 UserRecentlyVieweds
     * const userRecentlyVieweds = await prisma.userRecentlyViewed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRecentlyViewedWithIdOnly = await prisma.userRecentlyViewed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRecentlyViewedFindManyArgs>(args?: SelectSubset<T, UserRecentlyViewedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRecentlyViewedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRecentlyViewed.
     * @param {UserRecentlyViewedCreateArgs} args - Arguments to create a UserRecentlyViewed.
     * @example
     * // Create one UserRecentlyViewed
     * const UserRecentlyViewed = await prisma.userRecentlyViewed.create({
     *   data: {
     *     // ... data to create a UserRecentlyViewed
     *   }
     * })
     * 
     */
    create<T extends UserRecentlyViewedCreateArgs>(args: SelectSubset<T, UserRecentlyViewedCreateArgs<ExtArgs>>): Prisma__UserRecentlyViewedClient<$Result.GetResult<Prisma.$UserRecentlyViewedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRecentlyVieweds.
     * @param {UserRecentlyViewedCreateManyArgs} args - Arguments to create many UserRecentlyVieweds.
     * @example
     * // Create many UserRecentlyVieweds
     * const userRecentlyViewed = await prisma.userRecentlyViewed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRecentlyViewedCreateManyArgs>(args?: SelectSubset<T, UserRecentlyViewedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRecentlyViewed.
     * @param {UserRecentlyViewedDeleteArgs} args - Arguments to delete one UserRecentlyViewed.
     * @example
     * // Delete one UserRecentlyViewed
     * const UserRecentlyViewed = await prisma.userRecentlyViewed.delete({
     *   where: {
     *     // ... filter to delete one UserRecentlyViewed
     *   }
     * })
     * 
     */
    delete<T extends UserRecentlyViewedDeleteArgs>(args: SelectSubset<T, UserRecentlyViewedDeleteArgs<ExtArgs>>): Prisma__UserRecentlyViewedClient<$Result.GetResult<Prisma.$UserRecentlyViewedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRecentlyViewed.
     * @param {UserRecentlyViewedUpdateArgs} args - Arguments to update one UserRecentlyViewed.
     * @example
     * // Update one UserRecentlyViewed
     * const userRecentlyViewed = await prisma.userRecentlyViewed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRecentlyViewedUpdateArgs>(args: SelectSubset<T, UserRecentlyViewedUpdateArgs<ExtArgs>>): Prisma__UserRecentlyViewedClient<$Result.GetResult<Prisma.$UserRecentlyViewedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRecentlyVieweds.
     * @param {UserRecentlyViewedDeleteManyArgs} args - Arguments to filter UserRecentlyVieweds to delete.
     * @example
     * // Delete a few UserRecentlyVieweds
     * const { count } = await prisma.userRecentlyViewed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRecentlyViewedDeleteManyArgs>(args?: SelectSubset<T, UserRecentlyViewedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRecentlyVieweds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentlyViewedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRecentlyVieweds
     * const userRecentlyViewed = await prisma.userRecentlyViewed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRecentlyViewedUpdateManyArgs>(args: SelectSubset<T, UserRecentlyViewedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRecentlyViewed.
     * @param {UserRecentlyViewedUpsertArgs} args - Arguments to update or create a UserRecentlyViewed.
     * @example
     * // Update or create a UserRecentlyViewed
     * const userRecentlyViewed = await prisma.userRecentlyViewed.upsert({
     *   create: {
     *     // ... data to create a UserRecentlyViewed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRecentlyViewed we want to update
     *   }
     * })
     */
    upsert<T extends UserRecentlyViewedUpsertArgs>(args: SelectSubset<T, UserRecentlyViewedUpsertArgs<ExtArgs>>): Prisma__UserRecentlyViewedClient<$Result.GetResult<Prisma.$UserRecentlyViewedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRecentlyVieweds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentlyViewedCountArgs} args - Arguments to filter UserRecentlyVieweds to count.
     * @example
     * // Count the number of UserRecentlyVieweds
     * const count = await prisma.userRecentlyViewed.count({
     *   where: {
     *     // ... the filter for the UserRecentlyVieweds we want to count
     *   }
     * })
    **/
    count<T extends UserRecentlyViewedCountArgs>(
      args?: Subset<T, UserRecentlyViewedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRecentlyViewedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRecentlyViewed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentlyViewedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRecentlyViewedAggregateArgs>(args: Subset<T, UserRecentlyViewedAggregateArgs>): Prisma.PrismaPromise<GetUserRecentlyViewedAggregateType<T>>

    /**
     * Group by UserRecentlyViewed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRecentlyViewedGroupByArgs} args - Group by arguments.
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
      T extends UserRecentlyViewedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRecentlyViewedGroupByArgs['orderBy'] }
        : { orderBy?: UserRecentlyViewedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRecentlyViewedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRecentlyViewedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRecentlyViewed model
   */
  readonly fields: UserRecentlyViewedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRecentlyViewed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRecentlyViewedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserRecentlyViewed model
   */
  interface UserRecentlyViewedFieldRefs {
    readonly id: FieldRef<"UserRecentlyViewed", 'Int'>
    readonly userId: FieldRef<"UserRecentlyViewed", 'Int'>
    readonly productId: FieldRef<"UserRecentlyViewed", 'Int'>
    readonly viewedAt: FieldRef<"UserRecentlyViewed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRecentlyViewed findUnique
   */
  export type UserRecentlyViewedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentlyViewed
     */
    select?: UserRecentlyViewedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentlyViewed
     */
    omit?: UserRecentlyViewedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentlyViewedInclude<ExtArgs> | null
    /**
     * Filter, which UserRecentlyViewed to fetch.
     */
    where: UserRecentlyViewedWhereUniqueInput
  }

  /**
   * UserRecentlyViewed findUniqueOrThrow
   */
  export type UserRecentlyViewedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentlyViewed
     */
    select?: UserRecentlyViewedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentlyViewed
     */
    omit?: UserRecentlyViewedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentlyViewedInclude<ExtArgs> | null
    /**
     * Filter, which UserRecentlyViewed to fetch.
     */
    where: UserRecentlyViewedWhereUniqueInput
  }

  /**
   * UserRecentlyViewed findFirst
   */
  export type UserRecentlyViewedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentlyViewed
     */
    select?: UserRecentlyViewedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentlyViewed
     */
    omit?: UserRecentlyViewedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentlyViewedInclude<ExtArgs> | null
    /**
     * Filter, which UserRecentlyViewed to fetch.
     */
    where?: UserRecentlyViewedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRecentlyVieweds to fetch.
     */
    orderBy?: UserRecentlyViewedOrderByWithRelationInput | UserRecentlyViewedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRecentlyVieweds.
     */
    cursor?: UserRecentlyViewedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRecentlyVieweds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRecentlyVieweds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRecentlyVieweds.
     */
    distinct?: UserRecentlyViewedScalarFieldEnum | UserRecentlyViewedScalarFieldEnum[]
  }

  /**
   * UserRecentlyViewed findFirstOrThrow
   */
  export type UserRecentlyViewedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentlyViewed
     */
    select?: UserRecentlyViewedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentlyViewed
     */
    omit?: UserRecentlyViewedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentlyViewedInclude<ExtArgs> | null
    /**
     * Filter, which UserRecentlyViewed to fetch.
     */
    where?: UserRecentlyViewedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRecentlyVieweds to fetch.
     */
    orderBy?: UserRecentlyViewedOrderByWithRelationInput | UserRecentlyViewedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRecentlyVieweds.
     */
    cursor?: UserRecentlyViewedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRecentlyVieweds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRecentlyVieweds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRecentlyVieweds.
     */
    distinct?: UserRecentlyViewedScalarFieldEnum | UserRecentlyViewedScalarFieldEnum[]
  }

  /**
   * UserRecentlyViewed findMany
   */
  export type UserRecentlyViewedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentlyViewed
     */
    select?: UserRecentlyViewedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentlyViewed
     */
    omit?: UserRecentlyViewedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentlyViewedInclude<ExtArgs> | null
    /**
     * Filter, which UserRecentlyVieweds to fetch.
     */
    where?: UserRecentlyViewedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRecentlyVieweds to fetch.
     */
    orderBy?: UserRecentlyViewedOrderByWithRelationInput | UserRecentlyViewedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRecentlyVieweds.
     */
    cursor?: UserRecentlyViewedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRecentlyVieweds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRecentlyVieweds.
     */
    skip?: number
    distinct?: UserRecentlyViewedScalarFieldEnum | UserRecentlyViewedScalarFieldEnum[]
  }

  /**
   * UserRecentlyViewed create
   */
  export type UserRecentlyViewedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentlyViewed
     */
    select?: UserRecentlyViewedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentlyViewed
     */
    omit?: UserRecentlyViewedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentlyViewedInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRecentlyViewed.
     */
    data: XOR<UserRecentlyViewedCreateInput, UserRecentlyViewedUncheckedCreateInput>
  }

  /**
   * UserRecentlyViewed createMany
   */
  export type UserRecentlyViewedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRecentlyVieweds.
     */
    data: UserRecentlyViewedCreateManyInput | UserRecentlyViewedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRecentlyViewed update
   */
  export type UserRecentlyViewedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentlyViewed
     */
    select?: UserRecentlyViewedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentlyViewed
     */
    omit?: UserRecentlyViewedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentlyViewedInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRecentlyViewed.
     */
    data: XOR<UserRecentlyViewedUpdateInput, UserRecentlyViewedUncheckedUpdateInput>
    /**
     * Choose, which UserRecentlyViewed to update.
     */
    where: UserRecentlyViewedWhereUniqueInput
  }

  /**
   * UserRecentlyViewed updateMany
   */
  export type UserRecentlyViewedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRecentlyVieweds.
     */
    data: XOR<UserRecentlyViewedUpdateManyMutationInput, UserRecentlyViewedUncheckedUpdateManyInput>
    /**
     * Filter which UserRecentlyVieweds to update
     */
    where?: UserRecentlyViewedWhereInput
    /**
     * Limit how many UserRecentlyVieweds to update.
     */
    limit?: number
  }

  /**
   * UserRecentlyViewed upsert
   */
  export type UserRecentlyViewedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentlyViewed
     */
    select?: UserRecentlyViewedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentlyViewed
     */
    omit?: UserRecentlyViewedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentlyViewedInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRecentlyViewed to update in case it exists.
     */
    where: UserRecentlyViewedWhereUniqueInput
    /**
     * In case the UserRecentlyViewed found by the `where` argument doesn't exist, create a new UserRecentlyViewed with this data.
     */
    create: XOR<UserRecentlyViewedCreateInput, UserRecentlyViewedUncheckedCreateInput>
    /**
     * In case the UserRecentlyViewed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRecentlyViewedUpdateInput, UserRecentlyViewedUncheckedUpdateInput>
  }

  /**
   * UserRecentlyViewed delete
   */
  export type UserRecentlyViewedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentlyViewed
     */
    select?: UserRecentlyViewedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentlyViewed
     */
    omit?: UserRecentlyViewedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentlyViewedInclude<ExtArgs> | null
    /**
     * Filter which UserRecentlyViewed to delete.
     */
    where: UserRecentlyViewedWhereUniqueInput
  }

  /**
   * UserRecentlyViewed deleteMany
   */
  export type UserRecentlyViewedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRecentlyVieweds to delete
     */
    where?: UserRecentlyViewedWhereInput
    /**
     * Limit how many UserRecentlyVieweds to delete.
     */
    limit?: number
  }

  /**
   * UserRecentlyViewed without action
   */
  export type UserRecentlyViewedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRecentlyViewed
     */
    select?: UserRecentlyViewedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRecentlyViewed
     */
    omit?: UserRecentlyViewedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRecentlyViewedInclude<ExtArgs> | null
  }


  /**
   * Model UserSearch
   */

  export type AggregateUserSearch = {
    _count: UserSearchCountAggregateOutputType | null
    _avg: UserSearchAvgAggregateOutputType | null
    _sum: UserSearchSumAggregateOutputType | null
    _min: UserSearchMinAggregateOutputType | null
    _max: UserSearchMaxAggregateOutputType | null
  }

  export type UserSearchAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserSearchSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserSearchMinAggregateOutputType = {
    id: number | null
    userId: number | null
    query: string | null
    searchedAt: Date | null
  }

  export type UserSearchMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    query: string | null
    searchedAt: Date | null
  }

  export type UserSearchCountAggregateOutputType = {
    id: number
    userId: number
    query: number
    searchedAt: number
    _all: number
  }


  export type UserSearchAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserSearchSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserSearchMinAggregateInputType = {
    id?: true
    userId?: true
    query?: true
    searchedAt?: true
  }

  export type UserSearchMaxAggregateInputType = {
    id?: true
    userId?: true
    query?: true
    searchedAt?: true
  }

  export type UserSearchCountAggregateInputType = {
    id?: true
    userId?: true
    query?: true
    searchedAt?: true
    _all?: true
  }

  export type UserSearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSearch to aggregate.
     */
    where?: UserSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSearches to fetch.
     */
    orderBy?: UserSearchOrderByWithRelationInput | UserSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSearches
    **/
    _count?: true | UserSearchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSearchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSearchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSearchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSearchMaxAggregateInputType
  }

  export type GetUserSearchAggregateType<T extends UserSearchAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSearch[P]>
      : GetScalarType<T[P], AggregateUserSearch[P]>
  }




  export type UserSearchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSearchWhereInput
    orderBy?: UserSearchOrderByWithAggregationInput | UserSearchOrderByWithAggregationInput[]
    by: UserSearchScalarFieldEnum[] | UserSearchScalarFieldEnum
    having?: UserSearchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSearchCountAggregateInputType | true
    _avg?: UserSearchAvgAggregateInputType
    _sum?: UserSearchSumAggregateInputType
    _min?: UserSearchMinAggregateInputType
    _max?: UserSearchMaxAggregateInputType
  }

  export type UserSearchGroupByOutputType = {
    id: number
    userId: number
    query: string
    searchedAt: Date
    _count: UserSearchCountAggregateOutputType | null
    _avg: UserSearchAvgAggregateOutputType | null
    _sum: UserSearchSumAggregateOutputType | null
    _min: UserSearchMinAggregateOutputType | null
    _max: UserSearchMaxAggregateOutputType | null
  }

  type GetUserSearchGroupByPayload<T extends UserSearchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSearchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSearchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSearchGroupByOutputType[P]>
            : GetScalarType<T[P], UserSearchGroupByOutputType[P]>
        }
      >
    >


  export type UserSearchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    query?: boolean
    searchedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSearch"]>



  export type UserSearchSelectScalar = {
    id?: boolean
    userId?: boolean
    query?: boolean
    searchedAt?: boolean
  }

  export type UserSearchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "query" | "searchedAt", ExtArgs["result"]["userSearch"]>
  export type UserSearchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSearchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSearch"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      query: string
      searchedAt: Date
    }, ExtArgs["result"]["userSearch"]>
    composites: {}
  }

  type UserSearchGetPayload<S extends boolean | null | undefined | UserSearchDefaultArgs> = $Result.GetResult<Prisma.$UserSearchPayload, S>

  type UserSearchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSearchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSearchCountAggregateInputType | true
    }

  export interface UserSearchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSearch'], meta: { name: 'UserSearch' } }
    /**
     * Find zero or one UserSearch that matches the filter.
     * @param {UserSearchFindUniqueArgs} args - Arguments to find a UserSearch
     * @example
     * // Get one UserSearch
     * const userSearch = await prisma.userSearch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSearchFindUniqueArgs>(args: SelectSubset<T, UserSearchFindUniqueArgs<ExtArgs>>): Prisma__UserSearchClient<$Result.GetResult<Prisma.$UserSearchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSearch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSearchFindUniqueOrThrowArgs} args - Arguments to find a UserSearch
     * @example
     * // Get one UserSearch
     * const userSearch = await prisma.userSearch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSearchFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSearchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSearchClient<$Result.GetResult<Prisma.$UserSearchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSearch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchFindFirstArgs} args - Arguments to find a UserSearch
     * @example
     * // Get one UserSearch
     * const userSearch = await prisma.userSearch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSearchFindFirstArgs>(args?: SelectSubset<T, UserSearchFindFirstArgs<ExtArgs>>): Prisma__UserSearchClient<$Result.GetResult<Prisma.$UserSearchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSearch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchFindFirstOrThrowArgs} args - Arguments to find a UserSearch
     * @example
     * // Get one UserSearch
     * const userSearch = await prisma.userSearch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSearchFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSearchFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSearchClient<$Result.GetResult<Prisma.$UserSearchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSearches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSearches
     * const userSearches = await prisma.userSearch.findMany()
     * 
     * // Get first 10 UserSearches
     * const userSearches = await prisma.userSearch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSearchWithIdOnly = await prisma.userSearch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSearchFindManyArgs>(args?: SelectSubset<T, UserSearchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSearch.
     * @param {UserSearchCreateArgs} args - Arguments to create a UserSearch.
     * @example
     * // Create one UserSearch
     * const UserSearch = await prisma.userSearch.create({
     *   data: {
     *     // ... data to create a UserSearch
     *   }
     * })
     * 
     */
    create<T extends UserSearchCreateArgs>(args: SelectSubset<T, UserSearchCreateArgs<ExtArgs>>): Prisma__UserSearchClient<$Result.GetResult<Prisma.$UserSearchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSearches.
     * @param {UserSearchCreateManyArgs} args - Arguments to create many UserSearches.
     * @example
     * // Create many UserSearches
     * const userSearch = await prisma.userSearch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSearchCreateManyArgs>(args?: SelectSubset<T, UserSearchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserSearch.
     * @param {UserSearchDeleteArgs} args - Arguments to delete one UserSearch.
     * @example
     * // Delete one UserSearch
     * const UserSearch = await prisma.userSearch.delete({
     *   where: {
     *     // ... filter to delete one UserSearch
     *   }
     * })
     * 
     */
    delete<T extends UserSearchDeleteArgs>(args: SelectSubset<T, UserSearchDeleteArgs<ExtArgs>>): Prisma__UserSearchClient<$Result.GetResult<Prisma.$UserSearchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSearch.
     * @param {UserSearchUpdateArgs} args - Arguments to update one UserSearch.
     * @example
     * // Update one UserSearch
     * const userSearch = await prisma.userSearch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSearchUpdateArgs>(args: SelectSubset<T, UserSearchUpdateArgs<ExtArgs>>): Prisma__UserSearchClient<$Result.GetResult<Prisma.$UserSearchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSearches.
     * @param {UserSearchDeleteManyArgs} args - Arguments to filter UserSearches to delete.
     * @example
     * // Delete a few UserSearches
     * const { count } = await prisma.userSearch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSearchDeleteManyArgs>(args?: SelectSubset<T, UserSearchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSearches
     * const userSearch = await prisma.userSearch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSearchUpdateManyArgs>(args: SelectSubset<T, UserSearchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSearch.
     * @param {UserSearchUpsertArgs} args - Arguments to update or create a UserSearch.
     * @example
     * // Update or create a UserSearch
     * const userSearch = await prisma.userSearch.upsert({
     *   create: {
     *     // ... data to create a UserSearch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSearch we want to update
     *   }
     * })
     */
    upsert<T extends UserSearchUpsertArgs>(args: SelectSubset<T, UserSearchUpsertArgs<ExtArgs>>): Prisma__UserSearchClient<$Result.GetResult<Prisma.$UserSearchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchCountArgs} args - Arguments to filter UserSearches to count.
     * @example
     * // Count the number of UserSearches
     * const count = await prisma.userSearch.count({
     *   where: {
     *     // ... the filter for the UserSearches we want to count
     *   }
     * })
    **/
    count<T extends UserSearchCountArgs>(
      args?: Subset<T, UserSearchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSearchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSearchAggregateArgs>(args: Subset<T, UserSearchAggregateArgs>): Prisma.PrismaPromise<GetUserSearchAggregateType<T>>

    /**
     * Group by UserSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchGroupByArgs} args - Group by arguments.
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
      T extends UserSearchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSearchGroupByArgs['orderBy'] }
        : { orderBy?: UserSearchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSearch model
   */
  readonly fields: UserSearchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSearch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSearchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSearch model
   */
  interface UserSearchFieldRefs {
    readonly id: FieldRef<"UserSearch", 'Int'>
    readonly userId: FieldRef<"UserSearch", 'Int'>
    readonly query: FieldRef<"UserSearch", 'String'>
    readonly searchedAt: FieldRef<"UserSearch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSearch findUnique
   */
  export type UserSearchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearch
     */
    select?: UserSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearch
     */
    omit?: UserSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchInclude<ExtArgs> | null
    /**
     * Filter, which UserSearch to fetch.
     */
    where: UserSearchWhereUniqueInput
  }

  /**
   * UserSearch findUniqueOrThrow
   */
  export type UserSearchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearch
     */
    select?: UserSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearch
     */
    omit?: UserSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchInclude<ExtArgs> | null
    /**
     * Filter, which UserSearch to fetch.
     */
    where: UserSearchWhereUniqueInput
  }

  /**
   * UserSearch findFirst
   */
  export type UserSearchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearch
     */
    select?: UserSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearch
     */
    omit?: UserSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchInclude<ExtArgs> | null
    /**
     * Filter, which UserSearch to fetch.
     */
    where?: UserSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSearches to fetch.
     */
    orderBy?: UserSearchOrderByWithRelationInput | UserSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSearches.
     */
    cursor?: UserSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSearches.
     */
    distinct?: UserSearchScalarFieldEnum | UserSearchScalarFieldEnum[]
  }

  /**
   * UserSearch findFirstOrThrow
   */
  export type UserSearchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearch
     */
    select?: UserSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearch
     */
    omit?: UserSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchInclude<ExtArgs> | null
    /**
     * Filter, which UserSearch to fetch.
     */
    where?: UserSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSearches to fetch.
     */
    orderBy?: UserSearchOrderByWithRelationInput | UserSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSearches.
     */
    cursor?: UserSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSearches.
     */
    distinct?: UserSearchScalarFieldEnum | UserSearchScalarFieldEnum[]
  }

  /**
   * UserSearch findMany
   */
  export type UserSearchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearch
     */
    select?: UserSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearch
     */
    omit?: UserSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchInclude<ExtArgs> | null
    /**
     * Filter, which UserSearches to fetch.
     */
    where?: UserSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSearches to fetch.
     */
    orderBy?: UserSearchOrderByWithRelationInput | UserSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSearches.
     */
    cursor?: UserSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSearches.
     */
    skip?: number
    distinct?: UserSearchScalarFieldEnum | UserSearchScalarFieldEnum[]
  }

  /**
   * UserSearch create
   */
  export type UserSearchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearch
     */
    select?: UserSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearch
     */
    omit?: UserSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSearch.
     */
    data: XOR<UserSearchCreateInput, UserSearchUncheckedCreateInput>
  }

  /**
   * UserSearch createMany
   */
  export type UserSearchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSearches.
     */
    data: UserSearchCreateManyInput | UserSearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSearch update
   */
  export type UserSearchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearch
     */
    select?: UserSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearch
     */
    omit?: UserSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSearch.
     */
    data: XOR<UserSearchUpdateInput, UserSearchUncheckedUpdateInput>
    /**
     * Choose, which UserSearch to update.
     */
    where: UserSearchWhereUniqueInput
  }

  /**
   * UserSearch updateMany
   */
  export type UserSearchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSearches.
     */
    data: XOR<UserSearchUpdateManyMutationInput, UserSearchUncheckedUpdateManyInput>
    /**
     * Filter which UserSearches to update
     */
    where?: UserSearchWhereInput
    /**
     * Limit how many UserSearches to update.
     */
    limit?: number
  }

  /**
   * UserSearch upsert
   */
  export type UserSearchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearch
     */
    select?: UserSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearch
     */
    omit?: UserSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSearch to update in case it exists.
     */
    where: UserSearchWhereUniqueInput
    /**
     * In case the UserSearch found by the `where` argument doesn't exist, create a new UserSearch with this data.
     */
    create: XOR<UserSearchCreateInput, UserSearchUncheckedCreateInput>
    /**
     * In case the UserSearch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSearchUpdateInput, UserSearchUncheckedUpdateInput>
  }

  /**
   * UserSearch delete
   */
  export type UserSearchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearch
     */
    select?: UserSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearch
     */
    omit?: UserSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchInclude<ExtArgs> | null
    /**
     * Filter which UserSearch to delete.
     */
    where: UserSearchWhereUniqueInput
  }

  /**
   * UserSearch deleteMany
   */
  export type UserSearchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSearches to delete
     */
    where?: UserSearchWhereInput
    /**
     * Limit how many UserSearches to delete.
     */
    limit?: number
  }

  /**
   * UserSearch without action
   */
  export type UserSearchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearch
     */
    select?: UserSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearch
     */
    omit?: UserSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchInclude<ExtArgs> | null
  }


  /**
   * Model UserCategory
   */

  export type AggregateUserCategory = {
    _count: UserCategoryCountAggregateOutputType | null
    _avg: UserCategoryAvgAggregateOutputType | null
    _sum: UserCategorySumAggregateOutputType | null
    _min: UserCategoryMinAggregateOutputType | null
    _max: UserCategoryMaxAggregateOutputType | null
  }

  export type UserCategoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    clickCount: number | null
  }

  export type UserCategorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    clickCount: number | null
  }

  export type UserCategoryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    category: string | null
    clickCount: number | null
    lastVisited: Date | null
  }

  export type UserCategoryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    category: string | null
    clickCount: number | null
    lastVisited: Date | null
  }

  export type UserCategoryCountAggregateOutputType = {
    id: number
    userId: number
    category: number
    clickCount: number
    lastVisited: number
    _all: number
  }


  export type UserCategoryAvgAggregateInputType = {
    id?: true
    userId?: true
    clickCount?: true
  }

  export type UserCategorySumAggregateInputType = {
    id?: true
    userId?: true
    clickCount?: true
  }

  export type UserCategoryMinAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    clickCount?: true
    lastVisited?: true
  }

  export type UserCategoryMaxAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    clickCount?: true
    lastVisited?: true
  }

  export type UserCategoryCountAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    clickCount?: true
    lastVisited?: true
    _all?: true
  }

  export type UserCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCategory to aggregate.
     */
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCategories
    **/
    _count?: true | UserCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCategoryMaxAggregateInputType
  }

  export type GetUserCategoryAggregateType<T extends UserCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCategory[P]>
      : GetScalarType<T[P], AggregateUserCategory[P]>
  }




  export type UserCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCategoryWhereInput
    orderBy?: UserCategoryOrderByWithAggregationInput | UserCategoryOrderByWithAggregationInput[]
    by: UserCategoryScalarFieldEnum[] | UserCategoryScalarFieldEnum
    having?: UserCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCategoryCountAggregateInputType | true
    _avg?: UserCategoryAvgAggregateInputType
    _sum?: UserCategorySumAggregateInputType
    _min?: UserCategoryMinAggregateInputType
    _max?: UserCategoryMaxAggregateInputType
  }

  export type UserCategoryGroupByOutputType = {
    id: number
    userId: number
    category: string
    clickCount: number
    lastVisited: Date
    _count: UserCategoryCountAggregateOutputType | null
    _avg: UserCategoryAvgAggregateOutputType | null
    _sum: UserCategorySumAggregateOutputType | null
    _min: UserCategoryMinAggregateOutputType | null
    _max: UserCategoryMaxAggregateOutputType | null
  }

  type GetUserCategoryGroupByPayload<T extends UserCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserCategoryGroupByOutputType[P]>
        }
      >
    >


  export type UserCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    clickCount?: boolean
    lastVisited?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCategory"]>



  export type UserCategorySelectScalar = {
    id?: boolean
    userId?: boolean
    category?: boolean
    clickCount?: boolean
    lastVisited?: boolean
  }

  export type UserCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "category" | "clickCount" | "lastVisited", ExtArgs["result"]["userCategory"]>
  export type UserCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCategory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      category: string
      clickCount: number
      lastVisited: Date
    }, ExtArgs["result"]["userCategory"]>
    composites: {}
  }

  type UserCategoryGetPayload<S extends boolean | null | undefined | UserCategoryDefaultArgs> = $Result.GetResult<Prisma.$UserCategoryPayload, S>

  type UserCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCategoryCountAggregateInputType | true
    }

  export interface UserCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCategory'], meta: { name: 'UserCategory' } }
    /**
     * Find zero or one UserCategory that matches the filter.
     * @param {UserCategoryFindUniqueArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCategoryFindUniqueArgs>(args: SelectSubset<T, UserCategoryFindUniqueArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCategoryFindUniqueOrThrowArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryFindFirstArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCategoryFindFirstArgs>(args?: SelectSubset<T, UserCategoryFindFirstArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryFindFirstOrThrowArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCategories
     * const userCategories = await prisma.userCategory.findMany()
     * 
     * // Get first 10 UserCategories
     * const userCategories = await prisma.userCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCategoryWithIdOnly = await prisma.userCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCategoryFindManyArgs>(args?: SelectSubset<T, UserCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCategory.
     * @param {UserCategoryCreateArgs} args - Arguments to create a UserCategory.
     * @example
     * // Create one UserCategory
     * const UserCategory = await prisma.userCategory.create({
     *   data: {
     *     // ... data to create a UserCategory
     *   }
     * })
     * 
     */
    create<T extends UserCategoryCreateArgs>(args: SelectSubset<T, UserCategoryCreateArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCategories.
     * @param {UserCategoryCreateManyArgs} args - Arguments to create many UserCategories.
     * @example
     * // Create many UserCategories
     * const userCategory = await prisma.userCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCategoryCreateManyArgs>(args?: SelectSubset<T, UserCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCategory.
     * @param {UserCategoryDeleteArgs} args - Arguments to delete one UserCategory.
     * @example
     * // Delete one UserCategory
     * const UserCategory = await prisma.userCategory.delete({
     *   where: {
     *     // ... filter to delete one UserCategory
     *   }
     * })
     * 
     */
    delete<T extends UserCategoryDeleteArgs>(args: SelectSubset<T, UserCategoryDeleteArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCategory.
     * @param {UserCategoryUpdateArgs} args - Arguments to update one UserCategory.
     * @example
     * // Update one UserCategory
     * const userCategory = await prisma.userCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCategoryUpdateArgs>(args: SelectSubset<T, UserCategoryUpdateArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCategories.
     * @param {UserCategoryDeleteManyArgs} args - Arguments to filter UserCategories to delete.
     * @example
     * // Delete a few UserCategories
     * const { count } = await prisma.userCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCategoryDeleteManyArgs>(args?: SelectSubset<T, UserCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCategories
     * const userCategory = await prisma.userCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCategoryUpdateManyArgs>(args: SelectSubset<T, UserCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCategory.
     * @param {UserCategoryUpsertArgs} args - Arguments to update or create a UserCategory.
     * @example
     * // Update or create a UserCategory
     * const userCategory = await prisma.userCategory.upsert({
     *   create: {
     *     // ... data to create a UserCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCategory we want to update
     *   }
     * })
     */
    upsert<T extends UserCategoryUpsertArgs>(args: SelectSubset<T, UserCategoryUpsertArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryCountArgs} args - Arguments to filter UserCategories to count.
     * @example
     * // Count the number of UserCategories
     * const count = await prisma.userCategory.count({
     *   where: {
     *     // ... the filter for the UserCategories we want to count
     *   }
     * })
    **/
    count<T extends UserCategoryCountArgs>(
      args?: Subset<T, UserCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCategoryAggregateArgs>(args: Subset<T, UserCategoryAggregateArgs>): Prisma.PrismaPromise<GetUserCategoryAggregateType<T>>

    /**
     * Group by UserCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryGroupByArgs} args - Group by arguments.
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
      T extends UserCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCategoryGroupByArgs['orderBy'] }
        : { orderBy?: UserCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCategory model
   */
  readonly fields: UserCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCategory model
   */
  interface UserCategoryFieldRefs {
    readonly id: FieldRef<"UserCategory", 'Int'>
    readonly userId: FieldRef<"UserCategory", 'Int'>
    readonly category: FieldRef<"UserCategory", 'String'>
    readonly clickCount: FieldRef<"UserCategory", 'Int'>
    readonly lastVisited: FieldRef<"UserCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCategory findUnique
   */
  export type UserCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategory to fetch.
     */
    where: UserCategoryWhereUniqueInput
  }

  /**
   * UserCategory findUniqueOrThrow
   */
  export type UserCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategory to fetch.
     */
    where: UserCategoryWhereUniqueInput
  }

  /**
   * UserCategory findFirst
   */
  export type UserCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategory to fetch.
     */
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCategories.
     */
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCategories.
     */
    distinct?: UserCategoryScalarFieldEnum | UserCategoryScalarFieldEnum[]
  }

  /**
   * UserCategory findFirstOrThrow
   */
  export type UserCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategory to fetch.
     */
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCategories.
     */
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCategories.
     */
    distinct?: UserCategoryScalarFieldEnum | UserCategoryScalarFieldEnum[]
  }

  /**
   * UserCategory findMany
   */
  export type UserCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategories to fetch.
     */
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCategories.
     */
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    distinct?: UserCategoryScalarFieldEnum | UserCategoryScalarFieldEnum[]
  }

  /**
   * UserCategory create
   */
  export type UserCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCategory.
     */
    data: XOR<UserCategoryCreateInput, UserCategoryUncheckedCreateInput>
  }

  /**
   * UserCategory createMany
   */
  export type UserCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCategories.
     */
    data: UserCategoryCreateManyInput | UserCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCategory update
   */
  export type UserCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCategory.
     */
    data: XOR<UserCategoryUpdateInput, UserCategoryUncheckedUpdateInput>
    /**
     * Choose, which UserCategory to update.
     */
    where: UserCategoryWhereUniqueInput
  }

  /**
   * UserCategory updateMany
   */
  export type UserCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCategories.
     */
    data: XOR<UserCategoryUpdateManyMutationInput, UserCategoryUncheckedUpdateManyInput>
    /**
     * Filter which UserCategories to update
     */
    where?: UserCategoryWhereInput
    /**
     * Limit how many UserCategories to update.
     */
    limit?: number
  }

  /**
   * UserCategory upsert
   */
  export type UserCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCategory to update in case it exists.
     */
    where: UserCategoryWhereUniqueInput
    /**
     * In case the UserCategory found by the `where` argument doesn't exist, create a new UserCategory with this data.
     */
    create: XOR<UserCategoryCreateInput, UserCategoryUncheckedCreateInput>
    /**
     * In case the UserCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCategoryUpdateInput, UserCategoryUncheckedUpdateInput>
  }

  /**
   * UserCategory delete
   */
  export type UserCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter which UserCategory to delete.
     */
    where: UserCategoryWhereUniqueInput
  }

  /**
   * UserCategory deleteMany
   */
  export type UserCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCategories to delete
     */
    where?: UserCategoryWhereInput
    /**
     * Limit how many UserCategories to delete.
     */
    limit?: number
  }

  /**
   * UserCategory without action
   */
  export type UserCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
  }


  /**
   * Model FlaggedReview
   */

  export type AggregateFlaggedReview = {
    _count: FlaggedReviewCountAggregateOutputType | null
    _avg: FlaggedReviewAvgAggregateOutputType | null
    _sum: FlaggedReviewSumAggregateOutputType | null
    _min: FlaggedReviewMinAggregateOutputType | null
    _max: FlaggedReviewMaxAggregateOutputType | null
  }

  export type FlaggedReviewAvgAggregateOutputType = {
    id: number | null
    reviewId: number | null
    flaggedById: number | null
  }

  export type FlaggedReviewSumAggregateOutputType = {
    id: number | null
    reviewId: number | null
    flaggedById: number | null
  }

  export type FlaggedReviewMinAggregateOutputType = {
    id: number | null
    reviewId: number | null
    flaggedById: number | null
    flagReason: $Enums.FlagReason | null
    createdAt: Date | null
    moderationStatus: $Enums.ModerationStatus | null
  }

  export type FlaggedReviewMaxAggregateOutputType = {
    id: number | null
    reviewId: number | null
    flaggedById: number | null
    flagReason: $Enums.FlagReason | null
    createdAt: Date | null
    moderationStatus: $Enums.ModerationStatus | null
  }

  export type FlaggedReviewCountAggregateOutputType = {
    id: number
    reviewId: number
    flaggedById: number
    flagReason: number
    createdAt: number
    moderationStatus: number
    _all: number
  }


  export type FlaggedReviewAvgAggregateInputType = {
    id?: true
    reviewId?: true
    flaggedById?: true
  }

  export type FlaggedReviewSumAggregateInputType = {
    id?: true
    reviewId?: true
    flaggedById?: true
  }

  export type FlaggedReviewMinAggregateInputType = {
    id?: true
    reviewId?: true
    flaggedById?: true
    flagReason?: true
    createdAt?: true
    moderationStatus?: true
  }

  export type FlaggedReviewMaxAggregateInputType = {
    id?: true
    reviewId?: true
    flaggedById?: true
    flagReason?: true
    createdAt?: true
    moderationStatus?: true
  }

  export type FlaggedReviewCountAggregateInputType = {
    id?: true
    reviewId?: true
    flaggedById?: true
    flagReason?: true
    createdAt?: true
    moderationStatus?: true
    _all?: true
  }

  export type FlaggedReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlaggedReview to aggregate.
     */
    where?: FlaggedReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlaggedReviews to fetch.
     */
    orderBy?: FlaggedReviewOrderByWithRelationInput | FlaggedReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlaggedReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlaggedReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlaggedReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlaggedReviews
    **/
    _count?: true | FlaggedReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlaggedReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlaggedReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlaggedReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlaggedReviewMaxAggregateInputType
  }

  export type GetFlaggedReviewAggregateType<T extends FlaggedReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateFlaggedReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlaggedReview[P]>
      : GetScalarType<T[P], AggregateFlaggedReview[P]>
  }




  export type FlaggedReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlaggedReviewWhereInput
    orderBy?: FlaggedReviewOrderByWithAggregationInput | FlaggedReviewOrderByWithAggregationInput[]
    by: FlaggedReviewScalarFieldEnum[] | FlaggedReviewScalarFieldEnum
    having?: FlaggedReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlaggedReviewCountAggregateInputType | true
    _avg?: FlaggedReviewAvgAggregateInputType
    _sum?: FlaggedReviewSumAggregateInputType
    _min?: FlaggedReviewMinAggregateInputType
    _max?: FlaggedReviewMaxAggregateInputType
  }

  export type FlaggedReviewGroupByOutputType = {
    id: number
    reviewId: number
    flaggedById: number
    flagReason: $Enums.FlagReason
    createdAt: Date
    moderationStatus: $Enums.ModerationStatus
    _count: FlaggedReviewCountAggregateOutputType | null
    _avg: FlaggedReviewAvgAggregateOutputType | null
    _sum: FlaggedReviewSumAggregateOutputType | null
    _min: FlaggedReviewMinAggregateOutputType | null
    _max: FlaggedReviewMaxAggregateOutputType | null
  }

  type GetFlaggedReviewGroupByPayload<T extends FlaggedReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlaggedReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlaggedReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlaggedReviewGroupByOutputType[P]>
            : GetScalarType<T[P], FlaggedReviewGroupByOutputType[P]>
        }
      >
    >


  export type FlaggedReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    flaggedById?: boolean
    flagReason?: boolean
    createdAt?: boolean
    moderationStatus?: boolean
    review?: boolean | UserReviewDefaultArgs<ExtArgs>
    flaggedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flaggedReview"]>



  export type FlaggedReviewSelectScalar = {
    id?: boolean
    reviewId?: boolean
    flaggedById?: boolean
    flagReason?: boolean
    createdAt?: boolean
    moderationStatus?: boolean
  }

  export type FlaggedReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewId" | "flaggedById" | "flagReason" | "createdAt" | "moderationStatus", ExtArgs["result"]["flaggedReview"]>
  export type FlaggedReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | UserReviewDefaultArgs<ExtArgs>
    flaggedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FlaggedReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlaggedReview"
    objects: {
      review: Prisma.$UserReviewPayload<ExtArgs>
      flaggedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reviewId: number
      flaggedById: number
      flagReason: $Enums.FlagReason
      createdAt: Date
      moderationStatus: $Enums.ModerationStatus
    }, ExtArgs["result"]["flaggedReview"]>
    composites: {}
  }

  type FlaggedReviewGetPayload<S extends boolean | null | undefined | FlaggedReviewDefaultArgs> = $Result.GetResult<Prisma.$FlaggedReviewPayload, S>

  type FlaggedReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlaggedReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlaggedReviewCountAggregateInputType | true
    }

  export interface FlaggedReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlaggedReview'], meta: { name: 'FlaggedReview' } }
    /**
     * Find zero or one FlaggedReview that matches the filter.
     * @param {FlaggedReviewFindUniqueArgs} args - Arguments to find a FlaggedReview
     * @example
     * // Get one FlaggedReview
     * const flaggedReview = await prisma.flaggedReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlaggedReviewFindUniqueArgs>(args: SelectSubset<T, FlaggedReviewFindUniqueArgs<ExtArgs>>): Prisma__FlaggedReviewClient<$Result.GetResult<Prisma.$FlaggedReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlaggedReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlaggedReviewFindUniqueOrThrowArgs} args - Arguments to find a FlaggedReview
     * @example
     * // Get one FlaggedReview
     * const flaggedReview = await prisma.flaggedReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlaggedReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, FlaggedReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlaggedReviewClient<$Result.GetResult<Prisma.$FlaggedReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlaggedReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedReviewFindFirstArgs} args - Arguments to find a FlaggedReview
     * @example
     * // Get one FlaggedReview
     * const flaggedReview = await prisma.flaggedReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlaggedReviewFindFirstArgs>(args?: SelectSubset<T, FlaggedReviewFindFirstArgs<ExtArgs>>): Prisma__FlaggedReviewClient<$Result.GetResult<Prisma.$FlaggedReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlaggedReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedReviewFindFirstOrThrowArgs} args - Arguments to find a FlaggedReview
     * @example
     * // Get one FlaggedReview
     * const flaggedReview = await prisma.flaggedReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlaggedReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, FlaggedReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlaggedReviewClient<$Result.GetResult<Prisma.$FlaggedReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlaggedReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlaggedReviews
     * const flaggedReviews = await prisma.flaggedReview.findMany()
     * 
     * // Get first 10 FlaggedReviews
     * const flaggedReviews = await prisma.flaggedReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flaggedReviewWithIdOnly = await prisma.flaggedReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlaggedReviewFindManyArgs>(args?: SelectSubset<T, FlaggedReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlaggedReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlaggedReview.
     * @param {FlaggedReviewCreateArgs} args - Arguments to create a FlaggedReview.
     * @example
     * // Create one FlaggedReview
     * const FlaggedReview = await prisma.flaggedReview.create({
     *   data: {
     *     // ... data to create a FlaggedReview
     *   }
     * })
     * 
     */
    create<T extends FlaggedReviewCreateArgs>(args: SelectSubset<T, FlaggedReviewCreateArgs<ExtArgs>>): Prisma__FlaggedReviewClient<$Result.GetResult<Prisma.$FlaggedReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlaggedReviews.
     * @param {FlaggedReviewCreateManyArgs} args - Arguments to create many FlaggedReviews.
     * @example
     * // Create many FlaggedReviews
     * const flaggedReview = await prisma.flaggedReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlaggedReviewCreateManyArgs>(args?: SelectSubset<T, FlaggedReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlaggedReview.
     * @param {FlaggedReviewDeleteArgs} args - Arguments to delete one FlaggedReview.
     * @example
     * // Delete one FlaggedReview
     * const FlaggedReview = await prisma.flaggedReview.delete({
     *   where: {
     *     // ... filter to delete one FlaggedReview
     *   }
     * })
     * 
     */
    delete<T extends FlaggedReviewDeleteArgs>(args: SelectSubset<T, FlaggedReviewDeleteArgs<ExtArgs>>): Prisma__FlaggedReviewClient<$Result.GetResult<Prisma.$FlaggedReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlaggedReview.
     * @param {FlaggedReviewUpdateArgs} args - Arguments to update one FlaggedReview.
     * @example
     * // Update one FlaggedReview
     * const flaggedReview = await prisma.flaggedReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlaggedReviewUpdateArgs>(args: SelectSubset<T, FlaggedReviewUpdateArgs<ExtArgs>>): Prisma__FlaggedReviewClient<$Result.GetResult<Prisma.$FlaggedReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlaggedReviews.
     * @param {FlaggedReviewDeleteManyArgs} args - Arguments to filter FlaggedReviews to delete.
     * @example
     * // Delete a few FlaggedReviews
     * const { count } = await prisma.flaggedReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlaggedReviewDeleteManyArgs>(args?: SelectSubset<T, FlaggedReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlaggedReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlaggedReviews
     * const flaggedReview = await prisma.flaggedReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlaggedReviewUpdateManyArgs>(args: SelectSubset<T, FlaggedReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlaggedReview.
     * @param {FlaggedReviewUpsertArgs} args - Arguments to update or create a FlaggedReview.
     * @example
     * // Update or create a FlaggedReview
     * const flaggedReview = await prisma.flaggedReview.upsert({
     *   create: {
     *     // ... data to create a FlaggedReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlaggedReview we want to update
     *   }
     * })
     */
    upsert<T extends FlaggedReviewUpsertArgs>(args: SelectSubset<T, FlaggedReviewUpsertArgs<ExtArgs>>): Prisma__FlaggedReviewClient<$Result.GetResult<Prisma.$FlaggedReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlaggedReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedReviewCountArgs} args - Arguments to filter FlaggedReviews to count.
     * @example
     * // Count the number of FlaggedReviews
     * const count = await prisma.flaggedReview.count({
     *   where: {
     *     // ... the filter for the FlaggedReviews we want to count
     *   }
     * })
    **/
    count<T extends FlaggedReviewCountArgs>(
      args?: Subset<T, FlaggedReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlaggedReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlaggedReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlaggedReviewAggregateArgs>(args: Subset<T, FlaggedReviewAggregateArgs>): Prisma.PrismaPromise<GetFlaggedReviewAggregateType<T>>

    /**
     * Group by FlaggedReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedReviewGroupByArgs} args - Group by arguments.
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
      T extends FlaggedReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlaggedReviewGroupByArgs['orderBy'] }
        : { orderBy?: FlaggedReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlaggedReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlaggedReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlaggedReview model
   */
  readonly fields: FlaggedReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlaggedReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlaggedReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends UserReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserReviewDefaultArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flaggedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FlaggedReview model
   */
  interface FlaggedReviewFieldRefs {
    readonly id: FieldRef<"FlaggedReview", 'Int'>
    readonly reviewId: FieldRef<"FlaggedReview", 'Int'>
    readonly flaggedById: FieldRef<"FlaggedReview", 'Int'>
    readonly flagReason: FieldRef<"FlaggedReview", 'FlagReason'>
    readonly createdAt: FieldRef<"FlaggedReview", 'DateTime'>
    readonly moderationStatus: FieldRef<"FlaggedReview", 'ModerationStatus'>
  }
    

  // Custom InputTypes
  /**
   * FlaggedReview findUnique
   */
  export type FlaggedReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedReview
     */
    select?: FlaggedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedReview
     */
    omit?: FlaggedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedReviewInclude<ExtArgs> | null
    /**
     * Filter, which FlaggedReview to fetch.
     */
    where: FlaggedReviewWhereUniqueInput
  }

  /**
   * FlaggedReview findUniqueOrThrow
   */
  export type FlaggedReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedReview
     */
    select?: FlaggedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedReview
     */
    omit?: FlaggedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedReviewInclude<ExtArgs> | null
    /**
     * Filter, which FlaggedReview to fetch.
     */
    where: FlaggedReviewWhereUniqueInput
  }

  /**
   * FlaggedReview findFirst
   */
  export type FlaggedReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedReview
     */
    select?: FlaggedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedReview
     */
    omit?: FlaggedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedReviewInclude<ExtArgs> | null
    /**
     * Filter, which FlaggedReview to fetch.
     */
    where?: FlaggedReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlaggedReviews to fetch.
     */
    orderBy?: FlaggedReviewOrderByWithRelationInput | FlaggedReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlaggedReviews.
     */
    cursor?: FlaggedReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlaggedReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlaggedReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlaggedReviews.
     */
    distinct?: FlaggedReviewScalarFieldEnum | FlaggedReviewScalarFieldEnum[]
  }

  /**
   * FlaggedReview findFirstOrThrow
   */
  export type FlaggedReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedReview
     */
    select?: FlaggedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedReview
     */
    omit?: FlaggedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedReviewInclude<ExtArgs> | null
    /**
     * Filter, which FlaggedReview to fetch.
     */
    where?: FlaggedReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlaggedReviews to fetch.
     */
    orderBy?: FlaggedReviewOrderByWithRelationInput | FlaggedReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlaggedReviews.
     */
    cursor?: FlaggedReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlaggedReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlaggedReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlaggedReviews.
     */
    distinct?: FlaggedReviewScalarFieldEnum | FlaggedReviewScalarFieldEnum[]
  }

  /**
   * FlaggedReview findMany
   */
  export type FlaggedReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedReview
     */
    select?: FlaggedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedReview
     */
    omit?: FlaggedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedReviewInclude<ExtArgs> | null
    /**
     * Filter, which FlaggedReviews to fetch.
     */
    where?: FlaggedReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlaggedReviews to fetch.
     */
    orderBy?: FlaggedReviewOrderByWithRelationInput | FlaggedReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlaggedReviews.
     */
    cursor?: FlaggedReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlaggedReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlaggedReviews.
     */
    skip?: number
    distinct?: FlaggedReviewScalarFieldEnum | FlaggedReviewScalarFieldEnum[]
  }

  /**
   * FlaggedReview create
   */
  export type FlaggedReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedReview
     */
    select?: FlaggedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedReview
     */
    omit?: FlaggedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a FlaggedReview.
     */
    data: XOR<FlaggedReviewCreateInput, FlaggedReviewUncheckedCreateInput>
  }

  /**
   * FlaggedReview createMany
   */
  export type FlaggedReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlaggedReviews.
     */
    data: FlaggedReviewCreateManyInput | FlaggedReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlaggedReview update
   */
  export type FlaggedReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedReview
     */
    select?: FlaggedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedReview
     */
    omit?: FlaggedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a FlaggedReview.
     */
    data: XOR<FlaggedReviewUpdateInput, FlaggedReviewUncheckedUpdateInput>
    /**
     * Choose, which FlaggedReview to update.
     */
    where: FlaggedReviewWhereUniqueInput
  }

  /**
   * FlaggedReview updateMany
   */
  export type FlaggedReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlaggedReviews.
     */
    data: XOR<FlaggedReviewUpdateManyMutationInput, FlaggedReviewUncheckedUpdateManyInput>
    /**
     * Filter which FlaggedReviews to update
     */
    where?: FlaggedReviewWhereInput
    /**
     * Limit how many FlaggedReviews to update.
     */
    limit?: number
  }

  /**
   * FlaggedReview upsert
   */
  export type FlaggedReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedReview
     */
    select?: FlaggedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedReview
     */
    omit?: FlaggedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the FlaggedReview to update in case it exists.
     */
    where: FlaggedReviewWhereUniqueInput
    /**
     * In case the FlaggedReview found by the `where` argument doesn't exist, create a new FlaggedReview with this data.
     */
    create: XOR<FlaggedReviewCreateInput, FlaggedReviewUncheckedCreateInput>
    /**
     * In case the FlaggedReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlaggedReviewUpdateInput, FlaggedReviewUncheckedUpdateInput>
  }

  /**
   * FlaggedReview delete
   */
  export type FlaggedReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedReview
     */
    select?: FlaggedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedReview
     */
    omit?: FlaggedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedReviewInclude<ExtArgs> | null
    /**
     * Filter which FlaggedReview to delete.
     */
    where: FlaggedReviewWhereUniqueInput
  }

  /**
   * FlaggedReview deleteMany
   */
  export type FlaggedReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlaggedReviews to delete
     */
    where?: FlaggedReviewWhereInput
    /**
     * Limit how many FlaggedReviews to delete.
     */
    limit?: number
  }

  /**
   * FlaggedReview without action
   */
  export type FlaggedReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedReview
     */
    select?: FlaggedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedReview
     */
    omit?: FlaggedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedReviewInclude<ExtArgs> | null
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


  export const Items6ScalarFieldEnum: {
    id: 'id',
    price: 'price',
    description: 'description',
    location: 'location',
    link: 'link',
    new_price_column: 'new_price_column',
    deal: 'deal'
  };

  export type Items6ScalarFieldEnum = (typeof Items6ScalarFieldEnum)[keyof typeof Items6ScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    imageUrl: 'imageUrl',
    provider: 'provider',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    price: 'price',
    description: 'description',
    location: 'location',
    link: 'link',
    new_price_column: 'new_price_column',
    deal: 'deal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const UserHeartedProductScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    createdAt: 'createdAt'
  };

  export type UserHeartedProductScalarFieldEnum = (typeof UserHeartedProductScalarFieldEnum)[keyof typeof UserHeartedProductScalarFieldEnum]


  export const UserReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type UserReviewScalarFieldEnum = (typeof UserReviewScalarFieldEnum)[keyof typeof UserReviewScalarFieldEnum]


  export const UserRecentlyViewedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    viewedAt: 'viewedAt'
  };

  export type UserRecentlyViewedScalarFieldEnum = (typeof UserRecentlyViewedScalarFieldEnum)[keyof typeof UserRecentlyViewedScalarFieldEnum]


  export const UserSearchScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    query: 'query',
    searchedAt: 'searchedAt'
  };

  export type UserSearchScalarFieldEnum = (typeof UserSearchScalarFieldEnum)[keyof typeof UserSearchScalarFieldEnum]


  export const UserCategoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    category: 'category',
    clickCount: 'clickCount',
    lastVisited: 'lastVisited'
  };

  export type UserCategoryScalarFieldEnum = (typeof UserCategoryScalarFieldEnum)[keyof typeof UserCategoryScalarFieldEnum]


  export const FlaggedReviewScalarFieldEnum: {
    id: 'id',
    reviewId: 'reviewId',
    flaggedById: 'flaggedById',
    flagReason: 'flagReason',
    createdAt: 'createdAt',
    moderationStatus: 'moderationStatus'
  };

  export type FlaggedReviewScalarFieldEnum = (typeof FlaggedReviewScalarFieldEnum)[keyof typeof FlaggedReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const items6OrderByRelevanceFieldEnum: {
    description: 'description',
    location: 'location',
    link: 'link',
    deal: 'deal'
  };

  export type items6OrderByRelevanceFieldEnum = (typeof items6OrderByRelevanceFieldEnum)[keyof typeof items6OrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    imageUrl: 'imageUrl'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    description: 'description',
    location: 'location',
    link: 'link',
    deal: 'deal'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const UserReviewOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type UserReviewOrderByRelevanceFieldEnum = (typeof UserReviewOrderByRelevanceFieldEnum)[keyof typeof UserReviewOrderByRelevanceFieldEnum]


  export const UserSearchOrderByRelevanceFieldEnum: {
    query: 'query'
  };

  export type UserSearchOrderByRelevanceFieldEnum = (typeof UserSearchOrderByRelevanceFieldEnum)[keyof typeof UserSearchOrderByRelevanceFieldEnum]


  export const UserCategoryOrderByRelevanceFieldEnum: {
    category: 'category'
  };

  export type UserCategoryOrderByRelevanceFieldEnum = (typeof UserCategoryOrderByRelevanceFieldEnum)[keyof typeof UserCategoryOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'FlagReason'
   */
  export type EnumFlagReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlagReason'>
    


  /**
   * Reference to a field of type 'ModerationStatus'
   */
  export type EnumModerationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModerationStatus'>
    
  /**
   * Deep Input Types
   */


  export type items6WhereInput = {
    AND?: items6WhereInput | items6WhereInput[]
    OR?: items6WhereInput[]
    NOT?: items6WhereInput | items6WhereInput[]
    id?: IntFilter<"items6"> | number
    price?: DecimalNullableFilter<"items6"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"items6"> | string | null
    location?: StringNullableFilter<"items6"> | string | null
    link?: StringNullableFilter<"items6"> | string | null
    new_price_column?: DecimalNullableFilter<"items6"> | Decimal | DecimalJsLike | number | string | null
    deal?: StringNullableFilter<"items6"> | string | null
  }

  export type items6OrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    new_price_column?: SortOrderInput | SortOrder
    deal?: SortOrderInput | SortOrder
    _relevance?: items6OrderByRelevanceInput
  }

  export type items6WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: items6WhereInput | items6WhereInput[]
    OR?: items6WhereInput[]
    NOT?: items6WhereInput | items6WhereInput[]
    price?: DecimalNullableFilter<"items6"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"items6"> | string | null
    location?: StringNullableFilter<"items6"> | string | null
    link?: StringNullableFilter<"items6"> | string | null
    new_price_column?: DecimalNullableFilter<"items6"> | Decimal | DecimalJsLike | number | string | null
    deal?: StringNullableFilter<"items6"> | string | null
  }, "id">

  export type items6OrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    new_price_column?: SortOrderInput | SortOrder
    deal?: SortOrderInput | SortOrder
    _count?: items6CountOrderByAggregateInput
    _avg?: items6AvgOrderByAggregateInput
    _max?: items6MaxOrderByAggregateInput
    _min?: items6MinOrderByAggregateInput
    _sum?: items6SumOrderByAggregateInput
  }

  export type items6ScalarWhereWithAggregatesInput = {
    AND?: items6ScalarWhereWithAggregatesInput | items6ScalarWhereWithAggregatesInput[]
    OR?: items6ScalarWhereWithAggregatesInput[]
    NOT?: items6ScalarWhereWithAggregatesInput | items6ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"items6"> | number
    price?: DecimalNullableWithAggregatesFilter<"items6"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableWithAggregatesFilter<"items6"> | string | null
    location?: StringNullableWithAggregatesFilter<"items6"> | string | null
    link?: StringNullableWithAggregatesFilter<"items6"> | string | null
    new_price_column?: DecimalNullableWithAggregatesFilter<"items6"> | Decimal | DecimalJsLike | number | string | null
    deal?: StringNullableWithAggregatesFilter<"items6"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userId?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    heartedProducts?: UserHeartedProductListRelationFilter
    reviews?: UserReviewListRelationFilter
    recentlyViewed?: UserRecentlyViewedListRelationFilter
    searches?: UserSearchListRelationFilter
    categories?: UserCategoryListRelationFilter
    flaggedReviews?: FlaggedReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    heartedProducts?: UserHeartedProductOrderByRelationAggregateInput
    reviews?: UserReviewOrderByRelationAggregateInput
    recentlyViewed?: UserRecentlyViewedOrderByRelationAggregateInput
    searches?: UserSearchOrderByRelationAggregateInput
    categories?: UserCategoryOrderByRelationAggregateInput
    flaggedReviews?: FlaggedReviewOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    heartedProducts?: UserHeartedProductListRelationFilter
    reviews?: UserReviewListRelationFilter
    recentlyViewed?: UserRecentlyViewedListRelationFilter
    searches?: UserSearchListRelationFilter
    categories?: UserCategoryListRelationFilter
    flaggedReviews?: FlaggedReviewListRelationFilter
  }, "id" | "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    userId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: EnumProviderWithAggregatesFilter<"User"> | $Enums.Provider
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    description?: StringFilter<"Product"> | string
    location?: StringFilter<"Product"> | string
    link?: StringFilter<"Product"> | string
    new_price_column?: FloatFilter<"Product"> | number
    deal?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    reviews?: UserReviewListRelationFilter
    viewedBy?: UserRecentlyViewedListRelationFilter
    heartedBy?: UserHeartedProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    description?: SortOrder
    location?: SortOrder
    link?: SortOrder
    new_price_column?: SortOrder
    deal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviews?: UserReviewOrderByRelationAggregateInput
    viewedBy?: UserRecentlyViewedOrderByRelationAggregateInput
    heartedBy?: UserHeartedProductOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    price?: FloatFilter<"Product"> | number
    description?: StringFilter<"Product"> | string
    location?: StringFilter<"Product"> | string
    link?: StringFilter<"Product"> | string
    new_price_column?: FloatFilter<"Product"> | number
    deal?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    reviews?: UserReviewListRelationFilter
    viewedBy?: UserRecentlyViewedListRelationFilter
    heartedBy?: UserHeartedProductListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    description?: SortOrder
    location?: SortOrder
    link?: SortOrder
    new_price_column?: SortOrder
    deal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    price?: FloatWithAggregatesFilter<"Product"> | number
    description?: StringWithAggregatesFilter<"Product"> | string
    location?: StringWithAggregatesFilter<"Product"> | string
    link?: StringWithAggregatesFilter<"Product"> | string
    new_price_column?: FloatWithAggregatesFilter<"Product"> | number
    deal?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type UserHeartedProductWhereInput = {
    AND?: UserHeartedProductWhereInput | UserHeartedProductWhereInput[]
    OR?: UserHeartedProductWhereInput[]
    NOT?: UserHeartedProductWhereInput | UserHeartedProductWhereInput[]
    id?: IntFilter<"UserHeartedProduct"> | number
    userId?: IntFilter<"UserHeartedProduct"> | number
    productId?: IntFilter<"UserHeartedProduct"> | number
    createdAt?: DateTimeFilter<"UserHeartedProduct"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type UserHeartedProductOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type UserHeartedProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_productId?: UserHeartedProductUserIdProductIdCompoundUniqueInput
    AND?: UserHeartedProductWhereInput | UserHeartedProductWhereInput[]
    OR?: UserHeartedProductWhereInput[]
    NOT?: UserHeartedProductWhereInput | UserHeartedProductWhereInput[]
    userId?: IntFilter<"UserHeartedProduct"> | number
    productId?: IntFilter<"UserHeartedProduct"> | number
    createdAt?: DateTimeFilter<"UserHeartedProduct"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "userId_productId">

  export type UserHeartedProductOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    _count?: UserHeartedProductCountOrderByAggregateInput
    _avg?: UserHeartedProductAvgOrderByAggregateInput
    _max?: UserHeartedProductMaxOrderByAggregateInput
    _min?: UserHeartedProductMinOrderByAggregateInput
    _sum?: UserHeartedProductSumOrderByAggregateInput
  }

  export type UserHeartedProductScalarWhereWithAggregatesInput = {
    AND?: UserHeartedProductScalarWhereWithAggregatesInput | UserHeartedProductScalarWhereWithAggregatesInput[]
    OR?: UserHeartedProductScalarWhereWithAggregatesInput[]
    NOT?: UserHeartedProductScalarWhereWithAggregatesInput | UserHeartedProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserHeartedProduct"> | number
    userId?: IntWithAggregatesFilter<"UserHeartedProduct"> | number
    productId?: IntWithAggregatesFilter<"UserHeartedProduct"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserHeartedProduct"> | Date | string
  }

  export type UserReviewWhereInput = {
    AND?: UserReviewWhereInput | UserReviewWhereInput[]
    OR?: UserReviewWhereInput[]
    NOT?: UserReviewWhereInput | UserReviewWhereInput[]
    id?: IntFilter<"UserReview"> | number
    userId?: IntFilter<"UserReview"> | number
    productId?: IntFilter<"UserReview"> | number
    rating?: IntFilter<"UserReview"> | number
    comment?: StringNullableFilter<"UserReview"> | string | null
    createdAt?: DateTimeFilter<"UserReview"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    flags?: FlaggedReviewListRelationFilter
  }

  export type UserReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    flags?: FlaggedReviewOrderByRelationAggregateInput
    _relevance?: UserReviewOrderByRelevanceInput
  }

  export type UserReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserReviewWhereInput | UserReviewWhereInput[]
    OR?: UserReviewWhereInput[]
    NOT?: UserReviewWhereInput | UserReviewWhereInput[]
    userId?: IntFilter<"UserReview"> | number
    productId?: IntFilter<"UserReview"> | number
    rating?: IntFilter<"UserReview"> | number
    comment?: StringNullableFilter<"UserReview"> | string | null
    createdAt?: DateTimeFilter<"UserReview"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    flags?: FlaggedReviewListRelationFilter
  }, "id">

  export type UserReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserReviewCountOrderByAggregateInput
    _avg?: UserReviewAvgOrderByAggregateInput
    _max?: UserReviewMaxOrderByAggregateInput
    _min?: UserReviewMinOrderByAggregateInput
    _sum?: UserReviewSumOrderByAggregateInput
  }

  export type UserReviewScalarWhereWithAggregatesInput = {
    AND?: UserReviewScalarWhereWithAggregatesInput | UserReviewScalarWhereWithAggregatesInput[]
    OR?: UserReviewScalarWhereWithAggregatesInput[]
    NOT?: UserReviewScalarWhereWithAggregatesInput | UserReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserReview"> | number
    userId?: IntWithAggregatesFilter<"UserReview"> | number
    productId?: IntWithAggregatesFilter<"UserReview"> | number
    rating?: IntWithAggregatesFilter<"UserReview"> | number
    comment?: StringNullableWithAggregatesFilter<"UserReview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserReview"> | Date | string
  }

  export type UserRecentlyViewedWhereInput = {
    AND?: UserRecentlyViewedWhereInput | UserRecentlyViewedWhereInput[]
    OR?: UserRecentlyViewedWhereInput[]
    NOT?: UserRecentlyViewedWhereInput | UserRecentlyViewedWhereInput[]
    id?: IntFilter<"UserRecentlyViewed"> | number
    userId?: IntFilter<"UserRecentlyViewed"> | number
    productId?: IntFilter<"UserRecentlyViewed"> | number
    viewedAt?: DateTimeFilter<"UserRecentlyViewed"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type UserRecentlyViewedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    viewedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type UserRecentlyViewedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_productId?: UserRecentlyViewedUserIdProductIdCompoundUniqueInput
    AND?: UserRecentlyViewedWhereInput | UserRecentlyViewedWhereInput[]
    OR?: UserRecentlyViewedWhereInput[]
    NOT?: UserRecentlyViewedWhereInput | UserRecentlyViewedWhereInput[]
    userId?: IntFilter<"UserRecentlyViewed"> | number
    productId?: IntFilter<"UserRecentlyViewed"> | number
    viewedAt?: DateTimeFilter<"UserRecentlyViewed"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "userId_productId">

  export type UserRecentlyViewedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    viewedAt?: SortOrder
    _count?: UserRecentlyViewedCountOrderByAggregateInput
    _avg?: UserRecentlyViewedAvgOrderByAggregateInput
    _max?: UserRecentlyViewedMaxOrderByAggregateInput
    _min?: UserRecentlyViewedMinOrderByAggregateInput
    _sum?: UserRecentlyViewedSumOrderByAggregateInput
  }

  export type UserRecentlyViewedScalarWhereWithAggregatesInput = {
    AND?: UserRecentlyViewedScalarWhereWithAggregatesInput | UserRecentlyViewedScalarWhereWithAggregatesInput[]
    OR?: UserRecentlyViewedScalarWhereWithAggregatesInput[]
    NOT?: UserRecentlyViewedScalarWhereWithAggregatesInput | UserRecentlyViewedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserRecentlyViewed"> | number
    userId?: IntWithAggregatesFilter<"UserRecentlyViewed"> | number
    productId?: IntWithAggregatesFilter<"UserRecentlyViewed"> | number
    viewedAt?: DateTimeWithAggregatesFilter<"UserRecentlyViewed"> | Date | string
  }

  export type UserSearchWhereInput = {
    AND?: UserSearchWhereInput | UserSearchWhereInput[]
    OR?: UserSearchWhereInput[]
    NOT?: UserSearchWhereInput | UserSearchWhereInput[]
    id?: IntFilter<"UserSearch"> | number
    userId?: IntFilter<"UserSearch"> | number
    query?: StringFilter<"UserSearch"> | string
    searchedAt?: DateTimeFilter<"UserSearch"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSearchOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    searchedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserSearchOrderByRelevanceInput
  }

  export type UserSearchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserSearchWhereInput | UserSearchWhereInput[]
    OR?: UserSearchWhereInput[]
    NOT?: UserSearchWhereInput | UserSearchWhereInput[]
    userId?: IntFilter<"UserSearch"> | number
    query?: StringFilter<"UserSearch"> | string
    searchedAt?: DateTimeFilter<"UserSearch"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserSearchOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    searchedAt?: SortOrder
    _count?: UserSearchCountOrderByAggregateInput
    _avg?: UserSearchAvgOrderByAggregateInput
    _max?: UserSearchMaxOrderByAggregateInput
    _min?: UserSearchMinOrderByAggregateInput
    _sum?: UserSearchSumOrderByAggregateInput
  }

  export type UserSearchScalarWhereWithAggregatesInput = {
    AND?: UserSearchScalarWhereWithAggregatesInput | UserSearchScalarWhereWithAggregatesInput[]
    OR?: UserSearchScalarWhereWithAggregatesInput[]
    NOT?: UserSearchScalarWhereWithAggregatesInput | UserSearchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSearch"> | number
    userId?: IntWithAggregatesFilter<"UserSearch"> | number
    query?: StringWithAggregatesFilter<"UserSearch"> | string
    searchedAt?: DateTimeWithAggregatesFilter<"UserSearch"> | Date | string
  }

  export type UserCategoryWhereInput = {
    AND?: UserCategoryWhereInput | UserCategoryWhereInput[]
    OR?: UserCategoryWhereInput[]
    NOT?: UserCategoryWhereInput | UserCategoryWhereInput[]
    id?: IntFilter<"UserCategory"> | number
    userId?: IntFilter<"UserCategory"> | number
    category?: StringFilter<"UserCategory"> | string
    clickCount?: IntFilter<"UserCategory"> | number
    lastVisited?: DateTimeFilter<"UserCategory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserCategoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    clickCount?: SortOrder
    lastVisited?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserCategoryOrderByRelevanceInput
  }

  export type UserCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_category?: UserCategoryUserIdCategoryCompoundUniqueInput
    AND?: UserCategoryWhereInput | UserCategoryWhereInput[]
    OR?: UserCategoryWhereInput[]
    NOT?: UserCategoryWhereInput | UserCategoryWhereInput[]
    userId?: IntFilter<"UserCategory"> | number
    category?: StringFilter<"UserCategory"> | string
    clickCount?: IntFilter<"UserCategory"> | number
    lastVisited?: DateTimeFilter<"UserCategory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_category">

  export type UserCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    clickCount?: SortOrder
    lastVisited?: SortOrder
    _count?: UserCategoryCountOrderByAggregateInput
    _avg?: UserCategoryAvgOrderByAggregateInput
    _max?: UserCategoryMaxOrderByAggregateInput
    _min?: UserCategoryMinOrderByAggregateInput
    _sum?: UserCategorySumOrderByAggregateInput
  }

  export type UserCategoryScalarWhereWithAggregatesInput = {
    AND?: UserCategoryScalarWhereWithAggregatesInput | UserCategoryScalarWhereWithAggregatesInput[]
    OR?: UserCategoryScalarWhereWithAggregatesInput[]
    NOT?: UserCategoryScalarWhereWithAggregatesInput | UserCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserCategory"> | number
    userId?: IntWithAggregatesFilter<"UserCategory"> | number
    category?: StringWithAggregatesFilter<"UserCategory"> | string
    clickCount?: IntWithAggregatesFilter<"UserCategory"> | number
    lastVisited?: DateTimeWithAggregatesFilter<"UserCategory"> | Date | string
  }

  export type FlaggedReviewWhereInput = {
    AND?: FlaggedReviewWhereInput | FlaggedReviewWhereInput[]
    OR?: FlaggedReviewWhereInput[]
    NOT?: FlaggedReviewWhereInput | FlaggedReviewWhereInput[]
    id?: IntFilter<"FlaggedReview"> | number
    reviewId?: IntFilter<"FlaggedReview"> | number
    flaggedById?: IntFilter<"FlaggedReview"> | number
    flagReason?: EnumFlagReasonFilter<"FlaggedReview"> | $Enums.FlagReason
    createdAt?: DateTimeFilter<"FlaggedReview"> | Date | string
    moderationStatus?: EnumModerationStatusFilter<"FlaggedReview"> | $Enums.ModerationStatus
    review?: XOR<UserReviewScalarRelationFilter, UserReviewWhereInput>
    flaggedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FlaggedReviewOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    flaggedById?: SortOrder
    flagReason?: SortOrder
    createdAt?: SortOrder
    moderationStatus?: SortOrder
    review?: UserReviewOrderByWithRelationInput
    flaggedBy?: UserOrderByWithRelationInput
  }

  export type FlaggedReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlaggedReviewWhereInput | FlaggedReviewWhereInput[]
    OR?: FlaggedReviewWhereInput[]
    NOT?: FlaggedReviewWhereInput | FlaggedReviewWhereInput[]
    reviewId?: IntFilter<"FlaggedReview"> | number
    flaggedById?: IntFilter<"FlaggedReview"> | number
    flagReason?: EnumFlagReasonFilter<"FlaggedReview"> | $Enums.FlagReason
    createdAt?: DateTimeFilter<"FlaggedReview"> | Date | string
    moderationStatus?: EnumModerationStatusFilter<"FlaggedReview"> | $Enums.ModerationStatus
    review?: XOR<UserReviewScalarRelationFilter, UserReviewWhereInput>
    flaggedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FlaggedReviewOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    flaggedById?: SortOrder
    flagReason?: SortOrder
    createdAt?: SortOrder
    moderationStatus?: SortOrder
    _count?: FlaggedReviewCountOrderByAggregateInput
    _avg?: FlaggedReviewAvgOrderByAggregateInput
    _max?: FlaggedReviewMaxOrderByAggregateInput
    _min?: FlaggedReviewMinOrderByAggregateInput
    _sum?: FlaggedReviewSumOrderByAggregateInput
  }

  export type FlaggedReviewScalarWhereWithAggregatesInput = {
    AND?: FlaggedReviewScalarWhereWithAggregatesInput | FlaggedReviewScalarWhereWithAggregatesInput[]
    OR?: FlaggedReviewScalarWhereWithAggregatesInput[]
    NOT?: FlaggedReviewScalarWhereWithAggregatesInput | FlaggedReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FlaggedReview"> | number
    reviewId?: IntWithAggregatesFilter<"FlaggedReview"> | number
    flaggedById?: IntWithAggregatesFilter<"FlaggedReview"> | number
    flagReason?: EnumFlagReasonWithAggregatesFilter<"FlaggedReview"> | $Enums.FlagReason
    createdAt?: DateTimeWithAggregatesFilter<"FlaggedReview"> | Date | string
    moderationStatus?: EnumModerationStatusWithAggregatesFilter<"FlaggedReview"> | $Enums.ModerationStatus
  }

  export type items6CreateInput = {
    price?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    location?: string | null
    link?: string | null
    new_price_column?: Decimal | DecimalJsLike | number | string | null
    deal?: string | null
  }

  export type items6UncheckedCreateInput = {
    id?: number
    price?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    location?: string | null
    link?: string | null
    new_price_column?: Decimal | DecimalJsLike | number | string | null
    deal?: string | null
  }

  export type items6UpdateInput = {
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    new_price_column?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type items6UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    new_price_column?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type items6CreateManyInput = {
    id?: number
    price?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    location?: string | null
    link?: string | null
    new_price_column?: Decimal | DecimalJsLike | number | string | null
    deal?: string | null
  }

  export type items6UpdateManyMutationInput = {
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    new_price_column?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type items6UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    new_price_column?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    heartedProducts?: UserHeartedProductCreateNestedManyWithoutUserInput
    reviews?: UserReviewCreateNestedManyWithoutUserInput
    recentlyViewed?: UserRecentlyViewedCreateNestedManyWithoutUserInput
    searches?: UserSearchCreateNestedManyWithoutUserInput
    categories?: UserCategoryCreateNestedManyWithoutUserInput
    flaggedReviews?: FlaggedReviewCreateNestedManyWithoutFlaggedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    heartedProducts?: UserHeartedProductUncheckedCreateNestedManyWithoutUserInput
    reviews?: UserReviewUncheckedCreateNestedManyWithoutUserInput
    recentlyViewed?: UserRecentlyViewedUncheckedCreateNestedManyWithoutUserInput
    searches?: UserSearchUncheckedCreateNestedManyWithoutUserInput
    categories?: UserCategoryUncheckedCreateNestedManyWithoutUserInput
    flaggedReviews?: FlaggedReviewUncheckedCreateNestedManyWithoutFlaggedByInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartedProducts?: UserHeartedProductUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUpdateManyWithoutUserNestedInput
    recentlyViewed?: UserRecentlyViewedUpdateManyWithoutUserNestedInput
    searches?: UserSearchUpdateManyWithoutUserNestedInput
    categories?: UserCategoryUpdateManyWithoutUserNestedInput
    flaggedReviews?: FlaggedReviewUpdateManyWithoutFlaggedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartedProducts?: UserHeartedProductUncheckedUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUncheckedUpdateManyWithoutUserNestedInput
    recentlyViewed?: UserRecentlyViewedUncheckedUpdateManyWithoutUserNestedInput
    searches?: UserSearchUncheckedUpdateManyWithoutUserNestedInput
    categories?: UserCategoryUncheckedUpdateManyWithoutUserNestedInput
    flaggedReviews?: FlaggedReviewUncheckedUpdateManyWithoutFlaggedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    price: number
    description: string
    location: string
    link: string
    new_price_column: number
    deal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: UserReviewCreateNestedManyWithoutProductInput
    viewedBy?: UserRecentlyViewedCreateNestedManyWithoutProductInput
    heartedBy?: UserHeartedProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    price: number
    description: string
    location: string
    link: string
    new_price_column: number
    deal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: UserReviewUncheckedCreateNestedManyWithoutProductInput
    viewedBy?: UserRecentlyViewedUncheckedCreateNestedManyWithoutProductInput
    heartedBy?: UserHeartedProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    new_price_column?: FloatFieldUpdateOperationsInput | number
    deal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: UserReviewUpdateManyWithoutProductNestedInput
    viewedBy?: UserRecentlyViewedUpdateManyWithoutProductNestedInput
    heartedBy?: UserHeartedProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    new_price_column?: FloatFieldUpdateOperationsInput | number
    deal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: UserReviewUncheckedUpdateManyWithoutProductNestedInput
    viewedBy?: UserRecentlyViewedUncheckedUpdateManyWithoutProductNestedInput
    heartedBy?: UserHeartedProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    price: number
    description: string
    location: string
    link: string
    new_price_column: number
    deal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    new_price_column?: FloatFieldUpdateOperationsInput | number
    deal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    new_price_column?: FloatFieldUpdateOperationsInput | number
    deal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHeartedProductCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHeartedProductsInput
    product: ProductCreateNestedOneWithoutHeartedByInput
  }

  export type UserHeartedProductUncheckedCreateInput = {
    id?: number
    userId: number
    productId: number
    createdAt?: Date | string
  }

  export type UserHeartedProductUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHeartedProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutHeartedByNestedInput
  }

  export type UserHeartedProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHeartedProductCreateManyInput = {
    id?: number
    userId: number
    productId: number
    createdAt?: Date | string
  }

  export type UserHeartedProductUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHeartedProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserReviewCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    product: ProductCreateNestedOneWithoutReviewsInput
    flags?: FlaggedReviewCreateNestedManyWithoutReviewInput
  }

  export type UserReviewUncheckedCreateInput = {
    id?: number
    userId: number
    productId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    flags?: FlaggedReviewUncheckedCreateNestedManyWithoutReviewInput
  }

  export type UserReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
    flags?: FlaggedReviewUpdateManyWithoutReviewNestedInput
  }

  export type UserReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: FlaggedReviewUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type UserReviewCreateManyInput = {
    id?: number
    userId: number
    productId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type UserReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRecentlyViewedCreateInput = {
    viewedAt?: Date | string
    user: UserCreateNestedOneWithoutRecentlyViewedInput
    product: ProductCreateNestedOneWithoutViewedByInput
  }

  export type UserRecentlyViewedUncheckedCreateInput = {
    id?: number
    userId: number
    productId: number
    viewedAt?: Date | string
  }

  export type UserRecentlyViewedUpdateInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecentlyViewedNestedInput
    product?: ProductUpdateOneRequiredWithoutViewedByNestedInput
  }

  export type UserRecentlyViewedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRecentlyViewedCreateManyInput = {
    id?: number
    userId: number
    productId: number
    viewedAt?: Date | string
  }

  export type UserRecentlyViewedUpdateManyMutationInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRecentlyViewedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSearchCreateInput = {
    query: string
    searchedAt?: Date | string
    user: UserCreateNestedOneWithoutSearchesInput
  }

  export type UserSearchUncheckedCreateInput = {
    id?: number
    userId: number
    query: string
    searchedAt?: Date | string
  }

  export type UserSearchUpdateInput = {
    query?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSearchesNestedInput
  }

  export type UserSearchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    query?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSearchCreateManyInput = {
    id?: number
    userId: number
    query: string
    searchedAt?: Date | string
  }

  export type UserSearchUpdateManyMutationInput = {
    query?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSearchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    query?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryCreateInput = {
    category: string
    clickCount?: number
    lastVisited?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
  }

  export type UserCategoryUncheckedCreateInput = {
    id?: number
    userId: number
    category: string
    clickCount?: number
    lastVisited?: Date | string
  }

  export type UserCategoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type UserCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryCreateManyInput = {
    id?: number
    userId: number
    category: string
    clickCount?: number
    lastVisited?: Date | string
  }

  export type UserCategoryUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlaggedReviewCreateInput = {
    flagReason: $Enums.FlagReason
    createdAt?: Date | string
    moderationStatus?: $Enums.ModerationStatus
    review: UserReviewCreateNestedOneWithoutFlagsInput
    flaggedBy: UserCreateNestedOneWithoutFlaggedReviewsInput
  }

  export type FlaggedReviewUncheckedCreateInput = {
    id?: number
    reviewId: number
    flaggedById: number
    flagReason: $Enums.FlagReason
    createdAt?: Date | string
    moderationStatus?: $Enums.ModerationStatus
  }

  export type FlaggedReviewUpdateInput = {
    flagReason?: EnumFlagReasonFieldUpdateOperationsInput | $Enums.FlagReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    review?: UserReviewUpdateOneRequiredWithoutFlagsNestedInput
    flaggedBy?: UserUpdateOneRequiredWithoutFlaggedReviewsNestedInput
  }

  export type FlaggedReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
    flaggedById?: IntFieldUpdateOperationsInput | number
    flagReason?: EnumFlagReasonFieldUpdateOperationsInput | $Enums.FlagReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
  }

  export type FlaggedReviewCreateManyInput = {
    id?: number
    reviewId: number
    flaggedById: number
    flagReason: $Enums.FlagReason
    createdAt?: Date | string
    moderationStatus?: $Enums.ModerationStatus
  }

  export type FlaggedReviewUpdateManyMutationInput = {
    flagReason?: EnumFlagReasonFieldUpdateOperationsInput | $Enums.FlagReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
  }

  export type FlaggedReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
    flaggedById?: IntFieldUpdateOperationsInput | number
    flagReason?: EnumFlagReasonFieldUpdateOperationsInput | $Enums.FlagReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type items6OrderByRelevanceInput = {
    fields: items6OrderByRelevanceFieldEnum | items6OrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type items6CountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    description?: SortOrder
    location?: SortOrder
    link?: SortOrder
    new_price_column?: SortOrder
    deal?: SortOrder
  }

  export type items6AvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    new_price_column?: SortOrder
  }

  export type items6MaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    description?: SortOrder
    location?: SortOrder
    link?: SortOrder
    new_price_column?: SortOrder
    deal?: SortOrder
  }

  export type items6MinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    description?: SortOrder
    location?: SortOrder
    link?: SortOrder
    new_price_column?: SortOrder
    deal?: SortOrder
  }

  export type items6SumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    new_price_column?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserHeartedProductListRelationFilter = {
    every?: UserHeartedProductWhereInput
    some?: UserHeartedProductWhereInput
    none?: UserHeartedProductWhereInput
  }

  export type UserReviewListRelationFilter = {
    every?: UserReviewWhereInput
    some?: UserReviewWhereInput
    none?: UserReviewWhereInput
  }

  export type UserRecentlyViewedListRelationFilter = {
    every?: UserRecentlyViewedWhereInput
    some?: UserRecentlyViewedWhereInput
    none?: UserRecentlyViewedWhereInput
  }

  export type UserSearchListRelationFilter = {
    every?: UserSearchWhereInput
    some?: UserSearchWhereInput
    none?: UserSearchWhereInput
  }

  export type UserCategoryListRelationFilter = {
    every?: UserCategoryWhereInput
    some?: UserCategoryWhereInput
    none?: UserCategoryWhereInput
  }

  export type FlaggedReviewListRelationFilter = {
    every?: FlaggedReviewWhereInput
    some?: FlaggedReviewWhereInput
    none?: FlaggedReviewWhereInput
  }

  export type UserHeartedProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRecentlyViewedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSearchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlaggedReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    description?: SortOrder
    location?: SortOrder
    link?: SortOrder
    new_price_column?: SortOrder
    deal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    new_price_column?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    description?: SortOrder
    location?: SortOrder
    link?: SortOrder
    new_price_column?: SortOrder
    deal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    description?: SortOrder
    location?: SortOrder
    link?: SortOrder
    new_price_column?: SortOrder
    deal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    new_price_column?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type UserHeartedProductUserIdProductIdCompoundUniqueInput = {
    userId: number
    productId: number
  }

  export type UserHeartedProductCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserHeartedProductAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type UserHeartedProductMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserHeartedProductMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserHeartedProductSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type UserReviewOrderByRelevanceInput = {
    fields: UserReviewOrderByRelevanceFieldEnum | UserReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type UserReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
  }

  export type UserReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type UserReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type UserReviewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
  }

  export type UserRecentlyViewedUserIdProductIdCompoundUniqueInput = {
    userId: number
    productId: number
  }

  export type UserRecentlyViewedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    viewedAt?: SortOrder
  }

  export type UserRecentlyViewedAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type UserRecentlyViewedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    viewedAt?: SortOrder
  }

  export type UserRecentlyViewedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    viewedAt?: SortOrder
  }

  export type UserRecentlyViewedSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type UserSearchOrderByRelevanceInput = {
    fields: UserSearchOrderByRelevanceFieldEnum | UserSearchOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserSearchCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    searchedAt?: SortOrder
  }

  export type UserSearchAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserSearchMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    searchedAt?: SortOrder
  }

  export type UserSearchMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    searchedAt?: SortOrder
  }

  export type UserSearchSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserCategoryOrderByRelevanceInput = {
    fields: UserCategoryOrderByRelevanceFieldEnum | UserCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCategoryUserIdCategoryCompoundUniqueInput = {
    userId: number
    category: string
  }

  export type UserCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    clickCount?: SortOrder
    lastVisited?: SortOrder
  }

  export type UserCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clickCount?: SortOrder
  }

  export type UserCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    clickCount?: SortOrder
    lastVisited?: SortOrder
  }

  export type UserCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    clickCount?: SortOrder
    lastVisited?: SortOrder
  }

  export type UserCategorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clickCount?: SortOrder
  }

  export type EnumFlagReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.FlagReason | EnumFlagReasonFieldRefInput<$PrismaModel>
    in?: $Enums.FlagReason[]
    notIn?: $Enums.FlagReason[]
    not?: NestedEnumFlagReasonFilter<$PrismaModel> | $Enums.FlagReason
  }

  export type EnumModerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[]
    notIn?: $Enums.ModerationStatus[]
    not?: NestedEnumModerationStatusFilter<$PrismaModel> | $Enums.ModerationStatus
  }

  export type UserReviewScalarRelationFilter = {
    is?: UserReviewWhereInput
    isNot?: UserReviewWhereInput
  }

  export type FlaggedReviewCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    flaggedById?: SortOrder
    flagReason?: SortOrder
    createdAt?: SortOrder
    moderationStatus?: SortOrder
  }

  export type FlaggedReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    flaggedById?: SortOrder
  }

  export type FlaggedReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    flaggedById?: SortOrder
    flagReason?: SortOrder
    createdAt?: SortOrder
    moderationStatus?: SortOrder
  }

  export type FlaggedReviewMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    flaggedById?: SortOrder
    flagReason?: SortOrder
    createdAt?: SortOrder
    moderationStatus?: SortOrder
  }

  export type FlaggedReviewSumOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    flaggedById?: SortOrder
  }

  export type EnumFlagReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlagReason | EnumFlagReasonFieldRefInput<$PrismaModel>
    in?: $Enums.FlagReason[]
    notIn?: $Enums.FlagReason[]
    not?: NestedEnumFlagReasonWithAggregatesFilter<$PrismaModel> | $Enums.FlagReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlagReasonFilter<$PrismaModel>
    _max?: NestedEnumFlagReasonFilter<$PrismaModel>
  }

  export type EnumModerationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[]
    notIn?: $Enums.ModerationStatus[]
    not?: NestedEnumModerationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModerationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModerationStatusFilter<$PrismaModel>
    _max?: NestedEnumModerationStatusFilter<$PrismaModel>
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserHeartedProductCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHeartedProductCreateWithoutUserInput, UserHeartedProductUncheckedCreateWithoutUserInput> | UserHeartedProductCreateWithoutUserInput[] | UserHeartedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHeartedProductCreateOrConnectWithoutUserInput | UserHeartedProductCreateOrConnectWithoutUserInput[]
    createMany?: UserHeartedProductCreateManyUserInputEnvelope
    connect?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
  }

  export type UserReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput> | UserReviewCreateWithoutUserInput[] | UserReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutUserInput | UserReviewCreateOrConnectWithoutUserInput[]
    createMany?: UserReviewCreateManyUserInputEnvelope
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
  }

  export type UserRecentlyViewedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRecentlyViewedCreateWithoutUserInput, UserRecentlyViewedUncheckedCreateWithoutUserInput> | UserRecentlyViewedCreateWithoutUserInput[] | UserRecentlyViewedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRecentlyViewedCreateOrConnectWithoutUserInput | UserRecentlyViewedCreateOrConnectWithoutUserInput[]
    createMany?: UserRecentlyViewedCreateManyUserInputEnvelope
    connect?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
  }

  export type UserSearchCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSearchCreateWithoutUserInput, UserSearchUncheckedCreateWithoutUserInput> | UserSearchCreateWithoutUserInput[] | UserSearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSearchCreateOrConnectWithoutUserInput | UserSearchCreateOrConnectWithoutUserInput[]
    createMany?: UserSearchCreateManyUserInputEnvelope
    connect?: UserSearchWhereUniqueInput | UserSearchWhereUniqueInput[]
  }

  export type UserCategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCategoryCreateWithoutUserInput, UserCategoryUncheckedCreateWithoutUserInput> | UserCategoryCreateWithoutUserInput[] | UserCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutUserInput | UserCategoryCreateOrConnectWithoutUserInput[]
    createMany?: UserCategoryCreateManyUserInputEnvelope
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
  }

  export type FlaggedReviewCreateNestedManyWithoutFlaggedByInput = {
    create?: XOR<FlaggedReviewCreateWithoutFlaggedByInput, FlaggedReviewUncheckedCreateWithoutFlaggedByInput> | FlaggedReviewCreateWithoutFlaggedByInput[] | FlaggedReviewUncheckedCreateWithoutFlaggedByInput[]
    connectOrCreate?: FlaggedReviewCreateOrConnectWithoutFlaggedByInput | FlaggedReviewCreateOrConnectWithoutFlaggedByInput[]
    createMany?: FlaggedReviewCreateManyFlaggedByInputEnvelope
    connect?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
  }

  export type UserHeartedProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHeartedProductCreateWithoutUserInput, UserHeartedProductUncheckedCreateWithoutUserInput> | UserHeartedProductCreateWithoutUserInput[] | UserHeartedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHeartedProductCreateOrConnectWithoutUserInput | UserHeartedProductCreateOrConnectWithoutUserInput[]
    createMany?: UserHeartedProductCreateManyUserInputEnvelope
    connect?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
  }

  export type UserReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput> | UserReviewCreateWithoutUserInput[] | UserReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutUserInput | UserReviewCreateOrConnectWithoutUserInput[]
    createMany?: UserReviewCreateManyUserInputEnvelope
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
  }

  export type UserRecentlyViewedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRecentlyViewedCreateWithoutUserInput, UserRecentlyViewedUncheckedCreateWithoutUserInput> | UserRecentlyViewedCreateWithoutUserInput[] | UserRecentlyViewedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRecentlyViewedCreateOrConnectWithoutUserInput | UserRecentlyViewedCreateOrConnectWithoutUserInput[]
    createMany?: UserRecentlyViewedCreateManyUserInputEnvelope
    connect?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
  }

  export type UserSearchUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSearchCreateWithoutUserInput, UserSearchUncheckedCreateWithoutUserInput> | UserSearchCreateWithoutUserInput[] | UserSearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSearchCreateOrConnectWithoutUserInput | UserSearchCreateOrConnectWithoutUserInput[]
    createMany?: UserSearchCreateManyUserInputEnvelope
    connect?: UserSearchWhereUniqueInput | UserSearchWhereUniqueInput[]
  }

  export type UserCategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCategoryCreateWithoutUserInput, UserCategoryUncheckedCreateWithoutUserInput> | UserCategoryCreateWithoutUserInput[] | UserCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutUserInput | UserCategoryCreateOrConnectWithoutUserInput[]
    createMany?: UserCategoryCreateManyUserInputEnvelope
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
  }

  export type FlaggedReviewUncheckedCreateNestedManyWithoutFlaggedByInput = {
    create?: XOR<FlaggedReviewCreateWithoutFlaggedByInput, FlaggedReviewUncheckedCreateWithoutFlaggedByInput> | FlaggedReviewCreateWithoutFlaggedByInput[] | FlaggedReviewUncheckedCreateWithoutFlaggedByInput[]
    connectOrCreate?: FlaggedReviewCreateOrConnectWithoutFlaggedByInput | FlaggedReviewCreateOrConnectWithoutFlaggedByInput[]
    createMany?: FlaggedReviewCreateManyFlaggedByInputEnvelope
    connect?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserHeartedProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHeartedProductCreateWithoutUserInput, UserHeartedProductUncheckedCreateWithoutUserInput> | UserHeartedProductCreateWithoutUserInput[] | UserHeartedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHeartedProductCreateOrConnectWithoutUserInput | UserHeartedProductCreateOrConnectWithoutUserInput[]
    upsert?: UserHeartedProductUpsertWithWhereUniqueWithoutUserInput | UserHeartedProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHeartedProductCreateManyUserInputEnvelope
    set?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    disconnect?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    delete?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    connect?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    update?: UserHeartedProductUpdateWithWhereUniqueWithoutUserInput | UserHeartedProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHeartedProductUpdateManyWithWhereWithoutUserInput | UserHeartedProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHeartedProductScalarWhereInput | UserHeartedProductScalarWhereInput[]
  }

  export type UserReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput> | UserReviewCreateWithoutUserInput[] | UserReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutUserInput | UserReviewCreateOrConnectWithoutUserInput[]
    upsert?: UserReviewUpsertWithWhereUniqueWithoutUserInput | UserReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserReviewCreateManyUserInputEnvelope
    set?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    disconnect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    delete?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    update?: UserReviewUpdateWithWhereUniqueWithoutUserInput | UserReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserReviewUpdateManyWithWhereWithoutUserInput | UserReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
  }

  export type UserRecentlyViewedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRecentlyViewedCreateWithoutUserInput, UserRecentlyViewedUncheckedCreateWithoutUserInput> | UserRecentlyViewedCreateWithoutUserInput[] | UserRecentlyViewedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRecentlyViewedCreateOrConnectWithoutUserInput | UserRecentlyViewedCreateOrConnectWithoutUserInput[]
    upsert?: UserRecentlyViewedUpsertWithWhereUniqueWithoutUserInput | UserRecentlyViewedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRecentlyViewedCreateManyUserInputEnvelope
    set?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    disconnect?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    delete?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    connect?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    update?: UserRecentlyViewedUpdateWithWhereUniqueWithoutUserInput | UserRecentlyViewedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRecentlyViewedUpdateManyWithWhereWithoutUserInput | UserRecentlyViewedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRecentlyViewedScalarWhereInput | UserRecentlyViewedScalarWhereInput[]
  }

  export type UserSearchUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSearchCreateWithoutUserInput, UserSearchUncheckedCreateWithoutUserInput> | UserSearchCreateWithoutUserInput[] | UserSearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSearchCreateOrConnectWithoutUserInput | UserSearchCreateOrConnectWithoutUserInput[]
    upsert?: UserSearchUpsertWithWhereUniqueWithoutUserInput | UserSearchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSearchCreateManyUserInputEnvelope
    set?: UserSearchWhereUniqueInput | UserSearchWhereUniqueInput[]
    disconnect?: UserSearchWhereUniqueInput | UserSearchWhereUniqueInput[]
    delete?: UserSearchWhereUniqueInput | UserSearchWhereUniqueInput[]
    connect?: UserSearchWhereUniqueInput | UserSearchWhereUniqueInput[]
    update?: UserSearchUpdateWithWhereUniqueWithoutUserInput | UserSearchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSearchUpdateManyWithWhereWithoutUserInput | UserSearchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSearchScalarWhereInput | UserSearchScalarWhereInput[]
  }

  export type UserCategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCategoryCreateWithoutUserInput, UserCategoryUncheckedCreateWithoutUserInput> | UserCategoryCreateWithoutUserInput[] | UserCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutUserInput | UserCategoryCreateOrConnectWithoutUserInput[]
    upsert?: UserCategoryUpsertWithWhereUniqueWithoutUserInput | UserCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCategoryCreateManyUserInputEnvelope
    set?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    disconnect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    delete?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    update?: UserCategoryUpdateWithWhereUniqueWithoutUserInput | UserCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCategoryUpdateManyWithWhereWithoutUserInput | UserCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
  }

  export type FlaggedReviewUpdateManyWithoutFlaggedByNestedInput = {
    create?: XOR<FlaggedReviewCreateWithoutFlaggedByInput, FlaggedReviewUncheckedCreateWithoutFlaggedByInput> | FlaggedReviewCreateWithoutFlaggedByInput[] | FlaggedReviewUncheckedCreateWithoutFlaggedByInput[]
    connectOrCreate?: FlaggedReviewCreateOrConnectWithoutFlaggedByInput | FlaggedReviewCreateOrConnectWithoutFlaggedByInput[]
    upsert?: FlaggedReviewUpsertWithWhereUniqueWithoutFlaggedByInput | FlaggedReviewUpsertWithWhereUniqueWithoutFlaggedByInput[]
    createMany?: FlaggedReviewCreateManyFlaggedByInputEnvelope
    set?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    disconnect?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    delete?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    connect?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    update?: FlaggedReviewUpdateWithWhereUniqueWithoutFlaggedByInput | FlaggedReviewUpdateWithWhereUniqueWithoutFlaggedByInput[]
    updateMany?: FlaggedReviewUpdateManyWithWhereWithoutFlaggedByInput | FlaggedReviewUpdateManyWithWhereWithoutFlaggedByInput[]
    deleteMany?: FlaggedReviewScalarWhereInput | FlaggedReviewScalarWhereInput[]
  }

  export type UserHeartedProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHeartedProductCreateWithoutUserInput, UserHeartedProductUncheckedCreateWithoutUserInput> | UserHeartedProductCreateWithoutUserInput[] | UserHeartedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHeartedProductCreateOrConnectWithoutUserInput | UserHeartedProductCreateOrConnectWithoutUserInput[]
    upsert?: UserHeartedProductUpsertWithWhereUniqueWithoutUserInput | UserHeartedProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHeartedProductCreateManyUserInputEnvelope
    set?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    disconnect?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    delete?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    connect?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    update?: UserHeartedProductUpdateWithWhereUniqueWithoutUserInput | UserHeartedProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHeartedProductUpdateManyWithWhereWithoutUserInput | UserHeartedProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHeartedProductScalarWhereInput | UserHeartedProductScalarWhereInput[]
  }

  export type UserReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput> | UserReviewCreateWithoutUserInput[] | UserReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutUserInput | UserReviewCreateOrConnectWithoutUserInput[]
    upsert?: UserReviewUpsertWithWhereUniqueWithoutUserInput | UserReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserReviewCreateManyUserInputEnvelope
    set?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    disconnect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    delete?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    update?: UserReviewUpdateWithWhereUniqueWithoutUserInput | UserReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserReviewUpdateManyWithWhereWithoutUserInput | UserReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
  }

  export type UserRecentlyViewedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRecentlyViewedCreateWithoutUserInput, UserRecentlyViewedUncheckedCreateWithoutUserInput> | UserRecentlyViewedCreateWithoutUserInput[] | UserRecentlyViewedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRecentlyViewedCreateOrConnectWithoutUserInput | UserRecentlyViewedCreateOrConnectWithoutUserInput[]
    upsert?: UserRecentlyViewedUpsertWithWhereUniqueWithoutUserInput | UserRecentlyViewedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRecentlyViewedCreateManyUserInputEnvelope
    set?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    disconnect?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    delete?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    connect?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    update?: UserRecentlyViewedUpdateWithWhereUniqueWithoutUserInput | UserRecentlyViewedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRecentlyViewedUpdateManyWithWhereWithoutUserInput | UserRecentlyViewedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRecentlyViewedScalarWhereInput | UserRecentlyViewedScalarWhereInput[]
  }

  export type UserSearchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSearchCreateWithoutUserInput, UserSearchUncheckedCreateWithoutUserInput> | UserSearchCreateWithoutUserInput[] | UserSearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSearchCreateOrConnectWithoutUserInput | UserSearchCreateOrConnectWithoutUserInput[]
    upsert?: UserSearchUpsertWithWhereUniqueWithoutUserInput | UserSearchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSearchCreateManyUserInputEnvelope
    set?: UserSearchWhereUniqueInput | UserSearchWhereUniqueInput[]
    disconnect?: UserSearchWhereUniqueInput | UserSearchWhereUniqueInput[]
    delete?: UserSearchWhereUniqueInput | UserSearchWhereUniqueInput[]
    connect?: UserSearchWhereUniqueInput | UserSearchWhereUniqueInput[]
    update?: UserSearchUpdateWithWhereUniqueWithoutUserInput | UserSearchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSearchUpdateManyWithWhereWithoutUserInput | UserSearchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSearchScalarWhereInput | UserSearchScalarWhereInput[]
  }

  export type UserCategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCategoryCreateWithoutUserInput, UserCategoryUncheckedCreateWithoutUserInput> | UserCategoryCreateWithoutUserInput[] | UserCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutUserInput | UserCategoryCreateOrConnectWithoutUserInput[]
    upsert?: UserCategoryUpsertWithWhereUniqueWithoutUserInput | UserCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCategoryCreateManyUserInputEnvelope
    set?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    disconnect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    delete?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    update?: UserCategoryUpdateWithWhereUniqueWithoutUserInput | UserCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCategoryUpdateManyWithWhereWithoutUserInput | UserCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
  }

  export type FlaggedReviewUncheckedUpdateManyWithoutFlaggedByNestedInput = {
    create?: XOR<FlaggedReviewCreateWithoutFlaggedByInput, FlaggedReviewUncheckedCreateWithoutFlaggedByInput> | FlaggedReviewCreateWithoutFlaggedByInput[] | FlaggedReviewUncheckedCreateWithoutFlaggedByInput[]
    connectOrCreate?: FlaggedReviewCreateOrConnectWithoutFlaggedByInput | FlaggedReviewCreateOrConnectWithoutFlaggedByInput[]
    upsert?: FlaggedReviewUpsertWithWhereUniqueWithoutFlaggedByInput | FlaggedReviewUpsertWithWhereUniqueWithoutFlaggedByInput[]
    createMany?: FlaggedReviewCreateManyFlaggedByInputEnvelope
    set?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    disconnect?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    delete?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    connect?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    update?: FlaggedReviewUpdateWithWhereUniqueWithoutFlaggedByInput | FlaggedReviewUpdateWithWhereUniqueWithoutFlaggedByInput[]
    updateMany?: FlaggedReviewUpdateManyWithWhereWithoutFlaggedByInput | FlaggedReviewUpdateManyWithWhereWithoutFlaggedByInput[]
    deleteMany?: FlaggedReviewScalarWhereInput | FlaggedReviewScalarWhereInput[]
  }

  export type UserReviewCreateNestedManyWithoutProductInput = {
    create?: XOR<UserReviewCreateWithoutProductInput, UserReviewUncheckedCreateWithoutProductInput> | UserReviewCreateWithoutProductInput[] | UserReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutProductInput | UserReviewCreateOrConnectWithoutProductInput[]
    createMany?: UserReviewCreateManyProductInputEnvelope
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
  }

  export type UserRecentlyViewedCreateNestedManyWithoutProductInput = {
    create?: XOR<UserRecentlyViewedCreateWithoutProductInput, UserRecentlyViewedUncheckedCreateWithoutProductInput> | UserRecentlyViewedCreateWithoutProductInput[] | UserRecentlyViewedUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserRecentlyViewedCreateOrConnectWithoutProductInput | UserRecentlyViewedCreateOrConnectWithoutProductInput[]
    createMany?: UserRecentlyViewedCreateManyProductInputEnvelope
    connect?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
  }

  export type UserHeartedProductCreateNestedManyWithoutProductInput = {
    create?: XOR<UserHeartedProductCreateWithoutProductInput, UserHeartedProductUncheckedCreateWithoutProductInput> | UserHeartedProductCreateWithoutProductInput[] | UserHeartedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserHeartedProductCreateOrConnectWithoutProductInput | UserHeartedProductCreateOrConnectWithoutProductInput[]
    createMany?: UserHeartedProductCreateManyProductInputEnvelope
    connect?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
  }

  export type UserReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UserReviewCreateWithoutProductInput, UserReviewUncheckedCreateWithoutProductInput> | UserReviewCreateWithoutProductInput[] | UserReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutProductInput | UserReviewCreateOrConnectWithoutProductInput[]
    createMany?: UserReviewCreateManyProductInputEnvelope
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
  }

  export type UserRecentlyViewedUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UserRecentlyViewedCreateWithoutProductInput, UserRecentlyViewedUncheckedCreateWithoutProductInput> | UserRecentlyViewedCreateWithoutProductInput[] | UserRecentlyViewedUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserRecentlyViewedCreateOrConnectWithoutProductInput | UserRecentlyViewedCreateOrConnectWithoutProductInput[]
    createMany?: UserRecentlyViewedCreateManyProductInputEnvelope
    connect?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
  }

  export type UserHeartedProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UserHeartedProductCreateWithoutProductInput, UserHeartedProductUncheckedCreateWithoutProductInput> | UserHeartedProductCreateWithoutProductInput[] | UserHeartedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserHeartedProductCreateOrConnectWithoutProductInput | UserHeartedProductCreateOrConnectWithoutProductInput[]
    createMany?: UserHeartedProductCreateManyProductInputEnvelope
    connect?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserReviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserReviewCreateWithoutProductInput, UserReviewUncheckedCreateWithoutProductInput> | UserReviewCreateWithoutProductInput[] | UserReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutProductInput | UserReviewCreateOrConnectWithoutProductInput[]
    upsert?: UserReviewUpsertWithWhereUniqueWithoutProductInput | UserReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserReviewCreateManyProductInputEnvelope
    set?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    disconnect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    delete?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    update?: UserReviewUpdateWithWhereUniqueWithoutProductInput | UserReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserReviewUpdateManyWithWhereWithoutProductInput | UserReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
  }

  export type UserRecentlyViewedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserRecentlyViewedCreateWithoutProductInput, UserRecentlyViewedUncheckedCreateWithoutProductInput> | UserRecentlyViewedCreateWithoutProductInput[] | UserRecentlyViewedUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserRecentlyViewedCreateOrConnectWithoutProductInput | UserRecentlyViewedCreateOrConnectWithoutProductInput[]
    upsert?: UserRecentlyViewedUpsertWithWhereUniqueWithoutProductInput | UserRecentlyViewedUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserRecentlyViewedCreateManyProductInputEnvelope
    set?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    disconnect?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    delete?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    connect?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    update?: UserRecentlyViewedUpdateWithWhereUniqueWithoutProductInput | UserRecentlyViewedUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserRecentlyViewedUpdateManyWithWhereWithoutProductInput | UserRecentlyViewedUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserRecentlyViewedScalarWhereInput | UserRecentlyViewedScalarWhereInput[]
  }

  export type UserHeartedProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserHeartedProductCreateWithoutProductInput, UserHeartedProductUncheckedCreateWithoutProductInput> | UserHeartedProductCreateWithoutProductInput[] | UserHeartedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserHeartedProductCreateOrConnectWithoutProductInput | UserHeartedProductCreateOrConnectWithoutProductInput[]
    upsert?: UserHeartedProductUpsertWithWhereUniqueWithoutProductInput | UserHeartedProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserHeartedProductCreateManyProductInputEnvelope
    set?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    disconnect?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    delete?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    connect?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    update?: UserHeartedProductUpdateWithWhereUniqueWithoutProductInput | UserHeartedProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserHeartedProductUpdateManyWithWhereWithoutProductInput | UserHeartedProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserHeartedProductScalarWhereInput | UserHeartedProductScalarWhereInput[]
  }

  export type UserReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserReviewCreateWithoutProductInput, UserReviewUncheckedCreateWithoutProductInput> | UserReviewCreateWithoutProductInput[] | UserReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutProductInput | UserReviewCreateOrConnectWithoutProductInput[]
    upsert?: UserReviewUpsertWithWhereUniqueWithoutProductInput | UserReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserReviewCreateManyProductInputEnvelope
    set?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    disconnect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    delete?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    update?: UserReviewUpdateWithWhereUniqueWithoutProductInput | UserReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserReviewUpdateManyWithWhereWithoutProductInput | UserReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
  }

  export type UserRecentlyViewedUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserRecentlyViewedCreateWithoutProductInput, UserRecentlyViewedUncheckedCreateWithoutProductInput> | UserRecentlyViewedCreateWithoutProductInput[] | UserRecentlyViewedUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserRecentlyViewedCreateOrConnectWithoutProductInput | UserRecentlyViewedCreateOrConnectWithoutProductInput[]
    upsert?: UserRecentlyViewedUpsertWithWhereUniqueWithoutProductInput | UserRecentlyViewedUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserRecentlyViewedCreateManyProductInputEnvelope
    set?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    disconnect?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    delete?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    connect?: UserRecentlyViewedWhereUniqueInput | UserRecentlyViewedWhereUniqueInput[]
    update?: UserRecentlyViewedUpdateWithWhereUniqueWithoutProductInput | UserRecentlyViewedUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserRecentlyViewedUpdateManyWithWhereWithoutProductInput | UserRecentlyViewedUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserRecentlyViewedScalarWhereInput | UserRecentlyViewedScalarWhereInput[]
  }

  export type UserHeartedProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserHeartedProductCreateWithoutProductInput, UserHeartedProductUncheckedCreateWithoutProductInput> | UserHeartedProductCreateWithoutProductInput[] | UserHeartedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserHeartedProductCreateOrConnectWithoutProductInput | UserHeartedProductCreateOrConnectWithoutProductInput[]
    upsert?: UserHeartedProductUpsertWithWhereUniqueWithoutProductInput | UserHeartedProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserHeartedProductCreateManyProductInputEnvelope
    set?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    disconnect?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    delete?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    connect?: UserHeartedProductWhereUniqueInput | UserHeartedProductWhereUniqueInput[]
    update?: UserHeartedProductUpdateWithWhereUniqueWithoutProductInput | UserHeartedProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserHeartedProductUpdateManyWithWhereWithoutProductInput | UserHeartedProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserHeartedProductScalarWhereInput | UserHeartedProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHeartedProductsInput = {
    create?: XOR<UserCreateWithoutHeartedProductsInput, UserUncheckedCreateWithoutHeartedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHeartedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutHeartedByInput = {
    create?: XOR<ProductCreateWithoutHeartedByInput, ProductUncheckedCreateWithoutHeartedByInput>
    connectOrCreate?: ProductCreateOrConnectWithoutHeartedByInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHeartedProductsNestedInput = {
    create?: XOR<UserCreateWithoutHeartedProductsInput, UserUncheckedCreateWithoutHeartedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHeartedProductsInput
    upsert?: UserUpsertWithoutHeartedProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHeartedProductsInput, UserUpdateWithoutHeartedProductsInput>, UserUncheckedUpdateWithoutHeartedProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutHeartedByNestedInput = {
    create?: XOR<ProductCreateWithoutHeartedByInput, ProductUncheckedCreateWithoutHeartedByInput>
    connectOrCreate?: ProductCreateOrConnectWithoutHeartedByInput
    upsert?: ProductUpsertWithoutHeartedByInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutHeartedByInput, ProductUpdateWithoutHeartedByInput>, ProductUncheckedUpdateWithoutHeartedByInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    connect?: ProductWhereUniqueInput
  }

  export type FlaggedReviewCreateNestedManyWithoutReviewInput = {
    create?: XOR<FlaggedReviewCreateWithoutReviewInput, FlaggedReviewUncheckedCreateWithoutReviewInput> | FlaggedReviewCreateWithoutReviewInput[] | FlaggedReviewUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: FlaggedReviewCreateOrConnectWithoutReviewInput | FlaggedReviewCreateOrConnectWithoutReviewInput[]
    createMany?: FlaggedReviewCreateManyReviewInputEnvelope
    connect?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
  }

  export type FlaggedReviewUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<FlaggedReviewCreateWithoutReviewInput, FlaggedReviewUncheckedCreateWithoutReviewInput> | FlaggedReviewCreateWithoutReviewInput[] | FlaggedReviewUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: FlaggedReviewCreateOrConnectWithoutReviewInput | FlaggedReviewCreateOrConnectWithoutReviewInput[]
    createMany?: FlaggedReviewCreateManyReviewInputEnvelope
    connect?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    upsert?: ProductUpsertWithoutReviewsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutReviewsInput, ProductUpdateWithoutReviewsInput>, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type FlaggedReviewUpdateManyWithoutReviewNestedInput = {
    create?: XOR<FlaggedReviewCreateWithoutReviewInput, FlaggedReviewUncheckedCreateWithoutReviewInput> | FlaggedReviewCreateWithoutReviewInput[] | FlaggedReviewUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: FlaggedReviewCreateOrConnectWithoutReviewInput | FlaggedReviewCreateOrConnectWithoutReviewInput[]
    upsert?: FlaggedReviewUpsertWithWhereUniqueWithoutReviewInput | FlaggedReviewUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: FlaggedReviewCreateManyReviewInputEnvelope
    set?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    disconnect?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    delete?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    connect?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    update?: FlaggedReviewUpdateWithWhereUniqueWithoutReviewInput | FlaggedReviewUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: FlaggedReviewUpdateManyWithWhereWithoutReviewInput | FlaggedReviewUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: FlaggedReviewScalarWhereInput | FlaggedReviewScalarWhereInput[]
  }

  export type FlaggedReviewUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<FlaggedReviewCreateWithoutReviewInput, FlaggedReviewUncheckedCreateWithoutReviewInput> | FlaggedReviewCreateWithoutReviewInput[] | FlaggedReviewUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: FlaggedReviewCreateOrConnectWithoutReviewInput | FlaggedReviewCreateOrConnectWithoutReviewInput[]
    upsert?: FlaggedReviewUpsertWithWhereUniqueWithoutReviewInput | FlaggedReviewUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: FlaggedReviewCreateManyReviewInputEnvelope
    set?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    disconnect?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    delete?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    connect?: FlaggedReviewWhereUniqueInput | FlaggedReviewWhereUniqueInput[]
    update?: FlaggedReviewUpdateWithWhereUniqueWithoutReviewInput | FlaggedReviewUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: FlaggedReviewUpdateManyWithWhereWithoutReviewInput | FlaggedReviewUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: FlaggedReviewScalarWhereInput | FlaggedReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecentlyViewedInput = {
    create?: XOR<UserCreateWithoutRecentlyViewedInput, UserUncheckedCreateWithoutRecentlyViewedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecentlyViewedInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutViewedByInput = {
    create?: XOR<ProductCreateWithoutViewedByInput, ProductUncheckedCreateWithoutViewedByInput>
    connectOrCreate?: ProductCreateOrConnectWithoutViewedByInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecentlyViewedNestedInput = {
    create?: XOR<UserCreateWithoutRecentlyViewedInput, UserUncheckedCreateWithoutRecentlyViewedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecentlyViewedInput
    upsert?: UserUpsertWithoutRecentlyViewedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecentlyViewedInput, UserUpdateWithoutRecentlyViewedInput>, UserUncheckedUpdateWithoutRecentlyViewedInput>
  }

  export type ProductUpdateOneRequiredWithoutViewedByNestedInput = {
    create?: XOR<ProductCreateWithoutViewedByInput, ProductUncheckedCreateWithoutViewedByInput>
    connectOrCreate?: ProductCreateOrConnectWithoutViewedByInput
    upsert?: ProductUpsertWithoutViewedByInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutViewedByInput, ProductUpdateWithoutViewedByInput>, ProductUncheckedUpdateWithoutViewedByInput>
  }

  export type UserCreateNestedOneWithoutSearchesInput = {
    create?: XOR<UserCreateWithoutSearchesInput, UserUncheckedCreateWithoutSearchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSearchesNestedInput = {
    create?: XOR<UserCreateWithoutSearchesInput, UserUncheckedCreateWithoutSearchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchesInput
    upsert?: UserUpsertWithoutSearchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSearchesInput, UserUpdateWithoutSearchesInput>, UserUncheckedUpdateWithoutSearchesInput>
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserReviewCreateNestedOneWithoutFlagsInput = {
    create?: XOR<UserReviewCreateWithoutFlagsInput, UserReviewUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: UserReviewCreateOrConnectWithoutFlagsInput
    connect?: UserReviewWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFlaggedReviewsInput = {
    create?: XOR<UserCreateWithoutFlaggedReviewsInput, UserUncheckedCreateWithoutFlaggedReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlaggedReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFlagReasonFieldUpdateOperationsInput = {
    set?: $Enums.FlagReason
  }

  export type EnumModerationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ModerationStatus
  }

  export type UserReviewUpdateOneRequiredWithoutFlagsNestedInput = {
    create?: XOR<UserReviewCreateWithoutFlagsInput, UserReviewUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: UserReviewCreateOrConnectWithoutFlagsInput
    upsert?: UserReviewUpsertWithoutFlagsInput
    connect?: UserReviewWhereUniqueInput
    update?: XOR<XOR<UserReviewUpdateToOneWithWhereWithoutFlagsInput, UserReviewUpdateWithoutFlagsInput>, UserReviewUncheckedUpdateWithoutFlagsInput>
  }

  export type UserUpdateOneRequiredWithoutFlaggedReviewsNestedInput = {
    create?: XOR<UserCreateWithoutFlaggedReviewsInput, UserUncheckedCreateWithoutFlaggedReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlaggedReviewsInput
    upsert?: UserUpsertWithoutFlaggedReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlaggedReviewsInput, UserUpdateWithoutFlaggedReviewsInput>, UserUncheckedUpdateWithoutFlaggedReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumFlagReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.FlagReason | EnumFlagReasonFieldRefInput<$PrismaModel>
    in?: $Enums.FlagReason[]
    notIn?: $Enums.FlagReason[]
    not?: NestedEnumFlagReasonFilter<$PrismaModel> | $Enums.FlagReason
  }

  export type NestedEnumModerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[]
    notIn?: $Enums.ModerationStatus[]
    not?: NestedEnumModerationStatusFilter<$PrismaModel> | $Enums.ModerationStatus
  }

  export type NestedEnumFlagReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlagReason | EnumFlagReasonFieldRefInput<$PrismaModel>
    in?: $Enums.FlagReason[]
    notIn?: $Enums.FlagReason[]
    not?: NestedEnumFlagReasonWithAggregatesFilter<$PrismaModel> | $Enums.FlagReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlagReasonFilter<$PrismaModel>
    _max?: NestedEnumFlagReasonFilter<$PrismaModel>
  }

  export type NestedEnumModerationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[]
    notIn?: $Enums.ModerationStatus[]
    not?: NestedEnumModerationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModerationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModerationStatusFilter<$PrismaModel>
    _max?: NestedEnumModerationStatusFilter<$PrismaModel>
  }

  export type UserHeartedProductCreateWithoutUserInput = {
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutHeartedByInput
  }

  export type UserHeartedProductUncheckedCreateWithoutUserInput = {
    id?: number
    productId: number
    createdAt?: Date | string
  }

  export type UserHeartedProductCreateOrConnectWithoutUserInput = {
    where: UserHeartedProductWhereUniqueInput
    create: XOR<UserHeartedProductCreateWithoutUserInput, UserHeartedProductUncheckedCreateWithoutUserInput>
  }

  export type UserHeartedProductCreateManyUserInputEnvelope = {
    data: UserHeartedProductCreateManyUserInput | UserHeartedProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserReviewCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutReviewsInput
    flags?: FlaggedReviewCreateNestedManyWithoutReviewInput
  }

  export type UserReviewUncheckedCreateWithoutUserInput = {
    id?: number
    productId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    flags?: FlaggedReviewUncheckedCreateNestedManyWithoutReviewInput
  }

  export type UserReviewCreateOrConnectWithoutUserInput = {
    where: UserReviewWhereUniqueInput
    create: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput>
  }

  export type UserReviewCreateManyUserInputEnvelope = {
    data: UserReviewCreateManyUserInput | UserReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRecentlyViewedCreateWithoutUserInput = {
    viewedAt?: Date | string
    product: ProductCreateNestedOneWithoutViewedByInput
  }

  export type UserRecentlyViewedUncheckedCreateWithoutUserInput = {
    id?: number
    productId: number
    viewedAt?: Date | string
  }

  export type UserRecentlyViewedCreateOrConnectWithoutUserInput = {
    where: UserRecentlyViewedWhereUniqueInput
    create: XOR<UserRecentlyViewedCreateWithoutUserInput, UserRecentlyViewedUncheckedCreateWithoutUserInput>
  }

  export type UserRecentlyViewedCreateManyUserInputEnvelope = {
    data: UserRecentlyViewedCreateManyUserInput | UserRecentlyViewedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSearchCreateWithoutUserInput = {
    query: string
    searchedAt?: Date | string
  }

  export type UserSearchUncheckedCreateWithoutUserInput = {
    id?: number
    query: string
    searchedAt?: Date | string
  }

  export type UserSearchCreateOrConnectWithoutUserInput = {
    where: UserSearchWhereUniqueInput
    create: XOR<UserSearchCreateWithoutUserInput, UserSearchUncheckedCreateWithoutUserInput>
  }

  export type UserSearchCreateManyUserInputEnvelope = {
    data: UserSearchCreateManyUserInput | UserSearchCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCategoryCreateWithoutUserInput = {
    category: string
    clickCount?: number
    lastVisited?: Date | string
  }

  export type UserCategoryUncheckedCreateWithoutUserInput = {
    id?: number
    category: string
    clickCount?: number
    lastVisited?: Date | string
  }

  export type UserCategoryCreateOrConnectWithoutUserInput = {
    where: UserCategoryWhereUniqueInput
    create: XOR<UserCategoryCreateWithoutUserInput, UserCategoryUncheckedCreateWithoutUserInput>
  }

  export type UserCategoryCreateManyUserInputEnvelope = {
    data: UserCategoryCreateManyUserInput | UserCategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FlaggedReviewCreateWithoutFlaggedByInput = {
    flagReason: $Enums.FlagReason
    createdAt?: Date | string
    moderationStatus?: $Enums.ModerationStatus
    review: UserReviewCreateNestedOneWithoutFlagsInput
  }

  export type FlaggedReviewUncheckedCreateWithoutFlaggedByInput = {
    id?: number
    reviewId: number
    flagReason: $Enums.FlagReason
    createdAt?: Date | string
    moderationStatus?: $Enums.ModerationStatus
  }

  export type FlaggedReviewCreateOrConnectWithoutFlaggedByInput = {
    where: FlaggedReviewWhereUniqueInput
    create: XOR<FlaggedReviewCreateWithoutFlaggedByInput, FlaggedReviewUncheckedCreateWithoutFlaggedByInput>
  }

  export type FlaggedReviewCreateManyFlaggedByInputEnvelope = {
    data: FlaggedReviewCreateManyFlaggedByInput | FlaggedReviewCreateManyFlaggedByInput[]
    skipDuplicates?: boolean
  }

  export type UserHeartedProductUpsertWithWhereUniqueWithoutUserInput = {
    where: UserHeartedProductWhereUniqueInput
    update: XOR<UserHeartedProductUpdateWithoutUserInput, UserHeartedProductUncheckedUpdateWithoutUserInput>
    create: XOR<UserHeartedProductCreateWithoutUserInput, UserHeartedProductUncheckedCreateWithoutUserInput>
  }

  export type UserHeartedProductUpdateWithWhereUniqueWithoutUserInput = {
    where: UserHeartedProductWhereUniqueInput
    data: XOR<UserHeartedProductUpdateWithoutUserInput, UserHeartedProductUncheckedUpdateWithoutUserInput>
  }

  export type UserHeartedProductUpdateManyWithWhereWithoutUserInput = {
    where: UserHeartedProductScalarWhereInput
    data: XOR<UserHeartedProductUpdateManyMutationInput, UserHeartedProductUncheckedUpdateManyWithoutUserInput>
  }

  export type UserHeartedProductScalarWhereInput = {
    AND?: UserHeartedProductScalarWhereInput | UserHeartedProductScalarWhereInput[]
    OR?: UserHeartedProductScalarWhereInput[]
    NOT?: UserHeartedProductScalarWhereInput | UserHeartedProductScalarWhereInput[]
    id?: IntFilter<"UserHeartedProduct"> | number
    userId?: IntFilter<"UserHeartedProduct"> | number
    productId?: IntFilter<"UserHeartedProduct"> | number
    createdAt?: DateTimeFilter<"UserHeartedProduct"> | Date | string
  }

  export type UserReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: UserReviewWhereUniqueInput
    update: XOR<UserReviewUpdateWithoutUserInput, UserReviewUncheckedUpdateWithoutUserInput>
    create: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput>
  }

  export type UserReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: UserReviewWhereUniqueInput
    data: XOR<UserReviewUpdateWithoutUserInput, UserReviewUncheckedUpdateWithoutUserInput>
  }

  export type UserReviewUpdateManyWithWhereWithoutUserInput = {
    where: UserReviewScalarWhereInput
    data: XOR<UserReviewUpdateManyMutationInput, UserReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type UserReviewScalarWhereInput = {
    AND?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
    OR?: UserReviewScalarWhereInput[]
    NOT?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
    id?: IntFilter<"UserReview"> | number
    userId?: IntFilter<"UserReview"> | number
    productId?: IntFilter<"UserReview"> | number
    rating?: IntFilter<"UserReview"> | number
    comment?: StringNullableFilter<"UserReview"> | string | null
    createdAt?: DateTimeFilter<"UserReview"> | Date | string
  }

  export type UserRecentlyViewedUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRecentlyViewedWhereUniqueInput
    update: XOR<UserRecentlyViewedUpdateWithoutUserInput, UserRecentlyViewedUncheckedUpdateWithoutUserInput>
    create: XOR<UserRecentlyViewedCreateWithoutUserInput, UserRecentlyViewedUncheckedCreateWithoutUserInput>
  }

  export type UserRecentlyViewedUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRecentlyViewedWhereUniqueInput
    data: XOR<UserRecentlyViewedUpdateWithoutUserInput, UserRecentlyViewedUncheckedUpdateWithoutUserInput>
  }

  export type UserRecentlyViewedUpdateManyWithWhereWithoutUserInput = {
    where: UserRecentlyViewedScalarWhereInput
    data: XOR<UserRecentlyViewedUpdateManyMutationInput, UserRecentlyViewedUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRecentlyViewedScalarWhereInput = {
    AND?: UserRecentlyViewedScalarWhereInput | UserRecentlyViewedScalarWhereInput[]
    OR?: UserRecentlyViewedScalarWhereInput[]
    NOT?: UserRecentlyViewedScalarWhereInput | UserRecentlyViewedScalarWhereInput[]
    id?: IntFilter<"UserRecentlyViewed"> | number
    userId?: IntFilter<"UserRecentlyViewed"> | number
    productId?: IntFilter<"UserRecentlyViewed"> | number
    viewedAt?: DateTimeFilter<"UserRecentlyViewed"> | Date | string
  }

  export type UserSearchUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSearchWhereUniqueInput
    update: XOR<UserSearchUpdateWithoutUserInput, UserSearchUncheckedUpdateWithoutUserInput>
    create: XOR<UserSearchCreateWithoutUserInput, UserSearchUncheckedCreateWithoutUserInput>
  }

  export type UserSearchUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSearchWhereUniqueInput
    data: XOR<UserSearchUpdateWithoutUserInput, UserSearchUncheckedUpdateWithoutUserInput>
  }

  export type UserSearchUpdateManyWithWhereWithoutUserInput = {
    where: UserSearchScalarWhereInput
    data: XOR<UserSearchUpdateManyMutationInput, UserSearchUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSearchScalarWhereInput = {
    AND?: UserSearchScalarWhereInput | UserSearchScalarWhereInput[]
    OR?: UserSearchScalarWhereInput[]
    NOT?: UserSearchScalarWhereInput | UserSearchScalarWhereInput[]
    id?: IntFilter<"UserSearch"> | number
    userId?: IntFilter<"UserSearch"> | number
    query?: StringFilter<"UserSearch"> | string
    searchedAt?: DateTimeFilter<"UserSearch"> | Date | string
  }

  export type UserCategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCategoryWhereUniqueInput
    update: XOR<UserCategoryUpdateWithoutUserInput, UserCategoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserCategoryCreateWithoutUserInput, UserCategoryUncheckedCreateWithoutUserInput>
  }

  export type UserCategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCategoryWhereUniqueInput
    data: XOR<UserCategoryUpdateWithoutUserInput, UserCategoryUncheckedUpdateWithoutUserInput>
  }

  export type UserCategoryUpdateManyWithWhereWithoutUserInput = {
    where: UserCategoryScalarWhereInput
    data: XOR<UserCategoryUpdateManyMutationInput, UserCategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCategoryScalarWhereInput = {
    AND?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
    OR?: UserCategoryScalarWhereInput[]
    NOT?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
    id?: IntFilter<"UserCategory"> | number
    userId?: IntFilter<"UserCategory"> | number
    category?: StringFilter<"UserCategory"> | string
    clickCount?: IntFilter<"UserCategory"> | number
    lastVisited?: DateTimeFilter<"UserCategory"> | Date | string
  }

  export type FlaggedReviewUpsertWithWhereUniqueWithoutFlaggedByInput = {
    where: FlaggedReviewWhereUniqueInput
    update: XOR<FlaggedReviewUpdateWithoutFlaggedByInput, FlaggedReviewUncheckedUpdateWithoutFlaggedByInput>
    create: XOR<FlaggedReviewCreateWithoutFlaggedByInput, FlaggedReviewUncheckedCreateWithoutFlaggedByInput>
  }

  export type FlaggedReviewUpdateWithWhereUniqueWithoutFlaggedByInput = {
    where: FlaggedReviewWhereUniqueInput
    data: XOR<FlaggedReviewUpdateWithoutFlaggedByInput, FlaggedReviewUncheckedUpdateWithoutFlaggedByInput>
  }

  export type FlaggedReviewUpdateManyWithWhereWithoutFlaggedByInput = {
    where: FlaggedReviewScalarWhereInput
    data: XOR<FlaggedReviewUpdateManyMutationInput, FlaggedReviewUncheckedUpdateManyWithoutFlaggedByInput>
  }

  export type FlaggedReviewScalarWhereInput = {
    AND?: FlaggedReviewScalarWhereInput | FlaggedReviewScalarWhereInput[]
    OR?: FlaggedReviewScalarWhereInput[]
    NOT?: FlaggedReviewScalarWhereInput | FlaggedReviewScalarWhereInput[]
    id?: IntFilter<"FlaggedReview"> | number
    reviewId?: IntFilter<"FlaggedReview"> | number
    flaggedById?: IntFilter<"FlaggedReview"> | number
    flagReason?: EnumFlagReasonFilter<"FlaggedReview"> | $Enums.FlagReason
    createdAt?: DateTimeFilter<"FlaggedReview"> | Date | string
    moderationStatus?: EnumModerationStatusFilter<"FlaggedReview"> | $Enums.ModerationStatus
  }

  export type UserReviewCreateWithoutProductInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    flags?: FlaggedReviewCreateNestedManyWithoutReviewInput
  }

  export type UserReviewUncheckedCreateWithoutProductInput = {
    id?: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    flags?: FlaggedReviewUncheckedCreateNestedManyWithoutReviewInput
  }

  export type UserReviewCreateOrConnectWithoutProductInput = {
    where: UserReviewWhereUniqueInput
    create: XOR<UserReviewCreateWithoutProductInput, UserReviewUncheckedCreateWithoutProductInput>
  }

  export type UserReviewCreateManyProductInputEnvelope = {
    data: UserReviewCreateManyProductInput | UserReviewCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserRecentlyViewedCreateWithoutProductInput = {
    viewedAt?: Date | string
    user: UserCreateNestedOneWithoutRecentlyViewedInput
  }

  export type UserRecentlyViewedUncheckedCreateWithoutProductInput = {
    id?: number
    userId: number
    viewedAt?: Date | string
  }

  export type UserRecentlyViewedCreateOrConnectWithoutProductInput = {
    where: UserRecentlyViewedWhereUniqueInput
    create: XOR<UserRecentlyViewedCreateWithoutProductInput, UserRecentlyViewedUncheckedCreateWithoutProductInput>
  }

  export type UserRecentlyViewedCreateManyProductInputEnvelope = {
    data: UserRecentlyViewedCreateManyProductInput | UserRecentlyViewedCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserHeartedProductCreateWithoutProductInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHeartedProductsInput
  }

  export type UserHeartedProductUncheckedCreateWithoutProductInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type UserHeartedProductCreateOrConnectWithoutProductInput = {
    where: UserHeartedProductWhereUniqueInput
    create: XOR<UserHeartedProductCreateWithoutProductInput, UserHeartedProductUncheckedCreateWithoutProductInput>
  }

  export type UserHeartedProductCreateManyProductInputEnvelope = {
    data: UserHeartedProductCreateManyProductInput | UserHeartedProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: UserReviewWhereUniqueInput
    update: XOR<UserReviewUpdateWithoutProductInput, UserReviewUncheckedUpdateWithoutProductInput>
    create: XOR<UserReviewCreateWithoutProductInput, UserReviewUncheckedCreateWithoutProductInput>
  }

  export type UserReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: UserReviewWhereUniqueInput
    data: XOR<UserReviewUpdateWithoutProductInput, UserReviewUncheckedUpdateWithoutProductInput>
  }

  export type UserReviewUpdateManyWithWhereWithoutProductInput = {
    where: UserReviewScalarWhereInput
    data: XOR<UserReviewUpdateManyMutationInput, UserReviewUncheckedUpdateManyWithoutProductInput>
  }

  export type UserRecentlyViewedUpsertWithWhereUniqueWithoutProductInput = {
    where: UserRecentlyViewedWhereUniqueInput
    update: XOR<UserRecentlyViewedUpdateWithoutProductInput, UserRecentlyViewedUncheckedUpdateWithoutProductInput>
    create: XOR<UserRecentlyViewedCreateWithoutProductInput, UserRecentlyViewedUncheckedCreateWithoutProductInput>
  }

  export type UserRecentlyViewedUpdateWithWhereUniqueWithoutProductInput = {
    where: UserRecentlyViewedWhereUniqueInput
    data: XOR<UserRecentlyViewedUpdateWithoutProductInput, UserRecentlyViewedUncheckedUpdateWithoutProductInput>
  }

  export type UserRecentlyViewedUpdateManyWithWhereWithoutProductInput = {
    where: UserRecentlyViewedScalarWhereInput
    data: XOR<UserRecentlyViewedUpdateManyMutationInput, UserRecentlyViewedUncheckedUpdateManyWithoutProductInput>
  }

  export type UserHeartedProductUpsertWithWhereUniqueWithoutProductInput = {
    where: UserHeartedProductWhereUniqueInput
    update: XOR<UserHeartedProductUpdateWithoutProductInput, UserHeartedProductUncheckedUpdateWithoutProductInput>
    create: XOR<UserHeartedProductCreateWithoutProductInput, UserHeartedProductUncheckedCreateWithoutProductInput>
  }

  export type UserHeartedProductUpdateWithWhereUniqueWithoutProductInput = {
    where: UserHeartedProductWhereUniqueInput
    data: XOR<UserHeartedProductUpdateWithoutProductInput, UserHeartedProductUncheckedUpdateWithoutProductInput>
  }

  export type UserHeartedProductUpdateManyWithWhereWithoutProductInput = {
    where: UserHeartedProductScalarWhereInput
    data: XOR<UserHeartedProductUpdateManyMutationInput, UserHeartedProductUncheckedUpdateManyWithoutProductInput>
  }

  export type UserCreateWithoutHeartedProductsInput = {
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: UserReviewCreateNestedManyWithoutUserInput
    recentlyViewed?: UserRecentlyViewedCreateNestedManyWithoutUserInput
    searches?: UserSearchCreateNestedManyWithoutUserInput
    categories?: UserCategoryCreateNestedManyWithoutUserInput
    flaggedReviews?: FlaggedReviewCreateNestedManyWithoutFlaggedByInput
  }

  export type UserUncheckedCreateWithoutHeartedProductsInput = {
    id?: number
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: UserReviewUncheckedCreateNestedManyWithoutUserInput
    recentlyViewed?: UserRecentlyViewedUncheckedCreateNestedManyWithoutUserInput
    searches?: UserSearchUncheckedCreateNestedManyWithoutUserInput
    categories?: UserCategoryUncheckedCreateNestedManyWithoutUserInput
    flaggedReviews?: FlaggedReviewUncheckedCreateNestedManyWithoutFlaggedByInput
  }

  export type UserCreateOrConnectWithoutHeartedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHeartedProductsInput, UserUncheckedCreateWithoutHeartedProductsInput>
  }

  export type ProductCreateWithoutHeartedByInput = {
    price: number
    description: string
    location: string
    link: string
    new_price_column: number
    deal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: UserReviewCreateNestedManyWithoutProductInput
    viewedBy?: UserRecentlyViewedCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutHeartedByInput = {
    id?: number
    price: number
    description: string
    location: string
    link: string
    new_price_column: number
    deal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: UserReviewUncheckedCreateNestedManyWithoutProductInput
    viewedBy?: UserRecentlyViewedUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutHeartedByInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutHeartedByInput, ProductUncheckedCreateWithoutHeartedByInput>
  }

  export type UserUpsertWithoutHeartedProductsInput = {
    update: XOR<UserUpdateWithoutHeartedProductsInput, UserUncheckedUpdateWithoutHeartedProductsInput>
    create: XOR<UserCreateWithoutHeartedProductsInput, UserUncheckedCreateWithoutHeartedProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHeartedProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHeartedProductsInput, UserUncheckedUpdateWithoutHeartedProductsInput>
  }

  export type UserUpdateWithoutHeartedProductsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: UserReviewUpdateManyWithoutUserNestedInput
    recentlyViewed?: UserRecentlyViewedUpdateManyWithoutUserNestedInput
    searches?: UserSearchUpdateManyWithoutUserNestedInput
    categories?: UserCategoryUpdateManyWithoutUserNestedInput
    flaggedReviews?: FlaggedReviewUpdateManyWithoutFlaggedByNestedInput
  }

  export type UserUncheckedUpdateWithoutHeartedProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: UserReviewUncheckedUpdateManyWithoutUserNestedInput
    recentlyViewed?: UserRecentlyViewedUncheckedUpdateManyWithoutUserNestedInput
    searches?: UserSearchUncheckedUpdateManyWithoutUserNestedInput
    categories?: UserCategoryUncheckedUpdateManyWithoutUserNestedInput
    flaggedReviews?: FlaggedReviewUncheckedUpdateManyWithoutFlaggedByNestedInput
  }

  export type ProductUpsertWithoutHeartedByInput = {
    update: XOR<ProductUpdateWithoutHeartedByInput, ProductUncheckedUpdateWithoutHeartedByInput>
    create: XOR<ProductCreateWithoutHeartedByInput, ProductUncheckedCreateWithoutHeartedByInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutHeartedByInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutHeartedByInput, ProductUncheckedUpdateWithoutHeartedByInput>
  }

  export type ProductUpdateWithoutHeartedByInput = {
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    new_price_column?: FloatFieldUpdateOperationsInput | number
    deal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: UserReviewUpdateManyWithoutProductNestedInput
    viewedBy?: UserRecentlyViewedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutHeartedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    new_price_column?: FloatFieldUpdateOperationsInput | number
    deal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: UserReviewUncheckedUpdateManyWithoutProductNestedInput
    viewedBy?: UserRecentlyViewedUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    heartedProducts?: UserHeartedProductCreateNestedManyWithoutUserInput
    recentlyViewed?: UserRecentlyViewedCreateNestedManyWithoutUserInput
    searches?: UserSearchCreateNestedManyWithoutUserInput
    categories?: UserCategoryCreateNestedManyWithoutUserInput
    flaggedReviews?: FlaggedReviewCreateNestedManyWithoutFlaggedByInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    heartedProducts?: UserHeartedProductUncheckedCreateNestedManyWithoutUserInput
    recentlyViewed?: UserRecentlyViewedUncheckedCreateNestedManyWithoutUserInput
    searches?: UserSearchUncheckedCreateNestedManyWithoutUserInput
    categories?: UserCategoryUncheckedCreateNestedManyWithoutUserInput
    flaggedReviews?: FlaggedReviewUncheckedCreateNestedManyWithoutFlaggedByInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ProductCreateWithoutReviewsInput = {
    price: number
    description: string
    location: string
    link: string
    new_price_column: number
    deal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viewedBy?: UserRecentlyViewedCreateNestedManyWithoutProductInput
    heartedBy?: UserHeartedProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutReviewsInput = {
    id?: number
    price: number
    description: string
    location: string
    link: string
    new_price_column: number
    deal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viewedBy?: UserRecentlyViewedUncheckedCreateNestedManyWithoutProductInput
    heartedBy?: UserHeartedProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutReviewsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
  }

  export type FlaggedReviewCreateWithoutReviewInput = {
    flagReason: $Enums.FlagReason
    createdAt?: Date | string
    moderationStatus?: $Enums.ModerationStatus
    flaggedBy: UserCreateNestedOneWithoutFlaggedReviewsInput
  }

  export type FlaggedReviewUncheckedCreateWithoutReviewInput = {
    id?: number
    flaggedById: number
    flagReason: $Enums.FlagReason
    createdAt?: Date | string
    moderationStatus?: $Enums.ModerationStatus
  }

  export type FlaggedReviewCreateOrConnectWithoutReviewInput = {
    where: FlaggedReviewWhereUniqueInput
    create: XOR<FlaggedReviewCreateWithoutReviewInput, FlaggedReviewUncheckedCreateWithoutReviewInput>
  }

  export type FlaggedReviewCreateManyReviewInputEnvelope = {
    data: FlaggedReviewCreateManyReviewInput | FlaggedReviewCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartedProducts?: UserHeartedProductUpdateManyWithoutUserNestedInput
    recentlyViewed?: UserRecentlyViewedUpdateManyWithoutUserNestedInput
    searches?: UserSearchUpdateManyWithoutUserNestedInput
    categories?: UserCategoryUpdateManyWithoutUserNestedInput
    flaggedReviews?: FlaggedReviewUpdateManyWithoutFlaggedByNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartedProducts?: UserHeartedProductUncheckedUpdateManyWithoutUserNestedInput
    recentlyViewed?: UserRecentlyViewedUncheckedUpdateManyWithoutUserNestedInput
    searches?: UserSearchUncheckedUpdateManyWithoutUserNestedInput
    categories?: UserCategoryUncheckedUpdateManyWithoutUserNestedInput
    flaggedReviews?: FlaggedReviewUncheckedUpdateManyWithoutFlaggedByNestedInput
  }

  export type ProductUpsertWithoutReviewsInput = {
    update: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductUpdateWithoutReviewsInput = {
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    new_price_column?: FloatFieldUpdateOperationsInput | number
    deal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewedBy?: UserRecentlyViewedUpdateManyWithoutProductNestedInput
    heartedBy?: UserHeartedProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    new_price_column?: FloatFieldUpdateOperationsInput | number
    deal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewedBy?: UserRecentlyViewedUncheckedUpdateManyWithoutProductNestedInput
    heartedBy?: UserHeartedProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type FlaggedReviewUpsertWithWhereUniqueWithoutReviewInput = {
    where: FlaggedReviewWhereUniqueInput
    update: XOR<FlaggedReviewUpdateWithoutReviewInput, FlaggedReviewUncheckedUpdateWithoutReviewInput>
    create: XOR<FlaggedReviewCreateWithoutReviewInput, FlaggedReviewUncheckedCreateWithoutReviewInput>
  }

  export type FlaggedReviewUpdateWithWhereUniqueWithoutReviewInput = {
    where: FlaggedReviewWhereUniqueInput
    data: XOR<FlaggedReviewUpdateWithoutReviewInput, FlaggedReviewUncheckedUpdateWithoutReviewInput>
  }

  export type FlaggedReviewUpdateManyWithWhereWithoutReviewInput = {
    where: FlaggedReviewScalarWhereInput
    data: XOR<FlaggedReviewUpdateManyMutationInput, FlaggedReviewUncheckedUpdateManyWithoutReviewInput>
  }

  export type UserCreateWithoutRecentlyViewedInput = {
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    heartedProducts?: UserHeartedProductCreateNestedManyWithoutUserInput
    reviews?: UserReviewCreateNestedManyWithoutUserInput
    searches?: UserSearchCreateNestedManyWithoutUserInput
    categories?: UserCategoryCreateNestedManyWithoutUserInput
    flaggedReviews?: FlaggedReviewCreateNestedManyWithoutFlaggedByInput
  }

  export type UserUncheckedCreateWithoutRecentlyViewedInput = {
    id?: number
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    heartedProducts?: UserHeartedProductUncheckedCreateNestedManyWithoutUserInput
    reviews?: UserReviewUncheckedCreateNestedManyWithoutUserInput
    searches?: UserSearchUncheckedCreateNestedManyWithoutUserInput
    categories?: UserCategoryUncheckedCreateNestedManyWithoutUserInput
    flaggedReviews?: FlaggedReviewUncheckedCreateNestedManyWithoutFlaggedByInput
  }

  export type UserCreateOrConnectWithoutRecentlyViewedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecentlyViewedInput, UserUncheckedCreateWithoutRecentlyViewedInput>
  }

  export type ProductCreateWithoutViewedByInput = {
    price: number
    description: string
    location: string
    link: string
    new_price_column: number
    deal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: UserReviewCreateNestedManyWithoutProductInput
    heartedBy?: UserHeartedProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutViewedByInput = {
    id?: number
    price: number
    description: string
    location: string
    link: string
    new_price_column: number
    deal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: UserReviewUncheckedCreateNestedManyWithoutProductInput
    heartedBy?: UserHeartedProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutViewedByInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutViewedByInput, ProductUncheckedCreateWithoutViewedByInput>
  }

  export type UserUpsertWithoutRecentlyViewedInput = {
    update: XOR<UserUpdateWithoutRecentlyViewedInput, UserUncheckedUpdateWithoutRecentlyViewedInput>
    create: XOR<UserCreateWithoutRecentlyViewedInput, UserUncheckedCreateWithoutRecentlyViewedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecentlyViewedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecentlyViewedInput, UserUncheckedUpdateWithoutRecentlyViewedInput>
  }

  export type UserUpdateWithoutRecentlyViewedInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartedProducts?: UserHeartedProductUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUpdateManyWithoutUserNestedInput
    searches?: UserSearchUpdateManyWithoutUserNestedInput
    categories?: UserCategoryUpdateManyWithoutUserNestedInput
    flaggedReviews?: FlaggedReviewUpdateManyWithoutFlaggedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRecentlyViewedInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartedProducts?: UserHeartedProductUncheckedUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUncheckedUpdateManyWithoutUserNestedInput
    searches?: UserSearchUncheckedUpdateManyWithoutUserNestedInput
    categories?: UserCategoryUncheckedUpdateManyWithoutUserNestedInput
    flaggedReviews?: FlaggedReviewUncheckedUpdateManyWithoutFlaggedByNestedInput
  }

  export type ProductUpsertWithoutViewedByInput = {
    update: XOR<ProductUpdateWithoutViewedByInput, ProductUncheckedUpdateWithoutViewedByInput>
    create: XOR<ProductCreateWithoutViewedByInput, ProductUncheckedCreateWithoutViewedByInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutViewedByInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutViewedByInput, ProductUncheckedUpdateWithoutViewedByInput>
  }

  export type ProductUpdateWithoutViewedByInput = {
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    new_price_column?: FloatFieldUpdateOperationsInput | number
    deal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: UserReviewUpdateManyWithoutProductNestedInput
    heartedBy?: UserHeartedProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutViewedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    new_price_column?: FloatFieldUpdateOperationsInput | number
    deal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: UserReviewUncheckedUpdateManyWithoutProductNestedInput
    heartedBy?: UserHeartedProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutSearchesInput = {
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    heartedProducts?: UserHeartedProductCreateNestedManyWithoutUserInput
    reviews?: UserReviewCreateNestedManyWithoutUserInput
    recentlyViewed?: UserRecentlyViewedCreateNestedManyWithoutUserInput
    categories?: UserCategoryCreateNestedManyWithoutUserInput
    flaggedReviews?: FlaggedReviewCreateNestedManyWithoutFlaggedByInput
  }

  export type UserUncheckedCreateWithoutSearchesInput = {
    id?: number
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    heartedProducts?: UserHeartedProductUncheckedCreateNestedManyWithoutUserInput
    reviews?: UserReviewUncheckedCreateNestedManyWithoutUserInput
    recentlyViewed?: UserRecentlyViewedUncheckedCreateNestedManyWithoutUserInput
    categories?: UserCategoryUncheckedCreateNestedManyWithoutUserInput
    flaggedReviews?: FlaggedReviewUncheckedCreateNestedManyWithoutFlaggedByInput
  }

  export type UserCreateOrConnectWithoutSearchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSearchesInput, UserUncheckedCreateWithoutSearchesInput>
  }

  export type UserUpsertWithoutSearchesInput = {
    update: XOR<UserUpdateWithoutSearchesInput, UserUncheckedUpdateWithoutSearchesInput>
    create: XOR<UserCreateWithoutSearchesInput, UserUncheckedCreateWithoutSearchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSearchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSearchesInput, UserUncheckedUpdateWithoutSearchesInput>
  }

  export type UserUpdateWithoutSearchesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartedProducts?: UserHeartedProductUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUpdateManyWithoutUserNestedInput
    recentlyViewed?: UserRecentlyViewedUpdateManyWithoutUserNestedInput
    categories?: UserCategoryUpdateManyWithoutUserNestedInput
    flaggedReviews?: FlaggedReviewUpdateManyWithoutFlaggedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSearchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartedProducts?: UserHeartedProductUncheckedUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUncheckedUpdateManyWithoutUserNestedInput
    recentlyViewed?: UserRecentlyViewedUncheckedUpdateManyWithoutUserNestedInput
    categories?: UserCategoryUncheckedUpdateManyWithoutUserNestedInput
    flaggedReviews?: FlaggedReviewUncheckedUpdateManyWithoutFlaggedByNestedInput
  }

  export type UserCreateWithoutCategoriesInput = {
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    heartedProducts?: UserHeartedProductCreateNestedManyWithoutUserInput
    reviews?: UserReviewCreateNestedManyWithoutUserInput
    recentlyViewed?: UserRecentlyViewedCreateNestedManyWithoutUserInput
    searches?: UserSearchCreateNestedManyWithoutUserInput
    flaggedReviews?: FlaggedReviewCreateNestedManyWithoutFlaggedByInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: number
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    heartedProducts?: UserHeartedProductUncheckedCreateNestedManyWithoutUserInput
    reviews?: UserReviewUncheckedCreateNestedManyWithoutUserInput
    recentlyViewed?: UserRecentlyViewedUncheckedCreateNestedManyWithoutUserInput
    searches?: UserSearchUncheckedCreateNestedManyWithoutUserInput
    flaggedReviews?: FlaggedReviewUncheckedCreateNestedManyWithoutFlaggedByInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartedProducts?: UserHeartedProductUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUpdateManyWithoutUserNestedInput
    recentlyViewed?: UserRecentlyViewedUpdateManyWithoutUserNestedInput
    searches?: UserSearchUpdateManyWithoutUserNestedInput
    flaggedReviews?: FlaggedReviewUpdateManyWithoutFlaggedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartedProducts?: UserHeartedProductUncheckedUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUncheckedUpdateManyWithoutUserNestedInput
    recentlyViewed?: UserRecentlyViewedUncheckedUpdateManyWithoutUserNestedInput
    searches?: UserSearchUncheckedUpdateManyWithoutUserNestedInput
    flaggedReviews?: FlaggedReviewUncheckedUpdateManyWithoutFlaggedByNestedInput
  }

  export type UserReviewCreateWithoutFlagsInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type UserReviewUncheckedCreateWithoutFlagsInput = {
    id?: number
    userId: number
    productId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type UserReviewCreateOrConnectWithoutFlagsInput = {
    where: UserReviewWhereUniqueInput
    create: XOR<UserReviewCreateWithoutFlagsInput, UserReviewUncheckedCreateWithoutFlagsInput>
  }

  export type UserCreateWithoutFlaggedReviewsInput = {
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    heartedProducts?: UserHeartedProductCreateNestedManyWithoutUserInput
    reviews?: UserReviewCreateNestedManyWithoutUserInput
    recentlyViewed?: UserRecentlyViewedCreateNestedManyWithoutUserInput
    searches?: UserSearchCreateNestedManyWithoutUserInput
    categories?: UserCategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlaggedReviewsInput = {
    id?: number
    userId: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    updatedAt?: Date | string
    heartedProducts?: UserHeartedProductUncheckedCreateNestedManyWithoutUserInput
    reviews?: UserReviewUncheckedCreateNestedManyWithoutUserInput
    recentlyViewed?: UserRecentlyViewedUncheckedCreateNestedManyWithoutUserInput
    searches?: UserSearchUncheckedCreateNestedManyWithoutUserInput
    categories?: UserCategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlaggedReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlaggedReviewsInput, UserUncheckedCreateWithoutFlaggedReviewsInput>
  }

  export type UserReviewUpsertWithoutFlagsInput = {
    update: XOR<UserReviewUpdateWithoutFlagsInput, UserReviewUncheckedUpdateWithoutFlagsInput>
    create: XOR<UserReviewCreateWithoutFlagsInput, UserReviewUncheckedCreateWithoutFlagsInput>
    where?: UserReviewWhereInput
  }

  export type UserReviewUpdateToOneWithWhereWithoutFlagsInput = {
    where?: UserReviewWhereInput
    data: XOR<UserReviewUpdateWithoutFlagsInput, UserReviewUncheckedUpdateWithoutFlagsInput>
  }

  export type UserReviewUpdateWithoutFlagsInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type UserReviewUncheckedUpdateWithoutFlagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutFlaggedReviewsInput = {
    update: XOR<UserUpdateWithoutFlaggedReviewsInput, UserUncheckedUpdateWithoutFlaggedReviewsInput>
    create: XOR<UserCreateWithoutFlaggedReviewsInput, UserUncheckedCreateWithoutFlaggedReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlaggedReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlaggedReviewsInput, UserUncheckedUpdateWithoutFlaggedReviewsInput>
  }

  export type UserUpdateWithoutFlaggedReviewsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartedProducts?: UserHeartedProductUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUpdateManyWithoutUserNestedInput
    recentlyViewed?: UserRecentlyViewedUpdateManyWithoutUserNestedInput
    searches?: UserSearchUpdateManyWithoutUserNestedInput
    categories?: UserCategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlaggedReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartedProducts?: UserHeartedProductUncheckedUpdateManyWithoutUserNestedInput
    reviews?: UserReviewUncheckedUpdateManyWithoutUserNestedInput
    recentlyViewed?: UserRecentlyViewedUncheckedUpdateManyWithoutUserNestedInput
    searches?: UserSearchUncheckedUpdateManyWithoutUserNestedInput
    categories?: UserCategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserHeartedProductCreateManyUserInput = {
    id?: number
    productId: number
    createdAt?: Date | string
  }

  export type UserReviewCreateManyUserInput = {
    id?: number
    productId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type UserRecentlyViewedCreateManyUserInput = {
    id?: number
    productId: number
    viewedAt?: Date | string
  }

  export type UserSearchCreateManyUserInput = {
    id?: number
    query: string
    searchedAt?: Date | string
  }

  export type UserCategoryCreateManyUserInput = {
    id?: number
    category: string
    clickCount?: number
    lastVisited?: Date | string
  }

  export type FlaggedReviewCreateManyFlaggedByInput = {
    id?: number
    reviewId: number
    flagReason: $Enums.FlagReason
    createdAt?: Date | string
    moderationStatus?: $Enums.ModerationStatus
  }

  export type UserHeartedProductUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutHeartedByNestedInput
  }

  export type UserHeartedProductUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHeartedProductUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
    flags?: FlaggedReviewUpdateManyWithoutReviewNestedInput
  }

  export type UserReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: FlaggedReviewUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type UserReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRecentlyViewedUpdateWithoutUserInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutViewedByNestedInput
  }

  export type UserRecentlyViewedUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRecentlyViewedUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSearchUpdateWithoutUserInput = {
    query?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSearchUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    query?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSearchUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    query?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryUpdateWithoutUserInput = {
    category?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlaggedReviewUpdateWithoutFlaggedByInput = {
    flagReason?: EnumFlagReasonFieldUpdateOperationsInput | $Enums.FlagReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    review?: UserReviewUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type FlaggedReviewUncheckedUpdateWithoutFlaggedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
    flagReason?: EnumFlagReasonFieldUpdateOperationsInput | $Enums.FlagReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
  }

  export type FlaggedReviewUncheckedUpdateManyWithoutFlaggedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
    flagReason?: EnumFlagReasonFieldUpdateOperationsInput | $Enums.FlagReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
  }

  export type UserReviewCreateManyProductInput = {
    id?: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type UserRecentlyViewedCreateManyProductInput = {
    id?: number
    userId: number
    viewedAt?: Date | string
  }

  export type UserHeartedProductCreateManyProductInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type UserReviewUpdateWithoutProductInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    flags?: FlaggedReviewUpdateManyWithoutReviewNestedInput
  }

  export type UserReviewUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: FlaggedReviewUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type UserReviewUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRecentlyViewedUpdateWithoutProductInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecentlyViewedNestedInput
  }

  export type UserRecentlyViewedUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRecentlyViewedUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHeartedProductUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHeartedProductsNestedInput
  }

  export type UserHeartedProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHeartedProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlaggedReviewCreateManyReviewInput = {
    id?: number
    flaggedById: number
    flagReason: $Enums.FlagReason
    createdAt?: Date | string
    moderationStatus?: $Enums.ModerationStatus
  }

  export type FlaggedReviewUpdateWithoutReviewInput = {
    flagReason?: EnumFlagReasonFieldUpdateOperationsInput | $Enums.FlagReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedBy?: UserUpdateOneRequiredWithoutFlaggedReviewsNestedInput
  }

  export type FlaggedReviewUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    flaggedById?: IntFieldUpdateOperationsInput | number
    flagReason?: EnumFlagReasonFieldUpdateOperationsInput | $Enums.FlagReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
  }

  export type FlaggedReviewUncheckedUpdateManyWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    flaggedById?: IntFieldUpdateOperationsInput | number
    flagReason?: EnumFlagReasonFieldUpdateOperationsInput | $Enums.FlagReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
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