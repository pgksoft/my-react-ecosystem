export type TGetParameter =
  | string
  | boolean
  | string[]
  | (string | null)[]
  | null
  | undefined;

export type TGetParameters = Record<string, TGetParameter>;
