import { Breakpoint } from '@mui/system';
import type TListDialog from './t-list-dialog';

type TPopupList = {
  Component: React.FC<TListDialog>;
  title: string;
  fullWidth?: boolean;
  maxWidth?: false | Breakpoint;
};

export default TPopupList;
