import React, { FC, useEffect, useState } from 'react';
import { ValidationError } from 'yup';
import ICreateDialog from '../../../../_infrastructure/get-parameter-popups/dialog-create/t-choice-popup-create/i-create-dialog';
import { getInitialContactDto, TContactDto } from '../entity/contacts';
import TextFieldInput from '../../../../_infrastructure/ui/text-field-input/text-field-input';
import TITLES_CONTACT from '../const/titles';
import {
  getContactValidationSchema,
  getInitialContactDtoValid,
  keyContactDto,
  TContactDtoValid
} from '../entity/validation-schema';

const ContactCreate: FC<ICreateDialog> = ({ onCreateDtoReady }) => {
  const [contact, setContact] = useState<TContactDto>(getInitialContactDto);
  const [contactValid, setContactValid] = useState<TContactDtoValid>(
    getInitialContactDtoValid
  );

  const handleContactValueChange = async (
    fieldName: string,
    value: unknown
  ) => {
    const schema = getContactValidationSchema();
    const newContact = { ...contact, [fieldName]: value };
    setContact(newContact);
    schema
      .validate(newContact, { abortEarly: false })
      .then(() => {
        setContactValid(getInitialContactDtoValid());
      })
      .catch((err: ValidationError) => {
        const errors = err.inner.reduce((acc, curVal) => {
          const tempValidate = {
            [`${curVal.path}`]: { valid: false, errorMsg: curVal.message }
          };
          return { ...acc, ...tempValidate };
        }, {});
        setContactValid({ ...getInitialContactDtoValid(), ...errors });
      });
  };

  useEffect(() => {
    const schema = getContactValidationSchema();
    schema.isValid(contact).then((valid) => {
      if (valid) {
        valid && onCreateDtoReady(JSON.stringify(contact));
      }
    });
  }, [contact, onCreateDtoReady]);

  return (
    <>
      <TextFieldInput
        inputKind='yup'
        fieldName={keyContactDto.name}
        isValid={contactValid.name.valid}
        errorMessage={contactValid.name.errorMsg}
        label={TITLES_CONTACT.name}
        value={contact.name}
        customOnChange={handleContactValueChange}
      />
      <TextFieldInput
        inputKind='yup'
        fieldName={keyContactDto.lastName}
        isValid={contactValid.lastName.valid}
        errorMessage={contactValid.lastName.errorMsg}
        label={TITLES_CONTACT.lastName}
        value={contact.lastName}
        customOnChange={handleContactValueChange}
      />
      <TextFieldInput
        inputKind='yup'
        fieldName={keyContactDto.about}
        isValid={contactValid.about.valid}
        errorMessage={contactValid.about.errorMsg}
        label={TITLES_CONTACT.about}
        value={contact.about}
        customOnChange={handleContactValueChange}
      />
    </>
  );
};

export default ContactCreate;
