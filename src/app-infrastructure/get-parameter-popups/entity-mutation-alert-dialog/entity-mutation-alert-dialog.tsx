/* eslint-disable react/require-default-props */
import React, { FC, useEffect } from 'react';
import useFetch from '../../api-platform/http-hook/use-fetch';
import { LoadPopupWrapper } from '../../app-ui/load-popup-wrapper/load-popup-wrapper';
import { Loader } from '../../app-ui/loader/loader';
import SuccessNotifier from '../../app-ui/app-notifiers/success-notifier/success-notifier';
import ErrorNotifier from '../../app-ui/app-notifiers/error-notifier/error-notifier';
import { successStatuses } from '../../app-const/success-statuses';
import WarningNotifier from '../../app-ui/app-notifiers/warning-notifier/warning-notifier';
import type TUnknownRecord from '../../app-types/t-unknown-record';

type TEntityMutationAlertDialog = {
  url: string;
  baseURL: string;
  dto: TUnknownRecord | FormData;
  method?: string;
  onCloseSuccess: () => void;
  onCloseError: () => void;
  onGetError?: (value: Error | null) => void;
  titleSuccess?: string;
};

const EntityMutationAlertDialog: FC<TEntityMutationAlertDialog> = ({
  url,
  baseURL,
  dto,
  method = 'post',
  onCloseSuccess,
  onCloseError,
  onGetError,
  titleSuccess = ''
}) => {
  const { update, status, isLoading, error, resetError } = useFetch();

  const onResetError = () => {
    resetError();
    onCloseError();
  };

  useEffect(() => {
    if (error) onGetError?.(new Error(error.message));
  }, [error, onGetError]);

  useEffect(() => {
    update({
      url,
      method,
      data: dto,
      baseURL
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadPopupWrapper>
          <Loader />
        </LoadPopupWrapper>
      ) : (
        <>
          {status && successStatuses.includes(status) && !error && (
            <SuccessNotifier message={titleSuccess} onClose={onCloseSuccess} />
          )}
          {error && (
            <ErrorNotifier
              error={new Error(error.message)}
              onClose={onResetError}
            />
          )}
          {status && !successStatuses.includes(status) && !error && (
            <WarningNotifier
              message={`Unknown response status: ${status}`}
              onClose={onCloseSuccess}
            />
          )}
        </>
      )}
    </>
  );
};

export default EntityMutationAlertDialog;
