/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import useGetPopupState from '../hooks/get-popup-state.hook';
import choicePopupCreate from '../dialog-create/const/choice-popup-create';
import isDialogCreateRouter from '../dialog-create/helpers/is-dialog-create-router';
import getEntityNameKeyFromDialogCreateRoutes from '../dialog-create/helpers/get-entity-name-key-from-dialog-create-routes';
import DialogPopupWrapper from './dialog-popup-wrapper';
import { TGetParameters } from '../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import useBuildUrl from '../../../../_hooks/get-parameter.hooks/build-url.hook';
import WITHOUT_DIALOG_PARAMETERS from '../const/without-dialog-parameters';
import setCascadeReturnParameters from '../helpers/set-cascade-return-parameters';
import CreateDialogWrapper from '../dialog-create/model/create-dialog-wrapper';
import isListRefreshRoute from '../entity-list-refresh/helpers/is-list-refresh-route';
import getEntityNameKeyFromListRefreshRoutes from '../entity-list-refresh/helpers/get-entity-name-key-from-list-refresh-routes';
import EntityListRefreshWrapper from '../entity-list-refresh/model/entity-list-refresh-wrapper';
import isDialogDetailRouter from '../dialog-detail/helpers/is-dialog-detail-router';
import choicePopupDetail from '../dialog-detail/const/choice-popup-detail';
import getEntityNameKeyFromDialogDetailRoutes from '../dialog-detail/helpers/get-entity-name-key-from-dialog-detail-routes';
import DetailDialogWrapper from '../dialog-detail/model/detail-dialog-wrapper';
import isDialogRemoveRouter from '../dialog-remove/helpers/is-dialog-remove-router';
import choicePopupRemove from '../dialog-remove/const/choice-popup-remove';
import getEntityNameKeyFromDialogRemoveRoutes from '../dialog-remove/helpers/get-entity-name-key-from-dialog-remove-routes';
import RemoveDialogWrapper from '../dialog-remove/model/remove-dialog-wrapper';

const GetParameterPopups = () => {
  const { mountedPopup, isOpened, returnPopup } = useGetPopupState();

  const popup = (mountedPopup && mountedPopup) || '';

  // cascade return parameters
  const returnParameters: TGetParameters = {};
  const listSearchParameters: TGetParameters = {};

  popup &&
    setCascadeReturnParameters({
      returnParameters,
      listSearchParameters,
      returnPopup
    });

  // const urlOnlyReturnParameters = useBuildUrl({
  //   getParameters: returnParameters,
  //   whatQueryIs: 'only getParameters'
  // });

  const urlWithListSearchParameters = useBuildUrl({
    getParameters: { ...listSearchParameters, ...returnParameters },
    withoutParameters: WITHOUT_DIALOG_PARAMETERS
  });

  if (isDialogCreateRouter(popup)) {
    const ComponentCreate = choicePopupCreate[popup];
    const entityNameKeyPopup = getEntityNameKeyFromDialogCreateRoutes(popup);
    if (!entityNameKeyPopup || !ComponentCreate) return null;
    return (
      <DialogPopupWrapper
        open={isOpened}
        returnUrl={urlWithListSearchParameters}
        entityDialogsFieldsKey={popup}
        fullWidth={ComponentCreate.fullWidth}
      >
        <CreateDialogWrapper
          ComponentCreate={ComponentCreate}
          returnUrl={urlWithListSearchParameters}
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
    return (
      <DialogPopupWrapper
        open={isOpened}
        returnUrl={urlWithListSearchParameters}
        entityDialogsFieldsKey={popup}
        fullWidth={ComponentDetail.fullWidth}
      >
        <DetailDialogWrapper
          ComponentDetail={ComponentDetail}
          returnUrl={urlWithListSearchParameters}
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
    return (
      <DialogPopupWrapper
        open={isOpened}
        returnUrl={urlWithListSearchParameters}
        fullWidth={ComponentRemove.fullWidth}
        maxWidth={ComponentRemove.maxWidth}
      >
        <RemoveDialogWrapper
          ComponentRemove={ComponentRemove}
          returnUrl={urlWithListSearchParameters}
          entityNameKeyPopup={entityNameKeyPopup}
        />
      </DialogPopupWrapper>
    );
  }

  if (isListRefreshRoute(popup)) {
    const entityNameKeyRefresh = getEntityNameKeyFromListRefreshRoutes(popup);
    if (!entityNameKeyRefresh) return null;
    return (
      <EntityListRefreshWrapper
        returnUrl={urlWithListSearchParameters}
        entityNameKeyRefresh={entityNameKeyRefresh}
      />
    );
  }

  return null;
};

export default GetParameterPopups;
