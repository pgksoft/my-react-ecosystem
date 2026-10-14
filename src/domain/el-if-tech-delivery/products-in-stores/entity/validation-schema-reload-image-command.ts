import { object, type ObjectSchema } from 'yup';
import type TValidate from '../../../../app-infrastructure/app-types/t-validate';
import { initialValidate } from '../../../../app-infrastructure/app-types/t-validate';
import type { TValidField } from '../../../../app-infrastructure/yup/types';
import {
  keyReloadImageCommandValidationDto,
  type TKeyReloadImageCommandValidationDto,
  type TValueReloadImageCommandValidationDto
} from './product-in-stores-modal-command';
import { imagesUpdateValidationSchema } from './field-validation-schemas';

type TReloadImageCommandDtoValid = Record<
  TKeyReloadImageCommandValidationDto,
  TValidate
>;

type TReloadImageCommandValidateSchema = Record<
  TKeyReloadImageCommandValidationDto,
  TValueReloadImageCommandValidationDto
>;

const getInitialReloadImageCommandDtoValid =
  (): TValidField<TReloadImageCommandValidateSchema> => {
    return {
      images: initialValidate
    };
  };

const getReloadImageCommandValidationSchema =
  (): ObjectSchema<TReloadImageCommandValidateSchema> => {
    return object({
      [keyReloadImageCommandValidationDto.images]: imagesUpdateValidationSchema
    }) satisfies ObjectSchema<TReloadImageCommandValidateSchema>;
  };

export type { TReloadImageCommandValidateSchema, TReloadImageCommandDtoValid };

export {
  getInitialReloadImageCommandDtoValid,
  getReloadImageCommandValidationSchema
};
