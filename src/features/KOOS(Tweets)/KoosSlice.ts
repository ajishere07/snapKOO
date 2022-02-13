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

export const fetchKoosData = createAsyncThunk(
  "Koos/fetchKoosData",
  async (id: string) => {
    //firebase database reference

    const koosCollectionRef = collection(db, "koos");

    const querySnapshot = await getDocs(koosCollectionRef);
    const userKooQuerySnapshot = await query(
      koosCollectionRef,
      where("userId", "==", `${id}`)
    );
    let data: any = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    let userKoo: any = [];

    const querySnapshotUserKoo = await getDocs(userKooQuerySnapshot);
    querySnapshotUserKoo.forEach((doc) => {
      userKoo.push(doc.data());
    });
    const Koos = { allkoos: data, userKoo };
    return Koos;
  }
);
interface KoosDataType {
  allKoos: any | null;
  userKoo: any | null;
}

const initialState: KoosDataType = {
  allKoos: [],
  userKoo: [],
};

export const KoosSlice = createSlice({
  name: "koos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchKoosData.fulfilled, (state, { payload }) => {
      state.allKoos = payload.allkoos;
      state.userKoo = payload.userKoo;
    });
  },
});

export const KoosList = (state: RootState) => state.koos.allKoos;

export default KoosSlice.reducer;
