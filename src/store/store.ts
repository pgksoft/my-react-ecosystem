import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux-toolkit/counter/counter-slice';
import appPageLinksReducer from '../redux-toolkit/app-page-links/app-page-links-slice';
import mutationEntitiesReducer from '../redux-toolkit/mutation-entities/mutation-entities-slice';
import tableEntityBuiltReducer from '../redux-toolkit/table-entity-built/table-entity-built-slice';
import entityDialogsFieldsReducer from '../redux-toolkit/entity-dialogs-fields-values/entity-dialogs-fields-values-slice';
import selectedEntityItemsReducer from '../redux-toolkit/selected-entity-items/selected-entity-items-slice';
import resetToInitialDataSliceReducer from '../redux-toolkit/reset-to-initial-data/reset-toInitial-data-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    appPageLinks: appPageLinksReducer,
    mutationEntities: mutationEntitiesReducer,
    tableEntityBuilt: tableEntityBuiltReducer,
    entityDialogsFields: entityDialogsFieldsReducer,
    selectedEntityItems: selectedEntityItemsReducer,
    resetToInitialData: resetToInitialDataSliceReducer
  }
});

export type TStoreState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export type TAppStore = typeof store;
