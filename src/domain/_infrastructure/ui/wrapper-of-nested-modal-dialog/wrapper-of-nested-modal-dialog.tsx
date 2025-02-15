// wrapper-of-nested-modal-dialog
import React, { FC } from 'react';
import { Box } from '@mui/material';
import { TNestedProps } from '../modal-with-button/props-of-modal-with-button';
import { HeaderOfModalDialog } from '../../header-of-modal-dialog/header-of-modal-dialog';

export const WrapperOfNestedModalDialog: FC<TNestedProps> = ({
  onClose,
  title,
  children
}) => {
  return (
    <>
      <HeaderOfModalDialog title={title || ''} onClose={onClose} />
      <Box sx={{ padding: '0 8px 8px 8px' }}>{children}</Box>
    </>
  );
};
