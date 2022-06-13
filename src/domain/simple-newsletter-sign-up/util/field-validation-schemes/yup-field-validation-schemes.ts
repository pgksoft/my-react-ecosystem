import { string } from 'yup';
import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../../const/titles';

export const firstNameValidationSchema = string()
  .max(15, TITLES_SIMPLE_NEWSLETTER_SING_UP.stringValidateMax)
  .required(TITLES_SIMPLE_NEWSLETTER_SING_UP.stringValidateEmpty);

export const lastNameValidationSchema = string()
  .max(20, TITLES_SIMPLE_NEWSLETTER_SING_UP.stringValidateMax)
  .required(TITLES_SIMPLE_NEWSLETTER_SING_UP.stringValidateEmpty);

export const emailValidationSchema = string()
  .email(TITLES_SIMPLE_NEWSLETTER_SING_UP.stringValidateEmail)
  .required(TITLES_SIMPLE_NEWSLETTER_SING_UP.stringValidateEmpty);
