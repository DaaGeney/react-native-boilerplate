// @packages
import merge from 'deepmerge';

// @scripts
import { constants } from '../constants';

// @json
import envLocal from './env-local.json';
import envProduction from './env-production.json';
import envQa from './qa-local.json';
import globals from './globals.json';

const getSettings = () => {
  switch (process.env.NODE_ENV) {
    case constants.environment.DEV:
      return merge(globals, envLocal);
    case constants.environment.PRODUCTION:
      return merge(globals, envProduction);
    case constants.environment.QA:
      return merge(globals, envQa);
    default:
      return merge(globals, envLocal);
  }
};

export default getSettings();
