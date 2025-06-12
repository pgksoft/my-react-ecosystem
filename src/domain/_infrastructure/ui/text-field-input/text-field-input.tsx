/* eslint-disable react/require-default-props */
import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type TTextFieldInput = {
  fieldName: string;
  isValid: boolean;
  errorMessage: string;
  customOnChange: (fieldName: string, value: unknown) => void;
  isNumber?: boolean;
  isIntNumber?: boolean;
};

const TextFieldInput: React.FC<TTextFieldInput & TextFieldProps> = (props) => {
  const {
    fieldName,
    isValid,
    errorMessage,
    customOnChange,
    isNumber,
    isIntNumber,
    ...rest
  } = props;

  //   const { user } = useContext(AuthContext);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    if (isNumber || isIntNumber) {
      value = replaceNumberString(value, true);
    }
    e.target.value = value;
    customOnChange(fieldName, value);
  };

  return (
    <TextField
      //   inputProps={{ ...rest?.inputProps, readOnly: isVisitor(user) }}
      name={fieldName}
      onChange={onChangeValue}
      multiline
      error={!isValid}
      helperText={errorMessage}
      variant='standard'
      {...rest}
    />
  );
};

export default TextFieldInput;

// helpers
function replaceNumberString(value: string, isIntNumber: boolean): string {
  let regExp = new RegExp(/[^.,\d]/g);
  if (isIntNumber) {
    regExp = new RegExp(/[^\d]/g);
  }
  return value
    .replace(/^0+(?![^\d]|$)/g, '')
    .replace(regExp, '')
    .replace(',', '.');
}
