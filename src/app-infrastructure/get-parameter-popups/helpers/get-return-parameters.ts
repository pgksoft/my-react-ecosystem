import {
  TGetParameters,
  type TGetParameter
} from '../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import TPopupDialogParameters from '../types-parameters-popup/t-dialog-parameters';

const getReturnParameters = (returnPopup?: TGetParameter): TGetParameters => {
  const keyPopup: TPopupDialogParameters = 'popup';
  const popupParameter = (returnPopup && { [keyPopup]: returnPopup }) || {};
  return { ...popupParameter };
};

export default getReturnParameters;
