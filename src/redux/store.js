import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../redux/slices/projectsSlice";
import aboutReducer from "../redux/slices/aboutSlice";
export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    about: aboutReducer,
  },
});

export default store;
