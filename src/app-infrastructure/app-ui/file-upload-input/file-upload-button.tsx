import React, { type ReactNode } from 'react';
import FileUploadInputBase from './base';
import type { TFileUploadInputBaseProps } from './base';
import type { ButtonProps } from '@mui/material';
import { DefaultButton } from '../default-button/default-button';

type TFileUploadButtonProps = {
  label?: string;
  startIcon?: ReactNode;
  buttonProps?: ButtonProps;
};

export const FileUploadButton: React.FC<
  TFileUploadInputBaseProps & TFileUploadButtonProps
> = (props) => {
  const {
    label = 'Upload',
    startIcon,
    buttonProps,
    isValid,
    ...restBase
  } = props;
  return (
    <FileUploadInputBase
      isValid={isValid}
      {...restBase}
      renderTrigger={(open) => {
        return (
          <DefaultButton
            startIcon={startIcon}
            onClick={open}
            variant='contained'
            {...buttonProps}
          >
            {label}
          </DefaultButton>
        );
      }}
    />
  );
};
