import React, { FC, useContext } from 'react';
import { Avatar, Box, Theme, Typography } from '@mui/material';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@mui/styles';
import { TicTacToeContext } from '../context/tic-tac-toe-context';
import { useStylesDialog } from '../../../../infrastructure/ui/style/style-dialog';
import TicTakToeLogo from '../../../../../_images/genius-space/tic-tac-toe.png';
import CellCross from './cell-cross';
import CellZero from './cell-zero';
import getStatusString from '../util/get-status-string';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    board: {
      display: 'grid',
      padding: '1%',
      width: '50%',
      aspectRatio: '1/1',
      margin: '0 auto',
      gridTemplateColumns: 'repeat(3, 31%)',
      columnGap: '3.5%',
      rowGap: '2%',
      '&>:nth-child(n)': {
        display: 'flex',
        aspectRatio: '1/1',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        padding: 0,
        userSelect: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        border: 'none',
        borderRadius: 7,
        boxShadow:
          '3px 3px 8px rgba(0, 0, 255, 0.5), 1px 1px 5px rgba(255, 255, 0, 1)'
      },
      '&>:nth-child(n)[data-val=null]:hover': {
        boxShadow:
          '3px 3px 8px rgba(0, 0, 255, 0.73), 3px 3px 10px rgba(255, 255, 0, 1)'
      },
      '&>:nth-child(n)[data-val=null]:active': {
        boxShadow:
          'inset 1px 1px 2px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(200, 200, 200, 1)'
      }
    }
  });
});

const statusFont = { fontWeight: '600', fontSize: '1.3rem' };

const Board: FC = () => {
  const dialogClasses = useStylesDialog();
  const classes = useStyles();

  // eslint-disable-next-line prettier/prettier
  const {
    currentGameField,
    handleCellClick,
    status,
    currentStep,
    gameFieldSize
  } = useContext(TicTacToeContext);

  return (
    <Box className={dialogClasses.boxContainer} sx={{ height: '100%' }}>
      <Box
        className={clsx(dialogClasses.boxHeader, dialogClasses.colorPrimary)}
      >
        <Avatar src={TicTakToeLogo} sx={{ width: '7%', height: '7%' }} />
        <Typography sx={{ ml: '20%', ...statusFont }}>
          {getStatusString(status, currentStep, gameFieldSize)}
        </Typography>
        {status.state === 'play' && currentStep < gameFieldSize && (
          <Typography
            sx={{ ml: '2%', ...statusFont }}
          >{`Step: ${currentStep}`}</Typography>
        )}
      </Box>
      <Box className={classes.board}>
        {currentGameField.map((value, index) => {
          return (
            <Box
              // eslint-disable-next-line react/no-array-index-key
              key={`${index}-${value}`}
              data-cell={index}
              data-val={(value && value) || 'null'}
              component='button'
              onClick={handleCellClick}
            >
              {value === 'x' && <CellCross />}
              {value === '0' && <CellZero />}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Board;
