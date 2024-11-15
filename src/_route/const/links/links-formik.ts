import { TLink } from '../../../context/route-context';
import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../../../domain/simple-newsletter-sign-up/const/titles';
import { FormikIcon } from '../icons/formic-icon';

export const formikSimpleNewsletterSignUp: TLink = {
  title: TITLES_SIMPLE_NEWSLETTER_SING_UP.title,
  entityType: 'simpleNewsletterSignUp',
  url: '/formik/simple-newsletter-sign-up'
};

export const formik: TLink = {
  title: 'Formik',
  url: '/formik',
  getIcon: FormikIcon,
  subLinks: [formikSimpleNewsletterSignUp]
};
