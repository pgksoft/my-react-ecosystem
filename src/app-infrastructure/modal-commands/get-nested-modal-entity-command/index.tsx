import React, { type FC } from 'react';
import type { TEntityCommandModalWrapperProps } from '../entity-command-modal-wrapper';
import type { TNestedModalCommandWrapperProps } from '../model/modal-command-button-wrapper';
import EntityCommandModalWrapper from '../entity-command-modal-wrapper';

type TNestedModalEntityCommandOptions = Omit<
  TEntityCommandModalWrapperProps,
  'onClose'
> & { componentName: string };

const getNestedModalEntityCommand = (
  options: TNestedModalEntityCommandOptions
): FC<TNestedModalCommandWrapperProps> => {
  const { Command, entityNameKey, entityDialogsFieldsKey, componentName } =
    options;
  const NestedModalEntityCommand: FC<TNestedModalCommandWrapperProps> = ({
    onClose
  }) => {
    return (
      <EntityCommandModalWrapper
        onClose={onClose}
        Command={Command}
        entityNameKey={entityNameKey}
        entityDialogsFieldsKey={entityDialogsFieldsKey}
      />
    );
  };
  NestedModalEntityCommand.displayName = componentName;
  return NestedModalEntityCommand;
};

export default getNestedModalEntityCommand;
