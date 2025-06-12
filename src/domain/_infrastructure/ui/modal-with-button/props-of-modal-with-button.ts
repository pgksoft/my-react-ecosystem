import { Breakpoint } from '@mui/system';

export type TModalButtonProps = {
  title?: string;
  fullWidth?: boolean;
  maxWidth?: false | Breakpoint;
  NestedForm?: React.FC<TNestedProps>;
  childrenNestedForm?: React.ReactNode;
  children?: React.ReactNode;
};

export type TNestedProps = {
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
};
