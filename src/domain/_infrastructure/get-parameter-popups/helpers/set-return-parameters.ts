import { TGetParameters } from '../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import getReturnParameters from './get-return-parameters';

const setReturnParameters = (
  returnParameters: TGetParameters,
  returnPopup: string,
  returnId?: string
) => {
  const temp = getReturnParameters(returnPopup, returnId);
  Object.assign(returnParameters, temp);
};

export default setReturnParameters;
