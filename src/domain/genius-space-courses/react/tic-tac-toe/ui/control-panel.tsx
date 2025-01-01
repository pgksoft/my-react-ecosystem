import React, { FC, useContext } from 'react';
import clsx from 'clsx';
import { Box } from '@mui/material';
import { useStylesDialog } from '../../../../infrastructure/ui/style/style-dialog';
import { TicTacToeContext } from '../context/tic-tac-toe-context';
import { DefaultButton } from '../../../../infrastructure/ui/default-button/default-button';
import HistoryPlayerSteps from './history-player-steps';

const ControlPanel: FC = () => {
  const classes = useStylesDialog();

  const { jumpToGameStep } = useContext(TicTacToeContext);

  return (
    <Box className={classes.boxContainer} sx={{ height: '100%' }}>
      <Box
        className={classes.boxHeader}
        sx={{
          pb: '2%',
          pt: '1%',
          justifyContent: 'center'
        }}
      >
        <DefaultButton
          variant='contained'
          className={classes.colorGreen}
          onClick={() => {
            jumpToGameStep(0);
          }}
        >
          Go to start
        </DefaultButton>
      </Box>
      <Box className={clsx(classes.rootPopupDialog, classes.margin0)}>
        <HistoryPlayerSteps numberPlayer={1} />
        <HistoryPlayerSteps numberPlayer={2} />
      </Box>
    </Box>
  );
};

export default ControlPanel;
