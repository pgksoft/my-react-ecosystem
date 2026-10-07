import { TColumnCheckboxItems } from '../table-types/t-column-schemas';
import { TTableSchema } from '../table-types/t-table-schema';

export const defineItemsCheckboxColumn = <
  TKeyEntity extends string,
  T extends TTableSchema<TKeyEntity>
>(
  strTable: T,
  checkboxItems: TColumnCheckboxItems,
  itemKey: TKeyEntity
): TTableSchema<TKeyEntity> => {
  const columnCheckboxSchema = strTable.find((columnSchema) => {
    return columnSchema.dataKey === itemKey;
  });
  if (columnCheckboxSchema && columnCheckboxSchema.type === 'checkBox') {
    columnCheckboxSchema.checkboxes = [...checkboxItems];
  }
  return strTable;
};
