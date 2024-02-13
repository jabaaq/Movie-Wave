import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";
import { useHttp } from "../../services/http.hook";

const { _transformMediaCards, _transformActorMediaCard } = movieDbService();
const { request } = useHttp();

const initialState = {
  loadSearchedMedia: false,
  searchedMedia: [],
};

export const searchMedia = createAsyncThunk(
  "search/searchMedia",
  async ({ mediaType, mediaName }) => {
    const { searchMedia } = GetUrl();
    const updatedUrl = searchMedia(mediaType, mediaName);
    const res = await request(updatedUrl);

    // return res.results.map(_transformMediaCards);
    return mediaType === "person"
      ? res.results.map(_transformActorMediaCard)
      : res.results.map(_transformMediaCards);
  }
);

export const SearchPageSlice = createSlice({
  name: "SearchPageSlice",
  initialState,
  reducers: {},
  //actions
  extraReducers: (builder) => {
    builder
      .addCase(searchMedia.pending, (state) => {
        state.loadSearchedMedia = false;
      })
      .addCase(searchMedia.fulfilled, (state, action) => {
        state.searchedMedia = action.payload;
        state.loadSearchedMedia = true;
      })
      .addCase(searchMedia.rejected, (state) => {
        state.loadSearchedMedia = false;
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = SearchPageSlice;

export default reducer;
