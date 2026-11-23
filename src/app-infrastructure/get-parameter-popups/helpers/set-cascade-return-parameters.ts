import {
  TGetParameters,
  type TGetParameter
} from '../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import checkReturnParameters from './check-return-parameters-for-cascade-call-popups/check-return-parameters';
import setReturnParameters from './set-return-parameters';

type TSetCascadeReturnParametersInput = {
  returnParameters: TGetParameters;
  returnPopup: TGetParameter;
};

const setCascadeReturnParameters = ({
  returnParameters,
  returnPopup
}: TSetCascadeReturnParametersInput): void => {
  if (returnPopup) {
    checkReturnParameters.Push({ returnPopup });
    setReturnParameters(returnParameters, returnPopup);
  }

  if (!returnPopup) {
    const { returnPopup: cascadeReturnPopup } = checkReturnParameters.Get();
    if (cascadeReturnPopup) {
      setReturnParameters(returnParameters, cascadeReturnPopup);
    }
  }
};

export default setCascadeReturnParameters;
