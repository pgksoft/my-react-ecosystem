import { SxProps, Theme } from '@mui/material';
import {
  ColumnType,
  TColumnCalendar,
  TColumnCheckboxSearch,
  TColumnOnlyTitle,
  TColumnStingSearch
} from './t-column-schemas';
import { TDataTable, TValueType } from './t-data-table';

export type IGetContent = (
  value: TValueType,
  data?: TDataTable,
  isDialog?: boolean
) => TValueType;

type TColumnSchemaBase = {
  title: string;
  key: string;
  dataKey: string;
  nameGetParameter?: string;
  isSort?: boolean;
  sx?: SxProps<Theme>;
  getContent?: IGetContent;
};

export type TColumnSchemas = {
  [ColumnType.search]: TColumnSchemaBase & TColumnStingSearch;
  [ColumnType.checkBox]: TColumnSchemaBase & TColumnCheckboxSearch;
  [ColumnType.calendar]: TColumnSchemaBase & TColumnCalendar;
  [ColumnType.null]: TColumnSchemaBase & TColumnOnlyTitle;
};

export type TColumnSchema = TColumnSchemas[keyof TColumnSchemas];

export type TTableSchema = TColumnSchema[];
