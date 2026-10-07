import React, { type FC } from 'react';
import type ICreateDialog from '../../../../app-infrastructure/get-parameter-popups/dialog-create/t-choice-popup-create/i-create-dialog';
import useDtoValidation from '../../../../app-infrastructure/yup/dto-validation.hook';
import {
  getInitialProductCategoryDto,
  keyProductCategoryDto,
  type TProductCategoryDto
} from '../entity/product-category';
import {
  getInitialProductCategoryDtoValid,
  getProductCategoryValidationSchema,
  type TProductCategoryValidateSchema
} from '../entity/validation-schema';
import useFormResetSync from '../../../../app-infrastructure/form/form-reset-sync.hook';
import TextFieldInput from '../../../../app-infrastructure/app-ui/text-field-input/text-field-input';
import TITLES_DELIVERY_PRODUCT_CATEGORY from '../const/titles';

const ProductCategoryCreate: FC<ICreateDialog> = ({ onCreateDtoReady }) => {
  const { dto, dtoValid, handleValueChange, reset, isModified } =
    useDtoValidation<
      TProductCategoryDto,
      TProductCategoryDto,
      TProductCategoryValidateSchema,
      TProductCategoryDto
    >({
      getInitialValidationDto: getInitialProductCategoryDto,
      initDtoValid: getInitialProductCategoryDtoValid,
      getSchema: getProductCategoryValidationSchema,
      onValidDtoReady: onCreateDtoReady,
      transformToDto: (dto: TProductCategoryDto) => {
        return dto;
      },
      formDtoKey: 'ProductCategoryDicCreate'
    });

  useFormResetSync(reset, isModified);

  return (
    <TextFieldInput
      inputKind='yup'
      fieldName={keyProductCategoryDto.name}
      isValid={dtoValid.name.valid}
      errorMessage={dtoValid.name.errorMsg}
      label={TITLES_DELIVERY_PRODUCT_CATEGORY.name}
      value={dto.name}
      customOnChange={handleValueChange}
    />
  );
};

export default ProductCategoryCreate;
