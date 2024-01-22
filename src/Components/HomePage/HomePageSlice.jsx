import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";
import { movieDbService } from "../../services/movieDbService";
import { GetUrl } from "../../services/getUrl";

const { request } = useHttp();
const { _transferTopRatedMovies } = movieDbService();

const initialState = {
  toggleNavigation: false,
  fetchedBackgroundMovies: [],
  imagesLoadingStatus: "idle",
};

export const fetchBackgroundImages = createAsyncThunk(
  "fetch/fetchBackgroundImages",
  async () => {
    const { topRatedMovies } = GetUrl();
    const res = await request(topRatedMovies);
    return res.results.map(_transferTopRatedMovies);
  }
);

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    //Actions
    navbarToggle: (state) => {
      state.toggleNavigation = !state.toggleNavigation;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBackgroundImages.pending, (state) => {
        state.imagesLoadingStatus = "loading";
        console.log("loading");
      })
      .addCase(fetchBackgroundImages.fulfilled, (state, action) => {
        state.imagesLoadingStatus = "idle";
        state.fetchedBackgroundMovies = action.payload;
        console.log("fulfilled");
      })
      .addCase(fetchBackgroundImages.rejected, (state) => {
        state.imagesLoadingStatus = "error";
        console.log("error");
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = navbarSlice;

export default reducer;
export const { navbarToggle, fetchedBackgroundMovies } = actions;
