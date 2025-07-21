import React, { FC } from 'react';
import { IconButton } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { COLORS } from '../../../../_const/colors';

type TButtonUndoAll = {
  onClick: () => void;
  disabled: boolean;
};

const ButtonUndoAll: FC<TButtonUndoAll> = ({ onClick, disabled }) => {
  return (
    <IconButton
      aria-label='dialog-undo-all'
      disabled={disabled}
      onClick={onClick}
      size='small'
      sx={{
        boxSizing: 'border-box',
        color: `${COLORS.primaryLight}`,
        '&:disable': {
          color: `${COLORS.gray}`
        },
        '&:hover': {
          '&.MuiIconButton-root': {
            backgroundColor: `${COLORS.primaryLight}`,
            color: `${COLORS.white}`
          },
          color: '#fff'
        }
      }}
    >
      <RestartAltIcon />
    </IconButton>
  );
};

export default ButtonUndoAll;
