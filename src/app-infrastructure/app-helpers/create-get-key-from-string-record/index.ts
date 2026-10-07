import type TypeGuard from '../../app-types/type-guard';

const createGetKeyFromStringRecord = <
  K extends string,
  T extends Record<K, V>,
  V extends string = T[keyof T]
>(
  record: T,
  isKey: TypeGuard<K>
) => {
  return (value: V): K | null => {
    const nameKey = Object.entries(record).find(([key, item]) => {
      return item === value;
    })?.[0];
    if (nameKey && isKey(nameKey)) return nameKey;
    return null;
  };
};

export default createGetKeyFromStringRecord;
