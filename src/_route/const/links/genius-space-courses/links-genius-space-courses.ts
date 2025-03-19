import { TAuthUserGeniusSpaceCoursesLinks } from '../../../types/types';
import { TITLES_GENIUS_SPACE_COURSES } from '../../../../domain/genius-space-courses/const/titles';
import TITLES_GENIUS_SPACE_COURSES_REACT_TIC_TAC_TOE from '../../../../domain/genius-space-courses/react/tic-tac-toe/const/titles';
import TITLES_GENIUS_SPACE_COURSES_REACT_TO_DO_LIST from '../../../../domain/genius-space-courses/react/to-do-list/const/titles';
import TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER from '../../../../domain/genius-space-courses/react/redux-practice-counter/const/titles';
import TLink from '../../../../domain/_infrastructure/types/t-link';

// HTML5 & CSS3
export const geniusSpaceCoursesHtmlCss: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES.titleHtmlCss,
  url: '/genius-space-courses/html-css',
  nameIcon: 'htmlCss'
};

// JavaScript
export const geniusSpaceCoursesJS: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES.titleJS,
  url: '/genius-space-courses/js',
  nameIcon: 'js'
};

// React
export const geniusSpaceCoursesReactTicTacToe: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES_REACT_TIC_TAC_TOE.title,
  url: '/genius-space-courses/react/tic-tac-toe'
};

export const geniusSpaceCoursesReactToDoList: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES_REACT_TO_DO_LIST.title,
  url: '/genius-space-courses/react/to-do-list'
};

export const geniusSpaceCoursesReactReduxPracticeCounter: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER.title,
  url: '/genius-space-courses/react/redux-practice-counter'
};

export const geniusSpaceCoursesReact: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES.titleReact,
  url: '/genius-space-courses/react',
  nameIcon: 'react',
  subLinks: [
    geniusSpaceCoursesReactTicTacToe,
    geniusSpaceCoursesReactToDoList,
    geniusSpaceCoursesReactReduxPracticeCounter
  ],
  isHaveDefaultGoBackIconButton: true
};

// Node.JS
export const geniusSpaceCoursesNodeJS: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES.titleNodeJS,
  url: '/genius-space-courses/node-js',
  nameIcon: 'nodeJs'
};

export const geniusSpaceCourses: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES.title,
  url: '/genius-space-courses',
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
    geniusSpaceCoursesReactReduxPracticeCounter
  };
