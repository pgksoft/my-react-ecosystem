import type { TGetParameters } from '../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import type TPopupDialogParameters from '../types-parameters-popup/t-dialog-parameters';

export const isReturnPopup = (returnParameters: TGetParameters): boolean => {
  return Object.hasOwn(
    returnParameters,
    'popup' satisfies TPopupDialogParameters
  );
};
