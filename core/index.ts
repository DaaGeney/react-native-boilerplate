// @scripts
import reduxStore from './store';
import { initializeServiceMocker } from './service-mocker';

const initializeApp = () => {
  const serviceMocker = initializeServiceMocker(reduxStore);
  globalThis.core = {
    store: reduxStore,
    serviceMocker
  };

  return globalThis.core;
};

const { store } = initializeApp();

export { store };
