import React, { type ReactNode } from 'react';
import {
  TColumnSchema,
  TColumnSchemas
} from '../../../../../table-types/t-table-schema';
import { SearchDate } from '../search-popover-components/search-date';
import { SearchListCheckbox } from '../search-popover-components/search-list-checkbox';
import { SearchTextField } from '../search-popover-components/search-text-field';
import { SearchFixedNumRanges } from '../search-popover-components/search-fixed-num-ranges';
import TEntityNameKeys from '../../../../../../api-platform/app-entities/app-entities-types/t-entity-key-names';

export type TStrategyFn<T extends TColumnSchema<string>> = (props: {
  entityNameKey: TEntityNameKeys;
  columnSchema: T;
  handleClose: () => void;
}) => ReactNode;

export type TValidTypes = Exclude<keyof TColumnSchemas<string>, 'null'>;

export type TStrategyMap = {
  [K in TValidTypes]: TStrategyFn<TColumnSchemas<string>[K]>;
};

export function createStrategySearchMap<T extends TStrategyMap>(map: T): T {
  return map;
}

const getDataKey = (columnSchema: TColumnSchema<string>): string => {
  return columnSchema.nameGetParameter ?? columnSchema.dataKey;
};

export const strategySearchMap = createStrategySearchMap({
  search: ({ entityNameKey, columnSchema, handleClose }) => {
    return (
      <SearchTextField
        entityNameKey={entityNameKey}
        dataKey={getDataKey(columnSchema)}
        inValue={columnSchema.valueSearch}
        text={columnSchema.title}
        handleClose={handleClose}
      />
    );
  },
  checkBox: ({ entityNameKey, columnSchema, handleClose }) => {
    return (
      <SearchListCheckbox
        entityNameKey={entityNameKey}
        dataKey={getDataKey(columnSchema)}
        inCheckboxes={columnSchema.checkboxes}
        text={columnSchema.title}
        handleClose={handleClose}
      />
    );
  },
  calendar: ({ entityNameKey, columnSchema, handleClose }) => {
    return (
      <SearchDate
        entityNameKey={entityNameKey}
        dataKey={getDataKey(columnSchema)}
        inDateValue={columnSchema.dateSearch}
        text={columnSchema.title}
        handleClose={handleClose}
      />
    );
  },
  'fixed-set-numerical-ranges': ({
    entityNameKey,
    columnSchema,
    handleClose
  }) => {
    return (
      <SearchFixedNumRanges
        entityNameKey={entityNameKey}
        dataKey={getDataKey(columnSchema)}
        inFixedNumRangesValue={columnSchema.ranges}
        text={columnSchema.title}
        handleClose={handleClose}
      />
    );
  }
});
