import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux-toolkit/counter/counter-slice';
import appPageLinksReducer from '../redux-toolkit/app-page-links/app-page-links-slice';

export const store = configureStore({
  reducer: { counter: counterReducer, appPageLinks: appPageLinksReducer }
});

export type TStoreState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export type TAppStore = typeof store;
