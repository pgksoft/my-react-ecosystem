import TValueOf from '../../../../_infrastructure/types/t-value-of';

interface IContact {
  id: string;
  name: string;
  lastName: string;
  about: string;
}

type TContactDto = Omit<IContact, 'id'>;

export type { TContactDto };

export default IContact;

export const getInitialContactDto = (): TContactDto => {
  return { name: '', lastName: '', about: '' };
};

export type TKeyContactDto = keyof TContactDto;
export type TValueContactDto = TValueOf<IContact>;

type TKeyNamesContactDto = Record<TKeyContactDto, TKeyContactDto>;

export const keyContactDto: TKeyNamesContactDto = {
  name: 'name',
  lastName: 'lastName',
  about: 'about'
};
