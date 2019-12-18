import { logException, SUCCESS } from './utils';

const sitecall = func => {
  const MAX = 3;
  for (let n = 0; n < MAX; n += 1) {
    try {
      return func();
    } catch (e) {
      if (n === MAX - 1) {
        logException(e);
        throw e;
      }
      Utilities.sleep(2 ** n * 20000 + Math.round(Math.random() * 1000));
    }
  }
  return null;
};

const getSiteStatus = (url = '') => {
  try {
    const response = sitecall(() =>
      UrlFetchApp.fetch(url, {
        validateHttpsCertificates: false,
        followRedirects: true,
        muteHttpExceptions: false
      })
    );
    const statusCode = response.getResponseCode();
    Logger.log(`WEBSITE_MONITOR:${url}:${statusCode}`);
    return statusCode;
  } catch (f) {
    logException(f);
    return SUCCESS - 1;
  }
};

export default getSiteStatus;
