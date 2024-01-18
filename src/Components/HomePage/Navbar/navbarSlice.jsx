import { createSlice } from "@reduxjs/toolkit";

const initialState = { toggleNavigation: false };

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    //Actions
    navbarToggle: (state) => {
      state.toggleNavigation = !state.toggleNavigation;
    },
  },
});

const { actions, reducer } = navbarSlice;

export default reducer;
export const { navbarToggle } = actions;
