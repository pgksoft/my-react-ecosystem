import React, { FC } from 'react';
import { Box, Toolbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ModalWithIconButton } from '../../infrastructure/ui/modal-with-button/modal-with-icon-button';
import { useStylesDialog } from '../../infrastructure/ui/style/style-dialog';
import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../const/titles';
import { WrapperOfNestedModalDialog } from '../../infrastructure/ui/modal-with-button/wrapper-of-nested-modal-dialog';

export const SimpleNewsletterSignUpList: FC = () => {
  const classes = useStylesDialog();
  return (
    <Box className={classes.rootList}>
      <Toolbar
        variant='dense'
        className={classes.rootToolbar}
        id='tool-bar-simple-newsletter-sign-up-list-list'
      >
        <ModalWithIconButton
          icon={<AddIcon />}
          iconColor='primary'
          title={TITLES_SIMPLE_NEWSLETTER_SING_UP.create}
          NestedForm={WrapperOfNestedModalDialog}
        />
      </Toolbar>
      <p>{TITLES_SIMPLE_NEWSLETTER_SING_UP.title}</p>
    </Box>
  );
};
