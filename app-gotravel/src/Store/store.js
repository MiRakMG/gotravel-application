import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { prestationApi } from "../Services/prestations";

export const store = configureStore({
  reducer: {
    [prestationApi.reducerPath]: prestationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(prestationApi.middleware),
});


setupListeners(store.dispatch)