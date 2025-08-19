import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './AuthSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";

// Persist Configuration
const persistConfig = {
    key: "root",
    storage,
    whitelist: ['Auth']
}

// Persist Reducer
const persistedReducer = persistReducer(persistConfig, AuthSlice);

export const store = configureStore({
    reducer: {
        Auth: AuthSlice
    }
})