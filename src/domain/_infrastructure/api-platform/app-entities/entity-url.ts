import type TEntityNameKeys from './app-entities-types/t-entity-key-names';

export type TEntityUrl = `${TEntityNameKeys}s`;

const entityUrl: Record<TEntityNameKeys, TEntityUrl> = {
  simpleNewsletterSignUp: 'simpleNewsletterSignUps',
  contact: 'contacts',
  todo: 'todos'
};

export default entityUrl;
