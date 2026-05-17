/* eslint-disable react/require-default-props */
import React, { CSSProperties, ReactNode } from 'react';
import { Theme, Typography, TypographyProps } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    fieldset: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      border: '1px solid lightgrey',
      borderRadius: '4px',
      webkitBorderRadius: '4px',
      mozBorderRadius: '4px',
      msBorderRadius: '4px',
      oBorderRadius: '4px',
      fontSize: '1rem'
    }
  });
});

type TViewWrap = {
  legend: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  typographyProps?: TypographyProps;
};

export const ViewWrap: React.FC<TViewWrap> = ({
  legend,
  children,
  className,
  style,
  typographyProps
}) => {
  const classes = useStyles();

  return (
    <fieldset
      className={clsx(classes.fieldset, className && className)}
      style={style}
    >
      <legend>
        <Typography color='InfoText' {...typographyProps}>
          {legend}
        </Typography>
      </legend>
      {children}
    </fieldset>
  );
};
