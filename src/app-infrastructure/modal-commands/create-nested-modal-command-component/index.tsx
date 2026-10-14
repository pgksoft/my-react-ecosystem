import React, { type FC } from 'react';
import type { TNestedModalCommandWrapperProps } from '../model/modal-command-button-wrapper';
import { HeaderOfModalDialog } from '../ui/header-of-modal-dialog';
import { Box } from '@mui/system';
import type TUnknownRecord from '../../app-types/t-unknown-record';

const createNestedModalCommandComponent = <P extends TUnknownRecord>(
  headerTitle: string,
  InnerComponent: FC<P>,
  componentName: string,
  innerProps: P
): FC<TNestedModalCommandWrapperProps> => {
  const Wrapper: FC<TNestedModalCommandWrapperProps> = ({ onClose }) => {
    return (
      <>
        <HeaderOfModalDialog
          title={headerTitle}
          onClose={onClose}
          isConfirm={false}
        />
        <Box sx={{ padding: '0 8px 8px 8px' }}>
          <InnerComponent {...innerProps} />
        </Box>
      </>
    );
  };

  Wrapper.displayName = componentName;
  return Wrapper;
};

export default createNestedModalCommandComponent;
