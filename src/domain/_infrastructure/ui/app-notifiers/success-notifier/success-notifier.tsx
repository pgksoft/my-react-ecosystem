import React from 'react';
import AppNotifierWrapper from '../app-notifier-wrapper/app-notifier-wrapper';

interface IProps {
  message: string;
  onClose: () => void;
  // eslint-disable-next-line react/require-default-props
  timeOnCloseMs?: number;
}

const SuccessNotifier: React.FC<IProps> = ({
  message,
  onClose,
  timeOnCloseMs
}) => {
  const autoHideDuration = timeOnCloseMs || 2000;

  return (
    <AppNotifierWrapper
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

export default SuccessNotifier;
