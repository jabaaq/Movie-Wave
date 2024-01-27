import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";
import { movieDbService } from "../../services/movieDbService";
import { GetUrl } from "../../services/getUrl";

const { request } = useHttp();
const { _transferTopRatedMovies, _transferUpcomingMovies, _transferTvSeries } =
  movieDbService();

const initialState = {
  toggleNavigation: false,
  fetchedBackgroundMovies: [],
  fetchedUpcomingMovies: [],
  fetchedTvSeries: [],
  imagesLoadingStatus: "idle",
  upcomingMoviesStatus: "idle",
  selectedMovie: null,
  loadWebsite: false,
};

export const fetchBackgroundImages = createAsyncThunk(
  "fetch/fetchBackgroundImages",
  async () => {
    const { topRatedMovies } = GetUrl();
    const res = await request(topRatedMovies);
    return res.results.map(_transferTopRatedMovies);
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
    console.log(res.results);
    return res.results.map(_transferTvSeries);
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
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
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
      .addMatcher(
        isAnyOf(
          fetchBackgroundImages.pending,
          fetchUpcomingMovies.pending,
          fetchTvSeries.pending
        ),
        (state) => {
          state.imagesLoadingStatus = "loading";
          state.upcomingMoviesStatus = "loading";
        }
      )
      .addMatcher(
        isAnyOf(fetchBackgroundImages.fulfilled, fetchUpcomingMovies.fulfilled),
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
export const { navbarToggle, selectMovie } = actions;
