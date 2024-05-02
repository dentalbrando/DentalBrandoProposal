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
import budget_smm from "./budgetSmm";
import pageSequence from "./pageSequence";
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
