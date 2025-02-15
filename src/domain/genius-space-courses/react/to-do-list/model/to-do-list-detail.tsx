import React, { FC } from 'react';
import clsx from 'clsx';
import { Avatar, Box } from '@mui/material';
import { useStylesDialog } from '../../../../_infrastructure/ui/style/style-dialog';
import ToDoListLogo from '../../../../../_images/genius-space/to-do-list-logo.png';

const ToDoListDetail: FC = () => {
  const classes = useStylesDialog();

  return (
    <Box className={classes.rootList} sx={{ paddingTop: 2 }}>
      <Box className={clsx(classes.rootPopupDialog, classes.margin0)}>
        <Box
          className={classes.boxContainer}
          sx={{ height: '100%', paddingTop: 1.35 }}
        >
          <Avatar
            src={ToDoListLogo}
            variant='rounded'
            sx={{ width: 64, height: 64 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ToDoListDetail;
