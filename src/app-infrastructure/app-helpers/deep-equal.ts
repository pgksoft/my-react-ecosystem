import { TDataRecord } from '../build-entity-table/table-types/t-data-table';

const deepEqual = (a: unknown, b: unknown): boolean => {
  if (a === b) return true;

  if (typeof a !== typeof b) return false;
  if (a === null || b === null) return a === b;

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((item, i) => {
      return deepEqual(item, b[i]);
    });
  }

  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every((key) => {
      return deepEqual((a as TDataRecord)[key], (b as TDataRecord)[key]);
    });
  }

  return false;
};

export default deepEqual;
