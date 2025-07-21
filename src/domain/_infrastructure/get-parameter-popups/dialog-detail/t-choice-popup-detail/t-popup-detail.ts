import { Breakpoint } from '@mui/system';
import TDetailDialog from './t-dialog-detail';
import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';

type TPopupDetail<T extends IEntityMember> = {
  Component: React.FC<TDetailDialog<T>>;
  apiUrl: string;
  title: string;
  titleSuccess: string;
  updateConfirmTitle: string;
  closeSuccess?: () => void;
  fullWidth?: boolean;
  maxWidth?: false | Breakpoint;
};

export default TPopupDetail;
