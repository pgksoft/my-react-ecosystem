import { TGetParameters } from '../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import TDialogParameters from '../types-parameters-popup/t-dialog-parameters';

const getReturnParameters = (returnPopup?: string): TGetParameters => {
  const keyPopup: TDialogParameters = 'popup';
  const popupParameter = (returnPopup && { [keyPopup]: returnPopup }) || {};
  return { ...popupParameter };
};

export default getReturnParameters;
