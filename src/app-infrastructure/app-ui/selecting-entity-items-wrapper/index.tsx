import React, { useMemo, type FC, type ReactNode } from 'react';
import type TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type TCascadeParams from '../../app-types/t-cascade-params';
import { createStyles, makeStyles } from '@mui/styles';
import { Box, type Theme } from '@mui/material';
import { ListMenuItem } from './entourage-helpers/list-menu-item';
import { LIST_POPUP_LIST_ROUTES } from '../../get-parameter-popups';
import choicePopupList from '../../get-parameter-popups/dialog-list/const/choice-popup-list';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      width: '100%',
      flexWrap: 'nowrap',
      justifyContent: 'space-between'
    },
    childrenBox: {
      width: '94%',
      alignItems: 'center'
    },
    menuBox: {
      display: 'flex',
      alignItems: 'flex-start',
      width: '5%',
      paddingTop: '24px'
    }
  });
});

type TSelectingEntityItemsWrapperProps = {
  entityNameKey: TEntityNameKeys;
  cascadeParams: TCascadeParams;
  children: ReactNode;
};

export const SelectingEntityItemsWrapper: FC<
  TSelectingEntityItemsWrapperProps
> = (props) => {
  const { entityNameKey, cascadeParams, children } = props;

  const classes = useStyles();

  const popup = useMemo(() => {
    return LIST_POPUP_LIST_ROUTES[entityNameKey];
  }, [entityNameKey]);

  return (
    <Box className={classes.root}>
      <Box className={classes.childrenBox}>{children}</Box>
      <Box
        className={classes.menuBox}
        data-name='selecting-entity-items-wrapper-menu-box'
      >
        <ListMenuItem
          popup={popup}
          cascadeParams={cascadeParams}
          title={choicePopupList[popup]?.title}
        />
      </Box>
    </Box>
  );
};
