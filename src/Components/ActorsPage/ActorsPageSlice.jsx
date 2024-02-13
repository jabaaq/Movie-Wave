import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";

const { request } = useHttp();

const { _transferActorDetails, _transformMediaCards } = movieDbService();

const initialState = {
  fetchedActorInformation: [],
  fetchedActorCredits: [],
  loadActorPage: false,
};

export const fetchActorInformation = createAsyncThunk(
  "fetch/fetchActorInformation",
  async ({ personId }) => {
    const { actorInformation } = GetUrl();
    const updatedUrl = actorInformation(personId);
    console.log(updatedUrl);
    const res = await request(updatedUrl);
    return _transferActorDetails(res);
  }
);

export const fetchActorCredits = createAsyncThunk(
  "fetch/fetchActorCredits",
  async ({ personId }) => {
    const { actorCredits } = GetUrl();
    const updatedUrl = actorCredits(personId);
    console.log(updatedUrl);
    const res = await request(updatedUrl);
    return res.cast.map(_transformMediaCards);
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
        console.log(action.payload);
      })
      .addCase(fetchActorCredits.fulfilled, (state, action) => {
        state.fetchedActorCredits = action.payload;
        console.log(action.payload);
      })
      .addMatcher(
        isAnyOf(fetchActorInformation.pending, fetchActorCredits.pending),
        (state) => {
          state.loadActorPage = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchActorInformation.fulfilled, fetchActorCredits.fulfilled),
        (state) => {
          state.loadActorPage = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchActorInformation.rejected, fetchActorCredits.rejected),
        (state) => {
          state.loadActorPage = false;
        }
      );
  },
});

const { actions, reducer } = ActorPageSlice;
export default reducer;
