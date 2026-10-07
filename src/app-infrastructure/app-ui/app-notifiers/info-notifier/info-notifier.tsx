/* eslint-disable react/require-default-props */
import React from 'react';
import AppNotifierWrapper from '../app-notifier-wrapper/app-notifier-wrapper';

interface IProps {
  message: string;
  onClose?: () => void;
  timeOnCloseMs?: number;
}

const InfoNotifier: React.FC<IProps> = ({
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
        severity: 'info'
      }}
    />
  );
};

export default InfoNotifier;
