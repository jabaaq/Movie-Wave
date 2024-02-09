import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";

const { request } = useHttp();

const { _transferActorDetails } = movieDbService();

const initialState = {
  fetchedActorInformation: [],
  loadActorPage: false,
};

export const fetchActorInformation = createAsyncThunk(
  "fetch/fetchActorInformation",
  async ({ actorId }) => {
    const { actorInformation } = GetUrl();
    const updatedUrl = actorInformation(actorId);
    const res = await request(updatedUrl);
    console.log(res);
    return _transferActorDetails(res);
  }
);

export const ActorPageSlice = createSlice({
  name: "ActorPageSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActorInformation.fulfilled, (state, action) => {
        state.fetchedActorInformation = action.payload;
      })
      .addMatcher(isAnyOf(fetchActorInformation.pending), (state) => {
        state.loadActorPage = false;
      })
      .addMatcher(isAnyOf(fetchActorInformation.fulfilled), (state) => {
        state.loadActorPage = true;
      })
      .addMatcher(isAnyOf(fetchActorInformation.rejected), (state) => {
        state.loadActorPage = false;
      });
  },
});

const { actions, reducer } = ActorPageSlice;
export default reducer;
