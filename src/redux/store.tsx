import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo.slice";
import { baseApi } from "./api/api";
export const store = configureStore({
  reducer: { [baseApi.reducerPath]: baseApi.reducer, todoSlice },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
