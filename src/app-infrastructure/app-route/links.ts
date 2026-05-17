import { TITLES_OF_APP } from '../app-const/titles-of-app';
import { LINKS_AUTH_USER_FORMIC } from './const/links/formik/links-formik';
import { LINKS_AUTH_USER_JS_DAVID_FLANAGAN } from './const/links/js-david-flanagan-7th-edition/links-js-david-flanagan-7th-edition';
import { LINKS_AUTH_USER_GENIUS_SPACE_COURSES } from './const/links/genius-space-courses/links-genius-space-courses';
import { TAuthUserLinks } from './route-types/route-types';
import TLink from '../app-types/t-link';
import { LINKS_AUTH_USER_ELIFTECH_DELIVERY } from './const/links/el-if-tech/links-el-if-tech';

const home: TLink = {
  title: TITLES_OF_APP.title,
  appRoute: '/home',
  nameIcon: 'home'
};

export const LINKS_AUTH_USER: TAuthUserLinks = {
  home,

  ...LINKS_AUTH_USER_FORMIC,

  ...LINKS_AUTH_USER_JS_DAVID_FLANAGAN,

  ...LINKS_AUTH_USER_GENIUS_SPACE_COURSES,

  ...LINKS_AUTH_USER_ELIFTECH_DELIVERY
};
