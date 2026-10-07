import React, { FC, useMemo } from 'react';
import { Toolbar } from '@mui/material';
import CHOICE_ENTITY_TOOL_LIST, {
  isChoiceEntityToolListKey
} from '../const/choice-entity-tool-list';
import EntityToolPopupIconButton from './entity-tool-popup-icon-button';
import ChoiceEntityToolIcon from '../const/choice-entity-tool-icon';
import { isEntityToolName } from '../../entity-tools-types/t-entity-tool-names';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useAppSelector from '../../../../store/use-app-selector';
import { selectedEntityItemsSelector } from '../../../../redux-toolkit/selected-entity-items/selected-entity-items-selectors';
import { generateButtonDisabledStrategyMap } from '../helpers/generate-button-disabled-strategy-map';
import useEntitySearchParamsInLocalStorage from '../../../app-hook-helpers/entity-search-params-in-local-storage.hook';
import { mutationEntitySelector } from '../../../../redux-toolkit/mutation-entities/mutation-entities-selectors';
import type { TPopupListRoute } from '../../../get-parameter-popups';

type TEntityToolbarProps = {
  entityNameKey: TEntityNameKeys;
  returnPopup?: TPopupListRoute;
};

const EntityToolbar: FC<TEntityToolbarProps> = ({
  entityNameKey,
  returnPopup
}) => {
  const selectedEntityItems = useAppSelector(selectedEntityItemsSelector)[
    entityNameKey
  ];
  const mutation = useAppSelector(mutationEntitySelector)[entityNameKey];

  const { getSearchParams } =
    useEntitySearchParamsInLocalStorage(entityNameKey);

  const { getSearchParams: getSortParams } =
    useEntitySearchParamsInLocalStorage(entityNameKey, undefined, 'sort');

  const selectedCount = useMemo(() => {
    return (selectedEntityItems && selectedEntityItems.length) || 0;
  }, [selectedEntityItems]);

  const hasFilters = useMemo(() => {
    const searchParams = getSearchParams();
    return !(Object.keys(searchParams).length === 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSearchParams, mutation]);

  const hasSort = useMemo(() => {
    const sortParams = getSortParams();
    return !(Object.keys(sortParams).length === 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSearchParams, mutation]);

  if (!isChoiceEntityToolListKey(entityNameKey)) return null;
  const entityTools = CHOICE_ENTITY_TOOL_LIST[entityNameKey];

  if (!entityTools) return null;

  const buttonDisabledStrategyMap = generateButtonDisabledStrategyMap({
    selectedCount,
    hasFilters,
    hasSort
  });

  return (
    <Toolbar
      aria-description='entity-tool-bar'
      variant='dense'
      sx={{
        '&>:nth-child(n)': {
          mr: '1.5%'
        },
        flexGrow: 2,
        justifyContent: 'flex-end'
      }}
      style={{ paddingLeft: '1%', paddingRight: '1%' }}
    >
      {entityTools &&
        Object.entries(entityTools).map((item) => {
          const [toolName, toolPopup] = item;
          if (!isEntityToolName(toolName)) return null;
          if (toolPopup.toolType === 'popup')
            return (
              <EntityToolPopupIconButton
                key={`${entityNameKey}-${toolName}`}
                toolPopup={toolPopup}
                getIcon={ChoiceEntityToolIcon[toolName]}
                disabled={buttonDisabledStrategyMap[toolName]}
                returnPopup={returnPopup}
              />
            );
        })}
    </Toolbar>
  );
};

export default EntityToolbar;
