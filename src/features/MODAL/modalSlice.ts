import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface modalDataTypes {
  showModal: boolean;
}

const initialState: modalDataTypes = {
  showModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModalBox: (state, { payload }) => {
      state.showModal = true;
    },
    closeModal: (state, { payload }) => {
      state.showModal = false;
    },
  },
});
export const { openModalBox, closeModal } = modalSlice.actions;

export const modalBool = (state: RootState) => state.modal.showModal;

export default modalSlice.reducer;
