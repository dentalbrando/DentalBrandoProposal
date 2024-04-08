"use client";

import AdvertisementPackages from "./proposalPages/Advertisement Packages";
import ContentCreation from "./proposalPages/ContentCreation";
import CoverLetter from "./proposalPages/CoverLetter";
import Marketing from "./proposalPages/Marketing";
import MarketingPackages from "./proposalPages/MarketingPackages";
import MonthlyCalender from "./proposalPages/MonthlyCalender";
import PostDesignPackages from "./proposalPages/PostDesignPackages";
import CoverPage from "./proposalPages/coverPage";

function Designing() {
  return (
    <div className="w-full h-fit bg-gray-200 flex flex-col items-center gap-5">
      <CoverPage />
      <CoverLetter />
      <MonthlyCalender />
      <ContentCreation />
      <Marketing />
      <AdvertisementPackages />
      <PostDesignPackages />
      <MarketingPackages />
    </div>
  );
}
export default Designing;
