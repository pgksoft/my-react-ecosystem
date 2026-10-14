import React, { type ReactElement } from 'react';
import type { TBaseCommandIconButtonProps } from '../../ui/command-icon-button';
import type { TBaseCommandTextButtonProps } from '../../ui/command-text-button';
import CommandIconButton from '../../ui/command-icon-button';
import CommandTextButton from '../../ui/command-text-button';

export type TBaseCommandButtonProps =
  | { kind: 'icon-button'; baseButtonProps: TBaseCommandIconButtonProps }
  | {
      kind: 'text-button';
      baseButtonProps: TBaseCommandTextButtonProps;
    };

type TCreateCommandButtonOptions = {
  baseCommandButtonProps: TBaseCommandButtonProps;
  onOpen: () => void;
};

const createCommandButton = ({
  baseCommandButtonProps,
  onOpen
}: TCreateCommandButtonOptions): ReactElement => {
  const { kind } = baseCommandButtonProps;
  if (kind === 'icon-button') {
    const { baseButtonProps: baseProps } = baseCommandButtonProps;
    return <CommandIconButton onClick={onOpen} {...baseProps} />;
  }
  const { baseButtonProps: baseProps } = baseCommandButtonProps;
  return <CommandTextButton onClick={onOpen} {...baseProps} />;
};

export default createCommandButton;
