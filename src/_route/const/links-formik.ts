import { TLink } from '../../context/route-context';
import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../../domain/simple-newsletter-sign-up/const/titles';
import { IconFormik } from './icons/icon-formik';

export const formikSimpleNewsletterSignUp: TLink = {
  title: TITLES_SIMPLE_NEWSLETTER_SING_UP.title,
  entityType: 'simpleNewsletterSignUp',
  url: '/formik/simple-newsletter-sign-up'
};

export const formik: TLink = {
  title: 'Formik',
  url: '/formik',
  getIcon: IconFormik,
  subLinks: [formikSimpleNewsletterSignUp]
};
