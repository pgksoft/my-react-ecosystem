import { TGetParameters } from '../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import checkReturnParameters from './check-return-parameters-for-cascade-call-popups/check-return-parameters';
import setListSearchParameters from './set-list-search-parameters';
import setReturnParameters from './set-return-parameters';

type TSetCascadeReturnParametersInput = {
  returnParameters: TGetParameters;
  listSearchParameters: TGetParameters;
  returnPopup: string;
  returnId: string;
};

const setCascadeReturnParameters = ({
  returnParameters,
  listSearchParameters,
  returnPopup,
  returnId
}: TSetCascadeReturnParametersInput): void => {
  if (returnPopup) {
    checkReturnParameters.Push({ returnPopup, returnId });
    setReturnParameters(returnParameters, returnPopup, returnId);
    setListSearchParameters(listSearchParameters, returnPopup);
  }

  if (!returnPopup) {
    const { returnPopup: cascadeReturnPopup, returnId: cascadeReturnId } =
      checkReturnParameters.Get();
    if (cascadeReturnPopup) {
      setReturnParameters(
        returnParameters,
        cascadeReturnPopup,
        cascadeReturnId
      );
      setListSearchParameters(listSearchParameters, cascadeReturnPopup);
    }
  }
};

export default setCascadeReturnParameters;
