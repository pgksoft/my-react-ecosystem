/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FC, useCallback, useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '../../../../store/use-app-dispatch';
import IPopupCreate from '../t-choice-popup-create/i-popup-create';
import { useStylesDialog } from '../../../app-ui/style/style-dialog';
import { TFormDtoKey } from '../../../../redux-toolkit/form-dto-serialization/form-dto-serialization-actions';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { setMutationEntity } from '../../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import PopupDialogHeader from '../../../app-ui/popup-dialog-header/popup-dialog-header';
import { ButtonConfirm } from '../../../app-ui/button-confirm/button-confirm';
import EntityMutationAlertDialog from '../../entity-mutation-alert-dialog/entity-mutation-alert-dialog';
import { ConfirmDialog } from '../../../app-ui/confirm-dialog/confirm-dialog';
import checkReturnParameters from '../../helpers/check-return-parameters-for-cascade-call-popups/check-return-parameters';
import ICreateDialog from '../t-choice-popup-create/i-create-dialog';
import useConfirmDialogWrapper from '../../hooks/confirm-dialog-wrapper.hook';
import resolveBaseUrl from '../../../api-platform/app-entities/resolve-base-url';
import type TUnknownRecord from '../../../app-types/t-unknown-record';
import formDtoSerialization from '../../../app-helpers/form-dto-serialization/';

type TCreateDialogWrapperProps = {
  ComponentCreate: IPopupCreate;
  returnUrl: string;
  entityNameKeyPopup: TEntityNameKeys;
  entityDialogsFieldsKey?: TFormDtoKey;
};

const CreateDialogWrapper: FC<TCreateDialogWrapperProps> = (props) => {
  const classes = useStylesDialog();

  const {
    ComponentCreate,
    returnUrl,
    entityNameKeyPopup,
    entityDialogsFieldsKey
  } = props;

  const [createDto, setCreateDto] = useState<TUnknownRecord | FormData | null>(
    null
  );

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
      formDtoSerialization.Clear(entityDialogsFieldsKey);
    ComponentCreate.closeSuccess?.();
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
      formDtoSerialization.Clear(entityDialogsFieldsKey);
    checkReturnParameters.Pop();
  }, [entityDialogsFieldsKey]);

  const handleCreateDtoReady = useCallback<ICreateDialog['onCreateDtoReady']>(
    (dto = null) => {
      setCreateDto((!!dto && dto) || null);
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
              baseURL={resolveBaseUrl(entityNameKeyPopup)}
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
