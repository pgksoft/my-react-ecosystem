import TEntityNameKeys, {
  entityNameKeys
} from '../app-entities-types/t-entity-key-names';

export const isEntityNameKeys = (value: string): value is TEntityNameKeys => {
  return entityNameKeys.includes(value as TEntityNameKeys);
};

export const entityNameKeysList = entityNameKeys.filter((item) => {
  return isEntityNameKeys(item);
});
