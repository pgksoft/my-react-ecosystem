import React, { useCallback, useState, type FC } from 'react';
import { Dialog, type Breakpoint } from '@mui/material';
import { TransitionSlideUp } from '../../app-ui/transition-slide-up/transition-slide-up';
import { COLORS } from '../../app-const/colors';
import type { TBaseCommandButtonProps } from './create-command-button';
import createCommandButton from './create-command-button';

export type TNestedModalCommandWrapperProps = {
  onClose: () => void;
};

type TBaseModalCommandButtonWrapperProps = {
  fullWidth?: boolean;
  maxWidth?: false | Breakpoint;
  NestedComponent: React.FC<TNestedModalCommandWrapperProps>;
};

export type TModalCommandButtonWrapperProps =
  TBaseModalCommandButtonWrapperProps & TBaseCommandButtonProps;

export const ModalCommandButtonWrapper: FC<TModalCommandButtonWrapperProps> = (
  props
) => {
  const { NestedComponent, fullWidth = true, maxWidth = 'md', ...rest } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const dialogHandleClose = useCallback(
    (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
      if (reason !== 'backdropClick') {
        setOpen(false);
      }
    },
    []
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const commandButton = createCommandButton({
    baseCommandButtonProps: rest,
    onOpen: handleOpen
  });

  return (
    <>
      {commandButton}
      <Dialog
        hideBackdrop
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={dialogHandleClose}
        scroll='paper'
        slots={{
          transition: TransitionSlideUp
        }}
        slotProps={{
          paper: { sx: { border: `2px solid ${COLORS.gray}` } }
        }}
      >
        {open && <NestedComponent onClose={handleClose} />}
      </Dialog>
    </>
  );
};
