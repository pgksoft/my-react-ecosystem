import React, { useCallback, useEffect, type FC } from 'react';
import type TDetailDialog from '../../../../app-infrastructure/get-parameter-popups/dialog-detail/t-choice-popup-detail/t-dialog-detail';
import type { IEntityMember } from '../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import {
  getInitialDetailShopValidationDto,
  isShop,
  keyShopDto,
  type TShopDto,
  type TShopValidationDto
} from '../entity/shops';
import useDtoValidation from '../../../../app-infrastructure/yup/dto-validation.hook';
import {
  getInitialShopDtoValid,
  getShopValidationSchema,
  type TShopValidateSchema
} from '../entity/validation-schema';
import useFormResetSync from '../../../../app-infrastructure/form/form-reset-sync.hook';
import ShopBriefDescription from '../ui/shop-brief-description';
import TextFieldInput from '../../../../app-infrastructure/app-ui/text-field-input/text-field-input';
import TITLES_DELIVERY_SHOPS from '../const/titles';
import RatingFieldInput from '../../../../app-infrastructure/app-ui/rating-field-input';
import type { TGetInitialValidationDto } from '../../../../app-infrastructure/yup/types';

export const ShopDetail: FC<TDetailDialog<IEntityMember>> = ({
  entity,
  onUpdateDtoReady,
  getBriefDescription
}) => {
  const getInitialShopValidationDto: TGetInitialValidationDto<TShopValidationDto> =
    useCallback(
      ({ isSerialization }) => {
        return getInitialDetailShopValidationDto({ isSerialization, entity });
      },
      [entity]
    );

  const { dto, dtoValid, handleValueChange, reset, isModified } =
    useDtoValidation<
      TShopValidationDto,
      TShopDto,
      TShopValidateSchema,
      TShopValidationDto
    >({
      getInitialValidationDto: getInitialShopValidationDto,
      initDtoValid: getInitialShopDtoValid,
      getSchema: getShopValidationSchema,
      onValidDtoReady: onUpdateDtoReady,
      transformToDto: (dto: TShopDto) => {
        return dto;
      },
      formDtoKey: 'ShopDetail'
    });

  useFormResetSync(reset, isModified);

  useEffect(() => {
    if (isShop(entity))
      getBriefDescription(<ShopBriefDescription shop={entity} />);
  }, [entity, getBriefDescription]);

  return (
    <>
      <TextFieldInput
        inputKind='yup'
        fieldName={keyShopDto.name}
        isValid={dtoValid.name.valid}
        errorMessage={dtoValid.name.errorMsg}
        label={TITLES_DELIVERY_SHOPS.name}
        value={dto.name}
        customOnChange={handleValueChange}
      />
      <RatingFieldInput
        inputKind='yup'
        fieldName={keyShopDto.rating}
        isValid={dtoValid.rating.valid}
        errorMessage={dtoValid.rating.errorMsg}
        value={dto.rating}
        customOnChange={handleValueChange}
        label={TITLES_DELIVERY_SHOPS.rating}
        formControl={{ sx: { mt: 1.5 } }}
      />
    </>
  );
};
