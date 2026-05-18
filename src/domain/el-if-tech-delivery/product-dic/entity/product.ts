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
import {
  isProductCategory,
  type TProductCategory
} from '../../product-category-dic/entity/product-category';

export type TProduct = {
  name: string;
  category: TProductCategory;
  mutationDate: string;
} & IEntityMember;

export const isProduct: TypeGuard<TProduct> = (value): value is TProduct => {
  return (
    isEntityMember(value) &&
    'name' in value &&
    typeof value.name === 'string' &&
    'category' in value &&
    isProductCategory(value.category) &&
    'mutationDate' in value &&
    typeof value.mutationDate === 'string'
  );
};

export type TProductDto = Pick<TProduct, 'name'> & { category: string };

export const getInitialProductDto = (): TProductDto => {
  return { name: '', category: '' };
};

export const transformToDto = ({
  name,
  category: { id }
}: TProduct): TProductDto => {
  return { name, category: id };
};

export const getInitialDetailProductDto = (entity: unknown) => {
  return getInitialDetailDto(
    entity,
    isProduct,
    getInitialProductDto,
    transformToDto
  );
};

export type TKeyProductDto = keyof TProductDto;
export type TValueProductDto = TValueOf<TProductDto>;

export const keyProductDto = createKeyNames<TProductDto>(
  getInitialProductDto()
);

export const isKeyProductDto = createIsUnknownRecordKeyGuard(keyProductDto);
