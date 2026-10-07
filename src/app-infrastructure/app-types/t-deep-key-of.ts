type TPrimitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | null
  | undefined
  | Date;

type IsAny<T> = 0 extends 1 & T ? true : false;

/** KnownKeys: убирает индексные сигнатуры */
type KnownKeys<T> = keyof {
  [K in keyof T as K extends string
    ? string extends K
      ? never
      : K
    : K extends number
      ? number extends K
        ? never
        : K
      : never]: unknown;
} &
  (string | number);

/** Уменьшение глубины (простая реализация) */
type PrevDepth<D extends number> = D extends 10
  ? 9
  : D extends 9
    ? 8
    : D extends 8
      ? 7
      : D extends 7
        ? 6
        : D extends 6
          ? 5
          : D extends 5
            ? 4
            : D extends 4
              ? 3
              : D extends 3
                ? 2
                : D extends 2
                  ? 1
                  : D extends 1
                    ? 0
                    : 0;

export type TDeepKeyOf<T, Depth extends number = 10> =
  IsAny<T> extends true
    ? string
    : [Depth] extends [0]
      ? never
      : T extends TPrimitive
        ? never
        : T extends readonly (infer U)[]
          ? TDeepKeyOf<U, Depth>
          : T extends object
            ? {
                [K in KnownKeys<T>]:
                  | `${K}`
                  | (T[K] extends TPrimitive
                      ? never
                      : `${K}.${TDeepKeyOf<T[K], PrevDepth<Depth>>}`);
              }[KnownKeys<T>]
            : never;
