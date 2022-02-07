import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/MODAL/modalSlice";
import renderPageReducer from "../features/AUTH/renderPageSlice";
import userAuthenticatedReducer from "../features/AUTH/userAuthenticatedSlice";
import dataReducer from "../features/PROFILE_DATA/dataSlice";
import editModalReducer from "../features/PROFILE_DATA/editModal";
import KoosReducer from "../features/KOOS(Tweets)/KoosSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    render: renderPageReducer,
    userAuthentication: userAuthenticatedReducer,
    data: dataReducer,
    edit: editModalReducer,
    koos: KoosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
