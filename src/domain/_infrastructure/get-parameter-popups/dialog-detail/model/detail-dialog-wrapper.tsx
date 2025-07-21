/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/require-default-props */
import React, { FC, useCallback, useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '../../../../../store/use-app-dispatch';
import TPopupDetail from '../t-choice-popup-detail/t-popup-detail';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { TEntityDialogsFieldsKey } from '../../../../../redux-toolkit/entity-dialogs-fields-values/entity-dialogs-fields-values-actions';
import { useStylesDialog } from '../../../ui/style/style-dialog';
import { clearEntityDialogsFields } from '../../../../../redux-toolkit/entity-dialogs-fields-values/entity-dialogs-fields-values-slice';
import checkReturnParameters from '../../helpers/check-return-parameters-for-cascade-call-popups/check-return-parameters';
import { setMutationEntity } from '../../../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import TDetailDialog from '../t-choice-popup-detail/t-dialog-detail';
import PopupDialogHeader from '../../../popup-dialog-header/popup-dialog-header';
import EntityMutationAlertDialog from '../../entity-mutation-alert-dialog/entity-mutation-alert-dialog';
import { ConfirmDialog } from '../../../ui/confirm-dialog/confirm-dialog';
import useAppSelector from '../../../../../store/use-app-selector';
import { selectedEntityItemsSelector } from '../../../../../redux-toolkit/selected-entity-items/selected-entity-items-selectors';
import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';
import useConfirmDialogWrapper from '../../hooks/confirm-dialog-wrapper.hook';

type TDetailDialogWrapperProps = {
  ComponentDetail: TPopupDetail<IEntityMember>;
  returnUrl: string;
  entityNameKeyPopup: TEntityNameKeys;
  entityDialogsFieldsKey?: TEntityDialogsFieldsKey;
};

const DetailDialogWrapper: FC<TDetailDialogWrapperProps> = (props) => {
  const classes = useStylesDialog();

  const {
    ComponentDetail,
    returnUrl,
    entityNameKeyPopup,
    entityDialogsFieldsKey
  } = props;

  const [updateDto, setUpdateDto] = useState<string | null>(null);
  const [briefDescription, setBriefDescription] = useState('');

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
      appDispatch(clearEntityDialogsFields(entityDialogsFieldsKey));
    ComponentDetail.closeSuccess && ComponentDetail.closeSuccess();
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
      appDispatch(clearEntityDialogsFields(entityDialogsFieldsKey));
    checkReturnParameters.Pop();
  }, [appDispatch, entityDialogsFieldsKey]);

  const onUpdateDtoReady = useCallback<
    TDetailDialog<IEntityMember>['onUpdateDtoReady']
  >((dto = null) => {
    setUpdateDto(dto);
  }, []);

  if (
    !selectedEntityItems ||
    (selectedEntityItems && selectedEntityItems.length !== 1)
  ) {
    checkReturnParameters.Pop();
    navigate(returnUrl);
    return null;
  }

  const { id } = selectedEntityItems[0];

  return (
    <>
      <PopupDialogHeader
        title={`${
          (!ComponentDetail.title && '') || `${ComponentDetail.title}:`
        } ${briefDescription}`}
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
    </>
  );
};

export default DetailDialogWrapper;
