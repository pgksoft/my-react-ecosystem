import type TEntityNameKeys from '../../app-infrastructure/api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TStoreState } from '../../store/store';

const selectEntityDataPageByKey = (key: TEntityNameKeys) => {
  return (state: TStoreState): number | null => {
    const page = state.entityDataPage[key];
    return page ?? null;
  };
};

export { selectEntityDataPageByKey };
