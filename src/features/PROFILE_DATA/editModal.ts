import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface modalDataTypes {
  showEditModal: boolean;
}

const initialState: modalDataTypes = {
  showEditModal: false,
};

export const editModal = createSlice({
  name: "edit",
  initialState,
  reducers: {
    editModalShow: (state) => {
      state.showEditModal = true;
    },
    closeEditModal: (state) => {
      state.showEditModal = false;
    },
  },
});
export const { editModalShow, closeEditModal } = editModal.actions;

export const editProfile = (state: RootState) => state.edit.showEditModal;

export default editModal.reducer;
