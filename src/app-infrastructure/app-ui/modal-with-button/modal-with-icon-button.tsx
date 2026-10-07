/* eslint-disable react/require-default-props */
import React, { FC, ReactNode, useCallback, useState } from 'react';
import { Dialog, IconButton, Tooltip } from '@mui/material';
import { TransitionSlideUp } from '../transition-slide-up/transition-slide-up';
import { COLORS } from '../../app-const/colors';
import { TModalButtonProps } from './props-of-modal-with-button';
import TIconColor from '../../app-types/t-icon-color';
import { sxShadowIconButton } from '../style/style-icon-button';

type TIconButtonProps = {
  icon: ReactNode;
  shadow?: boolean;
  disabled?: boolean;
  iconColor?: TIconColor;
};

type TModalWithIconButtonProps = TIconButtonProps & TModalButtonProps;

export const ModalWithIconButton: FC<TModalWithIconButtonProps> = ({
  icon,
  shadow = true,
  disabled = false,
  iconColor,
  title = '',
  fullWidth = true,
  maxWidth = 'md',
  NestedForm,
  childrenNestedForm,
  children
}) => {
  const [open, setOpen] = useState(false);

  const iconButtonHandleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const dialogHandleClose = useCallback(
    (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
      if (reason !== 'backdropClick') {
        setOpen(false);
      }
    },
    []
  );

  const nestedFormHandleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Tooltip
        title={title && title}
        placement='top'
        enterDelay={300}
        enterNextDelay={1000}
      >
        <IconButton
          sx={shadow ? { ...sxShadowIconButton } : {}}
          onClick={iconButtonHandleOpen}
          size='small'
          disabled={disabled}
          color={iconColor}
        >
          {icon}
        </IconButton>
      </Tooltip>

      <Dialog
        hideBackdrop
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={dialogHandleClose}
        scroll='paper'
        slots={{
          transition: TransitionSlideUp
        }}
        slotProps={{
          paper: { sx: { border: `2px solid ${COLORS.gray}` } }
        }}
      >
        {open && !children && NestedForm && (
          <NestedForm onClose={nestedFormHandleClose} title={title}>
            {childrenNestedForm}
          </NestedForm>
        )}
        {open && !NestedForm && children && children}
      </Dialog>
    </>
  );
};
