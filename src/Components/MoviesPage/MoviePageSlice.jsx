import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  fetchedMovieById: [],
};

export const moviePageSlice = createSlice({
  name: "moviePage",
  initialState,
  reducers: {
    //Actions
  },
});

const { reducer, action } = moviePageSlice;
export default reducer;
