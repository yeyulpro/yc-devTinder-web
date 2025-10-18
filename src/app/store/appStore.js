import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'

export const appStore = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})