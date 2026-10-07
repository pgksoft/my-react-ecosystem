import apiEntityUrl from '../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import {
  isEntityMember,
  type IEntityMember
} from '../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import resolveBaseUrl from '../../../../app-infrastructure/api-platform/app-entities/resolve-base-url';
import createIsUnknownRecordKeyGuard from '../../../../app-infrastructure/app-helpers/create-is-unknown-record-key-guard';
import {
  createKeyNames,
  getInitialDetailDto
} from '../../../../app-infrastructure/app-helpers/dto-utils';
import type { TDeepKeyOf } from '../../../../app-infrastructure/app-types/t-deep-key-of';
import type TValueOf from '../../../../app-infrastructure/app-types/t-value-of';
import type TypeGuard from '../../../../app-infrastructure/app-types/type-guard';
import type { TAsyncAutoComplete } from '../../../../app-infrastructure/app-ui/async-autocomplete';
import {
  makeFetchAll,
  makeFetchPage
} from '../../../../app-infrastructure/app-ui/async-autocomplete/entourage-helpers/fetch-adapters';
import {
  isProductCategory,
  type TProductCategory
} from '../../product-category-dic/entity/product-category';
import formDtoSerialization from '../../../../app-infrastructure/app-helpers/form-dto-serialization/';
import type {
  TGetDetailInitialValidationDto,
  TGetInitialValidationDto
} from '../../../../app-infrastructure/yup/types';

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
export type TProductValidationDto = Pick<TProduct, 'name' | 'category'>;

export const getInitialProductDto = (): TProductDto => {
  return { name: '', category: '' };
};

const getBaseInitialProductValidationDto = (): TProductValidationDto => {
  return {
    name: '',
    category: { id: '', name: '', mutationDate: '' }
  };
};

export const getInitialProductValidationDto: TGetInitialValidationDto<
  TProductValidationDto
> = ({ isSerialization }) => {
  if (isSerialization) {
    const dtoSerialization =
      formDtoSerialization.Get<TProductValidationDto>('ProductDicCreate');
    if (dtoSerialization)
      return { validationDto: dtoSerialization, isSerialization: true };
  }
  return {
    validationDto: getBaseInitialProductValidationDto(),
    isSerialization: false
  };
};

export const transformToDto = ({
  name,
  category: { id }
}: TProduct | TProductValidationDto): TProductDto => {
  return { name, category: id };
};

export const getInitialDetailProductValidationDto: TGetDetailInitialValidationDto<
  TProductValidationDto
> = (options) => {
  const { isSerialization, entity } = options;
  if (isSerialization) {
    const dtoSerialization =
      formDtoSerialization.Get<TProductValidationDto>('ProductDicDetail');
    if (dtoSerialization)
      return { validationDto: dtoSerialization, isSerialization: true };
  }
  return {
    validationDto: getInitialDetailDto(
      entity,
      isProduct,
      getBaseInitialProductValidationDto
    ),
    isSerialization: false
  };
};

export type TKeyProduct = TDeepKeyOf<TProduct>;
export type TKeyProductDto = keyof TProductDto;
export type TValueProductDto = TValueOf<TProductDto>;
export type TValueValidationProductDto = TValueOf<TProductValidationDto>;

export const keyProductDto = createKeyNames<TProductDto>(
  getInitialProductDto()
);

export const isKeyProductDto = createIsUnknownRecordKeyGuard(keyProductDto);

// definitions for AsyncAutoComplete
export const productFetchAll = makeFetchAll<TProduct>(
  resolveBaseUrl('productDic'),
  apiEntityUrl.productDic,
  keyProductDto.name
);

export const productFetchPage = makeFetchPage(
  resolveBaseUrl('productDic'),
  apiEntityUrl.productDic,
  keyProductDto.name
);

export const getProductOptionLabel: TAsyncAutoComplete<TProduct>['getOptionLabel'] =
  (item) => {
    return item.name;
  };

export const getProductId: TAsyncAutoComplete<TProduct>['getId'] = (item) => {
  return item.id;
};
