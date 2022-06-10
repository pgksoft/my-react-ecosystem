import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { FormikSimpleNewsletterSignUpPage } from '../pages/formik/formik-simple-newsletter-sign-up-page';
import { HomePage } from '../pages/home-page';
import { LINKS_AUTH_USER } from './links';

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

        <Route path='*' element={<NotFountPath />} />
      </Routes>

      {/* <GetParameterPopups /> */}
    </>
  );
};

const NotFountPath: FC = () => {
  return <Navigate to={`${LINKS_AUTH_USER.home.url}`} replace />;
};
