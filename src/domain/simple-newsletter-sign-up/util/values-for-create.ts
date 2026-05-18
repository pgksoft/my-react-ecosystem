export type IValuesForCreate = {
  firstName: string;
  lastName: string;
  email: string;
};

export type TKeyValues = keyof IValuesForCreate;

export const KeyValues: Record<TKeyValues, TKeyValues> = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email'
};

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

export const isKeyValuesForCreate = (
  value: string
): value is TKeyValuesForCreate => {
  return Object.keys(KeyValuesForCreate).includes(value);
};
