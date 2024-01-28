import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";
import { GetUrl } from "../../services/getUrl";

const { request } = useHttp();
const initialState = {
  fetchedMovieById: [],
  loadMoviePage: false,
};

export const fetchMovieDetails = createAsyncThunk(
  "fetch/fetchMovieDetails",
  async (id) => {
    const { movieDetailsById } = GetUrl();
    const updatedUrl = movieDetailsById(id);
    const res = await request(updatedUrl);
    console.log(res);
    return res;
  }
);

export const moviePageSlice = createSlice({
  name: "moviePage",
  initialState,
  reducers: {
    //Actions
  },
  extraReducers: (builder) => {
    builder.addMatcher(fetchMovieDetails.fulfilled, (state, action) => {
      state.loadMoviePage = true;
      state.fetchedMovieById = action.payload;
    });
  },
});

const { reducer, action } = moviePageSlice;
export default reducer;
