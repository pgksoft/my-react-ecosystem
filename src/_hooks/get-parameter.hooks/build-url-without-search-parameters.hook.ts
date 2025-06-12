import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { TGetParameters } from './get-parameters-type/t-get-parameters';

function useBuildUrlWithoutSearchParameters(
  getParameters: TGetParameters
): string {
  const { pathname } = useLocation();
  return queryString.stringifyUrl({
    url: pathname,
    query: getParameters
  });
}

export default useBuildUrlWithoutSearchParameters;
