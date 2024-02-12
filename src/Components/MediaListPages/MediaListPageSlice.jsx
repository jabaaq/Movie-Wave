import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";
import { useHttp } from "../../services/http.hook";

const { request } = useHttp();

const { _transformMediaCards } = movieDbService();

const initialState = {
  loadMoviesHomePage: false,
  fetchedMediaList: [],
  pageNum: 1,
};

export const fetchMediaList = createAsyncThunk(
  "fetch/fetchMediaList",
  async ({ mediaType, pageNum }) => {
    const { mediaList } = GetUrl();
    const updatedUrl = mediaList(mediaType, pageNum);
    const res = await request(updatedUrl);
    const transformedList = res.results.map(_transformMediaCards);
    const totalPages = res.total_pages;
    return [transformedList, totalPages];
  }
);

export const MediaListSlice = createSlice({
  name: "MediaListSlice",
  initialState,
  reducers: {
    handleChangePageNum: (state, action) => {
      state.pageNum = action.payload;
    },
  },
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

const { reducer, actions } = MediaListSlice;
export const { handleChangePageNum } = actions;
export default reducer;
