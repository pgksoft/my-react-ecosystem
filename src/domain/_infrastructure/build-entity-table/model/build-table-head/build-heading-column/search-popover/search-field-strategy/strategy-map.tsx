import React from 'react';
import { ColumnType } from '../../../../../table-types/t-column-schemas';
import {
  TColumnSchema,
  TColumnSchemas
} from '../../../../../table-types/t-table-schema';
import { SearchDate } from '../search-popover-components/search-date';
import { SearchListCheckbox } from '../search-popover-components/search-list-checkbox';
import { SearchTextField } from '../search-popover-components/search-text-field';

export type TStrategyFn<T extends TColumnSchema> = (props: {
  columnSchema: T;
  dataKey: string;
  title: string;
}) => JSX.Element;

export type TValidTypes = Exclude<keyof TColumnSchemas, ColumnType.null>;

export type TStrategyMap = {
  [K in TValidTypes]: TStrategyFn<TColumnSchemas[K]>;
};

export function createStrategyMap<T extends TStrategyMap>(map: T): T {
  return map;
}

export const strategyMap = createStrategyMap({
  [ColumnType.search]: ({ columnSchema, dataKey, title }) => {
    return (
      <SearchTextField
        dataKey={dataKey}
        inValue={columnSchema.valueSearch}
        text={title}
      />
    );
  },
  [ColumnType.checkBox]: ({ columnSchema, dataKey, title }) => {
    return (
      <SearchListCheckbox
        dataKey={dataKey}
        inCheckboxes={columnSchema.checkboxes}
        text={title}
      />
    );
  },
  [ColumnType.calendar]: ({ columnSchema, dataKey, title }) => {
    return (
      <SearchDate
        dataKey={dataKey}
        inDateValue={columnSchema.dateSearch}
        text={title}
      />
    );
  }
});
