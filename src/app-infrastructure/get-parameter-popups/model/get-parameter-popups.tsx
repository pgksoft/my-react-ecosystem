/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import useGetPopupState from '../hooks/get-popup-state.hook';
import choicePopupCreate from '../dialog-create/const/choice-popup-create';
import DialogPopupWrapper from './dialog-popup-wrapper';
import { TGetParameters } from '../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import WITHOUT_DIALOG_PARAMETERS from '../const/without-dialog-parameters';
import setCascadeReturnParameters from '../helpers/set-cascade-return-parameters';
import CreateDialogWrapper from '../dialog-create/model/create-dialog-wrapper';
import EntityListRefreshWrapper from '../entity-list-refresh/model/entity-list-refresh-wrapper';
import choicePopupDetail from '../dialog-detail/const/choice-popup-detail';
import DetailDialogWrapper from '../dialog-detail/model/detail-dialog-wrapper';
import choicePopupRemove from '../dialog-remove/const/choice-popup-remove';
import RemoveDialogWrapper from '../dialog-remove/model/remove-dialog-wrapper';
import EntityListFilterAllOffWrapper from '../entity-list-filter-all-off/model/entity-list-filter-all-off-wrapper';
import EntityListSortAllOffWrapper from '../entity-list-sort-all-off/model/entity-list-sort-all-off-wrapper';
import {
  getEntityNameKeyFromListRefreshRoutes,
  isListRefreshRoute
} from '../entity-list-refresh/const/list-refresh-routes';
import {
  getEntityNameKeyFromDialogCreateRoutes,
  isDialogCreateRouter
} from '../dialog-create/const/dialog-create-routes';
import {
  getEntityNameKeyFromDialogDetailRoutes,
  isDialogDetailRouter
} from '../dialog-detail/const/dialog-detail-routes';
import {
  getEntityNameKeyFromDialogRemoveRoutes,
  isDialogRemoveRouter
} from '../dialog-remove/const/dialog-remove-routes';
import {
  getEntityNameKeyFromListFilterAllOffRoutes,
  isListFilterAllOffRoute
} from '../entity-list-filter-all-off/const/list-filter-all-off-routes';
import {
  getEntityNameKeyFromListSortAllOffRoutes,
  isListSortAllOffRoute
} from '../entity-list-sort-all-off/const/list-sort-all-off';
import buildQueryString from '../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import { omitKeys } from '../../app-helpers/omit-keys';
import { ENTITY_SEARCH_PARAM_KEY_LIST_MAP } from '../entity-list-filter-all-off/const/entity-search-param-key-list-map';
import { ENTITY_SORT_PARAM_KEY_LIST_MAP } from '../entity-list-sort-all-off/const/entity-sort-param-key-list-map';
import {
  getEntityNameKeyFromPopupListRoutes,
  isPopupListRouter
} from '../dialog-list/const/popup-list-routes';
import choicePopupList from '../dialog-list/const/choice-popup-list';
import ListDialogWrapper from '../dialog-list/model/list-dialog-wrapper';

const GetParameterPopups = () => {
  const {
    pathname,
    query,
    mountedPopup: popup,
    isOpened,
    returnPopup
  } = useGetPopupState();

  // cascade return parameters
  const returnParameters: TGetParameters = {};
  const listSearchParameters: TGetParameters = {};

  if (popup) {
    setCascadeReturnParameters({
      returnParameters,
      listSearchParameters,
      returnPopup
    });
  }

  if (isDialogCreateRouter(popup)) {
    const ComponentCreate = choicePopupCreate[popup];
    const entityNameKeyPopup = getEntityNameKeyFromDialogCreateRoutes(popup);
    if (!entityNameKeyPopup || !ComponentCreate) return null;
    const returnUrl = buildQueryString(pathname, {
      ...omitKeys(query, WITHOUT_DIALOG_PARAMETERS),
      ...listSearchParameters,
      ...returnParameters
    });
    return (
      <DialogPopupWrapper
        open={isOpened}
        returnUrl={returnUrl}
        entityDialogsFieldsKey={popup}
        fullWidth={ComponentCreate.fullWidth}
        maxWidth={ComponentCreate.maxWidth}
      >
        <CreateDialogWrapper
          ComponentCreate={ComponentCreate}
          returnUrl={returnUrl}
          entityNameKeyPopup={entityNameKeyPopup}
          entityDialogsFieldsKey={popup}
        />
      </DialogPopupWrapper>
    );
  }

  if (isDialogDetailRouter(popup)) {
    const ComponentDetail = choicePopupDetail[popup];
    const entityNameKeyPopup = getEntityNameKeyFromDialogDetailRoutes(popup);
    if (!entityNameKeyPopup || !ComponentDetail) return null;
    const returnUrl = buildQueryString(pathname, {
      ...omitKeys(query, WITHOUT_DIALOG_PARAMETERS),
      ...listSearchParameters,
      ...returnParameters
    });
    return (
      <DialogPopupWrapper
        open={isOpened}
        returnUrl={returnUrl}
        entityDialogsFieldsKey={popup}
        fullWidth={ComponentDetail.fullWidth}
        maxWidth={ComponentDetail.maxWidth}
      >
        <DetailDialogWrapper
          ComponentDetail={ComponentDetail}
          returnUrl={returnUrl}
          entityNameKeyPopup={entityNameKeyPopup}
          entityDialogsFieldsKey={popup}
        />
      </DialogPopupWrapper>
    );
  }

  if (isDialogRemoveRouter(popup)) {
    const ComponentRemove = choicePopupRemove[popup];
    const entityNameKeyPopup = getEntityNameKeyFromDialogRemoveRoutes(popup);
    if (!entityNameKeyPopup || !ComponentRemove) return null;
    const returnUrl = buildQueryString(pathname, {
      ...omitKeys(query, WITHOUT_DIALOG_PARAMETERS),
      ...listSearchParameters,
      ...returnParameters
    });
    return (
      <DialogPopupWrapper
        open={isOpened}
        returnUrl={returnUrl}
        fullWidth={ComponentRemove.fullWidth}
        maxWidth={ComponentRemove.maxWidth}
      >
        <RemoveDialogWrapper
          ComponentRemove={ComponentRemove}
          returnUrl={returnUrl}
          entityNameKeyPopup={entityNameKeyPopup}
        />
      </DialogPopupWrapper>
    );
  }

  if (isListRefreshRoute(popup)) {
    const entityNameKeyRefresh = getEntityNameKeyFromListRefreshRoutes(popup);
    if (!entityNameKeyRefresh) return null;
    const returnUrl = buildQueryString(pathname, {
      ...omitKeys(query, WITHOUT_DIALOG_PARAMETERS),
      ...listSearchParameters,
      ...returnParameters
    });
    return (
      <EntityListRefreshWrapper
        returnUrl={returnUrl}
        entityNameKeyRefresh={entityNameKeyRefresh}
      />
    );
  }

  if (isListFilterAllOffRoute(popup)) {
    const entityNameKeyFilterAllOff =
      getEntityNameKeyFromListFilterAllOffRoutes(popup);
    if (!entityNameKeyFilterAllOff) return null;
    const returnUrl = buildQueryString(pathname, {
      ...omitKeys(query, [
        ...ENTITY_SEARCH_PARAM_KEY_LIST_MAP[entityNameKeyFilterAllOff],
        ...WITHOUT_DIALOG_PARAMETERS
      ]),
      ...returnParameters
    });

    return (
      <EntityListFilterAllOffWrapper
        returnUrl={returnUrl}
        entityNameKeyFilterAllOff={entityNameKeyFilterAllOff}
      />
    );
  }

  if (isListSortAllOffRoute(popup)) {
    const entityNameKeySortAllOff =
      getEntityNameKeyFromListSortAllOffRoutes(popup);
    if (!entityNameKeySortAllOff) return null;
    const returnUrl = buildQueryString(pathname, {
      ...omitKeys(query, [
        ...ENTITY_SORT_PARAM_KEY_LIST_MAP[entityNameKeySortAllOff],
        ...WITHOUT_DIALOG_PARAMETERS
      ]),
      ...returnParameters
    });
    return (
      <EntityListSortAllOffWrapper
        returnUrl={returnUrl}
        entityNameKeySortAllOff={entityNameKeySortAllOff}
      />
    );
  }

  if (isPopupListRouter(popup)) {
    const ComponentList = choicePopupList[popup];
    const entityNameKeyPopup = getEntityNameKeyFromPopupListRoutes(popup);
    if (!entityNameKeyPopup || !ComponentList) return null;
    const returnUrl = buildQueryString(pathname, {
      ...omitKeys(query, WITHOUT_DIALOG_PARAMETERS),
      ...listSearchParameters,
      ...returnParameters
    });
    return (
      <DialogPopupWrapper
        open={isOpened}
        returnUrl={returnUrl}
        fullWidth={ComponentList.fullWidth}
        maxWidth={ComponentList.maxWidth}
      >
        <ListDialogWrapper
          popupList={ComponentList}
          entityNameKeyPopup={entityNameKeyPopup}
          returnUrl={returnUrl}
          returnPopup={popup}
        />
      </DialogPopupWrapper>
    );
  }

  return null;
};

export default GetParameterPopups;
