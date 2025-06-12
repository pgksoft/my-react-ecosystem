import React, { FC } from 'react';
import { Avatar, Box, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { LINKS_AUTH_USER } from '../../_route/links';
import { useActivePageLinks } from '../hooks/active-page-links.hook';
import ReactPageLogo from '../../_images/genius-space/react-page-logo.png';
import InfoLecturePanel from '../../domain/genius-space-courses/ui/info-lecture-panel';
import infoLecture00 from '../../domain/genius-space-courses/react/const/info-lecture-00';
import infoLecture01 from '../../domain/genius-space-courses/react/const/info-lecture-01';
import infoLecture02 from '../../domain/genius-space-courses/react/const/info-lecture-02';
import infoLecture03 from '../../domain/genius-space-courses/react/const/info-lecture-03';
import infoLecture04 from '../../domain/genius-space-courses/react/const/info-lecture-04';
import infoLecture05 from '../../domain/genius-space-courses/react/const/info-lecture-05';
import infoLecture06 from '../../domain/genius-space-courses/react/const/info-lecture-06';
import infoLecture07 from '../../domain/genius-space-courses/react/const/info-lecture-07';
import infoLecture08 from '../../domain/genius-space-courses/react/const/info-lecture-08';
import infoLecture09 from '../../domain/genius-space-courses/react/const/info-lecture-09';
import infoLecture10 from '../../domain/genius-space-courses/react/const/info-lecture-10';
import infoLecture11 from '../../domain/genius-space-courses/react/const/info-lecture-11';
import infoLecture12 from '../../domain/genius-space-courses/react/const/info-lecture-12';
import infoLecture13 from '../../domain/genius-space-courses/react/const/info-lecture-13';

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

  useActivePageLinks(link, LINKS_AUTH_USER.geniusSpaceCourses);

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
        <InfoLecturePanel infoLecture={infoLecture00} />
        <InfoLecturePanel infoLecture={infoLecture01} />
        <InfoLecturePanel infoLecture={infoLecture02} />
        <InfoLecturePanel infoLecture={infoLecture03} />
        <InfoLecturePanel infoLecture={infoLecture04} />
        <InfoLecturePanel infoLecture={infoLecture05} />
        <InfoLecturePanel infoLecture={infoLecture06} />
        <InfoLecturePanel infoLecture={infoLecture07} />
        <InfoLecturePanel infoLecture={infoLecture08} />
        <InfoLecturePanel infoLecture={infoLecture09} />
        <InfoLecturePanel infoLecture={infoLecture10} />
        <InfoLecturePanel infoLecture={infoLecture11} />
        <InfoLecturePanel infoLecture={infoLecture12} />
        <InfoLecturePanel infoLecture={infoLecture13} />
      </Box>
    </Box>
  );
};

export default GeniusSpaceCoursesReactPage;
