import { createSlice } from "@reduxjs/toolkit";

export const matchingSlice = createSlice({
    name: "match",
    initialState: [],
    reducers: {
        connected: (state, action) => {
            return action.payload;
        },
    }
})
export const {  connected } = matchingSlice.actions;
