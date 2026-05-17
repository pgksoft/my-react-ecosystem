import {
  ColumnType,
  TColumnCheckboxItems
} from '../table-types/t-column-schemas';
import {
  TTableSchema,
  type TExtractTableSchemaDataKeys
} from '../table-types/t-table-schema';

export const defineItemsCheckboxColumn = <
  T extends TTableSchema,
  K extends TExtractTableSchemaDataKeys<T>
>(
  strTable: T,
  checkboxItems: TColumnCheckboxItems,
  itemKey: K
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
