import React, { FC, useCallback, useEffect } from 'react';
import type TDetailDialog from '../../../../app-infrastructure/get-parameter-popups/dialog-detail/t-choice-popup-detail/t-dialog-detail';
import type { IEntityMember } from '../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import {
  getInitialDetailProductCategoryDto,
  keyProductCategoryDto,
  type TProductCategoryDto
} from '../entity/product-category';
import useDtoValidation from '../../../../app-infrastructure/yup/dto-validation.hook';
import {
  getInitialProductCategoryDtoValid,
  getProductCategoryValidationSchema,
  type TProductCategoryValidateSchema
} from '../entity/validation-schema';
import useFormResetSync from '../../../../app-infrastructure/form/form-reset-sync.hook';
import TextFieldInput from '../../../../app-infrastructure/app-ui/text-field-input/text-field-input';
import TITLES_DELIVERY_PRODUCT_CATEGORY from '../const/titles';
import getProductCategoryBriefDescription from '../helpers/get-product-category-brief-description';
import type { TGetInitialValidationDto } from '../../../../app-infrastructure/yup/types';

const ProductCategoryDetail: FC<TDetailDialog<IEntityMember>> = ({
  entity,
  onUpdateDtoReady,
  getBriefDescription
}) => {
  const getInitialProductCategoryDto: TGetInitialValidationDto<TProductCategoryDto> =
    useCallback(
      ({ isSerialization }) => {
        return getInitialDetailProductCategoryDto({ isSerialization, entity });
      },
      [entity]
    );

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
      onValidDtoReady: onUpdateDtoReady,
      transformToDto: (dto: TProductCategoryDto) => {
        return dto;
      },
      formDtoKey: 'ProductCategoryDicDetail'
    });

  useFormResetSync(reset, isModified);

  useEffect(() => {
    getBriefDescription(
      getProductCategoryBriefDescription(
        getInitialProductCategoryDto({ isSerialization: false }).validationDto
      )
    );
  }, [getBriefDescription, getInitialProductCategoryDto]);

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

export default ProductCategoryDetail;
