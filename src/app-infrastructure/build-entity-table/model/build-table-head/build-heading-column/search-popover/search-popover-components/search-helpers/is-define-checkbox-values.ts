import type { TColumnCheckboxItem } from '../../../../../../table-types/t-column-schemas';

export const isDefineCheckboxValues = (
  checkboxes: TColumnCheckboxItem[]
): boolean => {
  if (checkboxes.length === 0) return false;
  return checkboxes.some((item) => {
    return item.value === true;
  });
};
