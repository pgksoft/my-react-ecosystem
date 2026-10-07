import type TUnknownRecord from '../../../app-types/t-unknown-record';

type ICreateDialog = {
  onCreateDtoReady: (dto: TUnknownRecord | FormData | null) => void;
};

export default ICreateDialog;
