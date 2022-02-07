import {
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../configuration/firebase";
import { RootState } from "../../store/store";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (userId: string | null) => {
    //firebase database reference

    const usersCollectionRef = collection(db, "users");

    const queryObject = query(
      usersCollectionRef,
      where("uid", "==", `${userId}`)
    );
    const querySnapshot = await getDocs(queryObject);
    let data = {};
    querySnapshot.forEach((doc) => {
      data = doc.data();
    });
    return data;

    // onSnapshot(queryObject, (snapshot) => {
    //   return snapshot.docs.map((doc) => doc.data());
    // });
  }
);
interface renderDataTypes {
  userData: any | null;
}

const initialState: renderDataTypes = {
  userData: {},
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, { payload }) => {
      state.userData = payload;
    });
  },
});

export const data = (state: RootState) => state.data.userData;

export default dataSlice.reducer;
