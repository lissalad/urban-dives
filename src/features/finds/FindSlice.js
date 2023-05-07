import { createSlice } from "@reduxjs/toolkit";
import data from "../../../curb-finds";

const initialState = {
  id: null,
  selectedFind: data[0],
};

export const findSlice = createSlice({
  name: "finds",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setSelectedFind: (state, action) => {
      state.selectedFind = action.payload;
      console.log(state.selectedFind);
    },
  },
});

export const { setSelectedFind } = findSlice.actions;

export default findSlice.reducer;
