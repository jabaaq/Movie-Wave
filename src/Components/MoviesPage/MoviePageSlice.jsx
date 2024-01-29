import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";

const { request } = useHttp();

const { _transferSelectedMovieDetails } = movieDbService();

const initialState = {
  fetchedMovieById: [],
  loadMoviePage: false,
  // movieDetailsById: [],
};

export const fetchMovieDetails = createAsyncThunk(
  "fetch/fetchMovieDetails",
  async (id) => {
    const { movieDetailsById } = GetUrl();
    const updatedUrl = movieDetailsById(id);
    const res = await request(updatedUrl);
    console.log(res);
    return _transferSelectedMovieDetails(res);
  }
);

export const moviePageSlice = createSlice({
  name: "moviePage",
  initialState,
  reducers: {
    //Actions
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(fetchMovieDetails.pending, (state) => {
        state.loadMoviePage = false;
      })
      .addMatcher(fetchMovieDetails.fulfilled, (state, action) => {
        state.fetchedMovieById = action.payload;
        state.loadMoviePage = true;
      });
  },
});

const { reducer, action } = moviePageSlice;
export default reducer;
