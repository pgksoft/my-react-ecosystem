import React from 'react';
import useGetPopupState from '../hooks/get-popup-state.hook';
import choicePopupCreate from '../dialog-create/const/choice-popup-create';
import isDialogCreateRouter from '../dialog-create/helpers/is-dialog-create-router';
import getEntityNameKeyFromDialogCreateRoutes from '../dialog-create/helpers/get-entity-name-key-from-dialog-create-routes';
import DialogPopupWrapper from './dialog-popup-wrapper';
import { TGetParameters } from '../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import useBuildUrlWithoutSearchParameters from '../../../../_hooks/get-parameter.hooks/build-url-without-search-parameters.hook';
import useBuildUrl from '../../../../_hooks/get-parameter.hooks/build-url.hook';
import WITHOUT_DIALOG_PARAMETERS from '../const/without-dialog-parameters';
import setCascadeReturnParameters from '../helpers/set-cascade-return-parameters';
import CreateDialogWrapper from '../dialog-create/model/create-dialog-wrapper';
import isListRefreshRoute from '../entity-list-refresh/helpers/is-list-refresh-route';
import getEntityNameKeyFromListRefreshRoutes from '../entity-list-refresh/helpers/get-entity-name-key-from-list-refresh-routes';
import EntityListRefreshWrapper from '../entity-list-refresh/model/entity-list-refresh-wrapper';

const GetParameterPopups = () => {
  const { mountedPopup, isOpened, id, returnPopup, returnId } =
    useGetPopupState();

  const popup = (mountedPopup && mountedPopup) || '';

  // cascade return parameters
  const returnParameters: TGetParameters = {};
  const listSearchParameters: TGetParameters = {};

  popup &&
    setCascadeReturnParameters({
      returnParameters,
      listSearchParameters,
      returnPopup,
      returnId
    });

  const urlWithoutSearchParameters =
    useBuildUrlWithoutSearchParameters(returnParameters);

  const urlWithListSearchParameters = useBuildUrl(
    { ...listSearchParameters, ...returnParameters },
    WITHOUT_DIALOG_PARAMETERS
  );

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
