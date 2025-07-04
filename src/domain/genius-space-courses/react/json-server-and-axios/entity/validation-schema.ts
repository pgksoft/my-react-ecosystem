import { object, ObjectSchema } from 'yup';
import { keyContactDto, TKeyContactDto, TValueContactDto } from './contacts';
import {
  aboutValidationSchema,
  lastNameValidationSchema,
  nameValidationSchema
} from './field-validation-schemas';

import TValidate, {
  initialValidate
} from '../../../../_infrastructure/types/t-validate';

type TContactDtoValid = Record<TKeyContactDto, TValidate>;

const getInitialContactDtoValid = (): TContactDtoValid => {
  return {
    name: initialValidate,
    lastName: initialValidate,
    about: initialValidate
  };
};

type TSchema = Record<TKeyContactDto, TValueContactDto>;

const getContactValidationSchema = (): ObjectSchema<TSchema> => {
  return object({
    [keyContactDto.name]: nameValidationSchema,
    [keyContactDto.lastName]: lastNameValidationSchema,
    [keyContactDto.about]: aboutValidationSchema
  }) as ObjectSchema<TSchema>;
};

export type { TContactDtoValid, TKeyContactDto, TValueContactDto };

export { getInitialContactDtoValid, getContactValidationSchema, keyContactDto };
