import React, { useEffect, useState } from 'react';
import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../../domain/simple-newsletter-sign-up/const/titles';
import { LINKS_AUTH_USER } from '../../_route/links';
import { usePageContext } from '../hooks/page-context.hook';

export const FormikSimpleNewsletterSignUpPage = () => {
  const link = LINKS_AUTH_USER.formikSimpleNewsletterSignUp;
  const [show, setShow] = useState(false);

  usePageContext(link, LINKS_AUTH_USER.formik);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return show ? <p>{TITLES_SIMPLE_NEWSLETTER_SING_UP.title}</p> : null;
};
