import React, { FC } from 'react';
import { TElement } from '../route-context';

type TProps = { Value: TElement };

const TitleAsElementWrap: FC<TProps> = ({ Value }) => {
  return <Value />;
};

export default TitleAsElementWrap;
