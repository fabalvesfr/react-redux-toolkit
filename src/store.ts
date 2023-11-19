import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: { username: "" } };
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  }, // Takes as argument prevState and action, and returns new state
});

export const { login, logout } = userSlice.actions;
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
