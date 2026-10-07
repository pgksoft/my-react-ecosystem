import {
  TGetParameters,
  type TGetParameter
} from '../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import checkListSearchParameters, {
  isEntityPopupListRoute
} from './check-list-search-parameters-for-cascade-call-popups/check-list-search-parameters';

const setListSearchParameters = (
  listSearchParameters: TGetParameters,
  returnPopup: TGetParameter
) => {
  if (isEntityPopupListRoute(returnPopup)) {
    const temp = checkListSearchParameters.Get(returnPopup);
    Object.assign(listSearchParameters, temp);
  }
};

export default setListSearchParameters;
