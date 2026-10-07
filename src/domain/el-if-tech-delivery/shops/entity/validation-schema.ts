import { object, type ObjectSchema } from 'yup';
import type TValidate from '../../../../app-infrastructure/app-types/t-validate';
import { initialValidate } from '../../../../app-infrastructure/app-types/t-validate';
import type { TValidField } from '../../../../app-infrastructure/yup/types';
import {
  keyShopDto,
  type TKeyShopDto,
  type TShopDto,
  type TValueValidationShopDto
} from './shops';
import {
  nameValidationSchema,
  ratingValidationSchema
} from './field-validation-schemas';

type TShopDtoValid = Record<TKeyShopDto, TValidate>;

type TShopValidateSchema = Record<TKeyShopDto, TValueValidationShopDto>;

const getInitialShopDtoValid = (): TValidField<TShopDto> => {
  return { name: initialValidate, rating: initialValidate };
};

const getShopValidationSchema = (): ObjectSchema<TShopValidateSchema> => {
  return object({
    [keyShopDto.name]: nameValidationSchema,
    [keyShopDto.rating]: ratingValidationSchema
  }) satisfies ObjectSchema<TShopValidateSchema>;
};

export type { TShopValidateSchema, TShopDtoValid };

export { getInitialShopDtoValid, getShopValidationSchema };
