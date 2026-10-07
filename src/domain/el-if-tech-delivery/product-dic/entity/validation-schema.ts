import { object, type ObjectSchema } from 'yup';
import type TValidate from '../../../../app-infrastructure/app-types/t-validate';
import { initialValidate } from '../../../../app-infrastructure/app-types/t-validate';
import type { TValidField } from '../../../../app-infrastructure/yup/types';
import {
  keyProductDto,
  type TKeyProductDto,
  type TProductDto,
  type TValueValidationProductDto
} from './product';
import {
  categoryValidationSchema,
  nameValidationSchema
} from './field-validation-schemas';

type TProductDtoValid = Record<TKeyProductDto, TValidate>;

type TProductValidateSchema = Record<
  TKeyProductDto,
  TValueValidationProductDto
>;

const getInitialProductDtoValid = (): TValidField<TProductDto> => {
  return { name: initialValidate, category: initialValidate };
};

const getProductValidationSchema = (): ObjectSchema<TProductValidateSchema> => {
  return object({
    [keyProductDto.name]: nameValidationSchema,
    [keyProductDto.category]: categoryValidationSchema
  }) satisfies ObjectSchema<TProductValidateSchema>;
};

export type { TProductValidateSchema, TProductDtoValid };

export { getInitialProductDtoValid, getProductValidationSchema };
