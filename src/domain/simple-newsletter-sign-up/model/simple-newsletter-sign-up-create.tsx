/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Box, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { InfoNotifier } from '../../infrastructure/ui/app-notifiers/info-notifier';
import { useStylesDialog } from '../../infrastructure/ui/style/style-dialog';
import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../const/titles';
import { DefaultButton } from '../../infrastructure/ui/default-button/default-button';

export const SimpleNewsletterSignUpCreate: FC = () => {
  const classes = useStylesDialog();

  const [values, setValues] = useState<object | null>(null);

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: (values) => {
      setValues(values);
    }
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={clsx(
        classes.rootPopupDialog,
        classes.margin0,
        classes.columnDirection
      )}
    >
      <TextField
        id='email'
        name='email'
        type='email'
        variant='standard'
        label={TITLES_SIMPLE_NEWSLETTER_SING_UP.email}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Box className={classes.boxFooter}>
        <DefaultButton type='submit'>Submit</DefaultButton>
      </Box>
      {values && (
        <InfoNotifier
          message={JSON.stringify(values, null, 2)}
          timeOnCloseMs={10000}
          onClose={() => {
            setValues(null);
          }}
        />
      )}
    </form>
  );
};
