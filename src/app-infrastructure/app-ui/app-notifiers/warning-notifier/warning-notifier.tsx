import React from 'react';
import AppNotifierWrapper from '../app-notifier-wrapper/app-notifier-wrapper';

interface IProps {
  message: string;
  onClose: () => void;
}

const WarningNotifier: React.FC<IProps> = ({ message, onClose }) => {
  return (
    <AppNotifierWrapper
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

export default WarningNotifier;
