import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageSequenceSmm: [
    { id: "1", content: "Cover Page", checked: true },
    { id: "2", content: "Table of Contents", checked: true },
    { id: "3", content: "Cover Letter", checked: true },
    { id: "4", content: "About Us", checked: true },
    { id: "5", content: "Project Objective", checked: true },
    { id: "6", content: "Activities", checked: true },
    { id: "7", content: "Monthly Calender", checked: true },
    { id: "8", content: "Content Creation", checked: true },
    { id: "9", content: "Marketing", checked: true },
    { id: "10", content: "Valued Client", checked: true },
    { id: "11", content: "Advertisement Packages", checked: true },
    { id: "12", content: "Post Design Packages", checked: true },
    { id: "13", content: "Marketing Packages", checked: true },
    { id: "14", content: "Estimate", checked: true },
    { id: "15", content: "Terms & Conditions", checked: true },
    { id: "16", content: "Contact", checked: true },
  ],
};

export const pageSequenceSmm = createSlice({
  name: "pageSequenceSmm",
  initialState,
  reducers: {
    setPageSequenceSmm: (state, action) => {
      state.pageSequenceSmm = action.payload;
    },
    resetSquenceSmm: () => initialState,
  },
});

export const { setPageSequenceSmm, resetSquenceSmm } = pageSequenceSmm.actions;

export default pageSequenceSmm.reducer;
