import React, { FC } from 'react';
import { Box } from '@mui/material';
import { LINKS_AUTH_USER } from '../../../_route/links';
import { useActivePageLinks } from '../../hooks/active-page-links.hook';
import { useStylesDialog } from '../../../domain/_infrastructure/ui/style/style-dialog';
import ReduxPracticeCounterDetail from '../../../domain/genius-space-courses/react/redux-practice-counter/model/redux-practice-counter-detail';

const ReduxPracticeCounterPage: FC = () => {
  const classes = useStylesDialog();

  useActivePageLinks(
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
