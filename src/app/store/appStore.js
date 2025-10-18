import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { accountApi } from "../apis/userApi";
export const appStore = configureStore({
  reducer: {
    [accountApi.reducerPath]: accountApi.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountApi.middleware),
});
