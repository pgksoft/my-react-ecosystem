import { TDataRecord } from '../../../table-types/t-data-table';

const getMaxItemsInFieldValue = (obj: TDataRecord) => {
  let max = 0;
  const valueFields = Object.values(obj);

  valueFields.forEach((values) => {
    if (values.length && values.length > max) {
      max = values.length;
    }
  });
  return max;
};

export default getMaxItemsInFieldValue;
