import React, { FC } from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useStylesDialog } from '../../../app-infrastructure/app-ui/style/style-dialog';
import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../const/titles';
import { ModalCommandButtonWrapper } from '../../../app-infrastructure/modal-commands/model/modal-command-button-wrapper';
import { CreationCommandWrapper } from '../helpers/creation-command-wrapper';

export const SimpleNewsletterSignUpList: FC = () => {
  const classes = useStylesDialog();
  return (
    <Box className={classes.rootList}>
      <Toolbar
        variant='dense'
        className={classes.rootToolbar}
        id='tool-bar-simple-newsletter-sign-up-list-list'
      >
        <ModalCommandButtonWrapper
          kind='icon-button'
          baseButtonProps={{
            title: TITLES_SIMPLE_NEWSLETTER_SING_UP.create,
            icon: <AddIcon />
          }}
          NestedComponent={CreationCommandWrapper}
          maxWidth='sm'
        />
      </Toolbar>
      <Typography>{TITLES_SIMPLE_NEWSLETTER_SING_UP.title}</Typography>
    </Box>
  );
};
