import TLink from '../../../../domain/_infrastructure/types/t-link';
import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../../../../domain/simple-newsletter-sign-up/const/titles';
import { TAuthUserFormicLinks } from '../../../types/types';

export const formikSimpleNewsletterSignUp: TLink = {
  title: TITLES_SIMPLE_NEWSLETTER_SING_UP.title,
  entityType: 'simpleNewsletterSignUp',
  url: '/formik/simple-newsletter-sign-up'
};

export const formik: TLink = {
  title: 'Formik',
  url: '/formik',
  nameIcon: 'formic',
  subLinks: [formikSimpleNewsletterSignUp]
};

export const LINKS_AUTH_USER_FORMIC: TAuthUserFormicLinks = {
  formik,
  formikSimpleNewsletterSignUp
};
