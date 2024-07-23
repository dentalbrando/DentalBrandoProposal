// coverLetterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overview: "",
  functionality: "",
  websiteCMS: "",
  currentText: "",
  updatedText: `We propose updating your current WordPress website while retaining its familiar content management system (CMS). By rebuilding from scratch, we ensure a fresh design and enhanced functionality tailored to your dental practice's needs. WordPress offers user-friendly management, extensive customization with themes and plugins, built-in SEO capabilities, and scalability.`,
  updateCurrent: "Wordpress",
};

const aboutYourProjectSlice = createSlice({
  name: "aboutYourProjectUpdate",
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
    setUpdateCurrentR: (state, action) => {
      state.updateCurrent = action.payload;
    },
    setCurrentTextR: (state, action) => {
      state.currentText = action.payload;
    },
    setUpdateTextR: (state, action) => {
      state.updatedText = action.payload;
    },
  },
});

export const {
  setOverviews,
  setFunctionalities,
  setWebsiteCMSs,
  setUpdateCurrentR,
  setCurrentTextR,
  setUpdateTextR,
} = aboutYourProjectSlice.actions;

export default aboutYourProjectSlice.reducer;
