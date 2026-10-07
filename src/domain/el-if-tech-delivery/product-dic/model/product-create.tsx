import React, { type FC } from 'react';
import type ICreateDialog from '../../../../app-infrastructure/get-parameter-popups/dialog-create/t-choice-popup-create/i-create-dialog';
import useDtoValidation from '../../../../app-infrastructure/yup/dto-validation.hook';
import {
  getInitialProductValidationDto,
  keyProductDto,
  transformToDto,
  type TProductDto,
  type TProductValidationDto
} from '../entity/product';
import {
  getInitialProductDtoValid,
  getProductValidationSchema,
  type TProductValidateSchema
} from '../entity/validation-schema';
import useFormResetSync from '../../../../app-infrastructure/form/form-reset-sync.hook';
import TextFieldInput from '../../../../app-infrastructure/app-ui/text-field-input/text-field-input';
import TITLES_DELIVERY_PRODUCT from '../const/titles';
import { AsyncAutoComplete } from '../../../../app-infrastructure/app-ui/async-autocomplete';
import {
  getProductCategoryId,
  getProductCategoryOptionLabel,
  productCategoryFetchAll
} from '../../product-category-dic/entity/product-category';
import { SelectingEntityItemsWrapper } from '../../../../app-infrastructure/app-ui/selecting-entity-items-wrapper';

const ProductCreate: FC<ICreateDialog> = ({ onCreateDtoReady }) => {
  const { dto, dtoValid, handleValueChange, reset, isModified } =
    useDtoValidation<
      TProductValidationDto,
      TProductDto,
      TProductValidateSchema,
      TProductValidationDto
    >({
      getInitialValidationDto: getInitialProductValidationDto,
      initDtoValid: getInitialProductDtoValid,
      getSchema: getProductValidationSchema,
      onValidDtoReady: onCreateDtoReady,
      transformToDto,
      formDtoKey: 'ProductDicCreate'
    });

  useFormResetSync(reset, isModified);

  return (
    <>
      <TextFieldInput
        inputKind='yup'
        fieldName={keyProductDto.name}
        isValid={dtoValid.name.valid}
        errorMessage={dtoValid.name.errorMsg}
        label={TITLES_DELIVERY_PRODUCT.name}
        value={dto.name}
        customOnChange={handleValueChange}
      />
      <SelectingEntityItemsWrapper
        entityNameKey='productCategoryDic'
        cascadeParams={{ returnPopup: 'ProductDicCreate' }}
      >
        <AsyncAutoComplete
          inputKind='yup'
          label={TITLES_DELIVERY_PRODUCT.category}
          textFieldProps={{ helperText: TITLES_DELIVERY_PRODUCT.choice }}
          fieldName={keyProductDto.category}
          isValid={dtoValid.category.valid}
          errorMessage={dtoValid.category.errorMsg}
          value={dto.category}
          customOnChange={handleValueChange}
          fetchAll={productCategoryFetchAll}
          getOptionLabel={getProductCategoryOptionLabel}
          getId={getProductCategoryId}
          sx={{ mt: 2 }}
        />
      </SelectingEntityItemsWrapper>
    </>
  );
};

export default ProductCreate;
