import type { TColumnCheckboxItems } from '../../../../../../table-types/t-column-schemas';

export const initValuesCheckbox = (
  inCheckboxes: TColumnCheckboxItems,
  searchParam: TColumnCheckboxItems
): TColumnCheckboxItems => {
  return inCheckboxes.map(({ key, title }) => {
    const isKey = searchParam.some((item) => {
      return item.key === key;
    });
    return {
      key,
      title,
      value: isKey
    };
  });
};
