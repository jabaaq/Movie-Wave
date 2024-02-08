import { createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../services/http.hook";

const { request } = useHttp();

const initialState = {
  fetchedActorInformation: [],
};

export const ActorPageSlice = createSlice({
  name: "ActorPageSlice",
  initialState,
  reducers: {},
  //   extraReducers: {},
});

const { actions, reducer } = ActorPageSlice;
export default reducer;
