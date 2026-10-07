import React, { useMemo, type FC } from 'react';
import type { TPopupListRoute } from '../../../get-parameter-popups';
import type TCascadeParams from '../../../app-types/t-cascade-params';
import { IconButton, Tooltip } from '@mui/material';
import useGetPathAndQuery from '../../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import { omitKeys } from '../../../app-helpers/omit-keys';
import WITHOUT_DIALOG_PARAMETERS from '../../../get-parameter-popups/const/without-dialog-parameters';
import buildQueryString from '../../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import { ReactComponent as TableSvgIcon } from '../../../app-images/table.svg';
import SvgIconWrapper from '../../svg-icon-wrapper/svg-icon-wrapper';
import {
  sxIconButton,
  sxShadowIconButton
} from '../../style/style-icon-button';
import { Link } from 'react-router-dom';

type TListMenuItemProps = {
  popup: TPopupListRoute;
  cascadeParams: TCascadeParams;
  title?: string;
};

export const ListMenuItem: FC<TListMenuItemProps> = (props) => {
  const {
    popup,
    cascadeParams: { returnPopup },
    title = ''
  } = props;

  const { pathname, query } = useGetPathAndQuery();

  const url = useMemo(() => {
    return buildQueryString(pathname, {
      ...omitKeys(query, WITHOUT_DIALOG_PARAMETERS),
      popup,
      returnPopup
    });
  }, [pathname, popup, query, returnPopup]);

  return (
    <Tooltip
      title={title}
      placement='top'
      enterDelay={300}
      enterNextDelay={1000}
    >
      <IconButton
        sx={{
          ...sxIconButton,
          ...sxShadowIconButton
        }}
        size='small'
        component={Link}
        to={url}
      >
        <SvgIconWrapper Icon={TableSvgIcon} />
      </IconButton>
    </Tooltip>
  );
};
