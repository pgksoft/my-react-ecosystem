/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import useFetch from '../api-platform/http-hook/use-fetch';
import { LoadPopupWrapper } from '../ui/load-popup-wrapper/load-popup-wrapper';
import { Loader } from '../ui/loader/loader';
import ErrorNotifier from '../ui/app-notifiers/error-notifier/error-notifier';
import WarningNotifier from '../ui/app-notifiers/warning-notifier/warning-notifier';
import { TITLES_LOADING_DATA_COMPONENT } from './const/title';
import TEntityNameKeys from '../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useAppDispatch from '../../../store/use-app-dispatch';
import { setTableEntityBuilt } from '../../../redux-toolkit/table-entity-built/table-entity-built-slice';
import { TFlagMutation } from '../../../redux-toolkit/mutation-entities/mutation-entities-actions';
import { clearMutationEntity } from '../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import apiEntityUrl from '../api-platform/app-entities/const/api-entity-url';

type TLoadingDataComponentProps<T> = {
  inData: T | null;
  isShowDataEmptyWarning?: boolean;
  entityNameKey: TEntityNameKeys;
  mutation?: TFlagMutation;
  onLoaded: (data: T | null) => void;
  onCloseErrorNotifier?: () => void;
  onCloseWarningNotifier?: () => void;
};

function LoadingDataComponent<T>({
  inData,
  isShowDataEmptyWarning = false,
  entityNameKey,
  mutation,
  onLoaded,
  onCloseErrorNotifier,
  onCloseWarningNotifier
}: TLoadingDataComponentProps<T>) {
  const [isDataEmptyArray, setIsDataEmptyArray] = useState(false);

  const { data, isLoading, error, update, resetError } = useFetch<T>();

  const appDispatch = useAppDispatch();

  const onCloseError = () => {
    resetError();
    if (onCloseErrorNotifier) {
      onCloseErrorNotifier();
    }
  };

  const onCloseWarning = () => {
    setIsDataEmptyArray(false);
    if (onCloseWarningNotifier) {
      onCloseWarningNotifier();
    }
  };

  useEffect(() => {
    const checkDataEmptyArray = (data: T) => {
      if (Array.isArray(data) && !data.length) {
        setIsDataEmptyArray(true);
      } else {
        setIsDataEmptyArray(false);
      }
    };

    if (!error && data) {
      onLoaded(data);
      checkDataEmptyArray(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  useEffect(() => {
    if (entityNameKey) {
      isLoading && appDispatch(setTableEntityBuilt([entityNameKey, 'no']));
      Array.isArray(data) &&
        data.length &&
        !isLoading &&
        appDispatch(setTableEntityBuilt([entityNameKey, 'yes']));
    }
  }, [appDispatch, data, entityNameKey, isLoading]);

  useEffect(() => {
    if (mutation && mutation === 'yes') {
      inData && onLoaded(null);
      appDispatch(clearMutationEntity(entityNameKey));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutation]);

  useEffect(() => {
    !inData && update({ url: apiEntityUrl[`${entityNameKey}`] });
  }, [entityNameKey, inData, update]);

  return (
    <>
      {isLoading && (
        <LoadPopupWrapper>
          <Loader />
        </LoadPopupWrapper>
      )}
      {error ? (
        <ErrorNotifier error={error} onClose={onCloseError} />
      ) : (
        isDataEmptyArray &&
        isShowDataEmptyWarning && (
          <WarningNotifier
            message={TITLES_LOADING_DATA_COMPONENT.warningEmptyData}
            onClose={onCloseWarning}
          />
        )
      )}
    </>
  );
}

export default LoadingDataComponent;
