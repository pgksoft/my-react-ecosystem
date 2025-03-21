import React, { FC } from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ModalWithIconButton } from '../../_infrastructure/ui/modal-with-button/modal-with-icon-button';
import { useStylesDialog } from '../../_infrastructure/ui/style/style-dialog';
import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../const/titles';
import { WrapperOfNestedModalDialog } from '../../_infrastructure/ui/wrapper-of-nested-modal-dialog/wrapper-of-nested-modal-dialog';
import { SimpleNewsletterSignUpCreate } from './simple-newsletter-sign-up-create';

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
          childrenNestedForm={<SimpleNewsletterSignUpCreate />}
          maxWidth='sm'
        />
      </Toolbar>
      <Typography>{TITLES_SIMPLE_NEWSLETTER_SING_UP.title}</Typography>
    </Box>
  );
};
