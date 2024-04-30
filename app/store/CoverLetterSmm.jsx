import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientName: "",
  letterText: "",
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
