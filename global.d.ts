/* eslint-disable no-var */
import store from './core/store';

declare global {
  var core: { store: typeof store; serviceMocker: unknown };
}
