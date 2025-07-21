import { object, ObjectSchema } from 'yup';
import {
  keyContactDto,
  TContactDto,
  TKeyContactDto,
  TValueContactDto
} from './contacts';
import {
  aboutValidationSchema,
  lastNameValidationSchema,
  nameValidationSchema
} from './field-validation-schemas';

import TValidate, {
  initialValidate
} from '../../../../_infrastructure/types/t-validate';
import { TValidField } from '../../../../_infrastructure/yup/types';

type TContactDtoValid = Record<TKeyContactDto, TValidate>;

const getInitialContactDtoValid = (): TValidField<TContactDto> => {
  return {
    name: initialValidate,
    lastName: initialValidate,
    about: initialValidate
  };
};

type TContactValidateSchema = Record<TKeyContactDto, TValueContactDto>;

const getContactValidationSchema = (): ObjectSchema<TContactValidateSchema> => {
  return object({
    [keyContactDto.name]: nameValidationSchema,
    [keyContactDto.lastName]: lastNameValidationSchema,
    [keyContactDto.about]: aboutValidationSchema
  }) as ObjectSchema<TContactValidateSchema>;
};

export type {
  TContactValidateSchema,
  TContactDtoValid,
  TKeyContactDto,
  TValueContactDto
};

export { getInitialContactDtoValid, getContactValidationSchema, keyContactDto };
