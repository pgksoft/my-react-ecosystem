import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { TGetParameters } from './get-parameters-type/t-get-parameters';
import TDialogParameters from '../../domain/_infrastructure/get-parameter-popups/types-parameters-popup/t-dialog-parameters';
import getQueryStringWithoutParameters from './helpers/get-query-string-without-parameters';

function useBuildUrl(
  getParameters: TGetParameters,
  withoutParameters?: TDialogParameters[] | string[]
): string {
  const { pathname, search } = useLocation();
  const query = getQueryStringWithoutParameters(search, withoutParameters);
  return queryString.stringifyUrl({
    url: pathname,
    query: { ...query, ...getParameters }
  });
}

export default useBuildUrl;
