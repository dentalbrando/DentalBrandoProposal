import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basic: "19,999",
  standard: "39,999",
  premium: "59,999",
};

const MarketingPackageScliceSmm = createSlice({
  name: "marketing_package",
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

export const { setBasic, setStandard, setPremium } =
  MarketingPackageScliceSmm.actions;

export default MarketingPackageScliceSmm.reducer;
