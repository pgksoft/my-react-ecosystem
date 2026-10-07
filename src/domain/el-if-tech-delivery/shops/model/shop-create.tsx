import React, { type FC } from 'react';
import type ICreateDialog from '../../../../app-infrastructure/get-parameter-popups/dialog-create/t-choice-popup-create/i-create-dialog';
import useDtoValidation from '../../../../app-infrastructure/yup/dto-validation.hook';
import {
  getInitialShopValidationDto,
  keyShopDto,
  type TShopDto,
  type TShopValidationDto
} from '../entity/shops';
import {
  getInitialShopDtoValid,
  getShopValidationSchema,
  type TShopValidateSchema
} from '../entity/validation-schema';
import useFormResetSync from '../../../../app-infrastructure/form/form-reset-sync.hook';
import TextFieldInput from '../../../../app-infrastructure/app-ui/text-field-input/text-field-input';
import TITLES_DELIVERY_SHOPS from '../const/titles';
import RatingFieldInput from '../../../../app-infrastructure/app-ui/rating-field-input';

const ShopCreate: FC<ICreateDialog> = ({ onCreateDtoReady }) => {
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
      onValidDtoReady: onCreateDtoReady,
      transformToDto: (dto: TShopDto) => {
        return dto;
      },
      formDtoKey: 'ShopCreate'
    });

  useFormResetSync(reset, isModified);

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

export default ShopCreate;
