import queryString from 'query-string';
import TDialogParameters from '../../../domain/_infrastructure/get-parameter-popups/types-parameters-popup/t-dialog-parameters';

const getQueryStringWithoutParameters = (
  search: string,
  withoutParameters?: TDialogParameters[] | string[]
): queryString.ParsedQuery<string> => {
  const query = queryString.parse(search);
  if (withoutParameters && !!withoutParameters.length) {
    withoutParameters.forEach((key) => {
      delete query[key];
    });
  }
  return query;
};

export default getQueryStringWithoutParameters;
