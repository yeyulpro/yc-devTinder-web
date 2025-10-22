import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { accountApi } from "../apis/userApi";
import { matchingSlice } from "./slices/matchingSlice";
import { matchingApi } from "../apis/matchingApi";

export const appStore = configureStore({
  reducer: {
    [accountApi.reducerPath]: accountApi.reducer,

    [matchingApi.reducerPath]: matchingApi.reducer,
    user: userSlice.reducer,
    match: matchingSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      accountApi.middleware,
      matchingApi.middleware
    ),
});
