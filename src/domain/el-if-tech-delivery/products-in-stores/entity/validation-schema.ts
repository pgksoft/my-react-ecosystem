import { object, type ObjectSchema } from 'yup';
import type TValidate from '../../../../app-infrastructure/app-types/t-validate';
import { initialValidate } from '../../../../app-infrastructure/app-types/t-validate';
import type { TValidField } from '../../../../app-infrastructure/yup/types';
import {
  keyProductsInStoresValidationDto,
  type TKeyProductsInStoresValidationDto,
  type TValueValidationProductsInStoresDto
} from './products-in-stores';
import {
  imagesCreateValidationSchema,
  imagesUpdateValidationSchema,
  priceValidationSchema,
  productValidationSchema,
  shopValidationSchema
} from './field-validation-schemas';

type TProductsInStoresDtoValid = Record<
  TKeyProductsInStoresValidationDto,
  TValidate
>;

type TProductsInStoresValidateSchema = Record<
  TKeyProductsInStoresValidationDto,
  TValueValidationProductsInStoresDto
>;

const getInitialProductsInStoresDtoValid =
  (): TValidField<TProductsInStoresValidateSchema> => {
    return {
      shop: initialValidate,
      product: initialValidate,
      price: initialValidate,
      images: initialValidate
    };
  };

const getProductsInStoreCreateValidationSchema =
  (): ObjectSchema<TProductsInStoresValidateSchema> => {
    return object({
      [keyProductsInStoresValidationDto.shop]: shopValidationSchema,
      [keyProductsInStoresValidationDto.product]: productValidationSchema,
      [keyProductsInStoresValidationDto.price]: priceValidationSchema,
      [keyProductsInStoresValidationDto.images]: imagesCreateValidationSchema
    }) satisfies ObjectSchema<TProductsInStoresValidateSchema>;
  };

const getProductsInStoreUpdateValidationSchema =
  (): ObjectSchema<TProductsInStoresValidateSchema> => {
    return object({
      [keyProductsInStoresValidationDto.shop]: shopValidationSchema,
      [keyProductsInStoresValidationDto.product]: productValidationSchema,
      [keyProductsInStoresValidationDto.price]: priceValidationSchema,
      [keyProductsInStoresValidationDto.images]: imagesUpdateValidationSchema
    }) satisfies ObjectSchema<TProductsInStoresValidateSchema>;
  };

export type { TProductsInStoresValidateSchema, TProductsInStoresDtoValid };

export {
  getInitialProductsInStoresDtoValid,
  getProductsInStoreCreateValidationSchema,
  getProductsInStoreUpdateValidationSchema
};
