import { TStoreState } from '../../store/store';

const entityDialogsFieldsSelector = (state: TStoreState) => {
  return state.entityDialogsFields.entityDialogsFields;
};

export { entityDialogsFieldsSelector };
