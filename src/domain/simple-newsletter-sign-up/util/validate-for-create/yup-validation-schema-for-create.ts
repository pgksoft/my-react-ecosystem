import { object } from 'yup';
import {
  emailValidationSchema,
  firstNameValidationSchema,
  lastNameValidationSchema
} from '../field-validation-schemes/yup-field-validation-schemes';
import { KeyValuesForCreate } from '../values-for-create';

export const validationSchemaForCreate = object({
  [KeyValuesForCreate.firstName]: firstNameValidationSchema,
  [KeyValuesForCreate.lastName]: lastNameValidationSchema,
  [KeyValuesForCreate.email]: emailValidationSchema
});
