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
  async () => {
    //firebase database reference

    const koosCollectionRef = collection(db, "koos");
    // const querySnapshot = await getDocs(collection(db, "users"));
    // querySnapshot.map((doc) => {
    //   setNames((doc.id = doc.data()));
    // });

    const querySnapshot = await getDocs(koosCollectionRef);
    let data: any = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;

    // onSnapshot(queryObject, (snapshot) => {
    //   return snapshot.docs.map((doc) => doc.data());
    // });
  }
);
interface KoosDataType {
  allKoos: any | null;
}

const initialState: KoosDataType = {
  allKoos: [],
};

export const KoosSlice = createSlice({
  name: "koos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchKoosData.fulfilled, (state, { payload }) => {
      state.allKoos = payload;
    });
  },
});

export const KoosList = (state: RootState) => state.koos.allKoos;

export default KoosSlice.reducer;
