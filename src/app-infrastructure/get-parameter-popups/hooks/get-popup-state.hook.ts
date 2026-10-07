/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useMemo, useState } from 'react';
import useGetPathAndQuery from '../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import { PopupDialogParameterNames } from '../types-parameters-popup/t-dialog-parameters';

let timeout: ReturnType<typeof setTimeout>;

const useGetPopupState = () => {
  const { pathname, query } = useGetPathAndQuery();
  const popupName = query[PopupDialogParameterNames.popup] as string;
  const returnPopup = query[PopupDialogParameterNames.returnPopup];

  const [mountedPopup, setMountedPopup] = useState<string | null>(popupName);

  useEffect(() => {
    if (popupName) {
      timeout && clearTimeout(timeout);
      setMountedPopup(popupName);
    } else {
      timeout = setTimeout(() => {
        setMountedPopup(null);
      }, 200);
    }
  }, [popupName]);

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, []);

  const isOpened = useMemo(() => {
    return Boolean(popupName);
  }, [popupName]);

  return {
    pathname,
    query,
    mountedPopup,
    isOpened,
    returnPopup
  };
};

export default useGetPopupState;
