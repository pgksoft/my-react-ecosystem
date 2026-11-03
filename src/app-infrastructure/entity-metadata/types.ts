import type TEntityNameKeys from '../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TDataLoadingMode } from '../app-types/t-data-loading-mode';

export type TEntityMetadata = { dataLoadingMode: TDataLoadingMode };

export type TEntityMetadataMaps = { [k in TEntityNameKeys]: TEntityMetadata };
