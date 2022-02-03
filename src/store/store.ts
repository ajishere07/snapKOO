import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/MODAL/modalSlice";
import renderPageReducer from "../features/AUTH/renderPageSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    render: renderPageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
