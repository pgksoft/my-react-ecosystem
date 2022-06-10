/* eslint-disable react/require-default-props */
import React, { FC, ReactNode, useState } from 'react';
import clsx from 'clsx';
import { Dialog, IconButton, Tooltip } from '@mui/material';
import { useStyleIconButton } from '../style/style-icon-button';
import { TransitionSlideUp } from '../transition-slide-up/transition-slide-up';
import { COLORS } from '../../../../_const/colors';
import { TModalButtonProps } from './props-of-modal-with-button';

type TIconButtonProps = {
  icon: ReactNode;
  shadow?: boolean;
  disabled?: boolean;
};

type TModalWithIconButtonProps = TIconButtonProps & TModalButtonProps;

export const ModalWithIconButton: FC<TModalWithIconButtonProps> = ({
  icon,
  shadow = true,
  disabled = false,
  title = '',
  fullWidth = true,
  maxWidth = 'md',
  NestedForm,
  childrenNestedForm,
  children
}) => {
  const classesIconButton = useStyleIconButton();

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
      <Tooltip
        title={title && title}
        placement='top'
        enterDelay={300}
        enterNextDelay={1000}
      >
        <IconButton
          className={clsx({
            [classesIconButton.iconButton]: true,
            [classesIconButton.shadow]: shadow
          })}
          onClick={handleOpen}
          size='small'
          disabled={disabled}
        >
          {icon}
        </IconButton>
      </Tooltip>

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
