import React from 'react';
import AppNotifierWrapper from '../app-notifier-wrapper/app-notifier-wrapper';

interface IProps {
  onClose: () => void;
  error: Error;
}

const ErrorNotifier: React.FC<IProps> = ({ onClose, error }) => {
  return (
    <AppNotifierWrapper
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

export default ErrorNotifier;
