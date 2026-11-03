import entityMetadataMaps from '..';
import type TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';

const isDataLoadModePage = (entityNameKey: TEntityNameKeys): boolean => {
  return entityMetadataMaps[entityNameKey].dataLoadingMode === 'page';
};

export default isDataLoadModePage;
