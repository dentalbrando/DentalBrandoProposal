import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overview: "The website's sitemap, consisting of its pages, is provided below. Should you wish to make any modifications, kindly contact the project department to request amendments to the sitemap prior to the commencement of the project. Please note that the addition of any new page beyond those outlined below will incur an additional cost, determined based on the functions and layout requirements of the requested pages.",
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
