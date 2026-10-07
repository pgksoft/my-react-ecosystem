/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/require-default-props */
import React, { FC, ReactNode, useCallback } from 'react';
import { Breakpoint } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router-dom';
import checkReturnParameters from '../helpers/check-return-parameters-for-cascade-call-popups/check-return-parameters';
import { TFormDtoKey } from '../../../redux-toolkit/form-dto-serialization/form-dto-serialization-actions';
import { TransitionSlideUp } from '../../app-ui/transition-slide-up/transition-slide-up';
import { DialogContent } from '@mui/material';
import formDtoSerialization from '../../app-helpers/form-dto-serialization/';

type TDialogPopupWrapperProps = {
  children: ReactNode;
  open: boolean;
  returnUrl: string;
  entityDialogsFieldsKey?: TFormDtoKey;
  fullWidth?: boolean;
  maxWidth?: false | Breakpoint;
};

const DialogPopupWrapper: FC<TDialogPopupWrapperProps> = ({
  open,
  returnUrl,
  entityDialogsFieldsKey,
  fullWidth = true,
  maxWidth = 'md',
  children
}) => {
  const navigate = useNavigate();

  const handleClose = useCallback(
    (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
      if (reason !== 'backdropClick') {
        checkReturnParameters.Pop();
        entityDialogsFieldsKey &&
          formDtoSerialization.Clear(entityDialogsFieldsKey);
        navigate(returnUrl);
      }
    },
    [entityDialogsFieldsKey, navigate, returnUrl]
  );

  return (
    <Dialog
      keepMounted
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
      scroll='body'
      slots={{
        transition: TransitionSlideUp
      }}
      aria-description='dialog-popup-wrapper'
    >
      <DialogContent
        sx={{
          overflow: 'hidden',
          p: 0,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {open && children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogPopupWrapper;
