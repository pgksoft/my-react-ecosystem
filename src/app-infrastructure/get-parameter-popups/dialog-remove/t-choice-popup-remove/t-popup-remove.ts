import { Breakpoint } from '@mui/system';
import TDialogRemove from './t-dialog-remove';
import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';

type TPopupRemove<T extends IEntityMember> = {
  Component: React.FC<TDialogRemove<T>>;
  apiUrl: string;
  title: string;
  successTitle: string;
  removeConfirmTitle: string;
  closeAfterSuccess?: () => void;
  fullWidth?: boolean;
  maxWidth?: false | Breakpoint;
};
export default TPopupRemove;
