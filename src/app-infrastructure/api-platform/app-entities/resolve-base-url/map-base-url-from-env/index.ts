import { getArrayAsStringConst } from '../../../../app-helpers/get-array-as-string-const';

const baseUrlKeys = getArrayAsStringConst('json-server', 'eliftech-delivery');

type TBaseUrlKeys = (typeof baseUrlKeys)[number];

const env = process.env as Record<string, string>;

const mapBaseUrlFromEnv: Record<TBaseUrlKeys, string> = {
  'json-server': env.REACT_APP_API_BASE_URL_JSON_SERVER,
  'eliftech-delivery': env.REACT_APP_API_BASE_URL_ELIFTECH_DELIVERY
};

export const getBaseUrl = (baseUrlKey: TBaseUrlKeys): string => {
  return mapBaseUrlFromEnv[baseUrlKey];
};

export default TBaseUrlKeys;
