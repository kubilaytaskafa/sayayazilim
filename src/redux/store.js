import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../redux/slices/projectsSlice";
export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export default store;
