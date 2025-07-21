import React, { FC } from 'react';
import clsx from 'clsx';
import { IconButton, Theme } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import { makeStyles, createStyles } from '@mui/styles';
import { COLORS } from '../../../../../../../_const/colors';
import SvgIconWrapper from '../../../../../ui/svg-icon-wrapper/svg-icon-wrapper';
import { ReactComponent as SortSvgIcon } from '../../../../../../../_images/sort.svg';
import { ReactComponent as SortAscendingSvgIcon } from '../../../../../../../_images/sort-ascending.svg';
import { ReactComponent as SortDescendingSvgIcon } from '../../../../../../../_images/sort-descending.svg';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: '32px',
      aspectRatio: '1/1',
      backgroundColor: '#fff'
    },
    icon: {
      position: 'absolute',
      opacity: '0',
      color: COLORS.lightGray
    },
    iconDirection: {
      transform: 'rotate3d(1,0,0,180deg)',
      color: COLORS.primaryMain,
      transition: '0.5s ease-out'
    },
    activeIcon: {
      opacity: '1'
    },
    activeIconDirection: {
      opacity: '1',
      transform: 'rotate3d(1,0,0,0deg)'
    }
  });
});

export type TOrder = 'asc' | 'desc' | '';

type TCustomTableSortLabelProps = {
  direction: TOrder;
  onClick: () => void;
};

const CustomSortLabel: FC<TCustomTableSortLabelProps> = ({
  direction,
  onClick
}) => {
  const classes = useStyles();

  return (
    <IconButton onClick={onClick} className={classes.root} size='medium'>
      <SvgIconWrapper
        Icon={SortSvgIcon as SvgIconComponent}
        className={clsx({
          [classes.icon]: true,
          [classes.activeIcon]: !direction
        })}
      />
      <SvgIconWrapper
        Icon={SortAscendingSvgIcon as SvgIconComponent}
        className={clsx({
          [classes.icon]: true,
          [classes.iconDirection]: true,
          [classes.activeIconDirection]: direction === 'asc'
        })}
      />
      <SvgIconWrapper
        Icon={SortDescendingSvgIcon as SvgIconComponent}
        className={clsx({
          [classes.icon]: true,
          [classes.iconDirection]: true,
          [classes.activeIconDirection]: direction === 'desc'
        })}
      />
    </IconButton>
  );
};

export default CustomSortLabel;
