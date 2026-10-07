import React, { FC } from 'react';
import { Dialog } from '@mui/material';

export type TLoadPopupWrapperProps = {
  children: React.ReactNode;
};

export const LoadPopupWrapper: FC<TLoadPopupWrapperProps> = ({ children }) => {
  return (
    <Dialog
      keepMounted
      open={true}
      maxWidth='md'
      fullWidth
      PaperProps={{
        elevation: 0,
        style: {
          backgroundColor: 'transparent',
          height: '70vh',
          justifyContent: 'center'
        }
      }}
      BackdropProps={{ style: { backgroundColor: 'hsla(210,100%,70%,0.2)' } }}
    >
      {children}
    </Dialog>
  );
};
