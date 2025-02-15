import { LINKS_AUTH_USER } from '../../../_route/links';
import { isLinkName } from '../../../_route/types/is-link-name';
import { TGetParametersContext, TRouteParameters } from '../type';

export const initGetParametersContext = (): TGetParametersContext => {
  let routeParameters: TRouteParameters = {};
  Object.keys(LINKS_AUTH_USER).forEach((key) => {
    if (isLinkName(key)) routeParameters[LINKS_AUTH_USER[key].url] = {};
  });
  Object.keys(routeParameters).forEach((key) => {
    const newRouteParameter = {};
    routeParameters = {
      ...routeParameters,
      [key]: newRouteParameter
    };
  });
  return {
    routeParameters,
    setRouteParameters: () => {}
  };
};
