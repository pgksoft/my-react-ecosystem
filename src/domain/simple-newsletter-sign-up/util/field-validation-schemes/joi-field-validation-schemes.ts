import * as Joi from 'joi';
import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../../const/titles';
import { KeyValues } from '../values-for-create';

export const firstNameValidationSchema = Joi.object({
  [KeyValues.firstName]: Joi.string().max(15).required().messages({
    'string.max': TITLES_SIMPLE_NEWSLETTER_SING_UP.stringValidateMax,
    'string.empty': TITLES_SIMPLE_NEWSLETTER_SING_UP.stringValidateEmpty
  })
});

export const lastNameValidationSchema = Joi.object({
  [KeyValues.lastName]: Joi.string().max(20).required().messages({
    'string.max': TITLES_SIMPLE_NEWSLETTER_SING_UP.stringValidateMax,
    'string.empty': TITLES_SIMPLE_NEWSLETTER_SING_UP.stringValidateEmpty
  })
});

export const emailValidationSchema = Joi.object({
  [KeyValues.email]: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.email': TITLES_SIMPLE_NEWSLETTER_SING_UP.stringValidateEmail,
      'string.empty': TITLES_SIMPLE_NEWSLETTER_SING_UP.stringValidateEmpty
    })
});
