import { TLink } from '../context/route-context';
import { TITLES_OF_APP } from '../_const/titles-of-app';
import { HomeIcon } from './const/icons/home-icon';
import {
  formik,
  formikSimpleNewsletterSignUp
} from './const/links/links-formik';
import { jsDavidFlanagan7thEdition } from './const/links/links-js-david-flanagan-7th-edition';

const home: TLink = {
  title: TITLES_OF_APP.title,
  url: '/home',
  getIcon: HomeIcon
};

export const LINKS_AUTH_USER: Record<string, TLink> = {
  home,

  formik,
  formikSimpleNewsletterSignUp,

  jsDavidFlanagan7thEdition
};
