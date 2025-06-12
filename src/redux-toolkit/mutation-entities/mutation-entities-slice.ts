import { createSlice } from '@reduxjs/toolkit';
import {
  setMutationEntityAction,
  initialMutationEntitiesState,
  clearMutationEntityAction
} from './mutation-entities-actions';

export const mutationEntitiesSlice = createSlice({
  name: 'was-mutation-entity',
  initialState: initialMutationEntitiesState,
  reducers: {
    setMutationEntity: setMutationEntityAction,
    clearMutationEntity: clearMutationEntityAction
  }
});

export const { setMutationEntity, clearMutationEntity } =
  mutationEntitiesSlice.actions;

export default mutationEntitiesSlice.reducer;
