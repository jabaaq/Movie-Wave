import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";

const { request } = useHttp();

const {
  _transferSelectedMovieDetails,
  _transferMovieCast,
  _transferVideo,
  _transferReviews,
  _transferUpcomingMovies,
} = movieDbService();

const initialState = {
  fetchedMovieById: [],
  loadMoviePage: false,
  fetchedCast: [],
  fetchedVideos: [],
  fetchedReviews: [],
  fetchedRecommendations: [],
};

export const fetchMediaDetails = createAsyncThunk(
  "fetch/fetchMediaDetails",
  async ({ mediaId, mediaType }) => {
    const { detailsById } = GetUrl();
    const updatedUrl = detailsById(mediaId, mediaType);
    const res = await request(updatedUrl);
    return _transferSelectedMovieDetails(res);
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

export const fetchReviews = createAsyncThunk(
  "fetch/fetchReviews",
  async ({ mediaId, mediaType }) => {
    const { reviews } = GetUrl();
    const updatedUrl = reviews(mediaId, mediaType);
    const res = await request(updatedUrl);
    return res.results.map(_transferReviews);
  }
);

export const fetchRecommendations = createAsyncThunk(
  "fetch/fetchRecommendations",
  async ({ mediaId, mediaType }) => {
    const { recommendations } = GetUrl();
    const updatedUrl = recommendations(mediaId, mediaType);
    const res = await request(updatedUrl);
    return res.results.map(_transferUpcomingMovies);
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
      .addCase(fetchMediaDetails.fulfilled, (state, action) => {
        state.fetchedMovieById = action.payload;
      })
      .addCase(fetchCast.fulfilled, (state, action) => {
        state.fetchedCast = action.payload;
      })
      .addCase(fetchMediaVideos.fulfilled, (state, action) => {
        state.fetchedVideos = action.payload;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.fetchedReviews = action.payload;
      })
      .addCase(fetchRecommendations.fulfilled, (state, action) => {
        state.fetchedRecommendations = action.payload;
      })
      .addMatcher(
        isAnyOf(
          fetchCast.pending,
          fetchMediaDetails.pending,
          fetchReviews.pending
        ),
        (state) => {
          state.loadMoviePage = false;
        }
      )
      .addMatcher(
        isAnyOf(
          (fetchCast.fulfilled,
          fetchMediaDetails.fulfilled,
          fetchMediaVideos.fulfilled,
          fetchReviews.fulfilled)
        ),
        (state) => {
          state.loadMoviePage = true;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchMediaDetails.rejected,
          fetchCast.rejected,
          fetchMediaVideos.rejected,
          fetchReviews.rejected
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
