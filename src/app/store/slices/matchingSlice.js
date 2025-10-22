import { createSlice } from "@reduxjs/toolkit";

export const matchingSlice = createSlice({
    name: "match",
    initialState: [],
    reducers: {
        connected: (state, action) => {
            return action.payload;
        },
        requested: (state, action) => {
            return action.payload;
        }
    }
})
export const {  connected , requested} = matchingSlice.actions;
