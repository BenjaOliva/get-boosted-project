const conf = {
  mapsApi: process.env.REACT_APP_MAPS_API_KEY,
  appUrl: process.env.REACT_APP_URL,
  isDev: process.env.REACT_APP_IS_DEV === 'true',
  islocal: process.env.REACT_APP_IS_LOCAL === 'true',
  googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  environment: process.env.NODE_ENV,
  photosUrl: process.env.REACT_APP_PHOTOS_URL,
};

export const {
  mapsApi,
  appUrl,
  isDev,
  googleClientId,
  environment,
  photosUrl,
} = conf;
