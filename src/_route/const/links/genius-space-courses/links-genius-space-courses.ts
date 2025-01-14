import { TLink } from '../../../../context/route-context';
import { TITLES_GENIUS_SPACE_COURSES } from '../../../../domain/genius-space-courses/const/titles';
import GeniusSpaceCoursesIcon from '../../icons/genius-space-courses-icon';
import HtmlCssTitle from '../../title-link-elements/html-css-title';
import JSTitle from '../../title-link-elements/js-title';
import ReactTitle from '../../title-link-elements/react-title';
import NodeJSTitle from '../../title-link-elements/node-js-title';
import TITLES_GENIUS_SPACE_COURSES_REACT_TIC_TAC_TOE from '../../../../domain/genius-space-courses/react/tic-tac-toe/const/titles';
import TITLES_GENIUS_SPACE_COURSES_REACT_TO_DO_LIST from '../../../../domain/genius-space-courses/react/to-do-list/const/titles';
import TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER from '../../../../domain/genius-space-courses/react/redux-practice-counter/const/titles';

// HTML5 & CSS3
export const geniusSpaceCoursesHtmlCss: TLink = {
  titleAsElement: HtmlCssTitle,
  url: '/genius-space-courses/html-css'
};

// JavaScript
export const geniusSpaceCoursesJS: TLink = {
  titleAsElement: JSTitle,
  url: '/genius-space-courses/js'
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
  titleAsElement: ReactTitle,
  url: '/genius-space-courses/react',
  subLinks: [
    geniusSpaceCoursesReactTicTacToe,
    geniusSpaceCoursesReactToDoList,
    geniusSpaceCoursesReactReduxPracticeCounter
  ]
};

// Node.JS
export const geniusSpaceCoursesNodeJS: TLink = {
  titleAsElement: NodeJSTitle,
  url: '/genius-space-courses/node-js'
};

const geniusSpaceCourses: TLink = {
  title: TITLES_GENIUS_SPACE_COURSES.title,
  url: '/genius-space-courses',
  getIcon: GeniusSpaceCoursesIcon,
  subMenuLinks: [
    geniusSpaceCoursesHtmlCss,
    geniusSpaceCoursesJS,
    geniusSpaceCoursesReact,
    geniusSpaceCoursesNodeJS
  ]
};

export default geniusSpaceCourses;
