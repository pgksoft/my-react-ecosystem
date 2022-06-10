import React from 'react';

export type TModalButtonProps = {
  title?: string;
  fullWidth?: boolean;
  maxWidth?: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
  NestedForm?: React.FC<TNestedProps>;
  childrenNestedForm?: React.ReactNode;
  children?: React.ReactNode;
};

export type TNestedProps = {
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
};
