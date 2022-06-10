export const TYPE_ENTITY = {
  simpleNewsletterSignUp: 'SimpleNewsletterSignUp'
};

export type TTypeEntityTypes = keyof typeof TYPE_ENTITY;

export const isTypeEntityTypes = (value: string): value is TTypeEntityTypes => {
  return Object.keys(TYPE_ENTITY).includes(value);
};
