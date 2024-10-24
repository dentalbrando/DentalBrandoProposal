import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // subHeading: "",
  companyPhoneNumber: "",
  companyAddress: "",
  companyName: "",
  issueDate: "",
  validDate: "",
  companyLogo: "",
};

const coverPageSmm = createSlice({
  name: "cover_pageSmm",
  initialState,
  reducers: {
    // setSubHeading: (state, action) => {
    //   state.subHeading = action.payload;
    // },
    setCompanyPhoneNumber: (state, action) => {
      state.companyPhoneNumber = action.payload;
    },
    setCompanyAddress: (state, action) => {
      state.companyAddress = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setIssueDate: (state, action) => {
      state.issueDate = action.payload;
    },
    setValidDate: (state, action) => {
      state.validDate = action.payload;
    },
    setCompanyLogo: (state, action) => {
      state.companyLogo = action.payload;
    },
  },
});

export const {
  // setSubHeading,
  setCompanyPhoneNumber,
  setCompanyAddress,
  setCompanyName,
  setIssueDate,
  setValidDate,
  setCompanyLogo,
} = coverPageSmm.actions;

export default coverPageSmm.reducer;
