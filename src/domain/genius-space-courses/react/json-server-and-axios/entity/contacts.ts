import {
  IEntityMember,
  isEntityMember
} from '../../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import createIsUnknownRecordKeyGuard from '../../../../../app-infrastructure/app-helpers/create-is-unknown-record-key-guard';
import {
  createKeyNames,
  getInitialDetailDto
} from '../../../../../app-infrastructure/app-helpers/dto-utils';
import TValueOf from '../../../../../app-infrastructure/app-types/t-value-of';
import TypeGuard from '../../../../../app-infrastructure/app-types/type-guard';

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

export const getInitialContactDto = (): TContactDto => {
  return { name: '', lastName: '', about: '' };
};

export const getInitialDetailContactDto = (entity: IEntityMember) => {
  return getInitialDetailDto(entity, isContact, getInitialContactDto);
};

export type TKeyContactDto = keyof TContactDto;
export type TValueContactDto = TValueOf<TContact>;

export const keyContactDto = createKeyNames<TContactDto>(
  getInitialContactDto()
);

export const isKeyContactDto = createIsUnknownRecordKeyGuard(keyContactDto);
