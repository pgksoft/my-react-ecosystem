import { TEntityUrl } from '../entity-url';
import TEntityNameKeys from '../app-entities-types/t-entity-key-names';

export type TApiEntityUrl = `/${TEntityUrl}`;

const apiEntityUrl: Record<TEntityNameKeys, TApiEntityUrl> = {
  simpleNewsletterSignUp: '/simpleNewsletterSignUps',
  contact: '/contacts',
  todo: '/todos'
};

export default apiEntityUrl;
