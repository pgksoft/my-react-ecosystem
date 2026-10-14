import React, { type CSSProperties, type FC } from 'react';
import { DefaultButton } from '../../app-ui/default-button/default-button';
import { COLORS } from '../../app-const/colors';

export type TBaseCommandTextButtonProps = {
  title: string;
  disabled?: boolean;
  styleButton?: CSSProperties;
};

export type TCommandTextButtonProps = TBaseCommandTextButtonProps & {
  onClick: () => void;
};

const CommandTextButton: FC<TCommandTextButtonProps> = ({
  title,
  onClick,
  disabled,
  styleButton
}) => {
  return (
    <DefaultButton
      onClick={onClick}
      disabled={disabled}
      variant='contained'
      style={{ color: COLORS.primaryMain, ...styleButton }}
    >
      {title}
    </DefaultButton>
  );
};

export default CommandTextButton;
