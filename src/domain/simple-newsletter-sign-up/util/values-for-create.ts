export interface IValuesForCreate {
  firstName: string;
  lastName: string;
  email: string;
}

export type TKeyValuesForCreate = keyof IValuesForCreate;

export const KeyValuesForCreate: Record<
  TKeyValuesForCreate,
  TKeyValuesForCreate
> = {
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName'
};

export const getInitialValuesOfCreate = (): IValuesForCreate => {
  return { firstName: '', lastName: '', email: '' };
};
