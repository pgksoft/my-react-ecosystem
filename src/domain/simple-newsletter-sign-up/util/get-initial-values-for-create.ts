export type TValuesForCreate = {
  firstName: string;
  lastName: string;
  email: string;
};

export type TKeyValuesForCreate = keyof TValuesForCreate;

export const KeyValuesForCreate: Record<
  TKeyValuesForCreate,
  TKeyValuesForCreate
> = {
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName'
};

export const getInitialValuesOfCreate = (): TValuesForCreate => {
  return { firstName: '', lastName: '', email: '' };
};
