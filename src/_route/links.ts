import { TLink } from '../context/route-context';
import { TITLES_OF_APP } from '../_const/titles-of-app';
import { HomeIcon } from './const/icons/home-icon';
import {
  formik,
  formikSimpleNewsletterSignUp
} from './const/links/links-formik';
import {
  computesFrequencyEachLetterInText,
  jsDavidFlanagan7thEdition
} from './const/links/links-js-david-flanagan-7th-edition';
import geniusSpaceCourses, {
  geniusSpaceCoursesHtmlCss,
  geniusSpaceCoursesJS,
  geniusSpaceCoursesNodeJS,
  geniusSpaceCoursesReact,
  geniusSpaceCoursesReactTicTacToe,
  geniusSpaceCoursesReactToDoList
} from './const/links/genius-space-courses/links-genius-space-courses';

const home: TLink = {
  title: TITLES_OF_APP.title,
  url: '/home',
  getIcon: HomeIcon
};

const TYPE_LINK = {
  home,
  formik,
  formikSimpleNewsletterSignUp,
  jsDavidFlanagan7thEdition,
  computesFrequencyEachLetterInText,
  geniusSpaceCourses,
  geniusSpaceCoursesHtmlCss,
  geniusSpaceCoursesJS,
  geniusSpaceCoursesReact,
  geniusSpaceCoursesNodeJS,
  geniusSpaceCoursesReactTicTacToe,
  geniusSpaceCoursesReactToDoList
};

type TTypeLinkTypes = keyof typeof TYPE_LINK;

export const isTypeLinkTypes = (value: string): value is TTypeLinkTypes => {
  return Object.keys(TYPE_LINK).includes(value);
};

export const LINKS_AUTH_USER: Record<TTypeLinkTypes, TLink> = {
  home,

  formik,
  formikSimpleNewsletterSignUp,

  jsDavidFlanagan7thEdition,
  computesFrequencyEachLetterInText,

  geniusSpaceCourses,
  geniusSpaceCoursesHtmlCss,
  geniusSpaceCoursesJS,
  geniusSpaceCoursesReact,
  geniusSpaceCoursesReactTicTacToe,
  geniusSpaceCoursesNodeJS,
  geniusSpaceCoursesReactToDoList
};
