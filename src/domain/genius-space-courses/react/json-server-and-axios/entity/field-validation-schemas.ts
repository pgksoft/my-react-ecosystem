import { string } from 'yup';
import TITLES_CONTACT from '../const/titles';

export const nameValidationSchema = string()
  .min(2, TITLES_CONTACT.stringValidateMin)
  .max(15, TITLES_CONTACT.stringValidateMax)
  .required(TITLES_CONTACT.stringValidateEmpty);

export const lastNameValidationSchema = string()
  .min(2, TITLES_CONTACT.stringValidateMin)
  .max(20, TITLES_CONTACT.stringValidateMax)
  .required(TITLES_CONTACT.stringValidateEmpty);

export const aboutValidationSchema = string().max(
  255,
  TITLES_CONTACT.stringValidateMax
);
