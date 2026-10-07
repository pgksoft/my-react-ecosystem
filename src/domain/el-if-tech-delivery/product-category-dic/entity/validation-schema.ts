import { object, ObjectSchema } from 'yup';
import {
  keyProductCategoryDto,
  type TKeyProductCategoryDto,
  type TProductCategoryDto,
  type TValueProductCategoryDto
} from './product-category';
import type TValidate from '../../../../app-infrastructure/app-types/t-validate';
import { initialValidate } from '../../../../app-infrastructure/app-types/t-validate';
import type { TValidField } from '../../../../app-infrastructure/yup/types';
import { nameValidationSchema } from './field-validation-schemas';

type TProductCategoryDtoValid = Record<TKeyProductCategoryDto, TValidate>;

type TProductCategoryValidateSchema = Record<
  TKeyProductCategoryDto,
  TValueProductCategoryDto
>;

const getInitialProductCategoryDtoValid =
  (): TValidField<TProductCategoryDto> => {
    return { name: initialValidate };
  };

const getProductCategoryValidationSchema =
  (): ObjectSchema<TProductCategoryValidateSchema> => {
    return object({
      [keyProductCategoryDto.name]: nameValidationSchema
    }) as ObjectSchema<TProductCategoryValidateSchema>;
  };

export type { TProductCategoryValidateSchema, TProductCategoryDtoValid };

export {
  getInitialProductCategoryDtoValid,
  getProductCategoryValidationSchema
};
