import type TUnknownRecord from '../../app-infrastructure/app-types/t-unknown-record';
import { TStoreState } from '../../store/store';
import type { TFormDtoKey } from './form-dto-serialization-actions';

const selectFormDtoSerializationByKey = <
  T extends TUnknownRecord | null = TUnknownRecord | null
>(
  key: TFormDtoKey
) => {
  return (state: TStoreState): T | null => {
    const raw = state.formDtoSerialization.formDtoSerialization[key];
    return (raw as T) ?? null;
  };
};

export { selectFormDtoSerializationByKey };
