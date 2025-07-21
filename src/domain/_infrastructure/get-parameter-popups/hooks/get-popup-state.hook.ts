/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useMemo, useState } from 'react';
import useGetParameter from '../../../../_hooks/get-parameter.hooks/get-parameter.hook';

let timeout: ReturnType<typeof setTimeout>;

const useGetPopupState = () => {
  const [popupName] = useGetParameter('popup');
  const [returnPopup] = useGetParameter('returnPopup');

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
    mountedPopup,
    isOpened,
    returnPopup
  };
};

export default useGetPopupState;
