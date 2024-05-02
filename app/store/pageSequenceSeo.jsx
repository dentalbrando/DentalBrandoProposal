import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageSequenceSeo: [
    { id: "1", content: "Cover Page", checked: true },
    { id: "2", content: "Table of Contents", checked: true },
    { id: "3", content: "Cover Letter", checked: true },
    { id: "4", content: "About Us", checked: true },
    { id: "5", content: "Project Objective", checked: true },
    { id: "6", content: "Activities", checked: true },
    { id: "7", content: "Keyword Research", checked: true },
    { id: "8", content: "On-page Seo", checked: true },
    { id: "9", content: "Link Building", checked: true },
    { id: "10", content: "Valued Client", checked: true },
    { id: "11", content: "Packages", checked: true },
    { id: "12", content: "Estimate", checked: true },
    { id: "13", content: "Terms & Conditions", checked: true },
    { id: "14", content: "Contact", checked: true },
  ],
};

export const pageSequenceSeo = createSlice({
  name: "pageSequenceSeo",
  initialState,
  reducers: {
    setPageSequenceSeo: (state, action) => {
      state.pageSequenceSeo = action.payload;
    },
    resetSquenceSeo: () => initialState,
  },
});

export const { setPageSequenceSeo, resetSquenceSeo } = pageSequenceSeo.actions;

export default pageSequenceSeo.reducer;
