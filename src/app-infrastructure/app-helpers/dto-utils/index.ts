import type { IEntityMember } from '../../api-platform/app-entities/entity-member/entity-member';
import type TUnknownRecord from '../../app-types/t-unknown-record';
import type TypeGuard from '../../app-types/type-guard';

export const getInitialDetailDto = <
  TDto extends object,
  TEntity extends IEntityMember
>(
  entity: unknown,
  isEntity: TypeGuard<TEntity>,
  getInitialDto: () => TDto,
  transform?: (entity: TEntity) => TDto
): TDto => {
  if (isEntity(entity)) {
    if (transform) return transform(entity);
    const { id, ...rest } = entity;
    return rest as TDto;
  }
  return getInitialDto();
};

export const createKeyNames = <T extends TUnknownRecord>(
  obj: T
): { [K in keyof T]: K } => {
  const res: Record<string, string> = {};
  Object.keys(obj).forEach((k) => {
    res[k as string] = k as string;
  });
  return res as { [K in keyof T]: K };
};
