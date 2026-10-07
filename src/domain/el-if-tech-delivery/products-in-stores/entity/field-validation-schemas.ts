import {
  mixed,
  number,
  object,
  string,
  type MixedSchema,
  type ObjectSchema
} from 'yup';
import {
  MAX_SIZE,
  SUPPORTED_IMAGE_FORMATS,
  VALIDATION_MESSAGES
} from '../../../../app-infrastructure/yup/validation-messages';
import type { TShop } from '../../shops/entity/shops';
import type { TProduct } from '../../product-dic/entity/product';
import { categoryValidationSchema } from '../../product-dic/entity/field-validation-schemas';

export const shopValidationSchema = object({
  id: string().required(VALIDATION_MESSAGES.propertyEmpty),
  name: string().required(VALIDATION_MESSAGES.propertyEmpty),
  rating: number().required(VALIDATION_MESSAGES.propertyEmpty),
  mutationDate: string().required(VALIDATION_MESSAGES.propertyEmpty)
}).required(VALIDATION_MESSAGES.validateEmpty) satisfies ObjectSchema<TShop>;

export const productValidationSchema = object({
  id: string().required(VALIDATION_MESSAGES.propertyEmpty),
  name: string().required(VALIDATION_MESSAGES.propertyEmpty),
  category: categoryValidationSchema,
  mutationDate: string().required(VALIDATION_MESSAGES.propertyEmpty)
}).required(VALIDATION_MESSAGES.validateEmpty) satisfies ObjectSchema<TProduct>;

export const priceValidationSchema = number()
  .min(0.01, VALIDATION_MESSAGES.numberValidateMin)
  .required(VALIDATION_MESSAGES.validateEmpty);

export const imagesCreateValidationSchema = mixed<FileList>()
  .required(VALIDATION_MESSAGES.validateEmpty)
  .test(
    VALIDATION_MESSAGES.validateEmpty,
    VALIDATION_MESSAGES.fileRequired,
    (value) => {
      return !!value && value.length > 0;
    }
  )
  .test(
    VALIDATION_MESSAGES.fileType,
    VALIDATION_MESSAGES.allowedFileTypes,
    (value) => {
      if (!value || value.length === 0) return true;
      const f = value[0];
      return SUPPORTED_IMAGE_FORMATS.includes(f.type);
    }
  )
  .test(
    VALIDATION_MESSAGES.fileSize,
    VALIDATION_MESSAGES.maxFileSize,
    (value) => {
      if (!value || value.length === 0) return true;
      const f = value[0];
      return f.size <= MAX_SIZE;
    }
  );

export const imagesUpdateValidationSchema = mixed()
  .nullable()
  .notRequired()
  .test(
    VALIDATION_MESSAGES.fileType,
    VALIDATION_MESSAGES.allowedFileTypes,
    (value) => {
      if (
        value === null ||
        !value ||
        (value instanceof FileList && value.length === 0)
      )
        return true;
      if (value instanceof FileList && value.length > 0) {
        const f = value[0];
        return SUPPORTED_IMAGE_FORMATS.includes(f.type);
      }
    }
  )
  .test(
    VALIDATION_MESSAGES.fileSize,
    VALIDATION_MESSAGES.maxFileSize,
    (value) => {
      if (
        value === null ||
        !value ||
        (value instanceof FileList && value.length === 0)
      )
        return true;
      if (value instanceof FileList && value.length > 0) {
        const f = value[0];
        return f.size <= MAX_SIZE;
      }
    }
  ) as unknown as MixedSchema<FileList | null>;
