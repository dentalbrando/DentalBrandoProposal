import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overview: "",
};

export const sitemapOverview = createSlice({
  name: "proposedSitemapOverview",
  initialState,
  reducers: {
    setSiteMapOverview: (state, action) => {
      state.overview = action.payload;
    },
  },
});

export const { setSiteMapOverview } = sitemapOverview.actions;

export default sitemapOverview.reducer;
