import { object, string } from 'yup';
import * as Joi from 'joi';
import { TKeyValuesForCreate, IValuesForCreate } from './values-for-create';

export type TErrors = Partial<Record<TKeyValuesForCreate, string>>;

export const validateForCreate = (values: IValuesForCreate) => {
  const errors: TErrors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

export const validationSchemaForCreate = object({
  firstName: string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: string().email('Invalid email address').required('Required')
});

export const joiValidationSchemaForCreate = Joi.object({
  firstName: Joi.string().max(15).required().messages({
    'string.max': 'Must be {#limit} characters or less',
    'string.empty': 'Required'
  }),
  lastName: Joi.string().max(20).required().messages({
    'string.max': 'Must be {#limit} characters or less',
    'string.empty': 'Required'
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.email': 'Invalid email address',
      'string.empty': 'Required'
    })
});
