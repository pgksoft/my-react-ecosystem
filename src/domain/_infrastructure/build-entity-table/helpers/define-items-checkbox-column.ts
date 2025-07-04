import {
  ColumnType,
  TColumnCheckboxItems
} from '../table-types/t-column-schemas';
import { TTableSchema } from '../table-types/t-table-schema';

export const defineItemsCheckboxColumn = (
  strTable: TTableSchema,
  checkboxItems: TColumnCheckboxItems,
  itemKey: string
): TTableSchema => {
  const columnCheckboxSchema = strTable.find((columnSchema) => {
    return columnSchema.dataKey === itemKey;
  });
  if (
    columnCheckboxSchema &&
    columnCheckboxSchema.type === ColumnType.checkBox
  ) {
    columnCheckboxSchema.checkboxes = [...checkboxItems];
  }
  return strTable;
};
