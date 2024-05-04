import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientName: "",
  letterText: "",
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
