// coverLetterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  letterText: "",
  clientName: "",
  letterType: "web_dev",
};

const coverLetterSlice = createSlice({
  name: "cover_letter",
  initialState,
  reducers: {
    setLetterText: (state, action) => {
      state.letterText = action.payload;
    },
    setClientName: (state, action) => {
      state.clientName = action.payload;
    },
    setLetterType: (state, action) => {
      state.letterType = action.payload;
    },
  },
});

export const { setLetterText, setClientName, setLetterType } =
  coverLetterSlice.actions;

export default coverLetterSlice.reducer;
