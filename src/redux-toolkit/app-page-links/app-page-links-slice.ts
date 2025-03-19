import { createSlice } from '@reduxjs/toolkit';
import {
  initialAppPageLinksState,
  setAppPageLinksAction
} from './app-page-links-actions';

export const appPageLinksSlice = createSlice({
  name: 'app-page-links',
  initialState: initialAppPageLinksState,
  reducers: {
    setAppPageLinks: setAppPageLinksAction
  }
});

export const { setAppPageLinks } = appPageLinksSlice.actions;

export default appPageLinksSlice.reducer;
