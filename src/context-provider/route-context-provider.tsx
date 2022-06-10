import React, { FC, ReactNode, useState } from 'react';
import { initRouteContext, RouteContext } from '../context/route-context';

type TRouteContextProviderProps = { children: ReactNode };

export const RouteContextProvider: FC<TRouteContextProviderProps> = ({
  children
}) => {
  const [activeMainLink, setActiveMainLink] = useState(
    initRouteContext.activeMainLink
  );
  const [activeLink, setActiveLink] = useState(initRouteContext.activeMainLink);

  return (
    <RouteContext.Provider
      value={{ activeMainLink, activeLink, setActiveMainLink, setActiveLink }}
    >
      {children}
    </RouteContext.Provider>
  );
};
