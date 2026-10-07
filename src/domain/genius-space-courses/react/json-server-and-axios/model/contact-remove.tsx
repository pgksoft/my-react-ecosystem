import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import TDialogRemove from '../../../../../app-infrastructure/get-parameter-popups/dialog-remove/t-choice-popup-remove/t-dialog-remove';
import { IEntityMember } from '../../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import { useStylesDialog } from '../../../../../app-infrastructure/app-ui/style/style-dialog';
import { getInitialDetailContactDto } from '../entity/contacts';
import TITLES_CONTACT from '../const/titles';
import getContactBriefDescription from '../helpers/get-contact-brief-description';

const ContactRemove: FC<TDialogRemove<IEntityMember>> = ({ entity }) => {
  const classes = useStylesDialog();

  const contactDto = getInitialDetailContactDto(entity).validationDto;

  return (
    <Box
      className={classes.rootPopupDialog}
      sx={{ justifyContent: 'flex-start' }}
    >
      <Typography color='textSecondary' whiteSpace='nowrap'>
        {TITLES_CONTACT.title}:
      </Typography>
      &nbsp;
      <Typography>{getContactBriefDescription(contactDto)}</Typography>
    </Box>
  );
};

export default ContactRemove;
