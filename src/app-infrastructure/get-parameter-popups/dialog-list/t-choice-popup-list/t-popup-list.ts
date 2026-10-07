import { Breakpoint } from '@mui/system';

type TPopupList = {
  Component: React.FC;
  title: string;
  fullWidth?: boolean;
  maxWidth?: false | Breakpoint;
};

export default TPopupList;
