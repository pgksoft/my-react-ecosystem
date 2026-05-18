/* eslint-disable react/require-default-props */
import React, { FC, useEffect } from 'react';
import useFetch from '../../api-platform/http-hook/use-fetch';
import { LoadPopupWrapper } from '../../ui/load-popup-wrapper/load-popup-wrapper';
import { Loader } from '../../ui/loader/loader';
import SuccessNotifier from '../../ui/app-notifiers/success-notifier/success-notifier';
import ErrorNotifier from '../../ui/app-notifiers/error-notifier/error-notifier';

type TEntityMutationAlertDialog = {
  url: string;
  baseURL: string;
  dto: string;
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
  const { update, data, isLoading, error, resetError } = useFetch();

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
          {data && !error && (
            <SuccessNotifier message={titleSuccess} onClose={onCloseSuccess} />
          )}
          {error && (
            <ErrorNotifier
              error={new Error(error.message)}
              onClose={onResetError}
            />
          )}
        </>
      )}
    </>
  );
};

export default EntityMutationAlertDialog;
