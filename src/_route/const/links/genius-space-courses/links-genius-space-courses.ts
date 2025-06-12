import { TAuthUserGeniusSpaceCoursesLinks } from '../../../route-types/route-types';
import { TITLES_GENIUS_SPACE_COURSES } from '../../../../domain/genius-space-courses/const/titles';
import TITLES_GENIUS_SPACE_COURSES_REACT_TIC_TAC_TOE from '../../../../domain/genius-space-courses/react/tic-tac-toe/const/titles';
import TITLES_GENIUS_SPACE_COURSES_REACT_TO_DO_LIST from '../../../../domain/genius-space-courses/react/to-do-list/const/titles';
import TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER from '../../../../domain/genius-space-courses/react/redux-practice-counter/const/titles';
import TLink from '../../../../domain/_infrastructure/types/t-link';
import TITLES_CONTACT from '../../../../domain/genius-space-courses/react/json-server-and-axios/const/titles';
import { entityUrl } from '../../../../domain/_infrastructure/api-platform';

// HTML5 & CSS3
export const geniusSpaceCoursesHtmlCss: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES.titleHtmlCss,
  appRoute: '/genius-space-courses/html-css',
  nameIcon: 'htmlCss'
};

// JavaScript
export const geniusSpaceCoursesJS: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES.titleJS,
  appRoute: '/genius-space-courses/js',
  nameIcon: 'js'
};

// React
export const geniusSpaceCoursesReactTicTacToe: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES_REACT_TIC_TAC_TOE.title,
  appRoute: '/genius-space-courses/react/tic-tac-toe'
};

export const geniusSpaceCoursesReactToDoList: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES_REACT_TO_DO_LIST.title,
  appRoute: '/genius-space-courses/react/to-do-list'
};

export const geniusSpaceCoursesReactReduxPracticeCounter: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER.title,
  appRoute: '/genius-space-courses/react/redux-practice-counter'
};

export const geniusSpaceCoursesReactJServerAxios: TLink = {
  title: TITLES_CONTACT.title,
  appRoute: `/genius-space-courses/react/${entityUrl.contact}`,
  entityNameKey: 'contact'
};

export const geniusSpaceCoursesReact: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES.titleReact,
  appRoute: '/genius-space-courses/react',
  nameIcon: 'react',
  subLinks: [
    geniusSpaceCoursesReactTicTacToe,
    geniusSpaceCoursesReactToDoList,
    geniusSpaceCoursesReactReduxPracticeCounter,
    geniusSpaceCoursesReactJServerAxios
  ],
  isHaveDefaultGoBackIconButton: true
};

// Node.JS
export const geniusSpaceCoursesNodeJS: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES.titleNodeJS,
  appRoute: '/genius-space-courses/node-js',
  nameIcon: 'nodeJs'
};

export const geniusSpaceCourses: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES.title,
  appRoute: '/genius-space-courses',
  nameIcon: 'geniusSpaceCourses',
  subMenuLinks: [
    geniusSpaceCoursesHtmlCss,
    geniusSpaceCoursesJS,
    geniusSpaceCoursesReact,
    geniusSpaceCoursesNodeJS
  ]
};

export const LINKS_AUTH_USER_GENIUS_SPACE_COURSES: TAuthUserGeniusSpaceCoursesLinks =
  {
    geniusSpaceCourses,
    geniusSpaceCoursesHtmlCss,
    geniusSpaceCoursesJS,
    geniusSpaceCoursesReact,
    geniusSpaceCoursesReactTicTacToe,
    geniusSpaceCoursesNodeJS,
    geniusSpaceCoursesReactToDoList,
    geniusSpaceCoursesReactReduxPracticeCounter,
    geniusSpaceCoursesReactJServerAxios
  };
