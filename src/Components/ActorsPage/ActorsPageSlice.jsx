import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";

const { request } = useHttp();

const { _transferActorDetails, _transformActorCredits } = movieDbService();

const initialState = {
  fetchedActorInformation: [],
  fetchedActorCredits: [],
  loadActorPage: false,
};

export const fetchActorInformation = createAsyncThunk(
  "fetch/fetchActorInformation",
  async ({ actorId }) => {
    const { actorInformation } = GetUrl();
    const updatedUrl = actorInformation(actorId);
    const res = await request(updatedUrl);
    return _transferActorDetails(res);
  }
);

export const fetchActorCredits = createAsyncThunk(
  "fetch/fetchActorCredits",
  async ({ actorId }) => {
    const { actorCredits } = GetUrl();
    const updatedUrl = actorCredits(actorId);
    const res = await request(updatedUrl);
    // console.log(res);
    return res.cast.map(_transformActorCredits);
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
      .addCase(fetchActorCredits.fulfilled, (state, action) => {
        state.fetchedActorCredits = action.payload;
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
