import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aboutProject:
    "Our specialized expertise in Seo will enhance your brand’s social media presence. We aim to bring you business by targeting your sophisticated audience interested in the residential apartments of Vista Cornard Tower. We will involve multiples social media platforms, like Facebook, Instagram, LinkedIn, Twitter, Pinterest etc, for marketing your mall and residential apartments. We believe that powerful content creation is the backbone of marketing success, so we will create engaging content that showcases the luxury mall, amenities, and lifestyle offered by you..",
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
