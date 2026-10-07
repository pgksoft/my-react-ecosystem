export const MAX_SIZE = 30 * 1024;
export const SUPPORTED_IMAGE_FORMATS = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp'
];

export const VALIDATION_MESSAGES = {
  stringValidateMin: 'Must be at least ${min} characters',
  stringValidateMax: 'Must be ${max} characters or less',
  validateEmpty: 'Required',
  propertyEmpty: 'Property is required',
  numberValidateMin: 'Must be greater than or equal to ${min}',
  numberValidateMax: 'It must be less than or equal to ${max}',
  fileRequired: 'File must be upload',
  fileType: 'fileType',
  allowedFileTypes: `Allowed file types: ${SUPPORTED_IMAGE_FORMATS.join(', ')}`,
  fileSize: 'fileSize',
  maxFileSize: `File size must be less than or equal to ${MAX_SIZE}b`
};
