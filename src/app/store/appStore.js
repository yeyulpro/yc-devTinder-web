import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { feedSlice } from "./slices/feedSlice";
import { accountApi } from "../apis/userApi";
import { feedApi } from "../apis/feedApi";
import { matchingSlice } from "./slices/matchingSlice";
import { matchingApi } from "../apis/matchingApi";



export const appStore = configureStore({
  reducer: {
    [accountApi.reducerPath]: accountApi.reducer,
    [feedApi.reducerPath]: feedApi.reducer,
    [matchingApi.reducerPath]:matchingApi.reducer,
    user: userSlice.reducer,
    feed: feedSlice.reducer,
    match: matchingSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountApi.middleware,feedApi.middleware, matchingApi.middleware),
});
