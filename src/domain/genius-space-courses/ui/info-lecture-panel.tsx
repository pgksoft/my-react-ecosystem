import React, { FC } from 'react';
import { Box, Link, Paper, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import TInfoLecture from '../type/info-lecture';
import { TITLES_GENIUS_SPACE_COURSES } from '../const/titles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    linkBlock: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    link: { paddingRight: '2%' }
  });
});

type TInfoLecturePanelProps = { infoLecture: TInfoLecture };

const InfoLecturePanel: FC<TInfoLecturePanelProps> = ({ infoLecture }) => {
  const { lectureTitle, usefulLinks } = infoLecture;

  const classes = useStyles();

  return (
    <Paper elevation={2}>
      <Typography variant='overline'>{lectureTitle}</Typography>
      <Typography variant='body2'>
        {TITLES_GENIUS_SPACE_COURSES.usefulLinks}
      </Typography>
      <Box className={classes.linkBlock}>
        {usefulLinks.map((link, index) => {
          const key = `${link.title}-${index}`;
          return (
            <Link
              className={classes.link}
              key={key}
              variant='caption'
              underline='hover'
              href={link.href}
            >
              {`● ${link.title}`}
            </Link>
          );
        })}
      </Box>
    </Paper>
  );
};

export default InfoLecturePanel;
