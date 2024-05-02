import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basic: "39,999",
  standard: "59,999",
  premium: "79,999",
};

const AdPackageScliceSeo = createSlice({
  name: "package_seo",
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

export const { setBasic, setStandard, setPremium } = AdPackageScliceSeo.actions;

export default AdPackageScliceSeo.reducer;
