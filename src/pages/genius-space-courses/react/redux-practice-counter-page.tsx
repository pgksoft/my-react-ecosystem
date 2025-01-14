import React, { FC } from 'react';
import { Box } from '@mui/material';
import { LINKS_AUTH_USER } from '../../../_route/links';
import { usePageContext } from '../../hooks/page-context.hook';
import { useStylesDialog } from '../../../domain/infrastructure/ui/style/style-dialog';
import ReduxPracticeCounterDetail from '../../../domain/genius-space-courses/react/redux-practice-counter/model/redux-practice-counter-detail';

const ReduxPracticeCounterPage: FC = () => {
  const classes = useStylesDialog();

  usePageContext(
    LINKS_AUTH_USER.geniusSpaceCoursesReactReduxPracticeCounter,
    LINKS_AUTH_USER.geniusSpaceCoursesReact
  );

  return (
    <Box className={classes.rootList}>
      <ReduxPracticeCounterDetail />
    </Box>
  );
};

export default ReduxPracticeCounterPage;
