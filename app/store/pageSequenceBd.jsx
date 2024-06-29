import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageSequenceBd: [
    { id: "1", content: "Cover Page", checked: true },
    { id: "2", content: "Table of Contents", checked: true },
    { id: "3", content: "Cover Letter", checked: true },
    { id: "4", content: "About your Project", checked: true },
    { id: "5", content: "Proposed Sitemap", checked: true },
    { id: "6", content: "About Us", checked: true },
    { id: "7", content: "Our Process", checked: true },
    { id: "8", content: "Why Soft Enterprise", checked: true },
    { id: "9", content: "Estimate Budget", checked: true },
    { id: "10", content: "Terms & conditions", checked: true },
    { id: "11", content: "Last Page", checked: true },
  ],
};

export const pageSequenceBd = createSlice({
  name: "pageSequenceBd",
  initialState,
  reducers: {
    setPageSequenceBd: (state, action) => {
      state.pageSequenceBd = action.payload;
    },
    resetSquence: () => initialState,
  },
});

export const { setPageSequenceBd, resetSquence } = pageSequenceBd.actions;

export default pageSequenceBd.reducer;
