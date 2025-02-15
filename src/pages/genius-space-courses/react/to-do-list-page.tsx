import React, { FC } from 'react';
import { Box } from '@mui/material';
import { LINKS_AUTH_USER } from '../../../_route/links';
import { usePageContext } from '../../hooks/page-context.hook';
import { useStylesDialog } from '../../../domain/_infrastructure/ui/style/style-dialog';
import ToDoListDetail from '../../../domain/genius-space-courses/react/to-do-list/model/to-do-list-detail';

const ToDoListPage: FC = () => {
  const classes = useStylesDialog();

  usePageContext(
    LINKS_AUTH_USER.geniusSpaceCoursesReactToDoList,
    LINKS_AUTH_USER.geniusSpaceCoursesReact
  );

  return (
    <Box className={classes.rootList}>
      <ToDoListDetail />
    </Box>
  );
};

export default ToDoListPage;
