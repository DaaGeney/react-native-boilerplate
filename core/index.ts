// @scripts
import reduxStore from './store';
import { addAjaxInterceptors } from './ajax-interceptors';
import { initializeServiceMocker } from './service-mocker';

const initializeApp = () => {
  const serviceMocker = initializeServiceMocker(reduxStore);
  addAjaxInterceptors();
  globalThis.core = {
    store: reduxStore,
    serviceMocker
  };

  return globalThis.core;
};

const { store } = initializeApp();

export { store };
