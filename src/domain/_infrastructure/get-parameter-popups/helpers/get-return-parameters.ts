import { TGetParameters } from '../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import TDialogParameters from '../types-parameters-popup/t-dialog-parameters';

const getReturnParameters = (
  returnPopup?: string,
  returnId?: string
): TGetParameters => {
  const keyPopup: TDialogParameters = 'popup';
  const keyId: TDialogParameters = 'idDetail';
  const popupParameter = (returnPopup && { [keyPopup]: returnPopup }) || {};
  const idDetailParameter = (returnId && { [keyId]: returnId }) || {};
  return { ...popupParameter, ...idDetailParameter };
};

export default getReturnParameters;
