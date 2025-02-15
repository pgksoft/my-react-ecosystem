import React, { FC } from 'react';
import clsx from 'clsx';
import { Box } from '@mui/material';
import { useStylesDialog } from '../../../../_infrastructure/ui/style/style-dialog';
import Board from '../ui/board';
import ControlPanel from '../ui/control-panel';

const TicTacToeDetail: FC = () => {
  const classes = useStylesDialog();

  return (
    <Box className={classes.rootList} sx={{ paddingTop: 2 }}>
      <Box className={clsx(classes.rootPopupDialog, classes.margin0)}>
        <Board />
        <ControlPanel />
      </Box>
    </Box>
  );
};

export default TicTacToeDetail;
