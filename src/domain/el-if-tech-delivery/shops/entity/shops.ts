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

export const getInitialShopDto = (): TShopDto => {
  return { name: '', rating: 0 };
};

export const getInitialDetailShopDto = (entity: IEntityMember) => {
  return getInitialDetailDto(entity, isShop, getInitialShopDto);
};

export type TKeyShopDto = keyof TShopDto;
export type TValueShopDto = TValueOf<TShopDto>;

export const keyShopDto = createKeyNames<TShopDto>(getInitialShopDto());

export const isKeyShopDto = createIsUnknownRecordKeyGuard(keyShopDto);
