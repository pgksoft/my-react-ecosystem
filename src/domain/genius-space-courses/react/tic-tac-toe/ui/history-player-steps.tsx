import React, { FC, useContext } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { useStylesDialog } from '../../../../infrastructure/ui/style/style-dialog';
import { TicTacToeContext } from '../context/tic-tac-toe-context';
import { DefaultButton } from '../../../../infrastructure/ui/default-button/default-button';
import TITLES_GENIUS_SPACE_COURSES_REACT_TIC_TAC_TOE from '../const/titles';

type THistoryPlayerStepsProps = { numberPlayer: 1 | 2 };

const HistoryPlayerSteps: FC<THistoryPlayerStepsProps> = ({ numberPlayer }) => {
  const classes = useStylesDialog();

  const { jumpToGameStep, history } = useContext(TicTacToeContext);

  const captionPlayer = `Player ${
    (numberPlayer && TITLES_GENIUS_SPACE_COURSES_REACT_TIC_TAC_TOE.X) ||
    TITLES_GENIUS_SPACE_COURSES_REACT_TIC_TAC_TOE.O
  }`;

  return (
    <Box className={classes.boxContainer} sx={{ height: '100%' }}>
      <Box className={classes.boxHeader} sx={{ justifyContent: 'center' }}>
        <Typography>{captionPlayer}</Typography>
      </Box>
      <Divider sx={{ mb: '2%' }} />
      {history
        .filter((value) => {
          return value.player === ((numberPlayer === 1 && 'x') || '0');
        })
        .map((value, index) => {
          const step = index * 2 + numberPlayer;
          return (
            <DefaultButton
              variant='contained'
              key={step}
              sx={{ m: '2% 10%' }}
              onClick={() => {
                jumpToGameStep(step);
              }}
            >{`Go to step ${step}`}</DefaultButton>
          );
        })}
    </Box>
  );
};

export default HistoryPlayerSteps;
