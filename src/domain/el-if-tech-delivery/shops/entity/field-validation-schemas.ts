import { number, string } from 'yup';
import { VALIDATION_MESSAGES } from '../../../../app-infrastructure/yup/validation-messages';

export const nameValidationSchema = string()
  .min(3, VALIDATION_MESSAGES.stringValidateMin)
  .max(80, VALIDATION_MESSAGES.stringValidateMax)
  .required(VALIDATION_MESSAGES.validateEmpty);

export const ratingValidationSchema = number()
  .min(0, VALIDATION_MESSAGES.numberValidateMin)
  .max(50, VALIDATION_MESSAGES.numberValidateMax)
  .required(VALIDATION_MESSAGES.validateEmpty);
