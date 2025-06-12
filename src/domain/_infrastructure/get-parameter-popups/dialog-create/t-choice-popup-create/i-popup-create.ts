import { Breakpoint } from '@mui/system';
import ICreateDialog from './i-create-dialog';
import { TApiEntityUrl } from '../../../api-platform/app-entities/const/api-entity-url';

interface IPopupCreate {
  Component: React.FC<ICreateDialog>;
  url: TApiEntityUrl;
  title: string;
  createConfirmTitle: string;
  titleSuccess: string;
  fullWidth?: boolean;
  maxWidth?: false | Breakpoint;
  closeSuccess?: () => void;
}

export default IPopupCreate;
