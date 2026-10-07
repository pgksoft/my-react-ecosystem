/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FC, useCallback, useEffect } from 'react';
import TDetailDialog from '../../../../../app-infrastructure/get-parameter-popups/dialog-detail/t-choice-popup-detail/t-dialog-detail';
import {
  getInitialDetailContactDto,
  keyContactDto,
  TContactDto
} from '../entity/contacts';
import {
  getContactValidationSchema,
  getInitialContactDtoValid,
  TContactValidateSchema
} from '../entity/validation-schema';
import TextFieldInput from '../../../../../app-infrastructure/app-ui/text-field-input/text-field-input';
import TITLES_CONTACT from '../const/titles';
import useDtoValidation from '../../../../../app-infrastructure/yup/dto-validation.hook';
import getContactBriefDescription from '../helpers/get-contact-brief-description';
import useFormResetSync from '../../../../../app-infrastructure/form/form-reset-sync.hook';
import type { IEntityMember } from '../../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';

const ContactDetail: FC<TDetailDialog<IEntityMember>> = ({
  entity,
  getBriefDescription,
  onUpdateDtoReady
}) => {
  const getInitialContactDto = useCallback(() => {
    return getInitialDetailContactDto(entity);
  }, [entity]);

  const { dto, dtoValid, handleValueChange, reset, isModified } =
    useDtoValidation<
      TContactDto,
      TContactDto,
      TContactValidateSchema,
      TContactDto
    >({
      getInitialValidationDto: getInitialContactDto,
      initDtoValid: getInitialContactDtoValid,
      getSchema: getContactValidationSchema,
      onValidDtoReady: onUpdateDtoReady,
      transformToDto: (validationDto: TContactDto) => {
        return validationDto;
      },
      formDtoKey: 'ContactDetail'
    });

  useFormResetSync(reset, isModified);

  useEffect(() => {
    getBriefDescription(
      getContactBriefDescription(getInitialContactDto().validationDto)
    );
  }, [getBriefDescription, getInitialContactDto]);

  return (
    <>
      <TextFieldInput
        inputKind='yup'
        fieldName={keyContactDto.name}
        isValid={dtoValid.name.valid}
        errorMessage={dtoValid.name.errorMsg}
        label={TITLES_CONTACT.name}
        value={dto.name}
        customOnChange={handleValueChange}
      />
      <TextFieldInput
        inputKind='yup'
        fieldName={keyContactDto.lastName}
        isValid={dtoValid.lastName.valid}
        errorMessage={dtoValid.lastName.errorMsg}
        label={TITLES_CONTACT.lastName}
        value={dto.lastName}
        customOnChange={handleValueChange}
      />
      <TextFieldInput
        inputKind='yup'
        fieldName={keyContactDto.about}
        isValid={dtoValid.about.valid}
        errorMessage={dtoValid.about.errorMsg}
        label={TITLES_CONTACT.about}
        value={dto.about}
        customOnChange={handleValueChange}
      />
    </>
  );
};

export default ContactDetail;
