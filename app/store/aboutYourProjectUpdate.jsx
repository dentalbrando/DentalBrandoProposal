// coverLetterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overview: "",
  functionality: "",
  websiteCMS: "",
  updateCurrent: "",
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
  },
});

export const { setOverviews, setFunctionalities, setWebsiteCMSs, setUpdateCurrentR } =
  aboutYourProjectSlice.actions;

export default aboutYourProjectSlice.reducer;
