import { configureStore } from "@reduxjs/toolkit";
import HomePageReducer from "../HomePage/HomePageSlice";
import { thunk } from "redux-thunk";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

export const store = configureStore({
  reducer: {
    HomePageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});
