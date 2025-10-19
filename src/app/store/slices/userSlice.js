import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    loginUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
    editUserInfo: (state, action) => {
      return action.payload;
    },
  },
});

export const { loginUser, removeUser, editUserInfo } = userSlice.actions;
