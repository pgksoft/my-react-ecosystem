import React, { FC } from 'react';
import Cell from './cell';
import ZeroIcon from '../../../../../app-infrastructure/app-images/genius-space/zero.png';

const CellZero: FC = () => {
  return <Cell src={ZeroIcon} />;
};

export default CellZero;
