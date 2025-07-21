/* eslint-disable react/require-default-props */
import React, { CSSProperties, ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { DefaultButton } from '../default-button/default-button';
import { useStylesDialog } from '../style/style-dialog';
import { COLORS } from '../../../../_const/colors';

const OK_TITLE = 'Так';
const CANCEL_TITLE = 'Ні';

type IProps = {
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
};

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
  const classes = useStylesDialog();

  const handleClose = (
    event: object,
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
      slotProps={{
        backdrop: {
          sx: backdropStyle
        },
        paper: {
          sx: paperStyle
        }
      }}
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
              sx={{ color: (modeInfo && COLORS.green) || COLORS.secondary }}
            >
              {cancelTitle}
            </DefaultButton>
            <DefaultButton
              disabled={disabled || false}
              variant='contained'
              onClick={(event) => {
                onConfirm();
              }}
              sx={{ color: COLORS.green }}
            >
              {okTitle}
            </DefaultButton>
          </>
        )}
      </div>
    </Dialog>
  );
};
