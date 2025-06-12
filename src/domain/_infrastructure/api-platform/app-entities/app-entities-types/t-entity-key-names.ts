export enum EntityNameKeys {
  simpleNewsletterSignUp,
  contact,
  todo
}

type TEntityNameKeys = keyof typeof EntityNameKeys;

export default TEntityNameKeys;
