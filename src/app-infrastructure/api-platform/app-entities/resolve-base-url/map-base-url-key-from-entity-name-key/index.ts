import type TEntityNameKeys from '../../app-entities-types/t-entity-key-names';
import type TBaseUrlKeys from '../map-base-url-from-env';

const mapBaseUrlKeysFromEntityNameKey: Record<TBaseUrlKeys, TEntityNameKeys[]> =
  {
    'json-server': ['contact', 'simpleNewsletterSignUp', 'todo'],
    'eliftech-delivery': [
      'shop',
      'productCategoryDic',
      'productDic',
      'shopProduct'
    ]
  };

const getBaseUrlKey = (entityNameKey: TEntityNameKeys): TBaseUrlKeys => {
  const baseUrlKeys = Object.keys(mapBaseUrlKeysFromEntityNameKey).find(
    (key) => {
      return mapBaseUrlKeysFromEntityNameKey[key as TBaseUrlKeys].includes(
        entityNameKey
      );
    }
  );
  if (baseUrlKeys) return baseUrlKeys as TBaseUrlKeys;
  return 'json-server';
};

export default getBaseUrlKey;
