import { configureStore } from "@reduxjs/toolkit";
//import {filterSlice,persistedReducer } from "./taskSlice";
import { contactReducer,filterReducer } from "./taskSlice";
import { persistStore,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
export const store = configureStore({
    reducer: {
        contacts:contactReducer,
        filter:filterReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)