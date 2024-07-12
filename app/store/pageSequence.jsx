import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageSequence: [
    { id: "1", content: "Cover Page", checked: true },
    { id: "2", content: "Table of Contents", checked: true },
    { id: "3", content: "Cover Letter", checked: true },
    { id: "4", content: "Scope of the Project", checked: true },
    // { id: "5", content: "Proposed Sitemap", checked: true },
    { id: "5", content: "About Dental Brando", checked: true },
    { id: "6", content: "Our Process", checked: true },
    { id: "7", content: "Why Dental Brando", checked: true },
    { id: "8", content: "Choose Your Plan", checked: true },
    { id: "9", content: "Thrive with Us", checked: true },
    { id: "10", content: "Terms & Conditions", checked: true },
    { id: "11", content: "Thank You Note", checked: true },
  ],
};

export const pageSequence = createSlice({
  name: "pageSequence",
  initialState,
  reducers: {
    setPageSequence: (state, action) => {
      state.pageSequence = action.payload;
    },
    resetSquence: () => initialState,
  },
});

export const { setPageSequence, resetSquence } = pageSequence.actions;

export default pageSequence.reducer;
