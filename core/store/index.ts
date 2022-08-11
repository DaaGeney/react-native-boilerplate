// @packages
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

// @scripts
import userReducer from './sign-up/signUpSlice';

const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: [thunk],
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
