import {
  TGetParameters,
  type TGetParameter
} from '../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import getReturnParameters from './get-return-parameters';

const setReturnParameters = (
  returnParameters: TGetParameters,
  returnPopup: TGetParameter
) => {
  const temp = getReturnParameters(returnPopup);
  Object.assign(returnParameters, temp);
};

export default setReturnParameters;
