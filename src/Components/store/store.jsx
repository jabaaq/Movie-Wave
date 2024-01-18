import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../HomePage/Navbar/navbarSlice";

export const store = configureStore({
  reducer: {
    navbarReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
