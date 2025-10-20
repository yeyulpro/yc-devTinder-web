import { createSlice } from "@reduxjs/toolkit";

export const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    getFeed: (state, action) => {
      return action.payload;
    },

    removeFeed: () => {
      return null;
    },
  },
});

export const { getFeed, removeFeed } = feedSlice.actions;
