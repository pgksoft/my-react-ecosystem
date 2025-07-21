import { createSlice } from '@reduxjs/toolkit';
import {
  initialSelectedEntityItemsState,
  setSelectedEntityItemsAction,
  clearSelectedEntityItemsAction
} from './selected-entity-items-actions';

export const selectedEntityItemsSlice = createSlice({
  name: 'selected-entity-items',
  initialState: initialSelectedEntityItemsState,
  reducers: {
    setSelectedEntityItems: setSelectedEntityItemsAction,
    clearSelectedEntityItems: clearSelectedEntityItemsAction
  }
});

// eslint-disable-next-line prettier/prettier
export const {
  setSelectedEntityItems,
  clearSelectedEntityItems
} = selectedEntityItemsSlice.actions;

export default selectedEntityItemsSlice.reducer;
