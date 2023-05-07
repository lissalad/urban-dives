import { configureStore } from "@reduxjs/toolkit";
import { findSlice } from "../features/finds/FindSlice";

const store = configureStore({
  reducer: {
    finds: findSlice.reducer,
  },
});

export default store;
