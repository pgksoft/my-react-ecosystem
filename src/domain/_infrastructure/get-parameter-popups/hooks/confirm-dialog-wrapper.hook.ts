import { useCallback, useState } from 'react';

type TConfirmDialogWrapperState = {
  confirmOpen: boolean;
  isConfirm: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  handleCloseInConfirmDialog: () => void;
  handleConfirmInConfirmDialog: () => void;
};

const useConfirmDialogWrapper = (): TConfirmDialogWrapperState => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const handleClose = useCallback(() => {
    setIsConfirm(false);
  }, []);

  const handleConfirm = useCallback(() => {
    setConfirmOpen(true);
  }, []);

  const handleCloseInConfirmDialog = useCallback(() => {
    setConfirmOpen(false);
  }, []);

  const handleConfirmInConfirmDialog = useCallback(() => {
    setIsConfirm(true);
    setConfirmOpen(false);
  }, []);

  return {
    confirmOpen,
    isConfirm,
    handleClose,
    handleConfirm,
    handleCloseInConfirmDialog,
    handleConfirmInConfirmDialog
  };
};

export default useConfirmDialogWrapper;
