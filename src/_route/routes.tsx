import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { FormikSimpleNewsletterSignUpPage } from '../pages/formik/formik-simple-newsletter-sign-up-page';
import { HomePage } from '../pages/home-page';
import { LINKS_AUTH_USER } from './links';
import { JsDavidFlanagan7thEditionPage } from '../pages/js-david-flanagan-7th-edition/js-david-flanagan-7th-edition-page';
import { ComputesFrequencyEachLetterInTextPage } from '../pages/js-david-flanagan-7th-edition/computes-frequency-each-letter-in-text-page';
import GeniusSpaceCoursesPage from '../pages/genius-space-courses/genius-space-courses-page';
import GeniusSpaceCoursesHtmlCssPage from '../pages/genius-space-courses/genius-space-courses-htmlcss-page';
import GeniusSpaceCoursesJSPage from '../pages/genius-space-courses/genius-space-courses-js-page';
import GeniusSpaceCoursesReactPage from '../pages/genius-space-courses/genius-space-courses-react-page';
import GeniusSpaceCoursesNodeJSPage from '../pages/genius-space-courses/genius-space-courses-node-js-page';
import TicTacToePage from '../pages/genius-space-courses/react/tic-tac-toe-page';
import ToDoListPage from '../pages/genius-space-courses/react/to-do-list-page';

export const useRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={`${LINKS_AUTH_USER.home.url}`} element={<HomePage />} />

        <Route
          path={`${LINKS_AUTH_USER.formikSimpleNewsletterSignUp.url}`}
          element={<FormikSimpleNewsletterSignUpPage />}
        >
          <Route
            path={`${LINKS_AUTH_USER.formik.url}`}
            element={
              <Navigate
                to={`${LINKS_AUTH_USER.formikSimpleNewsletterSignUp.url}`}
                replace
              />
            }
          />
        </Route>

        <Route
          path={LINKS_AUTH_USER.jsDavidFlanagan7thEdition.url}
          element={<JsDavidFlanagan7thEditionPage />}
        >
          <Route
            path={LINKS_AUTH_USER.computesFrequencyEachLetterInText.url}
            element={<ComputesFrequencyEachLetterInTextPage />}
          />
        </Route>

        <Route
          path={LINKS_AUTH_USER.geniusSpaceCourses.url}
          element={<GeniusSpaceCoursesPage />}
        >
          <Route
            path={LINKS_AUTH_USER.geniusSpaceCoursesHtmlCss.url}
            element={<GeniusSpaceCoursesHtmlCssPage />}
          />

          <Route
            path={LINKS_AUTH_USER.geniusSpaceCoursesJS.url}
            element={<GeniusSpaceCoursesJSPage />}
          />

          <Route
            path={LINKS_AUTH_USER.geniusSpaceCoursesReact.url}
            element={<GeniusSpaceCoursesReactPage />}
          >
            <Route
              path={LINKS_AUTH_USER.geniusSpaceCoursesReactTicTacToe.url}
              element={<TicTacToePage />}
            />
            <Route
              path={LINKS_AUTH_USER.geniusSpaceCoursesReactToDoList.url}
              element={<ToDoListPage />}
            />
          </Route>

          <Route
            path={LINKS_AUTH_USER.geniusSpaceCoursesNodeJS.url}
            element={<GeniusSpaceCoursesNodeJSPage />}
          />
        </Route>

        <Route path='*' element={<NotFountPath />} />
      </Routes>

      {/* <GetParameterPopups /> */}
    </>
  );
};

const NotFountPath: FC = () => {
  return <Navigate to={`${LINKS_AUTH_USER.home.url}`} replace />;
};
