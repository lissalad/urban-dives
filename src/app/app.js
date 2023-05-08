import { configureStore } from "@reduxjs/toolkit";
import { findSlice, setSelectedFind } from "../features/finds/FindSlice";

const store = configureStore({
  reducer: {
    finds: findSlice.reducer,
  },
});

// Set the initial value of selectedFind
// store.dispatch(
//   setSelectedFind({
//     id: 0,
//     title: "books",
//     image: "books.png",
//     description: "paper bags of many books outside house",
//     latitude: 37.75421,
//     longitude: -122.44057,
//   })
// );

export default store;
