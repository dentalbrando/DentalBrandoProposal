import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientName: "",
  letterText:
    "Thank you for considering Soft Enterprise for your Search Engine Optimization project. We welcome the opportunity to discuss your SEO project in more detail. We want to provide a customized plan tailored to your business requirements and help you elevate your online visibility. Soft Enterprise specializes in creating customized Search Engine Optimization strategies tailored to the unique needs of our clients. The most popular search engines, like Google, Yahoo, and Bing, are used globally to search for the desired businesses, products, and services. \n Businesses use it to target their audiences to sell their products and services. As search engines emerged, so did the idea of using divergent platforms to advertise and reach out to different cohorts of target audiences. We leverage Search Engine to market the products and services of our clients in their niche by micro-targeting audiences with our expertise.  \n   We will work closely with you to understand your Search Engine Optimization goals. Then, we will craft comprehensive strategies that align with your project goals, your brand identity, and how they provide value to your target audience. We manage your entire brand reputation to make your brand image consistent. We will update you on our SEO efforts with clear and detailed performance reports from advanced analytical tools indicating Key Performance Indicators.  \n  We fulfill your project goals through open communication, scheduled meetings, and reporting sessions. We are committed to upholding the highest level of professionalism in our services and value our project partnerships to maintain your project's exclusivity.    We are excited at the prospect of working with you to create a cohesive brand presence for your business on popular Search Engines, helping you succeed in the era of digitalization. Please reach out to schedule a consultation at your earliest convenience. ",
};

const coverLetterSeo = createSlice({
  name: "cover_letterSeo",
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

export const { setClientName, setLetterText } = coverLetterSeo.actions;

export default coverLetterSeo.reducer;
