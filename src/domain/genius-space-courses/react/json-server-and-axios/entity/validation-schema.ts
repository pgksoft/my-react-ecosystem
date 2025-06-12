import { object, ObjectSchema } from 'yup';
import IContact, { TContactDto } from './contacts';
import {
  aboutValidationSchema,
  lastNameValidationSchema,
  nameValidationSchema
} from './field-validation-schemas';
import TValueOf from '../../../../_infrastructure/types/t-value-of';
import TValidate, {
  initialValidate
} from '../../../../_infrastructure/types/t-validate';

type TKeyContactDto = keyof TContactDto;
type TValueContactDto = TValueOf<IContact>;

type TKeyNamesContactDto = Record<TKeyContactDto, TKeyContactDto>;

const keyContactDto: TKeyNamesContactDto = {
  name: 'name',
  lastName: 'lastName',
  about: 'about'
};

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
