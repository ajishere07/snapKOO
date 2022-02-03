import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface renderDataTypes {
  signInPage: boolean;
}

const initialState: renderDataTypes = {
  signInPage: true,
};

export const renderPageSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    renderSignInPage: (state) => {
      state.signInPage = true;
    },
    renderRegisterPage: (state) => {
      state.signInPage = false;
    },
  },
});
export const { renderSignInPage, renderRegisterPage } = renderPageSlice.actions;

export const renderBool = (state: RootState) => state.render.signInPage;

export default renderPageSlice.reducer;
