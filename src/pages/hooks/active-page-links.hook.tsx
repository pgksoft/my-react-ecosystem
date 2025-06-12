import { useEffect } from 'react';
import useAppDispatch from '../../store/use-app-dispatch';
import { setAppPageLinks } from '../../redux-toolkit/app-page-links/app-page-links-slice';
import TLink from '../../domain/_infrastructure/types/t-link';

export function useActivePageLinks(
  activePageLink: TLink,
  activeParentLink: TLink
) {
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(
      setAppPageLinks({
        activePageLink,
        activeParentLink
      })
    );
  }, [activePageLink, activeParentLink, appDispatch]);
}
