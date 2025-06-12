import React, { FC } from 'react';
import { Toolbar } from '@mui/material';
import CHOICE_ENTITY_TOOL_LIST from '../const/choice-entity-tool-list';
import EntityToolIconButton from './entity-tool-icon-button';
import ChoiceEntityToolIcon from '../const/choice-entity-tool-icon';
import TEntityToolName from '../../entity-tools-types/t-entity-tool-names';
import TEntityToolPopup from '../../entity-tools-types/t-entity-tool-popup';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useAppSelector from '../../../../../store/use-app-selector';
import { tableEntityBuiltSelector } from '../../../../../redux-toolkit/table-entity-built/table-entity-built-selectors';

type TEntityToolbarProps = { entityNameKey: TEntityNameKeys };

const EntityToolbar: FC<TEntityToolbarProps> = ({ entityNameKey }) => {
  const built = useAppSelector(tableEntityBuiltSelector)[entityNameKey];

  if (!built || built === 'no') return null;

  const entityTools = CHOICE_ENTITY_TOOL_LIST[entityNameKey];

  if (!entityTools) return null;

  return (
    <Toolbar
      variant='dense'
      sx={{
        '&>:nth-child(n)': {
          mr: '5%'
        }
      }}
    >
      {entityTools &&
        Object.entries(entityTools).map((item) => {
          const [toolName, toolPopup] = item as [
            TEntityToolName,
            TEntityToolPopup
          ];
          return (
            <EntityToolIconButton
              key={`${entityNameKey}-${toolName}`}
              entityNameKey={entityNameKey}
              toolName={toolName}
              toolPopup={toolPopup}
              getIcon={ChoiceEntityToolIcon[toolName]}
            />
          );
        })}
    </Toolbar>
  );
};

export default EntityToolbar;
