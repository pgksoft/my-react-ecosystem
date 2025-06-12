/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Box } from '@mui/material';
import { Field, Formik, FormikProps } from 'formik';
import { useStylesDialog } from '../../_infrastructure/ui/style/style-dialog';
import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../const/titles';
import { DefaultButton } from '../../_infrastructure/ui/default-button/default-button';
import {
  getInitialValuesOfCreate,
  KeyValuesForCreate,
  IValuesForCreate
} from '../util/values-for-create';
import { validateForCreate } from '../util/validate-for-create/validate-for-create';
import { FormikAppTextField } from '../../_infrastructure/ui/formik-app-mui-components';
import InfoNotifier from '../../_infrastructure/ui/app-notifiers/info-notifier/info-notifier';

export const SimpleNewsletterSignUpCreate: FC = () => {
  const classes = useStylesDialog();

  const [values, setValues] = useState<IValuesForCreate | null>(null);

  return (
    <Formik
      initialValues={getInitialValuesOfCreate()}
      validate={validateForCreate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setValues(values);
          setSubmitting(false);
        }, 200);
      }}
    >
      {(formik: FormikProps<IValuesForCreate>) => {
        return (
          <form
            onSubmit={formik.handleSubmit}
            className={clsx(
              classes.rootPopupDialog,
              classes.margin0,
              classes.columnDirection
            )}
          >
            <Field
              component={FormikAppTextField}
              name={KeyValuesForCreate.firstName}
              label={TITLES_SIMPLE_NEWSLETTER_SING_UP.firstNameTitle}
              variant='standard'
            />
            <Field
              component={FormikAppTextField}
              name={KeyValuesForCreate.lastName}
              label={TITLES_SIMPLE_NEWSLETTER_SING_UP.lastNameTitle}
              variant='standard'
            />
            <Field
              component={FormikAppTextField}
              name={KeyValuesForCreate.email}
              type={KeyValuesForCreate.email}
              label={TITLES_SIMPLE_NEWSLETTER_SING_UP.emailTitle}
              variant='standard'
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
      }}
    </Formik>
  );
};
