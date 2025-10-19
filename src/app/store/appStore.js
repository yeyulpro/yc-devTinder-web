import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { feedSlice } from "./slices/feedSlice";
import { accountApi } from "../apis/userApi";
import { feedApi } from "../apis/feedApi";



export const appStore = configureStore({
  reducer: {
    [accountApi.reducerPath]: accountApi.reducer,
    [feedApi.reducerPath]: feedApi.reducer,
    user: userSlice.reducer,
    feed: feedSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountApi.middleware,feedApi.middleware),
});
