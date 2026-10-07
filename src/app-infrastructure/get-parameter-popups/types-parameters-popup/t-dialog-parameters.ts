type TPopupDialogParameters =
  | 'popup'
  | 'idDetail'
  | 'idRemove'
  | 'returnPopup'
  | 'returnId';

export const PopupDialogParameterNames = {
  popup: 'popup',
  returnPopup: 'returnPopup',
  returnId: 'returnId',
  idDetail: 'idDetail',
  idRemove: 'idRemove'
} as const satisfies {
  [K in TPopupDialogParameters]: K;
};

export default TPopupDialogParameters;
