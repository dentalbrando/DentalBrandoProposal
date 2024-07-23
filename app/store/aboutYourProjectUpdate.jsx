// coverLetterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overview: "",
  functionality: "",
  websiteCMS: "",
  currentText: "",
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
  },
});

export const { setOverviews, setFunctionalities, setWebsiteCMSs, setUpdateCurrentR,setCurrentTextR } =
  aboutYourProjectSlice.actions;

export default aboutYourProjectSlice.reducer;
