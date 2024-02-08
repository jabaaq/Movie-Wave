import { configureStore } from "@reduxjs/toolkit";
import HomePageReducer from "../HomePage/HomePageSlice";
import MoviePageReducer from "../MoviesPage/MoviePageSlice";
import ActorPageReducer from "../ActorsPage/ActorsPageSlice";

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
    MoviePageReducer,
    ActorPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});
