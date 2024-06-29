import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sitemap: [],
};

export const sitemap = createSlice({
  name: "proposedSitemapBd",
  initialState,
  reducers: {
    setSiteMap: (state, action) => {
      state.sitemap = action.payload;
    },
    deleteSiteMap: (state, action) => {
      const userId = action.payload;
      return state.filter((user) => user._id !== userId);
    },
    updateSiteMap: (state, action) => {
      const updatedFormId = action.payload;
      return { ...state, formId: updatedFormId };
    },

    resetSiteMap: () => initialState,
  },
});

export const {
  setSiteMap,
  deleteSiteMap,
  setRootName,
  updateSiteMap,
  resetSiteMap,
} = sitemap.actions;

export default sitemap.reducer;
