import React, { FC } from 'react';
import { Box } from '@mui/material';
import { LINKS_AUTH_USER } from '../../../_route/links';
import { useActivePageLinks } from '../../hooks/active-page-links.hook';
import { useStylesDialog } from '../../../domain/_infrastructure/ui/style/style-dialog';
import ContactList from '../../../domain/genius-space-courses/react/json-server-and-axios/model/contact-list';

const JsonServerAndAxiosPage: FC = () => {
  const classes = useStylesDialog();

  useActivePageLinks(
    LINKS_AUTH_USER.geniusSpaceCoursesReactJServerAxios,
    LINKS_AUTH_USER.geniusSpaceCoursesReact
  );

  return (
    <Box className={classes.rootList}>
      <ContactList />
    </Box>
  );
};

export default JsonServerAndAxiosPage;
