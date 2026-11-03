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
import formDtoSerialization from '../../../../app-infrastructure/app-helpers/form-dto-serialization/';
import type {
  TGetDetailInitialValidationDto,
  TGetInitialValidationDto
} from '../../../../app-infrastructure/yup/types';
import createArrayGuardOfTypePredicate from '../../../../app-infrastructure/app-helpers/create-array-guard-of-type-predicate';
import makeFetch from '../../../../app-infrastructure/app-ui/async-autocomplete/fetch-adapter';
import type { TAsyncAutoComplete } from '../../../../app-infrastructure/app-ui/async-autocomplete';

export type TShop = {
  name: string;
  rating: number;
  mutationDate: string;
} & IEntityMember;

export const isShop: TypeGuard<TShop> = (value): value is TShop => {
  return (
    isEntityMember(value) &&
    'name' in value &&
    typeof value.name === 'string' &&
    'rating' in value &&
    typeof value.rating === 'number' &&
    'mutationDate' in value &&
    typeof value.mutationDate === 'string'
  );
};

export type TShopDto = Pick<TShop, 'name' | 'rating'>;
export type TShopValidationDto = TShopDto;

const getBaseInitialShopDto = (): TShopDto => {
  return { name: '', rating: 0 };
};

export const getInitialShopDto: TGetInitialValidationDto<TShopDto> = ({
  isSerialization
}) => {
  if (isSerialization) {
    const dtoSerialization = formDtoSerialization.Get<TShopDto>('ShopCreate');
    if (dtoSerialization)
      return { validationDto: dtoSerialization, isSerialization: true };
  }
  return { validationDto: getBaseInitialShopDto(), isSerialization: false };
};

export const getInitialShopValidationDto = getInitialShopDto;

export const getInitialDetailShopValidationDto: TGetDetailInitialValidationDto<
  TShopDto
> = (options) => {
  const { isSerialization, entity } = options;
  if (isSerialization) {
    const dtoSerialization = formDtoSerialization.Get<TShopDto>('ShopDetail');
    if (dtoSerialization)
      return { validationDto: dtoSerialization, isSerialization: true };
  }
  return {
    validationDto: getInitialDetailDto(entity, isShop, getBaseInitialShopDto),
    isSerialization: false
  };
};

export type TKeyShop = TDeepKeyOf<TShop>;
export type TKeyShopDto = keyof TShopDto;
export type TValueShopDto = TValueOf<TShopDto>;
export type TValueValidationShopDto = TValueOf<TShopValidationDto>;

export const keyShopDto = createKeyNames<TShopDto>(getBaseInitialShopDto());

export const isKeyShopDto = createIsUnknownRecordKeyGuard(keyShopDto);

export const isArrayShop = createArrayGuardOfTypePredicate(isShop);

// definitions for AsyncAutoComplete
export const shopFetchAll = makeFetch<TShop>({
  baseURL: resolveBaseUrl('shop'),
  apiPath: apiEntityUrl.shop,
  searchDataKey: keyShopDto.name
});

export const getShopOptionLabel: TAsyncAutoComplete<TShop>['getOptionLabel'] = (
  item
) => {
  return item.name;
};

export const getShopId: TAsyncAutoComplete<TShop>['getId'] = (item) => {
  return item.id;
};
