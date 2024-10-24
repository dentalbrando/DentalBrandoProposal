import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basic: "7,999",
  standard: "12,999",
  premium: "19,999",
  basicCurrency: "PKR",
};

const PostPackageScliceSmm = createSlice({
  name: "post_package",
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
    setBasicCurrency: (state, action) => {
      state.basicCurrency = action.payload;
    },
  },
});

export const { setBasic, setStandard, setPremium, setBasicCurrency } =
  PostPackageScliceSmm.actions;

export default PostPackageScliceSmm.reducer;
