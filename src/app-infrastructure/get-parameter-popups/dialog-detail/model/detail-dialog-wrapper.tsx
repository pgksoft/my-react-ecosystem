/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/require-default-props */
import React, { FC, useCallback, useState, type ReactNode } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '../../../../store/use-app-dispatch';
import TPopupDetail from '../t-choice-popup-detail/t-popup-detail';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { TFormDtoKey } from '../../../../redux-toolkit/form-dto-serialization/form-dto-serialization-actions';
import { useStylesDialog } from '../../../app-ui/style/style-dialog';
import checkReturnParameters from '../../helpers/check-return-parameters-for-cascade-call-popups/check-return-parameters';
import { setMutationEntity } from '../../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import TDetailDialog from '../t-choice-popup-detail/t-dialog-detail';
import PopupDialogHeader from '../../../app-ui/popup-dialog-header/popup-dialog-header';
import EntityMutationAlertDialog from '../../entity-mutation-alert-dialog/entity-mutation-alert-dialog';
import { ConfirmDialog } from '../../../app-ui/confirm-dialog/confirm-dialog';
import useAppSelector from '../../../../store/use-app-selector';
import { selectedEntityItemsSelector } from '../../../../redux-toolkit/selected-entity-items/selected-entity-items-selectors';
import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';
import useConfirmDialogWrapper from '../../hooks/confirm-dialog-wrapper.hook';
import resolveBaseUrl from '../../../api-platform/app-entities/resolve-base-url';
import type TUnknownRecord from '../../../app-types/t-unknown-record';
import formDtoSerialization from '../../../app-helpers/form-dto-serialization/';

type TDetailDialogWrapperProps = {
  ComponentDetail: TPopupDetail<IEntityMember>;
  returnUrl: string;
  entityNameKeyPopup: TEntityNameKeys;
  entityDialogsFieldsKey?: TFormDtoKey;
};

const DetailDialogWrapper: FC<TDetailDialogWrapperProps> = (props) => {
  const classes = useStylesDialog();

  const {
    ComponentDetail,
    returnUrl,
    entityNameKeyPopup,
    entityDialogsFieldsKey
  } = props;

  const [updateDto, setUpdateDto] = useState<TUnknownRecord | FormData | null>(
    null
  );
  const [briefDescription, setBriefDescription] = useState<ReactNode>('');

  const {
    confirmOpen,
    isConfirm,
    handleClose,
    handleConfirm,
    handleCloseInConfirmDialog,
    handleConfirmInConfirmDialog
  } = useConfirmDialogWrapper();

  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const selectedEntityItems = useAppSelector(selectedEntityItemsSelector)[
    entityNameKeyPopup
  ];

  const handleSuccess = useCallback(() => {
    handleClose();
    setUpdateDto(null);
    entityDialogsFieldsKey &&
      formDtoSerialization.Clear(entityDialogsFieldsKey);
    ComponentDetail.closeSuccess?.();
    checkReturnParameters.Pop();
    navigate(returnUrl);
    appDispatch(setMutationEntity([entityNameKeyPopup, 'yes']));
  }, [
    ComponentDetail,
    appDispatch,
    entityDialogsFieldsKey,
    entityNameKeyPopup,
    handleClose,
    navigate,
    returnUrl
  ]);

  const handlePopupHeaderClose = useCallback(() => {
    entityDialogsFieldsKey &&
      formDtoSerialization.Clear(entityDialogsFieldsKey);
    checkReturnParameters.Pop();
  }, [entityDialogsFieldsKey]);

  const onUpdateDtoReady = useCallback<
    TDetailDialog<IEntityMember>['onUpdateDtoReady']
  >((dto = null) => {
    setUpdateDto((!!dto && dto) || null);
  }, []);

  if (!selectedEntityItems || selectedEntityItems?.length !== 1) {
    checkReturnParameters.Pop();
    navigate(returnUrl);
    return null;
  }

  const { id } = selectedEntityItems[0];

  return (
    <Box
      aria-description='detail-dialog-wrapper'
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <PopupDialogHeader
        title={`${ComponentDetail.title}: `}
        briefDescription={briefDescription}
        onClose={handlePopupHeaderClose}
        returnUrl={returnUrl}
        isConfirm
        disabled={!updateDto}
        onConfirm={handleConfirm}
      />
      <Box
        className={classes.rootPopupDialog}
        style={{ flexDirection: 'column' }}
      >
        <ComponentDetail.Component
          entity={selectedEntityItems[0]}
          onUpdateDtoReady={onUpdateDtoReady}
          getBriefDescription={setBriefDescription}
        />
        {isConfirm && updateDto && (
          <Box className={classes.boxFooter}>
            <EntityMutationAlertDialog
              url={`${ComponentDetail.apiUrl}/${id}`}
              baseURL={resolveBaseUrl(entityNameKeyPopup)}
              dto={updateDto}
              method='put'
              onCloseSuccess={handleSuccess}
              onCloseError={handleClose}
              titleSuccess={`${ComponentDetail.titleSuccess}`}
            />
          </Box>
        )}
        <ConfirmDialog
          open={confirmOpen}
          onClose={handleCloseInConfirmDialog}
          onConfirm={handleConfirmInConfirmDialog}
          title={ComponentDetail.updateConfirmTitle}
        />
      </Box>
    </Box>
  );
};

export default DetailDialogWrapper;
