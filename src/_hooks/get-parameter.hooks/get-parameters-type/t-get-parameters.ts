export type TGetParameter =
  | string
  | number
  | boolean
  | string[]
  | (string | null)[]
  | null
  | undefined;

export type TGetParameters = Record<string, TGetParameter>;
