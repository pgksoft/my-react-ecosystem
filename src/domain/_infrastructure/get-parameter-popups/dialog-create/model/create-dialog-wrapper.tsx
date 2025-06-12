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
import HeaderOfPopupDialog from '../../../header-of-popup-dialog/header-of-popup-dialog';
import { ButtonConfirm } from '../../../ui/button-confirm/button-confirm';
import EntityMutationAlertDialog from '../../entity-mutation-alert-dialog/entity-mutation-alert-dialog';
import { ConfirmDialog } from '../../../ui/confirm-dialog/confirm-dialog';
import checkReturnParameters from '../../helpers/check-return-parameters-for-cascade-call-popups/check-return-parameters';
import ICreateDialog from '../t-choice-popup-create/i-create-dialog';

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
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const onCloseError = useCallback(() => {
    setIsConfirm(false);
  }, []);

  const onSuccess = useCallback(() => {
    setIsConfirm(false);
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
    navigate,
    returnUrl
  ]);

  const onClose = useCallback(() => {
    entityDialogsFieldsKey &&
      appDispatch(clearEntityDialogsFields(entityDialogsFieldsKey));
    checkReturnParameters.Pop();
  }, [appDispatch, entityDialogsFieldsKey]);

  const onCreateDtoReady = useCallback<ICreateDialog['onCreateDtoReady']>(
    (dto = null) => {
      setCreateDto(dto);
    },
    []
  );

  return (
    <>
      <HeaderOfPopupDialog
        title={ComponentCreate.title}
        returnUrl={returnUrl}
        onClose={onClose}
      />
      <Box
        className={classes.rootPopupDialog}
        style={{ flexDirection: 'column' }}
      >
        <ComponentCreate.Component onCreateDtoReady={onCreateDtoReady} />
        {!isConfirm && (
          <ButtonConfirm
            disabled={!createDto}
            onClick={() => {
              setConfirmOpen(true);
            }}
          />
        )}
        {isConfirm && !!createDto && (
          <Box className={classes.boxFooter}>
            <EntityMutationAlertDialog
              url={ComponentCreate.url}
              dto={createDto}
              onCloseSuccess={onSuccess}
              onCloseError={onCloseError}
              titleSuccess={ComponentCreate.titleSuccess}
            />
          </Box>
        )}
        <ConfirmDialog
          open={confirmOpen}
          onClose={() => {
            setConfirmOpen(false);
          }}
          onConfirm={() => {
            setConfirmOpen(false);
            setIsConfirm(true);
          }}
          title={ComponentCreate.createConfirmTitle}
        />
      </Box>
    </>
  );
};

export default CreateDialogWrapper;
