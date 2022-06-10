import React, { FC, ReactNode, useState } from 'react';
import {
  GetParametersContext,
  initGetParametersContext
} from '../context/get-parameters-context';

type TGetParametersProviderProps = { children: ReactNode };

export const GetParametersProvider: FC<TGetParametersProviderProps> = ({
  children
}) => {
  const [routeParameters, setRouteParameters] = useState(
    initGetParametersContext().routeParameters
  );

  return (
    <GetParametersContext.Provider
      value={{ routeParameters, setRouteParameters }}
    >
      {children}
    </GetParametersContext.Provider>
  );
};
