import React, { FC } from 'react';
import { Avatar, Box, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { LINKS_AUTH_USER } from '../../_route/links';
import { usePageContext } from '../hooks/page-context.hook';
import ReactPageLogo from '../../_images/genius-space/react-page-logo.png';
import InfoLecturePanel from '../../domain/genius-space-courses/ui/info-lecture-panel';
import infoLecture01 from '../../domain/genius-space-courses/react/const/info-lecture-01';
import infoLecture02 from '../../domain/genius-space-courses/react/const/info-lecture-02';
import infoLecture03 from '../../domain/genius-space-courses/react/const/info-lecture-03';
import infoLecture04 from '../../domain/genius-space-courses/react/const/info-lecture-04';
import infoLecture05 from '../../domain/genius-space-courses/react/const/info-lecture-05';
import infoLecture06 from '../../domain/genius-space-courses/react/const/info-lecture-06';
import infoLecture07 from '../../domain/genius-space-courses/react/const/info_lecture-07';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      width: '100%',
      padding: '1% 0',
      height: '100%',
      wordBreak: 'break-word',
      flexDirection: 'column'
    },
    section: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '1% 0'
    },
    avatarSize: { width: 100, height: 100 },
    infoLectures: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '1%',
      '&>:nth-child(n)': {
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5% 1%',
        minWidth: '14%',
        maxWidth: '30%',
        marginRight: '1%',
        marginBottom: '1%'
      }
    }
  });
});

const GeniusSpaceCoursesReactPage: FC = () => {
  const classes = useStyles();

  const link = LINKS_AUTH_USER.geniusSpaceCoursesReact;

  usePageContext(link, LINKS_AUTH_USER.geniusSpaceCourses);

  return (
    <Box className={classes.root}>
      <Box className={classes.section}>
        <Avatar
          src={ReactPageLogo}
          sx={{ width: 250, height: 90 }}
          variant='rounded'
        />
      </Box>
      <Box className={classes.infoLectures}>
        <InfoLecturePanel infoLecture={infoLecture01} />
        <InfoLecturePanel infoLecture={infoLecture02} />
        <InfoLecturePanel infoLecture={infoLecture03} />
        <InfoLecturePanel infoLecture={infoLecture04} />
        <InfoLecturePanel infoLecture={infoLecture05} />
        <InfoLecturePanel infoLecture={infoLecture06} />
        <InfoLecturePanel infoLecture={infoLecture07} />
      </Box>
    </Box>
  );
};

export default GeniusSpaceCoursesReactPage;
