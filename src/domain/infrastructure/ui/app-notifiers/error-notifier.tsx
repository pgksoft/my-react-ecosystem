import React from 'react';
import { EnhancedSnackBar } from './enhanced-snack-bar';

interface IProps {
  onClose: () => void;
  error: Error;
}

export const ErrorNotifier: React.FC<IProps> = ({ onClose, error }) => {
  return (
    <EnhancedSnackBar
      message={error.message}
      snackbarProps={{
        open: true,
        onClose,
        anchorOrigin: { vertical: 'top', horizontal: 'center' }
      }}
      alertProps={{
        onClose,
        variant: 'filled',
        severity: 'error'
      }}
    />
  );
};
