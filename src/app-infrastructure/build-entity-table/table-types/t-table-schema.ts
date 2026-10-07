import { SxProps, Theme } from '@mui/material';
import type {
  TColumnCalendar,
  TColumnCheckboxSearch,
  TColumnOnlyTitle,
  TColumnStingSearch,
  TColumnFixedNumericalRanges
} from './t-column-schemas';
import type { TDataTable, TValueType } from './t-data-table';
import { SORT_MARKER } from '../const/title';

export type IGetContent = (
  value: TValueType,
  data?: TDataTable,
  isDialog?: boolean
) => TValueType;

type TColumnSchemaBase<T> = {
  title: string;
  key: string;
  dataKey: T;
  nameGetParameter?: T | string;
  isSort?: boolean;
  sx?: SxProps<Theme>;
  getContent?: IGetContent;
};

export type TSearchColumnSchemas<T> = {
  search: TColumnSchemaBase<T> & TColumnStingSearch;
  checkBox: TColumnSchemaBase<T> & TColumnCheckboxSearch;
  calendar: TColumnSchemaBase<T> & TColumnCalendar;
  'fixed-set-numerical-ranges': TColumnSchemaBase<T> &
    TColumnFixedNumericalRanges;
};

export type TSearchColumnSchema<T> =
  TSearchColumnSchemas<T>[keyof TSearchColumnSchemas<T>];

export type TColumnSchemas<T> = TSearchColumnSchemas<T> & {
  null: TColumnSchemaBase<T> & TColumnOnlyTitle;
};

export type TColumnSchema<T> = TColumnSchemas<T>[keyof TColumnSchemas<T>];

export type TTableSchema<T> = TColumnSchema<T>[];

export type TExtractTableSchemaSearchKeys<T extends TTableSchema<string>> = {
  [K in keyof T]: T[K] extends { type: 'null' }
    ? never
    : T[K] extends { nameGetParameter?: infer N; dataKey: infer D }
      ? N extends string
        ? N
        : D extends string
          ? D
          : never
      : never;
}[number];

export type TTableSchemaSearchParams<T extends TTableSchema<string>> = {
  [C in T[number] as C extends { type: infer TT }
    ? TT extends 'null'
      ? never
      : TKeyFromColumn<C>
    : never]?: TSearchValueForColumn<C>;
};

export type TTableSchemaSearchParamKeys<T extends readonly unknown[]> = {
  // для каждой колонки, у которой есть ключ (и type !== 'null'), создаём поле с типом tuple параметров
  [C in T[number] as C extends { type: infer TT }
    ? TT extends 'null'
      ? never
      : TKeyFromColumn<C> extends infer K
        ? K extends string
          ? K
          : never
        : never
    : never]: ParamTupleForColumn<C>;
};

export type TTableSchemaSortParamKeys<T extends readonly unknown[]> = {
  [C in T[number] as C extends { isSort: true }
    ? TKeySortFromColumn<C> extends infer K
      ? K extends string
        ? K
        : never
      : never
    : never]: ParamSortForColumn<C>;
};

// Helpers
type TSearchValueForColumn<C> = C extends { type: infer TT }
  ? TT extends 'search'
    ? TColumnStingSearch
    : TT extends 'checkBox'
      ? TColumnCheckboxSearch
      : TT extends 'calendar'
        ? TColumnCalendar
        : TT extends 'fixed-set-numerical-ranges'
          ? TColumnFixedNumericalRanges
          : never
  : never;

type ParamTupleForColumn<C> = C extends { type: infer TT }
  ? TT extends 'search'
    ? readonly [TKeyFromColumn<C>]
    : TT extends 'checkBox'
      ? readonly [`${TKeyFromColumn<C>}[]`]
      : TT extends 'calendar'
        ? readonly [`${TKeyFromColumn<C>}[gt]`, `${TKeyFromColumn<C>}[lt]`]
        : TT extends 'fixed-set-numerical-ranges'
          ? readonly [`${TKeyFromColumn<C>}[gte]`, `${TKeyFromColumn<C>}[lte]`]
          : never
  : never;

type TKeyFromColumn<C> = C extends {
  nameGetParameter?: infer N;
  dataKey: infer D;
}
  ? N extends string
    ? N
    : D extends string
      ? D
      : never
  : never;

type ParamSortForColumn<C> = C extends { isSort: true }
  ? readonly [`${typeof SORT_MARKER}[${TKeySortFromColumn<C>}]`]
  : never;

type TKeySortFromColumn<C> = C extends {
  dataKey: infer D;
}
  ? D extends string
    ? D
    : never
  : never;
