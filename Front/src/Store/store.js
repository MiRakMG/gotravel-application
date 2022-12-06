import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseRoute } from "../Services/baseRoute";

export const store = configureStore({
  reducer: {
    [baseRoute.reducerPath]: baseRoute.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseRoute.middleware),
});


setupListeners(store.dispatch)