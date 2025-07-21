/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FC } from 'react';
import ICreateDialog from '../../../../_infrastructure/get-parameter-popups/dialog-create/t-choice-popup-create/i-create-dialog';
import { getInitialContactDto, TContactDto } from '../entity/contacts';
import TextFieldInput from '../../../../_infrastructure/ui/text-field-input/text-field-input';
import TITLES_CONTACT from '../const/titles';
import {
  getContactValidationSchema,
  getInitialContactDtoValid,
  keyContactDto,
  TContactValidateSchema
} from '../entity/validation-schema';
import useDtoValidation from '../../../../_infrastructure/yup/dto-validation.hook';
import useFormResetSync from '../../../../_infrastructure/form/form-reset-sync.hook';

const ContactCreate: FC<ICreateDialog> = ({ onCreateDtoReady }) => {
  const { dto, dtoValid, handleValueChange, reset, isModified } =
    useDtoValidation<TContactDto, TContactValidateSchema>({
      initialDto: getInitialContactDto,
      initDtoValid: getInitialContactDtoValid,
      getSchema: getContactValidationSchema,
      onValidDtoReady: onCreateDtoReady
    });

  useFormResetSync(reset, isModified);

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

export default ContactCreate;
