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
  _transferImages,
  _transferRecommendations,
} = movieDbService();

const initialState = {
  fetchedMovieById: [],
  loadMoviePage: false,
  fetchedCast: [],
  fetchedVideos: [],
  fetchedReviews: [],
  fetchedRecommendations: [],
  fetchedImages: [],
  //Favorite:
  favoriteMedia: [],
  favoriteStatus: false,
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
    return res.results.map((movie) =>
      _transferRecommendations(movie, mediaType)
    );
  }
);

export const fetchMovieImages = createAsyncThunk(
  "fetch/fetchMovieImages",
  async ({ mediaId, mediaType }) => {
    const { movieImages } = GetUrl();
    const updatedUrl = movieImages(mediaId, mediaType);
    const res = await request(updatedUrl);
    return res.backdrops.map(_transferImages).slice(0, 15);
  }
);

export const moviePageSlice = createSlice({
  name: "moviePage",
  initialState,
  reducers: {
    //Actions
    handleAddFavorites: (state, action) => {
      const mediaIndex = state.favoriteMedia.findIndex(
        (item) =>
          item.id === action.payload.id && item.title === action.payload.title
      );

      if (mediaIndex >= 0) {
        state.favoriteMedia.splice(mediaIndex, 1);
        localStorage.removeItem(action.payload.id);
        state.favoriteStatus = false;
      } else {
        state.favoriteMedia.unshift(action.payload);
        localStorage.setItem(
          action.payload.id,
          JSON.stringify(state.favoriteMedia)
        );
        state.favoriteStatus = true;
      }

      localStorage.setItem(
        "favoriteMedia",
        JSON.stringify(state.favoriteMedia)
      );
    },
    handleRemoveFromFavorites: (state, action) => {
      state.favoriteMedia = JSON.parse(localStorage.getItem("favoriteMedia"));

      state.favoriteMedia = state.favoriteMedia.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        "favoriteMedia",
        JSON.stringify(state.favoriteMedia)
      );
      if (state.favoriteMedia.length === 0) {
        localStorage.removeItem("favoriteMedia");
      }
    },
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
      .addCase(fetchMovieImages.fulfilled, (state, action) => {
        state.fetchedImages = action.payload;
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
          fetchReviews.fulfilled,
          fetchRecommendations.fulfilled,
          fetchMovieImages.fulfilled)
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

const { reducer, actions } = moviePageSlice;

export const {
  handleAddFavorites,
  handleRemoveFromFavorites,
  handleFavoriteStatus,
} = actions;

export default reducer;
