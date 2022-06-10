import { TGetParameters } from '../../_hooks/get-parameter.hook';

export type TRouteParameters = Record<string, TGetParameters>;

export type TGetParametersContext = {
  routeParameters: TRouteParameters;
  setRouteParameters: (routeParameters: TRouteParameters) => void;
};
