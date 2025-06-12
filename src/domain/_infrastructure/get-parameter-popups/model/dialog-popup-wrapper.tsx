/* eslint-disable react/require-default-props */
import React, { FC, ReactNode, useCallback } from 'react';
import { Breakpoint } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router-dom';
import checkReturnParameters from '../helpers/check-return-parameters-for-cascade-call-popups/check-return-parameters';
import { TEntityDialogsFieldsKey } from '../../../../redux-toolkit/entity-dialogs-fields-values/entity-dialogs-fields-values-actions';
import useAppDispatch from '../../../../store/use-app-dispatch';
import { clearEntityDialogsFields } from '../../../../redux-toolkit/entity-dialogs-fields-values/entity-dialogs-fields-values-slice';

type TDialogPopupWrapperProps = {
  children: ReactNode;
  open: boolean;
  returnUrl: string;
  entityDialogsFieldsKey?: TEntityDialogsFieldsKey;
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
  const appDispatch = useAppDispatch();

  const handleClose = useCallback(
    (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
      if (reason !== 'backdropClick') {
        checkReturnParameters.Pop();
        entityDialogsFieldsKey &&
          appDispatch(clearEntityDialogsFields(entityDialogsFieldsKey));
        navigate(returnUrl);
      }
    },
    [appDispatch, entityDialogsFieldsKey, navigate, returnUrl]
  );

  return (
    <Dialog
      keepMounted
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
      scroll='body'
    >
      {open && children}
    </Dialog>
  );
};

export default DialogPopupWrapper;
