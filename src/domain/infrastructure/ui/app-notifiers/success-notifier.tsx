/* eslint-disable react/require-default-props */
import React from 'react';
import { EnhancedSnackBar } from './enhanced-snack-bar';

interface IProps {
  message: string;
  onClose?: () => void;
  timeOnCloseMs?: number;
}

export const SuccessNotifier: React.FC<IProps> = ({
  message,
  onClose,
  timeOnCloseMs
}) => {
  const autoHideDuration = timeOnCloseMs || 2000;

  return (
    <EnhancedSnackBar
      message={message}
      snackbarProps={{
        open: true,
        autoHideDuration,
        onClose,
        anchorOrigin: { vertical: 'top', horizontal: 'center' }
      }}
      alertProps={{
        onClose,
        variant: 'filled',
        severity: 'success'
      }}
    />
  );
};
