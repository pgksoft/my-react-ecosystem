import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux-toolkit/counter/counter-slice';
import appPageLinksReducer from '../redux-toolkit/app-page-links/app-page-links-slice';
import mutationEntitiesReducer from '../redux-toolkit/mutation-entities/mutation-entities-slice';
import formDtoSerializationReducer from '../redux-toolkit/form-dto-serialization/form-dto-serialization-slice';
import selectedEntityItemsReducer from '../redux-toolkit/selected-entity-items/selected-entity-items-slice';
import resetToInitialDataReducer from '../redux-toolkit/reset-to-initial-data/reset-toInitial-data-slice';
import entityDataPageReducer from '../redux-toolkit/entity-data-page/entity-data-page-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    appPageLinks: appPageLinksReducer,
    mutationEntities: mutationEntitiesReducer,
    formDtoSerialization: formDtoSerializationReducer,
    selectedEntityItems: selectedEntityItemsReducer,
    resetToInitialData: resetToInitialDataReducer,
    entityDataPage: entityDataPageReducer
  }
});

export type TStoreState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export type TAppStore = typeof store;
