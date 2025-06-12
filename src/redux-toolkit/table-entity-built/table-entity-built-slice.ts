import { createSlice } from '@reduxjs/toolkit';
import {
  initialTablesEntitiesBuiltState,
  setTableEntityBuiltAction
} from './table-entity-built-actions';

export const tableEntityBuiltSlice = createSlice({
  name: 'is-table-entity-built',
  initialState: initialTablesEntitiesBuiltState,
  reducers: {
    setTableEntityBuilt: setTableEntityBuiltAction
  }
});

export const { setTableEntityBuilt } = tableEntityBuiltSlice.actions;

export default tableEntityBuiltSlice.reducer;
