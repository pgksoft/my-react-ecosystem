import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { TGetParameters } from './get-parameters-type/t-get-parameters';
import TDialogParameters from '../../domain/_infrastructure/get-parameter-popups/types-parameters-popup/t-dialog-parameters';
import getQueryStringWithoutParameters from './helpers/get-query-string-without-parameters';

type TBuildUrlProps = {
  getParameters: TGetParameters;
  whatQueryIs?: 'search & getParameters' | 'only getParameters';
  withoutParameters?: TDialogParameters[] | string[];
};

function useBuildUrl({
  getParameters,
  whatQueryIs = 'search & getParameters',
  withoutParameters
}: TBuildUrlProps): string {
  const { pathname, search } = useLocation();
  const query = getQueryStringWithoutParameters(search, withoutParameters);
  return queryString.stringifyUrl({
    url: pathname,
    query:
      whatQueryIs === 'search & getParameters'
        ? { ...query, ...getParameters }
        : { ...getParameters }
  });
}

export default useBuildUrl;
