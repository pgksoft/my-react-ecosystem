/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useFetch from '../../api-platform/http-hook/use-fetch';
import { LoadPopupWrapper } from '../../app-ui/load-popup-wrapper/load-popup-wrapper';
import { Loader } from '../../app-ui/loader/loader';
import ErrorNotifier from '../../app-ui/app-notifiers/error-notifier/error-notifier';
import WarningNotifier from '../../app-ui/app-notifiers/warning-notifier/warning-notifier';
import { TITLES_LOADING_DATA_COMPONENT } from './const/title';
import TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useAppDispatch from '../../../store/use-app-dispatch';
import { clearMutationEntity } from '../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import apiEntityUrl from '../../api-platform/app-entities/const/api-entity-url';
import WITHOUT_DIALOG_PARAMETERS from '../../get-parameter-popups/const/without-dialog-parameters';
import resolveBaseUrl from '../../api-platform/app-entities/resolve-base-url';
import useAppSelector from '../../../store/use-app-selector';
import { mutationEntitySelector } from '../../../redux-toolkit/mutation-entities/mutation-entities-selectors';
import { selectEntityDataPageByKey } from '../../../redux-toolkit/entity-data-page/entity-data-page-selectors';
import { PAGE_NUMBER_KEY } from '../../app-const/pagination';
import { isPageResponse } from '../../api-platform/api-response/t-page-response';
import useGetPathAndQuery from '../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import buildQueryString from '../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import { omitKeys } from '../../app-helpers/omit-keys';

type TLoadingDataComponentProps<T> = {
  inData: T | null;
  isShowDataEmptyWarning?: boolean;
  entityNameKey: TEntityNameKeys;
  onLoaded: (data: T | null) => void;
  onCloseErrorNotifier?: () => void;
  onCloseWarningNotifier?: () => void;
};

function LoadingDataListComponent<T>({
  inData,
  isShowDataEmptyWarning = false,
  entityNameKey,
  onLoaded,
  onCloseErrorNotifier,
  onCloseWarningNotifier
}: TLoadingDataComponentProps<T>) {
  const [isDataEmptyArray, setIsDataEmptyArray] = useState(false);

  const { data, isLoading, error, update, resetError } = useFetch<T>();

  const mutation = useAppSelector(mutationEntitySelector)[entityNameKey];
  const pageToLoad = useAppSelector(selectEntityDataPageByKey(entityNameKey));

  const appDispatch = useAppDispatch();

  const { query } = useGetPathAndQuery();

  const pageGetParam = useMemo(() => {
    return pageToLoad ? { [PAGE_NUMBER_KEY]: String(pageToLoad) } : {};
  }, [pageToLoad]);

  const onCloseError = useCallback(() => {
    resetError();
    if (onCloseErrorNotifier) {
      onCloseErrorNotifier();
    }
  }, [onCloseErrorNotifier, resetError]);

  const onCloseWarning = useCallback(() => {
    setIsDataEmptyArray(false);
    if (onCloseWarningNotifier) {
      onCloseWarningNotifier();
    }
  }, [onCloseWarningNotifier]);

  const checkDataEmptyArray = useCallback((data: T) => {
    if (Array.isArray(data) && !data.length) {
      setIsDataEmptyArray(true);
    } else if (isPageResponse(data)) {
      !data.items.length && setIsDataEmptyArray(true);
    } else {
      setIsDataEmptyArray(false);
    }
  }, []);

  useEffect(() => {
    if (!error && data) {
      onLoaded(data);
      checkDataEmptyArray(data);
    }
  }, [checkDataEmptyArray, data, error, onLoaded]);

  useEffect(() => {
    if (mutation && mutation === 'yes') {
      inData && onLoaded(null);
      appDispatch(clearMutationEntity(entityNameKey));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutation]);

  useEffect(() => {
    if (!inData && !error) {
      const baseURL = resolveBaseUrl(entityNameKey);
      const getParams = {
        ...omitKeys(query, WITHOUT_DIALOG_PARAMETERS),
        ...pageGetParam
      };
      const url = buildQueryString(apiEntityUrl[entityNameKey], getParams);
      update({ url, baseURL });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, inData]);

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

export default LoadingDataListComponent;
