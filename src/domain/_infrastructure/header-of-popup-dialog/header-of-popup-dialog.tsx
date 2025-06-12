/* eslint-disable react/require-default-props */
import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { ButtonConfirm } from '../ui/button-confirm/button-confirm';
import styleHeaderDialog from '../ui/style/style-header-dialog';

type TPropsButtonConfirm = {
  disabled: boolean;
  onClick: () => void;
};

const initButtonConfirm: TPropsButtonConfirm = {
  disabled: false,
  onClick: () => {}
};

type THeaderOfPopupDialog = {
  title: string;
  isConfirm?: boolean;
  propsButtonConfirm?: TPropsButtonConfirm;
  onClose?: () => void;
  returnUrl?: string;
  background?: 'norm' | 'alarm';
};

const HeaderOfPopupDialog: React.FC<THeaderOfPopupDialog> = ({
  title,
  isConfirm = false,
  propsButtonConfirm = initButtonConfirm,
  onClose,
  returnUrl,
  background = 'norm'
}) => {
  const classes = styleHeaderDialog();

  const navigate = useNavigate();
  //   const { user } = useContext(AuthContext);

  const handleClose = useCallback(() => {
    onClose && onClose();
    returnUrl && navigate(returnUrl);
  }, [navigate, onClose, returnUrl]);

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
      {isConfirm && (
        <Box style={{ marginLeft: 'auto', marginRight: '12px' }}>
          <ButtonConfirm
            disabled={propsButtonConfirm.disabled}
            onClick={propsButtonConfirm.onClick}
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
  );
};

export default HeaderOfPopupDialog;
