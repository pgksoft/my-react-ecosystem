interface IDialogDetail {
  id: string;
  getName: (value: string) => void;
  onUpdateDtoReady: (dto: string | null) => void;
}

export default IDialogDetail;
