/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Box } from '@mui/material';
import { Field, Formik, FormikProps } from 'formik';
import { InfoNotifier } from '../../infrastructure/ui/app-notifiers/info-notifier';
import { useStylesDialog } from '../../infrastructure/ui/style/style-dialog';
import { TITLES_SIMPLE_NEWSLETTER_SING_UP } from '../const/titles';
import { DefaultButton } from '../../infrastructure/ui/default-button/default-button';
import {
  getInitialValuesOfCreate,
  KeyValuesForCreate,
  IValuesForCreate,
  isKeyValuesForCreate
} from '../util/values-for-create';
import {
  joiValidationSchemaForCreate,
  TErrors
} from '../util/validate-for-create';
import { FormikAppTextField } from '../../infrastructure/ui/formik-app-mui-components';

export const SimpleNewsletterSignUpCreate: FC = () => {
  const classes = useStylesDialog();

  const [values, setValues] = useState<IValuesForCreate | null>(null);
  const [errors, setErrors] = useState<TErrors>({});

  useEffect(() => {
    if (values) {
      const validResult = joiValidationSchemaForCreate.validate(values);
      if (validResult.error) {
        const newErrors: TErrors = {};
        for (const detail of validResult.error.details) {
          const key = detail.context?.key;
          if (key && isKeyValuesForCreate(key)) {
            newErrors[key] = detail.message;
          }
        }
        setErrors(newErrors);
      }
    }
  }, [values]);

  return (
    <Formik
      initialValues={getInitialValuesOfCreate()}
      // validationSchema={joiValidationSchemaForCreate}
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
              label={TITLES_SIMPLE_NEWSLETTER_SING_UP.firstName}
              variant='standard'
            />
            <Field
              component={FormikAppTextField}
              name={KeyValuesForCreate.lastName}
              label={TITLES_SIMPLE_NEWSLETTER_SING_UP.lastName}
              variant='standard'
            />
            <Field
              component={FormikAppTextField}
              name={KeyValuesForCreate.email}
              type={KeyValuesForCreate.email}
              label={TITLES_SIMPLE_NEWSLETTER_SING_UP.email}
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
