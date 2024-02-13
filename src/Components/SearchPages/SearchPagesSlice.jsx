import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";
import { useHttp } from "../../services/http.hook";

const {} = movieDbService();
const { request } = useHttp();

const initialState = {
  mediaName: [],
  mediaType: [],
  loadSearchedMedia: false,
};

export const searchMedia = createAsyncThunk(
  "search/searchMedia",
  async ({ mediaType, mediaName }) => {
    const { searchMedia } = GetUrl();
    const updatedUrl = searchMedia(mediaType, mediaName);
    console.log(updatedUrl);
    const res = await request(updatedUrl);
    console.log(res);
    return res;
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
        console.log("pending");
      })
      .addCase(searchMedia.fulfilled, (state, action) => {
        state.mediaName = action.payload;
        state.loadSearchedMedia = true;
        console.log("fulfilled");
      })
      .addCase(searchMedia.rejected, (state) => {
        state.loadSearchedMedia = false;
        console.log("nope");
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = SearchPageSlice;

export default reducer;
