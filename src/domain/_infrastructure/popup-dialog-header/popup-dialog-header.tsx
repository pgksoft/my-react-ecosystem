/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/require-default-props */
import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { ButtonConfirm } from '../ui/button-confirm/button-confirm';
import styleHeaderDialog from '../ui/style/style-header-dialog';
import ButtonUndoAll from '../ui/button-undo-all/button-undo-all';
import useAppDispatch from '../../../store/use-app-dispatch';
import useAppSelector from '../../../store/use-app-selector';
import { isCanResetSelector } from '../../../redux-toolkit/reset-to-initial-data/reset-to-initial-data-selectors';
import { changeIsToReset } from '../../../redux-toolkit/reset-to-initial-data/reset-toInitial-data-slice';

type TWithConfirm = {
  isConfirm: true;
  disabled: boolean;
  onConfirm: () => void;
};

type TWithoutConfirm = { isConfirm: false };

type TPopupDialogHeaderBase = {
  title: string;
  onClose?: () => void;
  returnUrl?: string;
  background?: 'norm' | 'alarm';
  isResetAvailable?: boolean;
};

type TPopupDialogHeaderProps = TPopupDialogHeaderBase &
  (TWithoutConfirm | TWithConfirm);

const PopupDialogHeader: React.FC<TPopupDialogHeaderProps> = (props) => {
  const classes = styleHeaderDialog();

  const {
    title,
    onClose,
    returnUrl,
    background = 'norm',
    isResetAvailable = true,
    ...restProps
  } = props;

  const { isConfirm, disabled, onConfirm } = restProps as TWithConfirm;

  const appDispatch = useAppDispatch();
  const isCanReset = useAppSelector(isCanResetSelector);
  const navigate = useNavigate();
  //   const { user } = useContext(AuthContext);

  const handleClose = useCallback(() => {
    onClose && onClose();
    returnUrl && navigate(returnUrl);
  }, [navigate, onClose, returnUrl]);

  const handleToReset = useCallback(() => {
    appDispatch(changeIsToReset(true));
  }, [appDispatch]);

  return (
    <Box
      className={clsx({
        [classes.root]: true,
        [classes.backgroundTitleNorm]: background === 'norm',
        [classes.backgroundTitleAlarm]: background === 'alarm'
      })}
    >
      <Box fontSize='h6.fontSize' className={classes.titleBox}>
        {title}
      </Box>
      <Box sx={{ display: 'flex' }}>
        {isResetAvailable && (
          <Box sx={{ marginLeft: 'auto', marginRight: '8px' }}>
            <ButtonUndoAll onClick={handleToReset} disabled={!isCanReset} />
          </Box>
        )}
        {isConfirm && (
          <Box sx={{ marginLeft: 'auto', marginRight: '8px' }}>
            <ButtonConfirm
              disabled={disabled}
              onClick={onConfirm}
              isIconButton={true}
            />
          </Box>
        )}
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={handleClose}
          size='small'
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PopupDialogHeader;
