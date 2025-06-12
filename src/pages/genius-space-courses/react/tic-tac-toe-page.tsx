import React, { FC } from 'react';
import { Box } from '@mui/material';
import { LINKS_AUTH_USER } from '../../../_route/links';
import { useActivePageLinks } from '../../hooks/active-page-links.hook';
import { useStylesDialog } from '../../../domain/_infrastructure/ui/style/style-dialog';
import TicTacToeDetail from '../../../domain/genius-space-courses/react/tic-tac-toe/model/tic-tak-toe-detail';
import TicTacToeContextProvider from '../../../domain/genius-space-courses/react/tic-tac-toe/context/tic-tac-toe-context-provider';

const TicTacToePage: FC = () => {
  const classes = useStylesDialog();

  useActivePageLinks(
    LINKS_AUTH_USER.geniusSpaceCoursesReactTicTacToe,
    LINKS_AUTH_USER.geniusSpaceCoursesReact
  );

  return (
    <Box className={classes.rootList}>
      <TicTacToeContextProvider>
        <TicTacToeDetail />
      </TicTacToeContextProvider>
    </Box>
  );
};

export default TicTacToePage;
