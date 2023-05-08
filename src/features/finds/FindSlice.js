import { createSlice } from "@reduxjs/toolkit";
// import data from "../../../curb-finds";

const initialState = {
  selectedFind: {
    id: 0,
    title: "books",
    image: "books.png",
    description: "paper bags of many books outside house",
    latitude: 37.75421,
    longitude: -122.44057,
  },
};

export const findSlice = createSlice({
  name: "finds",
  initialState,
  reducers: {
    setSelectedFind: (state, action) => {
      state.selectedFind = action.payload;
      // console.log(state.selectedFind.title + ", WORKING in slice");
    },
  },
});

export const { setSelectedFind } = findSlice.actions;

export default findSlice.reducer;
