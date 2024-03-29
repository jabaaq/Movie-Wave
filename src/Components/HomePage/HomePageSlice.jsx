import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";
import { movieDbService } from "../../services/movieDbService";
import { GetUrl } from "../../services/getUrl";

const { request } = useHttp();
const {
  _transferTrendingMedias,
  _transferUpcomingMovies,
  _transferTvSeries,
  _transferActorsList,
} = movieDbService();

const initialState = {
  toggleNavigation: false,
  fetchedBackgroundMovies: [],
  fetchedUpcomingMovies: [],
  fetchedTvSeries: [],
  fetchedActorsList: [],
  imagesLoadingStatus: "idle",
  upcomingMoviesStatus: "idle",
  selectedMediaId: [],
  loadWebsite: false,
};

export const fetchBackgroundImages = createAsyncThunk(
  "fetch/fetchBackgroundImages",
  async ({ mediaType }) => {
    const { trendingMedias } = GetUrl();
    const updatedUrl = trendingMedias(mediaType);
    const res = await request(updatedUrl);
    return mediaType === "movie"
      ? res.results.map(_transferTrendingMedias)
      : res.results.map(_transferTvSeries);
  }
);

export const fetchUpcomingMovies = createAsyncThunk(
  "fetch/fetchUpcomingMovies",
  async () => {
    const { upcomingMovies } = GetUrl();
    const res = await request(upcomingMovies);
    return res.results.map(_transferUpcomingMovies);
  }
);

export const fetchTvSeries = createAsyncThunk(
  "fetch/fetchTvSeries",
  async () => {
    const { popularTvSeries } = GetUrl();
    const res = await request(popularTvSeries);
    return res.results.map(_transferTvSeries);
  }
);

export const fetchActorsList = createAsyncThunk(
  "fetch/fetchActorsList",
  async () => {
    const { actorsList } = GetUrl();
    const res = await request(actorsList);
    return res.results.map(_transferActorsList);
  }
);

export const homePageSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    //Actions
    navbarToggle: (state) => {
      state.toggleNavigation = !state.toggleNavigation;
    },
    selectMediaId: (state, action) => {
      state.selectedMediaId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBackgroundImages.fulfilled, (state, action) => {
        state.imagesLoadingStatus = "idle";
        state.fetchedBackgroundMovies = action.payload;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.upcomingMoviesStatus = "idle";
        state.fetchedUpcomingMovies = action.payload;
      })
      .addCase(fetchTvSeries.fulfilled, (state, action) => {
        state.fetchedTvSeries = action.payload;
      })
      .addCase(fetchActorsList.fulfilled, (state, action) => {
        state.fetchedActorsList = action.payload;
      })
      .addMatcher(
        isAnyOf(
          fetchBackgroundImages.pending,
          fetchUpcomingMovies.pending,
          fetchTvSeries.pending
        ),
        (state) => {
          state.imagesLoadingStatus = "loading";
          state.upcomingMoviesStatus = "loading";
          state.loadWebsite = false;
        }
      )
      .addMatcher(
        (action) => {
          return (
            action.type === fetchBackgroundImages.fulfilled.type,
            action.type === fetchUpcomingMovies.fulfilled.type,
            action.type === fetchTvSeries.fulfilled.type,
            action.type === fetchActorsList.fulfilled.type
          );
        },
        (state) => {
          state.loadWebsite = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchBackgroundImages.rejected,
          fetchUpcomingMovies.rejected,
          fetchTvSeries.rejected
        ),
        (state) => {
          state.loadWebsite = false;
        }
      )
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = homePageSlice;

export default reducer;
export const { navbarToggle, selectMediaId } = actions;
