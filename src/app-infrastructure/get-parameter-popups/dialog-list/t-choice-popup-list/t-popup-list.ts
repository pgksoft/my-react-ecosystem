import { Breakpoint } from '@mui/system';
import TEntityList from './t-entity-list';

type TPopupList = {
  Component: React.FC<TEntityList>;
  title: string;
  fullWidth?: boolean;
  maxWidth?: false | Breakpoint;
};

export default TPopupList;
