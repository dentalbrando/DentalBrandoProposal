// coverLetterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overview: "",
  functionality: "",
  websiteCMS: "",
};

const aboutYourProjectBdSlice = createSlice({
  name: "aboutYourProjectBd",
  initialState,
  reducers: {
    setOverviews: (state, action) => {
      state.overview = action.payload;
    },
    setFunctionalities: (state, action) => {
      state.functionality = action.payload;
    },
    setWebsiteCMSs: (state, action) => {
      state.websiteCMS = action.payload;
    },
  },
});

export const { setOverviews, setFunctionalities, setWebsiteCMSs } =
  aboutYourProjectBdSlice.actions;

export default aboutYourProjectBdSlice.reducer;
