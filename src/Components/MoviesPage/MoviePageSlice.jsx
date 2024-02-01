import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";

const { request } = useHttp();

const { _transferSelectedMovieDetails, _transferSelectedSeriesDetails } =
  movieDbService();

const initialState = {
  fetchedMovieById: [],
  loadMoviePage: false,
  castByMovie: [],
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

export const fetchSeriesDetails = createAsyncThunk(
  "fetch/fetchMovieDetails",
  async (id) => {
    const { seriesDetailsById } = GetUrl();
    const updatedUrl = seriesDetailsById(id);
    const res = await request(updatedUrl);
    console.log(res);
    return _transferSelectedSeriesDetails(res);
  }
);

export const fetchMovieCast = createAsyncThunk(
  "fetch/fetchMovieCast",
  async (id) => {
    const { castByMovie } = GetUrl();
    const updatedUrl = castByMovie(id);
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
    builder
      .addMatcher(
        isAnyOf(
          fetchMovieDetails.pending,
          fetchMovieCast.pending,
          fetchSeriesDetails.pending
        ),
        (state) => {
          state.loadMoviePage = false;
        }
      )
      .addMatcher(
        (action) => {
          return (
            action.type === fetchMovieCast.fulfilled.type,
            action.type === fetchMovieDetails.fulfilled.type,
            action.type === fetchSeriesDetails.fulfilled.type
          );
        },
        (state, action) => {
          state.fetchedMovieById = action.payload;
          state.fetchMovieCast = action.payload;
          state.loadMoviePage = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchMovieDetails.rejected,
          fetchMovieCast.rejected,
          fetchSeriesDetails.rejected
        ),
        (state) => {
          state.loadMoviePage = false;
        }
      )
      .addDefaultCase(() => {});
  },
});

const { reducer, action } = moviePageSlice;
export default reducer;
