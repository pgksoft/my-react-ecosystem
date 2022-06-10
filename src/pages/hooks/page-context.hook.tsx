import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetParametersContext } from '../../context/get-parameters-context';
import { RouteContext, TLink } from '../../context/route-context';
import {
  buildQueryString,
  useBuildQuery
} from '../../_hooks/get-parameter.hook';

export function usePageContext(link: TLink, mainLink: TLink) {
  // eslint-disable-next-line prettier/prettier
  const { routeParameters, setRouteParameters } = useContext(
    GetParametersContext
  );
  const { setActiveMainLink, setActiveLink } = useContext(RouteContext);
  const { pathname, query } = useBuildQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.stringify(query) !== JSON.stringify(routeParameters[link.url])) {
      setRouteParameters({
        ...routeParameters,
        [link.url]: query
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    setActiveMainLink(mainLink);
    setActiveLink(link);
    const newQuery = Object.keys(query).length
      ? query
      : routeParameters[link.url];
    const url = buildQueryString(pathname, newQuery);
    setRouteParameters({
      ...routeParameters,
      [url]: newQuery
    });
    navigate(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
