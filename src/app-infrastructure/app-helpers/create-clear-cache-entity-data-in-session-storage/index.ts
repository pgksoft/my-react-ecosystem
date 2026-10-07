import type TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';

const createClearCacheEntityDataInSessionStorage = (
  entityNameKey: TEntityNameKeys
) => {
  return () => {
    try {
      sessionStorage.removeItem(entityNameKey);
    } catch {
      //
    }
  };
};

export default createClearCacheEntityDataInSessionStorage;
