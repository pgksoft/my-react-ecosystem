import { createSlice } from '@reduxjs/toolkit';
import {
  clearEntityDialogsFieldsAction,
  initialEntityDialogsFieldsState,
  setEntityDialogsFieldsAction
} from './entity-dialogs-fields-values-actions';

export const EntityDialogsFieldsSlice = createSlice({
  name: 'was-mutation-entity',
  initialState: initialEntityDialogsFieldsState,
  reducers: {
    setEntityDialogsFields: setEntityDialogsFieldsAction,
    clearEntityDialogsFields: clearEntityDialogsFieldsAction
  }
});

export const { setEntityDialogsFields, clearEntityDialogsFields } =
  EntityDialogsFieldsSlice.actions;

export default EntityDialogsFieldsSlice.reducer;
