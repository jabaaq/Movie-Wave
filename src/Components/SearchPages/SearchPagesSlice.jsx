import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { GetUrl } from "../../services/getUrl";
import { movieDbService } from "../../services/movieDbService";
import { useHttp } from "../../services/http.hook";

const {} = movieDbService();
const { request } = useHttp();

const initialState = {
  personName: "",
};

export const SearchPageSlice = createSlice({
  name: "SearchPageSlice",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addDefaultCase(() => {});
  },
});

const { reducer, action } = SearchPageSlice;
export default reducer;
