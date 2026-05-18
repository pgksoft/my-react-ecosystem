import type TEntityNameKeys from '../app-entities-types/t-entity-key-names';
import { getBaseUrl } from './map-base-url-from-env';
import getBaseUrlKey from './map-base-url-key-from-entity-name-key';

const resolveBaseUrl = (entityNameKey: TEntityNameKeys): string => {
  return getBaseUrl(getBaseUrlKey(entityNameKey));
};

export default resolveBaseUrl;
