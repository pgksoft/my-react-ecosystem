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
