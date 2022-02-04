import { createSlice,getDefaultMiddleware} from "@reduxjs/toolkit";

import { RootState } from "../../store/store";

interface userAuth {
  credential: any;
}

const initialState: userAuth = {
  credential: null,
};


export const userAuthenticatedSlice = createSlice({
  name: "userAuthentication",
  initialState,
  reducers: {
    autheticated: (state, { payload }) => {
      state.credential = payload;
    },
  },
});
export const { autheticated } = userAuthenticatedSlice.actions;

export const authe = (state: RootState) => state.userAuthentication.credential;

export default userAuthenticatedSlice.reducer;
