import React, { useEffect, useState } from 'react';
import { SimpleNewsletterSignUpList } from '../../domain/simple-newsletter-sign-up';
import { LINKS_AUTH_USER } from '../../_route/links';
import { useActivePageLinks } from '../hooks/active-page-links.hook';

export const FormikSimpleNewsletterSignUpPage = () => {
  const link = LINKS_AUTH_USER.formikSimpleNewsletterSignUp;
  const [show, setShow] = useState(false);

  useActivePageLinks(link, LINKS_AUTH_USER.formik);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return show ? <SimpleNewsletterSignUpList /> : null;
};
