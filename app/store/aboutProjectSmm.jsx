import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aboutProject: "",
};

const AboutProjectSmm = createSlice({
  name: "about_projectSmm",
  initialState,
  reducers: {
    setAboutProject: (state, action) => {
      state.aboutProject = action.payload;
    },
  },
});

export const { setAboutProject } = AboutProjectSmm.actions;

export default AboutProjectSmm.reducer;
