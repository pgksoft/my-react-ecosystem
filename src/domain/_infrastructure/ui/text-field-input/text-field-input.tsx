/* eslint-disable react/require-default-props */
import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type TTextFieldInputYup = {
  inputKind: 'yup';
  fieldName: string;
  isValid: boolean;
  errorMessage: string;
  customOnChange: (fieldName: string, value: unknown) => void;
  isNumber?: boolean;
  isIntNumber?: boolean;
};

type TTextFieldInputMUI = {
  inputKind: 'mui';
  customOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type TTextFieldInput = TextFieldProps &
  (TTextFieldInputYup | TTextFieldInputMUI);

const TextFieldInput: React.FC<TTextFieldInput & TextFieldProps> = (props) => {
  const { inputKind, customOnChange, ...rest } = props;

  //   const { user } = useContext(AuthContext);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputKind === 'yup') {
      const { isNumber, isIntNumber, fieldName } = props;
      let { value } = e.target;
      if (isNumber || isIntNumber) {
        value = replaceNumberString(value, true);
      }
      e.target.value = value;
      customOnChange(fieldName, value);
    } else {
      customOnChange(e);
    }
  };

  return (
    <TextField
      //   inputProps={{ ...rest?.inputProps, readOnly: isVisitor(user) }}
      name={isYupProps(props) ? props.fieldName : rest.name}
      onChange={onChangeValue}
      multiline
      error={isYupProps(props) ? !props.isValid : rest.error}
      helperText={isYupProps(props) ? props.errorMessage : rest.helperText}
      variant='standard'
      {...rest}
    />
  );
};

export default TextFieldInput;

// helpers
const replaceNumberString = (value: string, isIntNumber: boolean): string => {
  let regExp = new RegExp(/[^.,\d]/g);
  if (isIntNumber) {
    regExp = new RegExp(/[^\d]/g);
  }
  return value
    .replace(/^0+(?![^\d]|$)/g, '')
    .replace(regExp, '')
    .replace(',', '.');
};

const isYupProps = (
  props: TTextFieldInput
): props is TextFieldProps & TTextFieldInputYup => {
  return props.inputKind === 'yup';
};
