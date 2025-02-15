/* eslint-disable react/require-default-props */
import React from 'react';
import { AppNotifierWrapper } from './app-notifier-wrapper';

interface IProps {
  message: string;
  onClose?: () => void;
}

export const WarningNotifier: React.FC<IProps> = ({ message, onClose }) => {
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
