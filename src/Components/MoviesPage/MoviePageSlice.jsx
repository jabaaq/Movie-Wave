import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";

const { request } = useHttp();

const {
  _transferSelectedMovieDetails,
  _transferSelectedSeriesDetails,
  _transferMovieCast,
} = movieDbService();

const initialState = {
  fetchedMovieById: [],
  loadMoviePage: false,
  fetchedCast: [],
  // movieDetailsById: [],
};

export const fetchMovieDetails = createAsyncThunk(
  "fetch/fetchMovieDetails",
  async (id) => {
    const { movieDetailsById } = GetUrl();
    const updatedUrl = movieDetailsById(id);
    const res = await request(updatedUrl);
    return _transferSelectedMovieDetails(res);
  }
);

export const fetchSeriesDetails = createAsyncThunk(
  "fetch/fetchMovieDetails",
  async (id) => {
    const { seriesDetailsById } = GetUrl();
    const updatedUrl = seriesDetailsById(id);
    const res = await request(updatedUrl);
    return _transferSelectedSeriesDetails(res);
  }
);

export const fetchCast = createAsyncThunk(
  "fetch/fetchCast",
  async ({ mediaId, mediaType }) => {
    const { castByMedia } = GetUrl();
    const updatedUrl = castByMedia(mediaId, mediaType);
    const res = await request(updatedUrl);
    console.log(res);
    return res.cast.map(_transferMovieCast);
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
      .addCase(
        fetchMovieDetails.fulfilled || fetchSeriesDetails.fulfilled,
        (state, action) => {
          state.fetchedMovieById = action.payload;
        }
      )
      .addCase(fetchCast.fulfilled, (state, action) => {
        state.fetchedCast = action.payload;
      })
      .addMatcher(
        isAnyOf(
          fetchMovieDetails.pending,
          fetchCast.pending,
          fetchSeriesDetails.pending
        ),
        (state) => {
          state.loadMoviePage = false;
        }
      )
      .addMatcher(
        isAnyOf(
          (fetchCast.fulfilled,
          fetchMovieDetails.fulfilled,
          fetchSeriesDetails.fulfilled)
        ),
        (state) => {
          state.loadMoviePage = true;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchMovieDetails.rejected,
          fetchCast.rejected,
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
