import { Breakpoint } from '@mui/system';
import IDialogDetail from './i-dialog-detail';

interface IPopupDetail {
  Component: React.FC<IDialogDetail>;
  apiUrl: string;
  title: string;
  messageSuccessUpdate: string;
  updateConfirmTitle: string;
  closeSuccess?: () => void;
  fullWidth?: boolean;
  maxWidth?: false | Breakpoint;
}

export default IPopupDetail;
