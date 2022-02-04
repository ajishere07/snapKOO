import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/MODAL/modalSlice";
import renderPageReducer from "../features/AUTH/renderPageSlice";
import userAuthenticatedReducer from "../features/AUTH/userAuthenticatedSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    render: renderPageReducer,
    userAuthentication: userAuthenticatedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
