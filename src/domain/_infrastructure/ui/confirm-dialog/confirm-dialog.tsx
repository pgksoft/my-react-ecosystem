/* eslint-disable react/require-default-props */
import React, { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { DefaultButton } from '../default-button/default-button';
import useStylesPopupDialog from '../style/styles-popup-dialog';

const OK_TITLE = 'Так';
const CANCEL_TITLE = 'Ні';

interface IProps {
  children?: ReactNode;
  title?: string;
  ComponentTitle?: JSX.Element;
  okTitle?: string;
  cancelTitle?: string;
  disabled?: boolean;
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  fullWidth?: boolean;
  maxWidth?: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
  modeInfo?: boolean;
  backdropStyle?: CSSProperties;
  paperStyle?: CSSProperties;
}

export const ConfirmDialog: React.FC<IProps> = ({
  children,
  title,
  ComponentTitle = null,
  okTitle = OK_TITLE,
  cancelTitle = CANCEL_TITLE,
  open,
  disabled,
  onClose,
  onConfirm = () => {},
  fullWidth = false,
  maxWidth = 'sm',
  modeInfo = false,
  backdropStyle,
  paperStyle
}) => {
  const classes = useStylesPopupDialog();

  const handleClose = (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (reason !== 'backdropClick') {
      onClose();
    }
  };

  return (
    <Dialog
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby='confirm-dialog'
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      BackdropProps={{ style: backdropStyle }}
      PaperProps={{ style: paperStyle }}
    >
      {ComponentTitle}
      {title && (
        <DialogTitle id='confirm-dialog' style={{ textAlign: 'center' }}>
          {title}
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
      <div className={classes.boxFooter}>
        {!modeInfo && (
          <>
            <DefaultButton
              variant='contained'
              onClick={onClose}
              className={clsx({
                [classes.colorGreen]: modeInfo,
                [classes.colorSecondary]: !modeInfo
              })}
            >
              {cancelTitle}
            </DefaultButton>
            <DefaultButton
              disabled={disabled || false}
              variant='contained'
              onClick={(event) => {
                onConfirm();
              }}
              className={classes.colorGreen}
            >
              {okTitle}
            </DefaultButton>
          </>
        )}
      </div>
    </Dialog>
  );
};
