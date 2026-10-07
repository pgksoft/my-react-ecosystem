import type TypeGuard from '../../app-types/type-guard';

const createIsStringRecordValueGuard = <
  T extends Record<string, V>,
  V extends string = T[keyof T]
>(
  record: T
): TypeGuard<V> => {
  const valuesSet = new Set<string>(Object.values(record) as string[]);
  return (value: unknown): value is V => {
    return typeof value === 'string' && valuesSet.has(value);
  };
};

export default createIsStringRecordValueGuard;
