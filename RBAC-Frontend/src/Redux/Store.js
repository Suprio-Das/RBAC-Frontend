import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './AuthSlice'
import storage from 'redux-persist/lib/storage'

// Persist Configuration
const persistConfig = {
    key: "root",
    storage,
    whitelist: ['Auth']
}

export const store = configureStore({
    reducer: {
        Auth: AuthSlice
    }
})