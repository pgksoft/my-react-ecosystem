/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Box, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { InfoNotifier } from '../../infrastructure/ui/app-notifiers/info-notifier';
import { useStylesDialog } from '../../infrastructure/ui/style/style-dialog';
import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../const/titles';
import { DefaultButton } from '../../infrastructure/ui/default-button/default-button';
import {
  getInitialValuesOfCreate,
  KeyValuesForCreate,
  TValuesForCreate
} from '../util/get-initial-values-for-create';
import { validateForCreate } from '../util/validate-for-create';

export const SimpleNewsletterSignUpCreate: FC = () => {
  const classes = useStylesDialog();

  const [values, setValues] = useState<TValuesForCreate | null>(null);

  const formik = useFormik({
    initialValues: getInitialValuesOfCreate(),
    validate: validateForCreate,
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
        id={KeyValuesForCreate.firstName}
        name={KeyValuesForCreate.firstName}
        type={KeyValuesForCreate.firstName}
        error={formik.touched.firstName && !!formik.errors.firstName}
        helperText={formik.touched.firstName && formik.errors.firstName}
        variant='standard'
        label={TITLES_SIMPLE_NEWSLETTER_SING_UP.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      <TextField
        id={KeyValuesForCreate.lastName}
        name={KeyValuesForCreate.lastName}
        type={KeyValuesForCreate.lastName}
        error={formik.touched.lastName && !!formik.errors.lastName}
        helperText={formik.touched.lastName && formik.errors.lastName}
        variant='standard'
        label={TITLES_SIMPLE_NEWSLETTER_SING_UP.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      <TextField
        id={KeyValuesForCreate.email}
        name={KeyValuesForCreate.email}
        type={KeyValuesForCreate.email}
        error={formik.touched.email && !!formik.errors.email}
        helperText={formik.touched.email && formik.errors.email}
        variant='standard'
        label={TITLES_SIMPLE_NEWSLETTER_SING_UP.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
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
