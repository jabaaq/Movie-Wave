import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";
import { useHttp } from "../../services/http.hook";

const { request } = useHttp();
const { _transferRecommendations } = movieDbService();

const initialState = {
  fetchedFavoritePageRecommendations: [],
  loadFavPage: false,
};

export const fetchFavoritePageRecommendations = createAsyncThunk(
  "fetch/fetchFavoritePageRecommendations",
  async () => {
    const { favoritesRecs } = GetUrl();
    const res = await request(favoritesRecs);
    return res.results.map(_transferRecommendations);
  }
);

export const favoritePageSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritePageRecommendations.pending, (state) => {
        state.loadFavPage = false;
      })
      .addCase(fetchFavoritePageRecommendations.fulfilled, (state, action) => {
        state.fetchedFavoritePageRecommendations = action.payload;
        state.loadFavPage = true;
      })
      .addCase(fetchFavoritePageRecommendations.rejected, (state) => {
        state.fetchedFavoritePageRecommendations = false;
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = favoritePageSlice;

export default reducer;
