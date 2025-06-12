enum EDialogParameters {
  popup,
  idDetail,
  idRemove,
  returnPopup,
  returnId
}

type TDialogParameters = keyof typeof EDialogParameters;

export default TDialogParameters;
