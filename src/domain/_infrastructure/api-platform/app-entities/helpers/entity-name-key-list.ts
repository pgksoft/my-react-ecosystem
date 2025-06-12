import getEnumNames from '../../../helpers/get-enum-names';
import TEntityNameKeys, {
  EntityNameKeys
} from '../app-entities-types/t-entity-key-names';

const entityNameKeys = getEnumNames(EntityNameKeys);

export const isEntityNameKeys = (value: string): value is TEntityNameKeys => {
  return entityNameKeys.includes(value);
};

export const entityNameKeysList = entityNameKeys.filter((item) => {
  return isEntityNameKeys(item);
});
