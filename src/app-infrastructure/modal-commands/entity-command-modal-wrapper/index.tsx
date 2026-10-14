import React, { useCallback, useState, type FC } from 'react';
import type { IEntityMember } from '../../api-platform/app-entities/entity-member/entity-member';
import type TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TFormDtoKey } from '../../app-helpers/form-dto-serialization';
import type { TModalCommandDescription } from '../t-modal-command-dialog/t-modal-command-dialog';
import { useStylesDialog } from '../../app-ui/style/style-dialog';
import type TUnknownRecord from '../../app-types/t-unknown-record';
import useConfirmDialogWrapper from '../../get-parameter-popups/hooks/confirm-dialog-wrapper.hook';
import useAppDispatch from '../../../store/use-app-dispatch';
import useAppSelector from '../../../store/use-app-selector';
import { selectedEntityItemsSelector } from '../../../redux-toolkit/selected-entity-items/selected-entity-items-selectors';
import formDtoSerialization from '../../app-helpers/form-dto-serialization';
import { setMutationEntity } from '../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import type { TModalCommandDetailDialog } from '../t-modal-command-dialog/t-modal-command-detail-dialog';
import { Box } from '@mui/material';
import { HeaderOfModalDialog } from '../ui/header-of-modal-dialog';
import EntityMutationAlertDialog from '../../get-parameter-popups/entity-mutation-alert-dialog/entity-mutation-alert-dialog';
import resolveBaseUrl from '../../api-platform/app-entities/resolve-base-url';
import { ConfirmDialog } from '../../app-ui/confirm-dialog/confirm-dialog';

export type TEntityCommandModalWrapperProps = {
  Command: TModalCommandDescription<IEntityMember>;
  entityNameKey: TEntityNameKeys;
  entityDialogsFieldsKey: TFormDtoKey;
  onClose: () => void;
};

const EntityCommandModalWrapper: FC<TEntityCommandModalWrapperProps> = ({
  Command,
  entityNameKey,
  entityDialogsFieldsKey,
  onClose
}) => {
  const classes = useStylesDialog();

  const [updateDto, setUpdateDto] = useState<TUnknownRecord | FormData | null>(
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

  const selectedEntityItems = useAppSelector(selectedEntityItemsSelector)[
    entityNameKey
  ];

  const handleSuccess = useCallback(() => {
    handleClose();
    setUpdateDto(null);
    formDtoSerialization.Clear(entityDialogsFieldsKey);
    appDispatch(setMutationEntity([entityNameKey, 'yes']));
    onClose();
  }, [
    appDispatch,
    entityDialogsFieldsKey,
    entityNameKey,
    handleClose,
    onClose
  ]);

  const handleHeaderModalDialogClose = useCallback(() => {
    formDtoSerialization.Clear(entityDialogsFieldsKey);
    onClose();
  }, [entityDialogsFieldsKey, onClose]);

  const onDtoReady = useCallback<
    TModalCommandDetailDialog<IEntityMember>['onDtoReady']
  >((dto = null) => {
    setUpdateDto((!!dto && dto) || null);
  }, []);

  if (
    Command.activationMethod === 'one-item' &&
    (!selectedEntityItems || selectedEntityItems?.length !== 1)
  ) {
    return null;
  }

  const { id } = (selectedEntityItems?.length === 1 &&
    selectedEntityItems[0]) || { id: null };

  return (
    <Box
      aria-description='entity-command-modal-wrapper'
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <HeaderOfModalDialog
        title={Command.title}
        onClose={handleHeaderModalDialogClose}
        isResetAvailable
        isConfirm
        disabled={!updateDto}
        onConfirm={handleConfirm}
      />
      <Box
        className={classes.rootPopupDialog}
        style={{ flexDirection: 'column' }}
      >
        <Command.Component
          entity={selectedEntityItems && selectedEntityItems[0]}
          onDtoReady={onDtoReady}
        />
        {isConfirm && updateDto && (
          <Box className={classes.boxFooter}>
            <EntityMutationAlertDialog
              url={`${Command.apiUrl}/${id}`}
              baseURL={resolveBaseUrl(entityNameKey)}
              dto={updateDto}
              method='put'
              onCloseSuccess={handleSuccess}
              onCloseError={handleClose}
              titleSuccess={`${Command.titleSuccess}`}
            />
          </Box>
        )}
        <ConfirmDialog
          open={confirmOpen}
          onClose={handleCloseInConfirmDialog}
          onConfirm={handleConfirmInConfirmDialog}
          title={Command.commandConfirmTitle}
        />
      </Box>
    </Box>
  );
};

export default EntityCommandModalWrapper;
