import { configureStore } from "@reduxjs/toolkit";
import page from "./pageSclice";
import pageUpdate from "./pageScliceUpdate";
import pageSmm from "./pageScliceSmm";
import cover_page from "./coverPageSlice";
import cover_page_Update from "./coverPageUpdate";
import popup from "./popup";
import cover_letter from "./coverLetterSlice";
import cover_letter_Update from "./coverLetterUpdate";
import aboutYourProject from "./aboutYourProject";
import aboutYourProjectUpdate from "./aboutYourProjectUpdate";
import proposedSitemap from "./proposedSitemap";
import proposedSitemap2 from "./proposedSitemap2";
import budget from "./budget";
import budgetUpdate from "./budgetUpdate";
import budget_smm from "./budgetSmm";
import pageSequence from "./pageSequence";
import pageSequenceUpdate from "./pageSequenceUpdate";
import proposedSitemapOverview from "./proposedSitemapOverview";
import cover_letterSmm from "./CoverLetterSmm";
import cover_pageSmm from "./coverPageSmm";
import pageSequenceSmm from "./pageSequenceSmm";
import ad_package from "./AdpackagesSliceSmm";
import post_package from "./PostpackagesSliceSmm";
import marketing_package from "./MarketingpackagesSliceSmm";
import about_projectSmm from "./aboutProjectSmm";
import about_projectSeo from "./aboutProjectSeo";
import budget_seo from "./budgetSeo";
import cover_letterSeo from "./CoverLetterSeo";
import cover_pageSeo from "./coverPageSeo";
import package_seo from "./packagesSliceSeo";
import pageSequenceSeo from "./pageSequenceSeo";
import pageSeo from "./pageScliceSeo";

const store = configureStore({
  reducer: {
    page,
    pageUpdate,
    pageSmm,
    cover_page,
    cover_page_Update,
    popup,
    cover_letter,
    cover_letter_Update,
    aboutYourProject,
    aboutYourProjectUpdate,
    budget,
    budgetUpdate,
    pageSequence,
    pageSequenceUpdate,
    pageSequenceSmm,
    proposedSitemap,
    proposedSitemap2,
    proposedSitemapOverview,
    cover_letterSmm,
    cover_pageSmm,
    ad_package,
    post_package,
    marketing_package,
    budget_smm,
    about_projectSmm,
    about_projectSeo,
    budget_seo,
    cover_letterSeo,
    cover_pageSeo,
    package_seo,
    pageSequenceSeo,
    pageSeo,
  },
});
export default store;
