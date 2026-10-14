/* eslint-disable react/require-default-props */
import React, { useCallback } from 'react';
import { clsx } from 'clsx';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styleHeaderDialog from '../../app-ui/style/style-header-dialog';
import ButtonUndoAll from '../../app-ui/button-undo-all/button-undo-all';
import useAppDispatch from '../../../store/use-app-dispatch';
import useAppSelector from '../../../store/use-app-selector';
import { isCanResetSelector } from '../../../redux-toolkit/reset-to-initial-data/reset-to-initial-data-selectors';
import { changeIsToReset } from '../../../redux-toolkit/reset-to-initial-data/reset-toInitial-data-slice';
import { ButtonConfirm } from '../../app-ui/button-confirm/button-confirm';

type TWithConfirm = {
  isConfirm: true;
  disabled: boolean;
  onConfirm: () => void;
};

type TWithoutConfirm = { isConfirm: false };

type THeaderOfModalDialog = {
  title: string;
  onClose: () => void;
  background?: 'norm' | 'alarm';
  isResetAvailable?: boolean;
};

type THeaderOfModalDialogProps = THeaderOfModalDialog &
  (TWithConfirm | TWithoutConfirm);

export const HeaderOfModalDialog: React.FC<THeaderOfModalDialogProps> = (
  props
) => {
  const classes = styleHeaderDialog();

  const {
    title,
    onClose,
    background = 'norm',
    isResetAvailable = false,
    ...restProps
  } = props;

  const { isConfirm, disabled, onConfirm } = restProps as TWithConfirm;

  const appDispatch = useAppDispatch();
  const isCanReset = useAppSelector(isCanResetSelector);

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
      <Box sx={{ display: 'flex', width: '12%', justifyContent: 'flex-end' }}>
        {isResetAvailable && (
          <Box sx={{ mr: 1 }}>
            <ButtonUndoAll onClick={handleToReset} disabled={!isCanReset} />
          </Box>
        )}
        {isConfirm && (
          <Box sx={{ marginLeft: 'auto', mr: 1 }}>
            <ButtonConfirm
              disabled={disabled}
              onClick={onConfirm}
              isIconButton={true}
            />
          </Box>
        )}
        <IconButton
          className={classes.closeButton}
          onClick={onClose}
          size='small'
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
