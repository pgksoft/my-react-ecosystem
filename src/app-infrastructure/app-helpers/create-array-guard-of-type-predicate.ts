import TypeGuard from '../app-types/type-guard';

const createArrayGuardOfTypePredicate = <T>(
  itemCheck: TypeGuard<T>
): TypeGuard<T[]> => {
  return (value: unknown): value is T[] => {
    return Array.isArray(value) && value.every(itemCheck);
  };
};

export default createArrayGuardOfTypePredicate;
