import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";
import { movieDbService } from "../../services/movieDbService";
import { GetUrl } from "../../services/getUrl";

const { request } = useHttp();
const { _transferTopRatedMovies, _transferUpcomingMovies } = movieDbService();

const initialState = {
  toggleNavigation: false,
  fetchedBackgroundMovies: [],
  imagesLoadingStatus: "idle",
  upcomingMoviesStatus: "idle",
  fetchedUpcomingMovies: [],
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
    console.log(res);
    return res.results.map(_transferUpcomingMovies);
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
      .addCase(fetchBackgroundImages.pending, (state) => {
        state.imagesLoadingStatus = "loading";
      })
      .addCase(fetchBackgroundImages.fulfilled, (state, action) => {
        state.imagesLoadingStatus = "idle";
        state.fetchedBackgroundMovies = action.payload;
      })
      .addCase(fetchBackgroundImages.rejected, (state) => {
        state.imagesLoadingStatus = "error";
      })
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.upcomingMoviesStatus = "loading";
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.upcomingMoviesStatus = "idle";
        state.fetchedUpcomingMovies = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state) => {
        state.upcomingMoviesStatus = "error";
      })
      .addMatcher(
        isAnyOf(fetchBackgroundImages.fulfilled, fetchUpcomingMovies.fulfilled),
        (state) => {
          state.loadWebsite = true;
        }
      )
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = homePageSlice;

export default reducer;
export const { navbarToggle, selectMovie } = actions;
