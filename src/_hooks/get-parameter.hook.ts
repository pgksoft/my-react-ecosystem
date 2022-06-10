import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export type TGetParameter =
  | string
  | boolean
  | string[]
  | (string | null)[]
  | null
  | undefined;

export type TGetParameters = Record<string, TGetParameter>;

export function buildQueryString(
  pathname: string,
  getParameters: TGetParameters
): string {
  return queryString.stringifyUrl({
    url: pathname,
    query: { ...getParameters }
  });
}

export function useBuildQuery(getParameters?: TGetParameters) {
  const { pathname, search } = useLocation();
  return {
    pathname,
    query: { ...queryString.parse(search), ...getParameters }
  };
}
