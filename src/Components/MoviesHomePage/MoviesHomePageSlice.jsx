import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";
import { useHttp } from "../../services/http.hook";

const { request } = useHttp();

const { _transformMediaCards } = movieDbService();

const initialState = {
  loadMoviesHomePage: false,
  fetchedMediaList: [],
};

export const fetchMediaList = createAsyncThunk(
  "fetch/fetchMediaList",
  async ({ mediaType }) => {
    const { mediaList } = GetUrl();
    const updatedUrl = mediaList(mediaType);
    const res = await request(updatedUrl);
    return res.results.map(_transformMediaCards);
  }
);

export const MovieHomePageSlice = createSlice({
  name: "MovieHomePageSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMediaList.pending, (state) => {
        state.loadMoviesHomePage = false;
      })
      .addCase(fetchMediaList.fulfilled, (state, action) => {
        state.fetchedMediaList = action.payload;
        state.loadMoviesHomePage = true;
      })
      .addCase(fetchMediaList.rejected, (state) => {
        state.loadMoviesHomePage = false;
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, action } = MovieHomePageSlice;
export default reducer;
