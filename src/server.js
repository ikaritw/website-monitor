import properties from './props';
import { createTrigger } from './trigger';
import { TITLE, SUCCESS } from './utils';

const SETTINGS = 'settings';
const LAST_STATUS = 'status';

export const getSettings = () =>
  properties.getUserProperty(SETTINGS, true) || {};

export const getLastStatus = () => {
  const lastStatus = properties.getUserProperty(LAST_STATUS) || SUCCESS;
  return +lastStatus;
};

export const setLastStatus = status => {
  properties.setUserProperty(LAST_STATUS, status);
};

export const saveSettings = value => {
  properties.setUserProperty(SETTINGS, value);
  setLastStatus(SUCCESS);
  createTrigger();
  SpreadsheetApp.getActiveSpreadsheet().toast(`${TITLE} is now running!`);
  return 'Settings updated!';
};
