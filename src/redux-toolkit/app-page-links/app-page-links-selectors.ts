import { TStoreState } from '../../store/store';

const appPageLinksValueSelector = (state: TStoreState) => {
  return state.appPageLinks.appPageLinks;
};

export { appPageLinksValueSelector };
