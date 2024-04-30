import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientName: "",
  letterText:
    "We are writing to express our interest in your Social Media Marketing project. We are a team of professionals who are always busy making businesses successful through Social Media Marketing. \n We are confident that we can take your online presence and brand visibility to an elevated level with our esteemed Social Media Marketing services. Soft Enterprise specializes in creating customized Social Media strategies tailored to the unique needs of our clients. \n Social Media acts as a bridge, not only among friends and family but also between businesses and their target. As the social network grew from its emergence, so did the idea to use divergent platforms as a means of advertising and reaching out to different cohorts of target audiences. \n We leverage Social Media to market the products and services of our clients in their niche by micro-targeting audiences with our expertise. We will work closely with you to understand your Social Media Marketing goals. Then we will craft comprehensive strategies by ensuring that they align with your project goals, your brand identity, and how they provide value to your target audience. \n We do your complete brand reputation management to make your brand image consistent across all your social media platforms. We will update you on our Social Media Marketing efforts with clear and detailed performance reports from advanced analytical tools indicating Key Performance Indicators. \n We fulfill your project goals with open project communication, scheduled meetings, and reporting sessions. We are committed to upholding the highest level of professionalism in our services. We value our project partnerships to maintain the exclusivity of your project. \n Thank you for considering Soft Enterprise for your Social Media Marketing needs. We are excited at the prospect of working with you and creating a cohesive social media brand presence for your business to help you succeed in the era of Social Media Marketing. Sincerely",
};

const coverLetterSmm = createSlice({
  name: "cover_letterSmm",
  initialState,
  reducers: {
    setClientName: (state, action) => {
      state.clientName = action.payload;
    },
    setLetterText: (state, action) => {
      state.letterText = action.payload;
    },
  },
});

export const { setClientName, setLetterText } = coverLetterSmm.actions;

export default coverLetterSmm.reducer;
