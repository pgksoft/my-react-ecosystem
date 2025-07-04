import { IEntityMember } from '../../api-platform/app-entities/entity-member/entity-member';
import TypeGuard from '../../types/type-guard';
import { TDataRecord } from '../table-types/t-data-table';

export const isEntityMember: TypeGuard<IEntityMember> = (
  value
): value is IEntityMember => {
  return (
    value !== null &&
    typeof value === 'object' &&
    'id' in value &&
    typeof (value as TDataRecord).id === 'string'
  );
};
