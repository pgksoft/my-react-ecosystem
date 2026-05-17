/* eslint-disable react/require-default-props */
import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import replaceNumberString from './helpers/replace-number-string';

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
  const { inputKind, customOnChange, ...restProps } = props;

  const {
    fieldName,
    isValid,
    errorMessage,
    isNumber,
    isIntNumber,
    ...muiProps
  } = restProps as TextFieldProps & TTextFieldInputYup;

  //   const { user } = useContext(AuthContext);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputKind === 'yup') {
      let { value } = e.target;
      if (isNumber || isIntNumber) {
        value = replaceNumberString(value, true);
      }
      // eslint-disable-next-line no-param-reassign
      e.target.value = value;
      customOnChange(fieldName, value);
    } else {
      customOnChange(e);
    }
  };

  const isYup = inputKind === 'yup';

  return (
    <TextField
      //   inputProps={{ ...rest?.inputProps, readOnly: isVisitor(user) }}
      name={isYup ? fieldName : muiProps.name}
      onChange={onChangeValue}
      multiline
      error={isYup ? !isValid : muiProps.error}
      helperText={isYup ? errorMessage : muiProps.helperText}
      variant='standard'
      {...muiProps}
    />
  );
};

export default TextFieldInput;
