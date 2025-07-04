import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { TGetParameters } from './get-parameters-type/t-get-parameters';

function useBuildQuery(getParameters?: TGetParameters) {
  const { pathname, search } = useLocation();
  return {
    pathname,
    query: { ...queryString.parse(search), ...getParameters }
  };
}

export default useBuildQuery;
