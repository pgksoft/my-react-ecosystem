import { TColumnCheckboxItems } from '../../../../../../table-types/t-column-schemas';

const trueValues = (checkboxes: TColumnCheckboxItems | undefined) => {
  if (!Array.isArray(checkboxes)) {
    return [];
  }
  return checkboxes
    .map(({ value, key: id }) => {
      if (value === true) {
        return id;
      }
      return '';
    })
    .filter((value) => {
      return value;
    });
};

export default trueValues;
