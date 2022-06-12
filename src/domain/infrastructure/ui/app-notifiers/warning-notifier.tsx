/* eslint-disable react/require-default-props */
import React from 'react';
import { EnhancedSnackBar } from './enhanced-snack-bar';

interface IProps {
  message: string;
  onClose?: () => void;
}

export const WarningNotifier: React.FC<IProps> = ({ message, onClose }) => {
  return (
    <EnhancedSnackBar
      message={message}
      snackbarProps={{
        open: true,
        onClose,
        anchorOrigin: { vertical: 'top', horizontal: 'center' }
      }}
      alertProps={{
        onClose,
        variant: 'filled',
        severity: 'warning'
      }}
    />
  );
};
