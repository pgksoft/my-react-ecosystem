import React, { FC } from 'react';
import { Box } from '@mui/material';
import { LINKS_AUTH_USER } from '../../../_route/links';
import { usePageContext } from '../../hooks/page-context.hook';
import { useStylesDialog } from '../../../domain/infrastructure/ui/style/style-dialog';
import TicTacToeDetail from '../../../domain/genius-space-courses/react/tic-tac-toe/model/tic-tak-toe-detail';

const TicTacToePage: FC = () => {
  const classes = useStylesDialog();

  usePageContext(
    LINKS_AUTH_USER.geniusSpaceCoursesReactTicTacToe,
    LINKS_AUTH_USER.geniusSpaceCoursesReact
  );

  return (
    <Box className={classes.rootList}>
      <TicTacToeDetail />
    </Box>
  );
};

export default TicTacToePage;
