import * as Joi from 'joi';
import {
  firstNameValidationSchema,
  lastNameValidationSchema,
  emailValidationSchema
} from '../field-validation-schemes/joi-field-validation-schemes';
import {
  TKeyValuesForCreate,
  IValuesForCreate,
  KeyValuesForCreate
} from '../values-for-create';

export type TErrors = Partial<Record<TKeyValuesForCreate, string>>;

export const validateForCreate = (values: IValuesForCreate) => {
  const errors: TErrors = {};

  const firstNameErrorMessage = getErrorMessage(
    firstNameValidationSchema.validate({
      [KeyValuesForCreate.firstName]: values.firstName
    }).error
  );
  if (firstNameErrorMessage) errors.firstName = firstNameErrorMessage;

  const lastNameErrorMessage = getErrorMessage(
    lastNameValidationSchema.validate({
      [KeyValuesForCreate.lastName]: values.lastName
    }).error
  );
  if (lastNameErrorMessage) errors.lastName = lastNameErrorMessage;

  const emailErrorMessage = getErrorMessage(
    emailValidationSchema.validate({
      [KeyValuesForCreate.email]: values.email
    }).error
  );
  if (emailErrorMessage) errors.email = emailErrorMessage;

  return errors;
};

const getErrorMessage = (
  error: Joi.ValidationError | undefined
): string | undefined => {
  if (error) {
    return error.message;
  }
  return undefined;
};
