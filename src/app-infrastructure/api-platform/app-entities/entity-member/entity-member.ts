import isArrayOfTypePredicate from '../../../app-helpers/is-array-of-type-predicate';
import type TypeGuard from '../../../app-types/type-guard';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface IEntityMember extends Record<string, unknown> {
  id: string;
}

export const isEntityMember: TypeGuard<IEntityMember> = (
  value
): value is IEntityMember => {
  return (
    value !== null &&
    typeof value === 'object' &&
    'id' in value &&
    typeof value.id === 'string'
  );
};

export const isEntityMemberArray = isArrayOfTypePredicate(isEntityMember);
