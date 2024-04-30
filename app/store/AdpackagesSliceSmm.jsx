import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basic: "5,999",
  standard: "9,999",
  premium: "14,999",
};

const AdPackageScliceSmm = createSlice({
  name: "ad_package",
  initialState,
  reducers: {
    setBasic: (state, action) => {
      state.basic = action.payload;
    },
    setStandard: (state, action) => {
      state.standard = action.payload;
    },
    setPremium: (state, action) => {
      state.premium = action.payload;
    },
  },
});

export const { setBasic, setStandard, setPremium } = AdPackageScliceSmm.actions;

export default AdPackageScliceSmm.reducer;
