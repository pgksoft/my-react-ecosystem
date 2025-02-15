/* eslint-disable react/require-default-props */
import React, { CSSProperties, FC, useState } from 'react';
import { Dialog } from '@mui/material';
import { TransitionSlideUp } from '../transition-slide-up/transition-slide-up';
import { COLORS } from '../../../../_const/colors';
import { TModalButtonProps } from './props-of-modal-with-button';
import { DefaultButton } from '../default-button/default-button';

type TButtonProps = {
  disabled?: boolean;
  styleButton?: CSSProperties;
};

type TModalWithButtonProps = TButtonProps & TModalButtonProps;

export const ModalWithButton: FC<TModalWithButtonProps> = ({
  disabled = false,
  styleButton,
  title = '',
  fullWidth = true,
  maxWidth = 'md',
  NestedForm,
  childrenNestedForm,
  children
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <>
      <DefaultButton
        onClick={handleOpen}
        disabled={disabled}
        variant='contained'
        style={{ color: COLORS.primaryMain, ...styleButton }}
      >
        {title}
      </DefaultButton>

      <Dialog
        hideBackdrop
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        scroll='paper'
        TransitionComponent={TransitionSlideUp}
        PaperProps={{ sx: { border: `2px solid ${COLORS.gray}` } }}
      >
        {open && !children && NestedForm && (
          <NestedForm
            onClose={() => {
              setOpen(false);
            }}
            title={title}
          >
            {childrenNestedForm}
          </NestedForm>
        )}
        {open && !NestedForm && children && children}
      </Dialog>
    </>
  );
};
