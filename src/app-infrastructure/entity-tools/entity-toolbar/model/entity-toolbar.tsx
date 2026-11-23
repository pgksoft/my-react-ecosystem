import React, { FC, useMemo } from 'react';
import { Toolbar } from '@mui/material';
import CHOICE_ENTITY_TOOL_LIST, {
  isChoiceEntityToolListKey
} from '../const/choice-entity-tool-list';
import EntityToolPopupIconButton from './entity-tool-popup-icon-button';
import ChoiceEntityToolIcon from '../const/choice-entity-tool-icon';
import {
  isEntityToolName,
  popupCheckQueryToolName
} from '../../entity-tools-types/t-entity-tool-names';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useAppSelector from '../../../../store/use-app-selector';
import { selectedEntityItemsSelector } from '../../../../redux-toolkit/selected-entity-items/selected-entity-items-selectors';
import { generateButtonDisabledStrategyMap } from '../helpers/generate-button-disabled-strategy-map';
import useEntitySearchParamsInLocalStorage, {
  type TEntityPlacement
} from '../../../app-hook-helpers/entity-search-params-in-local-storage.hook';
import { mutationEntitySelector } from '../../../../redux-toolkit/mutation-entities/mutation-entities-selectors';
import type { TPopupListRoute } from '../../../get-parameter-popups';
import { ModalCommandButtonWrapper } from '../../../modal-commands/model/modal-command-button-wrapper';
import getNestedModalEntityCommand from '../../../modal-commands/get-nested-modal-entity-command';
import useGetPathAndQuery from '../../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import buildQueryString from '../../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import { omitKeys } from '../../../app-helpers/omit-keys';
import { ENTITY_SEARCH_PARAM_KEY_LIST_MAP } from '../../../get-parameter-popups/entity-list-filter-all-off/const/entity-search-param-key-list-map';
import { ENTITY_SORT_PARAM_KEY_LIST_MAP } from '../../../get-parameter-popups/entity-list-sort-all-off/const/entity-sort-param-key-list-map';

type TEntityToolbarProps = {
  entityNameKey: TEntityNameKeys;
  returnPopup?: TPopupListRoute;
  entityPlacement?: TEntityPlacement;
};

const EntityToolbar: FC<TEntityToolbarProps> = ({
  entityNameKey,
  returnPopup,
  entityPlacement = 'page'
}) => {
  const { pathname, query } = useGetPathAndQuery();

  const selectedEntityItems = useAppSelector(selectedEntityItemsSelector)[
    entityNameKey
  ];
  const mutation = useAppSelector(mutationEntitySelector)[entityNameKey];

  const { getSearchParams } = useEntitySearchParamsInLocalStorage({
    entityNameKey,
    entityPlacement
  });

  const { getSearchParams: getSortParams } =
    useEntitySearchParamsInLocalStorage({
      entityNameKey,
      kindGetParams: 'sort',
      entityPlacement
    });

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

  const clearedQuery = useMemo(() => {
    return omitKeys(query, [
      ...ENTITY_SEARCH_PARAM_KEY_LIST_MAP[entityNameKey],
      ...ENTITY_SORT_PARAM_KEY_LIST_MAP[entityNameKey]
    ]);
  }, [entityNameKey, query]);

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
          if (toolPopup.toolType === 'popup') {
            const checkedQuery =
              (popupCheckQueryToolName.includes(toolName) && clearedQuery) ||
              query;
            const { popup, title } = toolPopup;
            const url = buildQueryString(pathname, {
              ...checkedQuery,
              popup,
              returnPopup
            });
            return (
              <EntityToolPopupIconButton
                key={`${entityNameKey}-${toolName}`}
                title={title}
                url={url}
                getIcon={ChoiceEntityToolIcon[toolName]}
                disabled={buttonDisabledStrategyMap[toolName]}
              />
            );
          }
          if (toolPopup.toolType === 'modal-command') {
            const { title, entityDialogsFieldsKey } = toolPopup.description;
            const uniqueName = `${entityNameKey}-${toolName}`;
            return (
              <ModalCommandButtonWrapper
                kind='icon-button'
                key={uniqueName}
                baseButtonProps={{
                  title,
                  icon: ChoiceEntityToolIcon[toolName](),
                  disabled: buttonDisabledStrategyMap[toolName],
                  iconColor: 'inherit'
                }}
                maxWidth={toolPopup.description.maxWidth}
                fullWidth={toolPopup.description.fullWidth}
                NestedComponent={getNestedModalEntityCommand({
                  Command: toolPopup.description,
                  componentName: uniqueName,
                  entityNameKey,
                  entityDialogsFieldsKey
                })}
              />
            );
          }
        })}
    </Toolbar>
  );
};

export default EntityToolbar;
