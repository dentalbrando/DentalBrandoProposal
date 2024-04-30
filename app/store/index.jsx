import { configureStore } from "@reduxjs/toolkit";
import page from "./pageSclice";
import pageSmm from "./pageScliceSmm";
import cover_page from "./coverPageSlice";
import popup from "./popup";
import cover_letter from "./coverLetterSlice";
import aboutYourProject from "./aboutYourProject";
import proposedSitemap from "./proposedSitemap";
import proposedSitemap2 from "./proposedSitemap2";
import budget from "./budget";
import pageSequence from "./pageSequence";
import proposedSitemapOverview from "./proposedSitemapOverview";
import cover_letterSmm from "./CoverLetterSmm";
import cover_pageSmm from "./coverPageSmm";
import pageSequenceSmm from "./pageSequenceSmm";
const store = configureStore({
  reducer: {
    page,
    pageSmm,
    cover_page,
    popup,
    cover_letter,
    aboutYourProject,
    proposedSitemap,
    budget,
    pageSequence,
    pageSequenceSmm,
    proposedSitemap2,
    proposedSitemapOverview,
    cover_letterSmm,
    cover_pageSmm,
  },
});
export default store;
