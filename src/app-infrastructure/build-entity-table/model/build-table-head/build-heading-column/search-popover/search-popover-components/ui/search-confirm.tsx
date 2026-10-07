import React, { FC } from 'react';
import { useStylesDialog } from '../../../../../../../app-ui/style/style-dialog';
import { Box } from '@mui/material';
import { DefaultButton } from '../../../../../../../app-ui/default-button/default-button';
import { COLORS } from '../../../../../../../app-const/colors';
import CheckIcon from '@mui/icons-material/Check';
import SearchOffIcon from '@mui/icons-material/SearchOff';

type TSearchConfirmProps = {
  disabledConfirm: boolean;
  onConfirm: () => void;
  disabledClear: boolean;
  onClear: () => void;
  direction?: 'column' | 'row';
};

const CONFIRM_TITLE = 'Confirm';
const CONFIRM_CLEAR = 'Clear';

const SearchConfirm: FC<TSearchConfirmProps> = ({
  disabledConfirm,
  onConfirm,
  disabledClear,
  onClear,
  direction = 'row'
}) => {
  const classes = useStylesDialog();

  return (
    <Box
      className={classes.boxFooter}
      sx={{
        flexDirection: direction,
        justifyContent: 'space-evenly'
      }}
    >
      <DefaultButton
        startIcon={<CheckIcon />}
        sx={{
          color: COLORS.greenDeep,
          '&:hover': {
            backgroundColor: `${COLORS.greenDeep}`,
            color: `${COLORS.white}`
          }
        }}
        disabled={disabledConfirm}
        variant='contained'
        onClick={onConfirm}
      >
        {CONFIRM_TITLE}
      </DefaultButton>
      <DefaultButton
        startIcon={<SearchOffIcon />}
        sx={{
          color: COLORS.pink,
          '&:hover': {
            backgroundColor: `${COLORS.pink}`,
            color: `${COLORS.white}`
          },
          mt: direction === 'column' ? '12px' : 0
        }}
        disabled={disabledClear}
        variant='contained'
        onClick={onClear}
      >
        {CONFIRM_CLEAR}
      </DefaultButton>
    </Box>
  );
};

export default SearchConfirm;
