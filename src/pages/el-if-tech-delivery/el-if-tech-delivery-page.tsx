import React, { FC } from 'react';
import { Box, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { LINKS_AUTH_USER } from '../../app-infrastructure/app-route/links';
import { useActivePageLinks } from '../hooks/active-page-links.hook';
import { ElIfTechLogoIcon } from './ui/el-if-tech-logo-icon';
import { TITLES_EL_IF_TECH_DELIVERY } from '../../domain/el-if-tech-delivery/const/titles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      width: '100%',
      padding: '16px',
      height: '100%',
      wordBreak: 'break-word',
      flexDirection: 'column'
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '24px'
    }
  });
});

const ElIfTechDeliveryPage: FC = () => {
  const classes = useStyles();

  const link = LINKS_AUTH_USER.elIfTechDelivery;

  useActivePageLinks(link, LINKS_AUTH_USER.elIfTechDelivery);

  return (
    <Box className={classes.root} sx={{ overflow: 'auto' }}>
      <Box className={classes.section}>
        <ElIfTechLogoIcon />
        <Typography
          color='info'
          fontSize='3rem'
          fontWeight='700'
          letterSpacing='6px'
          sx={{
            textShadow:
              '-1px -1px 0 yellow, 1px -1px 0 yellow, -1px 1px 0 yellow, 1px 1px 0 yellow, 2px 2px 5px blue'
          }}
        >
          {TITLES_EL_IF_TECH_DELIVERY.title}
        </Typography>
        <Typography
          color='textSecondary'
          fontSize='2rem'
          fontWeight='600'
          letterSpacing='6px'
          sx={{
            textShadow:
              '-1px -1px 0 yellow, 1px -1px 0 yellow, -1px 1px 0 yellow, 1px 1px 0 yellow, 2px 2px 5px blue'
          }}
        >
          {TITLES_EL_IF_TECH_DELIVERY.nameProject}
        </Typography>
      </Box>
      <Box className={classes.section}>
        <Typography fontSize='1.3rem'>
          {TITLES_EL_IF_TECH_DELIVERY.technologyStack}
        </Typography>
      </Box>
    </Box>
  );
};

export default ElIfTechDeliveryPage;
