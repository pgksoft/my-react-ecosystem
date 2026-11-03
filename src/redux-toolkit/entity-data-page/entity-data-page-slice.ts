import { createSlice } from '@reduxjs/toolkit';
import {
  initialEntityDataPageState,
  setEntityDataPageAction
} from './entity-data-page-action';

export const EntityDataPageSlice = createSlice({
  name: 'entity-data-page',
  initialState: initialEntityDataPageState,
  reducers: {
    setEntityDataPage: setEntityDataPageAction
  }
});

export const { setEntityDataPage } = EntityDataPageSlice.actions;

export default EntityDataPageSlice.reducer;
