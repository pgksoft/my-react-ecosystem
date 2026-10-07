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
import formDtoSerialization from '../../../../app-infrastructure/app-helpers/form-dto-serialization/';
import type {
  TGetDetailInitialValidationDto,
  TGetInitialValidationDto
} from '../../../../app-infrastructure/yup/types';

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

const getBaseInitialProductCategoryDto = (): TProductCategoryDto => {
  return { name: '' };
};

export const getInitialProductCategoryDto: TGetInitialValidationDto<
  TProductCategoryDto
> = ({ isSerialization }) => {
  if (isSerialization) {
    const dtoSerialization = formDtoSerialization.Get<TProductCategoryDto>(
      'ProductCategoryDicCreate'
    );
    if (dtoSerialization)
      return { validationDto: dtoSerialization, isSerialization: true };
  }
  return {
    validationDto: getBaseInitialProductCategoryDto(),
    isSerialization: false
  };
};

export const getInitialDetailProductCategoryDto: TGetDetailInitialValidationDto<
  TProductCategoryDto
> = (options) => {
  const { isSerialization, entity } = options;
  if (isSerialization) {
    const dtoSerialization = formDtoSerialization.Get<TProductCategoryDto>(
      'ProductCategoryDicDetail'
    );
    if (dtoSerialization)
      return { validationDto: dtoSerialization, isSerialization: true };
  }
  return {
    validationDto: getInitialDetailDto(
      entity,
      isProductCategory,
      getBaseInitialProductCategoryDto
    ),
    isSerialization: false
  };
};

export type TKeyProductCategory = TDeepKeyOf<TProductCategory>;
export type TKeyProductCategoryDto = keyof TProductCategoryDto;
export type TValueProductCategoryDto = TValueOf<TProductCategoryDto>;

export const keyProductCategoryDto = createKeyNames<TProductCategoryDto>(
  getBaseInitialProductCategoryDto()
);

export const isKeyProductCategoryDto = createIsUnknownRecordKeyGuard(
  keyProductCategoryDto
);

// definitions for AsyncAutoComplete
export const productCategoryFetchAll = makeFetchAll<TProductCategory>(
  resolveBaseUrl('productCategoryDic'),
  apiEntityUrl.productCategoryDic,
  keyProductCategoryDto.name
);

export const productCategoryFetchPage = makeFetchPage(
  resolveBaseUrl('productCategoryDic'),
  apiEntityUrl.productCategoryDic,
  keyProductCategoryDto.name
);

export const getProductCategoryOptionLabel: TAsyncAutoComplete<TProductCategory>['getOptionLabel'] =
  (item) => {
    return item.name;
  };

export const getProductCategoryId: TAsyncAutoComplete<TProductCategory>['getId'] =
  (item) => {
    return item.id;
  };
