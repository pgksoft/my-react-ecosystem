/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FC, useCallback } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';
import TPopupRemove from '../t-choice-popup-remove/t-popup-remove';
import { useStylesDialog } from '../../../ui/style/style-dialog';
import useAppDispatch from '../../../../../store/use-app-dispatch';
import useAppSelector from '../../../../../store/use-app-selector';
import { selectedEntityItemsSelector } from '../../../../../redux-toolkit/selected-entity-items/selected-entity-items-selectors';
import checkReturnParameters from '../../helpers/check-return-parameters-for-cascade-call-popups/check-return-parameters';
import { setMutationEntity } from '../../../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import PopupDialogHeader from '../../../popup-dialog-header/popup-dialog-header';
import { ButtonConfirm } from '../../../ui/button-confirm/button-confirm';
import { TITLES_OF_APP } from '../../../../../_const/titles-of-app';
import EntityMutationAlertDialog from '../../entity-mutation-alert-dialog/entity-mutation-alert-dialog';
import { ConfirmDialog } from '../../../ui/confirm-dialog/confirm-dialog';
import useConfirmDialogWrapper from '../../hooks/confirm-dialog-wrapper.hook';

type TRemoveDialogWrapper = {
  ComponentRemove: TPopupRemove<IEntityMember>;
  returnUrl: string;
  entityNameKeyPopup: TEntityNameKeys;
};

const RemoveDialogWrapper: FC<TRemoveDialogWrapper> = (props) => {
  const classes = useStylesDialog();

  const { ComponentRemove, returnUrl, entityNameKeyPopup } = props;

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
    ComponentRemove.closeAfterSuccess && ComponentRemove.closeAfterSuccess();
    checkReturnParameters.Pop();
    navigate(returnUrl);
    appDispatch(setMutationEntity([entityNameKeyPopup, 'yes']));
  }, [
    ComponentRemove,
    appDispatch,
    entityNameKeyPopup,
    handleClose,
    navigate,
    returnUrl
  ]);

  const handlePopupHeaderClose = useCallback(() => {
    checkReturnParameters.Pop();
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
        title={ComponentRemove.title}
        onClose={handlePopupHeaderClose}
        returnUrl={returnUrl}
        isConfirm={false}
        isResetAvailable={false}
        background='alarm'
      />
      <Box
        className={classes.rootPopupDialog}
        style={{ flexDirection: 'column' }}
      >
        <ComponentRemove.Component entity={selectedEntityItems[0]} />
        {!isConfirm && (
          <ButtonConfirm
            disabled={false}
            title={TITLES_OF_APP.confirmRemove}
            onClick={handleConfirm}
          />
        )}
        {isConfirm && (
          <Box className={classes.boxFooter}>
            <EntityMutationAlertDialog
              url={`${ComponentRemove.apiUrl}/${id}`}
              dto='{}'
              method='delete'
              onCloseSuccess={handleSuccess}
              onCloseError={handleClose}
              titleSuccess={`${ComponentRemove.successTitle}`}
            />
          </Box>
        )}
        <ConfirmDialog
          open={confirmOpen}
          onClose={handleCloseInConfirmDialog}
          onConfirm={handleConfirmInConfirmDialog}
          title={ComponentRemove.removeConfirmTitle}
        />
      </Box>
    </>
  );
};

export default RemoveDialogWrapper;
