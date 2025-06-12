/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import { TITLES_OF_APP } from '../../_const/titles-of-app';
import TLink from '../../domain/_infrastructure/types/t-link';

export type TAppPageLinks = { activePageLink: TLink; activeParentLink: TLink };

export type TAppPageLinksState = {
  appPageLinks: TAppPageLinks;
};

const initialActivePageLink: TLink = {
  title: TITLES_OF_APP.title,
  appRoute: ''
};

const initialActiveParentLink: TLink = {
  title: '',
  appRoute: ''
};

export const initialAppPageLinksState: TAppPageLinksState = {
  appPageLinks: {
    activePageLink: initialActivePageLink,
    activeParentLink: initialActiveParentLink
  }
};

const setAppPageLinksAction = (
  state: TAppPageLinksState,
  action: PayloadAction<TAppPageLinks>
) => {
  state.appPageLinks = action.payload;
};

export { setAppPageLinksAction };
