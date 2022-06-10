import { TLink } from '../context/route-context';
import { TITLES_OF_APP } from '../_const/titles-of-app';
import { IconHome } from './const/icons/icon-home';
import { formik, formikSimpleNewsletterSignUp } from './const/links-formik';

const home: TLink = {
  title: TITLES_OF_APP.title,
  url: '/home',
  getIcon: IconHome
};

export const LINKS_AUTH_USER: Record<string, TLink> = {
  home,

  formik,
  formikSimpleNewsletterSignUp
};
