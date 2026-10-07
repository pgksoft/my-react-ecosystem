import React, { useCallback, useEffect, type FC } from 'react';
import type TDetailDialog from '../../../../app-infrastructure/get-parameter-popups/dialog-detail/t-choice-popup-detail/t-dialog-detail';
import {
  getInitialDetailProductValidationDto,
  isProduct,
  keyProductDto,
  transformToDto,
  type TProductDto,
  type TProductValidationDto
} from '../entity/product';
import useDtoValidation from '../../../../app-infrastructure/yup/dto-validation.hook';
import {
  getInitialProductDtoValid,
  getProductValidationSchema,
  type TProductValidateSchema
} from '../entity/validation-schema';
import useFormResetSync from '../../../../app-infrastructure/form/form-reset-sync.hook';
import TextFieldInput from '../../../../app-infrastructure/app-ui/text-field-input/text-field-input';
import { SelectingEntityItemsWrapper } from '../../../../app-infrastructure/app-ui/selecting-entity-items-wrapper';
import { AsyncAutoComplete } from '../../../../app-infrastructure/app-ui/async-autocomplete';
import TITLES_DELIVERY_PRODUCT from '../const/titles';
import {
  getProductCategoryId,
  getProductCategoryOptionLabel,
  productCategoryFetchAll
} from '../../product-category-dic/entity/product-category';
import type { IEntityMember } from '../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import ProductBriefDescription from '../helpers/product-brief-description';
import type { TGetInitialValidationDto } from '../../../../app-infrastructure/yup/types';

const ProductDetail: FC<TDetailDialog<IEntityMember>> = ({
  entity,
  onUpdateDtoReady,
  getBriefDescription
}) => {
  const getInitialProductValidationDto: TGetInitialValidationDto<TProductValidationDto> =
    useCallback(
      ({ isSerialization }) => {
        return getInitialDetailProductValidationDto({
          isSerialization,
          entity
        });
      },
      [entity]
    );

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
      onValidDtoReady: onUpdateDtoReady,
      transformToDto,
      formDtoKey: 'ProductDicDetail'
    });

  useFormResetSync(reset, isModified);

  useEffect(() => {
    if (isProduct(entity)) {
      getBriefDescription(<ProductBriefDescription product={entity} />);
    }
  }, [entity, getBriefDescription]);

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
        cascadeParams={{ returnPopup: 'ProductDicDetail' }}
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

export default ProductDetail;
