import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./portfolio/data/dataSlice";
import { curriculumSlice } from "./portfolio/curriculum";

export const store = configureStore({
  reducer: {
    // auth: authSlice.reducer,
    data: dataSlice.reducer,
    curriculum: curriculumSlice.reducer,
  },
});
