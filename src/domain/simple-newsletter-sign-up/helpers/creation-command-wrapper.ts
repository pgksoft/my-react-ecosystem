import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../const/titles';
import { SimpleNewsletterSignUpCreate } from '../model/simple-newsletter-sign-up-create';
import createNestedModalCommandComponent from '../../../app-infrastructure/modal-commands/create-nested-modal-command-component';

export const CreationCommandWrapper = createNestedModalCommandComponent(
  TITLES_SIMPLE_NEWSLETTER_SING_UP.create,
  SimpleNewsletterSignUpCreate,
  'creation-command-wrapper',
  {}
);
