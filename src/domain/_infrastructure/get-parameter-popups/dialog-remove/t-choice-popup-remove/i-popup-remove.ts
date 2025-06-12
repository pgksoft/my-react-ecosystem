import { Breakpoint } from '@mui/system';
import IDialogRemove from './i-dialog-remove';

interface IPopupRemove {
  Component: React.FC<IDialogRemove>;
  apiUrl: string;
  title: string;
  successTitle: string;
  closeAfterSuccess?: () => void;
  fullWidth?: boolean;
  maxWidth?: false | Breakpoint;
}
export default IPopupRemove;
