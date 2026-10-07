import type TypeGuard from '../../../app-types/type-guard';
import TEntityNameKeys, {
  entityNameKeys
} from '../app-entities-types/t-entity-key-names';

export const isEntityNameKeys: TypeGuard<TEntityNameKeys> = (
  value: unknown
): value is TEntityNameKeys => {
  return entityNameKeys.includes(value as TEntityNameKeys);
};

export const entityNameKeysList = entityNameKeys.filter((item) => {
  return isEntityNameKeys(item);
});
