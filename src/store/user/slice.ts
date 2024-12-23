import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type RootState } from '../index';

interface UserState {
  token: string;
}

const initialState: UserState = {
  token: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: () => initialState
  }
});

export const { setUser, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
