import { createSlice } from '@reduxjs/toolkit';
import {
  clearFormDtoSerializationAction,
  initialFormDtoSerializationState,
  setFormDtoSerializationAction
} from './form-dto-serialization-actions';

export const FormDtoSerializationSlice = createSlice({
  name: 'form-dto-serialization',
  initialState: initialFormDtoSerializationState,
  reducers: {
    setFormDtoSerialization: setFormDtoSerializationAction,
    clearFormDtoSerialization: clearFormDtoSerializationAction
  }
});

export const { setFormDtoSerialization, clearFormDtoSerialization } =
  FormDtoSerializationSlice.actions;

export default FormDtoSerializationSlice.reducer;
