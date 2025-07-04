import queryString from 'query-string';
import { TGetParameters } from '../get-parameters-type/t-get-parameters';

function buildQueryString(
  pathname: string,
  getParameters: TGetParameters
): string {
  return queryString.stringifyUrl({
    url: pathname,
    query: { ...getParameters }
  });
}

export default buildQueryString;
