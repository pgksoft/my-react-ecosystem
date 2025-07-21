import { TGetParameters } from '../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import getReturnParameters from './get-return-parameters';

const setReturnParameters = (
  returnParameters: TGetParameters,
  returnPopup: string
) => {
  const temp = getReturnParameters(returnPopup);
  Object.assign(returnParameters, temp);
};

export default setReturnParameters;
