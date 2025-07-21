import { IEntityMember } from '../../../../_infrastructure/api-platform/app-entities/entity-member/entity-member';
import { isEntityMember } from '../../../../_infrastructure/build-entity-table/helpers/is-entity-member';
import TValueOf from '../../../../_infrastructure/types/t-value-of';
import TypeGuard from '../../../../_infrastructure/types/type-guard';

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

export const getInitialDetailContactDto = (
  entity: IEntityMember
): TContactDto => {
  return (
    (isContact(entity) &&
      (({ id, ...rest }) => {
        return rest;
      })(entity)) ||
    getInitialContactDto()
  );
};

export type TKeyContactDto = keyof TContactDto;
export type TValueContactDto = TValueOf<TContact>;

type TKeyNamesContactDto = Record<TKeyContactDto, TKeyContactDto>;

export const keyContactDto: TKeyNamesContactDto = {
  name: 'name',
  lastName: 'lastName',
  about: 'about'
};

export const isKeyContactDto: TypeGuard<TContactDto> = (
  value: unknown
): value is TContactDto => {
  return (
    typeof value === 'string' &&
    Object.values(keyContactDto).includes(value as TKeyContactDto)
  );
};
