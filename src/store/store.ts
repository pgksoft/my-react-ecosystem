import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux-toolkit/counter/counter-slice';

export const store = configureStore({
  reducer: { counter: counterReducer }
});

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export type TAppStore = typeof store;
