// @packages
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState, ServiceType } from '../../../utils/types';

const initialState: IUserState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  serviceType: ServiceType.None,
};

export const cardsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserRegister: (
      state: IUserState,
      action: PayloadAction<IUserState>
    ) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.serviceType = action.payload.serviceType;
    },
    removeUserInformation: () => {
      return initialState;
    }
  }
});

export const { setUserRegister, removeUserInformation } = cardsSlice.actions;

export default cardsSlice.reducer;
