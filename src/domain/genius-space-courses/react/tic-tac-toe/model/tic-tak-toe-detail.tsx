import React, { FC } from 'react';
import clsx from 'clsx';
import { Avatar, Box } from '@mui/material';
import { useStylesDialog } from '../../../../infrastructure/ui/style/style-dialog';
import TicTakToeLogo from '../../../../../_images/genius-space/tic-tac-toe.png';

const TicTacToeDetail: FC = () => {
  const classes = useStylesDialog();

  return (
    <Box className={classes.rootList} sx={{ paddingTop: 2 }}>
      <Box className={clsx(classes.rootPopupDialog, classes.margin0)}>
        <Box
          className={classes.boxContainer}
          sx={{ height: '100%', paddingTop: 1.35 }}
        >
          <Avatar src={TicTakToeLogo} sx={{ width: 64, height: 64 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default TicTacToeDetail;
