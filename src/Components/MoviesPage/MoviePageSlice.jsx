import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";

const { request } = useHttp();

const {
  _transferSelectedMovieDetails,
  _transferSelectedSeriesDetails,
  _transferMovieCast,
  _transferVideo,
} = movieDbService();

const initialState = {
  fetchedMovieById: [],
  loadMoviePage: false,
  fetchedCast: [],
  fetchedVideos: [],
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
    return res.cast.map(_transferMovieCast);
  }
);

export const fetchMediaVideos = createAsyncThunk(
  "fetch/fetchMediaVideos",
  async ({ mediaId, mediaType }) => {
    const { mediaVideos } = GetUrl();
    const updatedUrl = mediaVideos(mediaId, mediaType);
    const res = await request(updatedUrl);
    return res.results.map(_transferVideo);
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
      .addCase(fetchMediaVideos.fulfilled, (state, action) => {
        state.fetchedVideos = action.payload;
      })
      .addMatcher(
        isAnyOf(
          fetchMovieDetails.pending,
          fetchCast.pending,
          fetchSeriesDetails.pending,
          fetchMediaVideos.pending
        ),
        (state) => {
          state.loadMoviePage = false;
        }
      )
      .addMatcher(
        isAnyOf(
          (fetchCast.fulfilled,
          fetchMovieDetails.fulfilled,
          fetchSeriesDetails.fulfilled,
          fetchMediaVideos.fulfilled)
        ),
        (state) => {
          state.loadMoviePage = true;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchMovieDetails.rejected,
          fetchCast.rejected,
          fetchSeriesDetails.rejected,
          fetchMediaVideos.rejected
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
