import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aboutProject: "default",
};

const AboutProjectSeo = createSlice({
  name: "about_projectSeo",
  initialState,
  reducers: {
    setAboutProject: (state, action) => {
      state.aboutProject = action.payload;
    },
  },
});

export const { setAboutProject } = AboutProjectSeo.actions;

export default AboutProjectSeo.reducer;
