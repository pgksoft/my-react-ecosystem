import React, { useCallback, type FC } from 'react';
import type TPopupList from '../t-choice-popup-list/t-popup-list';
import type TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import checkReturnParameters from '../../helpers/check-return-parameters-for-cascade-call-popups/check-return-parameters';
import { Box, Toolbar } from '@mui/material';
import PopupDialogHeader from '../../../app-ui/popup-dialog-header/popup-dialog-header';
import EntityToolbar from '../../../entity-tools/entity-toolbar/model/entity-toolbar';
import type { TPopupListRoute } from '../const/popup-list-routes';
import useResolveEntityGetRequestParams from '../../../app-hook-helpers/resolve-entity-get-request-params.hook.ts';

type TListDialogWrapper = {
  popupList: TPopupList;
  returnUrl: string;
  entityNameKeyPopup: TEntityNameKeys;
  returnPopup: TPopupListRoute;
};

const ListDialogWrapper: FC<TListDialogWrapper> = ({
  popupList,
  returnUrl,
  entityNameKeyPopup,
  returnPopup
}) => {
  const { Component: EntityList, title } = popupList;

  const { isResolved } = useResolveEntityGetRequestParams({
    entityNameKey: entityNameKeyPopup,
    entityPlacement: 'popup'
  });

  const handlePopupHeaderClose = useCallback(() => {
    checkReturnParameters.Pop();
  }, []);

  if (!isResolved) return null;

  return (
    <Box
      component={'section'}
      aria-description='list-dialog-wrapper'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
        minHeight: 0,
        minWidth: 0
      }}
    >
      <PopupDialogHeader
        isConfirm={false}
        isResetAvailable={false}
        title={title}
        returnUrl={returnUrl}
        onClose={handlePopupHeaderClose}
      />
      <Toolbar>
        <EntityToolbar
          entityNameKey={entityNameKeyPopup}
          returnPopup={returnPopup}
          entityPlacement='popup'
        />
      </Toolbar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0 8px 8px 8px',
          minHeight: 0,
          minWidth: 0
        }}
      >
        <EntityList entityPlacement='popup' />
      </Box>
    </Box>
  );
};

export default ListDialogWrapper;
