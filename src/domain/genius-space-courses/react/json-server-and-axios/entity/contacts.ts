import {
  IEntityMember,
  isEntityMember
} from '../../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import createIsUnknownRecordKeyGuard from '../../../../../app-infrastructure/app-helpers/create-is-unknown-record-key-guard';
import {
  createKeyNames,
  getInitialDetailDto
} from '../../../../../app-infrastructure/app-helpers/dto-utils';
import type { TDeepKeyOf } from '../../../../../app-infrastructure/app-types/t-deep-key-of';
import TValueOf from '../../../../../app-infrastructure/app-types/t-value-of';
import TypeGuard from '../../../../../app-infrastructure/app-types/type-guard';
import type { TInitialValidationDto } from '../../../../../app-infrastructure/yup/types';

type TContact = {
  id: string;
  name: string;
  lastName: string;
  about: string;
};

type TContactDto = Omit<TContact, 'id'>;

export type { TContactDto };

export default TContact;

export const isContact: TypeGuard<TContact> = (value): value is TContact => {
  return (
    isEntityMember(value) &&
    typeof value.name === 'string' &&
    typeof value.lastName === 'string' &&
    typeof value.about === 'string'
  );
};

export const getInitialContactDto = (): TInitialValidationDto<TContactDto> => {
  return {
    validationDto: { name: '', lastName: '', about: '' },
    isSerialization: false
  };
};

export const getInitialDetailContactDto = (
  entity: IEntityMember
): TInitialValidationDto<TContactDto> => {
  return {
    validationDto: getInitialDetailDto(entity, isContact, () => {
      return getInitialContactDto().validationDto;
    }),
    isSerialization: false
  };
};

export type TKeyContact = TDeepKeyOf<TContact>;
export type TKeyContactDto = keyof TContactDto;
export type TValueContactDto = TValueOf<TContact>;

export const keyContactDto = createKeyNames<TContactDto>(
  getInitialContactDto().validationDto
);

export const isKeyContactDto = createIsUnknownRecordKeyGuard(keyContactDto);
