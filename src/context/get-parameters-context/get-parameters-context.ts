import { createContext } from 'react';
import { initGetParametersContext } from './init-get-parameters-context/init-get-parameters-context';
import { TGetParametersContext } from './type';

export const GetParametersContext = createContext<TGetParametersContext>(
  initGetParametersContext()
);
