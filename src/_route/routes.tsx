import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { FormikSimpleNewsletterSignUpPage } from '../pages/formik/formik-simple-newsletter-sign-up-page';
import { HomePage } from '../pages/home-page';
import { LINKS_AUTH_USER } from './links';
import { JsDavidFlanagan7thEditionPage } from '../pages/js-david-flanagan-7th-edition/js-david-flanagan-7th-edition-page';
import { ComputesFrequencyEachLetterInTextPage } from '../pages/js-david-flanagan-7th-edition/computes-frequency-each-letter-in-text-page';

export const useRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={`${LINKS_AUTH_USER.home.url}`} element={<HomePage />} />

        <Route
          path={`${LINKS_AUTH_USER.formikSimpleNewsletterSignUp.url}`}
          element={<FormikSimpleNewsletterSignUpPage />}
        />
        <Route
          path={`${LINKS_AUTH_USER.formik.url}`}
          element={
            <Navigate
              to={`${LINKS_AUTH_USER.formikSimpleNewsletterSignUp.url}`}
              replace
            />
          }
        />

        <Route
          path={LINKS_AUTH_USER.jsDavidFlanagan7thEdition.url}
          element={<JsDavidFlanagan7thEditionPage />}
        />
        <Route
          path={LINKS_AUTH_USER.computesFrequencyEachLetterInText.url}
          element={<ComputesFrequencyEachLetterInTextPage />}
        />

        <Route path='*' element={<NotFountPath />} />
      </Routes>

      {/* <GetParameterPopups /> */}
    </>
  );
};

const NotFountPath: FC = () => {
  return <Navigate to={`${LINKS_AUTH_USER.home.url}`} replace />;
};
