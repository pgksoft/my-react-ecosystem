import {
  isEntityMember,
  type IEntityMember
} from '../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import createIsUnknownRecordKeyGuard from '../../../../app-infrastructure/app-helpers/create-is-unknown-record-key-guard';
import {
  createKeyNames,
  getInitialDetailDto
} from '../../../../app-infrastructure/app-helpers/dto-utils';
import type TValueOf from '../../../../app-infrastructure/app-types/t-value-of';
import type TypeGuard from '../../../../app-infrastructure/app-types/type-guard';

export type TProductCategory = {
  name: string;
  mutationDate: string;
} & IEntityMember;

export const isProductCategory: TypeGuard<TProductCategory> = (
  value
): value is TProductCategory => {
  return (
    isEntityMember(value) &&
    'name' in value &&
    typeof value.name === 'string' &&
    'mutationDate' in value &&
    typeof value.mutationDate === 'string'
  );
};

export type TProductCategoryDto = Pick<TProductCategory, 'name'>;

export const getInitialProductCategoryDto = (): TProductCategoryDto => {
  return { name: '' };
};

export const getInitialDetailProductCategoryDto = (entity: IEntityMember) => {
  return getInitialDetailDto(
    entity,
    isProductCategory,
    getInitialProductCategoryDto
  );
};

export type TKeyProductCategoryDto = keyof TProductCategoryDto;
export type TValueProductCategoryDto = TValueOf<TProductCategoryDto>;

export const keyProductCategoryDto = createKeyNames<TProductCategoryDto>(
  getInitialProductCategoryDto()
);

export const isKeyProductCategoryDto = createIsUnknownRecordKeyGuard(
  keyProductCategoryDto
);
