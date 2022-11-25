import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  
  reducers: {
    login: (state, action) => {
      state.value = action.payload; // An action object can have other fields with additional information about what happened. By convention, we put that information in a field called payload.
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// this Selectors allows us to pull from the data layer
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
