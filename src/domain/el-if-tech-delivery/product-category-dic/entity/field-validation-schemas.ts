import { string } from 'yup';
import { VALIDATION_MESSAGES } from '../../../../app-infrastructure/yup/validation-messages';

export const nameValidationSchema = string()
  .min(3, VALIDATION_MESSAGES.stringValidateMin)
  .max(160, VALIDATION_MESSAGES.stringValidateMax)
  .required(VALIDATION_MESSAGES.validateEmpty);
