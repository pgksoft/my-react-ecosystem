import { object, string, type ObjectSchema } from 'yup';
import { VALIDATION_MESSAGES } from '../../../../app-infrastructure/yup/validation-messages';
import type { TProductCategory } from '../../product-category-dic/entity/product-category';

export const nameValidationSchema = string()
  .min(3, VALIDATION_MESSAGES.stringValidateMin)
  .max(160, VALIDATION_MESSAGES.stringValidateMax)
  .required(VALIDATION_MESSAGES.validateEmpty);

export const categoryValidationSchema = object({
  id: string().required(VALIDATION_MESSAGES.propertyEmpty),
  name: string().required(VALIDATION_MESSAGES.propertyEmpty),
  mutationDate: string().required(VALIDATION_MESSAGES.propertyEmpty)
}).required(
  VALIDATION_MESSAGES.validateEmpty
) satisfies ObjectSchema<TProductCategory>;
