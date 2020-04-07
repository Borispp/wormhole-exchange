import { createSelector } from 'reselect';

export const getAPPReducer = state => state.appReducer;

/**
 * Get version
 */
export const getAppVersion = createSelector(
  getAPPReducer,
  appReducer => appReducer.appVersion
);
