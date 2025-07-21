/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/require-default-props */
import React, { FC, useCallback, useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '../../../../../store/use-app-dispatch';
import IPopupCreate from '../t-choice-popup-create/i-popup-create';
import { useStylesDialog } from '../../../ui/style/style-dialog';
import { TEntityDialogsFieldsKey } from '../../../../../redux-toolkit/entity-dialogs-fields-values/entity-dialogs-fields-values-actions';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { clearEntityDialogsFields } from '../../../../../redux-toolkit/entity-dialogs-fields-values/entity-dialogs-fields-values-slice';
import { setMutationEntity } from '../../../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import PopupDialogHeader from '../../../popup-dialog-header/popup-dialog-header';
import { ButtonConfirm } from '../../../ui/button-confirm/button-confirm';
import EntityMutationAlertDialog from '../../entity-mutation-alert-dialog/entity-mutation-alert-dialog';
import { ConfirmDialog } from '../../../ui/confirm-dialog/confirm-dialog';
import checkReturnParameters from '../../helpers/check-return-parameters-for-cascade-call-popups/check-return-parameters';
import ICreateDialog from '../t-choice-popup-create/i-create-dialog';
import useConfirmDialogWrapper from '../../hooks/confirm-dialog-wrapper.hook';

type TCreateDialogWrapperProps = {
  ComponentCreate: IPopupCreate;
  returnUrl: string;
  entityNameKeyPopup: TEntityNameKeys;
  entityDialogsFieldsKey?: TEntityDialogsFieldsKey;
};

const CreateDialogWrapper: FC<TCreateDialogWrapperProps> = (props) => {
  const classes = useStylesDialog();

  const {
    ComponentCreate,
    returnUrl,
    entityNameKeyPopup,
    entityDialogsFieldsKey
  } = props;

  const [createDto, setCreateDto] = useState<string | null>(null);

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

  const handleSuccess = useCallback(() => {
    handleClose();
    setCreateDto(null);
    entityDialogsFieldsKey &&
      appDispatch(clearEntityDialogsFields(entityDialogsFieldsKey));
    ComponentCreate.closeSuccess && ComponentCreate.closeSuccess();
    checkReturnParameters.Pop();
    navigate(returnUrl);
    appDispatch(setMutationEntity([entityNameKeyPopup, 'yes']));
  }, [
    ComponentCreate,
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

  const handleCreateDtoReady = useCallback<ICreateDialog['onCreateDtoReady']>(
    (dto = null) => {
      setCreateDto(dto);
    },
    []
  );

  return (
    <>
      <PopupDialogHeader
        title={ComponentCreate.title}
        returnUrl={returnUrl}
        onClose={handlePopupHeaderClose}
        isConfirm={false}
      />
      <Box
        className={classes.rootPopupDialog}
        style={{ flexDirection: 'column' }}
      >
        <ComponentCreate.Component onCreateDtoReady={handleCreateDtoReady} />
        {!isConfirm && (
          <ButtonConfirm disabled={!createDto} onClick={handleConfirm} />
        )}
        {isConfirm && !!createDto && (
          <Box className={classes.boxFooter}>
            <EntityMutationAlertDialog
              url={ComponentCreate.url}
              dto={createDto}
              onCloseSuccess={handleSuccess}
              onCloseError={handleClose}
              titleSuccess={ComponentCreate.titleSuccess}
            />
          </Box>
        )}
        <ConfirmDialog
          open={confirmOpen}
          onClose={handleCloseInConfirmDialog}
          onConfirm={handleConfirmInConfirmDialog}
          title={ComponentCreate.createConfirmTitle}
        />
      </Box>
    </>
  );
};

export default CreateDialogWrapper;
