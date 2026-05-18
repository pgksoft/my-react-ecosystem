import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { FormikSimpleNewsletterSignUpPage } from '../../pages/formik/formik-simple-newsletter-sign-up-page';
import { HomePage } from '../../pages/home-page';
import { LINKS_AUTH_USER } from './links';
import { JsDavidFlanagan7thEditionPage } from '../../pages/js-david-flanagan-7th-edition/js-david-flanagan-7th-edition-page';
import { ComputesFrequencyEachLetterInTextPage } from '../../pages/js-david-flanagan-7th-edition/computes-frequency-each-letter-in-text-page';
import GeniusSpaceCoursesPage from '../../pages/genius-space-courses/genius-space-courses-page';
import GeniusSpaceCoursesHtmlCssPage from '../../pages/genius-space-courses/genius-space-courses-htmlcss-page';
import GeniusSpaceCoursesJSPage from '../../pages/genius-space-courses/genius-space-courses-js-page';
import GeniusSpaceCoursesReactPage from '../../pages/genius-space-courses/genius-space-courses-react-page';
import GeniusSpaceCoursesNodeJSPage from '../../pages/genius-space-courses/genius-space-courses-node-js-page';
import TicTacToePage from '../../pages/genius-space-courses/react/tic-tac-toe-page';
import ToDoListPage from '../../pages/genius-space-courses/react/to-do-list-page';
import ReduxPracticeCounterPage from '../../pages/genius-space-courses/react/redux-practice-counter-page';
import JsonServerAndAxiosPage from '../../pages/genius-space-courses/react/json-server-and-axios-page';
import GetParameterPopups from '../get-parameter-popups/model/get-parameter-popups';
import type TElement from '../app-types/t-element';
import ElIfTechDeliveryPage from '../../pages/el-if-tech-delivery/el-if-tech-delivery-page';
import DeliveryShopPage from '../../pages/el-if-tech-delivery/delivery-shop-page';
import DeliveryProductCategoryPage from '../../pages/el-if-tech-delivery/delivery-product-category-page';
import DeliveryProductPage from '../../pages/el-if-tech-delivery/delivery-product-page';
import DeliveryProductsInShopsPage from '../../pages/el-if-tech-delivery/ui/delivery-products-in-shops-page';

const NotFountPath: TElement = () => {
  return <Navigate to={`${LINKS_AUTH_USER.home.appRoute}`} replace />;
};

export const useRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path={`${LINKS_AUTH_USER.home.appRoute}`}
          element={<HomePage />}
        />

        <Route
          path={`${LINKS_AUTH_USER.formik.appRoute}`}
          element={
            <Navigate
              to={`${LINKS_AUTH_USER.formikSimpleNewsletterSignUp.appRoute}`}
              replace
            />
          }
        />
        <Route
          path={`${LINKS_AUTH_USER.formikSimpleNewsletterSignUp.appRoute}`}
          element={<FormikSimpleNewsletterSignUpPage />}
        />

        <Route
          path={LINKS_AUTH_USER.jsDavidFlanagan7thEdition.appRoute}
          element={<JsDavidFlanagan7thEditionPage />}
        />
        <Route
          path={LINKS_AUTH_USER.computesFrequencyEachLetterInText.appRoute}
          element={<ComputesFrequencyEachLetterInTextPage />}
        />

        <Route
          path={LINKS_AUTH_USER.geniusSpaceCourses.appRoute}
          element={<GeniusSpaceCoursesPage />}
        />

        <Route
          path={LINKS_AUTH_USER.geniusSpaceCoursesHtmlCss.appRoute}
          element={<GeniusSpaceCoursesHtmlCssPage />}
        />

        <Route
          path={LINKS_AUTH_USER.geniusSpaceCoursesJS.appRoute}
          element={<GeniusSpaceCoursesJSPage />}
        />

        <Route
          path={LINKS_AUTH_USER.geniusSpaceCoursesReact.appRoute}
          element={<GeniusSpaceCoursesReactPage />}
        />
        <Route
          path={LINKS_AUTH_USER.geniusSpaceCoursesReactTicTacToe.appRoute}
          element={<TicTacToePage />}
        />
        <Route
          path={LINKS_AUTH_USER.geniusSpaceCoursesReactToDoList.appRoute}
          element={<ToDoListPage />}
        />
        <Route
          path={
            LINKS_AUTH_USER.geniusSpaceCoursesReactReduxPracticeCounter.appRoute
          }
          element={<ReduxPracticeCounterPage />}
        />
        <Route
          path={LINKS_AUTH_USER.geniusSpaceCoursesReactJServerAxios.appRoute}
          element={<JsonServerAndAxiosPage />}
        />

        <Route
          path={LINKS_AUTH_USER.geniusSpaceCoursesNodeJS.appRoute}
          element={<GeniusSpaceCoursesNodeJSPage />}
        />

        <Route
          path={LINKS_AUTH_USER.elIfTechDelivery.appRoute}
          element={<ElIfTechDeliveryPage />}
        />
        <Route
          path={LINKS_AUTH_USER.elIfTechDeliveryShops.appRoute}
          element={<DeliveryShopPage />}
        />
        <Route
          path={LINKS_AUTH_USER.elIfTechDeliveryProductCategoryDic.appRoute}
          element={<DeliveryProductCategoryPage />}
        />
        <Route
          path={LINKS_AUTH_USER.elIfTechDeliveryProductDic.appRoute}
          element={<DeliveryProductPage />}
        />
        <Route
          path={LINKS_AUTH_USER.elIfTechDeliveryProductsInStores.appRoute}
          element={<DeliveryProductsInShopsPage />}
        />

        <Route path='*' element={<NotFountPath />} />
      </Routes>

      <GetParameterPopups />
    </>
  );
};
